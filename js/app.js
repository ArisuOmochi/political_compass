// --- State Management ---
const state = {
    // Game Flow
    questionQueue: [],
    currentQuestion: null,
    history: [], // Stores snapshots for Undo
    categoryCounts: { economy: 0, politics: 0, culture: 0, philosophy: 0 },
    isExtreme: false,
    
    // Map State
    coordinates: { x: 0, y: 0 },
    selectedEmoji: null,
    
    // Visuals
    zoomLevel: 2.5,
    isDragging: false,
    startPan: { x: 0, y: 0 },
    currentPan: { x: 0, y: 0 },
    initialPan: { x: 0, y: 0 }
};

// --- Constants ---
const SCORE_MULTIPLIER = 5.0; // Significantly increased to ensure movement
const EXTREME_MULTIPLIER = 5.0; // Extreme mode multiplier (very fast movement)
const MIN_QUESTIONS_PER_CAT = 4; // Unlock threshold

// --- DOM Elements ---
const elements = {
    screens: {
        start: document.getElementById('start-screen'),
        quiz: document.getElementById('quiz-screen'),
        result: document.getElementById('result-screen')
    },
    start: {
        emojiGrid: document.getElementById('emoji-selector'),
        startBtn: document.getElementById('start-btn')
    },
    quiz: {
        mapContent: document.getElementById('map-content'),
        mapViewport: document.getElementById('map-viewport'),
        playerMarker: document.getElementById('player-marker'),
        questionText: document.getElementById('question-text'),
        answersList: document.getElementById('answers-list'),
        progressFill: document.getElementById('progress-fill'),
        zoomInBtn: document.getElementById('zoom-in'),
        zoomOutBtn: document.getElementById('zoom-out'),
        resetViewBtn: document.getElementById('reset-view'),
        // Controls
        prevBtn: document.getElementById('prev-btn'),
        endEarlyBtn: document.getElementById('end-early-btn'),
        extremeBtn: document.getElementById('extreme-mode-btn')
    },
    result: {
        name: document.getElementById('result-ideology-name'),
        ballImage: document.getElementById('result-ball-image'),
        desc: document.getElementById('result-desc'),
        people: document.getElementById('result-people'),
        books: document.getElementById('result-books'),
        quotes: document.getElementById('result-quotes')
    }
};

// --- Initialization ---
function init() {
    // Set map dimensions to match image natural size
    elements.quiz.mapContent.style.width = `${DATA.map.width}px`;
    elements.quiz.mapContent.style.height = `${DATA.map.height}px`;

    renderEmojiSelector();
    setupEventListeners();
}

function renderEmojiSelector() {
    DATA.emojis.forEach(emoji => {
        const el = document.createElement('div');
        el.className = 'emoji-option';
        el.textContent = emoji;
        el.onclick = () => selectEmoji(emoji, el);
        elements.start.emojiGrid.appendChild(el);
    });
}

function selectEmoji(emoji, element) {
    document.querySelectorAll('.emoji-option').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    state.selectedEmoji = emoji;
    elements.start.startBtn.disabled = false;
}

// --- Game Logic: Setup & Queue ---

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function buildQuestionQueue() {
    // Deep copy and shuffle categories
    const econ = shuffleArray([...DATA.categories.economy]);
    const pol = shuffleArray([...DATA.categories.politics]);
    const cul = shuffleArray([...DATA.categories.culture]);
    const phil = shuffleArray([...DATA.categories.philosophy]);

    state.questionQueue = [];
    
    // Round-Robin Interleaving
    const maxLen = Math.max(econ.length, pol.length, cul.length, phil.length);
    for (let i = 0; i < maxLen; i++) {
        if (i < econ.length) { econ[i].category = 'economy'; state.questionQueue.push(econ[i]); }
        if (i < pol.length) { pol[i].category = 'politics'; state.questionQueue.push(pol[i]); }
        if (i < cul.length) { cul[i].category = 'culture'; state.questionQueue.push(cul[i]); }
        if (i < phil.length) { phil[i].category = 'philosophy'; state.questionQueue.push(phil[i]); }
    }
}

