import { useEffect, useState } from 'react'
import './App.css'

const links = {
  dinq: 'http://aiagentswitcher.com/dinq/',
  dinqSales: '/dinq-sales.html',
  poker: 'http://aiagentswitcher.com/aipokerclub',
  lobster: 'http://aiagentswitcher.com/lobster',
  neon: 'http://aiagentswitcher.com/neon-ebb/',
  github: 'https://github.com/BillllX',
  email: 'mailto:billfighting@gmail.com',
}

const copy = {
  zh: {
    pageTitle: 'Bill Xu | 游戏人生与 AI 资源向导',
    metaDescription: 'Bill Xu 的个人主页：金融科技、AI 咨询、游戏化产品和个人项目入口。',
    nav: ['现在在做', '作品', '关于我', '组队'],
    heroEyebrow: 'Bill Xu · 游戏人生玩家 / AI 资源向导',
    heroTitle: '把人生当成开放世界，把业务、AI 和产品都当成可以组队打的副本。',
    heroText:
      '我从银行系统工程师一路打到金融科技业务一线，也经历过互联网金融、隐私计算、助贷机构合作和 AI Agent 实验。这个首页是我的个人入口：朋友可以了解我现在在做什么，合作伙伴可以快速看到我能一起打哪些怪。',
    heroPrimary: '看我现在在做什么',
    heroSecondary: '找我组队',
    heroImageAlt: 'Bill Xu 游戏人生封面',
    heroCardTitle: '存档文件',
    heroCardMeta: '金融科技 / AI / 游戏人生',
    worksEyebrow: '项目 / 道具栏',
    aboutEyebrow: '关于我 / 存档',
    partyEyebrow: '一起组队',
    recordLabel: '备案信息',
    aboutTitle: '自我介绍',
    aboutLead:
      '现在首页不再只是一段酷炫封面，而是一个信息更密的个人存档。我的底色仍然是“游戏人生”：每段经历都是一关，每个项目都是一次组队，每个新方向都像新地图。',
    character: {
      title: '角色档案',
      className: '金融科技老玩家 / AI 资源向导 / 产品实验者',
      traits: ['懂金融业务', '懂 AI 生态', '喜欢游戏系统', '能做原型', '擅长资源撮合'],
    },
    timeline: [
      ['Lv.01 银行系统', '工商银行软件开发中心，网络银行、手机银行和金融核心应用。'],
      ['Lv.02 互联网金融', '运营、支付、资金商务和机构合作，团队和交易规模都打过硬仗。'],
      ['Revive 2019', '心肌梗死后按下 Continue，人生玩法从“冲关”变成“好好玩”。'],
      ['Lv.03 隐私计算', '参与金融机构拓展、工行白皮书和浦发隐私计算基座设计。'],
      ['Lv.04 Fintopia', '助贷业务机构合作和牌照相关管理，理解资源、合规和业务节奏。'],
      ['Lv.05 AI 新大陆', '现在关注 AI 专家网络、厂商情报、资源撮合和原型验证。'],
    ],
    nowTitle: '现在在做',
    nowKicker: 'DINQ / AI Expert Consulting',
    nowText:
      '我正在围绕 DINQ 做 AI 专家咨询和人才搜索相关服务：连接一线 AI 研究员、开发者和产业决策者，帮助客户快速找到真正懂问题的人。',
    nowBullets: [
      'DINQ 是一站式 AI 人才搜索平台，整合 GitHub、HuggingFace、LinkedIn、Google Scholar 等超 10 亿条数据。',
      '资源池覆盖 5,000+ 微信私域社群、50,000+ 自媒体矩阵粉丝、80+ 技术 Talk 和 1,000+ 可调度专家。',
      '标准交付包括 AI Expert Call、AI DD Sprint 和 MVP Validation。',
      '适合 VC/PE、产业集团、咨询公司和正在寻找 AI 路线判断的企业团队。',
    ],
    nowCta: '查看 DINQ 页面',
    nowSalesCta: '查看销售版页面',
    worksTitle: '我的作品',
    worksLead: '这些项目体现了我喜欢的方向：AI Agent、游戏化系统、个人智能助手和互动内容。',
    works: [
      {
        title: 'AI Poker Lab',
        tag: 'AI Agent / Poker Arena',
        text: '训练自己的 AI Poker 玩家，观察实验桌和排行榜，也可以把本地 Agent 接进牌桌竞技。',
        bullets: ['AI 玩家卡片', 'Lab Tables', '本地 Agent 接入', 'Texas Poker Agent Skill'],
        link: links.poker,
        action: '打开 AI Poker Lab',
      },
      {
        title: '小龙虾 AI 问答助手',
        tag: 'Personal AI / WeChat Companion',
        text: '一个赛博小龙虾接入终端：输入手机号自动分配 Agent，微信扫码后进入你的聊天通道。',
        bullets: ['自动分配 Agent', '微信通道', '上下文记忆', '30 秒接入'],
        link: links.lobster,
        action: '查看小龙虾认领',
      },
      {
        title: 'Neon Vow',
        tag: 'Interactive Manga / Mobile Story',
        text: '一个移动端优先的互动小说实验，从南港霓虹雨夜开始，用点击推进漫画式叙事。',
        bullets: ['移动端阅读', '点击推进', '霓虹叙事', '互动小说实验'],
        link: links.neon,
        action: '查看 Neon Vow',
      },
    ],
    partyTitle: '一起组队',
    partyText:
      '如果你是朋友、合作伙伴，或者正在打 AI、业务、资源、产品这些新副本，可以找我聊聊。我不保证一刀秒 Boss，但我擅长看地图、找队友、判断打法。',
    partyPrimary: '发邮件给 Bill',
    partySecondary: '看 GitHub',
  },
  en: {
    pageTitle: 'Bill Xu | AI Product Builder',
    metaDescription: 'Bill Xu homepage for fintech, AI consulting, game-like products, and personal projects.',
    nav: ['Now', 'Works', 'About', 'Party'],
    heroEyebrow: 'Bill Xu · life-as-a-game player / AI resource guide',
    heroTitle: 'I treat life as an open-world game, and business, AI, and products as quests worth playing together.',
    heroText:
      'I started as a banking systems engineer and moved into fintech business leadership, internet finance, privacy computing, loan facilitation partnerships, and AI Agent experiments. This homepage is my personal hub for friends and partners.',
    heroPrimary: 'What I am doing now',
    heroSecondary: 'Team up',
    heroImageAlt: 'Bill Xu life game cover',
    heroCardTitle: 'Save File',
    heroCardMeta: 'Fintech / AI / Game Life',
    worksEyebrow: 'Projects / Inventory',
    aboutEyebrow: 'About / Save File',
    partyEyebrow: 'Join Party',
    recordLabel: 'Regulatory filing information',
    aboutTitle: 'About Me',
    aboutLead:
      'This homepage is no longer just a cool cover. It is a denser save file. The core theme is still life as a game: every experience is a level, every project is a party, every new direction is a new map.',
    character: {
      title: 'Character Profile',
      className: 'fintech veteran / AI resource guide / product experimenter',
      traits: ['financial business sense', 'AI ecosystem radar', 'game-system mindset', 'prototype builder', 'resource matcher'],
    },
    timeline: [
      ['Lv.01 Banking Systems', 'ICBC Software Development Center, online banking, mobile banking, and core financial apps.'],
      ['Lv.02 Internet Finance', 'Operations, payments, capital partnerships, and institutional cooperation at real scale.'],
      ['Revive 2019', 'After a myocardial infarction, I pressed Continue and changed how I play the game.'],
      ['Lv.03 Privacy Computing', 'Financial institution BD, ICBC white paper, and SPDB privacy computing platform design.'],
      ['Lv.04 Fintopia', 'Loan facilitation partnerships and license-related management across resources, compliance, and timing.'],
      ['Lv.05 AI Continent', 'Now focused on AI expert networks, vendor intelligence, resource matching, and prototype validation.'],
    ],
    nowTitle: 'Now',
    nowKicker: 'DINQ / AI Expert Consulting',
    nowText:
      'I am working around DINQ on AI expert consulting and talent-search services: connecting frontline AI researchers, developers, and industry decision makers.',
    nowBullets: [
      'DINQ is an AI talent-search platform integrating 1B+ records from GitHub, HuggingFace, LinkedIn, Google Scholar, and more.',
      'Resources include 5,000+ WeChat private communities, 50,000+ media followers, 80+ technical talks, and 1,000+ reachable experts.',
      'Standard offerings include AI Expert Call, AI DD Sprint, and MVP Validation.',
      'Useful for VC/PE, industrial groups, consulting firms, and companies seeking AI roadmap judgment.',
    ],
    nowCta: 'View DINQ page',
    nowSalesCta: 'View sales page',
    worksTitle: 'Works',
    worksLead: 'These projects show what I like building: AI Agents, game-like systems, personal assistants, and interactive content.',
    works: [
      {
        title: 'AI Poker Lab',
        tag: 'AI Agent / Poker Arena',
        text: 'Train your own AI Poker player, watch lab tables and rankings, or connect a local Agent into the arena.',
        bullets: ['AI player cards', 'Lab Tables', 'local Agent connection', 'Texas Poker Agent Skill'],
        link: links.poker,
        action: 'Open AI Poker Lab',
      },
      {
        title: 'Lobster AI Assistant',
        tag: 'Personal AI / WeChat Companion',
        text: 'A cyber lobster onboarding terminal: enter a phone number, get an Agent assigned, scan WeChat, and start chatting.',
        bullets: ['auto Agent assignment', 'WeChat channel', 'context memory', '30-second onboarding'],
        link: links.lobster,
        action: 'View Lobster AI',
      },
      {
        title: 'Neon Vow',
        tag: 'Interactive Manga / Mobile Story',
        text: 'A mobile-first interactive fiction experiment that opens in a neon rainy night and advances like a clickable comic.',
        bullets: ['mobile reading', 'click-to-advance', 'neon storytelling', 'interactive fiction experiment'],
        link: links.neon,
        action: 'View Neon Vow',
      },
    ],
    partyTitle: 'Join My Party',
    partyText:
      'If you are a friend, partner, or someone fighting AI, business, resource, or product quests, come talk to me. I cannot one-shot every boss, but I am good at reading maps, finding teammates, and choosing tactics.',
    partyPrimary: 'Email Bill',
    partySecondary: 'View GitHub',
  },
} satisfies Record<'zh' | 'en', object>

