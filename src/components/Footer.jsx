import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{
      background: "var(--bg-secondary)",
      borderTop: "1px solid var(--border)",
      fontFamily: "'Montserrat', sans-serif",
    }}>
      <div className="px-6 md:px-16 lg:px-24 pt-15 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-16">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="font-['Cormorant_Garamond',serif] text-[1.9rem] font-light tracking-[0.4em] uppercase mb-5"
              style={{ color: "var(--gold-light)" }}>
              Maison
            </div>
            <p className="text-[0.68rem] leading-[1.95] mb-8 tracking-[0.03em] text-center md:text-left"
              style={{ color: "var(--text-muted)" }}>
              Where timeless elegance meets modern silhouette. Curated luxury fashion for those who dress with intention and live with purpose.
            </p>
            <div className="flex gap-3">
              {/* Instagram */}
              <a href="#" title="Instagram"
                className="w-10 h-10 flex items-center justify-center transition-all duration-300 group"
                style={{ border: "1px solid var(--border)" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "var(--gold)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
              >
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] transition-all duration-300" style={{ fill: "var(--text-muted)" }}
                  onMouseEnter={e => e.currentTarget.style.fill = "var(--gold)"}
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" title="TikTok"
                className="w-10 h-10 flex items-center justify-center transition-all duration-300"
                style={{ border: "1px solid var(--border)" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "var(--gold)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
              >
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px]" style={{ fill: "var(--text-muted)" }}>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" title="Facebook"
                className="w-10 h-10 flex items-center justify-center transition-all duration-300"
                style={{ border: "1px solid var(--border)" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "var(--gold)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
              >
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px]" style={{ fill: "var(--text-muted)" }}>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-[0.58rem] font-semibold tracking-[0.3em] uppercase mb-8" style={{ color: "var(--gold)" }}>Shop</div>
            <ul className="flex flex-col gap-[0.5rem] list-none items-center md:items-start">
              {["New Arrivals", "Women", "Men", "Accessories", "Sale"].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-[0.72rem] no-underline tracking-[0.03em] transition-colors duration-300 hover:opacity-100"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--gold-light)"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-[0.58rem] font-semibold tracking-[0.3em] uppercase mb-8" style={{ color: "var(--gold)" }}>Help</div>
            <ul className="flex flex-col gap-[0.5rem] list-none items-center md:items-start">
              {["Sizing Guide", "Order Tracking", "FAQ", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link to="/contact" className="text-[0.72rem] no-underline tracking-[0.03em] transition-colors duration-300"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--gold-light)"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Full-width divider — outside the padded div */}
      <div style={{
        height: "1px",
        background: "var(--border-soft)",
        width: "100%",
      }} />

      <div className="text-center py-5">
        <span className="text-[0.6rem] tracking-[0.08em]" style={{ color: "var(--text-muted)" }}>
          © 2025 Maison. All rights reserved.
        </span>
      </div>

    </footer>
  );
};

export default Footer;