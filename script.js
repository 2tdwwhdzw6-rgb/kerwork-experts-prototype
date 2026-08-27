const experts = [
  {
    name: 'PPT 专家', icon: '✦', tags: ['汇报表达', '结构梳理', '视觉呈现'],
    desc: '把零散想法整理成能直接拿去沟通的演示方案：梳理逻辑、安排页面、补齐表达重点，并交付可继续编辑的 PPT。',
    examples: [
      '围绕"AI 如何改变个人工作方式"，生成一份 PPT',
      '为「xx」产品发布会制作完整 PPT，包含产品亮点、用户价值和发布流程',
      '生成一份精美的PPT模板，用于自我介绍'
    ]
  },
  {
    name: 'Excel 专家', icon: '▦', tags: ['表格处理', '公式计算', '效率提升'],
    desc: '把重复的表格工作交给它：从零搭建模板、设计公式、整理字段和生成可复用的工作表，让日常记录和统计更省心。',
    examples: [
      '生成一个个人记账 Excel 模板，包含分类、月度汇总、预算对比和可视化图表',
      '生成一个项目进度管理表',
      '设计一个家庭旅行预算表，自动汇总交通、住宿、餐饮和人均花费'
    ]
  },
  {
    name: '文件转换专家', icon: '▤', tags: ['格式转换', 'TeX 排版', '内容提取'],
    desc: '处理文件格式和内容整理的杂事：按目标用途设计转换方案，完成文本提取、版式整理或文件合并，并交付可继续使用的结果。',
    examples: [
      '生成一份可直接使用的会议纪要 Word 模板',
      '生成一份可直接编辑的 PDF 电子书模板',
      '生成一份可直接打印的旅行计划 PDF，并转换成 html 格式'
    ]
  },
  {
    name: '数据分析专家', icon: '◈', tags: ['数据洞察', '指标理解', '图表表达'],
    desc: '把数据变成一份能支持判断的分析结果：明确分析目标、搭建指标框架、识别变化与异常，并交付图表和结论报告。',
    examples: [
      '梳理腾讯近期的财报数据，并进行建模',
      '为「xx」App 设计首月数据分析报告',
      '根据"销售额下降"生成一套排查原因的分析框架'
    ]
  },
  {
    name: '小红书文案专家', icon: '♡', tags: ['选题灵感', '内容表达', '标题打磨'],
    desc: '把一个想法发展成更容易被看见、读完和收藏的内容：找到切入角度，完成标题、正文、封面文案和标签。',
    examples: [
      '围绕"一个人如何开始健身"生成 3 个选题方案',
      '为"第一次租房避坑"生成 10 个标题和正文',
      '把"用 AI 做周报"做成一篇小红书图文笔记'
    ]
  },
  {
    name: '周报/工作总结专家', icon: '◒', tags: ['工作梳理', '重点提炼', '汇报表达'],
    desc: '把工作过程整理成有重点的汇报材料：提炼成果、补足表达、区分进展与风险，并交付可直接修改和发送的周报或总结。',
    examples: [
      '生成一份产品经理周报模板',
      '把"项目延期"整理成面向领导的进展汇报',
      '生成一份季度工作总结，突出关键成果和下季度计划'
    ]
  },
  {
    name: '股票研究专家', icon: '📈', tags: ['行情查询', '财务分析', '研报解读'],
    desc: '查询和分析个股、指数与板块信息：覆盖行情、财务报表、研报观点、条件筛选和事件影响，呈现数据与逻辑，不提供买卖建议。',
    examples: [
      '查询宁德时代近期行情与核心财务指标',
      '根据市值、估值和股息率筛选符合条件的股票',
      '整理一则研报对相关标的的影响'
    ]
  },
  {
    name: '科研专家', icon: '🔬', tags: ['文献阅读', '观点整理', '研究框架'],
    desc: '把一个模糊的研究方向推进成可执行的资料包：阅读和筛选文献、提炼观点，并整理研究框架。',
    examples: [
      '围绕 RAG 评估生成一份入门资料包',
      '围绕"人工智能对教育的影响"生成研究问题树和检索方案',
      '整理 AI agent 研究方向的文献清单'
    ]
  },
  {
    name: '算命专家', icon: '🔮', tags: ['轻松解读', '情绪陪伴', '自我探索'],
    desc: '用轻松、有仪式感的互动，帮你把当下的心情和困惑整理成一份可回看的娱乐性解读；不对现实结果作确定判断。',
    examples: [
      '为我生成一份未来一个月的轻松主题解读',
      '围绕"要不要换工作"生成一份娱乐性探索报告',
      '生成一份今日抽牌小卡'
    ]
  },
  {
    name: '求职调研专家', icon: '💼', tags: ['公司了解', '岗位判断', '面试准备'],
    desc: '把求职前的零散搜索整理成一份有来源的公司与岗位简报：梳理业务、岗位重点、面试方向和待核实信息。',
    examples: [
      '生成一份产品经理求职前调研清单',
      '生成一份「目标公司」研究简报模板',
      '为"第一次参加面试"生成公司调研与准备资料包'
    ]
  }
];

