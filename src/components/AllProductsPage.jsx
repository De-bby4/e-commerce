import React, { useState } from "react";
import { SlidersHorizontal, X, ChevronDown, ChevronUp } from "lucide-react";

const allProducts = [
  { id: 1,  name: "Silk Wrap Dress",         price: 285, oldPrice: null,  badge: "New",        badgeStyle: "bg-[#c9a96e] text-[#0a0806]",  category: "women",       bg: "bg-[#1c1610]" },
  { id: 2,  name: "Tailored Blazer",          price: 195, oldPrice: 320,   badge: "Sale",       badgeStyle: "bg-[#b83a2a] text-[#f5efe6]",  category: "men",         bg: "bg-[#171310]" },
  { id: 3,  name: "Linen Wide-Leg Trousers",  price: 165, oldPrice: null,  badge: null,         badgeStyle: null,                            category: "women",       bg: "bg-[#1a1510]" },
  { id: 4,  name: "Cashmere Knit Midi",       price: 340, oldPrice: null,  badge: "Bestseller", badgeStyle: "bg-[#c9a96e] text-[#0a0806]",  category: "new",         bg: "bg-[#1e1812]" },
  { id: 5,  name: "Draped Satin Blouse",      price: 145, oldPrice: null,  badge: "New",        badgeStyle: "bg-[#c9a96e] text-[#0a0806]",  category: "new",         bg: "bg-[#191510]" },
  { id: 6,  name: "Wool Overcoat",            price: 520, oldPrice: 680,   badge: "Sale",       badgeStyle: "bg-[#b83a2a] text-[#f5efe6]",  category: "men",         bg: "bg-[#141210]" },
  { id: 7,  name: "Pleated Midi Skirt",       price: 210, oldPrice: null,  badge: null,         badgeStyle: null,                            category: "women",       bg: "bg-[#1b1612]" },
  { id: 8,  name: "Structured Tote Bag",      price: 390, oldPrice: null,  badge: "Bestseller", badgeStyle: "bg-[#c9a96e] text-[#0a0806]",  category: "accessories", bg: "bg-[#171310]" },
  { id: 9,  name: "Velvet Evening Gown",      price: 620, oldPrice: null,  badge: "New",        badgeStyle: "bg-[#c9a96e] text-[#0a0806]",  category: "women",       bg: "bg-[#1d1612]" },
  { id: 10, name: "Merino Turtleneck",        price: 175, oldPrice: null,  badge: null,         badgeStyle: null,                            category: "men",         bg: "bg-[#161412]" },
  { id: 11, name: "Leather Belt",             price: 95,  oldPrice: null,  badge: null,         badgeStyle: null,                            category: "accessories", bg: "bg-[#181410]" },
  { id: 12, name: "Crepe Wrap Coat",          price: 480, oldPrice: 590,   badge: "Sale",       badgeStyle: "bg-[#b83a2a] text-[#f5efe6]",  category: "women",       bg: "bg-[#1a1612]" },
  { id: 13, name: "Slim Dress Trousers",      price: 220, oldPrice: null,  badge: null,         badgeStyle: null,                            category: "men",         bg: "bg-[#151210]" },
  { id: 14, name: "Chain Shoulder Bag",       price: 455, oldPrice: null,  badge: "New",        badgeStyle: "bg-[#c9a96e] text-[#0a0806]",  category: "accessories", bg: "bg-[#1c1810]" },
  { id: 15, name: "Ribbed Knit Cardigan",     price: 195, oldPrice: null,  badge: "Bestseller", badgeStyle: "bg-[#c9a96e] text-[#0a0806]",  category: "women",       bg: "bg-[#191510]" },
  { id: 16, name: "Linen Shirt",              price: 130, oldPrice: null,  badge: null,         badgeStyle: null,                            category: "men",         bg: "bg-[#171412]" },
];

const CATEGORIES = [
  { label: "All",         value: "all" },
  { label: "Women",       value: "women" },
  { label: "Men",         value: "men" },
  { label: "Accessories", value: "accessories" },
  { label: "New In",      value: "new" },
];

const PRICE_RANGES = [
  { label: "Under $150",      min: 0,   max: 150 },
  { label: "$150 – $300",     min: 150, max: 300 },
  { label: "$300 – $500",     min: 300, max: 500 },
  { label: "Over $500",       min: 500, max: Infinity },
];

const SORT_OPTIONS = [
  { label: "Featured",        value: "featured" },
  { label: "Price: Low – High", value: "price_asc" },
  { label: "Price: High – Low", value: "price_desc" },
  { label: "Newest",          value: "newest" },
];

const PAGE_SIZE = 8;

