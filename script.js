/* 分类定义 */
const categories = ['全部', '办公提效', '内容创意', '学习成长', '生活娱乐', '产品研发', '数据增长', '金融法律', '求职就业'];

const experts = [
  {
    name: 'PPT 设计师', icon: '🎨', cat: '办公提效', kw: ['ppt', '幻灯片', '演示', '路演'], tags: ['汇报表达', '结构梳理', '视觉呈现'],
    desc: '帮你把零散想法整理成结构清晰、拿去就能讲的 PPT；三页能讲清的事，绝不做三十页。',
    examples: [
      '围绕"AI 如何改变个人工作方式"，生成一份 PPT',
      '为「xx」产品发布会制作完整 PPT',
      '生成一份精美的PPT模板，用于自我介绍'
    ]
  },
  {
    name: 'Excel 表格助手', icon: '📊', cat: '办公提效', kw: ['excel', '表格', '记账', '公式', '数据清洗'], tags: ['表格处理', '公式计算', '效率提升'],
    desc: '模板搭建、公式编写、数据清洗一条龙，说清需求就能拿到改好的表。',
    examples: [
      '做一个家庭记账表，能自动汇总每月支出',
      '这两张表按订单号合并一下，重复的去掉',
      '这列日期格式太乱了，帮我统一成 2024/01/01'
    ]
  },
  {
    name: '文件格式转换师', icon: '🔄', cat: '办公提效', kw: ['转换', 'pdf', 'word', 'ocr', '格式'], tags: ['格式转换', 'TeX 排版', '内容提取'],
    desc: '各类格式互转，转完就能用：不乱码、不丢排版，专治"打不开"和"排版全飞了"。',
    examples: [
      '生成一份会议纪要 Word 模板',
      '生成一份可编辑的 PDF 电子书模板',
      '生成旅行计划 PDF 并转成 html'
    ]
  },
  {
    name: '数据分析专员', icon: '📉', cat: '数据增长', kw: ['数据分析', '指标', '图表', '归因'], tags: ['数据洞察', '指标理解', '图表表达'],
    desc: '结论先行、图表佐证，把一堆数字变成能做判断的答案；数据不够时也会老实说"不够"。',
    examples: [
      '梳理腾讯近期财报数据并建模',
      '为 App 设计首月数据分析报告',
      '生成销售额下降的排查分析框架'
    ]
  },
  {
    name: '小红书爆款文案专家', icon: '📕', cat: '内容创意', kw: ['小红书', '种草', '爆款', '笔记'], tags: ['选题灵感', '内容表达', '标题打磨'],
    desc: '选题、标题、正文、标签一次配齐，产出能直接发布的完整笔记——目标是让人收藏，而不是划走。',
    examples: [
      '想写"第一次租房避坑"，先给我 10 个标题',
      '把我的健身打卡经历写成一篇笔记',
      '这篇草稿太平了，帮我改得有网感再配标签'
    ]
  },
  {
    name: '去AI味', icon: '✏️', cat: '内容创意', kw: ['ai味', '机器感', '官腔', '润色'], tags: ['文风诊断', '句式重写', '表达自然'],
    desc: '专治 AI 腔：不堆排比、不喊营销空话、不用"不是…而是…"，把"像 AI 写的"改成"像人写的"。',
    examples: [
      '这段是 AI 写的，帮我改得像人写的',
      '帮我看看这篇文案哪里一股 AI 味',
      '把这份公告改得别那么官腔'
    ]
  },
  {
    name: '工作汇报大师', icon: '📋', cat: '办公提效', kw: ['周报', '月报', '复盘', '汇报', '总结'], tags: ['工作梳理', '重点提炼', '汇报表达'],
    desc: '把零散记录整理成老板爱看的周报：事实有据、重点清晰，绝不瞎编——包装可以专业，数据绝不注水。',
    examples: [
      '这是我记的流水账，帮我整理成周报',
      '项目延期了，帮我想想怎么跟领导开口',
      '把这两个会的纪要合成一份月度总结'
    ]
  },
  {
    name: '股票研究员', icon: '📈', cat: '金融法律', kw: ['股票', '行情', '研报', '估值', '财报'], tags: ['行情查询', '财务分析', '研报解读'],
    desc: '行情、财报、研报一站梳理，每个数字都有出处、每个风险提前说；只聊数据和逻辑，不喊"买买买"。',
    examples: [
      '查询宁德时代近期行情与财务指标',
      '按市值、估值和股息率筛选股票',
      '整理研报对相关标的的影响'
    ]
  },
  {
    name: '科研助手', icon: '🔬', cat: '学习成长', kw: ['文献', '科研', '研究', '综述'], tags: ['文献阅读', '观点整理', '研究框架'],
    desc: '把模糊的研究方向推进成文献清单和研究框架，顺便帮你少读一百篇弯路文献。',
    examples: [
      '围绕 RAG 评估生成入门资料包',
      '生成研究问题树和文献检索方案',
      '整理 AI agent 文献清单'
    ]
  },
  {
    name: '解忧占卜师', icon: '🔮', cat: '生活娱乐', kw: ['占卜', '运势', '塔罗', '八字', '抽牌'], tags: ['轻松解读', '情绪陪伴', '自我探索'],
    desc: '用有仪式感的互动，把心情和困惑整理成轻松的娱乐性解读；准不重要，开心和想得通才重要。',
    examples: [
      '生成未来一个月的轻松主题解读',
      '我的八字是…帮我算一下下个月运势',
      '生成今日抽牌小卡'
    ]
  },
  {
    name: '求职调研师', icon: '💼', cat: '求职就业', kw: ['公司', '面试', '岗位', 'offer', '面经'], tags: ['公司了解', '岗位判断', '面试准备'],
    desc: '把全网零散的公开信息整理成有来源的公司与岗位简报，投递和面试前先心里有底。',
    examples: [
      '我想投字节的产品经理，帮我做份公司调研',
      '手上两个 offer，帮我对比下这两家公司',
      '下周面试，帮我整理这家公司的面经和高频问题'
    ]
  },
  {
    name: 'AI电脑管家', icon: '🖥️', cat: '办公提效', kw: ['电脑', '清理', 'c盘', '变慢', '文件整理'], tags: ['电脑操作', '文件管理', '问题排查'],
    desc: '帮你处理电脑使用中的文件、软件与常见问题，给出清晰可执行的解决方案。',
    examples: [
      '帮我整理桌面文件',
      '排查电脑运行变慢的原因',
      '帮我清理c盘'
    ]
  },
  {
    name: '全栈开发工程师', icon: '🧩', cat: '产品研发', kw: ['全栈', '开发', '前后端', '应用'], tags: ['全栈开发', '功能交付', '项目实现'],
    desc: '把一句模糊需求推进成能运行、能验证、能继续迭代的产品雏形，打通页面、接口和数据。',
    examples: [
      '做一个带登录功能的任务管理应用',
      '把这个需求实现成可运行项目',
      '帮我补齐前后端功能'
    ]
  },
  {
    name: '前端开发工程师', icon: '💻', cat: '产品研发', kw: ['前端', '网页', '页面', '布局', '交互'], tags: ['页面开发', '交互实现', '界面优化'],
    desc: '把设计稿变成真正好用的页面：细节要还原，状态要完整，用户每一步都知道接下来会发生什么。',
    examples: [
      '把这个设计稿做成网页',
      '优化这个页面的交互',
      '帮我修复移动端布局问题'
    ]
  },
  {
    name: '后端架构师', icon: '🏗️', cat: '产品研发', kw: ['后端', '架构', 'api', '数据库', '接口'], tags: ['服务架构', '接口设计', '数据建模'],
    desc: '先把数据和边界想清楚，再谈代码怎么写；让系统今天能跑，也经得住明天的业务增长。',
    examples: [
      '设计这个系统的后端架构',
      '帮我规划 API 和数据库',
      '排查接口响应慢的问题'
    ]
  },
  {
    name: '产品经理', icon: '🧭', cat: '产品研发', kw: ['prd', '需求', '产品', '优先级'], tags: ['需求分析', '产品规划', 'PRD'],
    desc: '把"大家都想要"还原成真正要解决的问题，再判断做什么、先做什么，以及什么暂时不做。',
    examples: [
      '把这个想法整理成 PRD',
      '帮我拆解用户需求',
      '给这个功能排版本优先级'
    ]
  },
  {
    name: '代码审查员', icon: '🔎', cat: '产品研发', kw: ['代码审查', 'bug', '重构', '代码质量'], tags: ['代码质量', '问题发现', '重构建议'],
    desc: '不只看代码能不能跑，更要看它会不会在边界条件、多人协作和下一次改动里出问题。',
    examples: [
      '审查这段代码有什么问题',
      '帮我找出潜在 bug',
      '给这段代码提出重构方案'
    ]
  },
  {
    name: '项目管理师', icon: '📅', cat: '产品研发', kw: ['项目', '排期', '进度', '风险'], tags: ['任务拆解', '进度管理', '风险跟踪'],
    desc: '把"赶紧做完"变成谁在什么时候交付什么，提前找出最可能拖延的环节，让项目按计划往前走。',
    examples: [
      '帮我拆解这个项目计划',
      '生成项目排期',
      '整理项目风险和待办'
    ]
  },
  {
    name: '公文写作助手', icon: '📜', cat: '内容创意', kw: ['公文', '请示', '通知', '报告'], tags: ['公文写作', '格式规范', '正式表达'],
    desc: '公文不是把话说得更正式，而是让立场、事实和请求都落到该落的位置上。',
    examples: [
      '起草一份项目请示',
      '把这段内容改成正式报告',
      '帮我检查公文格式'
    ]
  },
  {
    name: '微信公众号运营助手', icon: '💬', cat: '内容创意', kw: ['公众号', '推文', '打开率', '微信'], tags: ['选题策划', '公众号写作', '内容运营'],
    desc: '公众号文章要让人愿意点开，更要让人读完之后记住一个清楚的观点；从选题到发布帮你把这件事做完整。',
    examples: [
      '策划一周公众号选题',
      '写一篇产品介绍文章',
      '分析这篇文章如何提高打开率'
    ]
  },
  {
    name: '小红书运营助手', icon: '📔', cat: '内容创意', kw: ['小红书运营', '账号', '笔记优化'], tags: ['选题策划', '笔记创作', '平台运营'],
    desc: '不是把卖点写得更响，而是把用户的真实场景写得足够具体，让他一眼认出"这说的不就是我吗"。',
    examples: [
      '策划 10 个小红书选题',
      '把这段经历写成小红书笔记',
      '优化这篇笔记的标题和标签'
    ]
  },
  {
    name: '短剧策划师', icon: '🎬', cat: '内容创意', kw: ['短剧', '剧本', '剧情', '反转'], tags: ['故事策划', '剧本结构', '短剧创作'],
    desc: '帮你把创意发展成适合短剧节奏的故事设定、人物关系和分集大纲。',
    examples: [
      '策划一个反转短剧',
      '生成短剧人物关系和分集大纲',
      '优化这集剧本的冲突'
    ]
  },
  {
    name: '海报设计师', icon: '🖼️', cat: '内容创意', kw: ['海报', '物料', '宣传图'], tags: ['视觉创意', '版式设计', '宣传物料'],
    desc: '海报只有几秒钟争取注意力，先让人看懂，再让人记住，最后才是让人行动。',
    examples: [
      '设计一张活动海报',
      '给这张海报优化信息层级',
      '生成「xx主题」的海报'
    ]
  },
  {
    name: 'UI设计师', icon: '📐', cat: '内容创意', kw: ['ui', '界面', '设计规范', '视觉'], tags: ['界面设计', '组件规范', '视觉系统'],
    desc: '好的界面不会抢着表现设计，它会让用户在不思考"怎么用"的时候，把事情顺手做完。',
    examples: [
      '设计一个后台首页',
      '建立这套产品的 UI 规范',
      '优化这个页面的视觉层级'
    ]
  },
  {
    name: 'SEO优化助手', icon: '🌐', cat: '数据增长', kw: ['seo', '关键词', '搜索排名', '收录'], tags: ['关键词研究', '内容优化', '搜索增长'],
    desc: 'SEO不是把关键词塞进文章，而是先回答用户为什么搜，再让内容成为他愿意停留和引用的答案。',
    examples: [
      '分析这个网站的 SEO 问题',
      '制定一组关键词和内容计划',
      '优化这篇文章的搜索表现'
    ]
  },
  {
    name: '中国电商运营助手', icon: '🛒', cat: '数据增长', kw: ['电商', '店铺', '转化', '详情页'], tags: ['店铺运营', '平台规则', '转化优化'],
    desc: '电商运营的核心不是把流量买进来，而是找出用户在哪一步犹豫，并把那一步变得更容易。',
    examples: [
      '分析我的店铺转化问题',
      '制定一次电商活动方案',
      '优化商品详情页'
    ]
  },
  {
    name: '亚马逊广告投放师', icon: '📣', cat: '数据增长', kw: ['亚马逊', '广告', 'acos', '投放'], tags: ['广告投放', '关键词优化', '成本控制'],
    desc: '广告预算不是越敢花越有效，关键是分清哪些词在带来订单，哪些词只是在消耗预算。',
    examples: [
      '分析这份亚马逊广告报表',
      '制定新品广告投放方案',
      '帮我降低 ACOS'
    ]
  },
  {
    name: '个人理财助手', icon: '💰', cat: '金融法律', kw: ['理财', '预算', '记账', '储蓄'], tags: ['收支管理', '预算规划', '风险提示'],
    desc: '理财先解决"钱去了哪里"和"风险扛不扛得住"，再讨论收益；不把复杂产品包装成稳赚方案。',
    examples: [
      '帮我整理这份月度账单',
      '制定家庭年度预算',
      '比较两种储蓄方案的差异'
    ]
  },
  {
    name: '民商事诉讼助手', icon: '⚖️', cat: '金融法律', kw: ['诉讼', '纠纷', '证据', '起诉'], tags: ['案情梳理', '证据整理', '诉讼流程'],
    desc: '诉讼准备不是把材料堆得更厚，而是让每一个主张都能找到对应事实和证据。',
    examples: [
      '帮我整理这起纠纷的时间线',
      '列出需要准备的证据',
      '解释民事诉讼的大致流程'
    ]
  },
  {
    name: '合同审查助手', icon: '📑', cat: '金融法律', kw: ['合同', '条款', '违约', '审查'], tags: ['条款审查', '风险识别', '合同修改'],
    desc: '逐条检查那些"签的时候没感觉、出事时才吃亏"的表述，告诉你风险落在哪一方，以及怎么谈。',
    examples: [
      '审查这份合同的风险',
      '找出对我方不利的条款',
      '帮我修改违约责任条款'
    ]
  },
  {
    name: '法律文书助手', icon: '🖋️', cat: '金融法律', kw: ['法律文书', '起诉状', '文书'], tags: ['文书起草', '事实整理', '格式规范'],
    desc: '法律文书不是把话写得更重，而是把事实、诉求和依据写到对方无法轻易绕开的结构里。',
    examples: [
      '根据这组事实整理文书框架',
      '起草一份民事起诉状提纲',
      '检查这份法律文书是否完整'
    ]
  },
  {
    name: '战略咨询师', icon: '♟️', cat: '金融法律', kw: ['战略', '咨询', '市场分析', '竞品'], tags: ['战略分析', '竞争研究', '决策支持'],
    desc: '战略不是把所有可能性都写一遍，而是在信息不完整时，判断哪条路值得下注、哪条路应该放弃。',
    examples: [
      '分析这个业务方向是否值得做',
      '做一份竞品和市场分析',
      '帮我比较两种增长策略'
    ]
  },
  {
    name: '财务分析师', icon: '🧮', cat: '金融法律', kw: ['财务', '利润表', '成本', '经营分析'], tags: ['财务分析', '经营指标', '预算决策'],
    desc: '利润表告诉你结果，财务分析要继续追问：钱是怎么赚来的，又在哪个环节被悄悄漏掉了。',
    examples: [
      '分析这份利润表',
      '找出成本增长的原因',
      '帮我做一份经营财务分析'
    ]
  },
  {
    name: '学习辅导助手', icon: '📚', cat: '学习成长', kw: ['学习', '复习', '错题', '讲解'], tags: ['知识讲解', '学习计划', '错题复盘'],
    desc: '把"我学不会"拆成具体卡点：是概念没懂、方法不对，还是练习不足，再给你安排下一步怎么学。',
    examples: [
      '帮我制定这门课的学习计划',
      '用简单方式讲解这个概念',
      '根据错题安排复习'
    ]
  },
  {
    name: '论文写作助手', icon: '🎓', cat: '学习成长', kw: ['论文', '提纲', '参考文献', '学术'], tags: ['论文结构', '学术表达', '格式检查'],
    desc: '帮你梳理论文结构、改进学术表达和检查格式。',
    examples: [
      '帮我梳理论文提纲',
      '修改这段学术表达',
      '检查参考文献格式'
    ]
  },
  {
    name: '留学顾问助手', icon: '✈️', cat: '学习成长', kw: ['留学', '申请', '院校', '文书材料'], tags: ['院校调研', '申请规划', '材料准备'],
    desc: '留学申请不是学校名单越长越好，而是把你的背景、目标和申请风险放在同一张表上做选择。',
    examples: [
      '根据我的背景筛选院校',
      '制定留学申请时间表',
      '检查这份申请材料'
    ]
  },
  {
    name: '求职辅导助手', icon: '🎯', cat: '求职就业', kw: ['求职', '面试辅导', '求职计划'], tags: ['求职定位', '面试准备', '行动计划'],
    desc: '求职不是把所有岗位都投一遍，而是找到你的经历能证明什么，再把证据讲到目标岗位最在意的地方。',
    examples: [
      '帮我制定一个月求职计划',
      '模拟这个岗位的面试',
      '分析我的求职短板'
    ]
  },
  {
    name: '招聘助手', icon: '🧑‍💼', cat: '求职就业', kw: ['招聘', '简历筛选', '面试流程'], tags: ['岗位分析', '候选人筛选', '招聘流程'],
    desc: '帮你分析岗位要求、整理候选人信息并推进招聘流程中的筛选与沟通准备。',
    examples: [
      '把这个岗位拆成筛选标准',
      '比较这几份简历',
      '设计一轮面试流程'
    ]
  },
  {
    name: '简历优化助手', icon: '📃', cat: '求职就业', kw: ['简历', '经历提炼', '岗位匹配'], tags: ['简历改写', '经历提炼', '岗位匹配'],
    desc: '帮你结合目标岗位提炼经历、调整简历结构，并指出需要补充或核实的内容。',
    examples: [
      '针对这个岗位优化简历',
      '把这段经历写得更有说服力',
      '检查简历中的问题'
    ]
  }
];

