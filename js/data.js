const DATA = {
    emojis: ["😐", "🧐", "🤠", "😎", "🤔", "🤡", "🤖", "👽", "😈", "😇"],
    map: {
        width: 2959,
        height: 3530,
        minX: -20,
        maxX: 20,
        minY: -20,
        maxY: 20,
        originPixel: { x: 1468, y: 1730 },
        pixelsPerUnit: { x: 65, y: 86.5 } 
    },
    
    // 详细的阵营数据 (Sampled for key positions)
    results: {
        // --- Off Compass (The Outer 8) ---
        "off_auth_left": { 
            name: "蜂群思维 (Hive-Mind)", 
            desc: "蜂群思维集产主义代表了集体主义的终极形态。在这里，个体被视为无意义的细胞，唯一的目的是服务于宏大的集体意识。没有隐私，没有私产，甚至没有独立的思想。所有人都共享同一个意志，任何分离的企图都被视为癌变。效率达到了极致，但人性的光辉也随之熄灭。", 
            people: ["博格女王 (Star Trek)", "联合体 (Rick & Morty)", "虫群主宰 (StarCraft)"], 
            books: ["《1984》(作为操作手册)", "《美丽新世界》", "《我们》"], 
            quotes: [
                {text:"Resistance is futile.", trans:"抵抗是徒劳的。", source:"The Borg"},
                {text:"Freedom is irrelevant. Self-determination is irrelevant.", trans:"自由是不相关的，自决是不相关的。", source:"Seven of Nine"},
                {text:"We are Legion.", trans:"我们要来了（我们是军团）。", source:"Bible / Anonymous"}
            ] 
        },
        "off_auth_center": { 
            name: "英社 (Ingsoc)", 
            desc: "英社（英国社会主义）是乔治·奥威尔笔下极权主义的极致体现。在这里，真理由党来定义，过去可以被随意篡改。双重思想让你同时接受两个矛盾的观点，新话限制了你的思维边界。老大哥无处不在，不仅仅在屏幕上，更在你的脑海里。战争即和平，自由即奴役，无知即力量。", 
            people: ["老大哥 (Big Brother)", "奥布莱恩 (O'Brien)", "艾曼纽·果尔德施坦因 (Emmanuel Goldstein)"], 
            books: ["《1984》", "《寡头政治集体主义的理论与实践》", "《动物庄园》"], 
            quotes: [
                {text:"War is Peace. Freedom is Slavery. Ignorance is Strength.", trans:"战争即和平，自由即奴役，无知即力量。", source:"The Party"},
                {text:"If you want a picture of the future, imagine a boot stamping on a human face—forever.", trans:"如果你想要一幅未来的图景，那就想象一只靴子踩在人脸上——永远。", source:"George Orwell"},
                {text:"Big Brother is watching you.", trans:"老大哥在看着你。", source:"Propaganda"}
            ] 
        },
        "off_auth_right": { 
            name: "社会达尔文主义 (Kraterocracy)", 
            desc: "这是残酷的丛林法则的社会化体现。在这里，只有强者才配生存，弱者理应被淘汰或奴役。同情心被视为软弱的标志，道德被视为弱者束缚强者的枷锁。力量即是正义，胜利即是真理。这种社会没有任何福利，只有永恒的斗争和筛选。", 
            people: ["拉格纳·红胡子 (Ragnar Redbeard)", "赫伯特·斯宾塞 (Herbert Spencer)", "布伦努斯 (Brennus)"], 
            books: ["《强权即公理》(Might is Right)", "《社会静力学》", "《我的奋斗》"], 
            quotes: [
                {text:"Woe to the vanquished.", trans:"战败者有难了。", source:"Brennus"},
                {text:"The strong do what they can and the weak suffer what they must.", trans:"强者极尽其能，弱者听天由命。", source:"Thucydides"},
                {text:"Survival of the fittest.", trans:"适者生存。", source:"Herbert Spencer"}
            ] 
        },
        "off_left": { 
            name: "社群主义 (Communalism)", 
            desc: "这里的社群主义并非温和的社区建设，而是极其激进的财产废除。不仅生产资料公有，连生活资料甚至个人隐私也荡然无存。你的牙刷是大家的，你的房子是大家的，甚至你的孩子也是大家的。任何形式的“私人”概念都被视为反革命和堕落。", 
            people: ["柏拉图 (Plato)", "托马斯·莫尔 (Thomas More)", "巴贝夫 (Gracchus Babeuf)"], 
            books: ["《理想国》", "《乌托邦》", "《平等派宣言》"], 
            quotes: [
                {text:"Private property is the root of all evil.", trans:"私有财产是万恶之源。", source:"Traditional"},
                {text:"From each according to his ability, to each according to his needs.", trans:"各尽所能，各取所需。", source:"Karl Marx"},
                {text:"All belongs to all.", trans:"一切属于一切。", source:"Peter Kropotkin"}
            ] 
        },
        "off_right": { 
            name: "侵略主义 (Aggressionism)", 
            desc: "对于这个阵营来说，和平是停滞的同义词，而战争是文明的引擎。国家存在的唯一目的就是扩张、征服和掠夺。外交被视为软弱，妥协被视为背叛。每一个公民都是士兵，每一份资源都为了前线。这不是为了生存，而是为了征服的荣耀。", 
            people: ["恐虐 (Khorne)", "成吉思汗 (Genghis Khan)", "阿提拉 (Attila the Hun)"], 
            books: ["《战争论》(极度曲解版)", "《我的奋斗》", "《菊与刀》"], 
            quotes: [
                {text:"Blood for the Blood God! Skulls for the Skull Throne!", trans:"血祭血神！颅献颅座！", source:"Warhammer 40k"},
                {text:"War is the hygiene of the world.", trans:"战争是世界的卫生学。", source:"Filippo Tommaso Marinetti"},
                {text:"Veni, vidi, vici.", trans:"我来，我见，我征服。", source:"Julius Caesar"}
            ] 
        },
        "off_lib_left": { 
            name: "灵性主义 (Soulism)", 
            desc: "灵性主义认为，一切形式的等级制度和限制都是压迫，这不仅包括国家和资本主义，还包括物理法则本身。重力、惯性、甚至清醒状态都是限制自由的枷锁。他们主张通过致幻剂、清醒梦和科技手段，打破现实的束缚，追求意识的绝对自由。", 
            people: ["特伦斯·麦肯纳 (Terence McKenna)", "蒂莫西·利里 (Timothy Leary)", "卡洛斯·卡斯塔尼达 (Carlos Castaneda)"], 
            books: ["《众神的食物》", "《知觉之门》", "《唐望的教诲》"], 
            quotes: [
                {text:"Gravity is a lie invented by the bourgeoisie to keep the working class down.", trans:"重力是资产阶级发明来压迫工人阶级的谎言。", source:"Internet Meme"},
                {text:"Reality is a hallucination.", trans:"现实只是一种幻觉。", source:"Unknown"},
                {text:"Turn on, tune in, drop out.", trans:"开启，调频，脱离。", source:"Timothy Leary"}
            ] 
        },
        "off_lib_center": { 
            name: "利己主义 (Egoism)", 
            desc: "施蒂纳的利己主义拒绝承认任何高于个体的概念。国家、法律、道德、神灵、人权，统统都是压迫个体的“幽灵”。唯有“我”和“我的所有物”是真实的。这种思想极度强调个人的独特性和对自身力量的肯定，不受任何外在教条的束缚。", 
            people: ["马克斯·施蒂纳 (Max Stirner)", "多拉·马斯登 (Dora Marsden)", "弗里德里希·尼采 (Friedrich Nietzsche)"], 
            books: ["《唯一者及其所有物》", "《善恶的彼岸》", "《查拉图斯特拉如是说》"], 
            quotes: [
                {text:"All things are nothing to me.", trans:"一切对我来说都算不了什么。", source:"Max Stirner"},
                {text:"I am my own only when I am master of myself.", trans:"只有当我成为自己的主人时，我才属于我自己。", source:"Max Stirner"},
                {text:"God is dead.", trans:"上帝已死。", source:"Friedrich Nietzsche"}
            ] 
        },
        "off_lib_right": { 
            name: "自我达尔文主义 (Avaritionism)", 
            desc: "这是无政府资本主义剥离了“互不侵犯原则（NAP）”后的黑暗形态。如果没有国家警察，谁来阻止我抢劫你？在这个世界里，自由意味着为所欲为，只要你有足够的力量或金钱。契约可以随时撕毁，谋杀可以明码标价。这是一种绝对混乱且残酷的极端自由主义。", 
            people: ["兰德尔·佛莱格 (Randall Flagg)", "安东·齐格 (Anton Chigurh)", "小丑 (The Joker)"], 
            books: ["《末日逼近》", "《没钱别想活》(虚构)", "《自私的基因》(误读)"], 
            quotes: [
                {text:"I do what I want, when I want, to whom I want.", trans:"我想对谁做什么，就做什么。", source:"Unknown"},
                {text:"Greed is good.", trans:"贪婪是好的。", source:"Gordon Gekko"},
                {text:"Why so serious?", trans:"干嘛这么严肃？", source:"The Joker"}
            ] 
        },

        // --- Main Grid (Selected Key Ideologies) ---
        "0,0": { 
            name: "斯大林主义 (Stalinism)", 
            desc: "斯大林主义建立在“一国社会主义”的理论基础之上，主张通过高度集权的计划经济和强制工业化来迅速建立国防和工业基础。它强调党的绝对领导、对他人的清洗以及对领袖的个人崇拜。在这种体制下，国家机器无孔不入，秘密警察维持着社会的绝对秩序。", 
            people: ["约瑟夫·斯大林", "拉扎尔·卡冈诺维奇", "维亚切斯拉夫·莫洛托夫"], 
            books: ["《列宁主义基础》", "《联共（布）党史简明教程》", "《马克思主义和语言学问题》"], 
            quotes: [
                {text:"One death is a tragedy; one million is a statistic.", trans:"死一个人是悲剧，死一百万是统计数字。", source:"Joseph Stalin"},
                {text:"Ideas are more powerful than guns. We would not let our enemies have guns, why should we let them have ideas?", trans:"思想比枪炮更有力量。我们不让敌人拥有枪炮，为什么要让他们拥有思想？", source:"Joseph Stalin"},
                {text:"Gaiety is the most outstanding feature of the Soviet Union.", trans:"快乐是苏联最显著的特征。", source:"Joseph Stalin"}
            ] 
        },
        "1,0": { 
            name: "毛泽东思想 (Maoism)", 
            desc: "毛泽东思想是马克思列宁主义在中国的本土化发展。它特别强调农民阶级在革命中的核心作用，提出了“农村包围城市”的战略。在建设时期，它强调“群众路线”、“持续革命”和反对官僚修正主义，主张通过不断的运动来保持党的纯洁性和革命性。", 
            people: ["毛泽东", "林彪", "江青"], 
            books: ["《毛泽东选集》", "《论持久战》", "《矛盾论》"], 
            quotes: [
                {text:"Political power grows out of the barrel of a gun.", trans:"枪杆子里出政权。", source:"Mao Zedong"},
                {text:"Revolution is not a dinner party.", trans:"革命不是请客吃饭。", source:"Mao Zedong"},
                {text:"To rebel is justified.", trans:"造反有理。", source:"Mao Zedong"}
            ] 
        },
        "11,0": { 
            name: "无政府共产主义 (Anarcho-Communism)", 
            desc: "无政府共产主义主张立即废除国家、资本主义、工资制度和私有财产。它设想一个由自愿联合体组成的社会，通过互助和直接民主进行管理。生产资料公有，产品按需分配。他们认为，真正的自由只能在没有等级制度和平等互助的社区中实现。", 
            people: ["彼得·克鲁泡特金", "爱玛·高德曼", "内斯托尔·马赫诺"], 
            books: ["《面包与自由》", "《互助论：进化的一个要素》", "《田野、工厂和车间》"], 
            quotes: [
                {text:"Anarchy is order.", trans:"无政府即秩序。", source:"Pierre-Joseph Proudhon"},
                {text:"Prisons are universities of crime, maintained by the state.", trans:"监狱是国家维持的犯罪大学。", source:"Peter Kropotkin"},
                {text:"If voting changed anything, they'd make it illegal.", trans:"如果投票能改变什么，他们早就把它定为非法了。", source:"Emma Goldman"}
            ] 
        },
        "11,11": { 
            name: "无政府资本主义 (Anarcho-Capitalism)", 
            desc: "无政府资本主义主张彻底废除国家，将所有社会功能（包括法律、警察、法庭和国防）完全私有化并交给自由市场。他们认为自我所有权和私有财产权是不可侵犯的自然权利，任何形式的税收都是盗窃，国家本质上是一个犯罪团伙。", 
            people: ["穆雷·罗斯巴德", "大卫·弗里德曼", "汉斯-赫尔曼·霍佩"], 
            books: ["《为了新的自由》", "《自由的伦理》", "《自由的机制》"], 
            quotes: [
                {text:"Taxation is theft.", trans:"税收即盗窃。", source:"Murray Rothbard"},
                {text:"The State is a gang of thieves writ large.", trans:"国家是一群被放大的盗贼。", source:"Murray Rothbard"},
                {text:"There is no such thing as a free lunch.", trans:"天下没有免费的午餐。", source:"Milton Friedman (Popularized)"}
            ] 
        },
        "0,11": { 
            name: "纳粹主义 (Nazism)", 
            desc: "纳粹主义（国家社会主义）是一种极右翼的极权主义意识形态。它结合了极端的种族主义（雅利安人至上）、反犹太主义、反马克思主义和反自由主义。它强调种族纯洁、领袖原则和生存空间的扩张，试图建立一个等级森严的种族国家。", 
            people: ["阿道夫·希特勒", "约瑟夫·戈培尔", "海因里希·希姆莱"], 
            books: ["《我的奋斗》", "《二十世纪的迷思》", "《第三帝国的兴亡》"], 
            quotes: [
                {text:"The broad masses of a population are more amenable to the appeal of rhetoric than to any other force.", trans:"广大群众比任何其他力量都更容易听信修辞的感染力。", source:"Adolf Hitler"},
                {text:"Propaganda works best when those who are being manipulated are confident they are acting on their own free will.", trans:"当被操纵者确信他们是出于自由意志行事时，宣传最有效。", source:"Joseph Goebbels"},
                {text:"Blood and Soil.", trans:"血与土。", source:"Nazi Slogan"}
            ] 
        },
        "5,6": { 
            name: "新自由主义 (Neoliberalism)", 
            desc: "新自由主义是当代世界的主流意识形态之一。它主张通过私有化、财政紧缩、放松管制和自由贸易来促进经济增长。它强调个人的责任和市场效率，认为政府干预往往是低效的。它将市场逻辑应用到社会生活的各个方面。", 
            people: ["玛格丽特·撒切尔", "罗纳德·里根", "米尔顿·弗里德曼"], 
            books: ["《资本主义与自由》", "《通往奴役之路》", "《自由选择》"], 
            quotes: [
                {text:"There is no such thing as society.", trans:"根本没有‘社会’这个东西（只有个人和家庭）。", source:"Margaret Thatcher"},
                {text:"The government is not the solution to our problem; government is the problem.", trans:"政府不能解决我们的问题，政府本身就是问题。", source:"Ronald Reagan"},
                {text:"Inflation is always and everywhere a monetary phenomenon.", trans:"通货膨胀无论何时何地都是一种货币现象。", source:"Milton Friedman"}
            ] 
        },
        "6,5": { 
            name: "社会民主主义 (Social Democracy)", 
            desc: "社会民主主义试图在资本主义框架内，通过代议制民主和国家干预来实现社会正义。它支持混合经济、强大的福利国家、累进税制和工人权利。它不寻求废除资本主义，而是试图驯化它，使其更人道、更公平。", 
            people: ["伯尼·桑德斯", "奥洛夫·帕尔梅", "克莱门特·艾德礼"], 
            books: ["《社会主义的前提和社会民主党的任务》", "《福利资本主义的三个世界》", "《21世纪资本论》"], 
            quotes: [
                {text:"Market economy needs a strong state to secure social balance.", trans:"市场经济需要强大的国家来确保社会平衡。", source:"Willy Brandt"},
                {text:"Democracy is not just the right to vote, it is the right to live in dignity.", trans:"民主不仅仅是投票权，更是有尊严地生活的权利。", source:"Naomi Klein"},
                {text:"We must learn to live together as brothers or perish together as fools.", trans:"我们必须像兄弟一样一起生活，否则就会像傻瓜一样一起灭亡。", source:"Martin Luther King Jr."}
            ] 
        },
        "0,0_fallback": { name: "未定义阵营", desc: "你的位置在地图上没有明确的定义，或许你开创了一个新的流派？", people: [], books: [], quotes: [] }
    },

    categories: {
        economy: [
            { text: "聊聊脚下的土地。你认为土地所有权应该如何界定？", answers: [{text:"土地应像空气一样属于全人类共享。", effect:{x:-0.3, y:0}}, {text:"归国家所有，个人仅有使用权。", effect:{x:-0.2, y:0.1}}, {text:"可以私有，但必须征收高额地价税。", effect:{x:-0.1, y:0}}, {text:"私有制受法律保护，但政府可征收。", effect:{x:0.15, y:0}}, {text:"神圣不可侵犯，我在我地即为王。", effect:{x:0.3, y:-0.1}}] },
            { text: "关于工厂和机器这些生产资料，谁才应该是它们的主人？", answers: [{text:"直接由工人委员会民主管理。", effect:{x:-0.3, y:-0.1}}, {text:"由国家计划委员会统一调配。", effect:{x:-0.25, y:0.15}}, {text:"鼓励员工持股和合作社模式。", effect:{x:-0.1, y:0}}, {text:"目前的股份制就挺好。", effect:{x:0.2, y:0}}, {text:"资本家，这是他们的私有财产。", effect:{x:0.3, y:-0.1}}] },
            { text: "面对自由市场这只“看不见的手”，你的态度是？", answers: [{text:"它是剥削的根源，必须砍断。", effect:{x:-0.3, y:0.1}}, {text:"需要国家强力掌控，防止乱象。", effect:{x:-0.2, y:0.1}}, {text:"需要政府监管来维持公平竞争。", effect:{x:-0.1, y:0}}, {text:"竞争带来效率，尽量少干预。", effect:{x:0.2, y:0}}, {text:"完全自由放任，市场永远正确。", effect:{x:0.3, y:-0.1}}] },
            { text: "如果有超级富豪富可敌国，社会应该介入吗？", answers: [{text:"没收全部财产，消灭资产阶级。", effect:{x:-0.3, y:0}}, {text:"征收极高累进税（70%以上）。", effect:{x:-0.2, y:0}}, {text:"适度征税，维持福利。", effect:{x:-0.1, y:0}}, {text:"实行单一税率，对大家都公平。", effect:{x:0.2, y:0}}, {text:"税收即盗窃，一分钱也不该交。", effect:{x:0.3, y:-0.1}}] },
            { text: "生病了谁来买单？医疗服务应如何运作？", answers: [{text:"作为基本人权，国家完全免费包办。", effect:{x:-0.3, y:0.1}}, {text:"单一支付者全民医保。", effect:{x:-0.2, y:0}}, {text:"公立保基本，私立提供更好服务。", effect:{x:0, y:0}}, {text:"以市场为主，保险竞争降低成本。", effect:{x:0.15, y:0}}, {text:"没钱治病是个人责任，优胜劣汰。", effect:{x:0.3, y:-0.1}}] },
            { text: "关于全球化和国际贸易，你怎么看？", answers: [{text:"资本主义的全球剥削，应自给自足。", effect:{x:-0.15, y:0.1}}, {text:"保护主义，关税壁垒保护本国工业。", effect:{x:-0.05, y:0.15}}, {text:"支持公平贸易，加入劳工环保条款。", effect:{x:-0.05, y:0}}, {text:"自由贸易创造繁荣，消除壁垒。", effect:{x:0.2, y:-0.05}}, {text:"彻底开放边界，资本商品自由流动。", effect:{x:0.3, y:-0.15}}] },
            { text: "房价高企，年轻人买不起房，解决方案是？", answers: [{text:"住房是权利，取缔房东，国家分配。", effect:{x:-0.3, y:0.1}}, {text:"大规模建设公租房，严控租金。", effect:{x:-0.2, y:0.05}}, {text:"房住不炒，政府调控。", effect:{x:-0.05, y:0}}, {text:"放宽土地供应，鼓励开发商建设。", effect:{x:0.15, y:0}}, {text:"取消所有规划限制，贫民窟也是选择。", effect:{x:0.3, y:-0.1}}] },
            { text: "谁应该掌握印钞机（货币发行权）？", answers: [{text:"废除货币，直接分配物资。", effect:{x:-0.3, y:0}}, {text:"国家垄断，用于公共投资（MMT）。", effect:{x:-0.15, y:0.1}}, {text:"独立的中央银行，目标是控制通胀。", effect:{x:0.05, y:0}}, {text:"回归金本位，政府不能乱印钱。", effect:{x:0.2, y:-0.05}}, {text:"废除法币，私人货币/加密货币竞争。", effect:{x:0.3, y:-0.15}}] },
            { text: "水、电、路这些基础设施应该由谁运营？", answers: [{text:"不仅国有，而且应该完全免费。", effect:{x:-0.25, y:0.05}}, {text:"国有国营，按成本收费。", effect:{x:-0.15, y:0.05}}, {text:"公私合营（PPP模式）。", effect:{x:0, y:0}}, {text:"私有化运营，政府监管价格。", effect:{x:0.15, y:0}}, {text:"完全私有，谁修路谁收费。", effect:{x:0.3, y:-0.05}}] },
            { text: "如果有人不想工作，社会应该养他吗？", answers: [{text:"不劳动者不得食，强制劳动。", effect:{x:-0.3, y:0.2}}, {text:"高福利养懒人也无所谓。", effect:{x:-0.15, y:-0.1}}, {text:"提供有限救济，鼓励再就业。", effect:{x:0, y:0}}, {text:"依靠私人慈善，而非政府强迫。", effect:{x:0.15, y:0}}, {text:"那就饿死吧，这是自然规律。", effect:{x:0.3, y:0.1}}] },
            { text: "关于最低工资制度？", answers: [{text:"大幅提高至生活工资标准。", effect:{x:-0.2, y:0}}, {text:"随通胀定期调整。", effect:{x:-0.1, y:0}}, {text:"维持现状，不宜过高。", effect:{x:0.05, y:0}}, {text:"设立差别工资，允许雇佣廉价劳力。", effect:{x:0.15, y:0}}, {text:"废除，价格由供需决定。", effect:{x:0.3, y:0}}] },
            { text: "知识产权（版权、专利）保护了创新还是阻碍了传播？", answers: [{text:"知识属于全人类，废除所有IP。", effect:{x:-0.25, y:-0.15}}, {text:"大幅缩短保护期，强制技术共享。", effect:{x:-0.1, y:0}}, {text:"需要改革，防止专利流氓。", effect:{x:0, y:0}}, {text:"严格保护，这是对创新的激励。", effect:{x:0.15, y:0}}, {text:"IP是私有财产，应无限期保护。", effect:{x:0.3, y:0.1}}] },
            { text: "富二代继承巨额遗产公平吗？", answers: [{text:"不公平，100%没收遗产。", effect:{x:-0.3, y:0}}, {text:"征收高额遗产税防止阶级固化。", effect:{x:-0.15, y:0}}, {text:"设定起征点，只对巨富征税。", effect:{x:-0.05, y:0}}, {text:"象征性征收即可。", effect:{x:0.1, y:0}}, {text:"废除遗产税，死后处置财产是自由。", effect:{x:0.3, y:0}}] },
            { text: "消费主义文化盛行，你怎么看？", answers: [{text:"资本主义的洗脑，应追求极简。", effect:{x:-0.2, y:0}}, {text:"制造虚假需求和环境破坏。", effect:{x:-0.1, y:0}}, {text:"消费者有选择权，但也应负责。", effect:{x:0, y:0}}, {text:"消费拉动经济，多多益善。", effect:{x:0.15, y:0}}, {text:"我买故我在，这让世界运转。", effect:{x:0.25, y:-0.05}}] },
            { text: "大企业遇到危机，政府该救助（Bailout）吗？", answers: [{text:"绝不，将其国有化。", effect:{x:-0.3, y:0.1}}, {text:"有条件救助（如保就业）。", effect:{x:-0.1, y:0}}, {text:"为了防止系统性风险必须救。", effect:{x:0, y:0.1}}, {text:"反对政府干预市场。", effect:{x:0.2, y:0}}, {text:"让它们倒闭，这是市场的净化。", effect:{x:0.3, y:-0.1}}] },
            { text: "机器人和AI正在取代人类工作，咋办？", answers: [{text:"这是实现共产主义的契机！", effect:{x:-0.3, y:-0.1}}, {text:"征收机器人税来发福利。", effect:{x:-0.15, y:0.05}}, {text:"加强教育，适应新岗位。", effect:{x:0.05, y:0}}, {text:"创造性破坏，新工作会产生。", effect:{x:0.15, y:0}}, {text:"被淘汰者只能怪自己能力不足。", effect:{x:0.25, y:-0.1}}] },
            { text: "全民基本收入（UBI，无条件发钱）可行吗？", answers: [{text:"发钱不如直接分配物资。", effect:{x:-0.3, y:0}}, {text:"大力支持，应对自动化。", effect:{x:-0.15, y:0}}, {text:"用负所得税替代现有福利。", effect:{x:0.05, y:-0.05}}, {text:"反对，这会养懒人。", effect:{x:0.15, y:0.05}}, {text:"绝不，这违反自然法则。", effect:{x:0.3, y:0.1}}] },
            { text: "如何看待外卖骑手等零工经济？", answers: [{text:"这是变相的奴隶制，必须取缔。", effect:{x:-0.2, y:0.1}}, {text:"必须按正式雇员监管保障。", effect:{x:-0.1, y:0.05}}, {text:"提供了灵活的就业机会。", effect:{x:0.1, y:0}}, {text:"自由市场的创新，不应干涉。", effect:{x:0.2, y:-0.05}}, {text:"这是个人创业的未来形式。", effect:{x:0.25, y:-0.1}}] },
            { text: "民间借贷和高利贷？", answers: [{text:"借贷牟利本身就是罪恶。", effect:{x:-0.2, y:0.1}}, {text:"严厉限制利率上限。", effect:{x:-0.1, y:0}}, {text:"打击暴力催收即可。", effect:{x:0, y:0}}, {text:"风险定价，不应限制利率。", effect:{x:0.2, y:-0.1}}, {text:"双方自愿的契约神圣不可侵犯。", effect:{x:0.3, y:-0.2}}] },
            { text: "你认为国家的产业政策重点应该是？", answers: [{text:"重工业和军工优先。", effect:{x:-0.3, y:0.2}}, {text:"扶持战略新兴产业。", effect:{x:-0.1, y:0.1}}, {text:"提供基础设施，不挑赢家。", effect:{x:0, y:0}}, {text:"减税降费，改善营商环境。", effect:{x:0.2, y:0}}, {text:"彻底不干预，让市场决定。", effect:{x:0.3, y:-0.1}}] },
            { text: "工会权利：罢工是合法的吗？", answers: [{text:"罢工是夺取政权的手段。", effect:{x:-0.3, y:-0.1}}, {text:"神圣不可侵犯的权利。", effect:{x:-0.2, y:0}}, {text:"合法，但不能破坏公共秩序。", effect:{x:0, y:0.1}}, {text:"应受到严格限制。", effect:{x:0.15, y:0.1}}, {text:"老板有权开除罢工者。", effect:{x:0.3, y:0}}] },
            { text: "关于垄断巨头（Big Tech）？", answers: [{text:"国有化它们。", effect:{x:-0.3, y:0.1}}, {text:"强制拆分。", effect:{x:-0.2, y:0}}, {text:"加强反垄断监管。", effect:{x:-0.1, y:0}}, {text:"只要不损害消费者就行。", effect:{x:0.1, y:0}}, {text:"垄断是自然竞争的结果。", effect:{x:0.3, y:-0.1}}] },
            { text: "地下黑市（Shadow Economy）？", answers: [{text:"严厉打击，彻底铲除。", effect:{x:0, y:0.2}}, {text:"加强监管使其正规化。", effect:{x:-0.05, y:0.1}}, {text:"存在即合理，反映需求。", effect:{x:0.1, y:-0.05}}, {text:"这是真正的自由市场。", effect:{x:0.3, y:-0.25}}, {text:"反抗暴政的最后堡垒。", effect:{x:0.25, y:-0.2}}] },
            { text: "通货膨胀对你来说意味着什么？", answers: [{text:"必须严控物价，打击投机。", effect:{x:-0.2, y:0.1}}, {text:"温和通胀有利于经济。", effect:{x:-0.1, y:0}}, {text:"央行的主要敌人。", effect:{x:0, y:0}}, {text:"这是政府对储蓄者的掠夺。", effect:{x:0.2, y:-0.1}}, {text:"废除法币才能解决。", effect:{x:0.3, y:-0.2}}] },
            { text: "环境污染税/碳税？", answers: [{text:"企业必须付出沉重代价。", effect:{x:-0.2, y:0}}, {text:"支持碳交易市场。", effect:{x:-0.1, y:0}}, {text:"适度征收，不影响经济。", effect:{x:0, y:0}}, {text:"反对增加企业负担。", effect:{x:0.1, y:0}}, {text:"环保税是骗局。", effect:{x:0.2, y:-0.1}}] }
        ],
        politics: [
            { text: "言论自由的底线在哪里？纳粹言论受保护吗？", answers: [{text:"为了国家稳定，必须审查反动言论。", effect:{x:0, y:0.3}}, {text:"仇恨言论应当被法律禁止。", effect:{x:-0.05, y:0.15}}, {text:"只有直接煽动暴力的言论才受限。", effect:{x:0, y:0}}, {text:"即使是冒犯性的言论也应受保护。", effect:{x:0, y:-0.15}}, {text:"绝对的言论自由，包括泄露机密。", effect:{x:0, y:-0.3}}] },
            { text: "普通公民应该拥有枪支吗？", answers: [{text:"绝对禁止，只有军警能持枪。", effect:{x:0, y:0.3}}, {text:"严格限制，禁止攻击性武器。", effect:{x:0, y:0.15}}, {text:"背景调查和考证是必须的。", effect:{x:0, y:0}}, {text:"持枪是抵抗暴政的最后手段。", effect:{x:0, y:-0.2}}, {text:"我要买坦克和核弹（娱乐性核弹）。", effect:{x:0, y:-0.4}}] },
            { text: "为了抓捕恐怖分子，政府可以监控所有人的通讯吗？", answers: [{text:"无死角监控，老大哥在看着你。", effect:{x:0, y:0.4}}, {text:"为了安全，适度监控是必要的。", effect:{x:0, y:0.15}}, {text:"必须有法院搜查令才能监控。", effect:{x:0, y:0}}, {text:"隐私权不可侵犯，反对棱镜计划。", effect:{x:0, y:-0.2}}, {text:"加密技术万岁，让监控失效。", effect:{x:0, y:-0.3}}] },
            { text: "对于毒品问题，你的态度是？", answers: [{text:"毒品毁国，贩毒死刑，吸毒劳改。", effect:{x:0, y:0.3}}, {text:"严厉打击，但侧重于强制戒毒。", effect:{x:0, y:0.15}}, {text:"非罪化，视为公共卫生问题。", effect:{x:-0.1, y:-0.1}}, {text:"大麻合法化，硬性毒品管制。", effect:{x:0, y:-0.2}}, {text:"所有精神类物质完全合法化。", effect:{x:0, y:-0.3}}] },
            { text: "警察在执法时使用了暴力，你怎么看？", answers: [{text:"支持警察，他们是秩序的守护者。", effect:{x:0, y:0.3}}, {text:"维持治安有时需要强硬手段。", effect:{x:0, y:0.1}}, {text:"需要加强监督（执法记录仪）。", effect:{x:-0.05, y:-0.05}}, {text:"削减警费，发展社区治理。", effect:{x:-0.15, y:-0.2}}, {text:"废除警察，由私人安保替代。", effect:{x:0, y:-0.3}}] },
            { text: "死刑是否应该保留？", answers: [{text:"扩大适用范围，甚至恢复肉刑。", effect:{x:0, y:0.3}}, {text:"杀人偿命，保留死刑。", effect:{x:0, y:0.1}}, {text:"仅适用于极其恶劣的罪行。", effect:{x:0, y:0}}, {text:"废除死刑，政府无权剥夺生命。", effect:{x:-0.1, y:-0.1}}, {text:"监狱也该废除，实行恢复性司法。", effect:{x:-0.2, y:-0.2}}] },
            { text: "民主投票是最好的制度吗？", answers: [{text:"民主是暴民政治，需要强人独裁。", effect:{x:0, y:0.4}}, {text:"精英治国比大众投票更靠谱。", effect:{x:0, y:0.2}}, {text:"代议制民主是目前最不坏的。", effect:{x:0, y:0}}, {text:"直接民主，重大事务全民公投。", effect:{x:-0.1, y:-0.1}}, {text:"私有财产高于投票（霍普主义）。", effect:{x:0.2, y:-0.2}}] },
            { text: "国家应该推行统一的生物识别身份证吗？", answers: [{text:"强制植入芯片，实现完美管理。", effect:{x:0, y:0.4}}, {text:"必须有统一的国民身份证。", effect:{x:0, y:0.2}}, {text:"作为行政管理的必要工具。", effect:{x:0, y:0}}, {text:"自愿认证，反对强制。", effect:{x:0, y:-0.1}}, {text:"我是自由人，不需要证件。", effect:{x:0, y:-0.3}}] },
            { text: "如果战争爆发，你应该上战场吗？", answers: [{text:"实行斯巴达式教育，全民皆兵。", effect:{x:0, y:0.3}}, {text:"义务兵役制，保家卫国。", effect:{x:0, y:0.15}}, {text:"混合制度，平时募兵。", effect:{x:0, y:0}}, {text:"完全志愿兵役制。", effect:{x:0, y:-0.1}}, {text:"废除常备军。", effect:{x:0, y:-0.3}}] },
            { text: "对待恐怖主义的手段？", answers: [{text:"宁可错杀一千，不可放过一个。", effect:{x:0, y:0.4}}, {text:"允许强化审讯（酷刑）。", effect:{x:0, y:0.2}}, {text:"必须在法律框架内进行。", effect:{x:0, y:0}}, {text:"反思外交政策，减少仇恨。", effect:{x:-0.1, y:-0.1}}, {text:"帝国主义才是最大的恐怖分子。", effect:{x:-0.2, y:-0.1}}] },
            { text: "监狱里的囚犯应该劳动吗？", answers: [{text:"罪犯是国家的奴隶，强制苦役。", effect:{x:0, y:0.3}}, {text:"劳动改造是惩罚的一部分。", effect:{x:0, y:0.15}}, {text:"应当支付工资，作为技能培训。", effect:{x:-0.1, y:0}}, {text:"反对监狱私有化和奴役。", effect:{x:-0.1, y:-0.1}}, {text:"废除监禁系统。", effect:{x:-0.2, y:-0.2}}] },
            { text: "面对非法移民和难民？", answers: [{text:"彻底关闭边境，保持纯洁。", effect:{x:0.2, y:0.3}}, {text:"严格限制，仅引入人才。", effect:{x:0.1, y:0.1}}, {text:"基于规则的有序接收。", effect:{x:0, y:0}}, {text:"出于人道主义宽容接收。", effect:{x:-0.1, y:-0.1}}, {text:"废除国界，迁徙自由。", effect:{x:-0.2, y:-0.3}}] },
            { text: "你爱国吗？", answers: [{text:"极端民族主义，国家永远正确。", effect:{x:0.2, y:0.3}}, {text:"为祖国感到自豪。", effect:{x:0.1, y:0.1}}, {text:"理性的爱国，不盲目。", effect:{x:0, y:0}}, {text:"警惕爱国主义成为恶棍的避难所。", effect:{x:-0.1, y:-0.1}}, {text:"我是世界公民，国家是监狱。", effect:{x:-0.2, y:-0.3}}] },
            { text: "街头抗议示威演变成骚乱怎么办？", answers: [{text:"直接开枪镇压。", effect:{x:0, y:0.4}}, {text:"强力驱散，恢复秩序。", effect:{x:0, y:0.2}}, {text:"保障和平抗议的权利。", effect:{x:0, y:0}}, {text:"直接行动（Direct Action）有效。", effect:{x:-0.1, y:-0.1}}, {text:"暴动是听不见声音者的语言。", effect:{x:-0.2, y:-0.2}}] },
            { text: "关于“政治正确”？", answers: [{text:"必须彻底铲除的文化毒瘤。", effect:{x:0.2, y:0.2}}, {text:"反对过激，限制了言论。", effect:{x:0.1, y:0}}, {text:"这是对他人的基本尊重。", effect:{x:-0.1, y:0}}, {text:"语言塑造现实，必须改革。", effect:{x:-0.2, y:0}}, {text:"取消文化是正义的武器。", effect:{x:-0.3, y:0.1}}] },
            { text: "如果你是国王（君主制）？", answers: [{text:"朕即国家，绝对君主。", effect:{x:0.2, y:0.4}}, {text:"君主应有实权制衡议会。", effect:{x:0.1, y:0.2}}, {text:"虚君共和，统而不治。", effect:{x:0, y:0}}, {text:"过时的封建残余。", effect:{x:-0.1, y:0}}, {text:"送上断头台。", effect:{x:-0.2, y:-0.1}}] },
            { text: "宗教应该介入政治吗？", answers: [{text:"建立神权国家，宗教法即国法。", effect:{x:0.1, y:0.4}}, {text:"确立国教，维护传统。", effect:{x:0.1, y:0.2}}, {text:"政教分离，互不干涉。", effect:{x:0, y:0}}, {text:"将宗教赶出公共领域。", effect:{x:-0.1, y:0.1}}, {text:"国家无神论，消灭宗教。", effect:{x:-0.2, y:0.2}}] },
            { text: "某个地区想要独立，可以吗？", answers: [{text:"分裂即叛国，死罪。", effect:{x:0.2, y:0.4}}, {text:"坚决维护统一。", effect:{x:0.1, y:0.2}}, {text:"应通过公投决定。", effect:{x:0, y:-0.1}}, {text:"民族自决是绝对权利。", effect:{x:0, y:-0.2}}, {text:"无限分裂到个人（微国家）。", effect:{x:0, y:-0.3}}] },
            { text: "为什么允许公民持枪？", answers: [{text:"只有国家能拥有暴力。", effect:{x:0, y:0.3}}, {text:"为了体育和狩猎。", effect:{x:0, y:0.1}}, {text:"为了家庭自卫。", effect:{x:0, y:-0.1}}, {text:"为了反抗暴政。", effect:{x:0, y:-0.2}}, {text:"核弹也是武器，我也要买。", effect:{x:0, y:-0.4}}] },
            { text: "国家宣布进入紧急状态，你会？", answers: [{text:"支持赋予领袖无限权力。", effect:{x:0, y:0.4}}, {text:"为了安全牺牲自由。", effect:{x:0, y:0.2}}, {text:"必须有法律授权和期限。", effect:{x:0, y:0}}, {text:"警惕滥权。", effect:{x:0, y:-0.1}}, {text:"拒绝服从。", effect:{x:0, y:-0.2}}] },
            { text: "对待革命的态度？", answers: [{text:"坚决镇压一切动乱。", effect:{x:0, y:0.3}}, {text:"改革优于革命。", effect:{x:0, y:0}}, {text:"支持非暴力革命。", effect:{x:-0.1, y:-0.1}}, {text:"暴力革命是必要的。", effect:{x:-0.2, y:0}}, {text:"持续革命，永不停歇。", effect:{x:-0.3, y:0}}] },
            { text: "国家安全与人权？", answers: [{text:"国家安全高于一切。", effect:{x:0, y:0.4}}, {text:"安全是人权的前提。", effect:{x:0, y:0.2}}, {text:"两者需要平衡。", effect:{x:0, y:0}}, {text:"人权优先于国家利益。", effect:{x:0, y:-0.2}}, {text:"废除国家才能安全。", effect:{x:0, y:-0.4}}] },
            { text: "选举权应该有限制吗？", answers: [{text:"不需要选举，领袖决定。", effect:{x:0, y:0.3}}, {text:"纳税人或知识分子才行。", effect:{x:0, y:0.1}}, {text:"普选制。", effect:{x:0, y:0}}, {text:"降低投票年龄。", effect:{x:-0.1, y:-0.1}}, {text:"抽签治理（Sortition）。", effect:{x:-0.2, y:-0.2}}] },
            { text: "政府的最佳规模？", answers: [{text:"全能政府，包办一切。", effect:{x:-0.1, y:0.4}}, {text:"大政府，广泛干预。", effect:{x:-0.1, y:0.2}}, {text:"中等政府。", effect:{x:0, y:0}}, {text:"小政府，守夜人。", effect:{x:0.1, y:-0.2}}, {text:"无政府。", effect:{x:0, y:-0.4}}] },
            { text: "关于卖淫？", answers: [{text:"严禁并惩罚。", effect:{x:0, y:0.2}}, {text:"惩罚嫖客。", effect:{x:-0.1, y:0.1}}, {text:"合法监管。", effect:{x:0, y:-0.1}}, {text:"非罪化。", effect:{x:0, y:-0.2}}, {text:"完全自由职业。", effect:{x:0, y:-0.3}}] }
        ],
        culture: [
            // 30 Culture Questions
            { text: "同性恋者想结婚，可以吗？", answers: [{text:"这是犯罪，应该治疗。", effect:{x:0, y:0.3}}, {text:"反对，婚姻是一男一女。", effect:{x:0, y:0.1}}, {text:"支持民事结合。", effect:{x:0, y:0}}, {text:"完全平等的婚姻权。", effect:{x:-0.1, y:-0.1}}, {text:"废除国家对婚姻的定义。", effect:{x:-0.2, y:-0.2}}] },
            { text: "跨性别者（变性人）权益？", answers: [{text:"只有两种性别，其他是妄想。", effect:{x:0, y:0.3}}, {text:"限制宣传，保护未成年。", effect:{x:0, y:0.1}}, {text:"应当尊重。", effect:{x:-0.1, y:0}}, {text:"完全的权益保障。", effect:{x:-0.2, y:-0.1}}, {text:"废除性别概念。", effect:{x:-0.3, y:-0.2}}] },
            { text: "传统价值观正在丧失？", answers: [{text:"必须强制复兴传统。", effect:{x:0.1, y:0.3}}, {text:"我们应当遵循传统。", effect:{x:0.1, y:0.1}}, {text:"取其精华去其糟粕。", effect:{x:0, y:0}}, {text:"传统往往是压迫。", effect:{x:-0.1, y:-0.1}}, {text:"彻底摧毁旧世界。", effect:{x:-0.3, y:0.1}}] },
            { text: "意外怀孕了，能堕胎吗？", answers: [{text:"那是谋杀，绝对禁止。", effect:{x:0, y:0.3}}, {text:"严格限制。", effect:{x:0, y:0.1}}, {text:"有条件允许（如早期）。", effect:{x:0, y:0}}, {text:"我的身体我做主。", effect:{x:-0.1, y:-0.1}}, {text:"随意堕胎。", effect:{x:-0.2, y:-0.2}}] },
            { text: "得了绝症太痛苦，想安乐死？", answers: [{text:"生命神圣，自杀有罪。", effect:{x:0, y:0.2}}, {text:"仅允许停止治疗。", effect:{x:0, y:0.1}}, {text:"严格监管下允许。", effect:{x:0, y:-0.1}}, {text:"协助自杀合法化。", effect:{x:0, y:-0.2}}, {text:"我有权随时结束生命。", effect:{x:0, y:-0.3}}] },
            { text: "社会变得越来越多元化，是好是坏？", answers: [{text:"这是对主体文化的种族灭绝。", effect:{x:0.2, y:0.2}}, {text:"移民必须同化。", effect:{x:0.1, y:0.1}}, {text:"大熔炉模式。", effect:{x:0, y:0}}, {text:"沙拉碗模式。", effect:{x:-0.1, y:-0.1}}, {text:"完全包容。", effect:{x:-0.2, y:-0.2}}] },
            { text: "气候变暖，环保重要吗？", answers: [{text:"那是骗局，继续钻探。", effect:{x:0.2, y:-0.1}}, {text:"经济发展优先。", effect:{x:0.1, y:0}}, {text:"支持绿色能源。", effect:{x:0, y:0}}, {text:"绿色新政，强力干预。", effect:{x:-0.1, y:0.1}}, {text:"回归自然，放弃工业。", effect:{x:-0.2, y:-0.2}}] },
            { text: "怎么看吃肉和动物权益？", answers: [{text:"动物就是资源。", effect:{x:0.1, y:0}}, {text:"反对虐待。", effect:{x:0, y:0}}, {text:"提倡素食。", effect:{x:-0.1, y:0}}, {text:"赋予动物法律权利。", effect:{x:-0.2, y:0.1}}, {text:"肉食即谋杀。", effect:{x:-0.3, y:0.2}}] },
            { text: "艺术创作应该有边界吗？", answers: [{text:"禁止颓废艺术。", effect:{x:0, y:0.3}}, {text:"限制色情和暴力。", effect:{x:0, y:0.1}}, {text:"分级制度。", effect:{x:0, y:0}}, {text:"创作自由。", effect:{x:0, y:-0.2}}, {text:"无禁区（包括儿童色情）。", effect:{x:0, y:-0.4}}] },
            { text: "宗教在社会中的位置？", answers: [{text:"必须指导一切。", effect:{x:0.1, y:0.3}}, {text:"享有特权。", effect:{x:0.1, y:0.1}}, {text:"私事。", effect:{x:0, y:-0.1}}, {text:"取消特权。", effect:{x:-0.1, y:0}}, {text:"铲除迷信。", effect:{x:-0.2, y:0.2}}] },
            { text: "关于女权主义？", answers: [{text:"女性天职是家庭。", effect:{x:0.2, y:0.3}}, {text:"反对过激女权。", effect:{x:0.1, y:0.1}}, {text:"支持机会平等。", effect:{x:-0.1, y:0}}, {text:"反对父权制。", effect:{x:-0.2, y:0}}, {text:"女性分离主义。", effect:{x:-0.3, y:0.2}}] },
            { text: "我可以随意处置自己的身体吗（认知自由）？", answers: [{text:"身体发肤受之父母。", effect:{x:0, y:0.2}}, {text:"国家有保护义务。", effect:{x:0, y:0.1}}, {text:"适度管制。", effect:{x:0, y:0}}, {text:"自我决定。", effect:{x:0, y:-0.2}}, {text:"完全自由（包括嗑药）。", effect:{x:0, y:-0.3}}] },
            { text: "优生学（改良人类基因）？", answers: [{text:"强制绝育劣等基因。", effect:{x:0.2, y:0.4}}, {text:"鼓励优秀者生育。", effect:{x:0.1, y:0.1}}, {text:"历史教训，反对。", effect:{x:-0.1, y:0}}, {text:"基因编辑自由。", effect:{x:0.1, y:-0.2}}, {text:"设计新人类。", effect:{x:0.2, y:-0.3}}] },
            { text: "理想的家庭模式？", answers: [{text:"传统核心家庭。", effect:{x:0.1, y:0.2}}, {text:"鼓励婚育。", effect:{x:0.1, y:0.1}}, {text:"多元化。", effect:{x:-0.1, y:-0.1}}, {text:"多角恋。", effect:{x:-0.2, y:-0.2}}, {text:"公社育儿，废除家庭。", effect:{x:-0.3, y:-0.2}}] },
            { text: "学校应该教什么？", answers: [{text:"灌输服从和爱国。", effect:{x:0, y:0.3}}, {text:"禁止批判性种族理论。", effect:{x:0.1, y:0.1}}, {text:"实用知识。", effect:{x:0, y:0}}, {text:"社会正义。", effect:{x:-0.2, y:0}}, {text:"非学校化，自主学习。", effect:{x:0, y:-0.3}}] },
            { text: "公共场合裸体？", answers: [{text:"严惩不贷。", effect:{x:0, y:0.2}}, {text:"仅限特定场所。", effect:{x:0, y:0.1}}, {text:"不骚扰即可。", effect:{x:0, y:-0.1}}, {text:"天体主义。", effect:{x:0, y:-0.2}}, {text:"随处裸体。", effect:{x:0, y:-0.3}}] },
            { text: "关于赌博？", answers: [{text:"全面禁止。", effect:{x:0, y:0.2}}, {text:"国家垄断经营。", effect:{x:-0.1, y:0.1}}, {text:"允许但纳税。", effect:{x:0, y:0}}, {text:"完全开放。", effect:{x:0.2, y:-0.2}}, {text:"生活就是赌博。", effect:{x:0.1, y:-0.3}}] },
            { text: "城市规划风格？", answers: [{text:"宏大叙事，纪念碑。", effect:{x:0, y:0.2}}, {text:"严格分区。", effect:{x:0, y:0.1}}, {text:"混合社区。", effect:{x:-0.1, y:0}}, {text:"有机生长。", effect:{x:0.1, y:-0.2}}, {text:"无规划（九龙城寨）。", effect:{x:0.1, y:-0.3}}] },
            { text: "代孕？", answers: [{text:"全面禁止。", effect:{x:0, y:0.2}}, {text:"仅非商业。", effect:{x:0, y:0.1}}, {text:"合法监管。", effect:{x:0.1, y:-0.1}}, {text:"市场交易。", effect:{x:0.2, y:-0.2}}, {text:"国家统一分配。", effect:{x:0, y:0.4}}] },
            { text: "电子游戏？", answers: [{text:"电子海洛因。", effect:{x:0, y:0.3}}, {text:"监管内容。", effect:{x:0, y:0.1}}, {text:"艺术形式。", effect:{x:0, y:-0.1}}, {text:"游戏化生活。", effect:{x:0, y:0}}, {text:"虚拟至上。", effect:{x:0, y:-0.2}}] },
            { text: "种族问题？", answers: [{text:"种族有优劣。", effect:{x:0.2, y:0.3}}, {text:"色盲政策。", effect:{x:0.1, y:0}}, {text:"系统性歧视。", effect:{x:-0.1, y:0}}, {text:"平权法案。", effect:{x:-0.2, y:0}}, {text:"种族是虚构概念。", effect:{x:-0.2, y:-0.1}}] },
            { text: "方言和语言保护？", answers: [{text:"推广通用语。", effect:{x:0, y:0.2}}, {text:"官方通用。", effect:{x:0, y:0}}, {text:"保护方言。", effect:{x:-0.1, y:0}}, {text:"双语教学。", effect:{x:-0.1, y:-0.1}}, {text:"语言分离主义。", effect:{x:-0.2, y:-0.2}}] },
            { text: "体育竞技？", answers: [{text:"举国体制。", effect:{x:0, y:0.3}}, {text:"公平竞技。", effect:{x:0, y:0.1}}, {text:"商业运作。", effect:{x:0.1, y:0}}, {text:"全民健身。", effect:{x:-0.1, y:0}}, {text:"废除竞技。", effect:{x:-0.2, y:0}}] },
            { text: "殖民历史？", answers: [{text:"带来文明。", effect:{x:0.2, y:0.2}}, {text:"向前看。", effect:{x:0.1, y:0}}, {text:"道歉归还。", effect:{x:-0.1, y:0}}, {text:"消除符号。", effect:{x:-0.2, y:0}}, {text:"巨额赔偿。", effect:{x:-0.3, y:0}}] },
            { text: "身份认同？", answers: [{text:"国家认同。", effect:{x:0, y:0.2}}, {text:"文化认同。", effect:{x:0, y:0.1}}, {text:"个人认同。", effect:{x:0, y:-0.1}}, {text:"群体认同。", effect:{x:-0.1, y:0}}, {text:"无认同。", effect:{x:0, y:-0.2}}] }
        ],
        philosophy: [
            // 30 Philosophy/Tech Questions
            { text: "转基因食品（GMO）？", answers: [{text:"违反自然，全面禁止。", effect:{x:0, y:0.2}}, {text:"严格监管。", effect:{x:-0.1, y:0.1}}, {text:"科学推广。", effect:{x:0.1, y:0}}, {text:"企业自由。", effect:{x:0.2, y:-0.1}}, {text:"在家DIY生物黑客。", effect:{x:0.2, y:-0.3}}] },
            { text: "人工智能（AI）风险？", answers: [{text:"停止研发（巴特勒圣战）。", effect:{x:-0.1, y:0.1}}, {text:"国际监管。", effect:{x:-0.1, y:0.1}}, {text:"谨慎推进。", effect:{x:0, y:0}}, {text:"加速主义。", effect:{x:0.2, y:-0.2}}, {text:"机神统治。", effect:{x:-0.2, y:-0.3}}] },
            { text: "太空探索？", answers: [{text:"国家主导。", effect:{x:0, y:0.2}}, {text:"地球优先。", effect:{x:-0.1, y:0}}, {text:"私人航天。", effect:{x:0.2, y:-0.1}}, {text:"逃离地球。", effect:{x:0.2, y:-0.3}}, {text:"外星控制。", effect:{x:0, y:-0.2}}] },
            { text: "加密货币？", answers: [{text:"全面禁止。", effect:{x:-0.2, y:0.2}}, {text:"纳入监管。", effect:{x:-0.1, y:0.1}}, {text:"自由实验。", effect:{x:0.2, y:-0.1}}, {text:"Web3革命。", effect:{x:0.2, y:-0.2}}, {text:"去中心化。", effect:{x:0.3, y:-0.3}}] },
            { text: "人体增强（赛博格）？", answers: [{text:"保持纯洁。", effect:{x:0, y:0.2}}, {text:"医疗用途。", effect:{x:0, y:0.1}}, {text:"增强能力。", effect:{x:0.1, y:-0.1}}, {text:"机械飞升。", effect:{x:0.2, y:-0.3}}, {text:"赛博朋克。", effect:{x:0.1, y:0.2}}] },
            { text: "核能？", answers: [{text:"必须废除。", effect:{x:-0.1, y:0}}, {text:"过渡能源。", effect:{x:0, y:0}}, {text:"大力发展。", effect:{x:0.1, y:0}}, {text:"私人核电。", effect:{x:0.3, y:-0.2}}, {text:"核弹清洗。", effect:{x:-0.2, y:0.4}}] },
            { text: "社交媒体算法？", answers: [{text:"政府控制。", effect:{x:0, y:0.3}}, {text:"透明监管。", effect:{x:-0.1, y:0}}, {text:"平台自主。", effect:{x:0.2, y:-0.1}}, {text:"去中心化。", effect:{x:0.1, y:-0.2}}, {text:"炸毁数据。", effect:{x:-0.2, y:-0.3}}] },
            { text: "大数据收集？", answers: [{text:"国家治理。", effect:{x:-0.1, y:0.2}}, {text:"授权收集。", effect:{x:-0.1, y:0.1}}, {text:"便利优先。", effect:{x:0.1, y:0}}, {text:"数据产权。", effect:{x:0.2, y:-0.1}}, {text:"完全匿名。", effect:{x:0, y:-0.2}}] },
            { text: "全球化？", answers: [{text:"阴谋论。", effect:{x:0.2, y:0.3}}, {text:"破坏本土。", effect:{x:0.1, y:0.1}}, {text:"全球治理。", effect:{x:-0.1, y:0}}, {text:"自由流动。", effect:{x:0.2, y:-0.1}}, {text:"国际工运。", effect:{x:-0.3, y:0}}] },
            { text: "工业革命？", answers: [{text:"伟大进步。", effect:{x:0.2, y:0}}, {text:"带来异化。", effect:{x:-0.1, y:0}}, {text:"人类灾难。", effect:{x:-0.2, y:-0.2}}, {text:"回归部落。", effect:{x:-0.3, y:-0.3}}, {text:"全面自动化。", effect:{x:0.2, y:-0.1}}] },
            { text: "知识共享（Sci-Hub）？", answers: [{text:"盗窃犯罪。", effect:{x:0.2, y:0.2}}, {text:"情有可原。", effect:{x:0, y:0}}, {text:"免费共享。", effect:{x:-0.2, y:-0.1}}, {text:"反抗垄断。", effect:{x:-0.2, y:-0.2}}, {text:"信息自由。", effect:{x:-0.1, y:-0.3}}] },
            { text: "远程工作？", answers: [{text:"强制坐班。", effect:{x:0, y:0.2}}, {text:"混合办公。", effect:{x:0, y:0}}, {text:"数字游民。", effect:{x:0.1, y:-0.1}}, {text:"摆脱工作。", effect:{x:-0.1, y:-0.1}}, {text:"现代监狱。", effect:{x:-0.2, y:-0.2}}] },
            { text: "自动驾驶？", answers: [{text:"统一调度。", effect:{x:-0.1, y:0.1}}, {text:"严格法规。", effect:{x:0, y:0.1}}, {text:"技术进步。", effect:{x:0.1, y:0}}, {text:"取消驾照。", effect:{x:0.1, y:-0.1}}, {text:"电车难题。", effect:{x:0, y:0}}] },
            { text: "3D打印枪支？", answers: [{text:"绝对禁止。", effect:{x:0, y:0.3}}, {text:"严厉监管。", effect:{x:0, y:0.1}}, {text:"无法禁止。", effect:{x:0, y:-0.1}}, {text:"分布式防御。", effect:{x:0, y:-0.3}}, {text:"打印核弹。", effect:{x:0, y:-0.4}}] },
            { text: "人造食品？", answers: [{text:"禁止。", effect:{x:0, y:0.2}}, {text:"安全即可。", effect:{x:0, y:0}}, {text:"支持环保。", effect:{x:-0.1, y:0}}, {text:"未来食品。", effect:{x:0, y:0.1}}, {text:"吃虫子。", effect:{x:0, y:0.2}}] },
            { text: "火星殖民？", answers: [{text:"地球管辖。", effect:{x:0, y:0.2}}, {text:"富人逃生。", effect:{x:-0.2, y:0}}, {text:"新法律。", effect:{x:0.1, y:-0.2}}, {text:"私人领地。", effect:{x:0.3, y:0.2}}, {text:"独立星球。", effect:{x:-0.1, y:-0.3}}] },
            { text: "脑机接口？", answers: [{text:"禁止。", effect:{x:0, y:0.2}}, {text:"医疗用途。", effect:{x:0, y:0}}, {text:"下载知识。", effect:{x:0.1, y:-0.1}}, {text:"蜂群思维。", effect:{x:-0.4, y:0.4}}, {text:"意识上传。", effect:{x:0.2, y:-0.2}}] },
            { text: "人口问题？", answers: [{text:"强制控制。", effect:{x:0, y:0.3}}, {text:"鼓励生育。", effect:{x:0.1, y:0.1}}, {text:"个人选择。", effect:{x:0, y:-0.1}}, {text:"过剩神话。", effect:{x:0.1, y:0}}, {text:"自愿灭绝。", effect:{x:-0.2, y:-0.2}}] },
            { text: "真理？", answers: [{text:"权威掌握。", effect:{x:0, y:0.3}}, {text:"客观存在。", effect:{x:0, y:0}}, {text:"相对真理。", effect:{x:-0.1, y:-0.1}}, {text:"只有叙事。", effect:{x:-0.2, y:-0.2}}, {text:"权力产物。", effect:{x:-0.2, y:-0.2}}] },
            { text: "暴力？", answers: [{text:"国家垄断。", effect:{x:0, y:0.3}}, {text:"仅限自卫。", effect:{x:0, y:0}}, {text:"历史助产士。", effect:{x:-0.2, y:0.1}}, {text:"非暴力。", effect:{x:-0.1, y:-0.2}}, {text:"暴力美学。", effect:{x:0.4, y:0}}] },
            { text: "自我？", answers: [{text:"服从集体。", effect:{x:-0.2, y:0.3}}, {text:"个人主义。", effect:{x:0.1, y:0}}, {text:"只有个人。", effect:{x:0.2, y:-0.2}}, {text:"唯我真实。", effect:{x:0, y:-0.4}}, {text:"唯我独尊。", effect:{x:0.4, y:-0.4}}] },
            { text: "平等？", answers: [{text:"结果平等。", effect:{x:-0.3, y:0}}, {text:"机会平等。", effect:{x:0, y:0}}, {text:"等级自然。", effect:{x:0.2, y:0.2}}, {text:"适者生存。", effect:{x:0.4, y:0.4}}, {text:"无产平等。", effect:{x:-0.4, y:0}}] },
            { text: "法律？", answers: [{text:"恶法亦法。", effect:{x:0, y:0.3}}, {text:"社会契约。", effect:{x:0, y:0}}, {text:"阶级工具。", effect:{x:-0.2, y:0}}, {text:"私法契约。", effect:{x:0.2, y:-0.2}}, {text:"非法主义。", effect:{x:-0.4, y:-0.4}}] },
            { text: "现实？", answers: [{text:"唯物。", effect:{x:-0.1, y:0}}, {text:"唯心。", effect:{x:0, y:0}}, {text:"模拟世界。", effect:{x:0, y:-0.1}}, {text:"物理压迫。", effect:{x:-0.4, y:-0.4}}, {text:"我思故我在。", effect:{x:0, y:-0.3}}] },
            { text: "阴谋论？", answers: [{text:"信谣传谣。", effect:{x:0, y:0.3}}, {text:"保持怀疑。", effect:{x:0, y:0}}, {text:"深层政府。", effect:{x:0.2, y:-0.2}}, {text:"蜥蜴人。", effect:{x:0, y:-0.3}}, {text:"我是蜥蜴人。", effect:{x:0, y:-0.4}}] }
        ]
    },

    extreme_questions: [
        // 50 Extreme Questions
        { text: "Gateway: 蜂群思维？", answers: [{ text: "拒绝。", effect: { x: 0, y: 0 } }, { text: "我们。", effect: { x: -0.5, y: 0.5 } }, { text: "同化。", effect: { x: -0.8, y: 0.8 } }, { text: "抵抗无效。", effect: { x: -1.0, y: 1.0 } }, { text: "成为一体。", effect: { x: -1.5, y: 1.5 } }] },
        { text: "Gateway: 英社？", answers: [{ text: "自由。", effect: { x: 0, y: 0 } }, { text: "双重思想。", effect: { x: 0, y: 0.5 } }, { text: "老大哥。", effect: { x: 0, y: 0.8 } }, { text: "2+2=5。", effect: { x: 0, y: 1.0 } }, { text: "抹杀过去。", effect: { x: 0, y: 1.5 } }] },
        { text: "Gateway: 社达？", answers: [{ text: "仁慈。", effect: { x: 0, y: 0 } }, { text: "竞争。", effect: { x: 0.5, y: 0.5 } }, { text: "淘汰。", effect: { x: 0.8, y: 0.8 } }, { text: "猎杀。", effect: { x: 1.0, y: 1.0 } }, { text: "灭绝。", effect: { x: 1.5, y: 1.5 } }] },
        { text: "Gateway: 社群？", answers: [{ text: "私有。", effect: { x: 0, y: 0 } }, { text: "共享。", effect: { x: -0.5, y: 0 } }, { text: "公社。", effect: { x: -0.8, y: 0 } }, { text: "无我。", effect: { x: -1.0, y: 0 } }, { text: "完全平均。", effect: { x: -1.5, y: 0 } }] },
        { text: "Gateway: 侵略？", answers: [{ text: "和平。", effect: { x: 0, y: 0 } }, { text: "扩张。", effect: { x: 0.5, y: 0 } }, { text: "征服。", effect: { x: 0.8, y: 0 } }, { text: "杀戮。", effect: { x: 1.0, y: 0 } }, { text: "血祭。", effect: { x: 1.5, y: 0 } }] },
        { text: "Gateway: 灵魂？", answers: [{ text: "物理。", effect: { x: 0, y: 0 } }, { text: "梦境。", effect: { x: -0.5, y: -0.5 } }, { text: "致幻。", effect: { x: -0.8, y: -0.8 } }, { text: "飞升。", effect: { x: -1.0, y: -1.0 } }, { text: "虚无。", effect: { x: -1.5, y: -1.5 } }] },
        { text: "Gateway: 利己？", answers: [{ text: "道德。", effect: { x: 0, y: 0 } }, { text: "自我。", effect: { x: 0, y: -0.5 } }, { text: "幽灵。", effect: { x: 0, y: -0.8 } }, { text: "所有物。", effect: { x: 0, y: -1.0 } }, { text: "唯我。", effect: { x: 0, y: -1.5 } }] },
        { text: "Gateway: 贪婪？", answers: [{ text: "律法。", effect: { x: 0, y: 0 } }, { text: "获利。", effect: { x: 0.5, y: -0.5 } }, { text: "掠夺。", effect: { x: 0.8, y: -0.8 } }, { text: "猎杀。", effect: { x: 1.0, y: -1.0 } }, { text: "为所欲为。", effect: { x: 1.5, y: -1.5 } }] },
        { text: "核加速主义？", answers: [{ text: "不。", effect: { x: 0, y: 0 } }, { text: "也许。", effect: { x: -0.5, y: 0.5 } }, { text: "炸。", effect: { x: -1.0, y: 1.0 } }, { text: "全炸。", effect: { x: -1.5, y: 1.5 } }, { text: "外星人。", effect: { x: -2.0, y: 2.0 } }] },
        { text: "人类补完计划？", answers: [{ text: "拒绝。", effect: { x: 0, y: 0 } }, { text: "橙汁。", effect: { x: -0.5, y: 0.5 } }, { text: "融合。", effect: { x: -1.0, y: 1.0 } }, { text: "心灵。", effect: { x: -1.5, y: 1.5 } }, { text: "神。", effect: { x: -2.0, y: 2.0 } }] },
        { text: "赛博格化？", answers: [{ text: "肉体。", effect: { x: 0, y: 0 } }, { text: "义肢。", effect: { x: 0.5, y: -0.5 } }, { text: "全身。", effect: { x: 1.0, y: -1.0 } }, { text: "数据。", effect: { x: 1.5, y: -1.5 } }, { text: "永生。", effect: { x: 2.0, y: -2.0 } }] },
        { text: "回归猴子？", answers: [{ text: "文明。", effect: { x: 0, y: 0 } }, { text: "部落。", effect: { x: -0.5, y: -0.5 } }, { text: "野蛮。", effect: { x: -1.0, y: -1.0 } }, { text: "猩猩。", effect: { x: -1.5, y: -1.5 } }, { text: "单细胞。", effect: { x: -2.0, y: -2.0 } }] },
        { text: "绝对私有？", answers: [{ text: "公共。", effect: { x: 0, y: 0 } }, { text: "契约。", effect: { x: 0.5, y: -0.5 } }, { text: "奴隶。", effect: { x: 1.0, y: -1.0 } }, { text: "核弹。", effect: { x: 1.5, y: -1.5 } }, { text: "宇宙。", effect: { x: 2.0, y: -2.0 } }] },
        { text: "神权统治？", answers: [{ text: "世俗。", effect: { x: 0, y: 0 } }, { text: "信仰。", effect: { x: 0.5, y: 0.5 } }, { text: "狂热。", effect: { x: 1.0, y: 1.0 } }, { text: "圣战。", effect: { x: 1.5, y: 1.5 } }, { text: "天国。", effect: { x: 2.0, y: 2.0 } }] },
        { text: "种族清洗？", answers: [{ text: "平等。", effect: { x: 0, y: 0 } }, { text: "隔离。", effect: { x: 0.5, y: 0.5 } }, { text: "驱逐。", effect: { x: 1.0, y: 1.0 } }, { text: "灭绝。", effect: { x: 1.5, y: 1.5 } }, { text: "纯净。", effect: { x: 2.0, y: 2.0 } }] },
        { text: "完全监控？", answers: [{ text: "隐私。", effect: { x: 0, y: 0 } }, { text: "观察。", effect: { x: 0, y: 0.5 } }, { text: "记录。", effect: { x: 0, y: 1.0 } }, { text: "预测。", effect: { x: 0, y: 1.5 } }, { text: "控制。", effect: { x: 0, y: 2.0 } }] },
        { text: "取消文化？", answers: [{ text: "言论。", effect: { x: 0, y: 0 } }, { text: "抵制。", effect: { x: -0.5, y: 0 } }, { text: "封杀。", effect: { x: -1.0, y: 0 } }, { text: "抹除。", effect: { x: -1.5, y: 0 } }, { text: "思想罪。", effect: { x: -2.0, y: 0 } }] },
        { text: "生物黑客？", answers: [{ text: "自然。", effect: { x: 0, y: 0 } }, { text: "改造。", effect: { x: 0.5, y: -0.5 } }, { text: "变异。", effect: { x: 1.0, y: -1.0 } }, { text: "嵌合体。", effect: { x: 1.5, y: -1.5 } }, { text: "怪物。", effect: { x: 2.0, y: -2.0 } }] },
        { text: "暗杀政治？", answers: [{ text: "法律。", effect: { x: 0, y: 0 } }, { text: "赌注。", effect: { x: 0.5, y: -0.5 } }, { text: "悬赏。", effect: { x: 1.0, y: -1.0 } }, { text: "处决。", effect: { x: 1.5, y: -1.5 } }, { text: "无人生还。", effect: { x: 2.0, y: -2.0 } }] },
        { text: "共妻制？", answers: [{ text: "一夫一妻。", effect: { x: 0, y: 0 } }, { text: "多角恋。", effect: { x: -0.5, y: -0.5 } }, { text: "群婚。", effect: { x: -1.0, y: -1.0 } }, { text: "公共财产。", effect: { x: -1.5, y: -1.5 } }, { text: "无父无母。", effect: { x: -2.0, y: -2.0 } }] },
        { text: "太阳神？", answers: [{ text: "无神。", effect: { x: 0, y: 0 } }, { text: "崇拜。", effect: { x: 0.5, y: 0.5 } }, { text: "献祭。", effect: { x: 1.0, y: 1.0 } }, { text: "吞噬。", effect: { x: 1.5, y: 1.5 } }, { text: "成为太阳。", effect: { x: 2.0, y: 2.0 } }] },
        { text: "月球纳粹？", answers: [{ text: "历史。", effect: { x: 0, y: 0 } }, { text: "基地。", effect: { x: 0.5, y: 0.8 } }, { text: "反攻。", effect: { x: 1.0, y: 1.2 } }, { text: "第四帝国。", effect: { x: 1.5, y: 1.5 } }, { text: "铁空。", effect: { x: 2.0, y: 2.0 } }] },
        { text: "深层生态？", answers: [{ text: "保护。", effect: { x: 0, y: 0 } }, { text: "平等。", effect: { x: -0.5, y: -0.2 } }, { text: "盖亚。", effect: { x: -1.0, y: -0.5 } }, { text: "复仇。", effect: { x: -1.5, y: -1.0 } }, { text: "人类灭绝。", effect: { x: -2.0, y: -1.5 } }] },
        { text: "虚无主义？", answers: [{ text: "意义。", effect: { x: 0, y: 0 } }, { text: "荒诞。", effect: { x: 0, y: -0.5 } }, { text: "无。", effect: { x: 0, y: -1.0 } }, { text: "空。", effect: { x: 0, y: -1.5 } }, { text: "灭。", effect: { x: 0, y: -2.0 } }] },
        { text: "加速主义？", answers: [{ text: "慢。", effect: { x: 0, y: 0 } }, { text: "快。", effect: { x: 0.5, y: -0.5 } }, { text: "更快。", effect: { x: 1.0, y: -1.0 } }, { text: "光速。", effect: { x: 1.5, y: -1.5 } }, { text: "无限。", effect: { x: 2.0, y: -2.0 } }] },
        { text: "反动现代主义？", answers: [{ text: "进步。", effect: { x: 0, y: 0 } }, { text: "传统。", effect: { x: 0.5, y: 0.2 } }, { text: "钢铁。", effect: { x: 1.0, y: 0.5 } }, { text: "意志。", effect: { x: 1.5, y: 1.0 } }, { text: "科技野蛮。", effect: { x: 2.0, y: 1.5 } }] },
        { text: "神秘主义？", answers: [{ text: "科学。", effect: { x: 0, y: 0 } }, { text: "灵性。", effect: { x: 0, y: -0.5 } }, { text: "仪式。", effect: { x: 0, y: -1.0 } }, { text: "魔法。", effect: { x: 0, y: -1.5 } }, { text: "旧日支配者。", effect: { x: 0, y: -2.0 } }] },
        { text: "绝对和平？", answers: [{ text: "战争。", effect: { x: 0, y: 0 } }, { text: "非暴力。", effect: { x: -0.5, y: -0.5 } }, { text: "投降。", effect: { x: -1.0, y: -1.0 } }, { text: "躺平。", effect: { x: -1.5, y: -1.5 } }, { text: "植物人。", effect: { x: -2.0, y: -2.0 } }] },
        { text: "绝对极权？", answers: [{ text: "自由。", effect: { x: 0, y: 0 } }, { text: "秩序。", effect: { x: 0, y: 0.5 } }, { text: "服从。", effect: { x: 0, y: 1.0 } }, { text: "奴役。", effect: { x: 0, y: 1.5 } }, { text: "昆虫。", effect: { x: 0, y: 2.0 } }] },
        { text: "绝对混乱？", answers: [{ text: "法律。", effect: { x: 0, y: 0 } }, { text: "自由。", effect: { x: 0, y: -0.5 } }, { text: "无序。", effect: { x: 0, y: -1.0 } }, { text: "熵增。", effect: { x: 0, y: -1.5 } }, { text: "混沌。", effect: { x: 0, y: -2.0 } }] },
        { text: "绝对左翼？", answers: [{ text: "右。", effect: { x: 0, y: 0 } }, { text: "左。", effect: { x: -0.5, y: 0 } }, { text: "极左。", effect: { x: -1.0, y: 0 } }, { text: "超左。", effect: { x: -1.5, y: 0 } }, { text: "无限左。", effect: { x: -2.0, y: 0 } }] },
        { text: "绝对右翼？", answers: [{ text: "左。", effect: { x: 0, y: 0 } }, { text: "右。", effect: { x: 0.5, y: 0 } }, { text: "极右。", effect: { x: 1.0, y: 0 } }, { text: "超右。", effect: { x: 1.5, y: 0 } }, { text: "无限右。", effect: { x: 2.0, y: 0 } }] },
        { text: "后人类？", answers: [{ text: "人类。", effect: { x: 0, y: 0 } }, { text: "增强。", effect: { x: 0.2, y: -0.2 } }, { text: "改造。", effect: { x: 0.5, y: -0.5 } }, { text: "非人。", effect: { x: 1.0, y: -1.0 } }, { text: "数据流。", effect: { x: 1.5, y: -1.5 } }] },
        { text: "前人类？", answers: [{ text: "现代。", effect: { x: 0, y: 0 } }, { text: "古代。", effect: { x: -0.2, y: -0.2 } }, { text: "原始。", effect: { x: -0.5, y: -0.5 } }, { text: "动物。", effect: { x: -1.0, y: -1.0 } }, { text: "泥土。", effect: { x: -1.5, y: -1.5 } }] },
        { text: "唯心？", answers: [{ text: "物质。", effect: { x: 0, y: 0 } }, { text: "意识。", effect: { x: 0, y: -0.5 } }, { text: "感知。", effect: { x: 0, y: -1.0 } }, { text: "想象。", effect: { x: 0, y: -1.5 } }, { text: "梦。", effect: { x: 0, y: -2.0 } }] },
        { text: "唯物？", answers: [{ text: "精神。", effect: { x: 0, y: 0 } }, { text: "原子。", effect: { x: -0.2, y: 0.2 } }, { text: "机械。", effect: { x: -0.5, y: 0.5 } }, { text: "决定论。", effect: { x: -1.0, y: 1.0 } }, { text: "死寂。", effect: { x: -1.5, y: 1.5 } }] },
        { text: "我是谁？", answers: [{ text: "人。", effect: { x: 0, y: 0 } }, { text: "公民。", effect: { x: 0, y: 0.2 } }, { text: "神。", effect: { x: 0, y: -0.5 } }, { text: "虫。", effect: { x: -0.5, y: 0 } }, { text: "无。", effect: { x: 0, y: -1.0 } }] },
        { text: "世界？", answers: [{ text: "真实。", effect: { x: 0, y: 0 } }, { text: "模拟。", effect: { x: 0, y: -0.2 } }, { text: "地狱。", effect: { x: -0.2, y: -0.2 } }, { text: "天堂。", effect: { x: 0.2, y: 0.2 } }, { text: "幻象。", effect: { x: 0, y: -0.5 } }] },
        { text: "终结？", answers: [{ text: "开始。", effect: { x: 0, y: 0 } }, { text: "结束。", effect: { x: 0, y: 0 } }, { text: "循环。", effect: { x: 0, y: 0 } }, { text: "毁灭。", effect: { x: 0, y: 0 } }, { text: "重生。", effect: { x: 0, y: 0 } }] },
        { text: "你想要什么？", answers: [{ text: "烤肉。", effect: { x: 0, y: 0 } }, { text: "力量。", effect: { x: 1.0, y: 1.0 } }, { text: "自由。", effect: { x: 1.0, y: -1.0 } }, { text: "平等。", effect: { x: -1.0, y: -1.0 } }, { text: "秩序。", effect: { x: -1.0, y: 1.0 } }] },
        { text: "你会支持生物恐怖主义吗？", answers: [{text:"绝不。", effect: {x:0,y:0}}, {text:"如果是为了消灭劣等人。", effect: {x:0.4,y:0.4}}, {text:"如果是为了消灭全人类。", effect: {x:-0.4,y:-0.4}}, {text:"如果是为了利润。", effect: {x:0.4,y:-0.4}}, {text:"如果是为了革命。", effect: {x:-0.4,y:0.4}}] },
        { text: "你对儿童工作的看法？", answers: [{text:"严厉禁止童工。", effect: {x:-0.2,y:0}}, {text:"在家族企业帮忙是可以的。", effect: {x:0,y:0}}, {text:"如果他们自愿，为什么不呢？", effect: {x:0.2,y:-0.2}}, {text:"买卖儿童也是自由市场。", effect: {x:0.4,y:-0.4}}, {text:"儿童归国家所有。", effect: {x:-0.2,y:0.4}}] },
        { text: "你对同类相食的看法？", answers: [{text:"野蛮，恶心。", effect: {x:0,y:0}}, {text:"为了生存的最后手段。", effect: {x:0,y:0}}, {text:"这是个人自由。", effect: {x:0,y:-0.3}}, {text:"富人吃穷人。", effect: {x:0.3,y:0.3}}, {text:"这是某种神圣仪式。", effect: {x:0,y:0.2}}] },
        { text: "你支持人体冷冻吗？", answers: [{text:"骗局。", effect: {x:0,y:0}}, {text:"科学探索。", effect: {x:0,y:-0.1}}, {text:"这是永生的希望。", effect: {x:0.1,y:-0.2}}, {text:"只有精英才配复活。", effect: {x:0.2,y:0.2}}, {text:"我想冷冻自己直到未来。", effect: {x:0,y:-0.3}}] },
        { text: "你对海盗（海上劫掠）的看法？", answers: [{text:"罪犯，应处决。", effect: {x:0,y:0.3}}, {text:"浪漫化了的罪犯。", effect: {x:0,y:0}}, {text:"无政府状态的实践者。", effect: {x:0,y:-0.2}}, {text:"只要有抢劫许可证（私掠证）就行。", effect: {x:0.2,y:0.1}}, {text:"自由的海洋之子。", effect: {x:0,y:-0.3}}] },
        { text: "你对奴隶制的看法？", answers: [{text:"人类历史上最黑暗的一页。", effect: {x:-0.2,y:-0.2}}, {text:"经济发展的早期阶段。", effect: {x:0.1,y:0}}, {text:"债务奴隶是合法的契约。", effect: {x:0.3,y:-0.3}}, {text:"劣等民族天生是奴隶。", effect: {x:0.4,y:0.4}}, {text:"国家拥有所有人的劳动力。", effect: {x:-0.3,y:0.4}}] },
        { text: "你对公海自治领的看法？", answers: [{text:"逃税天堂，应打击。", effect: {x:-0.1,y:0.2}}, {text:"有趣的社会实验。", effect: {x:0,y:-0.1}}, {text:"摆脱国家控制的最后希望。", effect: {x:0.2,y:-0.3}}, {text:"建立私人王国的机会。", effect: {x:0.3,y:-0.2}}, {text:"生物奇迹城（BioShock）。", effect: {x:0.4,y:-0.4}}] },
        { text: "你对核冬天的看法？", answers: [{text:"人类灭绝。", effect: {x:0,y:0}}, {text:"通过技术避免。", effect: {x:0,y:0}}, {text:"这是重启文明的唯一方法（波萨达斯）。", effect: {x:-0.4,y:0.4}}, {text:"我也许能在废土称王。", effect: {x:0.3,y:-0.3}}, {text:"寒冷有助于思考。", effect: {x:0,y:0}}] },
        { text: "你对暗杀暴君的看法？", answers: [{text:"暴力不能解决问题。", effect: {x:0,y:0}}, {text:"必须经过审判。", effect: {x:-0.1,y:0}}, {text:"这是英雄行为。", effect: {x:0,y:-0.2}}, {text:"暴君已死，新王万岁。", effect: {x:0.2,y:0.2}}, {text:"所有统治者都该死。", effect: {x:0,y:-0.4}}] },
        { text: "你对决斗的看法？", answers: [{text:"野蛮的习俗。", effect: {x:0,y:0.2}}, {text:"法律禁止即可。", effect: {x:0,y:0}}, {text:"这是捍卫荣誉的方式。", effect: {x:0.2,y:0.1}}, {text:"双方自愿即可。", effect: {x:0,y:-0.2}}, {text:"西部世界。", effect: {x:0.1,y:-0.3}}] }
    ]
};