function startQuiz() {
    if (!state.selectedEmoji) return;
    
    buildQuestionQueue();
    state.coordinates = { x: 0, y: 0 };
    state.history = [];
    state.categoryCounts = { economy: 0, politics: 0, culture: 0, philosophy: 0 };
    state.isExtreme = false;
    
    elements.quiz.playerMarker.textContent = state.selectedEmoji;
    switchScreen('quiz');
    
    // Init Map
    state.zoomLevel = 1.6; // Adjusted to show approx 3x3 grid area
    updateMapDisplay();
    setTimeout(centerMapOnPlayer, 100);

    loadNextQuestion();
}

// --- Game Logic: Question Handling ---

function loadNextQuestion() {
    if (state.questionQueue.length === 0) {
        finishQuiz();
        return;
    }

    // Get next question
    const q = state.questionQueue[0]; // Peek at next
    state.currentQuestion = q;

    // Update UI
    elements.quiz.questionText.textContent = q.text;
    
    // Visual progress (approximate since queue changes)
    const totalDone = state.history.length;
    // Just a visual bar that fills up somewhat
    const progress = Math.min(100, (totalDone / 100) * 100); 
    elements.quiz.progressFill.style.width = `${progress}%`;

    // Render Answers
    elements.quiz.answersList.innerHTML = '';
    q.answers.forEach(answer => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer.text;
        btn.onclick = () => handleAnswer(answer);
        elements.quiz.answersList.appendChild(btn);
    });

    updateControls();
}

function handleAnswer(answer) {
    // 1. Push current state to History (for undo)
    state.history.push({
        coordinates: { ...state.coordinates },
        questionQueue: [...state.questionQueue], // Snapshot of queue (expensive but safe)
        categoryCounts: { ...state.categoryCounts },
        isExtreme: state.isExtreme
    });

    // 2. Remove current question from queue
    const q = state.questionQueue.shift();

    // 3. Update Stats
    if (!state.isExtreme && q.category) {
        state.categoryCounts[q.category]++;
    }

    // 4. Calculate Movement
    const multiplier = state.isExtreme ? EXTREME_MULTIPLIER : SCORE_MULTIPLIER;
    let dx = answer.effect.x * multiplier;
    let dy = answer.effect.y * multiplier;

    let newX = state.coordinates.x + dx;
    let newY = state.coordinates.y + dy;

    // 5. Boundary Logic
    if (!state.isExtreme) {
        // Trap in 12x12 grid (approx +/- 17) unless entering Extreme Mode
        const LIMIT = 17;
        newX = Math.max(-LIMIT, Math.min(LIMIT, newX));
        newY = Math.max(-LIMIT, Math.min(LIMIT, newY));
    } else {
        // Extreme mode allows reaching +/- 20 (Off Compass)
        const OUTER = 20;
        newX = Math.max(-OUTER, Math.min(OUTER, newX));
        newY = Math.max(-OUTER, Math.min(OUTER, newY));
    }

    state.coordinates.x = newX;
    state.coordinates.y = newY;

    // 6. Update View
    updateMapDisplay();
    centerMapOnPlayer();

    // 7. Next
    loadNextQuestion();
}

function goBack() {
    if (state.history.length === 0) return;

    // Restore State
    const prevState = state.history.pop();
    state.coordinates = prevState.coordinates;
    state.questionQueue = prevState.questionQueue;
    state.categoryCounts = prevState.categoryCounts;
    state.isExtreme = prevState.isExtreme;

    updateMapDisplay();
    centerMapOnPlayer();
    loadNextQuestion();
}

function updateControls() {
    // Back Button
    elements.quiz.prevBtn.disabled = (state.history.length === 0);

    // Check Unlock Conditions
    const unlocked = isUnlockConditionMet();

    if (unlocked && !state.isExtreme) {
        elements.quiz.endEarlyBtn.classList.remove('hidden');
        elements.quiz.extremeBtn.classList.remove('hidden');
    } else {
        elements.quiz.endEarlyBtn.classList.add('hidden');
        elements.quiz.extremeBtn.classList.add('hidden');
    }
}

function enterExtremeMode() {
    if (!isUnlockConditionMet()) return;

    if (!confirm("警告：极端模式将包含非常规、反直觉甚至令人不适的极端思想实验。坐标移动速度将大幅加快，可能会让你掉出政治罗盘的正常范围。\n\n你确定要从“正常人”变成“魔怔人”吗？")) {
        return;
    }

    state.isExtreme = true;
    
    // Swap Queue
    // We discard remaining normal questions and load extreme ones
    state.questionQueue = shuffleArray([...DATA.extreme_questions]);
    
    // Force Map Style change? (Optional, maybe shake effect or color shift)
    // For now just load next
    loadNextQuestion();
    
    // Hide buttons as we are now IN extreme mode
    elements.quiz.extremeBtn.classList.add('hidden'); 
}