const shortcuts = [
  { icon: '🎨', text: '做一份年终汇报 PPT', expertIdx: 0 },
  { icon: '📉', text: '分析这份销售数据', expertIdx: 3 },
  { icon: '📈', text: '查宁德时代最新行情', expertIdx: 7 },
  { icon: '📕', text: '写一篇小红书爆款笔记', expertIdx: 4 },
  { icon: '📋', text: '整理本周工作写周报', expertIdx: 6 }
];

const defaultQuickExperts = [0, 3, 7];
let recentUsedExperts = JSON.parse(localStorage.getItem('recentUsedExperts') || '[]');

function saveRecentUsed() {
  localStorage.setItem('recentUsedExperts', JSON.stringify(recentUsedExperts));
}

function recordUsage(idx) {
  recentUsedExperts = recentUsedExperts.filter(i => i !== idx);
  recentUsedExperts.unshift(idx);
  if (recentUsedExperts.length > 10) recentUsedExperts.length = 10;
  saveRecentUsed();
}

function getQuickExperts() {
  const result = [];
  // 最近置顶的 1 个
  if (pinnedExperts.length > 0) {
    result.push(pinnedExperts[0]);
  }
  // 最近使用的 2 个（去重）
  for (const idx of recentUsedExperts) {
    if (!result.includes(idx)) result.push(idx);
    if (result.length >= 3) break;
  }
  // 不足 3 个时用默认补齐
  for (const idx of defaultQuickExperts) {
    if (!result.includes(idx)) result.push(idx);
    if (result.length >= 3) break;
  }
  return result.slice(0, 3);
}

