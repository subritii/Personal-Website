export interface ProjectEntry {
  title: string;
  status: string;
  repoUrl: string;
  demoUrl: string;
  whyItExists: string;
  decisions: string[];
  stack: string[];
  metrics: string[];
}

export type ProjectFolder = 'AI_ML' | 'Full_Stack' | 'Devops' | 'Azure_Cloud';

export const projects: Record<ProjectFolder, Record<string, ProjectEntry>> = {
  AI_ML: {
    BillBuster: {
      title: 'BillBuster — agentic subscription fighter',
      status: 'Demo Available',
      repoUrl: 'github.com/subritii/Billbuster',
      demoUrl: '',
      whyItExists:
        'Subscriptions hide behind cryptic merchant codes and price hikes that go unnoticed. Built a multi-agent system that decodes charges, catches hikes to the cent, and drafts refund disputes automatically.',
      decisions: [
        'Event-driven architecture over direct agent calls, so agents scale independently through Redis Streams',
        'RAG over vendor ToS + transaction history for dispute drafts, not templated boilerplate',
        'LLM chain-of-thought for merchant decoding (e.g. "BODi*" → Beachbody) instead of a static lookup table',
      ],
      stack: ['LangGraph', 'Claude API', 'FastAPI', 'PostgreSQL', 'Redis', 'Plaid API', 'Playwright', 'Docker'],
      metrics: ['5 specialized agents', '8 event types', 'Price-hike detection to $0.01'],
    },
  },
  Full_Stack: {},
  Devops: {},
  Azure_Cloud: {},
};
