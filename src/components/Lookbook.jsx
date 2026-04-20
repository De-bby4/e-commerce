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
    tag: "Black Tie",
  },
];

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function LookCard({ look, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] overflow-hidden">

      {/* Image panel — fade + scale like hero text */}
      <div
        className={`relative overflow-hidden min-h-[60vh] lg:min-h-full ${look.bg} ${isEven ? "lg:order-1" : "lg:order-2"}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          transition: "opacity 1.5s ease, transform 1.5s ease",
          transitionDelay: `${index * 60}ms`,
          opacity: inView ? 1 : 0,
          transform: inView ? "scale(1)" : "scale(0.95)",
        }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 80px,rgba(201,169,110,0.015) 80px,rgba(201,169,110,0.015) 81px),repeating-linear-gradient(90deg,transparent,transparent 80px,rgba(201,169,110,0.015) 80px,rgba(201,169,110,0.015) 81px)"
        }} />

        <img src="/src/assets/finie.jpeg" alt="Look" className="absolute inset-0 w-full h-full object-cover object-top" style={{ objectPosition: "center 50%" }}/>

        <div
          className="absolute border pointer-events-none transition-all duration-700"
          style={{
            inset: hovered ? "12px" : "20px",
            borderColor: hovered ? "rgba(201,169,110,0.3)" : "rgba(201,169,110,0.08)",
          }}
        />

        <span className="absolute bottom-6 right-6 font-['Cormorant_Garamond',serif] text-[8rem] font-light leading-none select-none pointer-events-none"
          style={{ color: "rgba(201,169,110,0.06)" }}>
          {look.number}
        </span>

        <div className="absolute top-6 left-0 px-4 py-2 text-[0.5rem] font-semibold tracking-[0.2em] uppercase"
          style={{ background: "var(--gold)", color: "var(--bg-primary)" }}>
          {look.season}
        </div>

        <div className="absolute top-6 right-6 px-3 py-1.5" style={{ border: "1px solid rgba(201,169,110,0.3)" }}>
          <span className="text-[0.48rem] tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>{look.tag}</span>
        </div>

        <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none
          ${isEven ? "bg-gradient-to-r" : "bg-gradient-to-l"} from-transparent to-[rgba(10,8,6,0.35)]
          ${hovered ? "opacity-0" : "opacity-100"}`}
        />
      </div>

      {/* Content panel — fade + slide up */}
      <div
        className={`relative flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 ${isEven ? "lg:order-2" : "lg:order-1"}`}
        style={{
          background: "var(--bg-secondary)",
          transition: "opacity 1s ease, transform 1s ease",
          transitionDelay: `${index * 60 + 200}ms`,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(30px)",
        }}
      >
        <div className={`absolute top-0 bottom-0 w-px ${isEven ? "left-0" : "right-0"}`}
          style={{ background: "var(--border-soft)" }} />

        <div className="flex items-center gap-4 mb-8">
          <span className="w-8 h-px block" style={{ background: "var(--gold)" }} />
          <span className="text-[0.52rem] font-semibold tracking-[0.35em] uppercase" style={{ color: "var(--gold)" }}>
            Look {look.number}
          </span>
        </div>

        <h2 className="font-['Cormorant_Garamond',serif] text-[3.5rem] sm:text-[4.5rem] font-light leading-[0.95] mb-2"
          style={{ color: "var(--text-primary)" }}>
          {look.title}
        </h2>
        <p className="font-['Cormorant_Garamond',serif] text-[1.4rem] font-light italic mb-8"
          style={{ color: "var(--gold)" }}>
          {look.subtitle}
        </p>

        <p className="text-[0.7rem] leading-[2.1] tracking-[0.04em] mb-10 max-w-sm"
          style={{ color: "var(--text-muted)" }}>
          {look.desc}
        </p>

        <div className="mb-10">
          <p className="text-[0.5rem] font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--text-dim)" }}>
            The Look
          </p>
          <ul className="flex flex-col gap-3">
            {look.products.map((p) => (
              <li key={p.id}>
                <Link
                  to={`/product/${p.id}`}
                  className="flex items-center justify-between group pb-3 transition-all duration-200"
                  style={{ borderBottom: "1px solid rgba(201,169,110,0.08)" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(201,169,110,0.25)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(201,169,110,0.08)"}
                >
                  <span className="text-[0.68rem] tracking-[0.03em] transition-colors duration-200"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}
                  >
                    {p.name}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-[0.62rem]" style={{ color: "var(--text-muted)" }}>{p.price}</span>
                    <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform duration-200"
                      style={{ color: "var(--text-dim)" }} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link
          to="/shop"
          className="inline-flex items-center gap-3 w-fit px-8 py-3 text-[0.58rem] font-semibold tracking-[0.25em] uppercase transition-all duration-300 group"
          style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
          onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--bg-primary)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
        >
          Shop This Look
          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
}

export default function Lookbook() {
  const [heroRef, heroInView] = useInView();

  return (
    <div className="min-h-screen font-['Montserrat',sans-serif]" style={{ background: "var(--bg-primary)" }}>

      {/* HERO */}
      <div
        ref={heroRef}
        className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-24"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(45deg,transparent,transparent 100px,rgba(201,169,110,0.012) 100px,rgba(201,169,110,0.012) 101px)"
        }} />

        <span
          className="absolute font-['Cormorant_Garamond',serif] text-[18vw] font-light leading-none select-none pointer-events-none"
          style={{
            color: "rgba(201,169,110,0.04)",
            transition: "opacity 1.5s ease, transform 1.5s ease",
            opacity: heroInView ? 1 : 0,
            transform: heroInView ? "scale(1)" : "scale(0.95)",
          }}
        >
          LOOKS
        </span>

        <div
          style={{
            position: "relative",
            zIndex: 10,
            transition: "opacity 1s ease, transform 1s ease",
            transitionDelay: "300ms",
            opacity: heroInView ? 1 : 0,
            transform: heroInView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px block" style={{ background: "var(--gold)" }} />
            <span className="text-[0.55rem] font-semibold tracking-[0.4em] uppercase" style={{ color: "var(--gold)" }}>
              SS / AW 2025
            </span>
            <span className="w-12 h-px block" style={{ background: "var(--gold)" }} />
          </div>

          <h1 className="font-['Cormorant_Garamond',serif] text-[5rem] sm:text-[7rem] lg:text-[9rem] font-light leading-[0.9] mb-6"
            style={{ color: "var(--text-primary)" }}>
            The<br /><em className="italic" style={{ color: "var(--gold-light)" }}>Lookbook</em>
          </h1>

          <p className="text-[0.7rem] leading-[2] tracking-[0.06em] max-w-md mx-auto mb-10"
            style={{ color: "var(--text-muted)" }}>
            Four stories. Eight pieces. One vision of what it means to dress with intention.
          </p>

          <div className="flex flex-col items-center gap-3 mt-4">
            <span className="text-[0.52rem] tracking-[0.3em] uppercase" style={{ color: "var(--text-dim)" }}>Scroll to explore</span>
            <div className="w-px h-12 animate-pulse" style={{ background: "linear-gradient(to bottom, var(--text-dim), transparent)" }} />
          </div>
        </div>
      </div>

      {/* LOOKS */}
      <div className="divide-y divide-[rgba(201,169,110,0.08)]">
        {looks.map((look, i) => (
          <LookCard key={look.id} look={look} index={i} />
        ))}
      </div>

      {/* FOOTER CTA */}
      <div className="relative px-6 sm:px-12 lg:px-20 py-28 text-center border-t border-[rgba(201,169,110,0.1)] overflow-hidden">
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Cormorant_Garamond',serif] text-[12vw] font-light leading-none select-none pointer-events-none whitespace-nowrap"
          style={{ color: "rgba(201,169,110,0.04)" }}>
          Shop Now
        </span>
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="w-8 h-px block" style={{ background: "var(--gold)" }} />
            <span className="text-[0.55rem] font-semibold tracking-[0.35em] uppercase" style={{ color: "var(--gold)" }}>
              The Collection
            </span>
            <span className="w-8 h-px block" style={{ background: "var(--gold)" }} />
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[3rem] sm:text-[4.5rem] font-light mb-6 leading-none"
            style={{ color: "var(--text-primary)" }}>
            Ready to wear<br /><em className="italic" style={{ color: "var(--gold-light)" }}>your story?</em>
          </h2>
          <p className="text-[0.7rem] leading-[2] max-w-sm mx-auto mb-10" style={{ color: "var(--text-muted)" }}>
            Every piece from these looks is available now. Shop the full collection and build your own narrative.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 px-12 py-4 text-[0.6rem] font-semibold tracking-[0.3em] uppercase transition-all duration-300 group"
            style={{ background: "var(--gold)", color: "var(--bg-primary)" }}
            onMouseEnter={e => e.currentTarget.style.background = "var(--gold-light)"}
            onMouseLeave={e => e.currentTarget.style.background = "var(--gold)"}
          >
            Shop All Products
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>

    </div>
  );
}