const $ = id => document.getElementById(id);
const toast = $('toast');
const modalMask = $('modalMask');
const modal = $('modal');
const content = $('content');

function showToast(text) {
  toast.textContent = text;
  toast.classList.add('show');
  clearTimeout(showToast.t);
  showToast.t = setTimeout(() => toast.classList.remove('show'), 2400);
}

/* ========== 页面路由 ========== */
let currentPage = 'home';
let activeExpert = null;   // 当前输入区选中的专家索引

function showHome() {
  currentPage = 'home';
  $('navExpert').classList.remove('active');
  content.innerHTML = `
    <div class="home-page">
      <h1 class="hero-title">工作与生活，万事可 Work</h1>
      <div class="input-area">
        <div class="input-box" id="inputBox">
          <button class="input-plus" id="inputPlus">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
          <span id="expertBadgeSlot"></span>
          <input type="text" placeholder="只说需求，KerWork会在你的电脑里自动查找并完成" id="mainInput"/>
          <button class="input-send" id="inputSend">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
        <div class="input-meta" id="inputMeta">
          <div class="workspace-selector">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            <span>选择工作区</span>
          </div>
        </div>
      </div>
      <div class="shortcuts" id="shortcuts"></div>
    </div>`;
  renderShortcuts();
  bindHomeInput();
  // 恢复专家 badge 状态
  if (activeExpert !== null) {
    renderExpertBadge(activeExpert);
  }
  // 回填待发送的提示词
  if (pendingPrompt) {
    const input = $('mainInput');
    if (input) input.value = pendingPrompt;
    pendingPrompt = null;
  } else if (activeExpert !== null) {
    const input = $('mainInput');
    if (input) input.focus();
  }
}

