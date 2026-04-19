import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0a0806] font-['Montserrat',sans-serif] overflow-hidden">

      {/* ── DESKTOP LAYOUT (lg+): split left/right ── */}
      <div className="hidden lg:grid lg:grid-cols-2 min-h-screen">

        {/* Left — content */}
        <div className="relative flex flex-col justify-end px-20 pb-24 bg-[#0d0b08]">

          <span className="absolute top-1/2 -translate-y-1/2 right-0 font-['Cormorant_Garamond',serif] text-[22rem] font-light leading-none text-[rgba(201,169,110,0.04)] select-none pointer-events-none">
            M
          </span>

          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-px bg-[#c9a96e]" />
            <span className="text-[0.6rem] font-medium tracking-[0.3em] uppercase text-[#c9a96e]">
              New Arrivals — 2025
            </span>
          </div>

          <h1 className="font-['Cormorant_Garamond',serif] text-[5.5rem] font-light leading-[1.02] text-[#f5efe6] mb-6">
            Dressed for<br />
            the{" "}
            <em className="italic text-[#e8d5a3]">Extraordinary</em>
          </h1>

          <p className="text-[0.72rem] leading-[2] tracking-[0.05em] text-[#9e9082] max-w-sm mb-10">
            Where timeless elegance meets modern silhouette. Curated pieces for
            those who live boldly and dress with intention.
          </p>

          <div className="flex items-center gap-8">
            <Link
              to="/shop"
              className="inline-block px-10 py-4 bg-[#c9a96e] text-[#0a0806] text-[0.6rem] font-semibold tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[#e8d5a3] hover:-translate-y-px"
            >
              Shop Collection
            </Link>
            <Link
              to="/lookbook"
              className="flex items-center gap-2 text-[0.6rem] font-medium tracking-[0.2em] uppercase text-[#9e9082] transition-colors duration-300 hover:text-[#c9a96e] after:content-['→'] after:text-base"
            >
              Explore Lookbook
            </Link>
          </div>

          <div className="absolute bottom-10 right-8 flex flex-col items-center gap-3">
            <span
              className="text-[0.52rem] tracking-[0.3em] uppercase text-[#7a6240]"
              style={{ writingMode: "vertical-rl" }}
            >
              Scroll
            </span>
            <span className="w-px h-12 bg-[#7a6240]" />
          </div>
        </div>

        {/* Right — image area */}
        <div className="relative bg-[#14100c] flex items-end justify-center overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 80px,rgba(201,169,110,0.015) 80px,rgba(201,169,110,0.015) 81px),repeating-linear-gradient(90deg,transparent,transparent 80px,rgba(201,169,110,0.015) 80px,rgba(201,169,110,0.015) 81px)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[0.6rem] tracking-[0.3em] uppercase text-[rgba(201,169,110,0.25)]">
              Add Model Image
            </span>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 bg-[#c9a96e] text-[#0a0806] px-3 py-2 text-[0.52rem] font-semibold tracking-[0.15em] uppercase">
            SS '25
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0806] to-transparent" />
        </div>
      </div>

      {/* ── MOBILE LAYOUT (below lg): stacked ── */}
      <div className="flex flex-col lg:hidden min-h-screen">

        <div className="relative w-full h-[55vh] bg-[#14100c] overflow-hidden flex items-center justify-center">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(201,169,110,0.015) 60px,rgba(201,169,110,0.015) 61px)",
            }}
          />
          <span className="relative text-[0.55rem] tracking-[0.25em] uppercase text-[rgba(201,169,110,0.3)]">
            Add Model Image
          </span>
          <div className="absolute top-6 left-0 bg-[#c9a96e] text-[#0a0806] px-3 py-1.5 text-[0.5rem] font-semibold tracking-[0.15em] uppercase">
            SS '25
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-[rgba(10,8,6,0.7)] py-2 px-4">
            <p className="text-[0.5rem] tracking-[0.2em] uppercase text-[#c9a96e] text-center">
              Free Shipping on Orders Over $150
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-center flex-1 px-6 pt-8 pb-12 bg-[#0d0b08]">

          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-[#c9a96e]" />
            <span className="text-[0.55rem] font-medium tracking-[0.25em] uppercase text-[#c9a96e]">
              New Arrivals — 2025
            </span>
          </div>

          <h1 className="font-['Cormorant_Garamond',serif] text-[3rem] sm:text-[4rem] font-light leading-[1.05] text-[#f5efe6] mb-5">
            Dressed for<br />
            the <em className="italic text-[#e8d5a3]">Extraordinary</em>
          </h1>

          <p className="text-[0.68rem] leading-[1.9] tracking-[0.03em] text-[#9e9082] mb-8 max-w-xs">
            Where timeless elegance meets modern silhouette. Curated pieces for
            those who live boldly and dress with intention.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <Link
              to="/shop"
              className="inline-block text-center px-8 py-4 bg-[#c9a96e] text-[#0a0806] text-[0.58rem] font-semibold tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[#e8d5a3] active:scale-[0.98]"
            >
              Shop Collection
            </Link>
            <Link
              to="/lookbook"
              className="flex items-center justify-center sm:justify-start gap-2 text-[0.58rem] font-medium tracking-[0.2em] uppercase text-[#9e9082] transition-colors duration-300 hover:text-[#c9a96e]"
            >
              Explore Lookbook <span>→</span>
            </Link>
          </div>

          <span className="absolute bottom-4 right-4 font-['Cormorant_Garamond',serif] text-[10rem] font-light leading-none text-[rgba(201,169,110,0.04)] select-none pointer-events-none">
            M
          </span>
        </div>
      </div>

    </section>
  );
};

export default Hero;