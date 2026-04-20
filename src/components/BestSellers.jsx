import React, { useState } from "react";
import { Link } from "react-router-dom";
import finieImg from "../assets/finie.jpeg";

const products = [
  { id: 1, name: "Silk Wrap Dress",        price: "$285.00", oldPrice: null,     badge: "New",        badgeType: "gold",  category: "women" },
  { id: 2, name: "Tailored Blazer",         price: "$195.00", oldPrice: "$320.00", badge: "Sale",       badgeType: "red",   category: "men"   },
  { id: 3, name: "Linen Wide-Leg Trousers", price: "$165.00", oldPrice: null,     badge: null,         badgeType: null,    category: "women" },
  { id: 4, name: "Cashmere Knit Midi",      price: "$340.00", oldPrice: null,     badge: "Bestseller", badgeType: "gold",  category: "new"   },
  { id: 5, name: "Draped Satin Blouse",     price: "$145.00", oldPrice: null,     badge: "New",        badgeType: "gold",  category: "new"   },
  { id: 6, name: "Wool Overcoat",           price: "$520.00", oldPrice: "$680.00", badge: "Sale",       badgeType: "red",   category: "men"   },
  { id: 7, name: "Pleated Midi Skirt",      price: "$210.00", oldPrice: null,     badge: null,         badgeType: null,    category: "women" },
  { id: 8, name: "Structured Tote Bag",     price: "$390.00", oldPrice: null,     badge: "Bestseller", badgeType: "gold",  category: "new"   },
];

const tabs = [
  { label: "All",    value: "all"   },
  { label: "Women",  value: "women" },
  { label: "Men",    value: "men"   },
  { label: "New In", value: "new"   },
];

const ProductCard = ({ product }) => {
  const [hovered, setHovered]     = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div
      className="group flex flex-col cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div
          className="relative w-full aspect-[3/4] overflow-hidden"
          style={{ background: "var(--bg-card)" }}
        >
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(201,169,110,0.02) 60px,rgba(201,169,110,0.02) 61px)",
          }} />

          <img src={finieImg} alt="Look" className="absolute inset-0 w-full h-full object-cover object-top" style={{ objectPosition: "center 50%" }}/>

          {/* Badge */}
          {product.badge && (
            <div
              className="absolute top-4 left-4 px-3 py-1 text-[0.5rem] font-semibold tracking-[0.18em] uppercase"
              style={product.badgeType === "gold"
                ? { background: "var(--gold)", color: "var(--bg-primary)" }
                : { background: "var(--sale-bg)", color: "var(--sale-text)" }
              }
            >
              {product.badge}
            </div>
          )}

          {/* Wishlist */}
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setWishlisted(!wishlisted); }}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center transition-all duration-300"
            style={{
              background: "rgba(0,0,0,0.45)",
              border: wishlisted ? "1px solid var(--gold)" : "1px solid rgba(201,169,110,0.3)",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(-4px)",
            }}
          >
            <svg viewBox="0 0 24 24" strokeWidth="1.5" className="w-[13px] h-[13px] transition-all duration-300"
              style={{ fill: wishlisted ? "var(--gold)" : "none", stroke: "var(--gold)" }}>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          {/* Quick View */}
          <div
            className="absolute bottom-0 left-0 right-0 py-4 text-center transition-all duration-300"
            style={{
              background: "rgba(10,8,6,0.92)",
              transform: hovered ? "translateY(0)" : "translateY(100%)",
              opacity: hovered ? 1 : 0,
            }}
          >
            <span className="text-[0.58rem] font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--gold)" }}>
              Quick View
            </span>
          </div>
        </div>
      </Link>

      <Link to={`/product/${product.id}`} className="pt-4 pb-1 block">
        <p className="font-['Cormorant_Garamond',serif] text-[1.05rem] font-light mb-1 leading-snug transition-colors duration-200"
          style={{ color: "var(--text-primary)" }}
          onMouseEnter={e => e.currentTarget.style.color = "var(--gold-light)"}
          onMouseLeave={e => e.currentTarget.style.color = "var(--text-primary)"}
        >
          {product.name}
        </p>
        <div className="flex items-center gap-3">
          <span className="text-[0.7rem] font-medium tracking-[0.05em]" style={{ color: "var(--gold)" }}>
            {product.price}
          </span>
          {product.oldPrice && (
            <span className="text-[0.65rem] line-through tracking-[0.03em]" style={{ color: "var(--text-muted)" }}>
              {product.oldPrice}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};

const BestSellers = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all" ? products : products.filter((p) => p.category === activeTab);

  return (
    <section
      className="px-6 md:px-16 lg:px-20 py-24 font-['Montserrat',sans-serif]"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <span className="w-8 h-px block" style={{ background: "var(--gold)" }} />
            <span className="text-[0.58rem] font-medium tracking-[0.35em] uppercase" style={{ color: "var(--gold)" }}>
              Trending Now
            </span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[3.5rem] md:text-[4rem] font-light leading-[1.05]"
            style={{ color: "var(--text-primary)" }}>
            <em className="italic" style={{ color: "var(--gold-light)" }}>Best</em> Sellers
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex" style={{ border: "1px solid var(--border)" }}>
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className="px-6 py-3 text-[0.58rem] font-semibold tracking-[0.2em] uppercase transition-all duration-200"
              style={activeTab === tab.value
                ? { background: "var(--gold)", color: "var(--bg-primary)" }
                : { background: "transparent", color: "var(--text-muted)" }
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 pb-10">
        {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>

      {/* View All */}
      <div className="flex justify-center mt-10">
        <Link
          to="/shop"
          className="inline-block px-16 py-4 text-[0.6rem] font-semibold tracking-[0.3em] uppercase transition-all duration-300"
          style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
          onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--bg-primary)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
        >
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default BestSellers;