import React from "react";

const stats = [
  { number: "300+", label: "Curated Pieces" },
  { number: "18", label: "Global Designers" },
  { number: "12K+", label: "Happy Clients" },
];

const values = [
  {
    number: "01",
    title: "Timeless Design",
    desc: "Every piece is selected to transcend seasons — built to be worn, loved, and passed on.",
  },
  {
    number: "02",
    title: "Conscious Craft",
    desc: "We work only with makers who share our commitment to ethical production and quality materials.",
  },
  {
    number: "03",
    title: "Elevated Living",
    desc: "Fashion is not decoration. It is intention. We dress people who move through the world with purpose.",
  },
];

const About = () => {
  return (
    <section id="about" className="w-full bg-[#0d0b08] font-['Montserrat',sans-serif] overflow-hidden">

      {/* ── TOP SPLIT: Text left / Image right ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">

        {/* Left — brand story */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-20 lg:py-28 relative">

          {/* Decorative number watermark */}
          <span className="absolute top-10 right-0 font-['Cormorant_Garamond',serif] text-[12rem] font-light leading-none text-[rgba(201,169,110,0.04)] select-none pointer-events-none">
            25
          </span>

          {/* Label */}
          <div className="flex items-center gap-4 mb-5">
            <span className="w-8 h-px bg-[#c9a96e] block" />
            <span className="text-[0.55rem] font-semibold tracking-[0.35em] uppercase text-[#c9a96e]">
              Our Story
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-['Cormorant_Garamond',serif] text-[3rem] sm:text-[3.8rem] lg:text-[4.5rem] font-light leading-[1.05] text-[#f5efe6] mb-8">
            Crafted with
            <br />
            <em className="italic text-[#e8d5a3]">Intention</em>
          </h2>

          {/* Body copy */}
          <p className="text-[0.7rem] leading-[2.1] tracking-[0.04em] text-[#9e9082] max-w-md mb-5">
            Maison was born from a simple belief — that what you wear is a
            reflection of who you are. We curate fashion that doesn't chase
            trends but defines them. Each piece in our collection is
            thoughtfully sourced from designers who share our obsession with
            quality, silhouette, and longevity.
          </p>
          <p className="text-[0.7rem] leading-[2.1] tracking-[0.04em] text-[#9e9082] max-w-md mb-12">
            We believe fashion is not fast — it is an investment in how you
            present yourself to the world. Every stitch, every cut, every
            fabric tells a story worth wearing.
          </p>

          {/* CTA */}
          <a
            href="#"
            className="inline-block w-fit px-10 py-4 bg-[#c9a96e] text-[#0a0806]
              text-[0.58rem] font-semibold tracking-[0.28em] uppercase
              transition-all duration-300 hover:bg-[#e8d5a3] hover:-translate-y-px"
          >
            Discover Our Story
          </a>

          {/* Stats row */}
          <div className="flex gap-10 mt-14 pt-10 border-t border-[rgba(201,169,110,0.08)]">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-['Cormorant_Garamond',serif] text-[2.4rem] font-light text-[#c9a96e] leading-none mb-1">
                  {s.number}
                </p>
                <p className="text-[0.55rem] tracking-[0.2em] uppercase text-[#9e9082]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div className="relative min-h-[50vh] lg:min-h-full bg-[#14100c] overflow-hidden">
          {/* texture */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 80px,rgba(201,169,110,0.015) 80px,rgba(201,169,110,0.015) 81px),repeating-linear-gradient(90deg,transparent,transparent 80px,rgba(201,169,110,0.015) 80px,rgba(201,169,110,0.015) 81px)",
            }}
          />

          {/* Image placeholder — swap with <img> */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[0.55rem] tracking-[0.25em] uppercase text-[rgba(201,169,110,0.2)]">
              Add Brand Image
            </span>
          </div>

          {/* Decorative border accent */}
          <div className="absolute top-8 right-8 bottom-8 left-8 border border-[rgba(201,169,110,0.07)] pointer-events-none" />

          {/* Est. badge */}
          <div className="absolute bottom-10 left-0 bg-[#c9a96e] text-[#0a0806] px-5 py-3">
            <p className="text-[0.52rem] font-semibold tracking-[0.25em] uppercase">
              Est. 2020
            </p>
          </div>
        </div>
      </div>

      {/* ── BOTTOM: Values strip ── */}
      <div className="border-t border-[rgba(201,169,110,0.1)] px-6 sm:px-12 lg:px-20 py-20">

        {/* Label */}
        <div className="flex items-center gap-4 mb-14">
          <span className="w-8 h-px bg-[#c9a96e] block" />
          <span className="text-[0.55rem] font-semibold tracking-[0.35em] uppercase text-[#c9a96e]">
            What We Stand For
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(201,169,110,0.1)]">
          {values.map((v) => (
            <div key={v.number} className="px-0 sm:px-10 first:pl-0 last:pr-0 py-10 sm:py-0">
              <p className="font-['Cormorant_Garamond',serif] text-[2.5rem] font-light text-[rgba(201,169,110,0.15)] leading-none mb-6">
                {v.number}
              </p>
              <p className="text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-[#f0e8de] mb-4">
                {v.title}
              </p>
              <p className="text-[0.68rem] leading-[2] tracking-[0.03em] text-[#9e9082]">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;