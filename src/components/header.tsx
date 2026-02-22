import './home.css'
import { useState, useEffect} from "react";

//Header for website
export function Header(){
    const [scrolled, setScrolled] = useState(false);
     const [menuOpen, setMenuOpen] = useState(false);
     
    useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
    return (
    <>
     <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <div className="logo">
            <div className="logo-mark"><span>W</span></div>
            <span className="logo-text">Forge<em>AI</em></span>
          </div>

          <div className="nav-center" style={{ display: "flex" }}>
            {["Features", "How It Works", "Pricing", "Showcase"].map(l => (
              <span key={l} className="nav-link">{l}</span>
            ))}
          </div>

          <div className="nav-actions" style={{ display: "flex" }}>
            <button className="btn-ghost">Sign in</button>
            <button className="btn-primary">Get Started Free</button>
          </div>

          <button
            className={`burger ${menuOpen ? "open" : ""}`}
            style={{ display: "none" }}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      {/* ─── MOBILE MENU ─── */}
      {menuOpen && (
        <div className="mob-menu open">
          {["Features", "How It Works", "Pricing", "Showcase"].map(l => (
            <span key={l} className="mob-link" onClick={() => setMenuOpen(false)}>{l}</span>
          ))}
          <div className="mob-actions">
            <button className="btn-ghost" style={{ width: "100%", padding: "13px", fontSize: 15 }} onClick={() => setMenuOpen(false)}>Sign in</button>
            <button className="btn-primary" style={{ width: "100%", padding: "14px", fontSize: 15 }} onClick={() => setMenuOpen(false)}>Get Started Free</button>
          </div>
        </div>
      )}
    </>
    )
}