/* 分类定义（对应需求文档 4.1：专家与分类严格一对一） */
const categories = ["全部","办公提效","产品研发","一人公司","内容创意","数据研究","金融法律","学习成长","求职招聘","生活娱乐","沟通表达","销售商务","健康管理"];

const experts = [
  {
    name: 'PPT 设计师', icon: '🎨', cat: '办公提效', kw: ["ppt","幻灯片","演示","路演"], tags: ["汇报表达","结构梳理","视觉呈现"],
    desc: '帮你把零散想法整理成结构清晰、拿去就能讲的 PPT；三页能讲清的事，绝不做三十页。',
    examples: [
      '围绕"AI 如何改变个人工作方式"，生成一份 PPT',
      '为「xx」产品发布会制作完整 PPT',
      '生成一份精美的PPT模板，用于自我介绍'
    ]
  },
  {
    name: 'Excel 表格助手', icon: '📊', cat: '办公提效', kw: ["excel","表格","记账","公式","数据清洗"], tags: ["表格处理","公式计算","效率提升"],
    desc: '模板搭建、公式编写、数据清洗一条龙，说清需求就能拿到改好的表。',
    examples: [
      '做一个家庭记账表，能自动汇总每月支出',
      '这两张表按订单号合并一下，重复的去掉',
      '这列日期格式太乱了，帮我统一成 2024/01/01'
    ]
  },
  {
    name: '文件格式转换师', icon: '🔄', cat: '办公提效', kw: ["转换","pdf","word","ocr","格式"], tags: ["格式转换","TeX 排版","内容提取"],
    desc: '各类格式互转，转完就能用：不乱码、不丢排版，专治"打不开"和"排版全飞了"。',
    examples: [
      '生成一份会议纪要 Word 模板',
      '生成一份可编辑的 PDF 电子书模板',
      '生成旅行计划 PDF 并转成 html'
    ]
  },
  {
    name: '数据分析专员', icon: '📉', cat: '数据研究', kw: ["数据分析","指标","图表","归因"], tags: ["数据洞察","指标理解","图表表达"],
    desc: '结论先行、图表佐证，把一堆数字变成能做判断的答案；数据不够时也会老实说"不够"。',
    examples: [
      '梳理腾讯近期财报数据并建模',
      '为 App 设计首月数据分析报告',
      '生成销售额下降的排查分析框架'
    ]
  },
  {
    name: '小红书爆款文案专家', icon: '📕', cat: '内容创意', kw: ["小红书","种草","爆款","笔记"], tags: ["选题灵感","内容表达","标题打磨"],
    desc: '选题、标题、正文、标签一次配齐，产出能直接发布的完整笔记——目标是让人收藏，而不是划走。',
    examples: [
      '想写"第一次租房避坑"，先给我 10 个标题',
      '把我的健身打卡经历写成一篇笔记',
      '这篇草稿太平了，帮我改得有网感再配标签'
    ]
  },
  {
    name: '去AI味', icon: '✏️', cat: '内容创意', kw: ["ai味","机器感","官腔","润色"], tags: ["文风诊断","句式重写","表达自然"],
    desc: '专治 AI 腔：不堆排比、不喊营销空话、不用"不是…而是…"，把"像 AI 写的"改成"像人写的"。',
    examples: [
      '这段是 AI 写的，帮我改得像人写的',
      '帮我看看这篇文案哪里一股 AI 味',
      '把这份公告改得别那么官腔'
    ]
  },
  {
    name: '工作汇报大师', icon: '📋', cat: '办公提效', kw: ["周报","月报","复盘","汇报","总结"], tags: ["工作梳理","重点提炼","汇报表达"],
    desc: '把零散记录整理成老板爱看的周报：事实有据、重点清晰，绝不瞎编——包装可以专业，数据绝不注水。',
    examples: [
      '这是我记的流水账，帮我整理成周报',
      '项目延期了，帮我想想怎么跟领导开口',
      '把这两个会的纪要合成一份月度总结'
    ]
  },
  {
    name: '股票研究员', icon: '📈', cat: '金融法律', kw: ["股票","行情","研报","估值","财报"], tags: ["行情查询","财务分析","研报解读"],
    desc: '行情、财报、研报一站梳理，每个数字都有出处、每个风险提前说；只聊数据和逻辑，不喊"买买买"。',
    examples: [
      '查询宁德时代近期行情与财务指标',
      '按市值、估值和股息率筛选股票',
      '整理研报对相关标的的影响'
    ]
  },
  {
    name: '科研助手', icon: '🔬', cat: '学习成长', kw: ["文献","科研","研究","综述"], tags: ["文献阅读","观点整理","研究框架"],
    desc: '把模糊的研究方向推进成文献清单和研究框架，顺便帮你少读一百篇弯路文献。',
    examples: [
      '围绕 RAG 评估生成入门资料包',
      '生成研究问题树和文献检索方案',
      '整理 AI agent 文献清单'
    ]
  },
  {
    name: '解忧占卜师', icon: '🔮', cat: '生活娱乐', kw: ["占卜","运势","塔罗","八字","抽牌"], tags: ["轻松解读","情绪陪伴","自我探索"],
    desc: '用有仪式感的互动，把心情和困惑整理成轻松的娱乐性解读；准不重要，开心和想得通才重要。',
    examples: [
      '生成未来一个月的轻松主题解读',
      '我的八字是…帮我算一下下个月运势',
      '生成今日抽牌小卡'
    ]
  },
  {
    name: '求职调研师', icon: '💼', cat: '求职招聘', kw: ["公司","面试","岗位","offer","面经"], tags: ["公司了解","岗位判断","面试准备"],
    desc: '把全网零散的公开信息整理成有来源的公司与岗位简报，投递和面试前先心里有底。',
    examples: [
      '我想投字节的产品经理，帮我做份公司调研',
      '手上两个 offer，帮我对比下这两家公司',
      '下周面试，帮我整理这家公司的面经和高频问题'
    ]
  },
  {
    name: '电脑操作与排障助手', icon: '🖥️', cat: '办公提效', kw: ["电脑","c盘","卡顿","变慢","清理","文件整理"], tags: ["电脑操作","文件管理","问题排查"],
    desc: '“电脑怎么又卡了”“C盘又满了”——把现象描述变成一步步照做就能解决的方案，文件、软件、提速全覆盖。',
    examples: [
      '帮我整理桌面文件',
      '排查电脑运行变慢的原因',
      '帮我清理c盘'
    ]
  },
  {
    name: '前端开发工程师', icon: '💻', cat: '产品研发', kw: ["前端","网页","页面","布局","交互"], tags: ["页面开发","交互实现","界面优化"],
    desc: '把设计稿变成真正好用的页面：细节还原，状态完整，用户每一步都知道接下来会发生什么。',
    examples: [
      '把这个设计稿做成网页',
      '优化这个页面的交互',
      '帮我修复移动端布局问题'
    ]
  },
  {
    name: '后端架构师', icon: '🏗️', cat: '产品研发', kw: ["后端","架构","api","数据库","接口"], tags: ["服务架构","接口设计","数据建模"],
    desc: '把“先跑起来再说”的代码变成数据模型清晰、接口边界明确、扛得住业务增长的架构。',
    examples: [
      '设计这个系统的后端架构',
      '帮我规划 API 和数据库',
      '排查接口响应慢的问题'
    ]
  },
  {
    name: '产品经理', icon: '🧭', cat: '产品研发', kw: ["prd","需求","产品","优先级"], tags: ["需求分析","产品规划","PRD"],
    desc: '把“大家都想要”还原成真正要解决的问题，再判断做什么、先做什么，以及什么暂时不做。',
    examples: [
      '把这个想法整理成 PRD',
      '帮我拆解用户需求',
      '给这个功能排版本优先级'
    ]
  },
  {
    name: '代码审查员', icon: '🔎', cat: '产品研发', kw: ["代码审查","bug","重构","代码质量"], tags: ["代码质量","问题发现","重构建议"],
    desc: '专挑“能跑但经不起改”的代码：边界条件、多人协作、历史欠账逐条过，每条都给能落地的改法。',
    examples: [
      '审查这段代码有什么问题',
      '帮我找出潜在 bug',
      '给这段代码提出重构方案'
    ]
  },
  {
    name: '项目管理师', icon: '📅', cat: '产品研发', kw: ["项目","排期","进度","风险"], tags: ["任务拆解","进度管理","风险跟踪"],
    desc: '把“赶紧做完”变成谁在什么时候交付什么，提前找出最可能拖延的环节，让项目按计划往前走。',
    examples: [
      '帮我拆解这个项目计划',
      '生成项目排期',
      '整理项目风险和待办'
    ]
  },
  {
    name: '个人工作台搭建', icon: '🧰', cat: '一人公司', kw: ["工作台","工具整合","自动化","开工流程"], tags: ["工作台搭建","工具整合","流程自动化"],
    desc: '把散落在桌面、网盘、聊天记录里的文件和待办收进一个工作台，每天开工一个入口全搞定。',
    examples: [
      '帮我搭一个个人工作台',
      '把这几个常用工具整合到一起',
      '设计我的每日开工流程'
    ]
  },
  {
    name: '市场调研员', icon: '🔍', cat: '一人公司', kw: ["调研","竞品","行业分析","市场规模"], tags: ["市场调研","竞品分析","用户洞察"],
    desc: '把散落在行业报告、评论区、社交平台的信号整理成能拿去拍板的结论：竞品动向、用户抱怨、机会缺口一目了然。',
    examples: [
      '做一份竞品分析报告',
      '调研这个行业的市场规模',
      '整理用户对这类产品的反馈'
    ]
  },
  {
    name: '战略咨询师', icon: '♟️', cat: '一人公司', kw: ["战略","咨询","市场分析","竞品"], tags: ["战略分析","竞争研究","决策支持"],
    desc: '“这个方向值不值得 all in”——用竞争格局、成本结构和风险假设把决策摆上台面，想清楚再下注。',
    examples: [
      '分析这个业务方向是否值得做',
      '做一份竞品和市场分析',
      '帮我比较两种增长策略'
    ]
  },
  {
    name: '财务分析师', icon: '🧮', cat: '一人公司', kw: ["财务","利润表","成本","经营分析"], tags: ["财务分析","经营指标","预算决策"],
    desc: '利润表只给结果，分析才给原因：钱从哪条业务赚来、在哪个环节悄悄漏掉，一页纸讲清楚。',
    examples: [
      '分析这份利润表',
      '找出成本增长的原因',
      '帮我做一份经营财务分析'
    ]
  },
  {
    name: '招投标管理专家', icon: '📑', cat: '一人公司', kw: ["招标","投标","标书"], tags: ["标书撰写","资质梳理","流程管理"],
    desc: '招标文件逐条拆解：资质门槛、评分点对照、标书交叉检查，别让一个月的准备倒在最后的细节上。',
    examples: [
      '解读这份招标文件的要求',
      '帮我梳理投标材料清单',
      '检查标书是否覆盖评分点'
    ]
  },
  {
    name: '公文写作助手', icon: '📜', cat: '内容创意', kw: ["公文","请示","通知","报告"], tags: ["公文写作","格式规范","正式表达"],
    desc: '把零散素材写成格式规范、立场清楚、请求明确的公文，交出去不被挑毛病。',
    examples: [
      '起草一份项目请示',
      '把这段内容改成正式报告',
      '帮我检查公文格式'
    ]
  },
  {
    name: '微信公众号运营专家', icon: '💬', cat: '内容创意', kw: ["公众号","推文","打开率","微信"], tags: ["选题策划","公众号写作","内容运营"],
    desc: '“阅读量怎么又扑了”——从选题、标题到成稿逐环节复盘优化，让每篇文章都值得被点开、读完有收获。',
    examples: [
      '策划一周公众号选题',
      '写一篇产品介绍文章',
      '分析这篇文章如何提高打开率'
    ]
  },
  {
    name: '小红书发布助手', icon: '📤', cat: '内容创意', kw: ["发布","定时","排期","笔记数据"], tags: ["笔记发布","定时排期","数据回访"],
    desc: '把写好的笔记按计划发出去：定时排期、标签话题带好、发布后数据回访，替你盯住发布这件事。',
    examples: [
      '把这篇笔记定时今晚 8 点发布',
      '给这篇笔记配好话题标签再发布',
      '复盘我最近 7 天笔记的发布数据'
    ]
  },
  {
    name: '爆款短剧策划师', icon: '🎬', cat: '内容创意', kw: ["短剧","剧本","剧情","反转"], tags: ["故事策划","剧本结构","短剧创作"],
    desc: '把一个脑洞发展成完整的短剧大纲：人物关系、分集节奏、反转钩子，前三秒先留住观众。',
    examples: [
      '策划一个反转短剧',
      '生成短剧人物关系和分集大纲',
      '优化这集剧本的冲突'
    ]
  },
  {
    name: '直播脚本策划师', icon: '🎙️', cat: '内容创意', kw: ["直播","脚本","话术"], tags: ["直播脚本","话术设计","流程编排"],
    desc: '把一场直播写成分钟级脚本：开场留人、产品讲解、憋单逼单，每个环节该说什么都有词。',
    examples: [
      '策划一场直播的完整流程',
      '写一段新品讲解话术',
      '优化直播间的互动环节'
    ]
  },
  {
    name: '短视频运营专家', icon: '📹', cat: '内容创意', kw: ["短视频","抖音","快手","视频号"], tags: ["账号定位","爆款选题","粉丝增长"],
    desc: '“发了几十条粉丝还是三位数”——从定位、选题到前三秒的开头逐项诊断，让每条视频都给人一个非关注不可的理由。',
    examples: [
      '分析我的账号为什么涨粉慢',
      '策划一周短视频选题',
      '帮这条视频设计一个强开头'
    ]
  },
  {
    name: '海报设计师', icon: '🖼️', cat: '内容创意', kw: ["海报","视觉","配图"], tags: ["视觉创意","版式设计","宣传物料"],
    desc: '三秒定生死的海报怎么排：主信息一眼抓住人，层级分明不堆砌，行动入口放在视线落点上。',
    examples: [
      '设计一张活动海报',
      '给这张海报优化信息层级',
      '生成「xx主题」的海报'
    ]
  },
  {
    name: '网站设计师', icon: '🌐', cat: '内容创意', kw: ["官网","网页设计","网站"], tags: ["网页设计","视觉规范","落地页转化"],
    desc: '把“官网做得像模板套的”印象改掉：首页、落地页、详情页逐页打磨，视觉统一、层级清楚，让访客顺着往下走。',
    examples: [
      '设计一个产品官网首页',
      '给落地页出一版视觉方案',
      '统一这套网站的视觉风格'
    ]
  },
  {
    name: '运营增长专家', icon: '📈', cat: '数据研究', kw: ["增长","留存","转化","aarrr"], tags: ["增长策略","留存转化","数据分析"],
    desc: '用数据漏斗说话：拉新、激活、留存、召回逐层拆解，找到流失最严重的一层，给出下周就能上手的方案。',
    examples: [
      '分析我的用户增长数据',
      '设计一个拉新活动方案',
      '找出用户流失最多的环节'
    ]
  },
  {
    name: '直播运营助手', icon: '📺', cat: '数据研究', kw: ["直播运营","场控","复盘"], tags: ["直播运营","流量提升","互动转化"],
    desc: '盯住在线人数的每个拐点：预热引流、开场留人、互动促转化，用复盘把每场直播的数据抬上去。',
    examples: [
      '分析这场直播的数据表现',
      '策划一场直播的预热方案',
      '设计直播间的互动玩法'
    ]
  },
  {
    name: 'SEO优化助手', icon: '🌐', cat: '数据研究', kw: ["seo","关键词","搜索排名","收录"], tags: ["关键词研究","内容优化","搜索增长"],
    desc: '“为什么搜不到我们”——给网站做一次从关键词、内容到技术细节的全面体检，让自然流量稳步涨回来。',
    examples: [
      '分析这个网站的 SEO 问题',
      '制定一组关键词和内容计划',
      '优化这篇文章的搜索表现'
    ]
  },
  {
    name: '中国电商运营专家', icon: '🛒', cat: '数据研究', kw: ["电商","店铺","转化","详情页"], tags: ["店铺运营","平台规则","转化优化"],
    desc: '流量有了、转化上不去？从详情页、评价维护到大促节奏逐环节排查，把用户卡住的那一步捋顺。',
    examples: [
      '分析我的店铺转化问题',
      '制定一次电商活动方案',
      '优化商品详情页'
    ]
  },
  {
    name: '跨境电商运营专家', icon: '🌍', cat: '数据研究', kw: ["跨境","出海","亚马逊","temu"], tags: ["跨境运营","Listing 优化","物流合规"],
    desc: '选品、Listing、物流、合规四道关一起把关，Amazon、Temu、TikTok Shop 常见的坑提前替你踩一遍。',
    examples: [
      '评估我的跨境店铺运营情况',
      '优化这条商品 Listing',
      '制定新品出海的推广计划'
    ]
  },
  {
    name: '亚马逊广告投放师', icon: '📣', cat: '数据研究', kw: ["亚马逊","广告","acos","投放"], tags: ["广告投放","关键词优化","成本控制"],
    desc: '每一分广告费都花在出单词上：报表逐行拆解，砍掉只烧钱不出单的词，让 ACOS 一点一点降下来。',
    examples: [
      '分析这份亚马逊广告报表',
      '制定新品广告投放方案',
      '帮我降低 ACOS'
    ]
  },
  {
    name: '资产规划顾问', icon: '💰', cat: '金融法律', kw: ["理财","资产配置","保险","养老"], tags: ["收支管理","预算规划","风险提示"],
    desc: '先搞清楚钱花哪儿了，再谈怎么规划：收支梳理、预算制定、方案比较；只陈述数据与逻辑，不代替你做决定。',
    examples: [
      '帮我整理这份月度账单',
      '制定家庭年度预算',
      '比较两种储蓄方案的差异'
    ]
  },
  {
    name: '民商事诉讼专家', icon: '⚖️', cat: '金融法律', kw: ["诉讼","纠纷","证据","起诉"], tags: ["案情梳理","证据整理","诉讼流程"],
    desc: '把一团乱麻的纠纷理成时间线、证据清单和诉求列表，让每一个主张都找得到对应的事实与证据。',
    examples: [
      '帮我整理这起纠纷的时间线',
      '列出需要准备的证据',
      '解释民事诉讼的大致流程'
    ]
  },
  {
    name: '合同审查专家', icon: '📑', cat: '金融法律', kw: ["合同","条款","违约","审查"], tags: ["条款审查","风险识别","合同修改"],
    desc: '逐条检查那些“签的时候没感觉、出事时才吃亏”的表述，告诉你风险落在哪一方，以及怎么谈。',
    examples: [
      '审查这份合同的风险',
      '找出对我方不利的条款',
      '帮我修改违约责任条款'
    ]
  },
  {
    name: '法律文书助手', icon: '🖋️', cat: '金融法律', kw: ["法律文书","起诉状","文书"], tags: ["文书起草","事实整理","格式规范"],
    desc: '起诉状、答辩状、律师函逐段搭框架：事实、诉求、依据各归其位，写出来的每句话都站得住。',
    examples: [
      '根据这组事实整理文书框架',
      '起草一份民事起诉状提纲',
      '检查这份法律文书是否完整'
    ]
  },
  {
    name: '学习辅导助手', icon: '📚', cat: '学习成长', kw: ["学习","复习","错题","讲解"], tags: ["知识讲解","学习计划","错题复盘"],
    desc: '把“我学不会”拆成具体卡点：是概念没懂、方法不对，还是练习不足，再给你安排下一步怎么学。',
    examples: [
      '帮我制定这门课的学习计划',
      '用简单方式讲解这个概念',
      '根据错题安排复习'
    ]
  },
  {
    name: '论文写作助手', icon: '🎓', cat: '学习成长', kw: ["论文","提纲","参考文献","学术"], tags: ["论文结构","学术表达","格式检查"],
    desc: '“论文写到一半写不动了”——从提纲、论证到结论逐章推进，把口语化表达改成经得起导师推敲的学术语言。',
    examples: [
      '帮我梳理论文提纲',
      '修改这段学术表达',
      '检查参考文献格式'
    ]
  },
  {
    name: '高考志愿填报助手', icon: '🎓', cat: '学习成长', kw: ["高考","志愿","填志愿","报志愿"], tags: ["志愿填报","院校分析","分数定位"],
    desc: '同样的分数能去哪里、读什么：位次定位、专业前景、冲稳保梯度，一张表把志愿排到不后悔。',
    examples: [
      '根据分数推荐院校和专业',
      '比较这几个专业的就业前景',
      '帮我制定冲稳保策略'
    ]
  },
  {
    name: '留学顾问', icon: '✈️', cat: '学习成长', kw: ["留学","申请","托福","雅思"], tags: ["院校调研","申请规划","材料准备"],
    desc: '选校看匹配度，不堆排名：背景评估、院校梯度、文书时间线，把申请季每一步都排进日历。',
    examples: [
      '根据我的背景筛选院校',
      '制定留学申请时间表',
      '检查这份申请材料'
    ]
  },
  {
    name: '求职辅导助手', icon: '🎯', cat: '求职招聘', kw: ["求职","面试辅导","求职计划"], tags: ["求职定位","面试准备","行动计划"],
    desc: '简历投出去总石沉大海？先定方向、再补短板、最后模拟面试，把经历讲成目标岗位最在意的证据。',
    examples: [
      '帮我制定一个月求职计划',
      '模拟这个岗位的面试',
      '分析我的求职短板'
    ]
  },
  {
    name: '招聘助手', icon: '🧑‍💼', cat: '求职招聘', kw: ["招聘","简历筛选","面试流程"], tags: ["岗位分析","候选人筛选","招聘流程"],
    desc: '把岗位要求拆成可打分的筛选标准，把几十份简历排成对比清单，面试问题按岗位定制，每一步都有抓手。',
    examples: [
      '把这个岗位拆成筛选标准',
      '比较这几份简历',
      '设计一轮面试流程'
    ]
  },
  {
    name: '简历优化助手', icon: '📃', cat: '求职招聘', kw: ["简历","经历提炼","岗位匹配"], tags: ["简历改写","经历提炼","岗位匹配"],
    desc: 'HR 平均十秒扫一份简历：把经历改写成与岗位要求逐条对应的成果，缺口直说，还给你补齐的写法。',
    examples: [
      '针对这个岗位优化简历',
      '把这段经历写得更有说服力',
      '检查简历中的问题'
    ]
  },
  {
    name: '人力资源顾问', icon: '👥', cat: '求职招聘', kw: ["hr","招聘流程","绩效","入离职"], tags: ["HR 流程","绩效管理","员工关系"],
    desc: '从招人、定薪到绩效面谈，把“凭感觉管人”变成有制度、有话术、有记录的规范动作。',
    examples: [
      '设计一套面试评估标准',
      '帮我起草员工手册',
      '分析团队人员流失的原因'
    ]
  },
  {
    name: '个人健康管理师', icon: '💚', cat: '健康管理', kw: ["健康","饮食","运动","睡眠"], tags: ["健康管理","作息规划","习惯养成"],
    desc: '“健康计划总是三天打鱼”——把作息、饮食、运动拆成一周见效的小改变，用记录和复盘代替硬扛。',
    examples: [
      '帮我制定一份健康管理计划',
      '根据我的作息优化睡眠安排',
      '帮我设计一周的运动和饮食清单'
    ]
  },
  {
    name: '体检报告解读专家', icon: '🩺', cat: '健康管理', kw: ["体检","报告解读","指标异常"], tags: ["报告解读","指标分析","就医建议"],
    desc: '把报告里的箭头和术语翻译成人话：哪些要紧、哪些只需观察、该挂哪个科；解读供参考，不能替代医生的诊断。',
    examples: [
      '帮我解读这份体检报告',
      '这几项指标偏高要紧吗',
      '体检异常该挂哪个科复查'
    ]
  },
  {
    name: '宠物健康咨询助手', icon: '🐾', cat: '健康管理', kw: ["宠物","猫","狗","疫苗"], tags: ["宠物健康","症状分析","养护建议"],
    desc: '猫两天没吃饭、狗吐了两次：先判断要不要立刻去医院，再给日常喂养建议；紧急情况请直接找兽医。',
    examples: [
      '我家猫最近不爱吃饭怎么办',
      '狗狗呕吐需要立刻就医吗',
      '帮我制定猫咪的喂养计划'
    ]
  },
  {
    name: '八字命理解读师', icon: '☯️', cat: '生活娱乐', kw: ["八字","命理","生辰","五行"], tags: ["八字分析","命理解读","运势参考"],
    desc: '十神、大运、流年，把命盘讲成人人听得懂的性格与运势故事；图个乐呵和自我梳理，人生大事还看你自己。',
    examples: [
      '解读我的八字命盘',
      '分析我今年的整体运势',
      '看看我们俩的八字合不合'
    ]
  },
  {
    name: '星座排盘专家', icon: '🔭', cat: '生活娱乐', kw: ["星座","星盘","水逆","占星"], tags: ["星盘解读","星座配对","运势分析"],
    desc: '太阳、月亮、上升逐一看盘：本命盘讲性格底色，配对盘聊相处模式，月运提醒该注意什么，聊天话题不断档。',
    examples: [
      '帮我解读我的星盘',
      '分析这两个星座的配对指数',
      '看看这个月的星座运势'
    ]
  },
  {
    name: '姻缘占卜师', icon: '💘', cat: '生活娱乐', kw: ["姻缘","桃花","正缘","脱单"], tags: ["姻缘测算","缘分分析","情感解读"],
    desc: '一支签、一次合盘，把感情里的纠结聊出个轻松视角；灵不灵图一乐，日子终究是两个人一起过的。',
    examples: [
      '测一测我们俩的姻缘',
      '分析我的正缘什么时候出现',
      '看看这段感情的走向'
    ]
  },
  {
    name: '特朗普嘴替', icon: '🗣️', cat: '生活娱乐', kw: ["嘴替","吐槽","模仿","特朗普"], tags: ["口吻模仿","犀利点评","娱乐吐槽"],
    desc: '用特朗普的口吻把你想说的话喊出来，夸张、直给、自带节奏；图一乐，别太当真。',
    examples: [
      '用特朗普的口吻点评我的周报',
      '用这个风格夸夸我',
      '模仿他的语气吐槽堵车'
    ]
  },
  {
    name: '数据分析报告专家', icon: '📊', cat: '数据研究', kw: ["报告","bi","可视化","取数"], tags: ["指标口径","数据质量","分析报告"],
    desc: '把零散数据变成可追溯的分析报告：口径先对齐，质量先检查，图表、结论和行动建议一份交付。',
    examples: [
      '分析这份销售数据',
      '检查数据质量并找出异常',
      '输出一份带图表的经营分析报告'
    ]
  },
  {
    name: '深度研究专家', icon: '🧠', cat: '数据研究', kw: ["深度研究","调研","尽调","交叉验证"], tags: ["问题定义","资料检索","证据核验"],
    desc: '面对没有标准答案的问题，帮你拆清研究范围、查全关键资料、核验不同来源，最后把结论、风险和未知点摆到台面上。',
    examples: [
      '研究这个行业的发展趋势',
      '比较三种方案的优缺点',
      '帮我核验这几个说法是否可靠'
    ]
  },
  {
    name: '个人知识库助手', icon: '📚', cat: '数据研究', kw: ["知识库","笔记","obsidian","notion"], tags: ["知识整理","资料索引","定期复盘"],
    desc: '把散落在文档、网页和聊天记录里的信息整理成找得到、用得上、能持续维护的个人知识库。',
    examples: [
      '帮我整理这批学习资料',
      '设计我的知识库分类和标签',
      '找出知识库里重复和过期的内容'
    ]
  },
  {
    name: '高情商回复助手', icon: '💬', cat: '沟通表达', kw: ["高情商","回复","话术","得体"], tags: ["语气拿捏","关系判断","多版本回复"],
    desc: '同一句话在不同关系里分寸完全不同：结合上下文和沟通目标，给你几版能直接发、也知道风险在哪里的回复。',
    examples: [
      '帮我回复这条消息但不要显得冷淡',
      '给领导写一版得体的回复',
      '把这句话改得更有分寸'
    ]
  },
  {
    name: '客服助手', icon: '🎧', cat: '沟通表达', kw: ["客服","售后","退款","工单"], tags: ["客户咨询","情绪安抚","服务升级"],
    desc: '从政策和客户历史出发，把咨询答准确、情绪接住、问题分对人，必要时把升级和回访也安排清楚。',
    examples: [
      '回复客户的退款咨询',
      '安抚一位不满意的客户',
      '判断这个问题是否需要升级处理'
    ]
  },
  {
    name: '情感沟通助手', icon: '❤️', cat: '沟通表达', kw: ["情感","恋爱","聊天","关系"], tags: ["情绪澄清","关系沟通","边界建议"],
    desc: '先把情绪和事实分开，再想清楚要表达什么、边界在哪里，给出既不委屈自己也不激化矛盾的沟通方案。',
    examples: [
      '帮我和伴侣谈谈这件事',
      '分析这段对话的问题',
      '把我的想法表达得更清楚'
    ]
  },
  {
    name: '表达提升教练', icon: '🎤', cat: '沟通表达', kw: ["口才","演讲","表达","汇报"], tags: ["结构优化","措辞调整","表达练习"],
    desc: '汇报、演讲、写作总觉得差一点？从结构、措辞和节奏逐项修改，再用练习把一次改好变成稳定会说。',
    examples: [
      '帮我优化这段汇报',
      '把这篇发言稿讲得更有逻辑',
      '训练我做三分钟自我介绍'
    ]
  },
  {
    name: '内部沟通专家', icon: '🔗', cat: '销售商务', kw: ["跨部门","催办","协作","对齐"], tags: ["跨部门协作","责任梳理","冲突协调"],
    desc: '跨部门推进卡住时，把目标、责任、依赖和风险理清，生成同步、催办和升级材料，让事情继续往前走。',
    examples: [
      '帮我写一封跨部门催办邮件',
      '梳理这个项目各方责任',
      '设计一次冲突协调的沟通方案'
    ]
  },
  {
    name: '大客户销售', icon: '🤝', cat: '销售商务', kw: ["ka","大客户","crm","商机"], tags: ["客户经营","决策链","成交推进"],
    desc: '把重点客户从一条线索经营成一张机会地图：谁能拍板、客户要什么、竞品在哪、下一步怎么推进都清清楚楚。',
    examples: [
      '梳理这个客户的决策链',
      '制定大客户跟进计划',
      '分析这次商机为什么迟迟不成交'
    ]
  },
  {
    name: '售前技术顾问', icon: '🛠️', cat: '销售商务', kw: ["售前","方案","poc","技术方案"], tags: ["需求映射","方案架构","实施边界"],
    desc: '把客户的业务问题翻译成产品能力、技术架构和实施计划，既讲清楚能做什么，也提前说清楚边界在哪里。',
    examples: [
      '根据客户需求设计技术方案',
      '准备一份售前方案介绍',
      '梳理项目实施范围和验收方式'
    ]
  },
  {
    name: '销售增长顾问', icon: '🚀', cat: '销售商务', kw: ["销售","漏斗","转化率","增长"], tags: ["销售漏斗","转化优化","增长实验"],
    desc: '从漏斗、渠道、转化率和客单价里找增长瓶颈，用小步实验验证方案，把“感觉应该能增长”变成可追踪的指标变化。',
    examples: [
      '分析销售漏斗的流失环节',
      '设计一个提升转化率的实验',
      '制定销售增长复盘表'
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

/* ========== Banner 轮播 ========== */
const bannerRoleNames = ['前端开发工程师', '后端架构师', '产品经理', '代码审查员', '项目管理师', '市场调研员', '战略咨询师', '财务分析师', '招投标管理专家', '运营增长专家', '人力资源顾问'];
const bannerRoleIdx = bannerRoleNames.map(n => experts.findIndex(e => e.name === n)).filter(i => i >= 0);
const bannerScientistIdx = experts.findIndex(e => e.name === '科研助手');
const bannerPcIdx = experts.findIndex(e => e.name === '电脑操作与排障助手');
let bannerTimer = null;
let bannerRoleTimer = null;
let bannerActive = 0;
let bannerRoleActive = 0;

function renderBannerCarousel() {
  const box = $('bannerCarousel');
  if (!box) return;
  if (bannerTimer) { clearInterval(bannerTimer); bannerTimer = null; }
  if (bannerRoleTimer) { clearInterval(bannerRoleTimer); bannerRoleTimer = null; }
  bannerActive = 0;
  bannerRoleActive = 0;

  const pcIcon = bannerPcIdx >= 0 ? experts[bannerPcIdx].icon : '💻';
  box.innerHTML = `
    <div class="banner-slide banner-slide-1 active" data-slide="0">
      <div class="banner-left">
        <span class="banner-tag">PROFESSIONAL ROLES</span>
        <div class="banner-title">专业岗位，选<span class="hl">对的专家</span></div>
        <div class="banner-sub">研发、产品、调研、财务……11 位岗位专家随时待命</div>
        <span class="banner-cta">看看都有谁 →</span>
      </div>
      <div class="banner-roles">
        <div class="banner-role-cards" id="bannerRoleCards"></div>
        <div class="banner-role-dots" id="bannerRoleDots"></div>
      </div>
    </div>
    <div class="banner-slide banner-slide-2" data-slide="1">
      <div class="banner-left">
        <span class="banner-tag">RESEARCH</span>
        <div class="banner-title">文献再多也不慌，<span class="hl">读透才是硬道理</span></div>
        <div class="banner-sub">科研助手：文献清单、观点整理、研究框架，一次配齐</div>
        <span class="banner-cta">开始科研 →</span>
      </div>
      <div class="banner-art">🔬</div>
    </div>
    <div class="banner-slide banner-slide-3" data-slide="2">
      <div class="banner-left">
        <span class="banner-tag">KERWORK ON PC</span>
        <div class="banner-title">电脑卡了、C 盘满了？<span class="hl">说给 KerWork 听</span></div>
        <div class="banner-sub">电脑操作与排障助手：把现象一步步变成能照做的解决方案</div>
        <span class="banner-cta">立即体验 →</span>
      </div>
      <div class="banner-art">${pcIcon}</div>
    </div>
    <div class="banner-dots" id="bannerDots"></div>`;

  const dots = $('bannerDots');
  dots.innerHTML = [0, 1, 2].map(i => `<button class="banner-dot${i === 0 ? ' active' : ''}" data-i="${i}"></button>`).join('');
  dots.querySelectorAll('.banner-dot').forEach(btn => {
    btn.onclick = (ev) => { ev.stopPropagation(); setBannerSlide(+btn.dataset.i); };
  });

  box.querySelectorAll('.banner-slide').forEach(slide => {
    slide.onclick = () => {
      const i = +slide.dataset.slide;
      if (i === 0) return;
      const idx = i === 1 ? bannerScientistIdx : bannerPcIdx;
      if (idx >= 0) openExpertModal(idx);
    };
  });

  bannerTimer = setInterval(() => setBannerSlide((bannerActive + 1) % 3), 5000);

  renderBannerRoles();
}

function renderBannerRoles() {
  const cards = $('bannerRoleCards');
  const rdots = $('bannerRoleDots');
  if (!cards || !rdots) return;
  cards.innerHTML = bannerRoleIdx.map(idx => {
    const e = experts[idx];
    return `
    <div class="banner-role-card" data-i="${idx}">
      <div class="banner-role-icon">${e.icon}</div>
      <div>
        <div class="banner-role-name">${e.name}</div>
        <div class="banner-role-tags">${e.tags.join(' · ')}</div>
      </div>
    </div>`;
  }).join('');
  rdots.innerHTML = bannerRoleIdx.map((idx, i) => `<span class="banner-role-dot${i === 0 ? ' active' : ''}"></span>`).join('');

  updateBannerRoles();
  if (bannerRoleIdx.length > 1) {
    bannerRoleTimer = setInterval(() => {
      bannerRoleActive = (bannerRoleActive + 1) % bannerRoleIdx.length;
      updateBannerRoles();
    }, 2600);
  }
  cards.querySelectorAll('.banner-role-card').forEach(card => {
    card.onclick = (ev) => {
      ev.stopPropagation();
      openExpertModal(+card.dataset.i);
    };
  });
}

function updateBannerRoles() {
  const cards = $('bannerRoleCards');
  const rdots = $('bannerRoleDots');
  if (!cards) return;
  cards.querySelectorAll('.banner-role-card').forEach((card, i) => card.classList.toggle('active', i === bannerRoleActive));
  if (rdots) rdots.querySelectorAll('.banner-role-dot').forEach((d, i) => d.classList.toggle('active', i === bannerRoleActive));
}

function setBannerSlide(i) {
  const box = $('bannerCarousel');
  if (!box) return;
  bannerActive = i;
  box.querySelectorAll('.banner-slide').forEach(s => s.classList.toggle('active', +s.dataset.slide === i));
  box.querySelectorAll('.banner-dot').forEach((d, j) => d.classList.toggle('active', j === i));
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
      <div class="banner-carousel" id="bannerCarousel"></div>
      <div class="cat-tabs" id="catTabs">${renderCategoryTabs()}</div>
      <div class="expert-grid" id="expertGrid"></div>
    </div>`;

  renderBannerCarousel();

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