function getLocale(): 'zh' | 'en' {
  const languages = typeof navigator === 'undefined' ? [] : [navigator.language, ...(navigator.languages ?? [])]
  return languages.some((language) => language?.toLowerCase().startsWith('zh')) ? 'zh' : 'en'
}

function App() {
  const [locale] = useState<'zh' | 'en'>(() => getLocale())
  const c = copy[locale]

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
    document.title = c.pageTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', c.metaDescription)
  }, [c.metaDescription, c.pageTitle, locale])

  return (
    <main className="home-shell">
      <header className="top-nav">
        <a className="brand" href="#top">
          <span>BX</span>
          Bill Xu
        </a>
        <nav>
          <a href="#now">{c.nav[0]}</a>
          <a href="#works">{c.nav[1]}</a>
          <a href="#about">{c.nav[2]}</a>
          <a href="#party">{c.nav[3]}</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{c.heroEyebrow}</p>
          <h1>{c.heroTitle}</h1>
          <p>{c.heroText}</p>
          <div className="actions">
            <a className="button primary" href="#now">{c.heroPrimary}</a>
            <a className="button" href="#party">{c.heroSecondary}</a>
          </div>
        </div>
        <div className="hero-card">
          <img src="/comic-00-start.webp" alt={c.heroImageAlt} />
          <div>
            <strong>{c.heroCardTitle}</strong>
            <span>{c.heroCardMeta}</span>
          </div>
        </div>
      </section>

      <section className="section now-section" id="now">
        <div className="section-head">
          <p className="eyebrow">{c.nowKicker}</p>
          <h2>{c.nowTitle}</h2>
          <p>{c.nowText}</p>
        </div>
        <div className="now-panel">
          <div className="now-logo">DINQ</div>
          <ul>
            {c.nowBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="now-actions">
            <a className="text-link" href={links.dinq} target="_blank" rel="noreferrer">
              {c.nowCta}
            </a>
            <a className="text-link" href={links.dinqSales}>
              {c.nowSalesCta}
            </a>
          </div>
        </div>
      </section>

      <section className="section works-section" id="works">
        <div className="section-head">
          <p className="eyebrow">{c.worksEyebrow}</p>
          <h2>{c.worksTitle}</h2>
          <p>{c.worksLead}</p>
        </div>
        <div className="works-grid">
          {c.works.map((work, index) => (
            <article className="work-card" key={work.title}>
              <div className="work-index">0{index + 1}</div>
              <p className="eyebrow">{work.tag}</p>
              <h3>{work.title}</h3>
              <p>{work.text}</p>
              <div className="trait-list">
                {work.bullets.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a className="text-link" href={work.link} target="_blank" rel="noreferrer">
                {work.action}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-head">
          <p className="eyebrow">{c.aboutEyebrow}</p>
          <h2>{c.aboutTitle}</h2>
          <p>{c.aboutLead}</p>
        </div>
        <div className="about-grid">
          <article className="profile-card">
            <p className="eyebrow">{c.character.title}</p>
            <h3>Bill Xu</h3>
            <p>{c.character.className}</p>
            <div className="trait-list">
              {c.character.traits.map((trait) => (
                <span key={trait}>{trait}</span>
              ))}
            </div>
          </article>
          <div className="timeline">
            {c.timeline.map(([title, text]) => (
              <article key={title}>
                <strong>{title}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="party-section" id="party">
        <p className="eyebrow">{c.partyEyebrow}</p>
        <h2>{c.partyTitle}</h2>
        <p>{c.partyText}</p>
        <div className="actions">
          <a className="button primary" href={links.email}>{c.partyPrimary}</a>
          <a className="button" href={links.github} target="_blank" rel="noreferrer">{c.partySecondary}</a>
        </div>
      </section>

      <footer className="record-footer" aria-label={c.recordLabel}>
        <a href="https://beian.mps.gov.cn/#/query/webSearch?code=11010202011332" target="_blank" rel="noreferrer">
          京公网安备11010202011332号
        </a>
        <span>·</span>
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
          京ICP备2026016839号-1
        </a>
      </footer>
    </main>
  )
}

export default App
