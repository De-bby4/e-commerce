import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "./CartContext";
import { ChevronDown, ChevronUp, ArrowLeft, X } from "lucide-react";

const allProducts = [
  { id: 1,  name: "Silk Wrap Dress",        price: 285, oldPrice: null, badge: "New",        badgeType: "gold", category: "women",       bg: "bg-[#1c1610]", description: "A fluid silk wrap dress cut for the modern woman. Designed with an adjustable tie waist and deep V-neckline, this piece transitions effortlessly from day to evening.", material: "100% Silk", care: "Dry clean only", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: 2,  name: "Tailored Blazer",         price: 195, oldPrice: 320, badge: "Sale",       badgeType: "red",  category: "men",         bg: "bg-[#171310]", description: "A sharp single-breasted blazer crafted from premium wool blend. Clean lapels and a structured shoulder make this a cornerstone of any refined wardrobe.", material: "80% Wool, 20% Polyester", care: "Dry clean only", sizes: ["S", "M", "L", "XL", "XXL"] },
  { id: 3,  name: "Linen Wide-Leg Trousers", price: 165, oldPrice: null, badge: null,        badgeType: null,   category: "women",       bg: "bg-[#1a1510]", description: "Relaxed wide-leg trousers in breathable linen. A high-rise waist and side pockets combine comfort with elegance for warm-weather dressing.", material: "100% Linen", care: "Machine wash cold, hang dry", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: 4,  name: "Cashmere Knit Midi",      price: 340, oldPrice: null, badge: "Bestseller",badgeType: "gold", category: "new",         bg: "bg-[#1e1812]", description: "A luxuriously soft cashmere midi dress with ribbed knit detailing. Designed to drape beautifully, it offers warmth without compromising silhouette.", material: "100% Grade A Cashmere", care: "Hand wash cold or dry clean", sizes: ["XS", "S", "M", "L"] },
  { id: 5,  name: "Draped Satin Blouse",     price: 145, oldPrice: null, badge: "New",       badgeType: "gold", category: "new",         bg: "bg-[#191510]", description: "A satin blouse with an elegant draped front and loose fit. Wear it tucked into tailored trousers or open over a slip for a layered look.", material: "95% Polyester Satin, 5% Elastane", care: "Machine wash gentle cycle", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: 6,  name: "Wool Overcoat",           price: 520, oldPrice: 680, badge: "Sale",       badgeType: "red",  category: "men",         bg: "bg-[#141210]", description: "A classic double-breasted overcoat in a heavy wool blend. Structured shoulders, a clean back vent, and a full lining make this the definitive winter coat.", material: "70% Wool, 20% Polyamide, 10% Cashmere", care: "Dry clean only", sizes: ["S", "M", "L", "XL"] },
  { id: 7,  name: "Pleated Midi Skirt",      price: 210, oldPrice: null, badge: null,        badgeType: null,   category: "women",       bg: "bg-[#1b1612]", description: "A flowing pleated midi skirt with a hidden side zip. The movement of the fabric creates an effortlessly graceful silhouette for any occasion.", material: "100% Viscose", care: "Dry clean recommended", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: 8,  name: "Structured Tote Bag",     price: 390, oldPrice: null, badge: "Bestseller",badgeType: "gold", category: "accessories", bg: "bg-[#171310]", description: "A minimal structured tote in full-grain leather. Spacious enough for daily essentials with an interior zip pocket and magnetic closure.", material: "Full-grain leather", care: "Wipe clean with dry cloth", sizes: ["One Size"] },
  { id: 9,  name: "Velvet Evening Gown",     price: 620, oldPrice: null, badge: "New",       badgeType: "gold", category: "women",       bg: "bg-[#1d1612]", description: "A floor-length velvet gown with a fitted bodice and sweeping skirt. Crafted for evenings that demand presence.", material: "90% Polyester Velvet, 10% Elastane", care: "Dry clean only", sizes: ["XS", "S", "M", "L"] },
  { id: 10, name: "Merino Turtleneck",       price: 175, oldPrice: null, badge: null,        badgeType: null,   category: "men",         bg: "bg-[#161412]", description: "A slim-fit turtleneck in superfine merino wool. Lightweight, itch-free, and naturally temperature-regulating — the essential winter layer.", material: "100% Merino Wool", care: "Machine wash cold, lay flat to dry", sizes: ["S", "M", "L", "XL", "XXL"] },
  { id: 11, name: "Leather Belt",            price: 95,  oldPrice: null, badge: null,        badgeType: null,   category: "accessories", bg: "bg-[#181410]", description: "A clean, minimalist leather belt with a brushed gold pin buckle. A finishing touch that elevates any outfit.", material: "Full-grain leather", care: "Wipe clean with dry cloth", sizes: ["S", "M", "L", "XL"] },
  { id: 12, name: "Crepe Wrap Coat",         price: 480, oldPrice: 590, badge: "Sale",       badgeType: "red",  category: "women",       bg: "bg-[#1a1612]", description: "A wrap coat in fluid crepe with an elegant silhouette. Belted at the waist and fully lined for a polished finish.", material: "100% Polyester Crepe", care: "Dry clean only", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: 13, name: "Slim Dress Trousers",     price: 220, oldPrice: null, badge: null,        badgeType: null,   category: "men",         bg: "bg-[#151210]", description: "Slim-cut dress trousers with a pressed crease and side pockets. A refined foundation for both boardroom and evening wear.", material: "65% Wool, 35% Polyester", care: "Dry clean recommended", sizes: ["S", "M", "L", "XL", "XXL"] },
  { id: 14, name: "Chain Shoulder Bag",      price: 455, oldPrice: null, badge: "New",       badgeType: "gold", category: "accessories", bg: "bg-[#1c1810]", description: "A compact shoulder bag with a gold chain strap and quilted leather exterior. Small enough to keep essentials, significant enough to make a statement.", material: "Lambskin leather with gold hardware", care: "Store in dust bag when not in use", sizes: ["One Size"] },
  { id: 15, name: "Ribbed Knit Cardigan",    price: 195, oldPrice: null, badge: "Bestseller",badgeType: "gold", category: "women",       bg: "bg-[#191510]", description: "An oversized ribbed knit cardigan with deep side slits and a relaxed silhouette. The kind of piece you reach for every day.", material: "50% Wool, 50% Cotton", care: "Hand wash cold or dry clean", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: 16, name: "Linen Shirt",             price: 130, oldPrice: null, badge: null,        badgeType: null,   category: "men",         bg: "bg-[#171412]", description: "A relaxed linen shirt with a band collar and mother-of-pearl buttons. Designed to be worn open or tucked — effortless at any temperature.", material: "100% Linen", care: "Machine wash cold, hang dry", sizes: ["S", "M", "L", "XL", "XXL"] },
];

