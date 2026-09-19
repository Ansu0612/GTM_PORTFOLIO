// Every project is data, not hard-coded markup — add a new project by adding
// an object here. ProjectDetail.jsx renders any project from this shape.
//
// track: "proof-of-work" | "independent" | "analytics"
// locked: true hides the "Play Quest" CTA and marks it as not-yet-built

export const projects = [
  {
    id: 'oliv-ai',
    questNumber: 'QUEST 01',
    track: 'proof-of-work',
    accent: 'pink',
    title: 'Oliv.ai',
    subtitle: 'GTM Intelligence Engine',
    tagline: 'Turning a broad TAM into a focused GTM target list.',
    tags: ['ICP', 'TAM', 'Account Intelligence', 'Research', 'Scoring', 'Prioritization'],
    visual: { kind: 'funnel', steps: ['1,871 TAM', '200 ICP-fit', '19 Tier-1', '5 Priority'] },
    coverImage: '/images/projects/oliv-ai/03-powerbi-gtm-overview.png',
    screenshots: [
      { src: '/images/projects/oliv-ai/01-clay-tam-workflow.png', caption: 'Clay workflow: sourcing and enriching the ICP-fit company table' },
      { src: '/images/projects/oliv-ai/02-clay-decision-makers.png', caption: 'Enriched decision-maker table for the highest-priority accounts' },
      { src: '/images/projects/oliv-ai/03-powerbi-gtm-overview.png', caption: 'GTM Intelligence dashboard: account tiers and GTM pain signals' },
      { src: '/images/projects/oliv-ai/04-powerbi-icp-signal.png', caption: 'ICP fit vs. GTM signal analysis, scored by account tier' },
      { src: '/images/projects/oliv-ai/05-powerbi-account-prioritization.png', caption: 'Final account prioritization, ranked by priority score' },
    ],
    description:
      "A GTM system built using Oliv.ai's real company context, narrowing a broad company universe down to a short list of accounts worth acting on first.",
    disclaimer:
      "This is GTM proof-of-work built around Oliv.ai's real market and use case — not a paid engagement or employment with Oliv.ai. No pipeline, revenue or meeting outcomes are claimed.",
    mission:
      "The challenge wasn't simply finding companies. It was figuring out which accounts actually fit the ICP, showed meaningful context and deserved GTM attention first.",
    flow: ['TAM', 'ICP Filter', 'Enrichment', 'Account Research', 'Scoring', 'Prioritization', 'GTM Hypothesis'],
    sections: [
      {
        title: 'The Mission',
        body: [
          'Oliv.ai needed a way to turn a large, unfiltered company universe into a short list an outbound or sales team could act on immediately — not a spreadsheet of names with no reasoning behind the order.',
        ],
      },
      {
        title: 'The Market',
        body: [
          'The starting universe was 1,871 companies — the broad total addressable market before any qualification was applied.',
        ],
      },
      {
        title: 'The ICP',
        body: [
          'I defined ICP-fit criteria based on Oliv.ai\'s product use case and buyer profile, then filtered the TAM against it. That waterfall narrowed 1,871 companies down to 200 ICP-fit accounts.',
        ],
      },
      {
        title: 'Account Intelligence',
        body: [
          'Each ICP-fit account was enriched using Clay and AI-assisted research — firmographic detail, relevant context and the signals that mattered for prioritization.',
        ],
      },
      {
        title: 'Signals',
        body: [
          'Enrichment surfaced the contextual signals — company stage, relevant initiatives, decision-maker presence — that separated a generically-qualified account from one worth prioritizing now.',
        ],
      },
      {
        title: 'Scoring',
        body: [
          'Scoring the 200 ICP-fit accounts against fit and signal strength produced 19 Tier-1 accounts, and a further prioritization pass identified 5 accounts as the highest-priority targets, complete with decision-makers and buying signals attached.',
        ],
      },
      {
        title: 'The GTM System',
        body: [
          'Market → ICP Filter → Enrichment → Account Research → Scoring → Prioritization → GTM Hypothesis — a repeatable workflow rather than a one-off list.',
        ],
      },
      {
        title: 'Output',
        body: [
          '1,871 → 200 → 19 → 5. A defensible, ranked account list a sales or GTM team could pick up and start working immediately.',
        ],
      },
      {
        title: 'GTM Action',
        body: [
          'The 5 priority accounts come with identified decision-makers and buying signals attached — ready for an outbound or ABM motion to act on without re-doing the research.',
        ],
      },
      {
        title: 'What I Learned',
        body: [
          'A good TAM isn\'t a smaller list — it\'s a list with reasoning attached at every step, so whoever acts on it knows exactly why an account is on it.',
        ],
      },
    ],
    tools: ['Clay', 'AI-assisted research', 'ICP waterfall methodology'],
    links: { linkedin: '', loom: '', notion: '' },
  },
  {
    id: 'cheerio-ai',
    questNumber: 'QUEST 02',
    track: 'proof-of-work',
    accent: 'blue',
    title: 'Cheerio AI',
    subtitle: 'Signal Intelligence Engine',
    tagline: 'Finding the right GTM signal for the right industry.',
    tags: ['Signal Research', 'Industry Research', 'GTM Hypotheses', 'Account Intelligence'],
    visual: { kind: 'chain', steps: ['Industry', 'Problem', 'Workflow', 'Signal'] },
    coverImage: '/images/projects/cheerio-ai/01-clay-use-case-mapper-overview.png',
    screenshots: [
      { src: '/images/projects/cheerio-ai/01-clay-use-case-mapper-overview.png', caption: 'Clay workbook: GTM Use-Case Mapper sourcing prospects across D2C, BFSI, Real Estate and Healthcare' },
      { src: '/images/projects/cheerio-ai/02-prospects-d2c.png', caption: 'Prospects — D2C: sourced and enriched company table' },
      { src: '/images/projects/cheerio-ai/03-prospects-bfsi.png', caption: 'Prospects — BFSI: sourced and enriched company table' },
      { src: '/images/projects/cheerio-ai/04-mvp-gtm-opportunity-table.png', caption: 'MVP — GTM Opportunity table: primary use case, workflow and research confidence per account' },
    ],
    description:
      "A signal-research framework built around Cheerio AI's real company context, showing how the right buying signal changes depending on the industry a prospect operates in.",
    disclaimer:
      "This is GTM proof-of-work built by studying Cheerio AI's real company context and use cases. It was shared directly with the Cheerio AI team. No employment, paid engagement or business outcome is claimed.",
    mission:
      "A single generic buying-signal framework does not work equally well across industries. The goal was to design a research framework that adapts the signal to the industry instead of forcing one signal template onto every account.",
    flow: ['Industry', 'Business Problem', 'Customer Workflow', 'Potential Trigger', 'Relevant Signal', 'GTM Action'],
    sections: [
      {
        title: 'The Mission',
        body: [
          'Cheerio AI serves multiple industries, each with a different customer workflow and a different reason to engage. Treating every prospect the same way wastes the context that\'s actually available.',
        ],
      },
      {
        title: 'The Market',
        body: [
          'I scoped the research across four industry segments where Cheerio AI\'s conversational AI product applies in meaningfully different ways: D2C/E-commerce, BFSI/MFI, Real Estate, and Healthcare.',
        ],
      },
      {
        title: 'Industry Research',
        body: [
          'D2C/E-commerce — personalized product discovery and conversational commerce, where the workflow centers on guiding a shopper from browsing to checkout.',
          'BFSI/MFI — customer engagement and retention, where the workflow centers on ongoing servicing rather than a single transaction.',
          'Real Estate — customer engagement and streamlined communication, where the workflow centers on long consideration cycles with many touchpoints.',
          'Healthcare — patient/customer engagement and retention, where the workflow centers on appointment and follow-up communication.',
        ],
      },
      {
        title: 'Signals',
        body: [
          'For each industry I mapped Business Problem → Customer Workflow → Potential Trigger → Relevant Signal → GTM Action, so the signal chosen for an account is tied to that industry\'s actual workflow rather than a generic checklist.',
        ],
      },
      {
        title: 'The GTM System',
        body: [
          'The output is a reusable framework: given an industry, a GTM team can trace the business problem through to the specific trigger worth watching for and the action to take when it fires.',
        ],
      },
      {
        title: 'GTM Action',
        body: [
          'Each industry lane ends in a distinct GTM action rather than a shared template — for example, a workflow-adoption trigger in BFSI calls for a different opener than a cart-behavior trigger in D2C.',
        ],
      },
      {
        title: 'What I Learned',
        body: [
          'Signal research is only useful when it\'s anchored to how a specific industry\'s customers actually behave — the same "buying signal" label can mean two very different things depending on the workflow behind it.',
        ],
      },
    ],
    tools: ['Industry research', 'AI-assisted signal mapping', 'Qualitative account research'],
    links: { linkedin: '', loom: '', notion: '' },
  },
  {
    id: 'eubrics',
    questNumber: 'QUEST 03',
    track: 'proof-of-work',
    accent: 'purple',
    title: 'Eubrics',
    subtitle: 'ABM + Outbound Engine',
    tagline: 'Designing a signal-led ABM and outbound motion.',
    tags: ['ICP', 'ABM', 'Account Research', 'Signals', 'Personalization', 'Outbound', 'Measurement'],
    visual: { kind: 'chain', steps: ['ICP', 'Signal', 'Action'] },
    coverImage: '/images/projects/eubrics/02-clay-finance-outbound-overview.png',
    screenshots: [
      { src: '/images/projects/eubrics/02-clay-finance-outbound-overview.png', caption: 'Clay workbook: Finance Outbound GTM System — prospecting and execution/outbound layers' },
      { src: '/images/projects/eubrics/03-prospecting-layer-insurance-companies.png', caption: 'Prospecting layer: sourced US insurance companies' },
      { src: '/images/projects/eubrics/04-execution-outbound-layer-personalization.png', caption: 'Execution/outbound layer: AI-personalized hooks and email drafts per contact, ready to send' },
      { src: '/images/projects/eubrics/01-n8n-insurance-outbound-automation.png', caption: 'n8n workflow: Insurance Outbound Automation — routing, personalization and email send steps' },
    ],
    description:
      'A hiring assignment for a GTM Engineer & Marketing role at Eubrics, an AI sales-enablement platform: an ABM plan for US Financial Services and a live outbound campaign build for US insurance companies.',
    disclaimer:
      'This was a hiring assignment for Eubrics, not a completed client engagement or employment. No pipeline, meetings or revenue outcomes are claimed.',
    mission:
      'The assignment had two parts: design an ABM marketing plan targeted at US Financial Services accounts, and build a live outbound campaign scoped to US insurance companies.',
    flow: ['ICP', 'Accounts', 'Research', 'Signals', 'Prioritization', 'Personalization', 'Activation', 'Measurement'],
    sections: [
      {
        title: 'The Problem',
        body: [
          'Eubrics needed a credible plan for entering US Financial Services with ABM, plus a working outbound campaign targeted at US insurance companies as a live proof of execution.',
        ],
      },
      {
        title: 'ICP',
        body: [
          'Defined ICP criteria for US Financial Services and, within that, the narrower insurance-company profile the live campaign would target.',
        ],
      },
      {
        title: 'Account Universe',
        body: [
          'Built the account list for the insurance-focused outbound campaign against that ICP definition.',
        ],
      },
      {
        title: 'Research',
        body: [
          'Researched target accounts and relevant decision-makers to ground both the ABM plan and the outbound sequence in real company context rather than generic messaging.',
        ],
      },
      {
        title: 'Buying Signals',
        body: [
          'Identified the signals relevant to US Financial Services and insurance accounts specifically — the events and context that make an account worth prioritizing now.',
        ],
      },
      {
        title: 'Account Prioritization',
        body: [
          'Ranked the insurance-company account list so the outbound campaign started with the accounts most likely to respond.',
        ],
      },
      {
        title: 'Personalization',
        body: [
          "Personalization shouldn't start with the person's first name. It should start with why this account matters now — the ABM plan and outbound copy were built around that account-level context.",
        ],
      },
      {
        title: 'ABM / Outbound Activation',
        body: [
          'Translated the ICP, research and signals into an ABM plan for Financial Services and a live outbound sequence for the insurance segment.',
        ],
      },
      {
        title: 'Measurement',
        body: [
          'The plan included how the campaign would be measured going forward — the assignment itself did not run long enough to report a completed outcome.',
        ],
      },
    ],
    tools: ['ABM planning', 'Account research', 'Outbound sequencing'],
    links: { linkedin: '', loom: '', notion: '' },
  },
]