// --- Map Visuals ---

function coordinateToPixel(x, y) {
    const pixelX = DATA.map.originPixel.x + (x * DATA.map.pixelsPerUnit.x);
    const pixelY = DATA.map.originPixel.y - (y * DATA.map.pixelsPerUnit.y);
    return { x: pixelX, y: pixelY };
}

function updateMapDisplay() {
    const pos = coordinateToPixel(state.coordinates.x, state.coordinates.y);
    elements.quiz.playerMarker.style.left = `${pos.x}px`;
    elements.quiz.playerMarker.style.top = `${pos.y}px`;
}

function centerMapOnPlayer() {
    const pos = coordinateToPixel(state.coordinates.x, state.coordinates.y);
    const viewportW = elements.quiz.mapViewport.clientWidth;
    const viewportH = elements.quiz.mapViewport.clientHeight;
    
    state.currentPan.x = (viewportW / 2) - (pos.x * state.zoomLevel);
    state.currentPan.y = (viewportH / 2) - (pos.y * state.zoomLevel);

    applyMapTransform();
}

function applyMapTransform() {
    elements.quiz.mapContent.style.transform = `translate(${state.currentPan.x}px, ${state.currentPan.y}px) scale(${state.zoomLevel})`;
    elements.quiz.mapContent.style.transformOrigin = '0 0';
}

function handleZoom(delta) {
    const newZoom = Math.max(0.2, Math.min(3, state.zoomLevel + delta));
    if (newZoom !== state.zoomLevel) {
        state.zoomLevel = newZoom;
        centerMapOnPlayer();
    }
}

// --- Dragging ---
function startDrag(e) {
    state.isDragging = true;
    state.startPan.x = e.clientX || e.touches[0].clientX;
    state.startPan.y = e.clientY || e.touches[0].clientY;
    state.initialPan.x = state.currentPan.x;
    state.initialPan.y = state.currentPan.y;
    elements.quiz.mapViewport.style.cursor = 'grabbing';
}

function drag(e) {
    if (!state.isDragging) return;
    e.preventDefault();
    const clientX = e.clientX || e.touches[0].clientX;
    const clientY = e.clientY || e.touches[0].clientY;
    const dx = clientX - state.startPan.x;
    const dy = clientY - state.startPan.y;
    state.currentPan.x = state.initialPan.x + dx;
    state.currentPan.y = state.initialPan.y + dy;
    applyMapTransform();
}

function stopDrag() {
    state.isDragging = false;
    elements.quiz.mapViewport.style.cursor = 'grab';
}

// --- Results ---

function finishQuiz() {
    // Safety check
    if (state.questionQueue.length > 0 && !isUnlockConditionMet()) {
        console.warn("Attempted to finish early without meeting conditions");
        return;
    }
    switchScreen('result');
    calculateResult();
}

function isUnlockConditionMet() {
    const cats = state.categoryCounts;
    return (cats.economy >= MIN_QUESTIONS_PER_CAT &&
            cats.politics >= MIN_QUESTIONS_PER_CAT &&
            cats.culture >= MIN_QUESTIONS_PER_CAT &&
            cats.philosophy >= MIN_QUESTIONS_PER_CAT);
}

