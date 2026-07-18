export interface AgentEntry {
  name: string;
  trigger: string;
  description: string;
}

export interface EventContractEntry {
  event: string;
  consumer: string;
}

export interface ProjectEntry {
  title: string;
  status: string;
  repoUrl: string;
  demoUrl: string;
  whyItExists: string;
  decisions: string[];
  stack: string[];
  metrics: string[];
  architecture?: string;
  agents?: AgentEntry[];
  eventContract?: EventContractEntry[];
  decisionDeepDive?: string;
}

export type ProjectFolder = 'AI_ML' | 'Full_Stack' | 'Devops' | 'Azure_Cloud';

export const projects: Record<ProjectFolder, Record<string, ProjectEntry>> = {
  AI_ML: {
    BillBuster: {
      title: 'BillBuster: agentic subscription fighter',
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
      metrics: ['5 specialized agents', '8 event types', '$0.01 min price hike detected'],
      architecture:
        'Gmail and Plaid feed raw transactions and emails into an Ingestion Agent, which normalizes and deduplicates them. Everything downstream flows through a central Orchestrator: an event bus plus state store that routes typed events to three specialized agents running in parallel. Their outputs converge on a Notification Agent, which pushes alerts, cancel links, or drafted refund emails back to the user.',
      agents: [
        {
          name: 'Ghost Plan Detector',
          trigger: 'TRANSACTIONS_INGESTED event',
          description:
            'Decodes merchant strings like "BODi*" into "Beachbody" using LLM chain of thought reasoning plus embedding similarity against known merchant patterns.',
        },
        {
          name: 'Guardian Agent',
          trigger: 'SUBSCRIPTION_CLASSIFIED event, plus daily cron',
          description:
            'Compares each new charge against a stored baseline price, tracks billing countdowns, and calculates a "kill switch window" (the safe period to cancel before the next charge).',
        },
        {
          name: 'Refund Recoup Agent',
          trigger: 'DISPUTE_INITIATED event',
          description:
            'Retrieves relevant transaction history and scraped vendor ToS via RAG, then drafts a dispute email grounded in that evidence rather than a generic template.',
        },
        {
          name: 'Notification Agent',
          trigger: 'any alert type event',
          description:
            "Routes each alert to push, email, or in app channels based on user preferences, with quiet hours and deduplication logic so repeat alerts don't spam the user.",
        },
      ],
      eventContract: [
        { event: 'TRANSACTIONS_INGESTED', consumer: 'Orchestrator' },
        { event: 'SUBSCRIPTION_CLASSIFIED', consumer: 'Orchestrator' },
        { event: 'PRICE_HIKE_DETECTED', consumer: 'Notification Agent' },
        { event: 'DISPUTE_DRAFT_READY', consumer: 'Notification Agent' },
        { event: 'KILL_SWITCH_STATUS_UPDATE', consumer: 'Orchestrator' },
      ],
      decisionDeepDive:
        "I used Redis Streams for the event bus instead of a simpler pub/sub setup. Pub/sub drops messages if a consumer is offline when they're published, which is a real risk here since agents run on different triggers (some event driven, some cron based) and won't always be listening at the same moment. Streams persist events and let each agent track its own read position, so a delayed or restarted agent still catches up on everything it missed instead of silently losing state.",
    },
  },
  Full_Stack: {},
  Devops: {},
  Azure_Cloud: {},
};
