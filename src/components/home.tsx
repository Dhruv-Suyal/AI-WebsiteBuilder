import { useState, useEffect, useRef } from "react";
import { Header } from "./header";
import "./home.css"
const WORDS = ["stunning", "powerful", "blazing-fast", "pixel-perfect", "production-ready"];

const FEATURES = [
  { icon: "✦", title: "Prompt to Website", desc: "Type what you want. Our AI reads intent, structure, and aesthetics — generating a complete site in under 15 seconds." },
  { icon: "◈", title: "Visual Editor", desc: "Refine every pixel after generation. Drag, resize, recolor — full design control without touching code." },
  { icon: "⬡", title: "Export Clean Code", desc: "Download production-ready React + Tailwind. No lock-in. No bloat. Code you're proud to ship." },
  { icon: "⊕", title: "One-Click Deploy", desc: "Connect your domain and go live instantly. Global CDN, SSL, and edge delivery included." },
  { icon: "◎", title: "CMS Scaffolding", desc: "Auto-generate headless CMS schemas and API routes based on your content. Backend, handled." },
  { icon: "⟡", title: "Iterative Prompting", desc: "Not right? Refine it. The AI remembers your context and updates surgically." },
];

const STEPS = [
  { num: "01", title: "Describe your vision", desc: "Write a prompt like you're texting a designer. The more detail, the better the output." },
  { num: "02", title: "AI generates instantly", desc: "Watch your website materialize in real time — layout, copy, components, and style." },
  { num: "03", title: "Refine & publish", desc: "Tweak with follow-up prompts or the visual editor, then deploy with a single click." },
];

const PLANS = [
  { name: "Free", price: "$0", features: ["5 generations/month", "HTML export", "Community support", "Subdomain hosting"], cta: "Get Started", hot: false },
  { name: "Pro", price: "$29", features: ["Unlimited generations", "React + Tailwind export", "Custom domain + SSL", "CMS scaffolding", "Priority support"], cta: "Start Pro", hot: true },
  { name: "Team", price: "$99", features: ["Everything in Pro", "5 team seats", "API access", "White-label export", "Dedicated manager"], cta: "Contact Sales", hot: false },
];

const EXAMPLES = [
  "Dark SaaS landing page for a project management tool",
  "Luxury e-commerce store for handmade ceramics",
  "Portfolio for a motion graphics designer",
  "Booking platform for a high-end spa",
];

