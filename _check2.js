
    /**
     * 题库原则：只用常见、无歧义、已确认无误的名篇名句。
     * 题型：选词补全（单空），不做平仄/字数等复杂校验。
     */
    const BANK = [
      {
        title: "关雎",
        author: "《诗经》",
        line: "关关雎鸠，在河之洲。窈窕淑女，君子好逑。参差荇菜，左右流之。窈窕淑女，寤寐求之。",
        hint: "《诗经》开篇，以雎鸠起兴，写求偶之思。",
      level: "medium",
      },
      {
        title: "蒹葭",
        author: "《诗经》",
        line: "蒹葭苍苍，白露为霜。所谓伊人，在水一方。溯洄从之，道阻且长。溯游从之，宛在水中央。",
        hint: "可望而不可即的追寻。",
      level: "medium",
      },
      {
        title: "氓（节选）",
        author: "《诗经》",
        line: "桑之未落，其叶沃若。于嗟鸠兮，无食桑葚。于嗟女兮，无与士耽。士之耽兮，犹可说也。",
        hint: "劝诫女子勿为爱情所困。",
      level: "medium",
      },
      {
        title: "观沧海",
        author: "曹操 · 汉",
        line: "东临碣石，以观沧海。水何澹澹，山岛竦峙。树木丛生，百草丰茂。秋风萧瑟，洪波涌起。",
        hint: "以海景写胸襟，气象宏阔。",
      level: "medium",
      },
      {
        title: "木兰诗（节选）",
        author: "《乐府诗集》",
        line: "唧唧复唧唧，木兰当户织。不闻机杼声，惟闻女叹息。问女何所思，问女何所忆。",
        hint: "叙事诗开篇，家国与儿女情并举。",
      level: "medium",
      },
      {
        title: "饮酒·其五（节选）",
        author: "陶渊明 · 晋",
        line: "结庐在人境，而无车马喧。问君何能尔，心远地自偏。采菊东篱下，悠然见南山。",
        hint: "心远则境自静，名句“采菊东篱下”。",
      level: "medium",
      },
      {
        title: "归园田居·其一（节选）",
        author: "陶渊明 · 晋",
        line: "少无适俗韵，性本爱丘山。误落尘网中，一去三十年。羁鸟恋旧林，池鱼思故渊。",
        hint: "厌俗归隐，借“羁鸟”“池鱼”写羁绊。",
      level: "medium",
      },
      {
        title: "登幽州台歌",
        author: "陈子昂 · 唐",
        line: "前不见古人，后不见来者。念天地之悠悠，独怆然而涕下。",
        hint: "千古孤愤，一瞬苍茫。",
      level: "medium",
      },
      {
        title: "次北固山下",
        author: "王湾 · 唐",
        line: "客路青山外，行舟绿水前。潮平两岸阔，风正一帆悬。海日生残夜，江春入旧年。",
        hint: "“海日生残夜，江春入旧年”写时序更迭。",
      level: "medium",
      },
      {
        title: "使至塞上",
        author: "王维 · 唐",
        line: "单车欲问边，属国过居延。征蓬出汉塞，归雁入胡天。大漠孤烟直，长河落日圆。",
        hint: "边塞名句“大漠孤烟直”。",
      level: "medium",
      },
      {
        title: "闻王昌龄左迁龙标遥有此寄",
        author: "李白 · 唐",
        line: "杨花落尽子规啼，闻道龙标过五溪。我寄愁心与明月，随君直到夜郎西。",
        hint: "借明月寄相思与慰藉。",
      level: "medium",
      },
      {
        title: "望岳（节选）",
        author: "杜甫 · 唐",
        line: "岱宗夫如何，齐鲁青未了。造化钟神秀，阴阳割昏晓。会当凌绝顶，一览众山小。",
        hint: "“会当凌绝顶”是少年壮志。",
      level: "medium",
      },
      {
        title: "春望",
        author: "杜甫 · 唐",
        line: "国破山河在，城春草木深。感时花溅泪，恨别鸟惊心。烽火连三月，家书抵万金。",
        hint: "乱世家国之痛，沉郁顿挫。",
      level: "medium",
      },
      {
        title: "登高（节选）",
        author: "杜甫 · 唐",
        line: "无边落木萧萧下，不尽长江滚滚来。万里悲秋常作客，百年多病独登台。艰难苦恨繁霜鬓，潦倒新停浊酒杯。",
        hint: "“无边落木”“不尽长江”对仗壮阔。",
      level: "hard",
      },
      {
        title: "月夜忆舍弟",
        author: "杜甫 · 唐",
        line: "戍鼓断人行，边秋一雁声。露从今夜白，月是故乡明。有弟皆分散，无家问死生。",
        hint: "“月是故乡明”最为传诵。",
      level: "medium",
      },
      {
        title: "白雪歌送武判官归京（节选）",
        author: "岑参 · 唐",
        line: "北风卷地白草折，胡天八月即飞雪。忽如一夜春风来，千树万树梨花开。",
        hint: "以梨花喻雪，奇崛瑰丽。",
      level: "medium",
      },
      {
        title: "送元二使安西",
        author: "王维 · 唐",
        line: "渭城朝雨浥轻尘，客舍青青柳色新。劝君更尽一杯酒，西出阳关无故人。",
        hint: "送别绝唱，“阳关无故人”。",
      level: "medium",
      },
      {
        title: "望洞庭湖赠张丞相（节选）",
        author: "孟浩然 · 唐",
        line: "气蒸云梦泽，波撼岳阳城。欲济无舟楫，端居耻圣明。",
        hint: "写洞庭气势，寄望入仕。",
      level: "medium",
      },
      {
        title: "酬乐天扬州初逢席上见赠（节选）",
        author: "刘禹锡 · 唐",
        line: "沉舟侧畔千帆过，病树前头万木春。今日听君歌一曲，暂凭杯酒长精神。",
        hint: "以“沉舟”“病树”写新旧更替与振作。",
      level: "medium",
      },
      {
        title: "早春呈水部张十八员外",
        author: "韩愈 · 唐",
        line: "天街小雨润如酥，草色遥看近却无。最是一年春好处，绝胜烟柳满皇都。",
        hint: "早春之“微”，胜过晚春之“浓”。",
      level: "medium",
      },
      {
        title: "琵琶行（节选）",
        author: "白居易 · 唐",
        line: "大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。",
        hint: "以拟声与比喻写琵琶音色层次。",
      level: "hard",
      },
      {
        title: "蜀道难（节选）",
        author: "李白 · 唐",
        line: "噫吁嚱，危乎高哉。蜀道之难，难于上青天。",
        hint: "夸张铺陈，极写蜀道险峻。",
      level: "hard",
      },
      {
        title: "将进酒（节选）",
        author: "李白 · 唐",
        line: "君不见黄河之水天上来，奔流到海不复回。君不见高堂明镜悲白发，朝如青丝暮成雪。",
        hint: "人生易逝，豪放纵酒。",
      level: "hard",
      },
      {
        title: "行路难·其一（节选）",
        author: "李白 · 唐",
        line: "金樽清酒斗十千，玉盘珍羞直万钱。停杯投箸不能食，拔剑四顾心茫然。",
        hint: "抑郁与豪情并存的开篇。",
      level: "medium",
      },
      {
        title: "逢入京使",
        author: "岑参 · 唐",
        line: "故园东望路漫漫，双袖龙钟泪不干。马上相逢无纸笔，凭君传语报平安。",
        hint: "边塞征人，思乡情切。",
      level: "medium",
      },
      {
        title: "题破山寺后禅院",
        author: "常建 · 唐",
        line: "曲径通幽处，禅房花木深。山光悦鸟性，潭影空人心。万籁此俱寂，但余钟磬音。",
        hint: "清幽空寂的禅境。",
      level: "medium",
      },
      {
        title: "望月怀远",
        author: "张九龄 · 唐",
        line: "海上生明月，天涯共此时。情人怨遥夜，竟夕起相思。灭烛怜光满，披衣觉露滋。",
        hint: "同看明月，遥寄相思。",
      level: "medium",
      },
      {
        title: "夜雨寄北",
        author: "李商隐 · 唐",
        line: "君问归期未有期，巴山夜雨涨秋池。何当共剪西窗烛，却话巴山夜雨时。",
        hint: "以“剪烛”寄团聚之愿。",
      level: "medium",
      },
      {
        title: "锦瑟（节选）",
        author: "李商隐 · 唐",
        line: "锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃。",
        hint: "典故密集，情思幽微。",
      level: "hard",
      },
      {
        title: "无题·相见时难别亦难（节选）",
        author: "李商隐 · 唐",
        line: "相见时难别亦难，东风无力百花残。春蚕到死丝方尽，蜡炬成灰泪始干。",
        hint: "“春蚕”“蜡炬”写至死不渝。",
      level: "medium",
      },
      {
        title: "黄鹤楼（节选）",
        author: "崔颢 · 唐",
        line: "昔人已乘黄鹤去，此地空余黄鹤楼。黄鹤一去不复返，白云千载空悠悠。",
        hint: "吊古伤今，气象苍茫。",
      level: "hard",
      },
      {
        title: "登岳阳楼（节选）",
        author: "杜甫 · 唐",
        line: "昔闻洞庭水，今上岳阳楼。吴楚东南坼，乾坤日夜浮。亲朋无一字，老病有孤舟。",
        hint: "“吴楚东南坼”写洞庭浩荡。",
      level: "hard",
      },
      {
        title: "春江花月夜（节选）",
        author: "张若虚 · 唐",
        line: "春江潮水连海平，海上明月共潮生。滟滟随波千万里，何处春江无月明。",
        hint: "以月映江，空灵瑰丽。",
      level: "hard",
      },
      {
        title: "雁门太守行（节选）",
        author: "李贺 · 唐",
        line: "黑云压城城欲摧，甲光向日金鳞开。角声满天秋色里，塞上燕脂凝夜紫。",
        hint: "色彩浓烈，写边城危急。",
      level: "hard",
      },
      {
        title: "赤壁",
        author: "杜牧 · 唐",
        line: "折戟沉沙铁未销，自将磨洗认前朝。东风不与周郎便，铜雀春深锁二乔。",
        hint: "借史抒怀，感叹机缘。",
      level: "medium",
      },
      {
        title: "过零丁洋（节选）",
        author: "文天祥 · 宋",
        line: "辛苦遭逢起一经，干戈寥落四周星。人生自古谁无死，留取丹心照汗青。",
        hint: "浩然正气，丹心照汗青。",
      level: "medium",
      },
      {
        title: "渔家傲·秋思（节选）",
        author: "范仲淹 · 宋",
        line: "塞下秋来风景异，衡阳雁去无留意。四面边声连角起，千嶂里，长烟落日孤城闭。",
        hint: "边塞词风，苍凉雄浑。",
      level: "medium",
      },
      {
        title: "游山西村",
        author: "陆游 · 宋",
        line: "莫笑农家腊酒浑，丰年留客足鸡豚。山重水复疑无路，柳暗花明又一村。",
        hint: "“柳暗花明”化为成语。",
      level: "medium",
      },
      {
        title: "观书有感",
        author: "朱熹 · 宋",
        line: "半亩方塘一鉴开，天光云影共徘徊。问渠那得清如许，为有源头活水来。",
        hint: "以“活水”喻学问之源。",
      level: "medium",
      },
      {
        title: "登飞来峰",
        author: "王安石 · 宋",
        line: "飞来山上千寻塔，闻说鸡鸣见日升。不畏浮云遮望眼，自缘身在最高层。",
        hint: "立意高远，见识决定眼界。",
      level: "medium",
      },
      {
        title: "水调歌头·明月几时有（节选）",
        author: "苏轼 · 宋",
        line: "明月几时有，把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。",
        hint: "中秋名篇，旷达与惆怅并存。",
      level: "hard",
      },
      {
        title: "念奴娇·赤壁怀古（节选）",
        author: "苏轼 · 宋",
        line: "大江东去，浪淘尽，千古风流人物。故垒西边，人道是，三国周郎赤壁。乱石穿空，惊涛拍岸，卷起千堆雪。",
        hint: "豪放词典范，写景入史。",
      level: "hard",
      },
      {
        title: "定风波·莫听穿林打叶声（节选）",
        author: "苏轼 · 宋",
        line: "莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕。",
        hint: "逆境从容，“何妨吟啸且徐行”。",
      level: "medium",
      },
      {
        title: "江城子·密州出猎（节选）",
        author: "苏轼 · 宋",
        line: "老夫聊发少年狂，左牵黄，右擎苍。锦帽貂裘，千骑卷平冈。为报倾城随太守，亲射虎，看孙郎。",
        hint: "豪迈出猎，气象雄健。",
      level: "medium",
      },
      {
        title: "破阵子·为陈同甫赋壮词以寄之（节选）",
        author: "辛弃疾 · 宋",
        line: "醉里挑灯看剑，梦回吹角连营。八百里分麾下炙，五十弦翻塞外声。沙场秋点兵。",
        hint: "壮志难酬的豪情与悲怆。",
      level: "medium",
      },
      {
        title: "永遇乐·京口北固亭怀古（节选）",
        author: "辛弃疾 · 宋",
        line: "千古江山，英雄无觅，孙仲谋处。舞榭歌台，风流总被雨打风吹去。斜阳草树，寻常巷陌，人道寄奴曾住。",
        hint: "怀古抚今，雄浑沉郁。",
      level: "hard",
      },
      {
        title: "青玉案·元夕（节选）",
        author: "辛弃疾 · 宋",
        line: "东风夜放花千树，更吹落，星如雨。宝马雕车香满路。凤箫声动，玉壶光转，一夜鱼龙舞。",
        hint: "灯火繁华与“那人”对照。",
      level: "hard",
      },
      {
        title: "声声慢·寻寻觅觅（节选）",
        author: "李清照 · 宋",
        line: "寻寻觅觅，冷冷清清，凄凄惨惨戚戚。乍暖还寒时候，最难将息。",
        hint: "叠字写愁，情绪层层递进。",
      level: "hard",
      },
      {
        title: "如梦令·昨夜雨疏风骤",
        author: "李清照 · 宋",
        line: "昨夜雨疏风骤，浓睡不消残酒。试问卷帘人，却道海棠依旧。知否，知否，应是绿肥红瘦。",
        hint: "“绿肥红瘦”传神写春残。",
      level: "medium",
      },
      {
        title: "满江红·怒发冲冠（节选）",
        author: "岳飞 · 宋",
        line: "怒发冲冠，凭栏处，潇潇雨歇。抬望眼，仰天长啸，壮怀激烈。三十功名尘与土，八千里路云和月。",
        hint: "精忠报国，慷慨激昂。",
      level: "hard",
      },
      {
        title: "天净沙·秋思",
        author: "马致远 · 元",
        line: "枯藤老树昏鸦，小桥流水人家。古道西风瘦马，夕阳西下，断肠人在天涯。",
        hint: "意象叠加，极写羁旅之愁。",
      level: "medium",
      },
      {
        title: "己亥杂诗（其五）",
        author: "龚自珍 · 清",
        line: "浩荡离愁白日斜，吟鞭东指即天涯。落红不是无情物，化作春泥更护花。",
        hint: "以“落红”喻自我奉献。",
      level: "medium",
      },
      {
        title: "石灰吟",
        author: "于谦 · 明",
        line: "千锤万凿出深山，烈火焚烧若等闲。粉骨碎身浑不怕，要留清白在人间。",
        hint: "托物言志，守节不屈。",
      level: "medium",
      },
      {
        title: "秋词（其一）",
        author: "刘禹锡 · 唐",
        line: "自古逢秋悲寂寥，我言秋日胜春朝。晴空一鹤排云上，便引诗情到碧霄。",
        hint: "反传统悲秋，昂扬开阔。",
      level: "medium",
      },

      {
        title: "岳阳楼记（节选）",
        author: "范仲淹 · 宋",
        line: "不以物喜，不以己悲。居庙堂之高则忧其民，处江湖之远则忧其君。",
        hint: "先天下之忧而忧的精神内核。",
      level: "medium",
      },
      {
        title: "醉翁亭记（节选）",
        author: "欧阳修 · 宋",
        line: "醉翁之意不在酒，在乎山水之间也。山水之乐，得之心而寓之酒也。",
        hint: "以酒写乐，写乐而不囿于酒。",
      level: "medium",
      },
      {
        title: "桃花源记（节选）",
        author: "陶渊明 · 晋",
        line: "土地平旷，屋舍俨然。有良田美池桑竹之属，阡陌交通，鸡犬相闻。",
        hint: "理想社会图景，恬淡宁静。",
      level: "medium",
      },
      {
        title: "出师表（节选）",
        author: "诸葛亮 · 三国",
        line: "亲贤臣，远小人，此先汉所以兴隆也。亲小人，远贤臣，此后汉所以倾颓也。",
        hint: "治国用人之道，论断鲜明。",
      level: "hard",
      },
      {
        title: "兰亭集序（节选）",
        author: "王羲之 · 晋",
        line: "后之视今，亦犹今之视昔。悲夫。",
        hint: "人生无常，感慨由乐转悲。",
      level: "hard",
      },
      {
        title: "滕王阁序（节选）",
        author: "王勃 · 唐",
        line: "豫章故郡，洪都新府。星分翼轸，地接衡庐。",
        hint: "骈文名篇，开头即见气势与对仗。",
      level: "hard",
      },
      {
        title: "滕王阁序（名句）",
        author: "王勃 · 唐",
        line: "落霞与孤鹜齐飞，秋水共长天一色。",
        hint: "千古名句，画面壮阔而清澈。",
      level: "hard",
      },
      {
        title: "阿房宫赋（节选）",
        author: "杜牧 · 唐",
        line: "六王毕，四海一。蜀山兀，阿房出。覆压三百余里，隔离天日。",
        hint: "写秦宫之奢，铺陈排比，气势逼人。",
      level: "hard",
      },
      {
        title: "赤壁赋（节选）",
        author: "苏轼 · 宋",
        line: "寄蜉蝣于天地，渺沧海之一粟。哀吾生之须臾，羡长江之无穷。",
        hint: "以渺小对浩大，写人生哲思。",
      level: "hard",
      },
      {
        title: "师说（节选）",
        author: "韩愈 · 唐",
        line: "师者，所以传道受业解惑也。人非生而知之者，孰能无惑。",
        hint: "论“师”之本义，驳世俗偏见。",
      level: "hard",
      },
      {
        title: "劝学（节选）",
        author: "荀子",
        line: "锲而舍之，朽木不折。锲而不舍，金石可镂。",
        hint: "强调坚持之力，成为常用格言。",
      level: "hard",
      },
      {
        title: "陈情表（节选）",
        author: "李密 · 晋",
        line: "臣密言，臣以险衅，夙遭闵凶。生孩六月，慈父见背。行年四岁，舅夺母志。",
        hint: "陈述身世，情辞恳切。",
      level: "hard",
      },
      {
        title: "送东阳马生序（节选）",
        author: "宋濂 · 明",
        line: "余幼时即嗜学，家贫，无从致书以观。每假借于藏书之家，手自笔录。",
        hint: "以亲身经历勉励后学。",
      level: "hard",
      },
      {
        title: "逍遥游（节选）",
        author: "庄子",
        line: "鹏之徙于南冥也，水击三千里。抟扶摇而上者九万里，去以六月息者也。",
        hint: "以鹏鸟喻超越，想象奇伟。",
      level: "hard",
      },
      {
        title: "离骚（名句一）",
        author: "屈原",
        line: "长太息以掩涕兮，哀民生之多艰。",
        hint: "忧国忧民的深沉叹息。",
      level: "hard",
      },
      {
        title: "离骚（名句二）",
        author: "屈原",
        line: "路漫漫其修远兮，吾将上下而求索。",
        hint: "探索不止，成为精神象征。",
      level: "hard",
      },
      {
        title: "春夜喜雨（节选）",
        author: "杜甫 · 唐",
        line: "好雨知时节，当春乃发生。随风潜入夜，润物细无声。",
        hint: "以“润物细无声”写春雨之善。",
      level: "medium",
      },
      {
        title: "钱塘湖春行（节选）",
        author: "白居易 · 唐",
        line: "孤山寺北贾亭西，水面初平云脚低。几处早莺争暖树，谁家新燕啄春泥。",
        hint: "西湖早春，莺燕争春。",
      level: "medium",
      },
      {
        title: "滁州西涧",
        author: "韦应物 · 唐",
        line: "独怜幽草涧边生，上有黄鹂深树鸣。春潮带雨晚来急，野渡无人舟自横。",
        hint: "清幽闲适，结句意境空阔。",
      level: "easy",
      },
      {
        title: "蜀相（节选）",
        author: "杜甫 · 唐",
        line: "三顾频烦天下计，两朝开济老臣心。出师未捷身先死，长使英雄泪满襟。",
        hint: "诸葛亮千古悲歌。",
      level: "medium",
      },
      {
        title: "梦游天姥吟留别（节选）",
        author: "李白 · 唐",
        line: "天姥连天向天横，势拔五岳掩赤城。云青青兮欲雨，水澹澹兮生烟。",
        hint: "浪漫瑰丽，想象奔放。",
      level: "hard",
      },
      {
        title: "登金陵凤凰台（节选）",
        author: "李白 · 唐",
        line: "三山半落青天外，二水中分白鹭洲。总为浮云能蔽日，长安不见使人愁。",
        hint: "借景抒怀，伤时忧世。",
      level: "hard",
      },
      {
        title: "归去来兮辞（节选）",
        author: "陶渊明 · 晋",
        line: "归去来兮，田园将芜胡不归。既自以心为形役，奚惆怅而独悲。",
        hint: "辞官归隐的宣言。",
      level: "hard",
      },
      {
        title: "小石潭记（节选）",
        author: "柳宗元 · 唐",
        line: "青树翠蔓，蒙络摇缀，参差披拂。",
        hint: "极写幽深清冷之景。",
      level: "medium",
      },
      {
        title: "记承天寺夜游（节选）",
        author: "苏轼 · 宋",
        line: "庭下如积水空明，水中藻荇交横，盖竹柏影也。",
        hint: "月色如水，清澈空灵。",
      level: "medium",
      },
      {
        title: "马说（节选）",
        author: "韩愈 · 唐",
        line: "世有伯乐，然后有千里马。千里马常有，而伯乐不常有。",
        hint: "借马喻才，批评埋没人才。",
      level: "medium",
      },
      {
        title: "鱼我所欲也（节选）",
        author: "孟子",
        line: "鱼，我所欲也。熊掌，亦我所欲也。二者不可得兼，舍鱼而取熊掌者也。",
        hint: "以取舍论义利。",
      level: "hard",
      },
      {
        title: "生于忧患，死于安乐（节选）",
        author: "《孟子》",
        line: "故天将降大任于是人也，必先苦其心志，劳其筋骨。",
        hint: "以磨难成就担当。",
      level: "hard",
      },
      {
        title: "曹刿论战（节选）",
        author: "《左传》",
        line: "夫战，勇气也。一鼓作气，再而衰，三而竭。",
        hint: "论战争节奏与士气。",
      level: "hard",
      },
      {
        title: "邹忌讽齐王纳谏（节选）",
        author: "《战国策》",
        line: "臣诚知不如徐公美。",
        hint: "以自省引出纳谏之道。",
      level: "hard",
      },
      {
        title: "虞美人·春花秋月何时了（节选）",
        author: "李煜 · 南唐",
        line: "春花秋月何时了，往事知多少。小楼昨夜又东风，故国不堪回首月明中。",
        hint: "亡国之痛，词中至哀。",
      level: "hard",
      },
      {
        title: "相见欢·无言独上西楼",
        author: "李煜 · 南唐",
        line: "无言独上西楼，月如钩。寂寞梧桐深院锁清秋。剪不断，理还乱，是离愁。",
        hint: "离愁如乱丝，剪不断理还乱。",
      level: "hard",
      },
      {
        title: "雨霖铃·寒蝉凄切（节选）",
        author: "柳永 · 宋",
        line: "寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。",
        hint: "送别慢词，凄切婉转。",
      level: "hard",
      },
      {
        title: "鹊桥仙·纤云弄巧（节选）",
        author: "秦观 · 宋",
        line: "纤云弄巧，飞星传恨，银汉迢迢暗度。金风玉露一相逢，便胜却人间无数。",
        hint: "七夕名篇，写相逢之珍贵。",
      level: "hard",
      },
      {
        title: "浣溪沙·一曲新词酒一杯",
        author: "晏殊 · 宋",
        line: "一曲新词酒一杯，去年天气旧亭台。夕阳西下几时回。无可奈何花落去，似曾相识燕归来。",
        hint: "伤春感时，词意含蓄悠长。",
      level: "medium",
      },
      {
        title: "一剪梅·红藕香残玉簟秋（节选）",
        author: "李清照 · 宋",
        line: "红藕香残玉簟秋，轻解罗裳，独上兰舟。云中谁寄锦书来，雁字回时，月满西楼。",
        hint: "相思入骨，语淡情浓。",
      level: "hard",
      },
      {
        title: "山坡羊·潼关怀古",
        author: "张养浩 · 元",
        line: "峰峦如聚，波涛如怒。山河表里潼关路。望西都，意踌躇。兴，百姓苦。亡，百姓苦。",
        hint: "怀古见民生之苦，警策沉痛。",
      level: "medium",
      },
      {
        title: "咏柳",
        author: "贺知章 · 唐",
        line: "碧玉妆成一树高，万条垂下绿丝绦。不知细叶谁裁出，二月春风似剪刀。",
        hint: "以“剪刀”喻春风，咏柳名篇。",
      level: "easy",
      },
      {
        title: "回乡偶书",
        author: "贺知章 · 唐",
        line: "少小离家老大回，乡音无改鬓毛衰。儿童相见不相识，笑问客从何处来。",
        hint: "久客还乡之感，充满生活情趣。",
      level: "easy",
      },
      {
        title: "咏鹅",
        author: "骆宾王 · 唐",
        line: "鹅，鹅，鹅，曲项向天歌。白毛浮绿水，红掌拨清波。",
        hint: "极写大白鹅的神态与色彩。",
      level: "easy",
      },
      {
        title: "春晓",
        author: "孟浩然 · 唐",
        line: "春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。",
        hint: "惜春之情，含蓄悠远。",
      level: "easy",
      },
      {
        title: "登鹳雀楼",
        author: "王之涣 · 唐",
        line: "白日依山尽，黄河入海流。欲穷千里目，更上一层楼。",
        hint: "高瞻远瞩，充满进取精神。",
      level: "easy",
      },
      {
        title: "静夜思",
        author: "李白 · 唐",
        line: "床前明月光，疑是地上霜。举头望明月，低头思故乡。",
        hint: "思乡之情的千古绝唱。",
      level: "easy",
      },
      {
        title: "望庐山瀑布",
        author: "李白 · 唐",
        line: "日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。",
        hint: "极度夸张，写尽庐山瀑布气势。",
      level: "easy",
      },
      {
        title: "赠汪伦",
        author: "李白 · 唐",
        line: "李白乘舟将欲行，忽闻岸上踏歌声。桃花潭水深千尺，不及汪伦送我情。",
        hint: "以深潭比友情，质朴真挚。",
      level: "easy",
      },
      {
        title: "黄鹤楼送孟浩然之广陵",
        author: "李白 · 唐",
        line: "故人西辞黄鹤楼，烟花三月下扬州。孤帆远影碧空尽，唯见长江天际流。",
        hint: "以远帆流水寄予送别之情。",
      level: "easy",
      },
      {
        title: "早发白帝城",
        author: "李白 · 唐",
        line: "朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。",
        hint: "行程迅疾，心境欢快。",
      level: "easy",
      },
      {
        title: "望天门山",
        author: "李白 · 唐",
        line: "天门中断楚江开，碧水东流至此回。两岸青山相对出，孤帆一片日边来。",
        hint: "气势磅礴，景中含情。",
      level: "easy",
      },
      {
        title: "独坐敬亭山",
        author: "李白 · 唐",
        line: "众鸟高飞尽，孤云独去闲。相看两不厌，只有敬亭山。",
        hint: "孤独中的静谧与相契。",
      level: "easy",
      },
      {
        title: "江畔独步寻花",
        author: "杜甫 · 唐",
        line: "黄四娘家花满蹊，千朵万朵压枝低。留连戏蝶时时舞，自在娇莺恰恰啼。",
        hint: "春意盎然，生趣勃勃。",
      level: "easy",
      },
      {
        title: "绝句",
        author: "杜甫 · 唐",
        line: "两个黄鹂鸣翠柳，一行白鹭上青天。窗含西岭千秋雪，门泊东吴万里船。",
        hint: "色彩鲜明，景物层次丰富。",
      level: "easy",
      },
      {
        title: "江南逢李龟年",
        author: "杜甫 · 唐",
        line: "岐王宅里寻常见，崔九堂前几度闻。正是江南好风景，落花时节又逢君。",
        hint: "盛衰之感，人生况味。",
      level: "easy",
      },
      {
        title: "清明",
        author: "杜牧 · 唐",
        line: "清明时节雨纷纷，路上行人欲断魂。借问酒家何处有？牧童遥指杏花村。",
        hint: "清明时节的愁思与转机。",
      level: "easy",
      },
      {
        title: "秋夕",
        author: "杜牧 · 唐",
        line: "银烛秋光冷画屏，轻罗小扇扑流萤。天阶夜色凉如水，坐看牵牛织女星。",
        hint: "失意宫女的孤独与哀怨。",
      level: "easy",
      },
      {
        title: "山行",
        author: "杜牧 · 唐",
        line: "远上寒山石径斜，白云生处有人家。停车坐爱枫林晚，霜叶红于二月花。",
        hint: "歌颂秋色，充满生机。",
      level: "easy",
      },
      {
        title: "泊秦淮",
        author: "杜牧 · 唐",
        line: "烟笼寒水月笼沙，夜泊秦淮近酒家。商女不知亡国恨，隔江犹唱后庭花。",
        hint: "忧国忧民之情，讽刺现实。",
      level: "easy",
      },
      {
        title: "江南春",
        author: "杜牧 · 唐",
        line: "千里莺啼绿映红，水村山郭酒旗风。南朝四百八十寺，多少楼台烟雨中。",
        hint: "江南美景与怀古思索。",
      level: "easy",
      },
      {
        title: "悯农其一",
        author: "李绅 · 唐",
        line: "锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。",
        hint: "感叹劳动艰辛，提倡节约。",
      level: "easy",
      },
      {
        title: "悯农其二",
        author: "李绅 · 唐",
        line: "春种一粒粟，秋收万颗子。四海无闲田，农夫犹饿死。",
        hint: "揭露社会矛盾，同情劳动者。",
      level: "easy",
      },
      {
        title: "枫桥夜泊",
        author: "张继 · 唐",
        line: "月落乌啼霜满天，江枫渔火对愁眠。姑苏城外寒山寺，夜半钟声到客船。",
        hint: "凄清幽冷的秋江夜色。",
      level: "easy",
      },
      {
        title: "游子吟",
        author: "孟郊 · 唐",
        line: "慈母手中线，游子身上衣。临行密密缝，意恐迟迟归。谁言寸草心，报得三春晖。",
        hint: "母爱的伟大与深情。",
      level: "easy",
      },
      {
        title: "江雪",
        author: "柳宗元 · 唐",
        line: "千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。",
        hint: "孤独、清高与孤傲的化身。",
      level: "easy",
      },
      {
        title: "登乐游原",
        author: "李商隐 · 唐",
        line: "向晚意不适，驱车登古原。夕阳无限好，只是近黄昏。",
        hint: "对美好事物的依恋与无奈。",
      level: "easy",
      },
      {
        title: "无题",
        author: "李商隐 · 唐",
        line: "身无彩凤双飞翼，心有灵犀一点通。",
        hint: "写相思、心灵感应之名句。",
      level: "medium",
      },
      {
        title: "锦瑟（名句）",
        author: "李商隐 · 唐",
        line: "沧海月明珠有泪，蓝田日暖玉生烟。",
        hint: "瑰丽幽微，诗意朦胧。",
      level: "hard",
      },
      {
        title: "出塞",
        author: "王昌龄 · 唐",
        line: "秦时明月汉时关，万里长征人未还。但使龙城飞将在，不教胡马度阴山。",
        hint: "边塞诗的名篇，气概雄浑。",
      level: "easy",
      },
      {
        title: "从军行其四",
        author: "王昌龄 · 唐",
        line: "青海长云暗雪山，孤城遥望玉门关。黄沙百战穿金甲，不破楼兰终不还。",
        hint: "坚定的报国决心。",
      level: "easy",
      },
      {
        title: "凉州词",
        author: "王翰 · 唐",
        line: "葡萄美酒夜光杯，欲饮琵琶马上催。醉卧沙场君莫笑，古来征战几人回。",
        hint: "旷达豪放，视死如归。",
      level: "easy",
      },
      {
        title: "九月九日忆山东兄弟",
        author: "王维 · 唐",
        line: "独在异乡为异客，每逢佳节倍思亲。遥知兄弟登高处，遍插茱萸少一人。",
        hint: "佳节思亲的动人篇章。",
      level: "easy",
      },
      {
        title: "别董大",
        author: "高适 · 唐",
        line: "千里黄云白日曛，北风吹雁雪纷纷。莫愁前路无知己，天下谁人不识君。",
        hint: "豪爽慷慨，慰藉友人之作。",
      level: "easy",
      },
      {
        title: "乌衣巷",
        author: "刘禹锡 · 唐",
        line: "朱雀桥边野草花，乌衣巷口夕阳斜。旧时王谢堂前燕，飞入寻常百姓家。",
        hint: "感叹人事变迁，兴亡之思。",
      level: "easy",
      },
      {
        title: "浪淘沙其九",
        author: "刘禹锡 · 唐",
        line: "九曲黄河万里沙，浪淘风簸自天涯。如今直上银河去，同到牵牛织女家。",
        hint: "气势磅礴，富于想象。",
      level: "easy",
      },
      {
        title: "赋得古原草送别",
        author: "白居易 · 唐",
        line: "离离原上草，一岁一枯荣。野火烧不尽，春风吹又生。远芳侵古道，晴翠接荒城。",
        hint: "歌颂生命力之顽强。",
      level: "medium",
      },
      {
        title: "池上",
        author: "白居易 · 唐",
        line: "小娃撑小艇，偷采白莲回。不解藏踪迹，浮萍一道开。",
        hint: "活泼、天真的童趣描写。",
      level: "easy",
      },
      {
        title: "元日",
        author: "王安石 · 宋",
        line: "爆竹声中一岁除，春风送暖入屠苏。千门万户曈曈日，总把新桃换旧符。",
        hint: "春节之欢愉与新陈代谢。",
      level: "easy",
      },
      {
        title: "小池",
        author: "杨万里 · 宋",
        line: "泉眼无声惜细流，树阴照水爱晴柔。小荷才露尖尖角，早有蜻蜓立上头。",
        hint: "细腻、轻灵的初夏景色。",
      level: "easy",
      },
      {
        title: "晓出净慈寺送林子方",
        author: "杨万里 · 宋",
        line: "毕竟西湖六月中，风光不与四时同。接天莲叶无穷碧，映日荷花别样红。",
        hint: "西湖盛夏，荷叶荷花之盛。",
      level: "easy",
      },
      {
        title: "饮湖上初晴后雨",
        author: "苏轼 · 宋",
        line: "水光潋滟晴方好，山色空蒙雨亦奇。欲把西湖比西子，淡妆浓抹总相宜。",
        hint: "西湖之美，千古定评。",
      level: "easy",
      },
      {
        title: "题西林壁",
        author: "苏轼 · 宋",
        line: "横看成岭侧成峰，远近高低各不同。不识庐山真面目，只缘身在此山中。",
        hint: "哲理名篇，立足之点不同则见不同。",
      level: "easy",
      },
      {
        title: "惠崇春江晚景",
        author: "苏轼 · 宋",
        line: "竹外桃花三两枝，春江水暖鸭先知。蒌蒿满地芦芽短，正是河豚欲上时。",
        hint: "春江初暖，富有生活气息。",
      level: "easy",
      },
      {
        title: "江城子·记梦",
        author: "苏轼 · 宋",
        line: "十年生死两茫茫，不思量，自难忘。千里孤坟，无处话凄凉。",
        hint: "悼亡名篇，哀婉凄怆。",
      level: "hard",
      },
      {
        title: "卜算子·咏梅",
        author: "陆游 · 宋",
        line: "驿外断桥边，寂寞开无主。已是黄昏独自愁，更著风和雨。无意苦争春，一任群芳妒。",
        hint: "以梅自喻，孤高自守。",
      level: "medium",
      },
      {
        title: "秋夜将晓出篱门迎凉有感",
        author: "陆游 · 宋",
        line: "三万里河东入海，五千仞岳上摩天。遗民泪尽胡尘里，南望王师又一年。",
        hint: "收复中原之志，忧国忧民。",
      level: "medium",
      },
      {
        title: "示儿",
        author: "陆游 · 宋",
        line: "死去元知万事空，但悲不见九州同。王师北定中原日，家祭无忘告乃翁。",
        hint: "绝笔诗，深沉的爱国情。",
      level: "easy",
      },
      {
        title: "蝶恋花·贮倚危楼",
        author: "柳永 · 宋",
        line: "衣带渐宽终不悔，为伊消得人憔悴。",
        hint: "写执着追求的千古名句。",
      level: "hard",
      },
      {
        title: "如梦令·常记溪亭日暮",
        author: "李清照 · 宋",
        line: "常记溪亭日暮，沉醉不知归路。兴尽晚回舟，误入藕花深处。争渡，争渡，惊起一滩鸥鹭。",
        hint: "早期活泼欢快的生活片段。",
      level: "medium",
      },
      {
        title: "夏日绝句",
        author: "李清照 · 宋",
        line: "生当作人杰，死亦为鬼雄。至今思项羽，不肯过江东。",
        hint: "巾帼不让须眉，充满气节。",
      level: "easy",
      },
      {
        title: "卜算子·我住长江头",
        author: "李之仪 · 宋",
        line: "我住长江头，君住长江尾。日日思君不见君，共饮长江水。此水几时休，此恨何时已。",
        hint: "民歌色彩，质朴情深。",
      level: "medium",
      },
      {
        title: "望海潮·东南形胜",
        author: "柳永 · 宋",
        line: "东南形胜，三吴都会，钱塘自古繁华。烟柳画桥，风帘翠幕，参差十万人家。",
        hint: "极写杭州之繁华富庶。",
      level: "hard",
      },
      {
        title: "浪淘沙令·帘外雨潺潺",
        author: "李煜 · 南唐",
        line: "帘外雨潺潺，春意阑珊。罗衾不耐五更寒。梦里不知身是客，一晌贪欢。",
        hint: "去国怀乡，亡国之音哀以思。",
      level: "hard",
      },
      {
        title: "破阵子·春景",
        author: "晏殊 · 宋",
        line: "燕子来时新社，梨花落后清明。池上碧苔三四点，叶底黄鹂一两声。",
        hint: "清新淡雅的春景图。",
      level: "hard",
      },
      {
        title: "生查子·元夕",
        author: "欧阳修 · 宋",
        line: "月上柳梢头，人约黄昏后。今年元夜时，月与灯依旧。不见去年人，泪湿春衫袖。",
        hint: "物是人非，感伤无限。",
      level: "hard",
      },
      {
        title: "卜算子·咏梅（和）",
        author: "毛泽东",
        line: "风雨送春归，飞雪迎春到。已是悬崖百丈冰，犹有花枝俏。",
        hint: "革命浪漫主义，昂扬向上。",
      level: "hard",
      },
      {
        title: "沁园春·雪（节选）",
        author: "毛泽东",
        line: "江山如此多娇，引无数英雄竞折腰。惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。",
        hint: "气势恢宏，评古论今。",
      level: "hard",
      },
      {
        title: "七律·长征（节选）",
        author: "毛泽东",
        line: "红军不怕远征难，万水千山只等闲。五岭逶迤腾细浪，乌蒙磅礴走泥丸。",
        hint: "大无畏精神，革命乐观主义。",
      level: "hard",
      },
      {
        title: "村居",
        author: "高鼎 · 清",
        line: "草长莺飞二月天，拂堤杨柳醉春烟。儿童散学归来早，忙趁东风放纸鸢。",
        hint: "清新欢快的乡间春景。",
      level: "easy",
      },
      {
        title: "宿新市徐公店",
        author: "杨万里 · 宋",
        line: "篱落疏疏一径深，树头花落未成阴。儿童急走追黄蝶，飞入菜花无处寻。",
        hint: "童趣盎然，色彩明快。",
      level: "easy",
      }

      {
        title: "画",
        author: "王维 · 唐",
        line: "远看山有色，近听水无声。春去花还在，人来鸟不惊。",
        hint: "诗中有画，画中有诗。",
        level: "easy"
      },
      {
        title: "古朗月行（节选）",
        author: "李白 · 唐",
        line: "小时不识月，呼作白玉盘。又疑瑶台镜，飞在青云端。",
        hint: "以童趣写月，天真可爱。",
        level: "easy"
      },
      {
        title: "风",
        author: "李峤 · 唐",
        line: "解落三秋叶，能开二月花。过江千尺浪，入竹万竿斜。",
        hint: "咏物诗，写风之力量。",
        level: "easy"
      },
      {
        title: "山村咏怀",
        author: "邵雍 · 宋",
        line: "一去二三里，烟村四五家。亭台六七座，八九十枝花。",
        hint: "数字入诗，童趣盎然。",
        level: "easy"
      },
      {
        title: "梅花",
        author: "王安石 · 宋",
        line: "墙角数枝梅，凌寒独自开。遥知不是雪，为有暗香来。",
        hint: "借梅喻人，凌寒独立。",
        level: "easy"
      },
      {
        title: "鸟鸣涧",
        author: "王维 · 唐",
        line: "人闲桂花落，夜静春山空。月出惊山鸟，时鸣春涧中。",
        hint: "以动衬静，空灵之境。",
        level: "easy"
      },
      {
        title: "竹里馆",
        author: "王维 · 唐",
        line: "独坐幽篁里，弹琴复长啸。深林人不知，明月来相照。",
        hint: "独处之乐，物我两忘。",
        level: "easy"
      },
      {
        title: "相思",
        author: "王维 · 唐",
        line: "红豆生南国，春来发几枝。愿君多采撷，此物最相思。",
        hint: "以红豆寄相思。",
        level: "easy"
      },
      {
        title: "长歌行（节选）",
        author: "汉乐府",
        line: "青青园中葵，朝露待日晞。阳春布德泽，万物生光辉。常恐秋节至，焜黄华叶衰。百川东到海，何时复西归。少壮不努力，老大徒伤悲。",
        hint: "劝人惜时，发奋进取。",
        level: "easy"
      },
      {
        title: "敕勒歌",
        author: "北朝民歌",
        line: "敕勒川，阴山下。天似穹庐，笼盖四野。天苍苍，野茫茫，风吹草低见牛羊。",
        hint: "草原壮阔，气象苍茫。",
        level: "easy"
      },
      {
        title: "七步诗",
        author: "曹植 · 三国",
        line: "煮豆燃豆萁，豆在釜中泣。本是同根生，相煎何太急。",
        hint: "兄弟相争，同根相煎。",
        level: "easy"
      },
      {
        title: "逢雪宿芙蓉山主人",
        author: "刘长卿 · 唐",
        line: "日暮苍山远，天寒白屋贫。柴门闻犬吠，风雪夜归人。",
        hint: "风雪苦寒中的一丝温暖。",
        level: "easy"
      },
      {
        title: "寻隐者不遇",
        author: "贾岛 · 唐",
        line: "松下问童子，言师采药去。只在此山中，云深不知处。",
        hint: "访隐者不遇的飘逸之趣。",
        level: "easy"
      },
      {
        title: "赠刘景文",
        author: "苏轼 · 宋",
        line: "荷尽已无擎雨盖，菊残犹有傲霜枝。一年好景君须记，正是橙黄橘绿时。",
        hint: "勉励友人珍惜好时光。",
        level: "easy"
      },
      {
        title: "凉州词（黄河远上）",
        author: "王之涣 · 唐",
        line: "黄河远上白云间，一片孤城万仞山。羌笛何须怨杨柳，春风不度玉门关。",
        hint: "边塞苍凉，隐讽皇恩难至。",
        level: "easy"
      },
      {
        title: "送杜少府之任蜀州",
        author: "王勃 · 唐",
        line: "城阙辅三秦，风烟望五津。与君离别意，同是宦游人。海内存知己，天涯若比邻。无为在歧路，儿女共沾巾。",
        hint: "写离别而不哀，意气豪迈。",
        level: "medium"
      },
      {
        title: "泊船瓜洲",
        author: "王安石 · 宋",
        line: "京口瓜洲一水间，钟山只隔数重山。春风又绿江南岸，明月何时照我还。",
        hint: ""绿"字锤炼的千古名句。",
        level: "medium"
      },
      {
        title: "游园不值",
        author: "叶绍翁 · 宋",
        line: "应怜屐齿印苍苔，小扣柴扉久不开。春色满园关不住，一枝红杏出墙来。",
        hint: "不遇中有遇，失望中含惊喜。",
        level: "medium"
      },
      {
        title: "题临安邸",
        author: "林升 · 宋",
        line: "山外青山楼外楼，西湖歌舞几时休。暖风熏得游人醉，直把杭州作汴州。",
        hint: "讽南宋偏安，沉痛之至。",
        level: "medium"
      },
      {
        title: "四时田园杂兴（其三十一）",
        author: "范成大 · 宋",
        line: "昼出耘田夜绩麻，村庄儿女各当家。童孙未解供耕织，也傍桑阴学种瓜。",
        hint: "田家劳作，童趣自然。",
        level: "medium"
      },
      {
        title: "约客",
        author: "赵师秀 · 宋",
        line: "黄梅时节家家雨，青草池塘处处蛙。有约不来过夜半，闲敲棋子落灯花。",
        hint: "闲适中的淡淡焦躁。",
        level: "medium"
      },
      {
        title: "过华清宫",
        author: "杜牧 · 唐",
        line: "长安回望绣成堆，山顶千门次第开。一骑红尘妃子笑，无人知是荔枝来。",
        hint: "讽荒淫误国，以笑写悲。",
        level: "medium"
      },
      {
        title: "忆江南",
        author: "白居易 · 唐",
        line: "江南好，风景旧曾谙。日出江花红胜火，春来江水绿如蓝。能不忆江南。",
        hint: "江南春色，明丽如画。",
        level: "medium"
      },
      {
        title: "峨眉山月歌",
        author: "李白 · 唐",
        line: "峨眉山月半轮秋，影入平羌江水流。夜发清溪向三峡，思君不见下渝州。",
        hint: "峨眉秋月，随舟而下。",
        level: "medium"
      },
      {
        title: "春夜洛城闻笛",
        author: "李白 · 唐",
        line: "谁家玉笛暗飞声，散入春风满洛城。此夜曲中闻折柳，何人不起故园情。",
        hint: "笛声满城，故园之思。",
        level: "medium"
      },
      {
        title: "竹枝词",
        author: "刘禹锡 · 唐",
        line: "杨柳青青江水平，闻郎江上踏歌声。东边日出西边雨，道是无晴却有晴。",
        hint: "谐音双关，民歌风味。",
        level: "medium"
      },
      {
        title: "旅夜书怀",
        author: "杜甫 · 唐",
        line: "细草微风岸，危樯独夜舟。星垂平野阔，月涌大江流。名岂文章著，官应老病休。飘飘何所似，天地一沙鸥。",
        hint: "老病漂泊，以天地之阔写己身之微。",
        level: "medium"
      },
      {
        title: "西江月·夜行黄沙道中",
        author: "辛弃疾 · 宋",
        line: "明月别枝惊鹊，清风半夜鸣蝉。稻花香里说丰年，听取蛙声一片。七八个星天外，两三点雨山前。旧时茅店社林边，路转溪桥忽见。",
        hint: "夏夜田园，丰收在望的喜悦。",
        level: "medium"
      },
      {
        title: "清平乐·村居",
        author: "辛弃疾 · 宋",
        line: "茅檐低小，溪上青青草。醉里吴音相媚好，白发谁家翁媪。大儿锄豆溪东，中儿正织鸡笼。最喜小儿亡赖，溪头卧剥莲蓬。",
        hint: "田家天伦，情趣盎然。",
        level: "medium"
      },
      {
        title: "浣溪沙·谁道人生无再少",
        author: "苏轼 · 宋",
        line: "山下兰芽短浸溪，松间沙路净无泥，萧萧暮雨子规啼。谁道人生无再少，门前流水尚能西，休将白发唱黄鸡。",
        hint: "老当益壮，奋发乐观。",
        level: "medium"
      },
      {
        title: "武陵春（节选）",
        author: "李清照 · 宋",
        line: "风住尘香花已尽，日晚倦梳头。物是人非事事休，欲语泪先流。闻说双溪春尚好，也拟泛轻舟。只恐双溪舴艋舟，载不动许多愁。",
        hint: "国破家亡，愁重如山。",
        level: "medium"
      },
      {
        title: "望天门山",
        author: "李白 · 唐",
        line: "天门中断楚江开，碧水东流至此回。两岸青山相对出，孤帆一片日边来。",
        hint: "山水壮阔，气势雄浑。",
        level: "medium"
      },
      {
        title: "书愤",
        author: "陆游 · 宋",
        line: "早岁那知世事艰，中原北望气如山。楼船夜雪瓜洲渡，铁马秋风大散关。塞上长城空自许，镜中衰鬓已先斑。出师一表真名世，千载谁堪伯仲间。",
        hint: "壮志未酬，悲愤交织。",
        level: "hard"
      },
      {
        title: "阁夜",
        author: "杜甫 · 唐",
        line: "岁暮阴阳催短景，天涯霜雪霁寒宵。五更鼓角声悲壮，三峡星河影动摇。野哭几家闻战伐，夷歌数处起渔樵。卧龙跃马终黄土，人事音书漫寂寥。",
        hint: "战乱中的深沉悲慨。",
        level: "hard"
      },
      {
        title: "扬州慢（节选）",
        author: "姜夔 · 宋",
        line: "淮左名都，竹西佳处，解鞍少驻初程。过春风十里，尽荠麦青青。自胡马窥江去后，废池乔木，犹厌言兵。渐黄昏，清角吹寒，都在空城。",
        hint: "黍离之悲，兵后荒凉。",
        level: "hard"
      },
      {
        title: "苏幕遮·燎沉香",
        author: "周邦彦 · 宋",
        line: "燎沉香，消溽暑。鸟雀呼晴，侵晓窥檐语。叶上初阳干宿雨，水面清圆，一一风荷举。故乡遥，何日去。家住吴门，久作长安旅。五月渔郎相忆否，小楫轻舟，梦入芙蓉浦。",
        hint: "夏日思乡，清新与沉郁交融。",
        level: "hard"
      },
      {
        title: "青玉案·凌波不过横塘路",
        author: "贺铸 · 宋",
        line: "凌波不过横塘路，但目送、芳尘去。锦瑟华年谁与度。月桥花院，琐窗朱户，只有春知处。飞云冉冉蘅皋暮，彩笔新题断肠句。若问闲情都几许。一川烟草，满城风絮，梅子黄时雨。",
        hint: "以景写愁，千古绝唱。",
        level: "hard"
      },
      {
        title: "蝶恋花·庭院深深深几许",
        author: "欧阳修 · 宋",
        line: "庭院深深深几许，杨柳堆烟，帘幕无重数。玉勒雕鞍游冶处，楼高不见章台路。雨横风狂三月暮，门掩黄昏，无计留春住。泪眼问花花不语，乱红飞过秋千去。",
        hint: "深闺寂寞，伤春之叹。",
        level: "hard"
      },
      {
        title: "苏幕遮·碧云天",
        author: "范仲淹 · 宋",
        line: "碧云天，黄叶地。秋色连波，波上寒烟翠。山映斜阳天接水。芳草无情，更在斜阳外。黯乡魂，追旅思。夜夜除非，好梦留人睡。明月楼高休独倚。酒入愁肠，化作相思泪。",
        hint: "秋日思乡，苍凉中见深情。",
        level: "hard"
      },
      {
        title: "破阵子·四十年来家国",
        author: "李煜 · 南唐",
        line: "四十年来家国，三千里地山河。凤阁龙楼连霄汉，玉树琼枝作烟萝，几曾识干戈。一旦归为臣虏，沈腰潘鬓消磨。最是仓皇辞庙日，教坊犹奏别离歌，垂泪对宫娥。",
        hint: "亡国之痛，帝王之悲。",
        level: "hard"
      },
      {
        title: "浣溪沙·一向年光有限身",
        author: "晏殊 · 宋",
        line: "一向年光有限身，等闲离别易销魂。酒筵歌席莫辞频。满目山河空念远，落花风雨更伤春。不如怜取眼前人。",
        hint: "惜时惜人，通透中有伤感。",
        level: "hard"
      },
      {
        title: "踏莎行·郴州旅舍",
        author: "秦观 · 宋",
        line: "雾失楼台，月迷津渡。桃源望断无寻处。可堪孤馆闭春寒，杜鹃声里斜阳暮。驿寄梅花，鱼传尺素。砌成此恨无重数。郴江幸自绕郴山，为谁流下潇湘去。",
        hint: "贬谪之苦，孤寂之深。",
        level: "hard"
      },
      {
        title: "六国论（节选）",
        author: "苏洵 · 宋",
        line: "六国破灭，非兵不利，战不善，弊在赂秦。赂秦而力亏，破灭之道也。思厥先祖父，暴霜露，斩荆棘，以有尺寸之地。子孙视之不甚惜，举以予人，如弃草芥。",
        hint: "论六国赂秦之弊，警醒当世。",
        level: "hard"
      },
      {
        title: "游褒禅山记（节选）",
        author: "王安石 · 宋",
        line: "古人之观于天地、山川、草木、虫鱼、鸟兽，往往有得，以其求思之深而无不在也。夫夷以近，则游者众；险以远，则至者少。而世之奇伟、瑰怪、非常之观，常在于险远。",
        hint: "游山之中悟出治学与人生之理。",
        level: "hard"
      },
      {
        title: "前赤壁赋（名句）",
        author: "苏轼 · 宋",
        line: "寄蜉蝣于天地，渺沧海之一粟。哀吾生之须臾，羡长江之无穷。挟飞仙以遨游，抱明月而长终。知不可乎骤得，托遗响于悲风。",
        hint: "宇宙浩渺，人生须臾。",
        level: "hard"
      },
      {
        title: "报任安书（节选）",
        author: "司马迁 · 汉",
        line: "人固有一死，或重于泰山，或轻于鸿毛，用之所趋异也。所以隐忍苟活，幽于粪土之中而不辞者，恨私心有所不尽，鄙陋没世而文采不表于后也。",
        hint: "忍辱负重，发愤著书。",
        level: "hard"
      },
      {
        title: "渔家傲·天接云涛连晓雾",
        author: "李清照 · 宋",
        line: "天接云涛连晓雾，星河欲转千帆舞。仿佛梦魂归帝所。闻天语，殷勤问我归何处。我报路长嗟日暮，学诗谩有惊人句。九万里风鹏正举。风休住，蓬舟吹取三山去。",
        hint: "气势豪迈，不类易安风格。",
        level: "hard"
      },
      {
        title: "登快阁",
        author: "黄庭坚 · 宋",
        line: "痴儿了却公家事，快阁东西倚晚晴。落木千山天远大，澄江一道月分明。朱弦已为佳人绝，青眼聊因美酒横。万里归船弄长笛，此心吾与白鸥盟。",
        hint: "晚景明净，归心悠远。",
        level: "hard"
      },
      {
        title: "临安春雨初霁",
        author: "陆游 · 宋",
        line: "世味年来薄似纱，谁令骑马客京华。小楼一夜听春雨，深巷明朝卖杏花。矮纸斜行闲作草，晴窗细乳戏分茶。素衣莫起风尘叹，犹及清明可到家。",
        hint: "京华倦客，春雨中的孤寂。",
        level: "hard"
      },
    ];

    // --- Difficulty Levels ---
    const LEVEL_META = {
      easy: { label: "初级", desc: "常见的耳熟能详名句" },
      medium: { label: "中级", desc: "初高中必背中稍有难度的非高频句" },
      hard: { label: "高级", desc: "生僻字多、偏门或用典较深的高难度句" },
    };

    const EASY_TITLES = new Set([
      "咏鹅","春晓","静夜思","登鹳雀楼","清明","悯农其一","悯农其二","游子吟","江雪",
      "枫桥夜泊","绝句","赠汪伦","望庐山瀑布","早发白帝城","望天门山","村居","小池",
      "元日","回乡偶书","咏柳","题西林壁","饮湖上初晴后雨","晓出净慈寺送林子方","江畔独步寻花",
      "登飞来峰","观书有感","游山西村","出塞","九月九日忆山东兄弟","别董大","石灰吟","己亥杂诗（其五）",
      "滕王阁序（名句）","离骚（名句二）","离骚（名句一）"
    ]);

    const HARD_TITLES = new Set([
      "滕王阁序（节选）","阿房宫赋（节选）","赤壁赋（节选）","陈情表（节选）","逍遥游（节选）",
      "兰亭集序（节选）","小石潭记（节选）","锦瑟（节选）","梦游天姥吟留别（节选）"
    ]);

    const RARE_CHAR_RE = /[噫吁嚱兮寤寐荇蒹葭溯洄宛抟扶摇蜉蝣兀衅闵凶阡陌锲镂箸麾炙貂裘鳞鹜滟簟蒌蒿箫阑珊衾潺潺茱萸曈]/;
    const PROSE_TITLE_RE = /(序|赋|表|说|记|游|策|传|集序)/;

    function inferLevel(p){
      if(EASY_TITLES.has(p.title)) return "easy";
      if(HARD_TITLES.has(p.title)) return "hard";

      let score = 0;
      const len = String(p.line || "").length;
      if(len >= 80) score += 4;
      else if(len >= 60) score += 3;
      else if(len >= 45) score += 2;
      else if(len >= 32) score += 1;

      // 文言/骈文/长篇节选整体更难
      if(PROSE_TITLE_RE.test(p.title) && /（节选）/.test(p.title)) score += 3;
      else if(/（节选）/.test(p.title)) score += 1;

      if(/典故|骈文|哲思|用典|朦胧|幽微|沉郁|孤愤|瑰丽/.test(p.hint || "")) score += 1;
      if(RARE_CHAR_RE.test(p.line || "")) score += 1;

      if(score >= 4) return "hard";
      if(score >= 2) return "medium";
      return "easy";
    }

    function prepareBankLevels(){
      const counts = { easy: 0, medium: 0, hard: 0 };
      for(const p of BANK){
        p.level = inferLevel(p);
        if(!counts[p.level]) counts[p.level] = 0;
        counts[p.level] += 1;
      }
      return counts;
    }

    const LEVEL_COUNTS = prepareBankLevels();

    // --- Segment Pool (for distractor generation) ---
    const SEG_SPLIT_RE = /[，。！？；：]/;
    function splitSegments(line){
      return String(line)
        .split(SEG_SPLIT_RE)
        .map(s => s.trim())
        .filter(Boolean);
    }

    function buildSegmentIndex(poemIndices){
      const segmentPool = [];
      const segmentsByTitle = new Map();
      for(const poemIndex of poemIndices){
        const p = BANK[poemIndex];
        const segments = splitSegments(p.line);
        for(let i=0;i<segments.length;i++){
          const text = segments[i];
          let context = text;
          if(i % 2 === 0 && i + 1 < segments.length){
            context = text + "，" + segments[i + 1] + "。";
          } else if(i % 2 === 1 && i - 1 >= 0){
            context = segments[i - 1] + "，" + text + "。";
          }
          const seg = {
            poemIndex,
            title: p.title,
            author: p.author,
            text,
            context,
            hint: p.hint,
            level: p.level,
          };
          segmentPool.push(seg);
          if(!segmentsByTitle.has(seg.title)) segmentsByTitle.set(seg.title, []);
          segmentsByTitle.get(seg.title).push(seg);
        }
      }
      return { segmentPool, segmentsByTitle };
    }

    function pickOne(arr){
      return arr[Math.floor(Math.random() * arr.length)];
    }

    const $ = (id) => document.getElementById(id);
    const els = {
      poemTitle: $("poemTitle"),
      poemAuthor: $("poemAuthor"),
      questionText: $("questionText"),
      directionLabel: $("directionLabel"),
      stemContent: $("stemContent"),
      options: $("options"),
      round: $("round"),
      total: $("total"),
      total2: $("total2"),
      done: $("done"),
      nextBtn: $("nextBtn"),
      skipBtn: $("skipBtn"),
      revealBtn: $("revealBtn"),
      score: $("score"),
      streak: $("streak"),
      acc: $("acc"),
      best: $("best"),
      timeLeft: $("timeLeft"),
      timeBar: $("timeBar"),
      roundBar: $("roundBar"),
      hintBox: $("hintBox"),
      toast: $("toast"),
      startOverlay: $("startOverlay"),
      startBtn: $("startBtn"),
      resetBtn: $("resetBtn"),
      timerToggle: $("timerToggle"),
      soundToggle: $("soundToggle"),
      secLabel: $("secLabel"),
      revealPanel: $("revealPanel"),
      fullLine: $("fullLine"),
      explain: $("explain"),
      sourcesPanel: $("sourcesPanel"),
      sourcesTitle: $("sourcesTitle"),
      sourceList: $("sourceList"),
      levelPill: $("levelPill"),
      levelEasy: $("levelEasy"),
      levelMedium: $("levelMedium"),
      levelHard: $("levelHard"),
      countEasy: $("countEasy"),
      countMedium: $("countMedium"),
      countHard: $("countHard"),
    };

    const STORE_KEY = "poetry_contest_v2";

    const state = {
      idx: 0,
      order: [],
      currentQ: null,
      answered: false,
      score: 0,
      streak: 0,
      correct: 0,
      total: 10,
      enableTimer: true,
      enableSound: true,
      seconds: 15,
      tRemain: 15,
      tHandle: null,
      best: 0,
      level: "easy",
      activeIndices: [],
      segmentIndex: null,
      seenPoolByLevel: { easy: [], medium: [], hard: [] },
      recentPoolByLevel: { easy: [], medium: [], hard: [] },
    };

    function loadPersist(){
      try{
        const raw = localStorage.getItem(STORE_KEY);
        if(!raw) return;
        const d = JSON.parse(raw);
        if(typeof d.best === 'number') state.best = d.best;
        if(typeof d.enableTimer === 'boolean') state.enableTimer = d.enableTimer;
        if(typeof d.enableSound === 'boolean') state.enableSound = d.enableSound;
        if(typeof d.level === 'string' && LEVEL_META[d.level]) state.level = d.level;
      } catch(_){/* ignore */}
    }

    function persist(){
      localStorage.setItem(STORE_KEY, JSON.stringify({
        best: state.best,
        enableTimer: state.enableTimer,
        enableSound: state.enableSound,
        level: state.level,
      }));
    }

    function resetPersist(){
      localStorage.removeItem(STORE_KEY);
      state.best = 0;
      state.enableTimer = true;
      state.enableSound = true;
      state.level = "easy";
      state.seenPoolByLevel = { easy: [], medium: [], hard: [] };
      state.recentPoolByLevel = { easy: [], medium: [], hard: [] };
      persist();
      toast("已清空记录");
      syncSide();
      syncLevelUi();
    }

    function shuffle(arr){
      const a = arr.slice();
      for(let i=a.length-1;i>0;i--){
        const j = Math.floor(Math.random()*(i+1));
        [a[i],a[j]] = [a[j],a[i]];
      }
      return a;
    }

    // --- Dynamic Question Generation ---
    function generateQuestion(poemIndex) {
      const poem = BANK[poemIndex];
      const segments = splitSegments(poem.line);

      if (segments.length < 2) return null;

      // 随机决定出题方向：true=给出上半句选下半句，false=给出下半句选上半句
      const forward = Math.random() < 0.5;
      // 联内配对：偶数位是上句，奇数位是下句，只在同一联内配对
      let qIdx;
      if (forward) {
        const evenIndices = [];
        for (let i = 0; i < segments.length - 1; i += 2) evenIndices.push(i);
        if (evenIndices.length === 0) return null;
        qIdx = evenIndices[Math.floor(Math.random() * evenIndices.length)];
      } else {
        const oddIndices = [];
        for (let i = 1; i < segments.length; i += 2) oddIndices.push(i);
        if (oddIndices.length === 0) return null;
        qIdx = oddIndices[Math.floor(Math.random() * oddIndices.length)];
      }
      const stem = segments[qIdx];
      const answerText = forward ? segments[qIdx + 1] : segments[qIdx - 1];
      const directionLabel = forward ? "请接下一句" : "请接上一句";

      const idx = state.segmentIndex;
      const segmentPool = idx ? idx.segmentPool : [];
      const segmentsByTitle = idx ? idx.segmentsByTitle : new Map();

      // Construct correct option object
      const answerContext = forward
        ? `${stem}，${answerText}。`
        : `${answerText}，${stem}。`;
      const answerObj = segmentPool.find(s => s.poemIndex === poemIndex && s.text === answerText) || {
        poemIndex,
        title: poem.title,
        author: poem.author,
        text: answerText,
        context: answerContext,
        hint: poem.hint,
        level: poem.level,
      };

      // Distractor logic
      const distractors = [];
      const targetLen = answerText.length;
      const targetTitle = poem.title;

      // 1. Different poems
      const validOtherPoemTitles = Array.from(segmentsByTitle.keys()).filter(t => t !== targetTitle);
      const shuffledPoemTitles = shuffle(validOtherPoemTitles);

      for (const otherTitle of shuffledPoemTitles) {
        if (distractors.length >= 3) break;
        const base = segmentsByTitle.get(otherTitle) || [];
        let candidateSegments = base.filter(seg => seg.text.length === targetLen);
        if(candidateSegments.length === 0) candidateSegments = base.filter(seg => Math.abs(seg.text.length - targetLen) <= 1);
        if(candidateSegments.length === 0) candidateSegments = base;

        if (candidateSegments.length > 0) {
          const picked = pickOne(candidateSegments);
          if (!distractors.some(d => d.text === picked.text)) {
            distractors.push(picked);
          }
        }
      }

      // 2. Fallback
      if (distractors.length < 3) {
        let pool = segmentPool.filter(s =>
          s.title !== targetTitle &&
          !distractors.some(d => d.text === s.text)
        );
        let sameLen = pool.filter(s => s.text.length === targetLen);
        if(sameLen.length >= (3 - distractors.length)) pool = sameLen;
        else {
          const nearLen = pool.filter(s => Math.abs(s.text.length - targetLen) <= 1);
          if(nearLen.length >= (3 - distractors.length)) pool = nearLen;
        }
        const shuffledPool = shuffle(pool);
        while (distractors.length < 3 && shuffledPool.length > 0) {
          distractors.push(shuffledPool.pop());
        }
      }

      // 3. Last Resort Fallback
      if (distractors.length < 3) {
        const anyPool = segmentPool.filter(s => s.text !== answerText && !distractors.some(d => d.text === s.text));
        const shuffledAny = shuffle(anyPool);
        while (distractors.length < 3 && shuffledAny.length > 0) distractors.push(shuffledAny.pop());
      }

      const options = shuffle([answerObj, ...distractors.slice(0, 3)]);

      return {
        title: poem.title,
        author: poem.author,
        stem: stem,
        answer: answerText,
        options: options,
        hint: poem.hint,
        fullLine: poem.line,
        level: poem.level,
        directionLabel,
        forward,
      };
    }

    function getActiveIndices(level){
      const res = [];
      for(let i=0;i<BANK.length;i++) if(BANK[i].level === level) res.push(i);
      return res;
    }

    function syncLevelUi(){
      els.levelPill.textContent = LEVEL_META[state.level]?.label || "初级";
      els.countEasy.textContent = `${LEVEL_COUNTS.easy || 0} 题`;
      els.countMedium.textContent = `${LEVEL_COUNTS.medium || 0} 题`;
      els.countHard.textContent = `${LEVEL_COUNTS.hard || 0} 题`;
      [els.levelEasy, els.levelMedium, els.levelHard].forEach(b => b && b.classList.remove('active'));
      const map = { easy: els.levelEasy, medium: els.levelMedium, hard: els.levelHard };
      if(map[state.level]) map[state.level].classList.add('active');
    }

    function enterIdle(){
      stopTimer();
      state.order = [];
      state.idx = 0;
      state.total = 10;
      els.round.textContent = "0";
      els.total.textContent = "10";
      els.total2.textContent = "10";
      els.done.textContent = "0";
      els.options.innerHTML = "";
      els.stemContent.innerHTML = `<span style="font-size:14px; color:var(--muted)">请选择难度并点击“开始练习”。</span>`;
      concealInfo();
      els.nextBtn.disabled = true;
      syncSide();
    }

    function concealInfo(){
      els.poemTitle.textContent = "—";
      els.poemAuthor.textContent = "—";
      els.hintBox.textContent = "作答后显示作者、标题与解析。";
      els.revealPanel.hidden = true;
      els.fullLine.textContent = "—";
      els.explain.textContent = "—";
      els.sourceList.innerHTML = "";
    }

    function revealInfo(q, chosenText){
      els.poemTitle.textContent = q.title;
      els.poemAuthor.textContent = q.author;
      els.hintBox.textContent = q.hint;
      els.revealPanel.hidden = false;
      els.fullLine.textContent = q.fullLine;
      els.explain.textContent = `解析：${q.hint}`;

      // Render sources for all options
      els.sourcesTitle.textContent = "选项溯源 · 拓展学习";
      els.sourceList.innerHTML = "";

      const chosenObj = q.options.find(o => o.text === chosenText);

      if (chosenText) {
        const summary = document.createElement("div");
        if (chosenText === q.answer) {
          summary.innerHTML = `<div style="margin-bottom:10px;font-size:13px;color:var(--emerald-dark);font-weight:700;">✓ 回答正确——“${escapeHtml(chosenText)}”是本题下句</div>`;
        } else if (chosenObj) {
          summary.innerHTML = `<div style="margin-bottom:10px;font-size:13px;color:#b8423a;font-weight:700;">✗ 你选了“${escapeHtml(chosenText)}”——这句出自《${escapeHtml(chosenObj.title)}》，不是本题接句</div>`;
        }
        els.sourceList.appendChild(summary);
      }

      q.options.forEach(opt => {
        const item = document.createElement("div");
        const isCorrect = opt.text === q.answer;
        const isChosen = opt.text === chosenText;
        item.className = `source-item ${isCorrect ? 'is-correct' : ''}`;

        const badges = [];
        if(isCorrect) badges.push('<span style="color:var(--emerald);font-size:10px;border:1px solid var(--emerald);padding:0 4px;border-radius:4px;">正确项</span>');
        if(isChosen && !isCorrect) badges.push('<span style="color:#b8423a;font-size:10px;border:1px solid #b8423a;padding:0 4px;border-radius:4px;">你的选择</span>');
        const badgeHtml = badges.length ? ' ' + badges.join(' ') : '';

        item.innerHTML = `
          <span class="opt-text">“${escapeHtml(opt.context)}”${badgeHtml}</span>
          <div class="opt-meta">${escapeHtml(opt.author)} · 《${escapeHtml(opt.title)}》</div>
          <span class="opt-hint">${escapeHtml(opt.hint)}</span>
        `;
        els.sourceList.appendChild(item);
      });
    }

    function escapeHtml(s){
      return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[m]));
    }

    function toast(msg){
      els.toast.textContent = msg;
      els.toast.classList.add("show");
      clearTimeout(els.toast._t);
      els.toast._t = setTimeout(()=> els.toast.classList.remove("show"), 1600);
    }

    function beep(kind="ok"){
      if(!state.enableSound) return;
      try{
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = kind === 'ok' ? 'triangle' : 'sawtooth';
        o.frequency.value = kind === 'ok' ? 660 : 196;
        g.gain.value = 0.05;
        o.connect(g); g.connect(ctx.destination);
        o.start();
        setTimeout(()=>{ o.stop(); ctx.close(); }, kind === 'ok' ? 120 : 180);
      } catch(_){/* ignore */}
    }

    function startRound(isContinue = false){
      if(!isContinue) {
        state.score = 0;
        state.streak = 0;
        state.correct = 0;
      }
      state.idx = 0;
      state.answered = false;

      state.activeIndices = getActiveIndices(state.level);
      let roundSize = Math.min(10, state.activeIndices.length);
      if(roundSize <= 0){
        toast("该难度暂无题目，已切换到初级");
        state.level = "easy";
        persist();
        syncLevelUi();
        state.activeIndices = getActiveIndices(state.level);
        roundSize = Math.min(10, state.activeIndices.length);
      }

      const cacheKey = state.level + "_" + state.activeIndices.join(",");
      if (state._segmentCache?.[cacheKey]) {
        state.segmentIndex = state._segmentCache[cacheKey];
      } else {
        state.segmentIndex = buildSegmentIndex(state.activeIndices);
        if (!state._segmentCache) state._segmentCache = {};
        state._segmentCache[cacheKey] = state.segmentIndex;
      }

      const seenPool = state.seenPoolByLevel[state.level] || (state.seenPoolByLevel[state.level] = []);
      const recentPool = state.recentPoolByLevel[state.level] || (state.recentPoolByLevel[state.level] = []);
      
      // 去重逻辑：优先从没见过的池子里选，且避开最近出的 20 道（若题库足够）
      let available = [];
      available = state.activeIndices.filter(i => !seenPool.includes(i) && !recentPool.includes(i));
      
      // 如果满足冷却条件的题目不足 10 道，则放宽冷却限制
      if(available.length < roundSize) available = state.activeIndices.filter(i => !seenPool.includes(i));

      let selected = [];
      if(available.length >= roundSize) {
        selected = shuffle(available).slice(0, roundSize);
      } else {
        // 不足 roundSize 道：先拿完 available，再从同难度全集补齐；尽量避开最近出过的题目
        selected = shuffle(available);
        const need = roundSize - selected.length;
        let candidates = state.activeIndices.filter(i => !selected.includes(i) && !recentPool.includes(i));
        if(candidates.length < need) candidates = state.activeIndices.filter(i => !selected.includes(i));
        selected = selected.concat(shuffle(candidates).slice(0, need));
      }
      
      state.order = selected;
      // seenPool 记录已出的题目索引，全满后重置（按难度分开）
      selected.forEach(i => { if(!seenPool.includes(i)) seenPool.push(i); });
      if(seenPool.length >= state.activeIndices.length) seenPool.splice(0, seenPool.length);

      // 记录最近出过的题目（冷却窗口：30）
      recentPool.push(...selected);
      if(recentPool.length > 30) recentPool.splice(0, recentPool.length - 30);
      
      state.total = state.order.length;
      els.total.textContent = String(state.total);
      els.total2.textContent = String(state.total);
      render();
      syncSide();
    }

    function stopTimer(){
      if(state.tHandle){ clearInterval(state.tHandle); state.tHandle = null; }
    }

    function startTimer(){
      stopTimer();
      if(!state.enableTimer) {
        els.timeLeft.textContent = "—";
        els.timeBar.style.width = "0%";
        return;
      }
      state.tRemain = state.seconds;
      els.timeLeft.textContent = String(state.tRemain);
      els.timeBar.style.width = "0%";
      state.tHandle = setInterval(()=>{
        if(state.answered) return;
        state.tRemain -= 1;
        const p = Math.max(0, Math.min(1, 1 - state.tRemain/state.seconds));
        els.timeBar.style.width = `${Math.round(p*100)}%`;
        els.timeLeft.textContent = String(Math.max(0,state.tRemain));
        if(state.tRemain <= 0){
          stopTimer();
          onTimeout();
        }
      }, 1000);
    }

    function onTimeout(){
      if(state.answered) return;
      state.answered = true;
      state.streak = 0;
      revealAnswer("时间到：揭晓答案", {autoWrong:true});
      beep('bad');
      els.nextBtn.disabled = false;
      syncSide();
    }

    function render(){
      const q = generateQuestion(state.order[state.idx]);
      state.currentQ = q;
      els.round.textContent = String(state.idx + 1);
      els.done.textContent = String(state.idx);
      concealInfo();
      els.directionLabel.textContent = q.directionLabel + "：";
      els.stemContent.innerHTML = `<span style="font-size:28px; font-weight:700;">${escapeHtml(q.stem)}</span>`;

      els.options.innerHTML = "";
      q.options.forEach((opt, i)=>{
        const b = document.createElement("button");
        b.className = "btn";
        b.setAttribute("data-opt", opt.text);
        b.innerHTML = `<span class="k">${i+1}. ${escapeHtml(opt.text)}</span><span class="hint">点击对接</span>`;
        b.addEventListener("click", ()=> choose(opt.text));
        els.options.appendChild(b);
      });

      state.answered = false;
      els.nextBtn.disabled = true;
      startTimer();
    }

    function choose(optText){
      if(state.answered) return;
      const q = state.currentQ;
      state.answered = true;
      stopTimer();

      const isOk = optText === q.answer;
      if(isOk){
        state.correct += 1;
        state.streak += 1;
        const bonus = state.streak >= 3 ? 2 * (state.streak - 2) : 0;
        state.score += (10 + bonus);
        markButtons(optText, q.answer);
        revealInfo(q, optText);
        toast(`正确 +${10+bonus}`);
        beep('ok');
      }else{
        state.streak = 0;
        markButtons(optText, q.answer);
        revealInfo(q, optText);
        toast("差一点——答案已揭晓");
        beep('bad');
      }

      els.nextBtn.disabled = false;
      syncSide();

      if(state.idx === state.total - 1){
        els.nextBtn.textContent = "结算";
      } else {
        els.nextBtn.textContent = "下一题";
      }
    }

    function markButtons(chosenText, answerText){
      const buttons = [...els.options.querySelectorAll('.btn')];
      for(const b of buttons){
        const v = b.getAttribute('data-opt');
        if(v === answerText) b.classList.add('correct');
        if(v === chosenText && chosenText !== answerText) b.classList.add('wrong');
        b.disabled = true;
      }
    }

    function revealAnswer(msg="揭晓答案", extra={}){
      const q = state.currentQ;
      revealInfo(q);
      const buttons = [...els.options.querySelectorAll('.btn')];
      for(const b of buttons){
        const v = b.getAttribute('data-opt');
        if(v === q.answer) b.classList.add('correct');
        b.disabled = true;
      }
      toast(msg);
    }

    function next(){
      if(!state.answered) return;
      if(state.idx >= state.total - 1){
        finish();
        return;
      }
      state.idx += 1;
      render();
      syncSide();
    }

    function skip(){
      if(state.answered) return;
      stopTimer();
      state.answered = true;
      state.streak = 0;
      revealAnswer("已跳过：揭晓答案", {autoWrong:true});
      els.nextBtn.disabled = false;
      syncSide();
    }

    function finish(){
      stopTimer();
      const total = state.total;
      const acc = total ? Math.round((state.correct/total)*100) : 0;
      const msg = `练习结束：得分 ${state.score}，正确 ${state.correct}/${total}（${acc}%）`;

      if(state.score > state.best){
        state.best = state.score;
        persist();
      }

      els.startOverlay.classList.remove("hidden");
      const box = els.startOverlay.querySelector('.startBox');
      box.querySelector('.title').textContent = "结算";
      box.querySelector('.desc').innerHTML = `${escapeHtml(msg)}<br/>历史最高：<strong>${state.best}</strong>。`;
      els.startBtn.textContent = "重新开始";
      
      // 动态增加“继续挑战”按钮
      let continueBtn = $("continueBtn");
      if(!continueBtn){
        continueBtn = document.createElement('button');
        continueBtn.id = "continueBtn";
        continueBtn.className = "primary";
        continueBtn.style.marginLeft = "10px";
        continueBtn.textContent = "继续挑战 (再来10题)";
        continueBtn.addEventListener('click', () => {
          els.startOverlay.classList.add("hidden");
          startRound(true);
        });
        els.startBtn.parentNode.appendChild(continueBtn);
      }
      continueBtn.style.display = "inline-block";

      els.nextBtn.textContent = "下一题";
      syncSide();
    }

    function syncSide(){
      els.levelPill.textContent = LEVEL_META[state.level]?.label || "初级";
      els.score.textContent = String(state.score);
      els.streak.textContent = String(state.streak);
      els.best.textContent = state.best ? String(state.best) : "—";
      const done = state.idx + (state.answered ? 1 : 0);
      els.done.textContent = String(Math.min(done, state.total));
      const p = Math.round((Math.min(done, state.total) / state.total) * 100);
      els.roundBar.style.width = `${p}%`;
      const totalAnswered = Math.min(done, state.total);
      els.acc.textContent = totalAnswered ? `${Math.round((state.correct/totalAnswered)*100)}%` : "—";
      els.timerToggle.checked = state.enableTimer;
      els.soundToggle.checked = state.enableSound;
      els.secLabel.textContent = String(state.seconds);
      if(!state.enableTimer){
        els.timeLeft.textContent = "—";
        els.timeBar.style.width = "0%";
      } else {
        els.timeLeft.textContent = state.answered ? "0" : String(state.tRemain);
      }
    }

    function bind(){
      els.nextBtn.addEventListener('click', next);
      els.skipBtn.addEventListener('click', skip);
      els.revealBtn.addEventListener('click', ()=>{
        if(state.answered) return;
        stopTimer();
        state.answered = true;
        state.streak = 0;
        revealAnswer("揭晓：不计分");
        els.nextBtn.disabled = false;
        syncSide();
      });
      els.startBtn.addEventListener('click', ()=>{
        els.startOverlay.classList.add("hidden");
        const continueBtn = $("continueBtn");
        if(continueBtn) continueBtn.style.display = "none";
        const box = els.startOverlay.querySelector('.startBox');
        box.querySelector('.title').textContent = "设置";
        box.querySelector('.desc').innerHTML = '你将进入一段"舞台式"的<strong>诗句接龙</strong>练习：根据上句接出下句。<br/>干扰项经过精选，字数与意境相近，挑战你的记忆力。';
        els.startBtn.textContent = "开始练习";
        startRound();
      });

      [els.levelEasy, els.levelMedium, els.levelHard].forEach(btn => {
        if(!btn) return;
        btn.addEventListener('click', ()=>{
          const lv = btn.getAttribute('data-level');
          if(!LEVEL_META[lv]) return;
          state.level = lv;
          persist();
          syncLevelUi();
        });
      });
      els.resetBtn.addEventListener('click', resetPersist);
      els.timerToggle.addEventListener('change', (e)=>{
        state.enableTimer = !!e.target.checked;
        persist();
        syncSide();
      });
      els.soundToggle.addEventListener('change', (e)=>{
        state.enableSound = !!e.target.checked;
        persist();
        syncSide();
      });

      window.addEventListener('keydown', (e)=>{
        if(els.startOverlay.style.display !== 'none' && e.key !== 'Escape'){
          if(e.key === 'Enter') els.startBtn.click();
          return;
        }
        if(e.key === 'Enter') { if(!els.nextBtn.disabled) els.nextBtn.click(); }
        if(e.code === 'Space'){ e.preventDefault(); els.skipBtn.click(); }
        if(e.key.toLowerCase() === 'r'){ els.revealBtn.click(); }
        if(['1','2','3','4'].includes(e.key)){
          const i = Number(e.key) - 1;
          const btn = els.options.querySelectorAll('.btn')[i];
          if(btn) btn.click();
        }
        if(e.key === 'Escape'){ /* noop: 已移除入场页 */ }
      });
    }

    function init(){
      loadPersist();
      els.best.textContent = state.best ? String(state.best) : "—";
      bind();
      syncLevelUi();
      syncSide();
      enterIdle();
    }

    init();
  