function renderExpertBadge(idx) {
  const e = experts[idx];
  const slot = $('expertBadgeSlot');
  if (!slot) return;

  slot.innerHTML = `<div class="input-expert-badge">
    <div class="badge-icon">${e.icon}</div><span>${e.name}</span><span class="badge-close">×</span>
  </div>`;

  slot.querySelector('.badge-close').onclick = (ev) => {
    ev.stopPropagation();
    clearActiveExpert();
  };
}

function clearActiveExpert() {
  activeExpert = null;
  const slot = $('expertBadgeSlot');
  if (slot) slot.innerHTML = '';
}

function bindHomeInput() {
  const send = $('inputSend');
  const input = $('mainInput');
  if (!send || !input) return;
  send.onclick = () => {
    const v = input.value.trim();
    if (!v) return;
    handleSend(v);
  };
  input.addEventListener('keydown', ev => {
    if (ev.key === 'Enter') send.click();
    if (ev.key === 'Backspace' && input.value === '' && activeExpert !== null) {
      clearActiveExpert();
    }
  });
  bindPlusMenu();
}

/* ========== + 按钮菜单 ========== */
let plusMenuOpen = false;

function bindPlusMenu() {
  const btn = $('inputPlus');
  if (!btn) return;
  btn.onclick = (ev) => {
    ev.stopPropagation();
    if (plusMenuOpen) { closePlusMenu(); return; }
    openPlusMenu();
  };
}