const sizeGuideData = [
  { size: "XS", chest: "32–33\"", waist: "24–25\"", hips: "34–35\"" },
  { size: "S",  chest: "34–35\"", waist: "26–27\"", hips: "36–37\"" },
  { size: "M",  chest: "36–37\"", waist: "28–29\"", hips: "38–39\"" },
  { size: "L",  chest: "38–40\"", waist: "30–32\"", hips: "40–42\"" },
  { size: "XL", chest: "41–43\"", waist: "33–35\"", hips: "43–45\"" },
  { size: "XXL",chest: "44–46\"", waist: "36–38\"", hips: "46–48\"" },
];

const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--border-soft)" }}>
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-4 text-left">
        <span className="text-[0.6rem] font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--text-secondary)" }}>{title}</span>
        {open ? <ChevronUp size={13} style={{ color: "var(--text-dim)" }} /> : <ChevronDown size={13} style={{ color: "var(--text-dim)" }} />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 pb-4" : "max-h-0"}`}>
        <p className="text-[0.68rem] leading-[1.9] tracking-[0.03em]" style={{ color: "var(--text-muted)" }}>{children}</p>
      </div>
    </div>
  );
};

const RelatedCard = ({ product }) => {
  const [wishlisted, setWishlisted] = useState(false);
  return (
    <div className="group flex flex-col cursor-pointer">
      <div className={`relative w-full aspect-[3/4] overflow-hidden ${product.bg}`}>
        <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 80px,rgba(201,169,110,0.015) 80px,rgba(201,169,110,0.015) 81px)" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[0.44rem] tracking-[0.2em] uppercase" style={{ color: "rgba(201,169,110,0.18)" }}>Product Image</span>
        </div>
        {product.badge && (
          <span className="absolute top-3 left-3 px-2 py-[4px] text-[0.45rem] font-semibold tracking-[0.15em] uppercase"
            style={product.badgeType === "gold"
              ? { background: "var(--gold)", color: "var(--bg-primary)" }
              : { background: "var(--sale-bg)", color: "var(--sale-text)" }}>
            {product.badge}
          </span>
        )}
        <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setWishlisted(!wishlisted); }}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{ background: "rgba(0,0,0,0.45)", border: wishlisted ? "1px solid var(--gold)" : "1px solid rgba(201,169,110,0.3)" }}>
          <svg viewBox="0 0 24 24" strokeWidth="1.5" className="w-[13px] h-[13px] transition-all duration-200"
            style={{ fill: wishlisted ? "var(--gold)" : "none", stroke: "var(--gold)" }}>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        <Link to={`/product/${product.id}`} className="absolute inset-0" />
        <div className="absolute bottom-0 left-0 right-0 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none"
          style={{ background: "rgba(10,8,6,0.92)" }}>
          <p className="text-center text-[0.52rem] font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--gold)" }}>Quick View</p>
        </div>
      </div>
      <Link to={`/product/${product.id}`} className="pt-3 block">
        <p className="font-['Cormorant_Garamond',serif] text-[0.95rem] font-light leading-snug mb-1 transition-colors"
          style={{ color: "var(--text-secondary)" }}
          onMouseEnter={e => e.currentTarget.style.color = "var(--gold-light)"}
          onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}
        >{product.name}</p>
        <div className="flex items-center gap-2">
          <span className="text-[0.65rem] font-medium" style={{ color: "var(--gold)" }}>${product.price.toFixed(2)}</span>
          {product.oldPrice && <span className="text-[0.6rem] line-through" style={{ color: "var(--text-muted)" }}>${product.oldPrice.toFixed(2)}</span>}
        </div>
      </Link>
    </div>
  );
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === Number(id));
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState(null);
  const [added,        setAdded]        = useState(false);
  const [wishlisted,   setWishlisted]   = useState(false);
  const [sizeGuideOpen,setSizeGuideOpen]= useState(false);

  useEffect(() => { setSelectedSize(null); }, [id]);

  const related = allProducts.filter((p) => p.id !== product?.id && p.category === product?.category).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 pt-24 font-['Montserrat',sans-serif]"
        style={{ background: "var(--bg-primary)" }}>
        <p className="font-['Cormorant_Garamond',serif] text-[3rem] font-light" style={{ color: "var(--text-primary)" }}>Product not found</p>
        <Link to="/shop" className="text-[0.6rem] tracking-[0.2em] uppercase transition-colors" style={{ color: "var(--gold)" }}>Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-['Montserrat',sans-serif] pt-24" style={{ background: "var(--bg-primary)" }}>

      <div className="px-6 sm:px-12 lg:px-20 py-6" style={{ borderBottom: "1px solid var(--border-soft)" }}>
        <Link to="/shop" className="flex items-center gap-2 text-[0.58rem] tracking-[0.15em] uppercase transition-colors duration-200 w-fit"
          style={{ color: "var(--text-muted)" }}
          onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
          onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
        ><ArrowLeft size={13} /> Back to Shop</Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 px-6 sm:px-12 lg:px-20 py-12 lg:py-16">

        <div className="relative w-full aspect-[3/4] lg:aspect-auto lg:min-h-[70vh] overflow-hidden mb-10 lg:mb-0">
          <div className={`absolute inset-0 ${product.bg}`}>
            <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 80px,rgba(201,169,110,0.015) 80px,rgba(201,169,110,0.015) 81px),repeating-linear-gradient(90deg,transparent,transparent 80px,rgba(201,169,110,0.015) 80px,rgba(201,169,110,0.015) 81px)" }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[0.55rem] tracking-[0.25em] uppercase" style={{ color: "rgba(201,169,110,0.2)" }}>Product Image</span>
            </div>
          </div>
          {product.badge && (
            <span className="absolute top-5 left-5 px-3 py-[6px] text-[0.5rem] font-semibold tracking-[0.18em] uppercase z-10"
              style={product.badgeType === "gold"
                ? { background: "var(--gold)", color: "var(--bg-primary)" }
                : { background: "var(--sale-bg)", color: "var(--sale-text)" }}>
              {product.badge}
            </span>
          )}
          <div className="absolute top-5 right-5 bottom-5 left-5 pointer-events-none" style={{ border: "1px solid rgba(201,169,110,0.06)" }} />
        </div>

        <div className="flex flex-col justify-center lg:py-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px block" style={{ background: "var(--gold)" }} />
            <span className="text-[0.52rem] font-semibold tracking-[0.3em] uppercase" style={{ color: "var(--gold)" }}>
              {product.category === "new" ? "New In" : product.category}
            </span>
          </div>

          <h1 className="font-['Cormorant_Garamond',serif] text-[2.8rem] sm:text-[3.5rem] font-light leading-[1.05] mb-4"
            style={{ color: "var(--text-primary)" }}>{product.name}</h1>

          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-[1.1rem] font-medium tracking-[0.05em]" style={{ color: "var(--gold)" }}>${product.price.toFixed(2)}</span>
            {product.oldPrice && <span className="text-[0.85rem] line-through" style={{ color: "var(--text-muted)" }}>${product.oldPrice.toFixed(2)}</span>}
            {product.oldPrice && <span className="text-[0.5rem] font-semibold tracking-[0.15em] uppercase px-2 py-[3px]"
              style={{ color: "var(--sale-bg)", border: "1px solid var(--sale-bg)" }}>Sale</span>}
          </div>

          <p className="text-[0.7rem] leading-[2] tracking-[0.04em] mb-8 max-w-md" style={{ color: "var(--text-muted)" }}>{product.description}</p>

          <div className="mb-24">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[0.55rem] font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--text-secondary)" }}>Size</span>
              <button onClick={() => setSizeGuideOpen(true)}
                className="text-[0.52rem] tracking-[0.1em] underline underline-offset-2 transition-colors"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
              >Size Guide</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button key={size} onClick={() => setSelectedSize(size)}
                  className="min-w-[2.8rem] px-3 py-2 text-[0.58rem] font-semibold tracking-[0.1em] transition-all duration-200"
                  style={selectedSize === size
                    ? { background: "var(--gold)", border: "1px solid var(--gold)", color: "var(--bg-primary)" }
                    : { background: "transparent", border: "1px solid var(--border)", color: "var(--text-muted)" }}
                  onMouseEnter={e => { if (selectedSize !== size) { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; } }}
                  onMouseLeave={e => { if (selectedSize !== size) { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; } }}
                >{size}</button>
              ))}
            </div>
            {!selectedSize && <p className="text-[0.52rem] tracking-[0.08em] mt-3" style={{ color: "var(--text-dim)" }}>Please select a size</p>}
          </div>

          <div className="pt-3">
            <button onClick={handleAddToCart} disabled={!selectedSize}
              className="w-full py-4 text-[0.6rem] font-semibold tracking-[0.3em] uppercase transition-all duration-300"
              style={!selectedSize
                ? { background: "transparent", border: "1px solid var(--border-soft)", color: "var(--border-hover)", cursor: "not-allowed" }
                : added
                  ? { background: "#2a4a2a", border: "1px solid #4a8a4a", color: "#8acc8a" }
                  : { background: "var(--gold)", color: "var(--bg-primary)" }
              }
              onMouseEnter={e => { if (selectedSize && !added) e.currentTarget.style.background = "var(--gold-light)"; }}
              onMouseLeave={e => { if (selectedSize && !added) e.currentTarget.style.background = "var(--gold)"; }}
            >{added ? "Added to Cart ✓" : "Add to Cart"}</button>

            <button onClick={() => setWishlisted(!wishlisted)}
              className="w-full py-4 text-[0.6rem] font-semibold tracking-[0.3em] uppercase transition-all duration-300"
              style={wishlisted
                ? { border: "1px solid var(--gold)", color: "var(--gold)" }
                : { border: "1px solid var(--border)", color: "var(--text-muted)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
              onMouseLeave={e => { if (!wishlisted) { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; } }}
            >{wishlisted ? "Saved to Wishlist ♥" : "Add to Wishlist"}</button>
          </div>

          <div className="mt-10">
            <AccordionItem title="Material & Care">
              <strong style={{ color: "var(--gold-light)" }}>Material:</strong> {product.material}<br />
              <strong style={{ color: "var(--gold-light)" }}>Care:</strong> {product.care}
            </AccordionItem>
            <AccordionItem title="Shipping & Returns">
              Free standard shipping on orders over $150. Express shipping available at checkout. Returns accepted within 30 days of delivery in original condition.
            </AccordionItem>
            <AccordionItem title="Size & Fit">
              This piece is designed for a relaxed, true-to-size fit. If between sizes, we recommend sizing up. Refer to our size guide for exact measurements.
            </AccordionItem>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="px-6 sm:px-12 lg:px-20 py-20" style={{ borderTop: "1px solid var(--border-soft)" }}>
          <div className="flex items-center gap-4 mb-3">
            <span className="w-8 h-px block" style={{ background: "var(--gold)" }} />
            <span className="text-[0.55rem] font-semibold tracking-[0.35em] uppercase" style={{ color: "var(--gold)" }}>You May Also Like</span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[2.5rem] font-light mb-12" style={{ color: "var(--text-primary)" }}>
            Related <em className="italic" style={{ color: "var(--gold-light)" }}>Pieces</em>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
            {related.map((p) => <RelatedCard key={p.id} product={p} />)}
          </div>
        </div>
      )}

      {sizeGuideOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/75" onClick={() => setSizeGuideOpen(false)} />
          <div className="relative w-full max-w-lg z-10" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}>
            <div className="flex items-center justify-between px-8 py-6" style={{ borderBottom: "1px solid var(--border-soft)" }}>
              <div>
                <p className="text-[0.52rem] font-semibold tracking-[0.3em] uppercase mb-1" style={{ color: "var(--gold)" }}>Maison</p>
                <h3 className="font-['Cormorant_Garamond',serif] text-[1.6rem] font-light" style={{ color: "var(--text-primary)" }}>Size Guide</h3>
              </div>
              <button onClick={() => setSizeGuideOpen(false)}
                className="w-9 h-9 flex items-center justify-center transition-colors"
                style={{ border: "1px solid var(--border)" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "var(--gold)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
              ><X size={15} style={{ color: "var(--text-muted)" }} /></button>
            </div>
            <div className="px-8 py-6">
              <p className="text-[0.62rem] leading-[1.8] mb-6 tracking-[0.03em]" style={{ color: "var(--text-muted)" }}>
                All measurements are in inches. Measure yourself and compare to the chart below.
              </p>
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border-soft)" }}>
                    {["Size", "Chest", "Waist", "Hips"].map((h) => (
                      <th key={h} className="text-left pb-3 text-[0.52rem] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sizeGuideData.map((row) => (
                    <tr key={row.size} style={{ borderBottom: "1px solid var(--border-soft)", background: selectedSize === row.size ? "var(--border-soft)" : "transparent" }}>
                      <td className="py-3 text-[0.62rem] font-semibold tracking-[0.08em]" style={{ color: selectedSize === row.size ? "var(--gold)" : "var(--text-secondary)" }}>{row.size}</td>
                      <td className="py-3 text-[0.62rem] tracking-[0.03em]" style={{ color: "var(--text-muted)" }}>{row.chest}</td>
                      <td className="py-3 text-[0.62rem] tracking-[0.03em]" style={{ color: "var(--text-muted)" }}>{row.waist}</td>
                      <td className="py-3 text-[0.62rem] tracking-[0.03em]" style={{ color: "var(--text-muted)" }}>{row.hips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-8 pb-6">
              <p className="text-[0.58rem] leading-[1.8] tracking-[0.03em]" style={{ color: "var(--text-dim)" }}>
                Between sizes? We recommend sizing up for a more relaxed fit.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}