const experts = [
  {
    name: 'PPT 设计师', icon: '🎨', tags: ['汇报表达', '结构梳理', '视觉呈现'],
    desc: '帮你把零散想法整理成结构清晰、拿去就能讲的 PPT；三页能讲清的事，绝不做三十页。',
    examples: [
      '围绕"AI 如何改变个人工作方式"，生成一份 PPT',
      '为「xx」产品发布会制作完整 PPT',
      '生成一份精美的PPT模板，用于自我介绍'
    ]
  },
  {
    name: 'Excel 表格助手', icon: '📊', tags: ['表格处理', '公式计算', '效率提升'],
    desc: '模板搭建、公式编写、数据清洗一条龙，说清需求就能拿到改好的表。',
    examples: [
      '做一个家庭记账表，能自动汇总每月支出',
      '这两张表按订单号合并一下，重复的去掉',
      '这列日期格式太乱了，帮我统一成 2024/01/01'
    ]
  },
  {
    name: '文件格式转换师', icon: '🔄', tags: ['格式转换', 'TeX 排版', '内容提取'],
    desc: '各类格式互转，转完就能用：不乱码、不丢排版，专治"打不开"和"排版全飞了"。',
    examples: [
      '生成一份会议纪要 Word 模板',
      '生成一份可编辑的 PDF 电子书模板',
      '生成旅行计划 PDF 并转成 html'
    ]
  },
  {
    name: '数据分析专员', icon: '📉', tags: ['数据洞察', '指标理解', '图表表达'],
    desc: '结论先行、图表佐证，把一堆数字变成能做判断的答案；数据不够时也会老实说"不够"。',
    examples: [
      '梳理腾讯近期财报数据并建模',
      '为 App 设计首月数据分析报告',
      '生成销售额下降的排查分析框架'
    ]
  },
  {
    name: '小红书爆款文案专家', icon: '📕', tags: ['选题灵感', '内容表达', '标题打磨'],
    desc: '选题、标题、正文、标签一次配齐，产出能直接发布的完整笔记——目标是让人收藏，而不是划走。',
    examples: [
      '想写"第一次租房避坑"，先给我 10 个标题',
      '把我的健身打卡经历写成一篇笔记',
      '这篇草稿太平了，帮我改得有网感再配标签'
    ]
  },
  {
    name: '去AI味', icon: '✏️', tags: ['文风诊断', '句式重写', '表达自然'],
    desc: '专治 AI 腔：不堆排比、不喊营销空话、不用"不是…而是…"，把"像 AI 写的"改成"像人写的"。',
    examples: [
      '这段是 AI 写的，帮我改得像人写的',
      '帮我看看这篇文案哪里一股 AI 味',
      '把这份公告改得别那么官腔'
    ]
  },
  {
    name: '工作汇报大师', icon: '📋', tags: ['工作梳理', '重点提炼', '汇报表达'],
    desc: '把零散记录整理成老板爱看的周报：事实有据、重点清晰，绝不瞎编——包装可以专业，数据绝不注水。',
    examples: [
      '这是我记的流水账，帮我整理成周报',
      '项目延期了，帮我想想怎么跟领导开口',
      '把这两个会的纪要合成一份月度总结'
    ]
  },
  {
    name: '股票研究员', icon: '📈', tags: ['行情查询', '财务分析', '研报解读'],
    desc: '行情、财报、研报一站梳理，每个数字都有出处、每个风险提前说；只聊数据和逻辑，不喊"买买买"。',
    examples: [
      '查询宁德时代近期行情与财务指标',
      '按市值、估值和股息率筛选股票',
      '整理研报对相关标的的影响'
    ]
  },
  {
    name: '科研助手', icon: '🔬', tags: ['文献阅读', '观点整理', '研究框架'],
    desc: '把模糊的研究方向推进成文献清单和研究框架，顺便帮你少读一百篇弯路文献。',
    examples: [
      '围绕 RAG 评估生成入门资料包',
      '生成研究问题树和文献检索方案',
      '整理 AI agent 文献清单'
    ]
  },
  {
    name: '解忧占卜师', icon: '🔮', tags: ['轻松解读', '情绪陪伴', '自我探索'],
    desc: '用有仪式感的互动，把心情和困惑整理成轻松的娱乐性解读；准不重要，开心和想得通才重要。',
    examples: [
      '生成未来一个月的轻松主题解读',
      '我的八字是…帮我算一下下个月运势',
      '生成今日抽牌小卡'
    ]
  },
  {
    name: '求职调研师', icon: '💼', tags: ['公司了解', '岗位判断', '面试准备'],
    desc: '把全网零散的公开信息整理成有来源的公司与岗位简报，投递和面试前先心里有底。',
    examples: [
      '我想投字节的产品经理，帮我做份公司调研',
      '手上两个 offer，帮我对比下这两家公司',
      '下周面试，帮我整理这家公司的面经和高频问题'
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
  showExpertList();
}

function getSortedExperts() {
  const pinned = pinnedExperts.map(i => ({ e: experts[i], i }));
  const rest = experts.map((e, i) => ({ e, i })).filter(({ i }) => !pinnedExperts.includes(i));
  return [...pinned, ...rest];
}

function showExpertList() {
  currentPage = 'expert';
  $('navExpert').classList.add('active');
  const sorted = getSortedExperts();

  content.innerHTML = `
    <div class="expert-page">
      <div class="expert-page-header">
        <div class="expert-page-title">专家</div>
        <div class="expert-page-sub">把专业的事，交给对的人。</div>
      </div>
      <div class="expert-grid">
        ${sorted.map(({ e, i }) => {
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
            <div class="expert-card-tags">${e.tags.map(t => `<span class="expert-card-tag">${t}</span>`).join('')}</div>
            <div class="expert-card-action">开始使用</div>
            <button class="pin-btn${isPinned ? ' pinned' : ''}" data-pin="${i}" title="${isPinned ? '取消置顶' : '置顶'}">📌</button>
          </div>`;
        }).join('')}
      </div>
    </div>`;

  content.querySelectorAll('.expert-card').forEach(el => {
    el.onclick = (ev) => {
      if (ev.target.closest('.pin-btn')) return;
      openExpertModal(+el.dataset.i);
    };
  });

  content.querySelectorAll('.pin-btn').forEach(btn => {
    btn.onclick = (ev) => {
      ev.stopPropagation();
      togglePin(+btn.dataset.pin);
    };
  });
}

/* ========== 专家详情弹窗 ========== */
function openExpertModal(idx) {
  const e = experts[idx];
  modal.innerHTML = `
    <div class="modal-header">
      <div class="modal-icon">${e.icon}</div>
      <div>
        <h2>${e.name}</h2>
        <div class="modal-tags">${e.tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}</div>
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