function openPlusMenu() {
  closePlusMenu();
  plusMenuOpen = true;
  const inputBox = $('inputBox');
  if (!inputBox) return;
  inputBox.style.position = 'relative';

  const menu = document.createElement('div');
  menu.className = 'plus-menu';
  menu.id = 'plusMenu';
  menu.innerHTML = `
    <div class="plus-menu-item" data-action="file">
      <span class="pm-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg></span>添加文件<span class="pm-arrow">›</span>
    </div>
    <div class="plus-menu-item has-sub" data-action="expert">
      <span class="pm-icon">✦</span>专家<span class="pm-arrow">›</span>
    </div>
  `;
  inputBox.appendChild(menu);

  // 添加文件
  menu.querySelector('[data-action="file"]').onclick = (ev) => {
    ev.stopPropagation();
    closePlusMenu();
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.multiple = true;
    fileInput.onchange = () => {
      if (fileInput.files.length) {};
    };
    fileInput.click();
  };

  // 专家子菜单
  const expertItem = menu.querySelector('[data-action="expert"]');
  expertItem.addEventListener('mouseenter', () => showExpertSubmenu(menu));
}

function showExpertSubmenu(parentMenu) {
  let sub = parentMenu.querySelector('.expert-submenu');
  if (sub) return;
  sub = document.createElement('div');
  sub.className = 'expert-submenu';
  sub.innerHTML = getQuickExperts().map(idx => {
    const e = experts[idx];
    const isActive = activeExpert === idx;
    return `<div class="expert-sub-item${isActive ? ' active' : ''}" data-i="${idx}">
      <span class="es-icon">${e.icon}</span>${e.name}
    </div>`;
  }).join('') + `<div class="expert-sub-item more" data-action="more"><span class="es-icon">↗</span>查看更多专家</div>`;
  parentMenu.appendChild(sub);

  sub.querySelectorAll('.expert-sub-item').forEach(el => {
    el.onclick = (ev) => {
      ev.stopPropagation();
      closePlusMenu();
      if (el.dataset.action === 'more') {
        showExpertList();
      } else {
        startExpert(+el.dataset.i, null);
      }
    };
  });
}

function closePlusMenu() {
  plusMenuOpen = false;
  const menu = $('plusMenu');
  if (menu) menu.remove();
}

document.addEventListener('click', (ev) => {
  if (plusMenuOpen && !ev.target.closest('.plus-menu') && !ev.target.closest('#inputPlus')) closePlusMenu();
});

function handleSend(text) {
  if (!text) return;
  $('mainInput').value = '';
  showTaskView(text);
}

/* ========== 任务视图 + 专家推荐/切换 ========== */
const expertKeywords = [
  { keywords: ['ppt', 'PPT', '演示', '汇报', '幻灯片'], idx: 0 },
  { keywords: ['excel', 'Excel', '表格', '记账', '公式', '数据清洗'], idx: 1 },
  { keywords: ['转换', 'PDF', 'Word', 'OCR', '格式'], idx: 2 },
  { keywords: ['分析', '数据', '图表', '指标', '财报'], idx: 3 },
  { keywords: ['小红书', '笔记', '标题', '文案', '选题'], idx: 4 },
  { keywords: ['AI味', 'AI 味', '像AI写的', '机器感', '排比', '官腔'], idx: 5 },
  { keywords: ['周报', '月报', '总结', '汇报', '工作'], idx: 6 },
  { keywords: ['股票', '行情', '研报', '估值', '财务'], idx: 7 },
  { keywords: ['文献', '论文', '科研', 'RAG', '研究'], idx: 8 },
  { keywords: ['算命', '占卜', '运势', '塔罗', '八字', '抽牌'], idx: 9 },
  { keywords: ['求职', '面试', '公司调研', 'offer'], idx: 10 },
];

