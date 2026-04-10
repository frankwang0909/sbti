/**
 * SBTI Test Data - Bilingual (ZH / EN)
 */

export const SBTI_TYPES = {
    "MALOU": {
        id: "MALO",
        name: { zh: "吗喽", en: "MALOU" },
        icon: "🐒",
        mbti_match: "ISFP / INFP",
        description: { 
            zh: "【进化未完全体】没进化好，主打一个听劝但命苦。生命力极强，但在打工中逐渐猴化。", 
            en: "[Under-evolved Primate] Life's tough but you're tougher. Slowly turning into a monkey at your desk."
        },
        persona: { 
            zh: "你的精神状态处于一种'挂在树上'的平衡。虽然每天嘴上说着要辞职，但一听到奖金还是会飞速爬树。你是这个荒诞世界的基石，也是最容易被安抚的受苦者。", 
            en: "Your mental state is balanced on a tree branch. You cry about quitting every day, but scramble up that corporate ladder the moment a bonus is mentioned. You are the pillar of this absurd world."
        },
        traits: { zh: ["听劝", "命苦", "猴化", "香蕉之力"], en: ["Compliant", "Hard-Knock", "Primal", "Banana Power"] },
        color: "#FFA000"
    },
    "DEAD": {
        id: "DEAD",
        name: { zh: "死者", en: "THE DEAD" },
        icon: "🪦",
        mbti_match: "ISTP / INTJ",
        description: { 
            zh: "【入土为安模式】精神状态已入土。世界毁灭也与我无关，除非影响我睡觉。", 
            en: "[Eternal Rest Mode] Mentally buried. The world can burn as long as it doesn't interrupt my nap."
        },
        persona: { 
            zh: "你已经看透了人间的喧嚣，选择了一种安详的'精神圆寂'。拒绝社交、拒绝内耗、拒绝一切需要心跳加速的行为。你的内心是一片荒野，偶尔有几个不识趣的灵魂飘过。", 
            en: "You've seen through the noise of humanity and chosen 'Spiritual Nirvana'. You reject socializing, overthinking, and anything that makes your heart beat faster. Your inner self is a peaceful wasteland."
        },
        traits: { zh: ["安详", "无感", "入土", "静止"], en: ["Peaceful", "Numb", "Buried", "Still"] },
        color: "#607D8B"
    },
    "ATM": {
        id: "ATM",
        name: { zh: "送钱者", en: "THE ATM" },
        icon: "💸",
        mbti_match: "ESFJ / ENFJ",
        description: { 
            zh: "【财散人安乐】不一定真有钱，但总是在为别人的情绪或麻烦买单。", 
            en: "[Human Wallet] You might not be rich, but you're always paying for other people's emotional baggage."
        },
        persona: { 
            zh: "你有一种宿命般的'散财体质'。别人的一句'求求你'或者'你真好'就能让你倾囊相授。虽然你的钱包在哭泣，但你在给予中获得了一种近乎圣母的自我感动。", 
            en: "You have a destiny for spending. One 'please' or 'you're so kind' from others and your wallet is open. While your bank account cries, your soul feels a saint-like satisfaction."
        },
        traits: { zh: ["慷慨", "心软", "破财", "利他"], en: ["Generous", "Soft-hearted", "Broke", "Altruistic"] },
        color: "#4CAF50"
    },
    "OHNO": {
        id: "OHNO",
        name: { zh: "哦不人", en: "MR. OH-NO" },
        icon: "😨",
        mbti_match: "ISFJ / INFJ",
        description: { 
            zh: "【脑内小剧场导演】习惯性焦虑，口头禅是'完了'。脑内已演完 100 种失败可能。", 
            en: "[Anxiety Director] Chronic worrier. Your internal movie theater only plays 100 ways you'll fail."
        },
        persona: { 
            zh: "你的一生都在做最坏的打算。如果有一件事可能出错，在你脑子里它已经出错了五万次。你是个活体预警系统，但也常因为过度警惕而导致处理器过热。", 
            en: "You spend your life preparing for the worst. If one thing could go wrong, it already failed 50,000 times in your head. You're a walking early-warning system that's constantly overheating."
        },
        traits: { zh: ["焦虑", "脑补", "完了", "内耗"], en: ["Anxious", "Imaginary", "Doomed", "Overthinking"] },
        color: "#F44336"
    },
    "CTRL": {
        id: "CTRL",
        name: { zh: "拿捏者", en: "THE CTRL" },
        icon: "📐",
        mbti_match: "ESTJ / ENTJ",
        description: { 
            zh: "【秩序的狂热信徒】掌控欲极强，试图把混乱的生活强行拽回正轨。", 
            en: "[Order Freak] Obsessed with control. Trying to force this chaotic world into your spreadsheet."
        },
        persona: { 
            zh: "你不能容忍生活中有任何'不可控'。你的日程表精确到秒，你的桌面整洁得让强迫症流泪。如果你是上帝，你会给每个人发一份 500 页的操作手册。", 
            en: "You can't tolerate randomness. Your schedule is to the second, your desk is terrifyingly clean. If you were God, everyone would receive a 500-page operating manual."
        },
        traits: { zh: ["掌控", "计划", "强迫", "爆炸"], en: ["Control", "Planning", "OCD", "Explosive"] },
        color: "#3F51B5"
    },
    "JOKER": {
        id: "JOKE",
        name: { zh: "小丑", en: "THE JOKER" },
        icon: "🤡",
        mbti_match: "ENTP / ENFP",
        description: { 
            zh: "【全职乐子人】自嘲式人格，擅长消解严肃。用幽默掩盖一切尴尬。", 
            en: "[Full-time Clown] Self-deprecating master. Using humor to mask the sheer embarrassment of existing."
        },
        persona: { 
            zh: "你是人间的喜剧，也是派对的燃料。你把所有的痛苦都加工成了段子，让别人发笑的同时也麻痹了自己。只要我先把自己变成笑话，这世界就伤害不到我。", 
            en: "You're the comedy of humanity and the fuel of parties. You process pain into jokes to make others laugh and numb yourself. If I am the joke, the world cannot hurt me."
        },
        traits: { zh: ["幽默", "自嘲", "解构", "乐子人"], en: ["Humor", "Self-mockery", "Deconstruction", "Fun-seeker"] },
        color: "#E91E63"
    },
    "SEXY": {
        id: "SEXY",
        name: { zh: "尤物", en: "THE SEXY" },
        icon: "💅",
        mbti_match: "ESFP / ESTP",
        description: { 
            zh: "【活体聚光灯】魅力四射，但也可能带点自恋。活在当下，美就完事了。", 
            en: "[Human Spotlight] Charismatic and slightly narcissistic. Living in the moment, looking fabulous."
        },
        persona: { 
            zh: "你不是在寻找镜子，就是在寻找镜子的路上。你认为世界的转动是为了给你提供一个绝佳的背景。你的自信让周围的人感到耀眼（或者刺眼），但这并不重要，你最爱自己。", 
            en: "You're either looking at a mirror or on your way to one. You believe the Earth rotates just to provide you with a backdrop. Your confidence is blinding, and you love yourself most."
        },
        traits: { zh: ["魅力", "自恋", "活在当下", "自信"], en: ["Charm", "Narcissism", "YOLO", "Confident"] },
        color: "#9C27B0"
    },
    "NPC": {
        id: "NPC",
        name: { zh: "背景板", en: "THE NPC" },
        icon: "🌫️",
        mbti_match: "ISTJ / ISFJ",
        description: { 
            zh: "【世界补丁】稳如老狗，存在感极低。是这个荒诞世界里最正常的补丁。", 
            en: "[World Patch] Solid as a rock, zero presence. The only 'normal' thing in this insane world."
        },
        persona: { 
            zh: "你是这个世界的底色。你按部就班，不卑不亢，几乎没有人会注意到你的存在。但如果没有你，这个疯狂的世界会在三秒钟内分崩离析。你很稳定，但也可能有点无聊。", 
            en: "You are the background color of reality. You follow rules and maintain order. Nobody notices you, but without you, the world would collapse in 3 seconds. Stable, yet maybe a bit dull."
        },
        traits: { zh: ["稳定", "平凡", "守规矩", "隐形"], en: ["Stable", "Ordinary", "Dutiful", "Invisible"] },
        color: "#9E9E9E"
    }
};

