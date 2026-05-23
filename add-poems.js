const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const newPoems = [
  // === EASY (15 首) ===
  { title: '画', author: '王维 · 唐', line: '远看山有色，近听水无声。春去花还在，人来鸟不惊。', hint: '诗中有画，画中有诗。', level: 'easy' },
  { title: '古朗月行（节选）', author: '李白 · 唐', line: '小时不识月，呼作白玉盘。又疑瑶台镜，飞在青云端。', hint: '以童趣写月，天真可爱。', level: 'easy' },
  { title: '风', author: '李峤 · 唐', line: '解落三秋叶，能开二月花。过江千尺浪，入竹万竿斜。', hint: '咏物诗，写风之力量。', level: 'easy' },
  { title: '山村咏怀', author: '邵雍 · 宋', line: '一去二三里，烟村四五家。亭台六七座，八九十枝花。', hint: '数字入诗，童趣盎然。', level: 'easy' },
  { title: '梅花', author: '王安石 · 宋', line: '墙角数枝梅，凌寒独自开。遥知不是雪，为有暗香来。', hint: '借梅喻人，凌寒独立。', level: 'easy' },
  { title: '鸟鸣涧', author: '王维 · 唐', line: '人闲桂花落，夜静春山空。月出惊山鸟，时鸣春涧中。', hint: '以动衬静，空灵之境。', level: 'easy' },
  { title: '竹里馆', author: '王维 · 唐', line: '独坐幽篁里，弹琴复长啸。深林人不知，明月来相照。', hint: '独处之乐，物我两忘。', level: 'easy' },
  { title: '相思', author: '王维 · 唐', line: '红豆生南国，春来发几枝。愿君多采撷，此物最相思。', hint: '以红豆寄相思。', level: 'easy' },
  { title: '长歌行（节选）', author: '汉乐府', line: '青青园中葵，朝露待日晞。阳春布德泽，万物生光辉。常恐秋节至，焜黄华叶衰。百川东到海，何时复西归。少壮不努力，老大徒伤悲。', hint: '劝人惜时，发奋进取。', level: 'easy' },
  { title: '敕勒歌', author: '北朝民歌', line: '敕勒川，阴山下。天似穹庐，笼盖四野。天苍苍，野茫茫，风吹草低见牛羊。', hint: '草原壮阔，气象苍茫。', level: 'easy' },
  { title: '七步诗', author: '曹植 · 三国', line: '煮豆燃豆萁，豆在釜中泣。本是同根生，相煎何太急。', hint: '兄弟相争，同根相煎。', level: 'easy' },
  { title: '逢雪宿芙蓉山主人', author: '刘长卿 · 唐', line: '日暮苍山远，天寒白屋贫。柴门闻犬吠，风雪夜归人。', hint: '风雪苦寒中的一丝温暖。', level: 'easy' },
  { title: '寻隐者不遇', author: '贾岛 · 唐', line: '松下问童子，言师采药去。只在此山中，云深不知处。', hint: '访隐者不遇的飘逸之趣。', level: 'easy' },
  { title: '赠刘景文', author: '苏轼 · 宋', line: '荷尽已无擎雨盖，菊残犹有傲霜枝。一年好景君须记，正是橙黄橘绿时。', hint: '勉励友人珍惜好时光。', level: 'easy' },
  { title: '凉州词（黄河远上）', author: '王之涣 · 唐', line: '黄河远上白云间，一片孤城万仞山。羌笛何须怨杨柳，春风不度玉门关。', hint: '边塞苍凉，隐讽皇恩难至。', level: 'easy' },

  // === MEDIUM (17 首) ===
  { title: '送杜少府之任蜀州', author: '王勃 · 唐', line: '城阙辅三秦，风烟望五津。与君离别意，同是宦游人。海内存知己，天涯若比邻。无为在歧路，儿女共沾巾。', hint: '写离别而不哀，意气豪迈。', level: 'medium' },
  { title: '泊船瓜洲', author: '王安石 · 宋', line: '京口瓜洲一水间，钟山只隔数重山。春风又绿江南岸，明月何时照我还。', hint: '“绿”字锤炼的千古名句。', level: 'medium' },
  { title: '游园不值', author: '叶绍翁 · 宋', line: '应怜屐齿印苍苔，小扣柴扉久不开。春色满园关不住，一枝红杏出墙来。', hint: '不遇中有遇，失望中含惊喜。', level: 'medium' },
  { title: '题临安邸', author: '林升 · 宋', line: '山外青山楼外楼，西湖歌舞几时休。暖风熏得游人醉，直把杭州作汴州。', hint: '讽南宋偏安，沉痛之至。', level: 'medium' },
  { title: '四时田园杂兴（其三十一）', author: '范成大 · 宋', line: '昼出耘田夜绩麻，村庄儿女各当家。童孙未解供耕织，也傍桑阴学种瓜。', hint: '田家劳作，童趣自然。', level: 'medium' },
  { title: '约客', author: '赵师秀 · 宋', line: '黄梅时节家家雨，青草池塘处处蛙。有约不来过夜半，闲敲棋子落灯花。', hint: '闲适中的淡淡焦躁。', level: 'medium' },
  { title: '过华清宫', author: '杜牧 · 唐', line: '长安回望绣成堆，山顶千门次第开。一骑红尘妃子笑，无人知是荔枝来。', hint: '讽荒淫误国，以笑写悲。', level: 'medium' },
  { title: '忆江南', author: '白居易 · 唐', line: '江南好，风景旧曾谙。日出江花红胜火，春来江水绿如蓝。能不忆江南。', hint: '江南春色，明丽如画。', level: 'medium' },
  { title: '峨眉山月歌', author: '李白 · 唐', line: '峨眉山月半轮秋，影入平羌江水流。夜发清溪向三峡，思君不见下渝州。', hint: '峨眉秋月，随舟而下。', level: 'medium' },
  { title: '春夜洛城闻笛', author: '李白 · 唐', line: '谁家玉笛暗飞声，散入春风满洛城。此夜曲中闻折柳，何人不起故园情。', hint: '笛声满城，故园之思。', level: 'medium' },
  { title: '竹枝词', author: '刘禹锡 · 唐', line: '杨柳青青江水平，闻郎江上踏歌声。东边日出西边雨，道是无晴却有晴。', hint: '谐音双关，民歌风味。', level: 'medium' },
  { title: '旅夜书怀', author: '杜甫 · 唐', line: '细草微风岸，危樯独夜舟。星垂平野阔，月涌大江流。名岂文章著，官应老病休。飘飘何所似，天地一沙鸥。', hint: '老病漂泊，以天地之阔写己身之微。', level: 'medium' },
  { title: '西江月·夜行黄沙道中', author: '辛弃疾 · 宋', line: '明月别枝惊鹊，清风半夜鸣蝉。稻花香里说丰年，听取蛙声一片。七八个星天外，两三点雨山前。旧时茅店社林边，路转溪桥忽见。', hint: '夏夜田园，丰收在望的喜悦。', level: 'medium' },
  { title: '清平乐·村居', author: '辛弃疾 · 宋', line: '茅檐低小，溪上青青草。醉里吴音相媚好，白发谁家翁媪。大儿锄豆溪东，中儿正织鸡笼。最喜小儿亡赖，溪头卧剥莲蓬。', hint: '田家天伦，情趣盎然。', level: 'medium' },
  { title: '浣溪沙·谁道人生无再少', author: '苏轼 · 宋', line: '山下兰芽短浸溪，松间沙路净无泥，萧萧暮雨子规啼。谁道人生无再少，门前流水尚能西，休将白发唱黄鸡。', hint: '老当益壮，奋发乐观。', level: 'medium' },
  { title: '武陵春（节选）', author: '李清照 · 宋', line: '风住尘香花已尽，日晚倦梳头。物是人非事事休，欲语泪先流。闻说双溪春尚好，也拟泛轻舟。只恐双溪舴艋舟，载不动许多愁。', hint: '国破家亡，愁重如山。', level: 'medium' },
  { title: '望天门山', author: '李白 · 唐', line: '天门中断楚江开，碧水东流至此回。两岸青山相对出，孤帆一片日边来。', hint: '山水壮阔，气势雄浑。', level: 'medium' },

  // === HARD (17 首) ===
  { title: '书愤', author: '陆游 · 宋', line: '早岁那知世事艰，中原北望气如山。楼船夜雪瓜洲渡，铁马秋风大散关。塞上长城空自许，镜中衰鬓已先斑。出师一表真名世，千载谁堪伯仲间。', hint: '壮志未酬，悲愤交织。', level: 'hard' },
  { title: '阁夜', author: '杜甫 · 唐', line: '岁暮阴阳催短景，天涯霜雪霁寒宵。五更鼓角声悲壮，三峡星河影动摇。野哭几家闻战伐，夷歌数处起渔樵。卧龙跃马终黄土，人事音书漫寂寥。', hint: '战乱中的深沉悲慨。', level: 'hard' },
  { title: '扬州慢（节选）', author: '姜夔 · 宋', line: '淮左名都，竹西佳处，解鞍少驻初程。过春风十里，尽荠麦青青。自胡马窥江去后，废池乔木，犹厌言兵。渐黄昏，清角吹寒，都在空城。', hint: '黍离之悲，兵后荒凉。', level: 'hard' },
  { title: '苏幕遮·燎沉香', author: '周邦彦 · 宋', line: '燎沉香，消溽暑。鸟雀呼晴，侵晓窥檐语。叶上初阳干宿雨，水面清圆，一一风荷举。故乡遥，何日去。家住吴门，久作长安旅。五月渔郎相忆否，小楫轻舟，梦入芙蓉浦。', hint: '夏日思乡，清新与沉郁交融。', level: 'hard' },
  { title: '青玉案·凌波不过横塘路', author: '贺铸 · 宋', line: '凌波不过横塘路，但目送、芳尘去。锦瑟华年谁与度。月桥花院，琐窗朱户，只有春知处。飞云冉冉蘅皋暮，彩笔新题断肠句。若问闲情都几许。一川烟草，满城风絮，梅子黄时雨。', hint: '以景写愁，千古绝唱。', level: 'hard' },
  { title: '蝶恋花·庭院深深深几许', author: '欧阳修 · 宋', line: '庭院深深深几许，杨柳堆烟，帘幕无重数。玉勒雕鞍游冶处，楼高不见章台路。雨横风狂三月暮，门掩黄昏，无计留春住。泪眼问花花不语，乱红飞过秋千去。', hint: '深闺寂寞，伤春之叹。', level: 'hard' },
  { title: '苏幕遮·碧云天', author: '范仲淹 · 宋', line: '碧云天，黄叶地。秋色连波，波上寒烟翠。山映斜阳天接水。芳草无情，更在斜阳外。黯乡魂，追旅思。夜夜除非，好梦留人睡。明月楼高休独倚。酒入愁肠，化作相思泪。', hint: '秋日思乡，苍凉中见深情。', level: 'hard' },
  { title: '破阵子·四十年来家国', author: '李煜 · 南唐', line: '四十年来家国，三千里地山河。凤阁龙楼连霄汉，玉树琼枝作烟萝，几曾识干戈。一旦归为臣虏，沈腰潘鬓消磨。最是仓皇辞庙日，教坊犹奏别离歌，垂泪对宫娥。', hint: '亡国之痛，帝王之悲。', level: 'hard' },
  { title: '浣溪沙·一向年光有限身', author: '晏殊 · 宋', line: '一向年光有限身，等闲离别易销魂。酒筵歌席莫辞频。满目山河空念远，落花风雨更伤春。不如怜取眼前人。', hint: '惜时惜人，通透中有伤感。', level: 'hard' },
  { title: '踏莎行·郴州旅舍', author: '秦观 · 宋', line: '雾失楼台，月迷津渡。桃源望断无寻处。可堪孤馆闭春寒，杜鹃声里斜阳暮。驿寄梅花，鱼传尺素。砌成此恨无重数。郴江幸自绕郴山，为谁流下潇湘去。', hint: '贬谪之苦，孤寂之深。', level: 'hard' },
  { title: '六国论（节选）', author: '苏洵 · 宋', line: '六国破灭，非兵不利，战不善，弊在赂秦。赂秦而力亏，破灭之道也。思厥先祖父，暴霜露，斩荆棘，以有尺寸之地。子孙视之不甚惜，举以予人，如弃草芥。', hint: '论六国赂秦之弊，警醒当世。', level: 'hard' },
  { title: '游褒禅山记（节选）', author: '王安石 · 宋', line: '古人之观于天地、山川、草木、虫鱼、鸟兽，往往有得，以其求思之深而无不在也。夫夷以近，则游者众；险以远，则至者少。而世之奇伟、瑰怪、非常之观，常在于险远。', hint: '游山之中悟出治学与人生之理。', level: 'hard' },
  { title: '前赤壁赋（名句）', author: '苏轼 · 宋', line: '寄蜉蝣于天地，渺沧海之一粟。哀吾生之须臾，羡长江之无穷。挟飞仙以遨游，抱明月而长终。知不可乎骤得，托遗响于悲风。', hint: '宇宙浩渺，人生须臾。', level: 'hard' },
  { title: '报任安书（节选）', author: '司马迁 · 汉', line: '人固有一死，或重于泰山，或轻于鸿毛，用之所趋异也。所以隐忍苟活，幽于粪土之中而不辞者，恨私心有所不尽，鄙陋没世而文采不表于后也。', hint: '忍辱负重，发愤著书。', level: 'hard' },
  { title: '渔家傲·天接云涛连晓雾', author: '李清照 · 宋', line: '天接云涛连晓雾，星河欲转千帆舞。仿佛梦魂归帝所。闻天语，殷勤问我归何处。我报路长嗟日暮，学诗谩有惊人句。九万里风鹏正举。风休住，蓬舟吹取三山去。', hint: '气势豪迈，不类易安风格。', level: 'hard' },
  { title: '登快阁', author: '黄庭坚 · 宋', line: '痴儿了却公家事，快阁东西倚晚晴。落木千山天远大，澄江一道月分明。朱弦已为佳人绝，青眼聊因美酒横。万里归船弄长笛，此心吾与白鸥盟。', hint: '晚景明净，归心悠远。', level: 'hard' },
  { title: '临安春雨初霁', author: '陆游 · 宋', line: '世味年来薄似纱，谁令骑马客京华。小楼一夜听春雨，深巷明朝卖杏花。矮纸斜行闲作草，晴窗细乳戏分茶。素衣莫起风尘叹，犹及清明可到家。', hint: '京华倦客，春雨中的孤寂。', level: 'hard' },
];

// Inject before the closing ]; of BANK
const insertPoint = html.lastIndexOf('    ];');
if (insertPoint === -1) throw new Error('Cannot find BANK closing');

// Check if the last entry before ]; needs a trailing comma
let before = html.slice(0, insertPoint);
// Find the last } before ];
const lastBrace = before.lastIndexOf('}');
if (lastBrace !== -1) {
  // Check what follows the }
  const afterBrace = before.slice(lastBrace + 1).trim();
  // If } is not followed by comma (i.e. it's the last entry), add comma
  if (!afterBrace.startsWith(',')) {
    before = before.slice(0, lastBrace + 1) + ',' + before.slice(lastBrace + 1);
  }
}
const after = html.slice(insertPoint);

let poemsJs = '';
for (const p of newPoems) {
  poemsJs += `
      {
        title: "${p.title}",
        author: "${p.author}",
        line: "${p.line}",
        hint: "${p.hint}",
        level: "${p.level}"
      },`;
}

html = before + poemsJs + '\n' + after;
fs.writeFileSync('index.html', html, 'utf8');
console.log('Added ' + newPoems.length + ' poems');
