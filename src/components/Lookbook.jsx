import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const looks = [
  {
    id: 1,
    number: "01",
    title: "The Understated",
    subtitle: "Power Dressing",
    desc: "Clean lines, quiet confidence. A study in restraint that says everything without saying a word.",
    season: "SS '25",
    products: [
      { id: 2,  name: "Tailored Blazer",        price: "$195.00" },
      { id: 13, name: "Slim Dress Trousers",     price: "$220.00" },
      { id: 11, name: "Leather Belt",            price: "$95.00"  },
    ],
    bg: "bg-[#1a1410]",
    accent: "#c9a96e",
    tag: "Minimal Power",
  },
  {
    id: 2,
    number: "02",
    title: "The Femme",
    subtitle: "Fluid & Effortless",
    desc: "Movement as a medium. Draped, poured, and worn with the ease of someone who has nothing to prove.",
    season: "SS '25",
    products: [
      { id: 1,  name: "Silk Wrap Dress",         price: "$285.00" },
      { id: 5,  name: "Draped Satin Blouse",     price: "$145.00" },
      { id: 14, name: "Chain Shoulder Bag",      price: "$455.00" },
    ],
    bg: "bg-[#1c1612]",
    accent: "#e8d5a3",
    tag: "Evening Ready",
  },
  {
    id: 3,
    number: "03",
    title: "The Curator",
    subtitle: "Layered Textures",
    desc: "Cashmere against skin, wool against air. The art of dressing is knowing what to add — and what to leave out.",
    season: "AW '25",
    products: [
      { id: 4,  name: "Cashmere Knit Midi",      price: "$340.00" },
      { id: 15, name: "Ribbed Knit Cardigan",    price: "$195.00" },
      { id: 8,  name: "Structured Tote Bag",     price: "$390.00" },
    ],
    bg: "bg-[#18140f]",
    accent: "#c9a96e",
    tag: "Transitional",
  },
  {
    id: 4,
    number: "04",
    title: "The Evening",
    subtitle: "After Dark",
    desc: "When the sun sets, the real dressing begins. For moments that deserve to be remembered.",
    season: "AW '25",
    products: [
      { id: 9,  name: "Velvet Evening Gown",     price: "$620.00" },
      { id: 12, name: "Crepe Wrap Coat",         price: "$480.00" },
      { id: 14, name: "Chain Shoulder Bag",      price: "$455.00" },
    ],
    bg: "bg-[#100d0a]",
    accent: "#e8d5a3",
    tag: "Black Tie",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return [ref, inView];
}

function LookCard({ look, index }) {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] transition-all duration-1000
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image panel */}
      <div
        className={`relative overflow-hidden min-h-[60vh] lg:min-h-full ${look.bg}
          ${isEven ? "lg:order-1" : "lg:order-2"}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Texture */}
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 80px,rgba(201,169,110,0.015) 80px,rgba(201,169,110,0.015) 81px),repeating-linear-gradient(90deg,transparent,transparent 80px,rgba(201,169,110,0.015) 80px,rgba(201,169,110,0.015) 81px)"
        }} />

        {/* Image placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[0.55rem] tracking-[0.3em] uppercase text-[rgba(201,169,110,0.2)]">
            Add Editorial Image
          </span>
        </div>

        {/* Decorative frame — animates on hover */}
        <div className={`absolute inset-5 border transition-all duration-700
          ${hovered ? "border-[rgba(201,169,110,0.25)] inset-3" : "border-[rgba(201,169,110,0.08)]"}`}
          style={{ pointerEvents: "none" }}
        />

        {/* Look number — big watermark */}
        <span className="absolute bottom-6 right-6 font-['Cormorant_Garamond',serif] text-[8rem] font-light leading-none select-none pointer-events-none"
          style={{ color: "rgba(201,169,110,0.06)" }}>
          {look.number}
        </span>

        {/* Season badge */}
        <div className="absolute top-6 left-0 bg-[#c9a96e] text-[#0a0806] px-4 py-2 text-[0.5rem] font-semibold tracking-[0.2em] uppercase">
          {look.season}
        </div>

        {/* Tag pill */}
        <div className="absolute top-6 right-6 border border-[rgba(201,169,110,0.3)] px-3 py-1.5">
          <span className="text-[0.48rem] tracking-[0.2em] uppercase text-[#c9a96e]">{look.tag}</span>
        </div>

        {/* Gradient overlay */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${isEven ? "bg-gradient-to-r" : "bg-gradient-to-l"} from-transparent to-[rgba(10,8,6,0.4)] ${hovered ? "opacity-0" : "opacity-100"}`} />
      </div>

      {/* Content panel */}
      <div className={`relative flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 bg-[#0d0b08]
        ${isEven ? "lg:order-2" : "lg:order-1"}`}
      >
        {/* Decorative line */}
        <div className={`absolute top-0 bottom-0 w-px bg-[rgba(201,169,110,0.08)]
          ${isEven ? "left-0" : "right-0"}`} />

        {/* Look number small */}
        <div className="flex items-center gap-4 mb-8">
          <span className="w-8 h-px bg-[#c9a96e] block" />
          <span className="text-[0.52rem] font-semibold tracking-[0.35em] uppercase text-[#c9a96e]">
            Look {look.number}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-['Cormorant_Garamond',serif] text-[3.5rem] sm:text-[4.5rem] font-light leading-[0.95] text-[#f5efe6] mb-2">
          {look.title}
        </h2>
        <p className="font-['Cormorant_Garamond',serif] text-[1.4rem] font-light italic text-[#c9a96e] mb-8">
          {look.subtitle}
        </p>

        {/* Description */}
        <p className="text-[0.7rem] leading-[2.1] tracking-[0.04em] text-[#9e9082] mb-10 max-w-sm">
          {look.desc}
        </p>

        {/* Products */}
        <div className="mb-10">
          <p className="text-[0.5rem] font-semibold tracking-[0.3em] uppercase text-[#7a6240] mb-4">
            The Look
          </p>
          <ul className="flex flex-col gap-3">
            {look.products.map((p) => (
              <li key={p.id}>
                <Link
                  to={`/product/${p.id}`}
                  className="flex items-center justify-between group border-b border-[rgba(201,169,110,0.08)] pb-3 hover:border-[rgba(201,169,110,0.25)] transition-all duration-200"
                >
                  <span className="text-[0.68rem] text-[#f0e8de] group-hover:text-[#c9a96e] transition-colors tracking-[0.03em]">
                    {p.name}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-[0.62rem] text-[#9e9082]">{p.price}</span>
                    <ArrowRight size={11} className="text-[#7a6240] group-hover:text-[#c9a96e] group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Shop look CTA */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-3 w-fit px-8 py-3 border border-[#c9a96e] text-[0.58rem] font-semibold tracking-[0.25em] uppercase text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#0a0806] transition-all duration-300 group"
        >
          Shop This Look
          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
}

export default function Lookbook() {
  const [heroRef, heroInView] = useInView(0.1);

  return (
    <div className="min-h-screen bg-[#0a0806] font-['Montserrat',sans-serif]">

      {/* ── HERO ── */}
      <div
        ref={heroRef}
        className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-24"
      >
        {/* Background texture */}
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(45deg,transparent,transparent 100px,rgba(201,169,110,0.012) 100px,rgba(201,169,110,0.012) 101px)"
        }} />

        {/* Big decorative text */}
        <span className={`absolute font-['Cormorant_Garamond',serif] text-[18vw] font-light leading-none select-none pointer-events-none transition-all duration-1500
          ${heroInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          style={{ color: "rgba(201,169,110,0.04)", transitionDuration: "1.5s" }}
        >
          LOOKS
        </span>

        {/* Content */}
        <div className={`relative z-10 transition-all duration-1000 delay-300 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-[#c9a96e] block" />
            <span className="text-[0.55rem] font-semibold tracking-[0.4em] uppercase text-[#c9a96e]">
              SS / AW 2025
            </span>
            <span className="w-12 h-px bg-[#c9a96e] block" />
          </div>

          <h1 className="font-['Cormorant_Garamond',serif] text-[5rem] sm:text-[7rem] lg:text-[9rem] font-light leading-[0.9] text-[#f5efe6] mb-6">
            The<br /><em className="italic text-[#e8d5a3]">Lookbook</em>
          </h1>

          <p className="text-[0.7rem] leading-[2] tracking-[0.06em] text-[#9e9082] max-w-md mx-auto mb-10">
            Four stories. Eight pieces. One vision of what it means to dress with intention.
          </p>

          {/* Scroll hint */}
          <div className="flex flex-col items-center gap-3 mt-4">
            <span className="text-[0.52rem] tracking-[0.3em] uppercase text-[#7a6240]">Scroll to explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#7a6240] to-transparent animate-pulse" />
          </div>
        </div>
      </div>

      {/* ── LOOKS ── */}
      <div className="divide-y divide-[rgba(201,169,110,0.08)]">
        {looks.map((look, i) => (
          <LookCard key={look.id} look={look} index={i} />
        ))}
      </div>

      {/* ── FOOTER CTA ── */}
      <div className="relative px-6 sm:px-12 lg:px-20 py-28 text-center border-t border-[rgba(201,169,110,0.1)] overflow-hidden">
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Cormorant_Garamond',serif] text-[12vw] font-light leading-none select-none pointer-events-none whitespace-nowrap"
          style={{ color: "rgba(201,169,110,0.04)" }}>
          Shop Now
        </span>
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="w-8 h-px bg-[#c9a96e] block" />
            <span className="text-[0.55rem] font-semibold tracking-[0.35em] uppercase text-[#c9a96e]">
              The Collection
            </span>
            <span className="w-8 h-px bg-[#c9a96e] block" />
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[3rem] sm:text-[4.5rem] font-light text-[#f5efe6] mb-6 leading-none">
            Ready to wear<br /><em className="italic text-[#e8d5a3]">your story?</em>
          </h2>
          <p className="text-[0.7rem] leading-[2] text-[#9e9082] max-w-sm mx-auto mb-10">
            Every piece from these looks is available now. Shop the full collection and build your own narrative.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 px-12 py-4 bg-[#c9a96e] text-[#0a0806] text-[0.6rem] font-semibold tracking-[0.3em] uppercase hover:bg-[#e8d5a3] transition-all duration-300 group"
          >
            Shop All Products
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>

    </div>
  );
}