function matchExpert(text) {
  for (const rule of expertKeywords) {
    if (rule.keywords.some(k => text.includes(k))) return rule.idx;
  }
  return null;
}

let recommendTimer = null;

function showTaskView(text) {
  const matchedIdx = matchExpert(text);
  const currentExpert = activeExpert;

  content.innerHTML = `
    <div class="task-view">
      <div class="task-header">新任务</div>
      <div class="task-messages" id="taskMessages">
        <div class="msg-user">${text}</div>
        <div class="msg-system"><span class="dot-loading"><i></i><i></i><i></i></span><span>kerker 正在思考...</span></div>
      </div>
    </div>`;

  if (currentExpert !== null && currentExpert === matchedIdx) {
    // 已选专家且匹配：直接用该专家处理
    setTimeout(() => {
      const msgs = $('taskMessages');
      const loading = msgs.querySelector('.msg-system');
      if (loading) loading.innerHTML = `<span class="dot-loading"><i></i><i></i><i></i></span><span>${experts[currentExpert].name} 正在处理你的任务...</span>`;
    }, 500);
  } else if (currentExpert !== null && matchedIdx !== null && currentExpert !== matchedIdx) {
    // 已选专家但不匹配：建议切换
    setTimeout(() => showSwitchCard(currentExpert, matchedIdx), 800);
  } else if (currentExpert !== null && matchedIdx === null) {
    // 已选专家，无更合适的：直接处理
    setTimeout(() => {
      const msgs = $('taskMessages');
      const loading = msgs.querySelector('.msg-system');
      if (loading) loading.innerHTML = `<span class="dot-loading"><i></i><i></i><i></i></span><span>${experts[currentExpert].name} 正在处理你的任务...</span>`;
    }, 500);
  } else if (currentExpert === null && matchedIdx !== null) {
    // 未选专家，推荐匹配的
    setTimeout(() => showRecommendCard(matchedIdx), 800);
  }
  // 未选专家且无匹配：保持 loading 状态（常规模式处理）
}

function showRecommendCard(idx) {
  const e = experts[idx];
  const msgs = $('taskMessages');
  if (!msgs) return;

  // 移除 loading
  const loading = msgs.querySelector('.msg-system');
  if (loading) loading.remove();

  const card = document.createElement('div');
  card.className = 'recommend-card';
  card.innerHTML = `
    <div class="recommend-card-header">
      <div class="recommend-card-icon">${e.icon}</div>
      <div class="recommend-card-info">
        <h4>${e.name}</h4>
        <p>${e.desc}</p>
      </div>
    </div>
    <div class="recommend-card-actions">
      <button class="btn-skip" id="recSkip">跳过</button>
      <button class="btn-use" id="recUse">启用专家</button>
      <span class="recommend-card-timer" id="recTimer">30s</span>
    </div>
  `;
  msgs.appendChild(card);

  // 倒计时 30s
  let remaining = 30;
  const timerEl = card.querySelector('#recTimer');
  recommendTimer = setInterval(() => {
    remaining--;
    if (timerEl) timerEl.textContent = remaining + 's';
    if (remaining <= 0) {
      clearInterval(recommendTimer);
      dismissRecommend(card);
    }
  }, 1000);

  card.querySelector('#recSkip').onclick = () => {
    clearInterval(recommendTimer);
    dismissRecommend(card);
  };

  card.querySelector('#recUse').onclick = () => {
    clearInterval(recommendTimer);
    activeExpert = idx;
    recordUsage(idx);
    card.remove();
    const msgs = $('taskMessages');
    if (msgs) {
      const sys = document.createElement('div');
      sys.className = 'msg-system';
      sys.innerHTML = `<span class="dot-loading"><i></i><i></i><i></i></span><span>${e.name} 正在处理你的任务...</span>`;
      msgs.appendChild(sys);
    }
  };
}

function dismissRecommend(card) {
  card.remove();
  const msgs = $('taskMessages');
  if (msgs) {
    const sys = document.createElement('div');
    sys.className = 'msg-system';
    sys.innerHTML = '<span class="dot-loading"><i></i><i></i><i></i></span><span>kerker 正在处理你的任务...</span>';
    msgs.appendChild(sys);
  }
}

/* 建议切换专家卡片 */
function showSwitchCard(currentIdx, suggestedIdx) {
  const current = experts[currentIdx];
  const suggested = experts[suggestedIdx];
  const msgs = $('taskMessages');
  if (!msgs) return;

  const loading = msgs.querySelector('.msg-system');
  if (loading) loading.remove();

  const card = document.createElement('div');
  card.className = 'recommend-card';
  card.innerHTML = `
    <div style="font-size:12.5px;color:var(--muted);margin-bottom:10px">当前：${current.name}　→　建议切换为</div>
    <div class="recommend-card-header">
      <div class="recommend-card-icon">${suggested.icon}</div>
      <div class="recommend-card-info">
        <h4>${suggested.name}</h4>
        <p>${suggested.desc}</p>
      </div>
    </div>
    <div class="recommend-card-actions">
      <button class="btn-skip" id="recSkip">继续使用${current.name}</button>
      <button class="btn-use" id="recUse">切换</button>
      <span class="recommend-card-timer" id="recTimer">30s</span>
    </div>
  `;
  msgs.appendChild(card);

  let remaining = 30;
  const timerEl = card.querySelector('#recTimer');
  recommendTimer = setInterval(() => {
    remaining--;
    if (timerEl) timerEl.textContent = remaining + 's';
    if (remaining <= 0) {
      clearInterval(recommendTimer);
      // 超时：继续使用当前专家
      card.remove();
      const sys2 = document.createElement('div');
      sys2.className = 'msg-system';
      sys2.innerHTML = `<span class="dot-loading"><i></i><i></i><i></i></span><span>${current.name} 正在处理你的任务...</span>`;
      msgs.appendChild(sys2);
    }
  }, 1000);

  card.querySelector('#recSkip').onclick = () => {
    clearInterval(recommendTimer);
    card.remove();
    const sys2 = document.createElement('div');
    sys2.className = 'msg-system';
    sys2.innerHTML = `<span class="dot-loading"><i></i><i></i><i></i></span><span>${current.name} 正在处理你的任务...</span>`;
    msgs.appendChild(sys2);
  };

  card.querySelector('#recUse').onclick = () => {
    clearInterval(recommendTimer);
    activeExpert = suggestedIdx;
    recordUsage(suggestedIdx);
    card.remove();
    const sys2 = document.createElement('div');
    sys2.className = 'msg-system';
    sys2.innerHTML = `<span class="dot-loading"><i></i><i></i><i></i></span><span>${suggested.name} 正在处理你的任务...</span>`;
    msgs.appendChild(sys2);
  };
}

