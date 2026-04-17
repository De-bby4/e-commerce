import { useState, useRef, useEffect } from "react";
import { Search, User, ShoppingBag, X } from "lucide-react";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
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
    <nav className="w-full border-b border-pink-100 bg-red-500">
      <div className="grid grid-cols-3 items-center px-8 md:px-12 lg:px-20 py-4">
        {/* Left: nav links */}
        <ul className="flex items-center gap-6 text-sm text-pink-400">
          <li><a href="/" className="hover:text-pink-500">home</a></li>
          <li><a href="/shop" className="hover:text-pink-500">shop</a></li>
          <li><a href="/about" className="hover:text-pink-500">about</a></li>
          <li><a href="/contact" className="hover:text-pink-500">contact</a></li>
        </ul>

        {/* Center: logo */}
        <a href="/" className="justify-self-center text-2xl font-serif italic text-pink-400">
          Crovia
        </a>

        {/* Right: search + account + cart */}
        <div className="flex items-center justify-end gap-5 text-sm text-pink-400">
          <div className="flex items-center">
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                searchOpen ? "w-48 mr-2" : "w-0 mr-0"
              }`}
            >
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleSubmit}
                placeholder="search"
                className="w-full border-b border-pink-300 bg-transparent pb-1 text-sm text-pink-500 placeholder:text-pink-300 focus:border-pink-500 focus:outline-none"
              />
            </div>
            <button
              onClick={() => {
                setSearchOpen((o) => !o);
                if (searchOpen) setQuery("");
              }}
              aria-label={searchOpen ? "close search" : "open search"}
              className="hover:text-pink-500"
            >
              {searchOpen ? <X size={18} /> : <Search size={18} />}
            </button>
          </div>

          <a href="/account" className="flex items-center gap-1 hover:text-pink-500">
            <User size={18} />
            <span>Account</span>
          </a>

          <a href="/cart" className="flex items-center gap-1 hover:text-pink-500">
            <ShoppingBag size={18} />
            <span>Cart</span>
          </a>
        </div>
      </div>
    </nav>
  );
}