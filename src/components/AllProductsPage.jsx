import React, { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown, ChevronUp } from "lucide-react";


const allProducts = [
  { id: 1,  name: "Silk Wrap Dress",        price: 285, oldPrice: null, badge: "New",        badgeType: "gold", category: "women",       bg: "bg-[#1c1610]" },
  { id: 2,  name: "Tailored Blazer",         price: 195, oldPrice: 320, badge: "Sale",       badgeType: "red",  category: "men",         bg: "bg-[#171310]" },
  { id: 3,  name: "Linen Wide-Leg Trousers", price: 165, oldPrice: null, badge: null,        badgeType: null,   category: "women",       bg: "bg-[#1a1510]" },
  { id: 4,  name: "Cashmere Knit Midi",      price: 340, oldPrice: null, badge: "Bestseller",badgeType: "gold", category: "new",         bg: "bg-[#1e1812]" },
  { id: 5,  name: "Draped Satin Blouse",     price: 145, oldPrice: null, badge: "New",       badgeType: "gold", category: "new",         bg: "bg-[#191510]" },
  { id: 6,  name: "Wool Overcoat",           price: 520, oldPrice: 680, badge: "Sale",       badgeType: "red",  category: "men",         bg: "bg-[#141210]" },
  { id: 7,  name: "Pleated Midi Skirt",      price: 210, oldPrice: null, badge: null,        badgeType: null,   category: "women",       bg: "bg-[#1b1612]" },
  { id: 8,  name: "Structured Tote Bag",     price: 390, oldPrice: null, badge: "Bestseller",badgeType: "gold", category: "accessories", bg: "bg-[#171310]" },
  { id: 9,  name: "Velvet Evening Gown",     price: 620, oldPrice: null, badge: "New",       badgeType: "gold", category: "women",       bg: "bg-[#1d1612]" },
  { id: 10, name: "Merino Turtleneck",       price: 175, oldPrice: null, badge: null,        badgeType: null,   category: "men",         bg: "bg-[#161412]" },
  { id: 11, name: "Leather Belt",            price: 95,  oldPrice: null, badge: null,        badgeType: null,   category: "accessories", bg: "bg-[#181410]" },
  { id: 12, name: "Crepe Wrap Coat",         price: 480, oldPrice: 590, badge: "Sale",       badgeType: "red",  category: "women",       bg: "bg-[#1a1612]" },
  { id: 13, name: "Slim Dress Trousers",     price: 220, oldPrice: null, badge: null,        badgeType: null,   category: "men",         bg: "bg-[#151210]" },
  { id: 14, name: "Chain Shoulder Bag",      price: 455, oldPrice: null, badge: "New",       badgeType: "gold", category: "accessories", bg: "bg-[#1c1810]" },
  { id: 15, name: "Ribbed Knit Cardigan",    price: 195, oldPrice: null, badge: "Bestseller",badgeType: "gold", category: "women",       bg: "bg-[#191510]" },
  { id: 16, name: "Linen Shirt",             price: 130, oldPrice: null, badge: null,        badgeType: null,   category: "men",         bg: "bg-[#171412]" },
];

const CATEGORIES  = [{ label: "All", value: "all" }, { label: "Women", value: "women" }, { label: "Men", value: "men" }, { label: "Accessories", value: "accessories" }, { label: "New In", value: "new" }];
const PRICE_RANGES = [{ label: "Under $150", min: 0, max: 150 }, { label: "$150 – $300", min: 150, max: 300 }, { label: "$300 – $500", min: 300, max: 500 }, { label: "Over $500", min: 500, max: Infinity }];
const SORT_OPTIONS = [{ label: "Featured", value: "featured" }, { label: "Price: Low – High", value: "price_asc" }, { label: "Price: High – Low", value: "price_desc" }, { label: "Newest", value: "newest" }];
const PAGE_SIZE = 8;

