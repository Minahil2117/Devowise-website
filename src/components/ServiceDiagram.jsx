import { motion } from "framer-motion";

/**
 * Animated Interactive Architecture Visualizer
 * Inspired by Blutech Consulting's signature node visualizer
 */
export default function ServiceDiagram({ type = "pipeline", hovered = false }) {
  if (type === "agent") {
    return <AgentDiagram hovered={hovered} />;
  }
  if (type === "system") {
    return <SystemDiagram hovered={hovered} />;
  }
  if (type === "design") {
    return <DesignDiagram hovered={hovered} />;
  }
  return <PipelineDiagram hovered={hovered} />;
}

/* 1. DATA & AI PIPELINE DIAGRAM */
function PipelineDiagram({ hovered }) {
  const nodes = [
    { id: "sources", label: "DATA SOURCES", sub: "APIs & Webhooks", x: 60, y: 75 },
    { id: "ingestion", label: "INGESTION & ETL", sub: "Batch / Streaming", x: 200, y: 75 },
    { id: "embeddings", label: "EMBEDDINGS & VECTORS", sub: "Pinecone / pgvector", x: 345, y: 75 },
    { id: "orchestrator", label: "AI ORCHESTRATOR", sub: "LLMs & Guardrails", x: 200, y: 175 },
    { id: "evals", label: "PRODUCTION EVALS", sub: "Real-time Metrics", x: 345, y: 175 },
  ];

  return (
    <div className={`diag-container ${hovered ? "hovered" : ""}`}>
      <svg viewBox="0 0 420 230" className="diag-svg" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Connection Edges */}
        <path d="M 115 75 L 145 75" className="diag-edge" />
        <path d="M 255 75 L 285 75" className="diag-edge" />
        <path d="M 200 102 L 200 148" className="diag-edge" />
        <path d="M 255 175 L 285 175" className="diag-edge" />
        <path d="M 345 102 L 345 148" className="diag-edge diag-edge-dashed" />

        {/* Animated Packets */}
        <circle r="3.5" className="diag-packet p1">
          <animateMotion path="M 115 75 L 255 75" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="3.5" className="diag-packet p2">
          <animateMotion path="M 200 102 L 200 148 L 285 175" dur="3.8s" repeatCount="indefinite" />
        </circle>
        <circle r="3.5" className="diag-packet p3">
          <animateMotion path="M 345 102 L 345 148" dur="4.2s" repeatCount="indefinite" />
        </circle>

        {/* Nodes */}
        {nodes.map((n) => (
          <g key={n.id} transform={`translate(${n.x}, ${n.y})`} className="diag-node">
            <rect
              x="-55"
              y="-24"
              width="110"
              height="48"
              rx="6"
              className={`diag-node-box ${n.id === "orchestrator" ? "accent" : ""}`}
            />
            <circle cx="-42" cy="-2" r="3" className="node-status-dot" />
            <text x="-32" y="-4" className="diag-node-title">{n.label}</text>
            <text x="-32" y="10" className="diag-node-sub">{n.sub}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* 2. AGENT & AUTOMATION WORKFLOW DIAGRAM */
function AgentDiagram({ hovered }) {
  const nodes = [
    { id: "intent", label: "USER INTENT", sub: "Prompt / Event", x: 65, y: 115 },
    { id: "router", label: "AGENT ROUTER", sub: "Intent Classifier", x: 185, y: 60 },
    { id: "tools", label: "TOOL RUNNERS", sub: "APIs & Python Code", x: 185, y: 170 },
    { id: "guardrails", label: "GUARDRAILS", sub: "Safety & Schema", x: 305, y: 60 },
    { id: "action", label: "FINAL ACTION", sub: "JSON / Response", x: 345, y: 170 },
  ];

  return (
    <div className={`diag-container ${hovered ? "hovered" : ""}`}>
      <svg viewBox="0 0 420 230" className="diag-svg" preserveAspectRatio="xMidYMid meet">
        {/* Connection Edges */}
        <path d="M 120 115 C 150 115, 140 60, 185 60" className="diag-edge" />
        <path d="M 120 115 C 150 115, 140 170, 185 170" className="diag-edge" />
        <path d="M 240 60 L 250 60" className="diag-edge" />
        <path d="M 240 170 L 290 170" className="diag-edge" />
        <path d="M 305 84 C 305 130, 310 170, 290 170" className="diag-edge diag-edge-dashed" />

        {/* Animated Packets */}
        <circle r="3.5" className="diag-packet p1">
          <animateMotion path="M 120 115 C 150 115, 140 60, 185 60 L 250 60" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle r="3.5" className="diag-packet p2">
          <animateMotion path="M 120 115 C 150 115, 140 170, 185 170 L 290 170" dur="3.4s" repeatCount="indefinite" />
        </circle>

        {nodes.map((n) => (
          <g key={n.id} transform={`translate(${n.x}, ${n.y})`} className="diag-node">
            <rect
              x="-55"
              y="-24"
              width="110"
              height="48"
              rx="6"
              className={`diag-node-box ${n.id === "router" ? "accent" : ""}`}
            />
            <circle cx="-42" cy="-2" r="3" className="node-status-dot" />
            <text x="-32" y="-4" className="diag-node-title">{n.label}</text>
            <text x="-32" y="10" className="diag-node-sub">{n.sub}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* 3. FULL-STACK & CLOUD SYSTEM ARCHITECTURE */
function SystemDiagram({ hovered }) {
  const nodes = [
    { id: "edge", label: "EDGE CLIENT", sub: "React 19 / Next.js", x: 65, y: 70 },
    { id: "middleware", label: "GATEWAY", sub: "Auth & Rate Limits", x: 195, y: 70 },
    { id: "services", label: "API SERVICES", sub: "Node & Python", x: 335, y: 70 },
    { id: "cache", label: "CACHE LAYER", sub: "Upstash Redis", x: 195, y: 170 },
    { id: "db", label: "POSTGRES DB", sub: "Multi-tenant Read/Write", x: 335, y: 170 },
  ];

  return (
    <div className={`diag-container ${hovered ? "hovered" : ""}`}>
      <svg viewBox="0 0 420 230" className="diag-svg" preserveAspectRatio="xMidYMid meet">
        <path d="M 120 70 L 140 70" className="diag-edge" />
        <path d="M 250 70 L 280 70" className="diag-edge" />
        <path d="M 195 94 L 195 146" className="diag-edge diag-edge-dashed" />
        <path d="M 335 94 L 335 146" className="diag-edge" />
        <path d="M 250 170 L 280 170" className="diag-edge" />

        <circle r="3.5" className="diag-packet p1">
          <animateMotion path="M 120 70 L 280 70 L 335 94 L 335 146" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <circle r="3.5" className="diag-packet p2">
          <animateMotion path="M 195 94 L 195 146 L 280 170" dur="3.8s" repeatCount="indefinite" />
        </circle>

        {nodes.map((n) => (
          <g key={n.id} transform={`translate(${n.x}, ${n.y})`} className="diag-node">
            <rect
              x="-55"
              y="-24"
              width="110"
              height="48"
              rx="6"
              className={`diag-node-box ${n.id === "services" ? "accent" : ""}`}
            />
            <circle cx="-42" cy="-2" r="3" className="node-status-dot" />
            <text x="-32" y="-4" className="diag-node-title">{n.label}</text>
            <text x="-32" y="10" className="diag-node-sub">{n.sub}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* 4. PRODUCT DESIGN & SYSTEMS */
function DesignDiagram({ hovered }) {
  const nodes = [
    { id: "foundation", label: "BRAND FOUNDATION", sub: "Typography & Palette", x: 70, y: 75 },
    { id: "tokens", label: "DESIGN TOKENS", sub: "Spacing & Colors", x: 210, y: 75 },
    { id: "components", label: "UI COMPONENTS", sub: "Figma & React UI", x: 345, y: 75 },
    { id: "motion", label: "INTERACTIONS", sub: "Framer & CSS Motion", x: 210, y: 175 },
    { id: "experience", label: "PRODUCTION APP", sub: "Clean & High-Converting", x: 345, y: 175 },
  ];

  return (
    <div className={`diag-container ${hovered ? "hovered" : ""}`}>
      <svg viewBox="0 0 420 230" className="diag-svg" preserveAspectRatio="xMidYMid meet">
        <path d="M 125 75 L 155 75" className="diag-edge" />
        <path d="M 265 75 L 290 75" className="diag-edge" />
        <path d="M 210 99 L 210 151" className="diag-edge diag-edge-dashed" />
        <path d="M 345 99 L 345 151" className="diag-edge" />
        <path d="M 265 175 L 290 175" className="diag-edge" />

        <circle r="3.5" className="diag-packet p1">
          <animateMotion path="M 125 75 L 290 75 L 345 99 L 345 151" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="3.5" className="diag-packet p2">
          <animateMotion path="M 210 99 L 210 151 L 290 175" dur="3.6s" repeatCount="indefinite" />
        </circle>

        {nodes.map((n) => (
          <g key={n.id} transform={`translate(${n.x}, ${n.y})`} className="diag-node">
            <rect
              x="-55"
              y="-24"
              width="110"
              height="48"
              rx="6"
              className={`diag-node-box ${n.id === "components" ? "accent" : ""}`}
            />
            <circle cx="-42" cy="-2" r="3" className="node-status-dot" />
            <text x="-32" y="-4" className="diag-node-title">{n.label}</text>
            <text x="-32" y="10" className="diag-node-sub">{n.sub}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}
