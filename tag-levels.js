const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const levels = {
  '关雎':'medium','蒹葭':'medium','氓（节选）':'medium',
  '观沧海':'medium','木兰诗（节选）':'medium',
  '饮酒·其五（节选）':'medium','归园田居·其一（节选）':'medium',
  '登幽州台歌':'medium','次北固山下':'medium','使至塞上':'medium',
  '闻王昌龄左迁龙标遥有此寄':'medium','望岳（节选）':'medium',
  '春望':'medium','登高（节选）':'hard','月夜忆舍弟':'medium',
  '白雪歌送武判官归京（节选）':'medium','送元二使安西':'medium',
  '望洞庭湖赠张丞相（节选）':'medium','酬乐天扬州初逢席上见赠（节选）':'medium',
  '早春呈水部张十八员外':'medium','琵琶行（节选）':'hard',
  '蜀道难（节选）':'hard','将进酒（节选）':'hard',
  '行路难·其一（节选）':'medium','逢入京使':'medium',
  '题破山寺后禅院':'medium','望月怀远':'medium','夜雨寄北':'medium',
  '锦瑟（节选）':'hard','无题·相见时难别亦难（节选）':'medium',
  '黄鹤楼（节选）':'hard','登岳阳楼（节选）':'hard',
  '春江花月夜（节选）':'hard','雁门太守行（节选）':'hard',
  '赤壁':'medium','过零丁洋（节选）':'medium',
  '渔家傲·秋思（节选）':'medium','游山西村':'medium',
  '观书有感':'medium','登飞来峰':'medium',
  '水调歌头·明月几时有（节选）':'hard','念奴娇·赤壁怀古（节选）':'hard',
  '定风波·莫听穿林打叶声（节选）':'medium','江城子·密州出猎（节选）':'medium',
  '破阵子·为陈同甫赋壮词以寄之（节选）':'medium',
  '永遇乐·京口北固亭怀古（节选）':'hard','青玉案·元夕（节选）':'hard',
  '声声慢·寻寻觅觅（节选）':'hard','如梦令·昨夜雨疏风骤':'medium',
  '满江红·怒发冲冠（节选）':'hard','天净沙·秋思':'medium',
  '己亥杂诗（其五）':'medium','石灰吟':'medium','秋词（其一）':'medium',
  '岳阳楼记（节选）':'medium','醉翁亭记（节选）':'medium',
  '桃花源记（节选）':'medium','出师表（节选）':'hard',
  '兰亭集序（节选）':'hard','滕王阁序（节选）':'hard',
  '滕王阁序（名句）':'hard','阿房宫赋（节选）':'hard',
  '赤壁赋（节选）':'hard','师说（节选）':'hard','劝学（节选）':'hard',
  '陈情表（节选）':'hard','送东阳马生序（节选）':'hard',
  '逍遥游（节选）':'hard','离骚（名句一）':'hard','离骚（名句二）':'hard',
  '春夜喜雨（节选）':'medium','钱塘湖春行（节选）':'medium',
  '滁州西涧':'easy','蜀相（节选）':'medium',
  '梦游天姥吟留别（节选）':'hard','登金陵凤凰台（节选）':'hard',
  '归去来兮辞（节选）':'hard','小石潭记（节选）':'medium',
  '记承天寺夜游（节选）':'medium','马说（节选）':'medium',
  '鱼我所欲也（节选）':'hard','生于忧患，死于安乐（节选）':'hard',
  '曹刿论战（节选）':'hard','邹忌讽齐王纳谏（节选）':'hard',
  '虞美人·春花秋月何时了（节选）':'hard','相见欢·无言独上西楼':'hard',
  '雨霖铃·寒蝉凄切（节选）':'hard','鹊桥仙·纤云弄巧（节选）':'hard',
  '浣溪沙·一曲新词酒一杯':'medium','一剪梅·红藕香残玉簟秋（节选）':'hard',
  '山坡羊·潼关怀古':'medium','咏柳':'easy','回乡偶书':'easy',
  '咏鹅':'easy','春晓':'easy','登鹳雀楼':'easy','静夜思':'easy',
  '望庐山瀑布':'easy','赠汪伦':'easy','黄鹤楼送孟浩然之广陵':'easy',
  '早发白帝城':'easy','望天门山':'easy','独坐敬亭山':'easy',
  '江畔独步寻花':'easy','绝句':'easy','江南逢李龟年':'easy',
  '清明':'easy','秋夕':'easy','山行':'easy','泊秦淮':'easy',
  '江南春':'easy','悯农其一':'easy','悯农其二':'easy','枫桥夜泊':'easy',
  '游子吟':'easy','江雪':'easy','登乐游原':'easy','无题':'medium',
  '锦瑟（名句）':'hard','出塞':'easy','从军行其四':'easy',
  '凉州词':'easy','九月九日忆山东兄弟':'easy','别董大':'easy',
  '乌衣巷':'easy','浪淘沙其九':'easy','赋得古原草送别':'medium',
  '池上':'easy','元日':'easy','小池':'easy','晓出净慈寺送林子方':'easy',
  '饮湖上初晴后雨':'easy','题西林壁':'easy','惠崇春江晚景':'easy',
  '江城子·记梦':'hard','卜算子·咏梅':'medium',
  '秋夜将晓出篱门迎凉有感':'medium','示儿':'easy',
  '蝶恋花·贮倚危楼':'hard','如梦令·常记溪亭日暮':'medium',
  '夏日绝句':'easy','卜算子·我住长江头':'medium',
  '望海潮·东南形胜':'hard','浪淘沙令·帘外雨潺潺':'hard',
  '破阵子·春景':'hard','生查子·元夕':'hard',
  '卜算子·咏梅（和）':'hard','沁园春·雪（节选）':'hard',
  '七律·长征（节选）':'hard','村居':'easy','宿新市徐公店':'easy',
};

// Line-by-line state machine
const lines = html.split('\n');
const out = [];
let isBank = false;
let inEntry = false;
let entryLines = [];
let currentTitle = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  if (!isBank) {
    out.push(line);
    if (/const BANK\s*=\s*\[/.test(line)) isBank = true;
    continue;
  }

  // Inside BANK array
  if (!inEntry && /\{/.test(line)) {
    inEntry = true;
    entryLines = [line];
    currentTitle = null;
    // Check for title on same line as opening brace
    const tm = line.match(/title:\s*"([^"]+)"/);
    if (tm) currentTitle = tm[1];
    continue;
  }

  if (inEntry) {
    // Check for title
    if (!currentTitle) {
      const tm = line.match(/title:\s*"([^"]+)"/);
      if (tm) currentTitle = tm[1];
    }
    // Check for closing
    if (/\}/.test(line)) {
      // Inject level before this line if we have a level mapping
      if (currentTitle && levels[currentTitle]) {
        // Ensure preceding line has trailing comma
        const lastIdx = entryLines.length - 1;
        const lastLine = entryLines[lastIdx];
        if (lastLine && !lastLine.trim().endsWith(',')) {
          entryLines[lastIdx] = lastLine + ',';
        }
        const indent = line.match(/^\s*/)[0];
        entryLines.push(indent + 'level: "' + levels[currentTitle] + '",');
      }
      entryLines.push(line);
      out.push(...entryLines);
      inEntry = false;
      entryLines = [];
      currentTitle = null;
    } else {
      entryLines.push(line);
    }
    continue;
  }

  // Between entries (blank lines, commas, array end)
  if (/\]/.test(line)) { isBank = false; }
  out.push(line);
}

fs.writeFileSync('index.html', out.join('\n'), 'utf8');
console.log('DONE');
