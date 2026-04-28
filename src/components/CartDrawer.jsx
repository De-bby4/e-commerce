import { useCart } from "./CartContext";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { items, removeItem, updateQty, subtotal, totalItems, drawerOpen, setDrawerOpen } = useCart();

  const formatPrice = (n) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(n);

  return (
    <>
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 transition-opacity duration-300"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] z-50 flex flex-col transition-transform duration-300 ease-in-out
          ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ background: "var(--bg-secondary)", borderLeft: "1px solid var(--border)" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-7 py-6"
          style={{ borderBottom: "1px solid var(--border-soft)" }}
        >
          <div>
            <p
              className="text-[0.52rem] font-semibold tracking-[0.3em] uppercase mb-1"
              style={{ color: "var(--gold)" }}
            >
              Maison
            </p>
            <h2
              className="font-['Cormorant_Garamond',serif] text-[1.5rem] font-light"
              style={{ color: "var(--text-primary)" }}
            >
              Your Cart{" "}
              {totalItems > 0 && <span style={{ color: "var(--gold)" }}>({totalItems})</span>}
            </h2>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="w-9 h-9 flex items-center justify-center transition-colors"
            style={{ border: "1px solid var(--border)" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
          >
            <X size={15} style={{ color: "var(--text-muted)" }} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-7 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-5 text-center">
              <ShoppingBag size={40} strokeWidth={1} style={{ color: "var(--border-hover)" }} />
              <p
                className="font-['Cormorant_Garamond',serif] text-[1.5rem] font-light"
                style={{ color: "var(--text-primary)" }}
              >
                Your cart is empty
              </p>
              <p
                className="text-[0.65rem] tracking-[0.05em]"
                style={{ color: "var(--text-muted)" }}
              >
                Add something beautiful to get started
              </p>
              <button
                onClick={() => setDrawerOpen(false)}
                className="mt-2 px-8 py-3 text-[0.58rem] font-semibold tracking-[0.25em] uppercase transition-all duration-300"
                style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--gold)";
                  e.currentTarget.style.color = "var(--bg-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--gold)";
                }}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-6">
              {items.map((item) => (
                <li
                  key={`${item.id}-${item.size}`}
                  className="flex gap-4 pb-6"
                  style={{ borderBottom: "1px solid var(--border-soft)" }}
                >
                  <div className={`w-20 h-28 flex-shrink-0 relative overflow-hidden ${item.bg}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="text-[0.4rem] tracking-[0.15em] uppercase"
                        style={{ color: "rgba(201,169,110,0.2)" }}
                      >
                        Image
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p
                        className="font-['Cormorant_Garamond',serif] text-[1rem] font-light leading-snug"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.name}
                      </p>
                      <button
                        onClick={() => removeItem(item.id, item.size)}
                        className="flex-shrink-0 mt-1 transition-colors"
                        style={{ color: "var(--text-muted)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                      >
                        <X size={13} />
                      </button>
                    </div>
                    <p
                      className="text-[0.58rem] tracking-[0.1em] mb-3"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Size: <span style={{ color: "var(--gold-light)" }}>{item.size}</span>
                    </p>
                    <div className="flex items-center justify-between">
                      <div
                        className="flex items-center"
                        style={{ border: "1px solid var(--border)" }}
                      >
                        <button
                          onClick={() => updateQty(item.id, item.size, -1)}
                          className="w-8 h-8 flex items-center justify-center transition-colors"
                          style={{ color: "var(--text-muted)" }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                        >
                          <Minus size={11} />
                        </button>
                        <span
                          className="w-8 text-center text-[0.7rem]"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, item.size, 1)}
                          className="w-8 h-8 flex items-center justify-center transition-colors"
                          style={{ color: "var(--text-muted)" }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                        >
                          <Plus size={11} />
                        </button>
                      </div>
                      <p
                        className="text-[0.75rem] font-medium tracking-[0.05em]"
                        style={{ color: "var(--gold)" }}
                      >
                        {formatPrice(item.price * item.qty)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-7 py-6" style={{ borderTop: "1px solid var(--border-soft)" }}>
            <div className="flex items-center justify-between mb-2">
              <span
                className="text-[0.6rem] tracking-[0.15em] uppercase"
                style={{ color: "var(--text-muted)" }}
              >
                Subtotal
              </span>
              <span
                className="text-[0.9rem] font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                {formatPrice(subtotal)}
              </span>
            </div>
            <p
              className="text-[0.55rem] tracking-[0.05em] mb-6"
              style={{ color: "var(--text-dim)" }}
            >
              Shipping calculated at checkout
            </p>
            <Link
              to="/checkout"
              onClick={() => setDrawerOpen(false)}
              className="block w-full py-4 text-[0.6rem] font-semibold tracking-[0.3em] uppercase text-center transition-all duration-300 mb-3"
              style={{ background: "var(--gold)", color: "var(--bg-primary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
            >
              Checkout
            </Link>
            <button
              onClick={() => setDrawerOpen(false)}
              className="block w-full py-4 text-[0.6rem] font-semibold tracking-[0.3em] uppercase transition-all duration-300"
              style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--gold)";
                e.currentTarget.style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-muted)";
              }}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}