export const QUESTIONS = [
    {
        text: { zh: "周日晚上 10 点，老板在群里艾特你并说：'明天那个方案再改一版'，你的第一反应是？", en: "10 PM Sunday. Your boss tags you: 'One more revision for tomorrow's plan'. Your reaction?" },
        options: [
            { text: { zh: "立刻回复'收到'，然后开始焦虑得睡不着。", en: "Reply 'Received' immediately, then panic all night." }, type: "OHNO" },
            { text: { zh: "装死不回，直到第二天早上 9 点。", en: "Play dead. Don't reply until 9 AM tomorrow." }, type: "DEAD" },
            { text: { zh: "一边骂一边打开电脑，甚至想把电脑砸了。", en: "Cursing while opening the laptop, wanting to smash it." }, type: "CTRL" },
            { text: { zh: "发个'吗喽'表情包，暗示自己正在受苦。", en: "Send a monkey emoji to hint at your suffering." }, type: "MALOU" }
        ]
    },
    {
        text: { zh: "在奶茶店排队，前面的人纠结了 5 分钟还没选好，你会？", en: "Queuing for tea. The person in front has been stuck for 5 minutes. You?" },
        options: [
            { text: { zh: "内心疯狂输出，但表面依然平静如水。", en: "Internal screaming, external serenity." }, type: "OHNO" },
            { text: { zh: "直接掏出手机开始刷视频，完全不在意进度。", en: "Just scroll TikTok. Who cares about time?" }, type: "DEAD" },
            { text: { zh: "忍不住咳嗽一声或走上前问还有多久。", en: "Cough loudly or step up and ask how long it'll take." }, type: "CTRL" },
            { text: { zh: "自嘲地想：'我也经常这样，大家都是小丑'。", en: "Thinking: 'I do this too. We're all clowns'." }, type: "JOKER" }
        ]
    },
    {
        text: { zh: "去参加聚会发现除了主人谁都不认识，你会？", en: "At a party where you only know the host. You?" },
        options: [
            { text: { zh: "找个角落当 NPC，直到聚会结束。", en: "Stand in a corner like an NPC until it's over." }, type: "NPC" },
            { text: { zh: "主动社交，展示自己的魅力，成为全场焦点。", en: "Socialize and become the center of attention." }, type: "SEXY" },
            { text: { zh: "因为觉得尴尬而拼命喝水或吃东西。", en: "Aggressively eating/drinking to hide the awkwardness." }, type: "JOKER" },
            { text: { zh: "找个借口 10 分钟后就溜掉。", en: "Make an excuse and escape after 10 minutes." }, type: "DEAD" }
        ]
    },
    {
        text: { zh: "如果你突然中了一百万，你第一件事会做什么？", en: "You suddenly win $1 million. Your first move?" },
        options: [
            { text: { zh: "先给家里和朋友买一堆东西，虽然钱还没到账。", en: "Buy gifts for everyone before the money even arrives." }, type: "ATM" },
            { text: { zh: "列一个精密的财务规划表，精确到分。", en: "Create a precise financial plan down to the cent." }, type: "CTRL" },
            { text: { zh: "辞职，然后在家躺平直到钱花完。", en: "Quit job and lay flat until the money is gone." }, type: "DEAD" },
            { text: { zh: "怀疑是诈骗，然后开始搜索'中奖后如何不被绑架'。", en: "Suspect a scam and Google 'How not to be kidnapped after winning'." }, type: "OHNO" }
        ]
    },
    {
        text: { zh: "当你发现自己穿反了衣服且已经在外面走了一整天时，你：", en: "You realized your clothes were inside out all day in public. You:" },
        options: [
            { text: { zh: "当场石化，想立刻消失在这个星球上。", en: "Freeze. Wanting to vanish from this planet." }, type: "OHNO" },
            { text: { zh: "理直气壮地认为这是一种新时尚，只要我不尴尬...", en: "Claim it's a new fashion trend. I'm not embarrassed!" }, type: "JOKER" },
            { text: { zh: "面无表情地走进厕所换回来，内心毫无波澜。", en: "Walk to the restroom and change. Zero emotions." }, type: "NPC" },
            { text: { zh: "拍张照发朋友圈自黑：'确诊为智力未进化'。", en: "Take a photo and post: 'Diagnosis: Under-evolved'." }, type: "MALOU" }
        ]
    }
];

export const UI_STRINGS = {
    zh: {
        welcome: {
            tag: "2026 精神状态指南",
            title_top: "MBTI 已过时",
            subtitle: "别再测那些正经的人格了，测测你现在的“发疯”等级！",
            desc: "传统的 16 型人格无法定义你的工位日常，只有 SBTI 能确诊你的真实灵魂。",
            start_btn: "立即开启：灵魂大确诊",
            view_types: "查看 1627 种“发疯”人格全集"
        },
        result: {
            heading: "你的诊断结果是：",
            match_mbti: "匹配 MBTI: ",
            restart: "重新测试",
            view_all: "查看所有人格类型表"
        }
    },
    en: {
        welcome: {
            tag: "2026 Mental Health Guide",
            title_top: "MBTI is OUT",
            subtitle: "Stop being so serious. Check your current 'Going Insane' level!",
            desc: "16 MBTI types can't define your daily office struggle. Only SBTI can diagnose your true soul.",
            start_btn: "Start Diagnosis Now",
            view_types: "View All 1627 Chaotic Types"
        },
        result: {
            heading: "Your Diagnosis:",
            match_mbti: "MBTI Match: ",
            restart: "Retake Test",
            view_all: "View All Personality Types"
        }
    }
};