const ProductCard = ({ product }) => {
  const [wishlisted, setWishlisted] = useState(false);
  return (
    <Link to={`/product/${product.id}`} className="group flex flex-col cursor-pointer">
      <div className={`relative w-full aspect-[3/4] overflow-hidden ${product.bg}`}>
        <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 80px,rgba(201,169,110,0.015) 80px,rgba(201,169,110,0.015) 81px)" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[0.46rem] tracking-[0.2em] uppercase" style={{ color: "rgba(201,169,110,0.18)" }}>Product Image</span>
        </div>
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-[5px] text-[0.48rem] font-semibold tracking-[0.18em] uppercase"
            style={product.badgeType === "gold"
              ? { background: "var(--gold)", color: "var(--bg-primary)" }
              : { background: "var(--sale-bg)", color: "var(--sale-text)" }}>
            {product.badge}
          </span>
        )}
        <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setWishlisted(!wishlisted); }}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{ background: "rgba(0,0,0,0.5)", border: wishlisted ? "1px solid var(--gold)" : "1px solid rgba(201,169,110,0.3)" }}>
          <svg viewBox="0 0 24 24" strokeWidth="1.5" className="w-3 h-3 transition-all duration-200"
            style={{ stroke: "var(--gold)", fill: wishlisted ? "var(--gold)" : "none" }}>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        <div className="absolute bottom-0 left-0 right-0 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
          style={{ background: "rgba(10,8,6,0.92)" }}>
          <p className="text-center text-[0.55rem] font-semibold tracking-[0.28em] uppercase" style={{ color: "var(--gold)" }}>Quick Add</p>
        </div>
      </div>
      <div className="pt-3">
        <p className="font-['Cormorant_Garamond',serif] text-[1rem] font-light leading-snug mb-1" style={{ color: "var(--text-secondary)" }}>{product.name}</p>
        <div className="flex items-center gap-3">
          <span className="text-[0.68rem] font-medium tracking-[0.04em]" style={{ color: "var(--gold)" }}>${product.price.toFixed(2)}</span>
          {product.oldPrice && <span className="text-[0.62rem] line-through" style={{ color: "var(--text-muted)" }}>${product.oldPrice.toFixed(2)}</span>}
        </div>
      </div>
    </Link>
  );
};