export const sideQuests = [
  {
    id: 'interview-buddy',
    questNumber: 'SIDE QUEST',
    track: 'independent',
    accent: 'green',
    title: 'AI Interview Buddy',
    subtitle: 'AI + Product Thinking',
    tagline: 'A no-code workflow that automates interview-prep research.',
    tags: ['Make', 'APIs', 'Google Sheets', 'No-Code Automation'],
    visual: { kind: 'chain', steps: ['Role', 'Context', 'Question', 'Response', 'Feedback', 'Improve'] },
    description:
      'An independent project showing product thinking and AI-assisted workflow design outside of a GTM-specific use case.',
    disclaimer: 'Independent project, built and owned end-to-end — not a client or employer engagement.',
    mission:
      'Manually collecting and structuring interview questions for a given role is repetitive. The goal was a repeatable, no-code workflow that does it automatically.',
    flow: ['Role', 'Context', 'Question', 'Response', 'Feedback', 'Improve'],
    sections: [
      {
        title: 'The Build',
        body: [
          'Built a no-code AI interview-prep workflow in Make, connecting APIs and Google Sheets to automate the collection of real interview questions for a given role.',
        ],
      },
      {
        title: 'The Workflow',
        body: [
          'Orchestrated a repeatable pipeline that reduces manual research and delivers structured interview-preparation content without a developer writing custom backend code.',
        ],
      },
      {
        title: 'Why It Matters',
        body: [
          'It\'s the same instinct GTM Engineering requires: turn a manual, repetitive research task into a system that runs on its own.',
        ],
      },
    ],
    tools: ['Make', 'APIs', 'Google Sheets'],
    links: { linkedin: '', loom: '' },
  },
]

