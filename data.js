const tripData = {
  title: "Nagoya & Takayama Winter Loop 2027",
  subTitle: "2027.01.27 - 02.02 (7 Days) · 零金澤免Pass版",
  startDate: "2027-01-27T09:35:00",
  flights: [
    { type: "去程", date: "1月27日 (Wed)", flightNo: "國泰 CX536 (特選經濟)", depCode: "HKG", depTime: "09:35 起飛", arrCode: "NGO", arrTime: "14:10 抵達", tagClass: "tag-red" },
    { type: "回程", date: "2月2日 (Tue)", flightNo: "國泰 CX539 (商務艙)", depCode: "NGO", depTime: "15:15 起飛", arrCode: "HKG", arrTime: "19:10 抵達", tagClass: "tag-green" }
  ],
  days: [
    {
      day: 1, title: "Day 1 (1/27 Wed)",
      timeline: [
        { time: "06:30", title: "預計到達香港國際機場 (HKG)", tag: "提前 3 小時", tagClass: "tag-yellow", desc: "抵達香港機場，前往櫃位辦理特選經濟客艙報到、寄艙行李及安檢。" },
        { time: "09:35 - 14:10 ✈️ 飛行時間 3h 35m", title: "搭乘國泰航空 CX536 ➔ 名古屋 (NGO)", tag: "特選經濟客艙", tagClass: "tag-green", desc: "航班起飛，享受特選經濟舒適空間與機上餐飲，於 14:10 降落名古屋中部國際機場（**落機後可順便於 JR 綠色窗口或售票機，用實體信用卡一次過攞齊 Day 3 同 Day 6 兩程 JR 實體車票**）。" },
        { time: "14:10 - 15:15", title: "降落與出關手續", tag: "快速通關", tagClass: "tag-purple", desc: "特選經濟客艙優先下機，快速辦理入境與託運行李提取手續（約 65 分鐘）。" },
        { time: "15:15 - 16:15 🚗 交通時間 60mins", title: "機場搭乘 μ-SKY 抵達名古屋站 ➔ 飯店 [Check-in]", tag: "名鐵 μ-SKY (28mins)", tagClass: "tag-purple", desc: "• 15:15-16:05 依上方<b>「交通小卡」</b>指引完成購票與乘車，直達名鐵名古屋站。<br>• 16:05-16:15 步行前往 <b>Via Inn Nagoya Shinkansenguchi</b> 辦理 Check-in 寄放行李。<br>• 💡 <b>順路提醒</b>：今晚回飯店前記得先去 <b>Seven-Eleven 買定明天 (Day 2) 嘅簡單早餐</b>！" },
        { time: "16:30 - 18:30", title: "名古屋站商圈散策", tag: "高島屋 / JR Towers", tagClass: "tag-yellow", desc: "兩手空空逛 JR Central Towers，並至名鐵百貨 3 樓巴士中心熟悉明日上車位置。" },
        { time: "18:30 🚗 交通時間 15mins", title: "晚餐：とんかつジョニー (首選)", tag: "厚切炸豬排專門", tagClass: "tag-red", desc: "由商圈散步 10-15 分鐘至餐廳。<div class=\"food-inline-card\"><div style=\"font-weight:900; font-size:14px;\">🥩 とんかつジョニー (Tonkatsu Johnny) [首選]</div><div style=\"font-size:12.5px; color:var(--text-sub); margin:4px 0;\">• 狀態：人氣在地厚切炸豬排專門店</div><div class=\"link-btns\"><a href=\"https://tabelog.com/aichi/A2301/A230103/23075253/\" target=\"_blank\" class=\"btn-sm\">🔗 Tabelog 頁面</a><a href=\"https://www.google.com/maps/search/?api=1&query=とんかつジョニー+名古屋\" target=\"_blank\" class=\"btn-sm\">🗺️ Google 地圖</a></div></div>" }
      ]
    },
    {
      day: 2, title: "Day 2 (1/28 Thu)",
      timeline: [
        { time: "08:30 - 09:05 🥐 便利店早餐 & 步行前往巴士站", title: "享用 7-Eleven 早餐 ➔ 步行至名鐵巴士中心", tag: "免轉車直達", tagClass: "tag-yellow", desc: "輕鬆在飯店食完早餐，步行前往名鐵百貨 3 樓「名鉄バスセンター (名鐵巴士中心)」候車（建議 09:05 前抵達）。" },
        { time: "09:20 / 09:30 - 10:00 / 10:10 🚌 車程 40mins (直行便)", title: "搭乘名鐵直行高速巴士 ➔ 愛·地球博記念公園", tag: "車資 ¥1,200 (直達園區北口)", tagClass: "tag-purple", desc: "• <b>目標班次</b>：搭乘 <b>09:20</b> 或 <b>09:30</b> 開出之「直行便」（10:00 或 10:10 抵達園區北口）。<br>• 💡 <b>優勢</b>：一程過直達免轉地鐵與 Linimo，直接使用 Suica / ICOCA 拍卡或現場購票即可。" },
        { time: "10:25 - 11:00 🚶 青春之丘", title: "青春之丘 (Hill of Youth)", tag: "地球屋古董鐘", tagClass: "tag-yellow", desc: "• <b>地下室小提琴工作坊</b>：留意工作檯上聖司正在製作的小提琴木料、刨刀與木屑，細節完全按真實製琴師規格打造。<br>• <b>古董座鐘與貓男爵</b>：1 樓客廳精緻座鐘與櫃上的貓男爵（Baron）本尊。<br>• <b>書房與陽台風景</b>：留意書架上的古書，行出陽台可俯瞰整個青春之丘與遠處山景。" },
        { time: "11:05 - 12:15 🚶 魔女之谷", title: "魔女之谷 (Valley of Witches)", tag: "Premium 券精華", tagClass: "tag-red", desc: "• <b>霍爾的城堡（必睇重中之重）</b>：1 樓客廳會發光嘅卡西法與鍋碗瓢盆；2 樓霍爾睡房護夢網、魔法藥水微光瓶（還原度100%）；浴室洗手盆旁令霍爾染錯頭髮嘅藥水瓶與四色指針魔法門。<br>• <b>魔女之家</b>：滿牆乾燥草藥、蜘蛛網與蟲蛹標本；安雅房間裏藏著嘅錄音帶與搖滾樂海報。<br>• <b>奧琪諾之家</b>：1 樓母親魔藥店的研缽、天秤與玻璃燒瓶；2 樓琪琪房間的紅色收音機、經典黑裙與大蝴蝶結。<br>• <b>午餐建議</b>：約 12:00 喺<b>「飛空艇麵包店」</b>買麵包配熱湯，或者去<b>「飛天烤箱」</b>食熱辣辣午餐。" },
        { time: "12:15 - 12:30 🚶 魔法故里", title: "魔法故里 (Mononoke Village)", tag: "竹編邪魔神", tagClass: "tag-yellow", desc: "• 略過兒童滑梯，主要影<b>「達達拉城」</b>外觀同<b>「邪魔神」</b>巨型竹編雕像，15 分鐘已經好足夠。" },
        { time: "13:00 - 15:00 🏰 吉卜力大倉庫", title: "吉卜力大倉庫 (已訂 13:00 場次)", tag: "核心精華 · 影相＋動畫＋手信", tagClass: "tag-red", desc: "• <b>精選影相</b>：一入去直接排最想影嗰兩三個經典場景（例如無臉男電車、《借東西的小矮人》巨型方糖花園、《天空之城》機械人兵），影完就唔使再理其他人龍。<br>• <b>必去「獵戶座戲院」</b>：憑門票免費睇一場約 15 分鐘嘅吉卜力獨家短篇動畫（平時喺外面睇唔到，非常推薦）。<br>• <b>逛「冒險飛行團」商店</b>：大倉庫最出名嘅限定周邊店，最值得睇畫集、精緻擺設同園區限定食品手信。" },
        { time: "15:15 - 16:30 🚌 坐 APM 龍貓巴士往動動力森林", title: "動動力森林 ➔ 小月與小梅之家", tag: "毛茸茸電動龍貓車", tagClass: "tag-purple", desc: "• 15:15-15:35（坐車）：推薦俾 1,000 日圓搭可愛嘅電動<b>「APM 龍貓巴士」</b>（成人都可以搭，毛茸茸座椅好舒服）直達最深處嘅動動力森林。<br>• 15:35-16:20（動手尋寶）：「小月與小梅之家」所有櫃桶、衣櫃幾乎全部可以打開！大膽拉開五斗櫃，裏面整齊摺好昭和年代衣服、書包，甚至搵到小梅嘅草帽與橡果子；廚房柴火灶頭、傳統壓水泵同圓形木桶浴缸細節滿分。" },
        { time: "16:30 🚆 歡樂回程", title: "提早少少離園 ➔ 返回名古屋市區晚餐", tag: "Linimo 轉地鐵", tagClass: "tag-green", desc: "由「愛・地球博紀念公園站」搭磁浮電車 Linimo 轉地鐵返名古屋市區享用豐富晚餐。續住 Via Inn 名古屋站新幹線口。<div class=\"food-inline-card\"><div style=\"font-weight:900; font-size:14px;\">🍜 麵家 獅子丸 (雞白湯拉麵) / 站內美食</div><div style=\"font-size:12.5px; color:var(--text-sub); margin:4px 0;\">• 狀態：返到市區隨心享用美味晚餐</div><div class=\"link-btns\"><a href=\"https://tabelog.com/aichi/A2301/A230101/23056811/\" target=\"_blank\" class=\"btn-sm\">🔗 Tabelog 頁面</a><a href=\"https://www.google.com/maps/search/?api=1&query=麵家+獅子丸+名古屋\" target=\"_blank\" class=\"btn-sm\">🗺️ Google 地圖</a></div></div>" }
      ]
    },
    {
      day: 3, title: "Day 3 (1/29 Fri)",
      timeline: [
        { time: "08:43 - 11:18 🚗 交通時間 155mins", title: "JR 名古屋 ➔ JR 高山站 (單買車票)", tag: "🎫 08:43 JR 特急 Hida 3 號", tagClass: "tag-green", desc: "搭乘 <b>08:43 JR 特急飛驒號 3 號</b> 直達高山站（11:18 抵達）。使用 Day 1 已經攞定嘅實體車票入閘，攜帶大件行李上山。" },
        { time: "11:18 - 11:35 🚶 徒步 3mins", title: "高山櫻庵 ➔ [行李寄存]", tag: "站旁3分鐘", tagClass: "tag-green", desc: "出高山站步行 3 分鐘至高山櫻庵寄存大行李箱。" },
        { time: "11:35 - 13:30 🚄 搭 JR 前往飛驒古川", title: "飛驒古川漫遊 (白壁土藏街、氣多若宮神社)", tag: "你的名字取景地", tagClass: "tag-yellow", desc: "由高山搭乘 JR 普通/特急 20 分鐘即可直達飛驒古川，漫步靜謐古意街道、白壁土藏街打卡。" },
        { time: "13:30 - 17:00 🚶 返回高山三町古街", title: "高山三町古街 / 宮川朝市 / 飛驒牛握壽司", tag: "在地美食", tagClass: "tag-yellow", desc: "返回高山市區，輕鬆漫步三町古街、品嚐飛驒牛握壽司與水布丁。" },
        { time: "17:30 🚶 徒步 10mins", title: "晚餐：丸明 高山店 (飛驒牛燒肉)", tag: "⚠️ 現場排隊入座", tagClass: "tag-red", desc: "享受 A5 飛驒牛燒肉盛宴。<div class=\"food-inline-card\"><div style=\"font-weight:900; font-size:14px;\">🍲 丸明 高山店</div><div style=\"font-size:12.5px; color:var(--text-sub); margin:4px 0;\">• 狀態：17:30 到場直接現場排隊入座</div><div class=\"link-btns\"><a href=\"https://tabelog.com/gifu/A2104/A210401/21000041/\" target=\"_blank\" class=\"btn-sm\">🔗 Tabelog 頁面</a><a href=\"https://www.google.com/maps/search/?api=1&query=丸明+高山店\" target=\"_blank\" class=\"btn-sm\">🗺️ Google 地圖</a></div></div>" },
        { time: "20:00 🚶 徒步 8mins", title: "高山櫻庵 [Check-in] ＋ 免費夜鳴拉麵 🍜", tag: "溫泉與宵夜 (第1晚)", tagClass: "tag-green", desc: "登記入住高山櫻庵，享受頂樓露天雪見溫泉。每晚 <b>21:30 - 23:00</b> 供應<b>免費醬油拉麵</b>！" }
      ]
    },
    {
      day: 4, title: "Day 4 (1/30 Sat)",
      timeline: [
        { time: "08:00 - 08:50 🍳 飯店早餐", title: "高山櫻庵豐富日式朝食", tag: "包早餐", tagClass: "tag-green", desc: "悠閒享用高山櫻庵精緻日式溫泉早餐。" },
        { time: "08:50 - 12:40 🚌 濃飛巴士往返", title: "白川鄉合掌村秘境漫遊 🛖", tag: "🎫 濃飛巴士單買來回票", tagClass: "tag-green", desc: "• 搭乘 <b>08:50 頭幾班濃飛巴士</b>前往白川鄉合掌村（<b>提前一個月於 Highwaybus.com 預約來回指定席</b>），完美避開旅行團。<br>• 主力遊覽南端明善寺、神田家、三小屋及荻町城跡展望台。<br>• 下午搭乘回程巴士返回高山市區。" },
        { time: "14:00 - 18:00 🚶 高山市區漫步", title: "高山陣屋、古街小食與手沖咖啡", tag: "下午茶時光", tagClass: "tag-yellow", desc: "返高山市區後輕鬆漫步，去古民家咖啡廳歎手沖咖啡，享受高山慢活步調。" },
        { time: "19:00 🍜 晚餐與溫泉", title: "晚餐：高山拉麵 / 朴葉味噌燒 ➔ 續住高山櫻庵", tag: "第二晚溫泉", tagClass: "tag-green", desc: "晚餐品嚐高山地道拉麵或朴葉味噌燒，返回高山櫻庵繼續享用雪見溫泉與夜鳴拉麵（第二晚）。" }
      ]
    },
    {
      day: 5, title: "Day 5 (1/31 Sun)",
      timeline: [
        { time: "07:40 - 13:00 🚡 新穗高賞雪", title: "新穗高雙層纜車賞雪 ❄️", tag: "🎫 購買濃飛巴士＋纜車套票", tagClass: "tag-purple", desc: "• 搭乘 <b>07:40 頭幾班濃飛巴士</b>前往新穗高（朝早能見度最高、風雪最小）。<br>• 乘搭新穗高雙層纜車登上雪白展望台，欣賞壯麗北阿爾卑斯山絕景。" },
        { time: "13:00 - 15:00 📦 寄行李與買手信", title: "高山慢活買手信 ➔ 宅急便寄行李", tag: "兩手空空去名古屋", tagClass: "tag-green", desc: "下午返回高山市區買手信、漫步。<br>📦 <b>關鍵行李策略</b>：<b>15:00 前於高山櫻庵前台用宅急便將大件行李寄往明後天入住的名古屋酒店</b>，明日輕鬆輕裝出發！" },
        { time: "18:00 🍜 晚餐與溫泉", title: "晚餐：高山拉麵 / 朴葉味噌燒 ➔ 續住高山櫻庵", tag: "第三晚溫泉 (高山連住)", tagClass: "tag-green", desc: "享受在高山櫻庵的最後一晚雪見溫泉與免費夜鳴拉麵。" }
      ]
    },
    {
      day: 6, title: "Day 6 (2/1 Mon)",
      timeline: [
        { time: "08:00 - 09:15 🏮 宮川朝市", title: "逛高山宮川朝市", tag: "在地早市", tagClass: "tag-yellow", desc: "退房前再去一次宮川朝市，感受高山早晨的熱鬧與人情味。" },
        { time: "09:36 - 11:30 🚄 JR + 名鐵轉乘", title: "輕裝出發 ➔ 鵜沼站轉乘 ➔ 犬山城", tag: "不走回頭路順路遊", tagClass: "tag-purple", desc: "• 攜帶輕裝背囊出發！搭乘 <b>09:36 JR 特急 Hida 6號</b>，於 <b>「鵜沼站」</b> 落車（使用 Day 1 已經攞定嘅「高山 ➔ 鵜沼」實體車票）。<br>• 步行 3 分鐘轉乘名鐵（新鵜沼 ➔ 犬山遊園，免預約直接拍 IC 卡），中途落車遊覽日本現存最古老國寶天守——<b>犬山城</b>與城下町。<div class=\"warn-inline-box\">⚠️ <b>重要溫馨提示 (唔好拍 IC 卡！)</b>：<br>JR 高山站與鵜沼站<b>不支援</b>用 Suica / ICOCA 拍卡跨區出入閘！JR 段必須使用 Day 1 喺名古屋站一次過攞定嘅<b>實體紙本車票</b>入閘；落車轉乘<b>名鐵</b>後先可以開始拍 IC 卡。</div>" },
        { time: "13:30 - 17:30 🛍️ 購物衝刺", title: "名鐵返名古屋 ➔ 大須商店街購物衝刺", tag: "大須 / 榮商圈", tagClass: "tag-yellow", desc: "由犬山搭乘名鐵（直接拍 IC 卡）極速返回名古屋，入住 Meitetsu Inn / 領取昨日宅急便寄到酒店的大行李，前往大須商店街購物。" },
        { time: "18:30 🍱 晚餐名物", title: "晚餐：正宗炭燒鰻魚飯三吃 (登河 / しら河)", tag: "名古屋名物", tagClass: "tag-red", desc: "享用名古屋必食嘅炭燒鰻魚飯三吃。<div class=\"food-inline-card\"><div style=\"font-weight:900; font-size:14px;\">🍱 炭焼きうなぎ 登河 栄店 / うなぎのしら河</div><div style=\"font-size:12.5px; color:var(--text-sub); margin:4px 0;\">• 狀態：建議提前預約免排隊</div><div class=\"link-btns\"><a href=\"https://tabelog.com/aichi/A2301/A230103/23070440/\" target=\"_blank\" class=\"btn-sm\">🔗 Tabelog 頁面</a><a href=\"https://www.google.com/maps/search/?api=1&query=登河+栄店\" target=\"_blank\" class=\"btn-sm\">🗺️ Google 地圖</a></div></div>" }
      ]
    },
    {
      day: 7, title: "Day 7 (2/2 Tue)",
      timeline: [
        { time: "08:00 - 09:00 ☕ 喫茶店早餐", title: "名古屋高分喫茶店：KAKO 柳橋店 / BUCYO COFFEE", tag: "正宗小倉紅豆厚吐司", tagClass: "tag-yellow", desc: "喺名站附近高分復古喫茶店享用正宗小倉紅豆厚吐司與香濃咖啡，感受地道昭和風情！" },
        { time: "09:00 - 09:30 🧳 行李寄存", title: "退房出發 ➔ 名鐵名古屋站寄行李", tag: "輕裝出發去常滑", tagClass: "tag-purple", desc: "名古屋站退房，將大件行李寄存於 <b>「名鐵名古屋站」大型儲物櫃</b>，輕裝搭乘名鐵特急/準急去常滑（註：μSKY 唔停常滑站，要搭特急或準急）。" },
        { time: "09:30 - 11:45 🚶 陶瓷散步道", title: "常滑陶瓷散步道 & 巨型招財貓 (Tokonyan)", tag: "招財貓之鄉", tagClass: "tag-yellow", desc: "由常滑站漫步陶瓷散步道，打卡巨型招財貓與復古老街。" },
        { time: "12:00 - 12:15 🚗 返回機場", title: "取回行李 ➔ 中部國際機場 (NGO)", tag: "名鐵線 (5mins)", tagClass: "tag-purple", desc: "由常滑站搭乘名鐵返回機場，去名鐵車站提取寄存在 Locker 的大行李。" },
        { time: "12:30 - 15:15 🍷✨ 商務艙貴賓室", title: "提早 2.5 小時到達 ➔ 貴賓室極致享受", tag: "🛫 15:15 CX539 返港 (商務艙)", tagClass: "tag-green", desc: "輕鬆辦理商務艙託運與快速出關，直奔 JAL 櫻花 / 國泰貴賓室暢享精緻熱食與香檳，優雅地等待 15:15 商務艙登機返港。" }
      ]
    }
  ],
  transportGuide: [
    { tag: "Day 1 (1/27 Wed)", tagClass: "tag-yellow", segs: [ { title: "機場 ➔ 名鐵名古屋站（名鐵特急 μ-SKY · 特別車廂）", pay: "先喺閘前售票機買最近班次嘅 ¥450 座位券 (μ-Ticket) 揀連位 ➔ 直接用手機 Suica 拍卡入閘去對應月台車廂上車（若搭一般車廂則無需買 ¥450 券，直接拍卡上車）。", price: "約 ¥1,430 / 人（基本車資 ¥980 + 座位券 ¥450）", remark: "落機後順便去 JR 綠色窗口/指定席售票機，用訂飛實體信用卡一次過攞齊 Day 3 同 Day 6 嘅 JR 實體車票。" } ] },
    { tag: "Day 2 (1/28 Thu)", tagClass: "tag-purple", segs: [ { title: "名鐵巴士中心 ➔ 愛·地球博記念公園 (吉卜力)（名鐵直行高速巴士）", pay: "直接用手機 Suica / ICOCA 拍卡（或現場買飛），無需提前預約。", price: "¥1,200 / 人（單程）", remark: "建議搭 09:20 或 09:30「直行便」，一程直達園區北口免轉車。" } ] },
    { tag: "Day 3 (1/29 Fri)", tagClass: "tag-green", segs: [ { title: "① JR 名古屋 ➔ JR 高山站（JR 特急 Hida 3號 · 全車指定席）", pay: "提前 30 天網上 e5489 預約，用 Day 1 攞定嘅實體紙本車票入閘。", price: "約 ¥6,000 - ¥6,500 / 人", remark: "劃位時順便揀特大行李置放處座位。" }, { title: "② JR 高山 ➔ JR 飛驒古川 (來回)（JR 普通 / 特急列車）", pay: "現場售票機買飛或直接用 Suica 拍卡（車程約 20 分鐘）。", price: "約 ¥240 / 人（單程）", remark: "" } ] },
    { tag: "Day 4 (1/30 Sat)", tagClass: "tag-purple", segs: [ { title: "高山濃飛巴士中心 ➔ 白川鄉 (來回)（濃飛高速巴士 · 全車指定席）", pay: "提前一個月於 Highwaybus.com 網上預約付款並取票。", price: "約 ¥5,000 / 人（來回套票）", remark: "搶 08:50 頭幾班車去程，避開旅行團人潮。" } ] },
    { tag: "Day 5 (1/31 Sun)", tagClass: "tag-green", segs: [ { title: "高山濃飛巴士中心 ➔ 新穗高纜車站 (來回)（濃飛巴士 ＋ 雙層纜車套票）", pay: "隨時可於 Klook 預訂或於高山濃飛巴士中心現場購買套票。", price: "約 ¥7,500 - ¥9,000 / 人（巴士＋纜車套票）", remark: "建議搭 07:40 頭班車上山；15:00 前於高山櫻庵前台用宅急便寄大行李去名古屋酒店。" } ] },
    { tag: "Day 6 (2/1 Mon)", tagClass: "tag-red", segs: [ { title: "① JR 高山 ➔ JR 鵜沼站（JR 特急 Hida 6號 · 全車指定席）", pay: "提前 30 天網上 e5489 預約，必須用 Day 1 攞定嘅實體紙本車票入閘。", price: "約 ¥4,500 - ¥5,000 / 人", remark: "⚠️ 高山站與鵜沼站不支援 Suica 拍卡跨區出入閘！" }, { title: "② 新鵜沼 ➔ 犬山遊園 ➔ 名鐵名古屋站（名鐵線 · 免預約）", pay: "出 JR 鵜沼站步行 3 分鐘到名鐵新鵜沼站，全程直接用手機 Suica 拍卡出入閘即可。", price: "約 ¥620 / 人（新鵜沼➔犬山遊園 ¥180 + 犬山➔名古屋 ¥440）", remark: "" } ] },
    { tag: "Day 7 (2/2 Tue)", tagClass: "tag-yellow", segs: [ { title: "名鐵名古屋 ➔ 常滑站 ➔ 中部國際機場 (NGO)（名鐵特急 / 準急）", pay: "全程直接用手機 Suica 拍卡出入閘即可（無需劃位）。", price: "約 ¥990 / 人（名古屋➔常滑 ¥680 + 常滑➔機場 ¥310）", remark: "大行李先寄存於「名鐵名古屋站」大型儲物櫃；注意 μ-SKY 唔停常滑站，去常滑要搭特急或準急。" } ] }
  ],
  hotels: [
    { tag: "Day 1 & Day 2 (1/27 - 1/29) · 2晚", name: "Via Inn Nagoya Shinkansenguchi", desc: "• 雙人房-禁煙 (已確認入住 1/27 - 1/29)<br>• 位於名古屋站新幹線口。", mapQuery: "Via Inn Nagoya Shinkansenguchi" },
    { tag: "Day 3至Day 5 (1/29 - 2/1) · 3晚連住", name: "高山櫻庵 Takayama Ouan", desc: "• 已確定 3 晚高山連住<br>• JR 高山站步行 3 分鐘，頂樓露天雪見溫泉，每日 21:30 - 23:00 免費夜鳴醬油拉麵。", mapQuery: "高山櫻庵" },
    { tag: "Day 6 (2/1 - 2/2) · 1晚", name: "Meitetsu Inn Nagoyaeki Shinkansenguchi", desc: "• 標準雙人房-禁煙 (入住 2/1 - 2/2)<br>• 名古屋站新幹線口，方便次日前往常滑與機場。", mapQuery: "Meitetsu Inn Nagoyaeki Shinkansenguchi" }
  ],
  bookings: [
    { id: 1, date: "2026-11-10T13:00:00+08:00", tagClass: "tag-green", tagText: "✅ 1. 吉卜力公園門票 (已成功預訂)", subHtml: "• <b>票種</b>：Ghibli Park O-Sanpo Day Pass Premium (2 Adults)<br>• <b>預訂編號</b>：<b>9146156758</b> (My Page Password: <b>A234</b>)<br>• <b>入場日期與時間</b>：<b>2027/1/28 (Thu) 13:00 大倉庫入場</b>", link: "https://l-tike.com/st1/ghibli-en-2/Tt/Ttg010agreement/index", linkText: "🔗 LAWSON 吉卜力 My Page 查詢" },
    { id: 2, date: "2026-12-28T00:00:00+08:00", tagClass: "tag-green", tagText: "2. 奧飛驒巴士套票 (新穗高纜車套票)", subHtml: "• <b>開放預約日期</b>：<b>隨時可預訂</b>（出發前買定或於高山濃飛巴士中心購買）<br>• <b>適用行程</b>：Day 5 (1/31 Sun) 新穗高賞雪", link: "https://www.klook.com/zh-HK/activity/21617-okuhida-kamikochi-bus-tickets-shinhotaka-ropeway-nagoya/", linkText: "🔗 Klook 奧飛驒套票預訂" },
    { id: 3, date: "2026-12-29T09:00:00+08:00", tagClass: "tag-yellow", tagText: "3. JR 特急 Hida 3號 (08:43 名古屋 ➔ 高山) 單買指定席", subHtml: "• <b>開放預約日期</b>：<b>2026 年 12 月 29 日 (二) 09:00 (HKT)</b>（乘車前 30 天）<br>• <b>適用行程</b>：Day 3 (1/29 Fri) 08:43 發車（順便選特大行李席）<br>• 💡 <b>取票攻略</b>：Day 1 一落機或喺名古屋站 JR 綠色窗口/指定席售票機，帶埋<b>訂飛用嘅實體信用卡</b>，一次過同 Day 6 嗰程實體飛全部攞齊！", link: "https://www.westjr.co.jp/global/tc/", linkText: "🔗 e5489 劃位 Portal" },
    { id: 4, date: "2026-12-30T09:00:00+08:00", tagClass: "tag-purple", tagText: "4. 濃飛高速巴士 (高山 ➔ 白川鄉來回指定席)", subHtml: "• <b>開放預約日期</b>：<b>2026 年 12 月 30 日 (三) 09:00 (HKT)</b>（乘車前一個月）<br>• <b>適用行程</b>：Day 4 (1/30 Sat) 去程 08:50 / 回程", link: "https://japanbusonline.com/zh-tw/CourseSearch/11900040002", linkText: "🔗 Japan Bus Online 預約" },
    { id: 5, date: "2027-01-01T09:00:00+08:00", tagClass: "tag-yellow", tagText: "5. JR 特急 Hida 6號 (09:36 高山 ➔ 鵜沼) 單買指定席", subHtml: "• <b>開放預約日期</b>：<b>2027 年 1 月 1 日 (五) 09:00 (HKT)</b>（乘車前 30 天）<br>• <b>適用行程</b>：Day 6 (2/1 Mon) 09:36 發車，於鵜沼站落車轉名鐵去犬山城<br>• ⚠️ <b>重要溫馨提示</b>：JR 高山站與鵜沼站<b>不支援</b>拍 IC 卡跨區出入閘，必須憑 Day 1 已攞定嘅<b>實體紙本車票</b>乘車（轉乘名鐵後先拍 IC 卡）。", link: "https://www.westjr.co.jp/global/tc/", linkText: "🔗 e5489 劃位 Portal" },
    { id: 6, date: "2027-01-02T09:00:00+08:00", tagClass: "tag-red", tagText: "6. 炭焼きうなぎ 登河 栄店 (鰻魚飯三吃) 預約", subHtml: "• <b>開放預約日期</b>：<b>2027 年 1 月 2 日 (六)</b><br>• <b>適用行程</b>：Day 6 (2/1 Mon) 晚餐", link: "https://tabelog.com/aichi/A2301/A230103/23070440/", linkText: "🔗 Tabelog 登河 預約" }
  ],
  insurance: {
    trip: "2027/1/27 - 2027/2/2 / 日本 / 2人",
    policyNo: "ALEHKA700028478",
    emergencyTel: "+85221935875"
  }
};