function calculateResult() {
    // 1. Prepare candidates from DATA.results (New Grid System)
    let closestIdeology = null;
    let minDistance = Infinity;
    let closestKey = "";
    
    // Helper to calculate center coordinate of a grid key
    const getGridCenter = (key) => {
        if (key.startsWith("off_")) {
            if (key === "off_auth_left") return { x: -21, y: 21 };
            if (key === "off_auth_center") return { x: 0, y: 21 };
            if (key === "off_auth_right") return { x: 21, y: 21 };
            if (key === "off_left") return { x: -21, y: 0 };
            if (key === "off_right") return { x: 21, y: 0 };
            if (key === "off_lib_left") return { x: -21, y: -21 };
            if (key === "off_lib_center") return { x: 0, y: -21 };
            if (key === "off_lib_right") return { x: 21, y: -21 };
            return { x: 0, y: 0 }; // Fallback
        } else {
            // Format "row,col" (0-11, 0-11)
            // Row 0 is Top (+16.5), Row 11 is Bottom (-16.5)
            // Col 0 is Left (-16.5), Col 11 is Right (+16.5)
            const parts = key.split(',');
            if (parts.length === 2) {
                const r = parseInt(parts[0]);
                const c = parseInt(parts[1]);
                // Cell Center = Start + Index*3 + 1.5
                // X starts at -18
                // Y starts at +18 (downwards)
                const cx = -18 + (c * 3) + 1.5;
                const cy = 18 - (r * 3) - 1.5;
                return { x: cx, y: cy };
            }
            return { x: 0, y: 0 }; // Fallback
        }
    };

    // Iterate over keys in DATA.results object
    for (let key in DATA.results) {
        const center = getGridCenter(key);
        const dx = state.coordinates.x - center.x;
        const dy = state.coordinates.y - center.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        if (dist < minDistance) {
            minDistance = dist;
            closestIdeology = DATA.results[key];
            closestKey = key;
        }
    }

    // Attach coordinates to the ideology object for display logic (cropping)
    if (closestIdeology) {
        const center = getGridCenter(closestKey);
        // Create a shallow copy so we don't mutate the original constant data permanently with dynamic coords if called multiple times
        const resultObj = {
            ...closestIdeology,
            x: center.x,
            y: center.y
        };
        displayResult(resultObj);
    }
}

function displayResult(ideology) {
    if (!ideology) return;

    elements.result.name.textContent = ideology.name;
    elements.result.desc.textContent = ideology.desc;

    // --- Image Cropping Logic ---
    // Calculate pixel position of the matched ideology's center (the ball)
    const pixelPos = coordinateToPixel(ideology.x, ideology.y);
    
    // Scale factors from DATA
    const scaleX = DATA.map.pixelsPerUnit.x;
    // Grid cell is 3 units wide. We want to zoom to show approx 1 cell.
    const cropWidth = 3.0 * scaleX;
    // Container is 200px. Calculate zoom to fit the cell width into the container.
    const zoomFactor = 200 / cropWidth;
    
    const bgWidth = DATA.map.width * zoomFactor;
    const bgHeight = DATA.map.height * zoomFactor;
    
    // Offset to center the ball in the 200x200 container
    const bgPosX = 100 - (pixelPos.x * zoomFactor);
    const bgPosY = 100 - (pixelPos.y * zoomFactor);

    elements.result.ballImage.style.backgroundImage = `url('compass.jpg')`;
    elements.result.ballImage.style.backgroundSize = `${bgWidth}px ${bgHeight}px`;
    elements.result.ballImage.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;

    // Lists
    elements.result.people.innerHTML = ideology.people.map(p => `<li>${p}</li>`).join('');
    elements.result.books.innerHTML = ideology.books.map(b => `<li>${b}</li>`).join('');
    elements.result.quotes.innerHTML = ideology.quotes.map(q => `
        <div class="quote-item">
            <p>"${q.text}"</p>
            <p>${q.trans}</p>
            <span class="quote-source">—— ${q.source}</span>
        </div>
    `).join('');
}

// --- Utils & Events ---

function switchScreen(screenName) {
    Object.values(elements.screens).forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('active');
    });
    elements.screens[screenName].classList.remove('hidden');
    elements.screens[screenName].classList.add('active');
}

function setupEventListeners() {
    elements.start.startBtn.addEventListener('click', startQuiz);
    
    // Map Controls
    elements.quiz.zoomInBtn.addEventListener('click', () => handleZoom(0.2));
    elements.quiz.zoomOutBtn.addEventListener('click', () => handleZoom(-0.2));
    elements.quiz.resetViewBtn.addEventListener('click', centerMapOnPlayer);
    
    // Quiz Controls
    elements.quiz.prevBtn.addEventListener('click', goBack);
    elements.quiz.endEarlyBtn.addEventListener('click', finishQuiz);
    elements.quiz.extremeBtn.addEventListener('click', enterExtremeMode);

    // Dragging
    const vp = elements.quiz.mapViewport;
    vp.addEventListener('mousedown', startDrag);
    window.addEventListener('mousemove', drag);
    window.addEventListener('mouseup', stopDrag);
    vp.addEventListener('touchstart', startDrag);
    window.addEventListener('touchmove', drag);
    window.addEventListener('touchend', stopDrag);
}

// Boot
init();