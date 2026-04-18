import { useState, useRef, useEffect } from "react";
import { Search, User, ShoppingBag, X, Menu } from "lucide-react";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  const handleSubmit = (e) => {
    if (e.key === "Enter" && query.trim()) {
      window.location.href = `/shop?q=${encodeURIComponent(query.trim())}`;
    }
    if (e.key === "Escape") {
      setSearchOpen(false);
      setQuery("");
    }
  };

  return (
    <nav className="w-full border-b border-[#c9a96e]/30 bg-black/70 backdrop-blur-md fixed top-0 left-0 z-50">
      
      {/* TOP BAR */}
      <div className="grid grid-cols-3 items-center px-6 md:px-12 lg:px-20 py-4">
        
        {/* LEFT */}
        <div className="flex items-center gap-4">
          
          {/* Hamburger */}
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
              setSearchOpen(false);
            }}
            className="md:hidden text-white"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 text-sm text-white tracking-wide">
            <li><a href="/" className="hover:text-[#c9a96e] transition">home</a></li>
            <li><a href="/shop" className="hover:text-[#c9a96e] transition">shop</a></li>
            <li><a href="/about" className="hover:text-[#c9a96e] transition">about</a></li>
            <li><a href="/contact" className="hover:text-[#c9a96e] transition">contact</a></li>
          </ul>
        </div>

        {/* LOGO */}
        <a href="/" className="justify-self-center text-2xl md:text-3xl font-serif italic text-white">
          Crovia
        </a>

        {/* RIGHT */}
        <div className="flex items-center justify-end gap-5 text-white">
          
          {/* DESKTOP SEARCH */}
          <div className="hidden md:flex items-center">
            <div
              className={`overflow-hidden transition-all duration-300 ${
                searchOpen ? "w-52 mr-2" : "w-0"
              }`}
            >
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleSubmit}
                placeholder="Search products..."
                className={`w-full bg-transparent text-sm text-white placeholder:text-[#c9a96e]/70 outline-none transition-all duration-300
                  ${searchOpen ? "border border-[#c9a96e] px-3 py-1 rounded-md focus:ring-1 focus:ring-[#c9a96e]" : ""}
                `}
              />
            </div>

            <button
              onClick={() => {
                setSearchOpen((o) => !o);
                setMenuOpen(false);
                if (searchOpen) setQuery("");
              }}
              className="hover:text-[#c9a96e] transition"
            >
              {searchOpen ? <X size={18} /> : <Search size={18} />}
            </button>
          </div>

          {/* MOBILE SEARCH ICON */}
          <button
            onClick={() => {
              setSearchOpen(!searchOpen);
              setMenuOpen(false);
            }}
            className="md:hidden"
          >
            {searchOpen ? <X size={20} /> : <Search size={20} />}
          </button>

          {/* ACCOUNT */}
          <a href="/account" className="flex items-center gap-1 hover:text-[#c9a96e] transition">
            <User size={18} />
            <span className="hidden md:inline">Account</span>
          </a>

          {/* CART */}
          <a href="/cart" className="flex items-center gap-1 hover:text-[#c9a96e] transition">
            <ShoppingBag size={18} />
            <span className="hidden md:inline">Cart</span>
          </a>
        </div>
      </div>

      {/* 🔍 MOBILE FULL SEARCH */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          searchOpen ? "max-h-24 px-6 pb-4" : "max-h-0"
        }`}
      >
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSubmit}
          placeholder="Search products..."
          className="w-full border border-[#c9a96e] px-4 py-2 rounded-md bg-transparent text-white placeholder:text-[#c9a96e]/70 outline-none focus:ring-1 focus:ring-[#c9a96e]"
        />
      </div>

      {/* 📱 MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-60 px-6 pb-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-5 text-white text-base tracking-wide">
          <li><a href="/" onClick={() => setMenuOpen(false)} className="hover:text-[#c9a96e]">home</a></li>
          <li><a href="/shop" onClick={() => setMenuOpen(false)} className="hover:text-[#c9a96e]">shop</a></li>
          <li><a href="/about" onClick={() => setMenuOpen(false)} className="hover:text-[#c9a96e]">about</a></li>
          <li><a href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[#c9a96e]">contact</a></li>
        </ul>
      </div>
    </nav>
  );
}