export function Home() {
 
  const [wordIdx, setWordIdx] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);
  const [prompt, setPrompt] = useState("");
  const [focused, setFocused] = useState(false);
  const textRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const t = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => { setWordIdx(i => (i + 1) % WORDS.length); setWordVisible(true); }, 400);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  

  return (
    <div style={{ background: "#000008", color: "#e2e2f0", fontFamily: "'Sora', sans-serif", overflowX: "hidden" }}>

      {/* ─── NAV ─── */}
        <Header/>

      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-grid" />
        <div className="orb o1" />
        <div className="orb o2" />
        <div className="orb o3" />

        <div className="hero-content">
          <div className="hero-badge a1">
            <div className="badge-pulse" />
            Now in public beta — 50,000+ sites built
          </div>

          <h1 className="hero-h1 a2">
            Build{" "}
            <span
              className={`grad-text ${wordVisible ? "word-in" : "word-out"}`}
              style={{ display: "inline-block" }}
            >
              {WORDS[wordIdx]}
            </span>
            <br />
            websites from a prompt.
          </h1>

          <p className="hero-sub a3">
            Describe your website in plain English. Our AI generates a fully functional, production-ready site — in seconds.
          </p>

          {/* Prompt Box */}
          <div className="pbox-wrap a4">
            <div className={`pbox ${focused ? "focus" : ""}`}>
              <div className="pbox-top">
                <div className="pbox-label">Describe your website</div>
                <textarea
                  ref={textRef}
                  className="pbox-ta"
                  rows={3}
                  placeholder="e.g. A sleek dark SaaS landing page for a project management tool with animated stats, pricing, and a glowing gradient CTA..."
                  value={prompt}
                  onChange={e => setPrompt(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                />
              </div>
              <div className="pbox-bot">
                <span className="char-c">{prompt.length > 0 ? `${prompt.length} chars` : "Be as detailed as you like"}</span>
                <button className="btn-cta" style={{ padding: "11px 28px", fontSize: 14 }}>
                  Generate Website
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>

            <div className="pills a5">
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#252545", lineHeight: "29px", flexShrink: 0 }}>Try →</span>
              {EXAMPLES.map(ex => (
                <button key={ex} className="pill" onClick={() => { setPrompt(ex); textRef.current?.focus(); }}>
                  {ex.length > 40 ? ex.slice(0, 40) + "…" : ex}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, opacity: 0.3, zIndex: 1 }}>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, transparent, #6366f1)" }} />
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#6366f1", letterSpacing: 2, textTransform: "uppercase" }}>scroll</span>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <div className="stats-band">
        <div className="stats-inner">
          {[["12s", "Avg. generation"], ["50K+", "Sites built"], ["99.9%", "Uptime SLA"], ["4.9★", "User rating"]].map(([v, l]) => (
            <div key={l} className="stat">
              <div className="stat-v grad-text" style={{ backgroundSize: "200% auto" }}>{v}</div>
              <div className="stat-l">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── FEATURES ─── */}
      <div className="sec">
        <span className="sec-badge">Features</span>
        <h2 className="sec-title">Everything you need.<br /><span className="grad-text" style={{ backgroundSize: "200% auto" }}>Nothing you don't.</span></h2>
        <p className="sec-sub">ForgeAI handles design, code, and deployment — so you can focus on building the product.</p>
        <div className="feat-grid">
          {FEATURES.map((f, i) => (
            <div key={i} className="feat-card">
              <div className="feat-icon-wrap">{f.icon}</div>
              <div className="feat-title">{f.title}</div>
              <div className="feat-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── HOW IT WORKS ─── */}
      <div style={{ background: "rgba(255,255,255,.012)", borderTop: "1px solid rgba(255,255,255,.06)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
        <div className="sec">
          <span className="sec-badge">How It Works</span>
          <h2 className="sec-title">Three steps to a<br /><span className="grad-text" style={{ backgroundSize: "200% auto" }}>live website.</span></h2>

          <div className="steps-grid">
            {STEPS.map((s, i) => (
              <div key={i} className="step">
                <div className="step-num">{s.num}</div>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          {/* Fake Browser Preview */}
          <div className="preview">
            <div className="browser-bar">
              <div className="dots">
                <div className="dot" style={{ background: "#ff5f57" }} />
                <div className="dot" style={{ background: "#febc2e" }} />
                <div className="dot" style={{ background: "#28c840" }} />
              </div>
              <div className="url-bar">forgeai.app/preview/x9k2m</div>
            </div>
            <div className="gen-tag">
              <div className="gen-dot" />
              Generated in 11.2s
            </div>
            <div className="preview-body">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 22, width: "100%", maxWidth: 580, textAlign: "center" }}>
                <div style={{ width: 52, height: 52, borderRadius: 16, background: "linear-gradient(135deg,#3b82f6,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, boxShadow: "0 0 32px rgba(99,102,241,.5)" }}>⚡</div>
                <h3 style={{ fontSize: "clamp(24px,4vw,40px)", fontWeight: 800, letterSpacing: -1.5, color: "#fff", lineHeight: 1.1 }}>
                  Manage projects<br />
                  <span style={{ background: "linear-gradient(90deg,#60a5fa,#818cf8,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>at light speed.</span>
                </h3>
                <p style={{ fontSize: 15, color: "#33335a", maxWidth: 360, lineHeight: 1.75 }}>The only project tool built for teams that actually ship. AI-powered, deeply integrated, beautifully designed.</p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
                  <div style={{ padding: "12px 30px", borderRadius: 12, fontWeight: 700, fontSize: 14, background: "linear-gradient(135deg,#3b82f6,#6366f1,#a855f7)", color: "#fff", boxShadow: "0 4px 24px rgba(99,102,241,.45)", cursor: "default" }}>Start Free Trial</div>
                  <div style={{ padding: "12px 30px", borderRadius: 12, fontWeight: 500, fontSize: 14, border: "1px solid rgba(255,255,255,.08)", color: "#44446a", cursor: "default" }}>Watch Demo →</div>
                </div>
                <div style={{ display: "flex", gap: 48, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,.06)", width: "100%", justifyContent: "center" }}>
                  {[["10K+", "Teams"], ["99.9%", "Uptime"], ["4.8★", "Rating"]].map(([v, l]) => (
                    <div key={l}>
                      <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: -1, background: "linear-gradient(90deg,#60a5fa,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{v}</div>
                      <div style={{ fontSize: 11, color: "#33335a", fontFamily: "'JetBrains Mono',monospace", marginTop: 4 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── PRICING ─── */}
      <div className="sec">
        <span className="sec-badge">Pricing</span>
        <h2 className="sec-title">Simple, transparent<br /><span className="grad-text" style={{ backgroundSize: "200% auto" }}>pricing.</span></h2>
        <p className="sec-sub">Start free. Scale as you grow. No hidden fees, ever.</p>

        <div className="price-grid">
          {PLANS.map(plan => (
            <div key={plan.name} className={`pc ${plan.hot ? "hot" : ""}`}>
              {plan.hot && (
                <div style={{ marginBottom: 20 }}>
                  <span style={{ background: "rgba(99,102,241,.15)", border: "1px solid rgba(99,102,241,.3)", borderRadius: 100, padding: "4px 16px", fontSize: 11, color: "#818cf8", fontFamily: "'JetBrains Mono',monospace", letterSpacing: 1 }}>MOST POPULAR</span>
                </div>
              )}
              <div className={`pc-name ${plan.hot ? "hot" : ""}`}>{plan.name}</div>
              <div style={{ marginBottom: 8 }}>
                <span className="pc-price">{plan.price}</span>
                <span className="pc-per">/mo</span>
              </div>
              <p className="pc-desc">
                {plan.name === "Free" ? "For individuals exploring AI-generated websites." : plan.name === "Pro" ? "For founders and creators who ship fast." : "For agencies and teams building at scale."}
              </p>
              <div className="pc-div" />
              <div className="pc-features">
                {plan.features.map(f => (
                  <div key={f} className="pf">
                    <div className="pf-check">✓</div>
                    {f}
                  </div>
                ))}
              </div>
              <button
                className={plan.hot ? "btn-cta" : "btn-ghost"}
                style={{ width: "100%", justifyContent: "center", padding: "14px", fontSize: 15 }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ─── CTA ─── */}
      <div className="cta-wrap">
        <div className="cta-radial" />
        <div className="cta-box">
          <h2 className="cta-title">
            Your next website starts<br />
            <span className="grad-text" style={{ backgroundSize: "200% auto" }}>with one sentence.</span>
          </h2>
          <p className="cta-sub">Join 50,000+ builders who ship faster with ForgeAI.</p>
          <div className="cta-btns">
            <button className="btn-cta">
              Start Building Free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button className="btn-ghost" style={{ padding: "14px 32px", fontSize: 15 }}>View Showcase</button>
          </div>
        </div>
      </div>

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <div className="footer-in">
          <div className="logo">
            <div className="logo-mark" style={{ width: 30, height: 30, borderRadius: 8, fontSize: 15 }}><span>W</span></div>
            <span className="logo-text" style={{ fontSize: 15 }}>Forge<em>AI</em></span>
          </div>
          <div className="f-links">
            {["Privacy", "Terms", "Status", "Blog", "Twitter", "GitHub"].map(l => (
              <a key={l} className="f-link">{l}</a>
            ))}
          </div>
          <span className="f-copy">© 2025 ForgeAI. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}