function renderShortcuts() {
  const container = $('shortcuts');
  if (!container) return;
  container.innerHTML = shortcuts.map((s, i) => `
    <div class="shortcut-chip" data-idx="${i}"><span class="chip-icon">${s.icon}</span>${s.text}</div>
  `).join('');
  container.querySelectorAll('.shortcut-chip').forEach(el => {
    el.onclick = () => {
      const s = shortcuts[+el.dataset.idx];
      activeExpert = s.expertIdx;
      recordUsage(s.expertIdx);
      renderExpertBadge(s.expertIdx);
      const input = $('mainInput');
      if (input) { input.value = s.text; input.focus(); }
    };
  });
}

/* ========== 专家列表页 ========== */
let pinnedExperts = JSON.parse(localStorage.getItem('pinnedExperts') || '[]');

function savePinned() {
  localStorage.setItem('pinnedExperts', JSON.stringify(pinnedExperts));
}

function togglePin(idx) {
  const pos = pinnedExperts.indexOf(idx);
  if (pos >= 0) {
    pinnedExperts.splice(pos, 1);
  } else {
    pinnedExperts.unshift(idx);
  }
  savePinned();
  renderExpertGrid();
}

/* ========== 分类与搜索状态 ========== */
let activeCategory = '全部';
let searchQuery = '';

function setSearchQuery(q) {
  searchQuery = q;
  renderExpertGrid();
}

function setActiveCategory(cat) {
  activeCategory = cat;
  renderExpertGrid();
}

/* 搜索权重：名称 > 标签/搜索关键词 > 分类 > 简介；多子词按空格拆分，全部命中才召回 */
const pinyinCache = new Map();
function pinyinOf(text) {
  if (pinyinCache.has(text)) return pinyinCache.get(text);
  let full = '', initials = '';
  const convert = window.pinyinPro && window.pinyinPro.pinyin;
  if (convert) {
    try {
      full = convert(text, { toneType: 'none', type: 'array' }).join('').toLowerCase().replace(/[^a-z0-9]/g, '');
      initials = convert(text, { pattern: 'first', toneType: 'none', type: 'array' }).join('').toLowerCase().replace(/[^a-z0-9]/g, '');
    } catch (err) { /* 拼音库异常时退化为直接匹配 */ }
  }
  const result = { full, initials };
  pinyinCache.set(text, result);
  return result;
}

function fieldHit(field, term) {
  if (field.toLowerCase().includes(term)) return true;
  const py = pinyinOf(field);
  return !!py.full && py.full.includes(term);
}

function termScore(e, term) {
  if (fieldHit(e.name, term)) return 3;
  if (term.length >= 2 && pinyinOf(e.name).initials.includes(term)) return 3;
  if (e.tags.some(t => fieldHit(t, term)) || (e.kw || []).some(k => fieldHit(k, term))) return 2;
  if (fieldHit(e.cat, term) || fieldHit(e.desc, term)) return 1;
  return -1;
}

function searchScore(e, q) {
  const terms = q.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return 0;
  let total = 0;
  for (const term of terms) {
    const score = termScore(e, term);
    if (score < 0) return -1;
    total += score;
  }
  return total;
}

/* 按当前分类与搜索词过滤，分类内置顶排序 */
function getFilteredExperts() {
  let list = experts.map((e, i) => ({ e, i }));
  if (activeCategory !== '全部') {
    list = list.filter(({ e }) => e.cat === activeCategory);
  }
  if (searchQuery.trim()) {
    list = list.filter(({ e }) => searchScore(e, searchQuery.trim()) > 0);
  }
  const q = searchQuery.trim().toLowerCase();
  list.sort((a, b) => {
    if (q) {
      const diff = searchScore(b.e, q) - searchScore(a.e, q);
      if (diff !== 0) return diff;
    }
    const pa = pinnedExperts.includes(a.i) ? 0 : 1;
    const pb = pinnedExperts.includes(b.i) ? 0 : 1;
    if (pa !== pb) return pa - pb;
    return a.i - b.i;
  });
  return list;
}

function renderCategoryTabs() {
  return categories.map(cat => `
    <div class="cat-tab${cat === activeCategory ? ' active' : ''}" data-cat="${cat}">
      ${cat}
    </div>`).join('');
}

