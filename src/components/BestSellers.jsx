import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Silk Wrap Dress",
    price: "$285.00",
    oldPrice: null,
    badge: "New",
    badgeColor: "bg-[#c9a96e] text-[#0a0806]",
    category: "women",
    bg: "bg-[#1a1410]",
  },
  {
    id: 2,
    name: "Tailored Blazer",
    price: "$195.00",
    oldPrice: "$320.00",
    badge: "Sale",
    badgeColor: "bg-[#b83a2a] text-[#f5efe6]",
    category: "men",
    bg: "bg-[#161410]",
  },
  {
    id: 3,
    name: "Linen Wide-Leg Trousers",
    price: "$165.00",
    oldPrice: null,
    badge: null,
    badgeColor: null,
    category: "women",
    bg: "bg-[#181512]",
  },
  {
    id: 4,
    name: "Cashmere Knit Midi",
    price: "$340.00",
    oldPrice: null,
    badge: "Bestseller",
    badgeColor: "bg-[#c9a96e] text-[#0a0806]",
    category: "new",
    bg: "bg-[#1c1814]",
  },
  {
    id: 5,
    name: "Draped Satin Blouse",
    price: "$145.00",
    oldPrice: null,
    badge: "New",
    badgeColor: "bg-[#c9a96e] text-[#0a0806]",
    category: "new",
    bg: "bg-[#191510]",
  },
  {
    id: 6,
    name: "Wool Overcoat",
    price: "$520.00",
    oldPrice: "$680.00",
    badge: "Sale",
    badgeColor: "bg-[#b83a2a] text-[#f5efe6]",
    category: "men",
    bg: "bg-[#141210]",
  },
  {
    id: 7,
    name: "Pleated Midi Skirt",
    price: "$210.00",
    oldPrice: null,
    badge: null,
    badgeColor: null,
    category: "women",
    bg: "bg-[#1b1612]",
  },
  {
    id: 8,
    name: "Structured Tote Bag",
    price: "$390.00",
    oldPrice: null,
    badge: "Bestseller",
    badgeColor: "bg-[#c9a96e] text-[#0a0806]",
    category: "new",
    bg: "bg-[#171310]",
  },
];

const tabs = [
  { label: "All", value: "all" },
  { label: "Women", value: "women" },
  { label: "Men", value: "men" },
  { label: "New In", value: "new" },
];

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div
      className="group flex flex-col cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <div className={`relative w-full aspect-[3/4] overflow-hidden ${product.bg}`}>

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(201,169,110,0.02) 60px,rgba(201,169,110,0.02) 61px)",
          }}
        />

        {/* Image placeholder — replace with <img> */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[0.5rem] tracking-[0.2em] uppercase text-[rgba(201,169,110,0.2)]">
            Product Image
          </span>
        </div>

        {/* Badge */}
        {product.badge && (
          <div
            className={`absolute top-4 left-4 px-3 py-1 text-[0.5rem] font-semibold tracking-[0.18em] uppercase ${product.badgeColor}`}
          >
            {product.badge}
          </div>
        )}

        {/* Wishlist button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setWishlisted(!wishlisted);
          }}
          className={`absolute top-4 right-4 w-9 h-9 border flex items-center justify-center transition-all duration-300 bg-[rgba(0,0,0,0.45)]
            ${wishlisted
              ? "border-[#c9a96e]"
              : "border-[rgba(201,169,110,0.3)]"
            }
            ${hovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"}
          `}
        >
          <svg
            viewBox="0 0 24 24"
            className={`w-[13px] h-[13px] transition-all duration-300 ${
              wishlisted
                ? "fill-[#c9a96e] stroke-[#c9a96e]"
                : "fill-none stroke-[#c9a96e]"
            }`}
            strokeWidth="1.5"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        {/* Quick Add — slides up on hover */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-[rgba(10,8,6,0.92)] py-4 text-center transition-all duration-300
            ${hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
          `}
        >
          <span className="text-[0.58rem] font-semibold tracking-[0.25em] uppercase text-[#c9a96e]">
            Quick Add
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4 pb-1">
        <p className="font-['Cormorant_Garamond',serif] text-[1.05rem] font-light text-[#f5efe6] mb-1 leading-snug">
          {product.name}
        </p>
        <div className="flex items-center gap-3">
          <span className="text-[0.7rem] font-medium tracking-[0.05em] text-[#c9a96e]">
            {product.price}
          </span>
          {product.oldPrice && (
            <span className="text-[0.65rem] text-[#9e9082] line-through tracking-[0.03em]">
              {product.oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const BestSellers = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <section className="bg-[#0a0806] px-6 md:px-16 lg:px-20 py-24 font-['Montserrat',sans-serif]">

      {/* Header row */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">

        {/* Left — title */}
        <div>
          <div className="flex items-center gap-4 mb-3">
            <span className="w-8 h-px bg-[#c9a96e]" />
            <span className="text-[0.58rem] font-medium tracking-[0.35em] uppercase text-[#c9a96e]">
              Trending Now
            </span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[3.5rem] md:text-[4rem] font-light leading-[1.05] text-[#f5efe6]">
            <em className="italic text-[#e8d5a3]">Best</em> Sellers
          </h2>
        </div>

        {/* Right — filter tabs */}
        <div className="flex border border-[rgba(201,169,110,0.18)]">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-6 py-3 text-[0.58rem] font-semibold tracking-[0.2em] uppercase transition-all duration-200
                ${
                  activeTab === tab.value
                    ? "bg-[#c9a96e] text-[#0a0806]"
                    : "bg-transparent text-[#9e9082] hover:text-[#c9a96e]"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All */}
      <div className="flex justify-center mt-16">
        <a
          href="#"
          className="inline-block px-16 py-4 border border-[#c9a96e] text-[0.6rem] font-semibold tracking-[0.3em] uppercase text-[#c9a96e] transition-all duration-300 hover:bg-[#c9a96e] hover:text-[#0a0806]"
        >
          View All Products
        </a>
      </div>

    </section>
  );
};

export default BestSellers;