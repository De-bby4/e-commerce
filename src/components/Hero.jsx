import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen font-['Montserrat',sans-serif] overflow-hidden"
      style={{ background: "var(--bg-primary)" }}>

      {/* DESKTOP */}
      <div className="hidden lg:grid lg:grid-cols-2 min-h-screen">
        <div className="relative flex flex-col justify-end px-20 pb-24"
          style={{ background: "var(--bg-secondary)" }}>
          <span className="absolute top-1/2 -translate-y-1/2 right-0 font-['Cormorant_Garamond',serif] text-[22rem] font-light leading-none select-none pointer-events-none"
            style={{ color: "rgba(201,169,110,0.04)" }}>M</span>
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-px block" style={{ background: "var(--gold)" }} />
            <span className="text-[0.6rem] font-medium tracking-[0.3em] uppercase" style={{ color: "var(--gold)" }}>
              New Arrivals — 2025
            </span>
          </div>
          <h1 className="font-['Cormorant_Garamond',serif] text-[5.5rem] font-light leading-[1.02] mb-6"
            style={{ color: "var(--text-primary)" }}>
            Dressed for<br />the{" "}
            <em className="italic" style={{ color: "var(--gold-light)" }}>Extraordinary</em>
          </h1>
          <p className="text-[0.72rem] leading-[2] tracking-[0.05em] max-w-sm mb-10"
            style={{ color: "var(--text-muted)" }}>
            Where timeless elegance meets modern silhouette. Curated pieces for those who live boldly and dress with intention.
          </p>
          <div className="flex items-center gap-8">
            <Link to="/shop"
              className="inline-block px-10 py-4 text-[0.6rem] font-semibold tracking-[0.25em] uppercase transition-all duration-300 hover:-translate-y-px"
              style={{ background: "var(--gold)", color: "var(--bg-primary)" }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--gold-light)"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--gold)"}
            >Shop Collection</Link>
            <Link to="/lookbook"
              className="flex items-center gap-2 text-[0.6rem] font-medium tracking-[0.2em] uppercase transition-colors duration-300 after:content-['→'] after:text-base"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
            >Explore Lookbook</Link>
          </div>
          <div className="absolute bottom-10 right-8 flex flex-col items-center gap-3">
            <span className="text-[0.52rem] tracking-[0.3em] uppercase" style={{ color: "var(--text-dim)", writingMode: "vertical-rl" }}>Scroll</span>
            <span className="w-px h-12" style={{ background: "var(--text-dim)" }} />
          </div>
        </div>

        <div className="relative flex items-end justify-center overflow-hidden"
          style={{ background: "var(--bg-tertiary)" }}>
          <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 80px,rgba(201,169,110,0.015) 80px,rgba(201,169,110,0.015) 81px),repeating-linear-gradient(90deg,transparent,transparent 80px,rgba(201,169,110,0.015) 80px,rgba(201,169,110,0.015) 81px)" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[0.6rem] tracking-[0.3em] uppercase" style={{ color: "rgba(201,169,110,0.25)" }}>Add Model Image</span>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 px-3 py-2 text-[0.52rem] font-semibold tracking-[0.15em] uppercase"
            style={{ background: "var(--gold)", color: "var(--bg-primary)" }}>SS '25</div>
          <div className="absolute bottom-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to top, var(--bg-primary), transparent)" }} />
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex flex-col lg:hidden min-h-screen">
        <div className="relative w-full h-[55vh] overflow-hidden flex items-center justify-center"
          style={{ background: "var(--bg-tertiary)" }}>
          <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(201,169,110,0.015) 60px,rgba(201,169,110,0.015) 61px)" }} />
          <span className="relative text-[0.55rem] tracking-[0.25em] uppercase" style={{ color: "rgba(201,169,110,0.3)" }}>Add Model Image</span>
          <div className="absolute top-6 left-0 px-3 py-1.5 text-[0.5rem] font-semibold tracking-[0.15em] uppercase"
            style={{ background: "var(--gold)", color: "var(--bg-primary)" }}>SS '25</div>
          <div className="absolute bottom-0 left-0 right-0 py-2 px-4" style={{ background: "rgba(10,8,6,0.7)" }}>
            <p className="text-[0.5rem] tracking-[0.2em] uppercase text-center" style={{ color: "var(--gold)" }}>Free Shipping on Orders Over $150</p>
          </div>
        </div>

        <div className="relative flex flex-col justify-center flex-1 px-6 pt-8 pb-12"
          style={{ background: "var(--bg-secondary)" }}>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px block" style={{ background: "var(--gold)" }} />
            <span className="text-[0.55rem] font-medium tracking-[0.25em] uppercase" style={{ color: "var(--gold)" }}>New Arrivals — 2025</span>
          </div>
          <h1 className="font-['Cormorant_Garamond',serif] text-[3rem] sm:text-[4rem] font-light leading-[1.05] mb-5"
            style={{ color: "var(--text-primary)" }}>
            Dressed for<br />the <em className="italic" style={{ color: "var(--gold-light)" }}>Extraordinary</em>
          </h1>
          <p className="text-[0.68rem] leading-[1.9] tracking-[0.03em] mb-8 max-w-xs" style={{ color: "var(--text-muted)" }}>
            Where timeless elegance meets modern silhouette. Curated pieces for those who live boldly and dress with intention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <Link to="/shop"
              className="inline-block text-center px-8 py-4 text-[0.58rem] font-semibold tracking-[0.25em] uppercase transition-all duration-300 active:scale-[0.98]"
              style={{ background: "var(--gold)", color: "var(--bg-primary)" }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--gold-light)"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--gold)"}
            >Shop Collection</Link>
            <Link to="/lookbook"
              className="flex items-center justify-center sm:justify-start gap-2 text-[0.58rem] font-medium tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
            >Explore Lookbook <span>→</span></Link>
          </div>
          <span className="absolute bottom-4 right-4 font-['Cormorant_Garamond',serif] text-[10rem] font-light leading-none select-none pointer-events-none"
            style={{ color: "rgba(201,169,110,0.04)" }}>M</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;