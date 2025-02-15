// ==UserScript==
// @name         3rdguide Translations
// @namespace    https://github.com/PaeP3nguin/honkai-guide
// @description  Simple valks and bosses EN translations
// @version      1.0.30
// @homepage     https://github.com/LoveRenamon/3rd_guide/blob/master/3rdguide.user.js
// @homepageURL  https://github.com/LoveRenamon/3rd_guide/blob/master/3rdguide.user.js
// @downloadURL  https://github.com/LoveRenamon/3rd_guide/raw/master/3rdguide.user.js
// @updateURL    https://github.com/LoveRenamon/3rd_guide/raw/master/3rdguide.user.js
// @author       zklm, PaeP3nguin, Davi (Debiddo) Gooz
// @icon         https://www.3rdguide.com/static/web/img/filter/avatericon.png
// @match        *3rdguide.com/web/teamnew/index
// @match        https://3rdguide.com/web/teamnew/index
// @match        https://www.3rdguide.com/web/teamnew/index
// @grant        none
// ==/UserScript==

(function () {
   "use strict";
   /* globals $ */

   // Allow new tab opening of team links
   // https://honkai-guide.web.app/calc/calc.html#/
   // Doesn't allow middle click on FF, mouseup to get around isn't possible because of popup detection,
   // alternative is to just replace div->a in each td but that messes up layout on 2nd col. Meh.
   $("#ct_det tbody")
      .off()
      .on("click", "tr", function () {
         const urlstr = $(this).find(".tgcol0").data("url");
         if (urlstr != undefined) window.open(urlstr, "_blank");
      });

   // Translations
   const tls = {
      // Misc
      上一页: "Previous",
      下一页: "Next",
      末页: "Last",
      首页: "First",
      记忆战场: "Memorial Arena",
      生物: "BIO",
      异能: "PSY",
      机械: "MECH",
      //  : "QUA",
      虚数: "IMG",
      //  : "SD",

      "战区:": "Bracket",
      SSS难度: "SSS difficulty",
      终极战区: "Exalted",
      高级战区: "Masters",
      "强敌:": "Bosses",
      "女武神:": "Valkyries",
      阵容: "Line-up",
      得分: "Score",
      造价: "Cost",
      操作难度: "Difficulty",
      好评数: "Likes",
      创建时间: "Date",
      超弦空间: "Superstring",
      扰动幅度: "Disturbance",

      // Bosses
      "托纳提乌-噬日之影": "Tonatiuh",
      "托纳提乌·噬日之影": "Tonatiuh",
      奔狼的领主: "Andrius",
      祸斗: "Huodou",
      吼姆王: "Homu King",
      吼姆表演家: "Homu King (Flux)", // v8.1 Abyss Flux HOMU
      // '卡莲': 'Kallen', // (use valkyrie TL)
      绯狱丸: "Hellmaru",
      海姆达尔: "Aesir Heimdall",
      湮灭沉灵: "Doom",
      教父军团: "Padrino MFG",
      特里波卡: "Mexicatl",
      "特里波卡-混沌之影": "Mexicatl - Umbreist",
      深渊终极区: "Couatl: Revenant",
      贝纳勒斯: "Benares",
      "姬麟·黑": "Dark Jixuanyuan",
      // '空之律者': 'Herrscher of the Void', // (use valkyrie TL)
      和平使者: "MHT-3 Pax",
      "MHT-3和平使者": "MHT-3 Pax",
      "MHT-3 和平使者": "MHT-3 Pax",
      "MHT-3B 天堂使者": "MHT-3B Nirvana",
      "MHT-3C 惩戒使者": "MHT-3C",
      阿湿波: "Assaka",
      地藏御魂: "Jizo Mitama",
      赫菲斯托斯: "Hephaestus ",
      // '影骑士·月轮': 'Shadow Knight', // (use valkyrie TL)
      帕凡提: "Parvati",
      迦尼萨: "Ganesha",
      雷神级崩坏兽: "Storm Templar",
      熔炎帝王: "Flame Emperor",
      寒冰帝王: "Frost Emperor",
      昆巴卡纳: "Kumbhakarna",
      督军级崩坏兽: "Legatus",
      死亡编织者: "Death Web",
      煌夜骑士: "Nocturnal Knight",
      蔽光之影: "Opaque Shadow",
      被诅咒的英魂: "Cursed Soul",
      "科亚特尔-复生之影": "Couatl",
      八重霞: "Kasumi",
      冰之律者: "Herrscher of Ice",
      陨冰之律者: "Herrscher of Rimestar",
      "虚树神骸-虚无主义": "Husk: Nihilus",
      "支配之律者-乌合之众": "Herrscher of Dominance",
      "支配之律者 乌合之众": "Herrscher of Dominance", // v8.0 variation
      伪神奥托: "False God Otto",
      "伪神·奥托": "False God Otto",
      "奥托·阿波卡利斯": "Otto Apocalypse",
      侵蚀之律者: "Herrscher of Corruption",
      "逐火十三英桀·爱莉希雅": "Flame-Chaser Elysia",
      "逐火十三英桀 爱莉希雅": "Flame-Chaser Elysia",
      "逐火十三英桀·千劫": "Flame-Chaser Kalpas",
      "逐火十三英桀 千劫": "Flame-Chaser Kalpas",
      "逐火十三英桀·科斯魔": "Flame-Chaser Kosma",
      "逐火十三英桀 科斯魔": "Flame-Chaser Kosma",
      "逐火十三英桀·维尔薇": "Flame-Chaser Vill-V",
      "逐火十三英桀 维尔薇": "Flame-Chaser Vill-V",
      "逐火十三英桀·阿波尼亚": "Flame-Chaser Aponia",
      "逐火十三英桀 阿波尼亚": "Flame-Chaser Aponia",
      "逐火十三英桀·梅比乌斯": "Flame-Chaser Mobius",
      "逐火十三英桀 梅比乌斯": "Flame-Chaser Mobius",
      "虚树神骸-神秘主义": "Husk: Mysticism",
      "虚数神骸·神秘主义": "Husk: Mysticism",
      "虚树神骸-存在主义": "Husk: Existentialism",
      毕舍遮: "Pishacha",
      塔之钳梏: "Wardens of Tower",
      旋肢之影: "Spinning Shadow",
      "陨星-瓜伊马斯": "Meteoroid: Guaymas",
      "异星肃卫-补阙": "Alien Guard - Supplement",
      殉死之兽: "Beast of Sacrifice",
      温蒂: "Wendy",
      渡鸦: "Raven",
      羽兔: "Hare",
      理型之种: "Seed of Idea",
      //"科亚特尔－复生之影": "",
      "陨星-奈埃尔": "Meteoroid: Fusion Epernay", // SD door frame
      "陨星-奈挨尔": "Meteoroid: Fusion Epernay", // SD door frame
      巡航审判团: "Cruising Tribunal",
      "飞鱼：游弋集群": "Flying Fish: Patrol Force",
      特拉洛克: "Tlaloc",
      "「业魔」凯文": "Kevin Diabolic",
      "「救世」凯文": "Deliverance Kevin",
      "「示现此世之兽」": "This Worldly Beast",
      瓦拉哈: "Valrahal", // QUA ver.: Ganesha, earlier: Varaha
      "薇塔-「海的深渊」": "Vita: Sea's Depths",
      "娑 -「一心三惑」": "Sa: Three Afflictions",
      "娑 -「成住坏空」": "Sa: Tribulations of Life",
      "娑-「轮转无我」": "Sa: Tribulations of Life", // website has a typo, missing the space
      "愿之芽-全知的羽翼": "Omniscience Wings", // Vita Boss, name too big: Sprout of Wishing: Omniscient Wings
      "「戒世遗光」": "Bygone Deliverance", // New Deliverance Kevin boss

      // === Superstring abyss translations ===
      // Abyss ranks
      "段位:": "Rank",
      禁忌: "Forbidden",
      原罪: "Sinful",
      苦痛: "Agony",
      红莲: "Red lotus",
      寂灭: "Nirvana",

      // Abyss weather
      "天气:": "Weather",
      恐雷: "Lightning",
      怯火: "Fire",
      惧冰: "Ice",
      量子: "Quantum",
      畏血: "Physical",
      狙击: "Ranged",
      天敌: "Type counter",
      燃素: "Ignite",
      战意: "Bloodlust",
      血棘: "Bleed",
      虚数: "Imaginary",
      坚阵: "Fortified",
      雷劫: "Paralyze",
      冰结: "Rime Trauma",
      协奏: "Symphony",
      统御: "Domination",
      失衡: "Unbalanced",
      星尘: "Stardust",
      白刃: "Melee",
      闪耀: "Stellar", // enabled Astral Ring
      黯灭: "Starless", // disabled Astral Ring
      幻灭: "Shadow", // Shadow Star Astral Ring
      共鸣: "Echoing", // Domain Resonance and World Star Astral Ring
      星冕: "Stellar Crown", // Omniscient Star and Rite of Oblivion Astral Ring
      易位: "Flux", // Heavenly Shift and Law of Ascension Astral Ring

      // Abyss stages
      "区域:": "Stage",
      边缘区: "Fringe (Left)",
      密集区: "Intensive (Top)",
      特异区: "Singular (Bottom)",
      高危区: "Perilous (Boss)",

      // Abyss bosses
      吼姆魔术师: "Homu Magician",
      "虚树神骸-虚无主义II": "Husk: Nihilus (hit count)",
      "神机-海姆达尔": "Heimdall",
      "娑婆阿湿波": "Saha: Assaka",
      "贝纳勒斯·冰形态": "Bernares (Ice)",
      群怪: "Mobs",
      群聚敌人: "Mobs (kill count)", // Kill count Enemies
      量产型教父: "Padrino MFG",
      "生物、机械": "BIO, MECH",
      "机械、异能": "MECH, PSY",
      "异能、机械": "PSY, MECH",
      "机械、生物": "MECH, BIO",
      "异能、生物": "PSY, BIO",
      "生物、异能": "BIO, PSY",
      "生物、异能、机械": "BIO, PSY, MECH",
      "虚数、异能": "IMG, PSY",
      //"托纳提乌-噬日之影": "Tonatiuh",
      "异种·巡行级崩坏兽": "PSY: Patroller",
      "黑之赐死、白之悬剑": "(Black and White twins)", // "Black Whine of Theramenes, White Sword of Damocles", // too big
      婆娑阿湿波: "Saha: Assaka", // ???? why inverted first name? used at Stellar Abyss
      "娑婆 阿湿波": "Saha: Assaka", // why theres so many Assaka variants?
      愿之芽: "Sprout of Wishes",
      //"薇塔-「海的深渊」": "Vita: Deep Sea Abyss", // Now uses the short name "Vita: Sea's Depths"

      // === Valkyries ===
      符华: "Fu Hua",
      "浮生·渡尘之羽": "Fenghuang of Vicissitude",
      识之律者: "Herrscher of Sentience",
      云墨丹心: "Azure Empyrea",
      雾都迅羽: "Hawk of the Fog",
      白夜执事: "Night Squire",
      炽翎: "Phoenix",
      "影骑士·月轮": "Shadow Knight",
      "女武神·迅羽": "Valkyrie Accipiter",

      明日香: "Asuka",

      八重樱: "Yae Sakura",
      夜隐重霞: "Darkbolt Jonin",
      真炎幸魂: "Flame Sakitama",
      逆神巫女: "Gyakushinn Miko",
      "御神装·勿忘": "Goushinnso Memento",

      "希儿·芙乐艾": "Seele Vollerei",
      魇夜星渊: "Starchasm Nyx",
      彼岸双生: "Stygian Nymph",
      幻海梦蝶: "Swallowtail Phantasm",
      死生之律者: "Herrscher of Rebirth",

      幽兰黛尔: "Bianka Ataegina \"Durandal\"",
      "女武神·荣光": "Valkyrie Gloria",
      "辉骑士·月魄": "Bright Knight: Excelsis",
      不灭星锚: "Dea Anchora",
      天元骑英: "Palatinus Equinox",

      德丽莎: "Theresa Apocalypse",
      "暮光骑士·月煌": "Twilight Paladin",
      月下初拥: "Luna Kindred",
      神恩颂歌: "Celestial Hymn",
      "处刑装·紫苑": "Violet Executer",
      樱火轮舞: "Sakuno Rondo",
      "女武神·誓约": "Valkyrie Pledge",
      朔夜观星: "Starlit Astrologos",
      "月下誓约·予爱以心": "Lunar Vow: Crimson Love",

      琪亚娜: "Kiana Kaslana",
      "咚！炽愿吉星": "Ba-dum! Fiery Wishing Star",
      终焉之律者: "Herrshcer of Finality",
      薪炎之律者: "Herrscher of Flamescion",
      天穹游侠: "Void Drifter",
      空之律者: "Herrscher of the Void",
      圣女祈祷: "Divine Prayer",
      "女武神·游侠": "Valkyrie Ranger",
      "白骑士·月光": "Knight Moonbeam",
      "领域装·白练": "White Comet",

      布洛妮娅: "Bronya Zaychik",
      真理之律者: "Herrscher of Truth",
      迷城骇兔: "Haxxor Bunny",
      理之律者: "Herrscher of Reason",
      彗星驱动: "Drive Kometa",
      异度黑核侵蚀: "Black Nucleus",
      银狼的黎明: "Wolf's Dawn",
      次元边界突破: "Dimension Breaker",
      "女武神·战车": "Valkyrie Chariot",
      "驱动装·山吹": "Yamabuki Armor",
      雪地狙击: "Snowy Sniper",
      次生银翼: "Silverwing: N-EX",

      阿琳姐妹: "Olenyevas",
      狂热蓝调Δ: "Fervent Tempo Delta",
      樱桃炸弹: "Molotov Cherry",
      蓝莓特攻: "Blueberry Blitz",

      芽衣: "Raiden Mei",
      始源之律者: "Herrscher of Origin",
      断罪影舞: "Danzai Spectramancer",
      雷之律者: "Herrscher of Thunder",
      破晓强袭: "Striker Fulminata",
      雷电女王的鬼铠: "Lightning Empress",
      "脉冲装·绯红": "Crimson Impulse",
      "女武神·强袭": "Valkyrie Bladestrike",
      影舞冲击: "Shadow Dash",

      丽塔: "Rita Rossweisse",
      失落迷迭: "Fallen Rosemary",
      "苍骑士·月魂": "Argent Knight: Artemis",
      "猎袭装·影铁": "Phantom Iron",
      黯蔷薇: "Umbral Rose",
      缭乱星棘: "Spina Astera",

      姬子: "Murata Himeko",
      "真红骑士·月蚀": "Vermilion Knight: Eclipse",
      极地战刃: "Arctic Kriegsmesser",
      "融核装·深红": "Scarlet Fusion",
      战场疾风: "Battle Storm",
      "女武神·凯旋": "Valkyrie Triumph",
      血色玫瑰: "Blood Rose",

      卡莲: "Kallen Kaslana",
      原罪猎人: "S\xFCndenj\xE4ger",
      第六夜想曲: "Sixth Serenade",
      "圣仪装·今样": "Imayoh Ritual",

      菲谢尔: "Fischl",
      "断罪皇女！！": "Prinzessin der Verurteilung",

      爱莉希雅: "Elysia",
      "粉色妖精小姐♪": "Miss Pink Elf♪",
      "真我·人之律者": "Herrscher of Human",

      "娜塔莎·希奥拉": "Natasha Cioara \"Raven\"",
      午夜苦艾: "Midnight Absinthe",

      梅比乌斯: "Mobius",
      "无限·噬界之蛇": "Infinite Ouroboros",

      "卡萝尔·佩珀": "Carole Pepper",
      甜辣女孩: "Sweet'n'Spicy",

      帕朵菲莉丝: "Pardofelis",
      "空梦·掠集之兽": "Reverist Calico",

      阿波尼亚: "Aponia",
      "戒律·深罪之槛": "Disciplinary Perdition",

      伊甸: "Eden",
      "黄金·璀耀之歌": "Golden Diva",

      格蕾修: "Griseo",
      "繁星·绘世之卷": "Starry Impression",
      "天行·绘星之卷": "Cosmic Expression",

      维尔薇: "Vill-V",
      "螺旋·愚戏之匣": "Helical Contraption",

      李素裳: "Li Sushang",
      "玉骑士·月痕": "Jade Knight",

      "爱衣·休伯利安Λ": "Ai·Hyperion Λ",
      时帆旅人: "Chrono Navi",

      苏莎娜: "Susannah Manatt",
      "女武神·热砂": "Valkyrie Quicksand",

      "米丝忒琳·沙尼亚特": "Misteln Schariac",
      织羽梦旌: "Dreamweaver",

      普罗米修斯: "PROMETHEUS",
      终末协理0017: "Terminal Aide 0017",

      时雨绮罗: "Shigure Kira",
      糖露星霜: "Sugary Starburst",

      西琳: "Sirin",
      "奇迹☆魔法少女": "Miracle ☆ Magical Girl",

      "科拉莉·6626·普朗克": "Coralie 6626 Planck",
      "女武神·重机": "Valkyrie Blastmetal",

      "埃尔德什·赫丽娅": "Erdős Helia",
      "女武神·巡矢": "Valkyrie Boltstorm",

      希娜狄雅: "Senadina",
      "深空定锚·曙光": "Deepspace Anchor: First Light",

      瑟莉姆: "Thelema Nutriscu",
      "享乐狂宴·邀影": "Mad Pleasure: Shadowbringer",

      灯: "Tsavorae \"Lantern\"",
      "破弃孤光·逐影": "Lone Destruction: Shadowchaser",

      松雀: "Maria \"Songque\"",
      "瞒天乐游·曙影": "Jovial Deception: Shadowdimmer",

      瑟拉珮姆: "Serapeum",

      "德丽莎（链刃）": "Theresa Apocalypse (Chain Blades)",
      天命难逃: "Schicksal's Imperative",

      薇塔: "Vita",
      "孑遗千星": "Lone Planetfarer",

      花火: "Sparkle",
      "诡戏千役「友情出演！」": "Thousand-Faced Maestro: Cameo!",

      "幽兰黛尔（梭镖）": "Bianka Ataegina \"Durandal\" (Spear)",
      天光驰彻: "Reign Solaris",
   };

   const translateElement = function (tls, el) {
      if (el && tls[el.innerText]) {
         el.innerHTML = el.innerHTML.replace(el.innerText, tls[el.innerText]);
      }
   };

   const translate = function () {
      const dropdownText = $(".filter-text > input").val();
      $(".filter-text > input").val(dropdownText === "超弦空间" ? "Abyss" : "MA");

      $("th, span, .table-search, .label, .title").each(function () {
         translateElement(tls, this);
      });

      // Fix styling. Have to do this on click since it can get reset.
      $(".table-team-box .table-search").height(600);
      $(".table-search .goodwar .content").height(500);
   };

   // Translate on table click.
   $(".table-search").on("click", ".select-item", () => setTimeout(translate, 200));
   $(".el-select-dropdown__item").on("click", () => setTimeout(translate, 200));

   translate();
})();