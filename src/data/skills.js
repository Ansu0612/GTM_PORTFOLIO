// Levels are qualitative, not fake percentages: FOUNDATION / STRONG / ADVANCED
export const skillCategories = [
  {
    name: 'GTM Strategy',
    skills: [
      { name: 'ICP Definition', level: 'STRONG' },
      { name: 'TAM Research', level: 'STRONG' },
      { name: 'Segmentation', level: 'STRONG' },
      { name: 'GTM Hypotheses', level: 'STRONG' },
      { name: 'Funnel Thinking', level: 'FOUNDATION' },
    ],
  },
  {
    name: 'Account Intelligence',
    skills: [
      { name: 'Account Research', level: 'STRONG' },
      { name: 'Data Enrichment', level: 'STRONG' },
      { name: 'Firmographic Analysis', level: 'STRONG' },
      { name: 'Persona / Decision-Maker Research', level: 'STRONG' },
      { name: 'Account Scoring & Prioritization', level: 'STRONG' },
    ],
  },
  {
    name: 'Signals',
    skills: [
      { name: 'Buying Signals', level: 'STRONG' },
      { name: 'Trigger-Event Research', level: 'FOUNDATION' },
      { name: 'Signal-to-Action Mapping', level: 'STRONG' },
    ],
  },
  {
    name: 'ABM + Outbound',
    skills: [
      { name: 'ABM Strategy', level: 'FOUNDATION' },
      { name: 'Personalization', level: 'FOUNDATION' },
      { name: 'Outbound Research', level: 'STRONG' },
      { name: 'Sequencing', level: 'FOUNDATION' },
      { name: 'Campaign Design', level: 'FOUNDATION' },
    ],
  },
  {
    name: 'Automation',
    skills: [
      { name: 'Clay', level: 'STRONG' },
      { name: 'Make', level: 'STRONG' },
      { name: 'n8n', level: 'FOUNDATION' },
      { name: 'AI-Assisted Research', level: 'STRONG' },
      { name: 'Workflow Automation / APIs', level: 'STRONG' },
    ],
  },
  {
    name: 'Data + RevOps',
    skills: [
      { name: 'SQL / MySQL', level: 'ADVANCED' },
      { name: 'Excel / Power Query', level: 'ADVANCED' },
      { name: 'Power BI', level: 'STRONG' },
      { name: 'AWS QuickSight', level: 'STRONG' },
      { name: 'Python', level: 'STRONG' },
      { name: 'Looker Studio', level: 'STRONG' },
      { name: 'Google Analytics (GA4)', level: 'FOUNDATION' },
      { name: 'Revenue Analytics & KPI Reporting', level: 'STRONG' },
    ],
  },
]

export const gtmOperatingSystem = [
  { layer: 'INPUT', nodes: ['Market', 'ICP', 'Accounts'] },
  { layer: 'INTELLIGENCE', nodes: ['Research', 'Signals', 'Scoring'] },
  { layer: 'EXECUTION', nodes: ['Activation', 'Pipeline'] },
  { layer: 'FEEDBACK LOOP', nodes: ['Measurement', 'Learning', 'Iteration'] },
]

// Capability-oriented view for the Power-Ups section, per audit feedback —
// "what I can build" rather than a flat skills list.
export const gtmCapabilities = [
  {
    name: 'ICP & TAM',
    chain: ['Define ICP', 'Build TAM', 'Segment', 'Prioritize'],
    tools: ['ICP Definition', 'TAM Research', 'Segmentation', 'GTM Hypotheses', 'Funnel Thinking'],
  },
  {
    name: 'Account Intelligence',
    chain: ['Research', 'Enrich', 'Identify Personas', 'Score Accounts'],
    tools: ['Account Research', 'Data Enrichment', 'Firmographic Analysis', 'Persona Research', 'Account Scoring'],
  },
  {
    name: 'Signal Intelligence',
    chain: ['Trigger', 'Context', 'Intent', 'Action'],
    tools: ['Buying Signals', 'Trigger-Event Research', 'Signal-to-Action Mapping'],
  },
  {
    name: 'ABM & Outbound',
    chain: ['Account Selection', 'Personalization', 'Sequencing'],
    tools: ['ABM Strategy', 'Personalization', 'Outbound Research', 'Sequencing', 'Campaign Design'],
  },
  {
    name: 'Automation',
    chain: ['Research', 'Enrichment', 'Routing', 'Activation'],
    tools: ['Clay', 'Make', 'n8n', 'AI-Assisted Research', 'Workflow Automation'],
  },
  {
    name: 'Revenue Analytics',
    chain: ['Pipeline', 'Conversion', 'Performance', 'Iteration'],
    tools: ['SQL / MySQL', 'Power BI', 'AWS QuickSight', 'Python', 'Looker Studio', 'KPI Reporting'],
  },
]
