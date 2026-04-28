import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, User, ShoppingBag, Menu, X, Sun, Moon } from "lucide-react";
import { useCart } from "./CartContext";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [query,      setQuery]      = useState("");
  const desktopRef = useRef(null);
  const mobileRef  = useRef(null);
  const navigate   = useNavigate();

  const { totalItems, setDrawerOpen } = useCart();
  const { theme, toggle }             = useTheme();

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => {
        if (window.innerWidth >= 768) desktopRef.current?.focus();
        else mobileRef.current?.focus();
      }, 50);
    }
  }, [searchOpen]);

  const handleSubmit = (e) => {
    if (e.key === "Enter" && query.trim()) {
      e.preventDefault();
      navigate(`/shop?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setMenuOpen(false);
      setQuery("");
    }
    if (e.key === "Escape") { setSearchOpen(false); setQuery(""); }
  };

  return (
    <nav
      className="w-full fixed top-0 left-0 z-50 "
      style={{
        background: "var(--nav-bg)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border-soft)",
      }}
    >
      {/* TOP BAR */}
      <div className="grid grid-cols-3 items-center px-6 md:px-8 lg:px-20 py-4">

        {/* LEFT */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => { setMenuOpen(!menuOpen); setSearchOpen(false); }}
            className="md:hidden transition-colors"
            style={{ color: "var(--text-primary)" }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <ul className="hidden md:flex items-center gap-8 text-sm tracking-wide">
            {["home", "shop", "about", "contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "home" ? "/" : `/${item}`}
                  className="transition-colors duration-200 hover:opacity-70 text-[0.78rem] tracking-[0.05em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* LOGO */}
        <Link
          to="/"
          className="justify-self-center font-['Cormorant_Garamond',serif] text-xl md:text-[1.6rem] font-light tracking-[0.25em] md:tracking-[0.4em] uppercase transition-colors"
          style={{ color: "var(--gold-light)" }}
        >
          Maison
        </Link>

        {/* RIGHT */}
        <div className="flex items-center justify-end gap-4" style={{ color: "var(--text-primary)" }}>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="w-8 h-8 flex items-center justify-center transition-colors duration-200 hover:opacity-70"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark"
              ? <Sun size={16} style={{ color: "var(--text-muted)" }} />
              : <Moon size={16} style={{ color: "var(--text-muted)" }} />
            }
          </button>

          {/* DESKTOP SEARCH */}
          <div className="hidden md:flex items-center">
            <div className={`overflow-hidden transition-all duration-300 ${searchOpen ? "w-48 mr-2" : "w-0"}`}>
              <input
                ref={desktopRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleSubmit}
                placeholder="Search products..."
                className="w-full bg-transparent text-sm placeholder:opacity-50 outline-none transition-all duration-300"
                style={{
                  color: "var(--text-primary)",
                  border: searchOpen ? "1px solid var(--gold)" : "none",
                  padding: searchOpen ? "4px 12px" : "0",
                  borderRadius: "4px",
                }}
              />
            </div>
            <button
              onClick={() => { setSearchOpen((o) => !o); setMenuOpen(false); if (searchOpen) setQuery(""); }}
              className="transition-colors hover:opacity-70"
              style={{ color: "var(--text-muted)" }}
            >
              {searchOpen ? <X size={18} /> : <Search size={18} />}
            </button>
          </div>

          {/* MOBILE SEARCH */}
          <button
            className="md:hidden transition-colors hover:opacity-70"
            style={{ color: "var(--text-muted)" }}
            onClick={() => { setSearchOpen(!searchOpen); setMenuOpen(false); }}
          >
            {searchOpen ? <X size={20} /> : <Search size={20} />}
          </button>

          {/* ACCOUNT */}
          <Link
            to="/account"
            className="hidden md:flex items-center gap-1 transition-colors hover:opacity-70"
            style={{ color: "var(--text-muted)" }}
          >
            <User size={18} />
            <span className="text-[0.72rem] tracking-[0.05em]">Account</span>
          </Link>

          {/* CART */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="flex items-center gap-1 relative transition-colors hover:opacity-70"
            style={{ color: "var(--text-muted)" }}
          >
            <ShoppingBag size={18} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 text-[0.5rem] font-bold rounded-full flex items-center justify-center"
                style={{ background: "var(--gold)", color: "var(--bg-primary)" }}>
                {totalItems}
              </span>
            )}
            <span className="hidden md:inline text-[0.72rem] tracking-[0.05em]">Cart</span>
          </button>
        </div>
      </div>

      {/* MOBILE SEARCH */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${searchOpen ? "max-h-20 px-6 pb-4" : "max-h-0"}`}>
        <input
          ref={mobileRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSubmit}
          placeholder="Search products..."
          className="w-full px-4 py-2 rounded-md bg-transparent outline-none text-base"
          style={{
            border: "1px solid var(--gold)",
            color: "var(--text-primary)",
          }}
        />
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-72 px-6 pb-6" : "max-h-0"}`}
        style={{ background: "var(--nav-bg)", backdropFilter: "blur(12px)" }}
      >
        <ul className="flex flex-col gap-5 text-base tracking-wide pt-4">
          {["home", "shop", "about", "contact", "account"].map((item) => (
            <li key={item}>
              <Link
                to={item === "home" ? "/" : `/${item}`}
                onClick={() => setMenuOpen(false)}
                className="transition-colors hover:opacity-70 text-[0.85rem] tracking-[0.08em] capitalize"
                style={{ color: "var(--text-muted)" }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}