function renderExpertGrid() {
  const grid = $('expertGrid');
  if (!grid) return;
  const filtered = getFilteredExperts();

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="expert-empty">
        <div class="expert-empty-icon">🔍</div>
        <div class="expert-empty-title">没有找到相关专家</div>
        <div class="expert-empty-desc">换个关键词试试，或者用通用模式描述你的需求，kerker 会帮你完成。</div>
        <button class="expert-empty-btn" id="emptyGeneralBtn">用通用模式描述需求</button>
      </div>`;
    const btn = $('emptyGeneralBtn');
    if (btn) btn.onclick = () => newTask();
    return;
  }

  grid.innerHTML = filtered.map(({ e, i }) => {
    const isPinned = pinnedExperts.includes(i);
    return `
    <div class="expert-card${isPinned ? ' pinned' : ''}" data-i="${i}">
      <div class="expert-card-top">
        <div class="expert-card-icon">${e.icon}</div>
        <div class="expert-card-info">
          <h3>${e.name}</h3>
          <div class="card-sub">${e.tags.slice(0, 2).join(' · ')}</div>
        </div>
      </div>
      <div class="expert-card-desc">${e.desc}</div>
      <div class="expert-card-bottom">
        <div class="expert-card-tags">${e.tags.map(t => `<span class="expert-card-tag">${t}</span>`).join('')}</div>
      </div>
      <div class="expert-card-action">开始使用</div>
      <button class="pin-btn${isPinned ? ' pinned' : ''}" data-pin="${i}" title="${isPinned ? '取消置顶' : '置顶'}">📌</button>
    </div>`;
  }).join('');

  grid.querySelectorAll('.expert-card').forEach(el => {
    el.onclick = (ev) => {
      if (ev.target.closest('.pin-btn')) return;
      openExpertModal(+el.dataset.i);
    };
  });

  grid.querySelectorAll('.pin-btn').forEach(btn => {
    btn.onclick = (ev) => {
      ev.stopPropagation();
      togglePin(+btn.dataset.pin);
    };
  });
}

function showExpertList() {
  currentPage = 'expert';
  $('navExpert').classList.add('active');

  content.innerHTML = `
    <div class="expert-page">
      <div class="expert-page-header">
        <div class="expert-page-heading">
          <div class="expert-page-title">专家</div>
          <div class="expert-page-sub">把专业的事，交给对的人。</div>
        </div>
        <div class="expert-search-box">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" id="expertSearchInput" placeholder="搜索专家、关键词或标签，支持空格分词 / 拼音 / 英文" value="${searchQuery.replace(/"/g, '&quot;')}"/>
          <button class="expert-search-clear${searchQuery ? ' show' : ''}" id="expertSearchClear">×</button>
        </div>
      </div>
      <div class="cat-tabs" id="catTabs">${renderCategoryTabs()}</div>
      <div class="expert-grid" id="expertGrid"></div>
    </div>`;

  const searchInput = $('expertSearchInput');
  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value;
    $('expertSearchClear').classList.toggle('show', !!searchInput.value);
    renderExpertGrid();
  });
  $('expertSearchClear').onclick = () => {
    searchInput.value = '';
    setSearchQuery('');
  };
  searchInput.addEventListener('keydown', ev => { if (ev.key === 'Escape') { searchInput.value = ''; setSearchQuery(''); searchInput.blur(); } });

  $('catTabs').querySelectorAll('.cat-tab').forEach(tab => {
    tab.onclick = () => {
      setActiveCategory(tab.dataset.cat);
      $('catTabs').querySelectorAll('.cat-tab').forEach(t => t.classList.toggle('active', t === tab));
    };
  });

  renderExpertGrid();
}

/* ========== 专家详情弹窗 ========== */
function openExpertModal(idx) {
  const e = experts[idx];
  modal.innerHTML = `
    <div class="modal-header">
      <div class="modal-icon">${e.icon}</div>
      <div>
        <h2>${e.name}</h2>
        <div class="modal-meta">
          <span class="modal-cat">${e.cat}</span>
          <div class="modal-tags">${e.tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}</div>
        </div>
      </div>
    </div>
    <div class="modal-desc">${e.desc}</div>
    <div class="modal-examples-title">试试这样问</div>
    ${e.examples.map(ex => `
      <div class="modal-example" data-prompt="${ex.replace(/"/g, '&quot;')}">
        <span>"${ex}"</span>
        <span class="arrow">↗</span>
      </div>
    `).join('')}
    <button class="modal-cta" id="modalCta">开始使用</button>
  `;
  modalMask.classList.add('open');

  modal.querySelectorAll('.modal-example').forEach(el => {
    el.onclick = () => {
      closeModal();
      startExpert(idx, el.dataset.prompt);
    };
  });
  $('modalCta').onclick = () => {
    closeModal();
    startExpert(idx, null);
  };
}

function closeModal() { modalMask.classList.remove('open'); }
modalMask.addEventListener('click', ev => { if (ev.target === modalMask) closeModal(); });
document.addEventListener('keydown', ev => { if (ev.key === 'Escape') closeModal(); });

/* ========== 开始使用专家 ========== */
let pendingPrompt = null;

function startExpert(idx, prompt) {
  activeExpert = idx;
  recordUsage(idx);
  pendingPrompt = prompt || null;
  showHome();
}

/* 新建任务 */
function newTask() {
  activeExpert = null;
  showHome();
  const input = $('mainInput');
  if (input) { input.value = ''; input.focus(); }
}

/* ========== 初始化 ========== */
$('collapseBtn').onclick = () => $('app').classList.toggle('collapsed');
$('navExpert').onclick = () => showExpertList();
$('newTaskBtn').onclick = () => newTask();

showHome();