const ProductCard = ({ product }) => {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="group flex flex-col cursor-pointer">
      <div className={`relative w-full aspect-[3/4] overflow-hidden ${product.bg}`}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 80px,rgba(201,169,110,0.015) 80px,rgba(201,169,110,0.015) 81px)",
          }}
        />
        {/* Image placeholder — swap with <img> */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[0.46rem] tracking-[0.2em] uppercase text-[rgba(201,169,110,0.18)]">
            Product Image
          </span>
        </div>

        {product.badge && (
          <span className={`absolute top-3 left-3 px-3 py-[5px] text-[0.48rem] font-semibold tracking-[0.18em] uppercase ${product.badgeStyle}`}>
            {product.badge}
          </span>
        )}

        <button
          onClick={(e) => { e.stopPropagation(); setWishlisted(!wishlisted); }}
          className="absolute top-3 right-3 w-8 h-8 border bg-[rgba(0,0,0,0.5)] flex items-center justify-center
            opacity-0 group-hover:opacity-100 transition-all duration-300
            border-[rgba(201,169,110,0.3)] hover:border-[#c9a96e]"
        >
          <svg viewBox="0 0 24 24" strokeWidth="1.5"
            className={`w-3 h-3 stroke-[#c9a96e] transition-all duration-200 ${wishlisted ? "fill-[#c9a96e]" : "fill-none"}`}>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        <div className="absolute bottom-0 left-0 right-0 py-3 bg-[rgba(10,8,6,0.92)]
          translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <p className="text-center text-[0.55rem] font-semibold tracking-[0.28em] uppercase text-[#c9a96e]">
            Quick Add
          </p>
        </div>
      </div>

      <div className="pt-3">
        <p className="font-['Cormorant_Garamond',serif] text-[1rem] font-light leading-snug text-[#f0e8de] mb-1">
          {product.name}
        </p>
        <div className="flex items-center gap-3">
          <span className="text-[0.68rem] font-medium tracking-[0.04em] text-[#c9a96e]">
            ${product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className="text-[0.62rem] text-[#9e9082] line-through">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const FilterSection = ({ title, children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-[rgba(201,169,110,0.1)] py-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full mb-0 group"
      >
        <span className="text-[0.55rem] font-semibold tracking-[0.3em] uppercase text-[#c9a96e]">
          {title}
        </span>
        {open
          ? <ChevronUp size={13} className="text-[#7a6240]" />
          : <ChevronDown size={13} className="text-[#7a6240]" />
        }
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 mt-4" : "max-h-0"}`}>
        {children}
      </div>
    </div>
  );
};

export default function AllProducts() {
  const [category, setCategory]       = useState("all");
  const [priceRange, setPriceRange]   = useState(null);
  const [sort, setSort]               = useState("featured");
  const [visible, setVisible]         = useState(PAGE_SIZE);
  const [drawerOpen, setDrawerOpen]   = useState(false);
  const [sortOpen, setSortOpen]       = useState(false);

  const activeFiltersCount = (category !== "all" ? 1 : 0) + (priceRange !== null ? 1 : 0);

  const filtered = allProducts
    .filter((p) => category === "all" || p.category === category)
    .filter((p) => !priceRange || (p.price >= priceRange.min && p.price < priceRange.max))
    .sort((a, b) => {
      if (sort === "price_asc")  return a.price - b.price;
      if (sort === "price_desc") return b.price - a.price;
      if (sort === "newest")     return b.id - a.id;
      return 0;
    });

  const shown = filtered.slice(0, visible);

  const clearAll = () => {
    setCategory("all");
    setPriceRange(null);
    setVisible(PAGE_SIZE);
  };

  const Filters = () => (
    <div>
      <FilterSection title="Category">
        <ul className="flex flex-col gap-3">
          {CATEGORIES.map((c) => (
            <li key={c.value}>
              <button
                onClick={() => { setCategory(c.value); setVisible(PAGE_SIZE); }}
                className={`flex items-center gap-3 text-[0.65rem] tracking-[0.05em] transition-colors duration-200 w-full text-left
                  ${category === c.value ? "text-[#c9a96e]" : "text-[#9e9082] hover:text-[#e8d5a3]"}`}
              >
                <span className={`w-[5px] h-[5px] rounded-full flex-shrink-0 transition-all duration-200
                  ${category === c.value ? "bg-[#c9a96e]" : "bg-[rgba(201,169,110,0.2)]"}`}
                />
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
              <button
                onClick={() => { setPriceRange(priceRange?.label === r.label ? null : r); setVisible(PAGE_SIZE); }}
                className={`flex items-center gap-3 text-[0.65rem] tracking-[0.05em] transition-colors duration-200 w-full text-left
                  ${priceRange?.label === r.label ? "text-[#c9a96e]" : "text-[#9e9082] hover:text-[#e8d5a3]"}`}
              >
                <span className={`w-[5px] h-[5px] rounded-full flex-shrink-0 transition-all duration-200
                  ${priceRange?.label === r.label ? "bg-[#c9a96e]" : "bg-[rgba(201,169,110,0.2)]"}`}
                />
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </FilterSection>

      {activeFiltersCount > 0 && (
        <button
          onClick={clearAll}
          className="mt-6 text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-[#9e9082] hover:text-[#c9a96e] transition-colors duration-200 flex items-center gap-2"
        >
          <X size={11} /> Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0806] font-['Montserrat',sans-serif] pt-24">

      {/* Page header */}
      <div className="px-6 sm:px-12 lg:px-20 py-12 border-b border-[rgba(201,169,110,0.1)]">
        <div className="flex items-center gap-4 mb-3">
          <span className="w-8 h-px bg-[#c9a96e] block" />
          <span className="text-[0.55rem] font-semibold tracking-[0.35em] uppercase text-[#c9a96e]">
            The Collection
          </span>
        </div>
        <h1 className="font-['Cormorant_Garamond',serif] text-[3rem] sm:text-[4rem] font-light leading-none text-[#f5efe6]">
          All Products
        </h1>
      </div>

      <div className="flex px-6 sm:px-12 lg:px-20 py-10 gap-12">

        {/* ── SIDEBAR (desktop) ── */}
        <aside className="hidden lg:block w-52 flex-shrink-0 pt-1">
          <p className="text-[0.55rem] font-semibold tracking-[0.35em] uppercase text-[#f0e8de] mb-6">
            Filter
          </p>
          <Filters />
        </aside>

        {/* ── MAIN CONTENT ── */}
        <div className="flex-1 min-w-0">

          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">

            {/* Mobile filter button */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden flex items-center gap-2 border border-[rgba(201,169,110,0.25)] px-4 py-2 text-[0.58rem] font-semibold tracking-[0.2em] uppercase text-[#9e9082] hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-200"
            >
              <SlidersHorizontal size={13} />
              Filter {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </button>

            {/* Results count */}
            <p className="text-[0.6rem] tracking-[0.08em] text-[#9e9082]">
              Showing <span className="text-[#e8d5a3]">{Math.min(visible, filtered.length)}</span> of{" "}
              <span className="text-[#e8d5a3]">{filtered.length}</span> products
            </p>

            {/* Sort dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-3 border border-[rgba(201,169,110,0.25)] px-4 py-2 text-[0.58rem] font-semibold tracking-[0.15em] uppercase text-[#9e9082] hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-200"
              >
                {SORT_OPTIONS.find((o) => o.value === sort)?.label}
                <ChevronDown size={12} />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-[#0d0b08] border border-[rgba(201,169,110,0.18)] z-20">
                  {SORT_OPTIONS.map((o) => (
                    <button
                      key={o.value}
                      onClick={() => { setSort(o.value); setSortOpen(false); }}
                      className={`block w-full text-left px-4 py-3 text-[0.58rem] tracking-[0.1em] transition-colors duration-150
                        ${sort === o.value ? "text-[#c9a96e] bg-[rgba(201,169,110,0.05)]" : "text-[#9e9082] hover:text-[#e8d5a3] hover:bg-[rgba(201,169,110,0.03)]"}`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Active filter chips */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {category !== "all" && (
                <span className="flex items-center gap-2 border border-[rgba(201,169,110,0.25)] px-3 py-1 text-[0.55rem] tracking-[0.1em] uppercase text-[#c9a96e]">
                  {CATEGORIES.find((c) => c.value === category)?.label}
                  <button onClick={() => setCategory("all")}><X size={10} /></button>
                </span>
              )}
              {priceRange && (
                <span className="flex items-center gap-2 border border-[rgba(201,169,110,0.25)] px-3 py-1 text-[0.55rem] tracking-[0.1em] uppercase text-[#c9a96e]">
                  {priceRange.label}
                  <button onClick={() => setPriceRange(null)}><X size={10} /></button>
                </span>
              )}
            </div>
          )}

          {/* Grid */}
          {shown.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10">
              {shown.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <p className="font-['Cormorant_Garamond',serif] text-[2rem] font-light text-[#f5efe6]">
                No results found
              </p>
              <p className="text-[0.62rem] tracking-[0.1em] text-[#9e9082]">
                Try adjusting your filters
              </p>
              <button
                onClick={clearAll}
                className="mt-2 px-8 py-3 border border-[#c9a96e] text-[0.55rem] font-semibold tracking-[0.25em] uppercase text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#0a0806] transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Load More */}
          {visible < filtered.length && (
            <div className="flex justify-center mt-16">
              <button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="px-14 py-4 border border-[#c9a96e] text-[0.58rem] font-semibold tracking-[0.3em] uppercase text-[#c9a96e] transition-all duration-300 hover:bg-[#c9a96e] hover:text-[#0a0806]"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── MOBILE FILTER DRAWER ── */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setDrawerOpen(false)}
          />
          {/* Drawer */}
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-[#0d0b08] border-r border-[rgba(201,169,110,0.15)] px-7 py-8 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <p className="text-[0.55rem] font-semibold tracking-[0.35em] uppercase text-[#f0e8de]">
                Filter
              </p>
              <button onClick={() => setDrawerOpen(false)}>
                <X size={18} className="text-[#9e9082] hover:text-[#c9a96e] transition-colors" />
              </button>
            </div>
            <Filters />
            <button
              onClick={() => setDrawerOpen(false)}
              className="mt-10 w-full py-4 bg-[#c9a96e] text-[#0a0806] text-[0.58rem] font-semibold tracking-[0.25em] uppercase hover:bg-[#e8d5a3] transition-all duration-300"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}