const shortcuts = [
  { icon: '✦', text: '做一份年终汇报 PPT', expertIdx: 0 },
  { icon: '◈', text: '分析这份销售数据', expertIdx: 3 },
  { icon: '📈', text: '查宁德时代最新行情', expertIdx: 6 },
  { icon: '♡', text: '写一篇小红书爆款笔记', expertIdx: 4 },
  { icon: '◒', text: '整理本周工作写周报', expertIdx: 5 }
];

const quickExperts = [0, 3, 6];

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
let activeExpert = null;   // 当前选中但未发送的专家索引
let lockedExpert = null;   // 任务已发送，专家锁定

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
  if (lockedExpert !== null) {
    renderExpertBadge(lockedExpert, true);
  } else if (activeExpert !== null) {
    renderExpertBadge(activeExpert, false);
  }
}

function renderExpertBadge(idx, locked) {
  const e = experts[idx];
  const slot = $('expertBadgeSlot');
  if (!slot) return;

  slot.innerHTML = `<div class="input-expert-badge">
    <div class="badge-icon">${e.icon}</div><span>${e.name}</span>${!locked ? '<span class="badge-close">×</span>' : ''}
  </div>`;

  if (!locked) {
    slot.querySelector('.badge-close').onclick = (ev) => {
      ev.stopPropagation();
      clearActiveExpert();
    };
  }

  // 显示锁定提示
  if (locked) {
    const meta = $('inputMeta');
    if (meta && !meta.querySelector('.task-locked-notice')) {
      const notice = document.createElement('div');
      notice.className = 'task-locked-notice';
      notice.innerHTML = `<span class="locked-dot"></span>${e.name} 处理中，换专家将在下个任务生效`;
      meta.prepend(notice);
    }
  }
}

function clearActiveExpert() {
  activeExpert = null;
  const slot = $('expertBadgeSlot');
  if (slot) slot.innerHTML = '';
  // 移除锁定提示
  const notice = document.querySelector('.task-locked-notice');
  if (notice) notice.remove();
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
  input.addEventListener('keydown', ev => { if (ev.key === 'Enter') send.click(); });
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
  sub.innerHTML = quickExperts.map(idx => {
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
  const expertIdx = activeExpert !== null ? activeExpert : lockedExpert;
  if (expertIdx !== null) {
    const e = experts[expertIdx];
    lockedExpert = expertIdx;
    activeExpert = null;
    renderExpertBadge(expertIdx, true);
    $('mainInput').value = '';
    $('mainInput').placeholder = '继续补充需求，或等待专家完成…';
  } else {
    $('mainInput').value = '';
  }
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
      renderExpertBadge(s.expertIdx, false);
      const input = $('mainInput');
      if (input) { input.value = s.text; input.focus(); }
    };
  });
}

/* ========== 专家列表页 ========== */
function showExpertList() {
  currentPage = 'expert';
  $('navExpert').classList.add('active');

  content.innerHTML = `
    <div class="expert-page">
      <div class="expert-page-header">
        <div class="expert-page-title">专家</div>
        <div class="expert-page-sub">把专业的事交给对的人，你只管说需求</div>
      </div>
      <div class="expert-grid">
        ${experts.map((e, i) => `
          <div class="expert-card" data-i="${i}">
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
          </div>
        `).join('')}
      </div>
    </div>`;

  content.querySelectorAll('.expert-card').forEach(el => {
    el.onclick = () => openExpertModal(+el.dataset.i);
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
function startExpert(idx, prompt) {
  const e = experts[idx];

  // 直接新开任务会话，当前任务不受影响
  lockedExpert = null;
  activeExpert = idx;
  showHome();
  setTimeout(() => {
    const input = $('mainInput');
    if (prompt) {
      input.value = prompt;
    } else {
      input.value = '';
      input.focus();
    }
    renderExpertBadge(idx, false);
  }, 50);
}

/* 新建任务：重置锁定状态 */
function newTask() {
  // 新任务时，如果有 activeExpert 待切换则生效
  lockedExpert = null;
  showHome();
  const input = $('mainInput');
  if (input) { input.value = ''; input.focus(); }
}

/* ========== 初始化 ========== */
$('collapseBtn').onclick = () => $('app').classList.toggle('collapsed');
$('navExpert').onclick = () => showExpertList();
$('newTaskBtn').onclick = () => newTask();

showHome();
