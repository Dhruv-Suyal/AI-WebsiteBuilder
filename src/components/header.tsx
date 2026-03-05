import { useState, useEffect, type RefObject} from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollToPlugin);

type headerProps = {
  pricingRef: RefObject<HTMLDivElement | null>;
  howItWorksRef: RefObject<HTMLDivElement | null>;
  featuresRef: RefObject<HTMLDivElement | null>;
  showCaseRef: RefObject<HTMLDivElement | null>;
}
//Header for website
export function Header({pricingRef, howItWorksRef, featuresRef, showCaseRef}: headerProps){
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
     
    useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  function scrollTo(elementRef: RefObject<HTMLDivElement | null>){
    if(!elementRef.current) return;

    gsap.to(window, {
      duration: 1/2,
      scrollTo:{
        y: elementRef.current,
        offsetY:120
      }
    });
  };

  useGSAP(()=>{
      gsap.from("#LOGO, #NAVACCOUNT", {
        y:-15,
        opacity:0,
        delay:0.8,
        duration:1
      })

      const tl = gsap.timeline();

      tl.from("#NAVLINK", {
        y:-15,
        opacity:0,
        delay:0.8,
        duration:1,
        stagger:0.15
      })
  })

    return (
    <>
     <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${scrolled ? "bg-[#000008]/85 backdrop-blur-2xl border-b border-white/6" : ""}`}>
        <div className="max-w-300 mx-auto px-7 h-17 flex items-center justify-between gap-5">

          {/* Logo */}
          <div id="LOGO" className="flex items-center gap-2.5 cursor-pointer shrink-0">
            <div className="logo-icon relative w-9 h-9 rounded-[10px] flex items-center justify-center overflow-hidden shrink-0" style={{ boxShadow: "0 0 20px rgba(99,102,241,0.5)" }}>
              <span className="relative z-10 text-lg font-bold text-white">W</span>
            </div>
            <span className="text-[17px] font-bold text-white tracking-tight">
              Forge<em className="not-italic grad-text">AI</em>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-9">
              <span id="NAVLINK" onClick={()=>{scrollTo(featuresRef)}} className="text-sm font-medium text-slate-500 hover:text-slate-100 cursor-pointer transition-colors duration-200">Features</span>
              <span id="NAVLINK" onClick={()=>{scrollTo(howItWorksRef)}} className="text-sm font-medium text-slate-500 hover:text-slate-100 cursor-pointer transition-colors duration-200">How It Works</span>
              <span id="NAVLINK" onClick={()=>{scrollTo(pricingRef)}} className="text-sm font-medium text-slate-500 hover:text-slate-100 cursor-pointer transition-colors duration-200">Pricing</span>
              <span id="NAVLINK" onClick={()=>{scrollTo(showCaseRef)}} className="text-sm font-medium text-slate-500 hover:text-slate-100 cursor-pointer transition-colors duration-200">Showcase</span>
          </div>

          {/* Desktop Actions */}
          <div id="NAVACCOUNT" className="hidden md:flex items-center gap-2.5">
            <button className="text-sm font-medium text-slate-500 hover:text-slate-100 px-5 py-2.5 rounded-xl border border-white/10 hover:border-indigo-500/40 hover:bg-indigo-500/8 transition-all duration-200 bg-transparent cursor-pointer">
              Sign in
            </button>
            <button className="grad-bg text-sm font-semibold text-white px-6 py-2.5 rounded-xl border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 relative overflow-hidden" style={{ boxShadow: "0 4px 24px rgba(99,102,241,0.4)" }}>
              <span className="absolute inset-0 bg-linear-to-br from-white/18 to-transparent" />
              <span className="relative">Get Started Free</span>
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden flex flex-col gap-1.25 p-2 border border-white/8 hover:border-indigo-500/40 rounded-lg transition-colors duration-200 bg-transparent cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[1.5px] bg-slate-500 rounded transition-all duration-300 ${menuOpen ? "translate-y-[6.5px] rotate-45 bg-indigo-400!" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-slate-500 rounded transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-slate-500 rounded transition-all duration-300 ${menuOpen ? "-translate-y-[6.5px] -rotate-45 bg-indigo-400!" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mob-menu fixed inset-x-0 top-17 z-40 bg-[#000008]/97 backdrop-blur-3xl border-b border-white/6 flex flex-col px-6 pb-8 pt-4 md:hidden">
          {["Features", "How It Works", "Pricing", "Showcase"].map(l => (
            <span key={l} onClick={() => setMenuOpen(false)} className="text-base font-medium text-slate-500 hover:text-slate-100 py-4 border-b border-white/5 cursor-pointer transition-colors duration-200 last:border-none">
              {l}
            </span>
          ))}
          <div className="flex flex-col gap-3 pt-6">
            <button  className=" NAVACCOUNT w-full text-[15px] font-medium text-slate-400 py-3.5 rounded-xl border border-white/10 bg-transparent cursor-pointer">Sign in</button>
            <button className="grad-bg w-full text-[15px] font-semibold text-white py-3.5 rounded-xl border-none cursor-pointer relative overflow-hidden" style={{ boxShadow: "0 4px 24px rgba(99,102,241,0.4)" }}>
              <span className="absolute inset-0 bg-linear-to-br from-white/18 to-transparent" />
              <span  className=" NAVACCOUNT relative">Get Started Free</span>
            </button>
          </div>
        </div>
      )}
    </>
    )
}