export interface AgentEntry {
  name: string;
  trigger: string;
  description: string;
}

export interface EventContractEntry {
  event: string;
  consumer: string;
}

export interface LayerEntry {
  name: string;
  meta: string;
  description: string;
}

export interface MetricEntry {
  value: string;
  label: string;
}

export interface ProjectEntry {
  title: string;
  status: string;
  repoUrl: string;
  demoUrl: string;
  whyItExists: string;
  decisions: string[];
  stack: string[];
  metrics: (string | MetricEntry)[];
  architecture?: string;
  demoVideoId?: string;
  dataModel?: string;
  agents?: AgentEntry[];
  layers?: LayerEntry[];
  eventContract?: EventContractEntry[];
  decisionDeepDive?: string;
  testingApproach?: string;
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
      demoVideoId: '97RfQV_9cpY',
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
  Full_Stack: {
    APILens: {
      title: 'APILens: intelligent API debugging client',
      status: 'Building',
      repoUrl: 'github.com/subritii/APILens',
      demoUrl: '',
      whyItExists:
        "Postman shows you what happened. It doesn't tell you why, or what to fix. APILens proxies every API request through a three-layer pipeline, so failures come with a plain explanation, not just a raw error body.",
      decisions: [],
      stack: ['Next.js', 'Express', 'PostgreSQL', 'Redis', 'Prisma', 'Claude API', 'OpenAPI', 'ajv'],
      metrics: [
        { value: '3', label: 'layer analysis pipeline' },
        { value: '<1ms', label: 'deterministic checks' },
        { value: 'Cached', label: 'AI results, per team' },
      ],
      architecture:
        'Next.js frontend, Node/Express backend, Postgres for relational data (users, teams, request history), Redis for session stats and rolling latency. A proxy engine sits in front of every request before it reaches the real API.',
      dataModel:
        "Teams own a shared knowledge base. Every request links to a history of attempts, each one storing what was sent, what came back, and which layer flagged it. Errors and their fixes are cached per team, so one engineer's debugging session pays off for the next.",
      layers: [
        {
          name: 'Layer 1: Validation',
          meta: '~0ms, synchronous',
          description:
            'Request body checked against the OpenAPI spec, required headers enforced, SSRF risk internal URLs blocked, before anything sends.',
        },
        {
          name: 'Layer 2: Heuristics',
          meta: '~1ms, synchronous',
          description:
            'Reads rolling latency averages from Redis. Flags responses over 2x normal latency, or three consecutive 401s as a token expiry pattern.',
        },
        {
          name: 'Layer 3: AI triage',
          meta: '2 to 5s, async, cost gated',
          description:
            'Only runs on failure or explicit click. Checks the team knowledge cache first. No match, assembles full context and calls Claude, then saves the result for reuse.',
        },
      ],
      decisionDeepDive:
        "I kept Layers 1 and 2 fully deterministic on purpose. Schema validation and latency math don't need a model, and calling one on every request would be slow and expensive for no real gain. The AI layer exists only where plain rule logic runs out, explaining a specific failure in context, and it's gated to run once per unique error per team, not once per request.",
      testingApproach:
        "Layer 1 is pure logic, tested with no network or DB. Layer 2 runs against a real local Redis instance, not a mock, since the rolling average math is the actual thing being verified. Layer 3's AI call is stubbed in tests; only the prompt assembly and caching logic around it are tested directly.",
    },
  },
  Devops: {},
  Azure_Cloud: {},
};
