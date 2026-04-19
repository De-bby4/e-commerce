import { useCart } from "./CartContext";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { items, removeItem, updateQty, subtotal, totalItems, drawerOpen, setDrawerOpen } = useCart();

  return (
    <>
      {/* Backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 transition-opacity duration-300"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#0d0b08] border-l border-[rgba(201,169,110,0.15)] z-50
          flex flex-col transition-transform duration-400 ease-in-out
          ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-7 py-6 border-b border-[rgba(201,169,110,0.1)]">
          <div>
            <p className="text-[0.52rem] font-semibold tracking-[0.3em] uppercase text-[#c9a96e] mb-1">
              Maison
            </p>
            <h2 className="font-['Cormorant_Garamond',serif] text-[1.5rem] font-light text-[#f5efe6]">
              Your Cart {totalItems > 0 && <span className="text-[#c9a96e]">({totalItems})</span>}
            </h2>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="w-9 h-9 border border-[rgba(201,169,110,0.2)] flex items-center justify-center hover:border-[#c9a96e] transition-colors"
          >
            <X size={15} className="text-[#9e9082]" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-7 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-5 text-center">
              <ShoppingBag size={40} className="text-[rgba(201,169,110,0.2)]" strokeWidth={1} />
              <p className="font-['Cormorant_Garamond',serif] text-[1.5rem] font-light text-[#f5efe6]">
                Your cart is empty
              </p>
              <p className="text-[0.65rem] tracking-[0.05em] text-[#9e9082]">
                Add something beautiful to get started
              </p>
              <button
                onClick={() => setDrawerOpen(false)}
                className="mt-2 px-8 py-3 border border-[#c9a96e] text-[0.58rem] font-semibold tracking-[0.25em] uppercase text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#0a0806] transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-6">
              {items.map((item) => (
                <li
                  key={`${item.id}-${item.size}`}
                  className="flex gap-4 pb-6 border-b border-[rgba(201,169,110,0.08)] last:border-0"
                >
                  {/* Product image */}
                  <div className={`w-20 h-28 flex-shrink-0 relative overflow-hidden ${item.bg}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[0.4rem] tracking-[0.15em] uppercase text-[rgba(201,169,110,0.2)]">
                        Image
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="font-['Cormorant_Garamond',serif] text-[1rem] font-light text-[#f0e8de] leading-snug">
                        {item.name}
                      </p>
                      <button
                        onClick={() => removeItem(item.id, item.size)}
                        className="text-[#9e9082] hover:text-[#c9a96e] transition-colors flex-shrink-0 mt-1"
                      >
                        <X size={13} />
                      </button>
                    </div>

                    <p className="text-[0.58rem] tracking-[0.1em] text-[#9e9082] mb-3">
                      Size: <span className="text-[#e8d5a3]">{item.size}</span>
                    </p>

                    <div className="flex items-center justify-between">
                      {/* Qty controls */}
                      <div className="flex items-center border border-[rgba(201,169,110,0.2)]">
                        <button
                          onClick={() => updateQty(item.id, item.size, -1)}
                          className="w-8 h-8 flex items-center justify-center text-[#9e9082] hover:text-[#c9a96e] transition-colors"
                        >
                          <Minus size={11} />
                        </button>
                        <span className="w-8 text-center text-[0.7rem] text-[#f0e8de]">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, item.size, 1)}
                          className="w-8 h-8 flex items-center justify-center text-[#9e9082] hover:text-[#c9a96e] transition-colors"
                        >
                          <Plus size={11} />
                        </button>
                      </div>

                      {/* Price */}
                      <p className="text-[0.75rem] font-medium tracking-[0.05em] text-[#c9a96e]">
                        ${(item.price * item.qty).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer — only show when items exist */}
        {items.length > 0 && (
          <div className="px-7 py-6 border-t border-[rgba(201,169,110,0.1)]">
            {/* Subtotal */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-[0.6rem] tracking-[0.15em] uppercase text-[#9e9082]">Subtotal</span>
              <span className="text-[0.9rem] font-medium text-[#f5efe6]">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-[0.55rem] tracking-[0.05em] text-[#7a6240] mb-6">
              Shipping calculated at checkout
            </p>

            {/* Checkout */}
            <Link
              to="/checkout"
              onClick={() => setDrawerOpen(false)}
              className="block w-full py-4 bg-[#c9a96e] text-[#0a0806] text-[0.6rem] font-semibold tracking-[0.3em] uppercase text-center transition-all duration-300 hover:bg-[#e8d5a3] mb-3"
            >
              Checkout
            </Link>

            {/* Continue shopping */}
            <button
              onClick={() => setDrawerOpen(false)}
              className="block w-full py-4 border border-[rgba(201,169,110,0.25)] text-[0.6rem] font-semibold tracking-[0.3em] uppercase text-[#9e9082] hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}