const FilterSection = ({ title, children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="py-5" style={{ borderBottom: "1px solid var(--border-soft)" }}>
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full">
        <span className="text-[0.55rem] font-semibold tracking-[0.3em] uppercase" style={{ color: "var(--gold)" }}>{title}</span>
        {open ? <ChevronUp size={13} style={{ color: "var(--text-dim)" }} /> : <ChevronDown size={13} style={{ color: "var(--text-dim)" }} />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 mt-4" : "max-h-0"}`}>{children}</div>
    </div>
  );
};

export default function AllProducts() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category,   setCategory]  = useState("all");
  const [priceRange, setPriceRange] = useState(null);
  const [sort,       setSort]       = useState("featured");
  const [visible,    setVisible]    = useState(PAGE_SIZE);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sortOpen,   setSortOpen]   = useState(false);
  const sortRef = useRef(null);
  const searchQuery = searchParams.get("q")?.toLowerCase().trim() || "";

  useEffect(() => { setVisible(PAGE_SIZE); }, [searchQuery, category, priceRange, sort]);
  useEffect(() => {
    const handler = (e) => { if (sortRef.current && !sortRef.current.contains(e.target)) setSortOpen(false); };
    if (sortOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [sortOpen]);

  const clearSearch = () => { const next = new URLSearchParams(searchParams); next.delete("q"); setSearchParams(next); };
  const clearAll    = () => { setCategory("all"); setPriceRange(null); clearSearch(); };
  const activeFiltersCount = (category !== "all" ? 1 : 0) + (priceRange !== null ? 1 : 0) + (searchQuery ? 1 : 0);

  const filtered = allProducts
    .filter((p) => !searchQuery || p.name.toLowerCase().includes(searchQuery))
    .filter((p) => category === "all" || p.category === category)
    .filter((p) => !priceRange || (p.price >= priceRange.min && p.price < priceRange.max))
    .sort((a, b) => sort === "price_asc" ? a.price - b.price : sort === "price_desc" ? b.price - a.price : sort === "newest" ? b.id - a.id : 0);

  const shown = filtered.slice(0, visible);

  const Filters = () => (
    <div>
      <FilterSection title="Category">
        <ul className="flex flex-col gap-3">
          {CATEGORIES.map((c) => (
            <li key={c.value}>
              <button onClick={() => setCategory(c.value)} className="flex items-center gap-3 text-[0.65rem] tracking-[0.05em] transition-colors duration-200 w-full text-left"
                style={{ color: category === c.value ? "var(--gold)" : "var(--text-muted)" }}>
                <span className="w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ background: category === c.value ? "var(--gold)" : "var(--border)" }} />
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      </FilterSection>
      <FilterSection title="Price">
        <ul className="flex flex-col gap-3">
          {PRICE_RANGES.map((r, i) => (
            <li key={i}>
              <button onClick={() => setPriceRange(priceRange?.label === r.label ? null : r)} className="flex items-center gap-3 text-[0.65rem] tracking-[0.05em] transition-colors duration-200 w-full text-left"
                style={{ color: priceRange?.label === r.label ? "var(--gold)" : "var(--text-muted)" }}>
                <span className="w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ background: priceRange?.label === r.label ? "var(--gold)" : "var(--border)" }} />
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </FilterSection>
      {activeFiltersCount > 0 && (
        <button onClick={clearAll} className="mt-6 text-[0.55rem] font-semibold tracking-[0.2em] uppercase flex items-center gap-2 transition-colors"
          style={{ color: "var(--text-muted)" }}
          onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
          onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
        ><X size={11} /> Clear All</button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen font-['Montserrat',sans-serif] pt-24" style={{ background: "var(--bg-primary)" }}>

      <div className="px-6 sm:px-12 lg:px-20 py-12" style={{ borderBottom: "1px solid var(--border-soft)" }}>
        <div className="flex items-center gap-4 mb-3">
          <span className="w-8 h-px block" style={{ background: "var(--gold)" }} />
          <span className="text-[0.55rem] font-semibold tracking-[0.35em] uppercase" style={{ color: "var(--gold)" }}>The Collection</span>
        </div>
        <h1 className="font-['Cormorant_Garamond',serif] text-[3rem] sm:text-[4rem] font-light leading-none" style={{ color: "var(--text-primary)" }}>
          {searchQuery ? `Results for "${searchQuery}"` : "All Products"}
        </h1>
      </div>

      <div className="flex px-6 sm:px-12 lg:px-20 py-10 gap-12">
        <aside className="hidden lg:block w-52 flex-shrink-0 pt-1">
          <p className="text-[0.55rem] font-semibold tracking-[0.35em] uppercase mb-6" style={{ color: "var(--text-secondary)" }}>Filter</p>
          <Filters />
        </aside>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
            <button onClick={() => setDrawerOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 text-[0.58rem] font-semibold tracking-[0.2em] uppercase transition-all duration-200"
              style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
            >
              <SlidersHorizontal size={13} />
              Filter {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </button>

            <p className="text-[0.6rem] tracking-[0.08em]" style={{ color: "var(--text-muted)" }}>
              Showing <span style={{ color: "var(--gold-light)" }}>{Math.min(visible, filtered.length)}</span> of{" "}
              <span style={{ color: "var(--gold-light)" }}>{filtered.length}</span> products
            </p>

            <div className="relative" ref={sortRef}>
              <button onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-3 px-4 py-2 text-[0.58rem] font-semibold tracking-[0.15em] uppercase transition-all duration-200"
                style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
              >
                {SORT_OPTIONS.find((o) => o.value === sort)?.label}
                <ChevronDown size={12} className={`transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`} />
              </button>
              {sortOpen && (
                <div className="absolute left-0 sm:left-auto sm:right-0 top-full mt-1 w-48 z-30"
                  style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}>
                  {SORT_OPTIONS.map((o) => (
                    <button key={o.value} onClick={() => { setSort(o.value); setSortOpen(false); }}
                      className="block w-full text-left px-4 py-3 text-[0.58rem] tracking-[0.1em] transition-colors duration-150"
                      style={{ color: sort === o.value ? "var(--gold)" : "var(--text-muted)", background: sort === o.value ? "var(--border-soft)" : "transparent" }}
                      onMouseEnter={e => e.currentTarget.style.color = "var(--text-primary)"}
                      onMouseLeave={e => e.currentTarget.style.color = sort === o.value ? "var(--gold)" : "var(--text-muted)"}
                    >{o.label}</button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {searchQuery && (
                <span className="flex items-center gap-2 px-3 py-1 text-[0.55rem] tracking-[0.1em]"
                  style={{ border: "1px solid var(--border)", color: "var(--gold)" }}>
                  "{searchQuery}" <button onClick={clearSearch}><X size={10} /></button>
                </span>
              )}
              {category !== "all" && (
                <span className="flex items-center gap-2 px-3 py-1 text-[0.55rem] tracking-[0.1em] uppercase"
                  style={{ border: "1px solid var(--border)", color: "var(--gold)" }}>
                  {CATEGORIES.find((c) => c.value === category)?.label} <button onClick={() => setCategory("all")}><X size={10} /></button>
                </span>
              )}
              {priceRange && (
                <span className="flex items-center gap-2 px-3 py-1 text-[0.55rem] tracking-[0.1em] uppercase"
                  style={{ border: "1px solid var(--border)", color: "var(--gold)" }}>
                  {priceRange.label} <button onClick={() => setPriceRange(null)}><X size={10} /></button>
                </span>
              )}
            </div>
          )}

          {shown.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 pb-10">
              {shown.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <p className="font-['Cormorant_Garamond',serif] text-[2rem] font-light" style={{ color: "var(--text-primary)" }}>No results found</p>
              <p className="text-[0.62rem] tracking-[0.1em]" style={{ color: "var(--text-muted)" }}>
                {searchQuery ? `No products match "${searchQuery}"` : "Try adjusting your filters"}
              </p>
              <button onClick={clearAll} className="mt-2 px-8 py-3 text-[0.55rem] font-semibold tracking-[0.25em] uppercase transition-all duration-300"
                style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--bg-primary)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
              >Clear All</button>
            </div>
          )}

          {visible < filtered.length && (
            <div className="flex justify-center mt-8 mb-16">
              <button onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="px-14 py-4 text-[0.58rem] font-semibold tracking-[0.3em] uppercase transition-all duration-300"
                style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--bg-primary)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
              >Load More</button>
            </div>
          )}
        </div>
      </div>

      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/70" onClick={() => setDrawerOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 px-7 py-8 overflow-y-auto"
            style={{ background: "var(--bg-secondary)", borderRight: "1px solid var(--border)" }}>
            <div className="flex items-center justify-between mb-8">
              <p className="text-[0.55rem] font-semibold tracking-[0.35em] uppercase" style={{ color: "var(--text-secondary)" }}>Filter</p>
              <button onClick={() => setDrawerOpen(false)}><X size={18} style={{ color: "var(--text-muted)" }} /></button>
            </div>
            <Filters />
            <button onClick={() => setDrawerOpen(false)}
              className="mt-10 w-full py-4 text-[0.58rem] font-semibold tracking-[0.25em] uppercase transition-all duration-300"
              style={{ background: "var(--gold)", color: "var(--bg-primary)" }}
            >Apply Filters</button>
          </div>
        </div>
      )}
    </div>
  );
}