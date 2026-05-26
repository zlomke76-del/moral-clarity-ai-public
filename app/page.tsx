import { ArrowRight, BrainCircuit, CheckCircle2, GitBranch, Landmark, LockKeyhole, ShieldCheck } from "lucide-react";

const primitives = [
  {
    title: "Reality Contact",
    copy: "Evaluates whether operational state still has evidentiary contact with observed reality.",
    icon: CheckCircle2,
  },
  {
    title: "Authority Continuity",
    copy: "Checks whether the authority permitting action remains valid at the moment consequence forms.",
    icon: Landmark,
  },
  {
    title: "Runtime Admissibility",
    copy: "Recomputes whether legitimate execution survives under current conditions before action proceeds.",
    icon: ShieldCheck,
  },
];

const products = [
  {
    title: "Solace Core",
    copy: "Execution authority engine for governed AI systems. Models propose. Governance decides.",
  },
  {
    title: "Solace Veil",
    copy: "Governed cognition runtime for continuity reconstruction, epistemic arbitration, and auditable decision context.",
  },
  {
    title: "Solace Authority Console",
    copy: "Control surface for deterministic allow, deny, escalate, and review decisions across execution boundaries.",
  },
  {
    title: "Harmonic Stabilizer",
    copy: "Public execution-governance primitive for consequence-bearing AI and autonomous workflows.",
  },
];

export default function HomePage() {
  return (
    <main className="page">
      <nav className="nav">
        <div className="shell nav-inner">
          <a className="brand" href="#top" aria-label="Moral Clarity AI home">
            <span className="mark">MC</span>
            <span>Moral Clarity AI</span>
          </a>
          <div className="nav-links">
            <a href="#why">Why</a>
            <a href="#stack">Stack</a>
            <a href="#products">Systems</a>
            <a href="#boundary">Boundary</a>
          </div>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="shell hero-grid">
          <div>
            <span className="eyebrow">Execution governance for autonomous systems</span>
            <h1>Serious autonomous systems cannot operate on coherence alone.</h1>
            <p className="lead">
              Moral Clarity AI builds governance infrastructure for systems that must act under changing state,
              authority, uncertainty, and real-world consequence.
            </p>
            <div className="actions">
              <a className="button primary" href="#stack">Explore the stack</a>
              <a className="button secondary" href="#boundary">View the boundary</a>
            </div>
          </div>

          <div className="card signal-card" aria-label="Governed execution flow">
            <div className="flow">
              <div className="flow-step"><span>01</span><strong>Probabilistic cognition proposes</strong></div>
              <div className="flow-step"><span>02</span><strong>Runtime conditions are evaluated</strong></div>
              <div className="flow-step"><span>03</span><strong>Authority and state are recomputed</strong></div>
              <div className="flow-step"><span>04</span><strong>Execution is allowed, constrained, escalated, or blocked</strong></div>
            </div>
            <p className="lead" style={{ fontSize: 16, margin: 0 }}>
              The core question is not whether an output sounds coherent. It is whether action remains admissible now.
            </p>
          </div>
        </div>
      </section>

      <section id="why" className="section">
        <div className="shell">
          <div className="section-title">
            <h2>Governance must survive runtime reality.</h2>
            <p>
              Static approval is not enough for persistent autonomous systems. Conditions drift, permissions change,
              evidence becomes stale, dependencies mutate, and execution pressure continues. Moral Clarity AI focuses on
              the execution boundary where consequence becomes real.
            </p>
          </div>
        </div>
      </section>

      <section id="stack" className="section">
        <div className="shell">
          <div className="section-title">
            <h2>Core primitives</h2>
            <p>Public framing for the infrastructure layer. Private deployment mechanics remain outside this repository.</p>
          </div>
          <div className="grid-3">
            {primitives.map((item) => {
              const Icon = item.icon;
              return (
                <article className="card feature" key={item.title}>
                  <div className="icon"><Icon size={22} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="products" className="section">
        <div className="shell">
          <div className="section-title">
            <h2>Systems</h2>
            <p>A public overview of the Moral Clarity AI governance ecosystem.</p>
          </div>
          <div className="product-grid">
            {products.map((item) => (
              <article className="card product" key={item.title}>
                <div className="icon"><BrainCircuit size={22} /></div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="boundary" className="section">
        <div className="shell">
          <div className="section-title">
            <h2>Boundary model</h2>
            <p>The public repo explains the architecture without exposing private orchestration, auth, telemetry, billing, or customer infrastructure.</p>
          </div>
          <div className="boundary">
            <div className="boundary-box">
              <LockKeyhole size={24} color="var(--gold)" />
              <h3>Private production repo</h3>
              <p>Auth, admin, billing, memory, orchestration, telemetry, customer systems, and operational deployment logic.</p>
            </div>
            <div className="arrow"><ArrowRight /></div>
            <div className="boundary-box">
              <GitBranch size={24} color="var(--gold)" />
              <h3>Public-facing repo</h3>
              <p>Product narrative, public docs, positioning, sanitized demos, and integration philosophy.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell">
          © 2026 Moral Clarity AI. Licensed under Apache-2.0. Public-facing materials only.
        </div>
      </footer>
    </main>
  );
}
