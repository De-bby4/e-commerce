import React from "react";

const stats = [
  { number: "300+", label: "Curated Pieces" },
  { number: "18",   label: "Global Designers" },
  { number: "12K+", label: "Happy Clients" },
];

const values = [
  { number: "01", title: "Timeless Design",   desc: "Every piece is selected to transcend seasons — built to be worn, loved, and passed on." },
  { number: "02", title: "Conscious Craft",   desc: "We work only with makers who share our commitment to ethical production and quality materials." },
  { number: "03", title: "Elevated Living",   desc: "Fashion is not decoration. It is intention. We dress people who move through the world with purpose." },
];

const About = () => {
  return (
    <section id="about" className="w-full font-['Montserrat',sans-serif] overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-20 lg:py-28 relative">
          {/* <span className="absolute top-10 right-0 font-['Cormorant_Garamond',serif] text-[12rem] font-light leading-none select-none pointer-events-none"
            style={{ color: "rgba(201,169,110,0.04)" }}>25</span> */}

          <div className="flex items-center gap-4 mb-5">
            <span className="w-8 h-px block" style={{ background: "var(--gold)" }} />
            <span className="text-[0.55rem] font-semibold tracking-[0.35em] uppercase" style={{ color: "var(--gold)" }}>Our Story</span>
          </div>

          <h2 className="font-['Cormorant_Garamond',serif] text-[3rem] sm:text-[3.8rem] lg:text-[4.5rem] font-light leading-[1.05] mb-8"
            style={{ color: "var(--text-primary)" }}>
            Crafted with<br />
            <em className="italic" style={{ color: "var(--gold-light)" }}>Intention</em>
          </h2>

          <p className="text-[0.7rem] leading-[2.1] tracking-[0.04em] max-w-md mb-5" style={{ color: "var(--text-muted)" }}>
            Maison was born from a simple belief — that what you wear is a reflection of who you are. We curate fashion that doesn't chase trends but defines them. Each piece in our collection is thoughtfully sourced from designers who share our obsession with quality, silhouette, and longevity.
          </p>
          <p className="text-[0.7rem] leading-[2.1] tracking-[0.04em] max-w-md mb-12" style={{ color: "var(--text-muted)" }}>
            We believe fashion is not fast — it is an investment in how you present yourself to the world. Every stitch, every cut, every fabric tells a story worth wearing.
          </p>

          <a href="#"
            className="inline-block w-fit px-10 py-4 text-[0.58rem] font-semibold tracking-[0.28em] uppercase transition-all duration-300 hover:-translate-y-px"
            style={{ background: "var(--gold)", color: "var(--bg-primary)" }}
            onMouseEnter={e => e.currentTarget.style.background = "var(--gold-light)"}
            onMouseLeave={e => e.currentTarget.style.background = "var(--gold)"}
          >Discover Our Story</a>

          <div className="flex gap-10 mt-14 pt-10" style={{ borderTop: "1px solid var(--border-soft)" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-['Cormorant_Garamond',serif] text-[2.4rem] font-light leading-none mb-1" style={{ color: "var(--gold)" }}>{s.number}</p>
                <p className="text-[0.55rem] tracking-[0.2em] uppercase" style={{ color: "var(--text-muted)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[50vh] lg:min-h-full overflow-hidden" style={{ background: "var(--bg-tertiary)" }}>
          <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 80px,rgba(201,169,110,0.015) 80px,rgba(201,169,110,0.015) 81px),repeating-linear-gradient(90deg,transparent,transparent 80px,rgba(201,169,110,0.015) 80px,rgba(201,169,110,0.015) 81px)" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[0.55rem] tracking-[0.25em] uppercase" style={{ color: "rgba(201,169,110,0.2)" }}>Add Brand Image</span>
          </div>
          <div className="absolute top-8 right-8 bottom-8 left-8 border pointer-events-none" style={{ border: "1px solid rgba(201,169,110,0.07)" }} />
          <div className="absolute bottom-10 left-0 px-5 py-3" style={{ background: "var(--gold)", color: "var(--bg-primary)" }}>
            <p className="text-[0.52rem] font-semibold tracking-[0.25em] uppercase">Est. 2020</p>
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-12 lg:px-20 py-20" style={{ borderTop: "1px solid var(--border-soft)" }}>
        <div className="flex items-center gap-4 mb-14">
          <span className="w-8 h-px block" style={{ background: "var(--gold)" }} />
          <span className="text-[0.55rem] font-semibold tracking-[0.35em] uppercase" style={{ color: "var(--gold)" }}>What We Stand For</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x"
          style={{ borderColor: "var(--border-soft)" }}>
          {values.map((v) => (
            <div key={v.number} className="px-0 sm:px-10 first:pl-0 last:pr-0 py-10 sm:py-0">
              <p className="font-['Cormorant_Garamond',serif] text-[2.5rem] font-light leading-none mb-6"
                style={{ color: "rgba(201,169,110,0.15)" }}>{v.number}</p>
              <p className="text-[0.72rem] font-semibold tracking-[0.1em] uppercase mb-4"
                style={{ color: "var(--text-secondary)" }}>{v.title}</p>
              <p className="text-[0.68rem] leading-[2] tracking-[0.03em]"
                style={{ color: "var(--text-muted)" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;