export const analyticsQuests = [
  {
    id: 'digital-word-of-mouth',
    questNumber: 'ANALYTICS QUEST',
    track: 'analytics',
    accent: 'blue',
    title: 'Digital Word of Mouth',
    subtitle: 'Turning digital performance data into useful insights.',
    tagline: 'Data Analyst Internship',
    tags: ['GA4', 'Google Search Console', 'Looker Studio'],
    visual: { kind: 'chain', steps: ['Data', 'Analysis', 'Dashboard', 'Insight', 'Decision'] },
    description:
      'Data Analyst internship focused on turning website and search performance data into dashboards the team could act on.',
    disclaimer: 'Internship experience — described here as it applies to GTM systems thinking.',
    mission:
      'Digital performance data (site traffic, search behavior) is only useful once it\'s structured into something a team can actually make a decision from.',
    flow: ['Data', 'Analysis', 'Dashboard', 'Insight', 'Decision'],
    sections: [
      {
        title: 'The Role',
        body: [
          'Worked as a Data Analyst Intern, pulling performance data from GA4 and Google Search Console and building it out into Looker Studio dashboards for the team.',
        ],
      },
      {
        title: 'Why It Matters to GTM',
        body: [
          'Modern GTM systems generate huge amounts of data. The value isn\'t simply collecting it — it\'s turning it into a decision, which is exactly the discipline this internship built.',
        ],
      },
    ],
    tools: ['GA4', 'Google Search Console', 'Looker Studio'],
    links: {},
  },
]

export const lockedCaseStudies = {
  title: 'Real-World GTM Case Studies',
  subtitle: 'Coming soon',
  copy:
    "The next levels won't be simulations. I'm working toward documenting real GTM problems, experiments and outcomes with teams.",
  flow: ['Client Problem', 'Real Account Data', 'Real GTM Workflow', 'Real Experiment', 'Real Outcome'],
}

export function findProject(id) {
  return [...projects, ...sideQuests, ...analyticsQuests].find((p) => p.id === id)
}

export function allQuests() {
  return [...projects, ...sideQuests, ...analyticsQuests]
}
