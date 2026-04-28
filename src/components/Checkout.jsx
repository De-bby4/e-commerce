import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { ChevronLeft, Lock, Shield, Check } from "lucide-react";

const Checkout = () => {
  const { items, subtotal, totalItems } = useCart();

  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    postalCode: "",
    country: "Nigeria",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const shipping = subtotal > 0 ? 2500 : 0;
  const total = subtotal + shipping;

  const formatPrice = (n) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(n);

  const handlePay = (e) => {
    e.preventDefault();
    alert("Payment integration coming soon. This is a UI preview.");
  };

  // Empty cart
  if (items.length === 0) {
    return (
      <div
        className="min-h-screen pt-40 pb-20 px-6 flex items-center justify-center"
        style={{ background: "var(--bg-primary)", fontFamily: "'Montserrat', sans-serif" }}
      >
        <div className="text-center max-w-md">
          <h1
            className="font-['Cormorant_Garamond',serif] text-3xl mb-4 tracking-[0.2em] uppercase font-light"
            style={{ color: "var(--text-primary)" }}
          >
            Your cart is empty
          </h1>
          {/* <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            Add something beautiful before checking out.
          </p> */}
          <Link
            to="/shop"
            className="inline-block px-10 py-3 text-[0.65rem] tracking-[0.3em] uppercase transition-all duration-300"
            style={{ background: "var(--gold)", color: "var(--bg-primary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen pt-32 pb-24"
      style={{ background: "var(--bg-primary)", fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Top header row */}
        <div className="flex items-center justify-between mb-16 pb-8"
          style={{ borderBottom: "1px solid var(--border-soft)" }}
        >
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-[0.6rem] tracking-[0.25em] uppercase transition-colors hover:opacity-70"
            style={{ color: "var(--text-muted)" }}
          >
            <ChevronLeft size={12} />
            Continue Shopping
          </Link>

          <div className="text-center">
            {/* <p
              className="text-[0.55rem] font-semibold tracking-[0.4em] uppercase mb-1"
              style={{ color: "var(--gold)" }}
            >
              Maison
            </p> */}
            <h1
              className="  font-['Cormorant_Garamond',serif] text-xl md:text-2xl font-light tracking-[0.3em] uppercase"
              style={{ color: "var(--text-primary)" }}
            >
              Checkout
            </h1>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[0.55rem] tracking-[0.2em] uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            <Lock size={11} />
            Secure
          </div>

          {/* Mobile placeholder for spacing */}
          <div className="sm:hidden w-4" />
        </div>

        {/* Progress steps */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-20 pb-9 pt-5" >
          <Step number="1" label="Cart" complete />
          <StepLine complete />
          <Step number="2" label="Information" active />
          <StepLine />
          <Step number="3" label="Payment" />
          <StepLine />
          <Step number="4" label="Confirmation" />
        </div>

        <form onSubmit={handlePay} className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16 lg:gap-24">

          {/* LEFT */}
          <div className="space-y-16">

            <Section number="01" title="Contact Information">
              <div className="space-y-7">
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+234 800 000 0000"
                  required
                />
              </div>
            </Section>

            <Section number="02" title="Shipping Address">
              <div className="space-y-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <Input label="First Name" name="firstName" value={form.firstName} onChange={handleChange} required />
                  <Input label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} required />
                </div>
                <Input label="Street Address" name="address" value={form.address} onChange={handleChange} placeholder="123 Marina Street" required />
                <Input label="Apartment, Suite, Etc." name="apartment" value={form.apartment} onChange={handleChange} placeholder="Optional" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <Input label="City" name="city" value={form.city} onChange={handleChange} required />
                  <Input label="State" name="state" value={form.state} onChange={handleChange} required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <Input label="Postal Code" name="postalCode" value={form.postalCode} onChange={handleChange} />
                  <Input label="Country" name="country" value={form.country} onChange={handleChange} required />
                </div>
              </div>
            </Section>

            <Section number="03" title="Payment Method">
              <div
                className="p-6"
                style={{
                  border: "1px solid var(--gold)",
                  background: "var(--bg-secondary)",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <p
                    className="text-[0.78rem] tracking-[0.05em]"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Card · Bank Transfer · USSD
                  </p>
                  <span
                    className="text-[0.5rem] font-semibold tracking-[0.25em] uppercase px-2 py-1"
                    style={{ background: "var(--gold)", color: "var(--bg-primary)" }}
                  >
                    Selected
                  </span>
                </div>
                <p
                  className="text-[0.68rem] tracking-[0.03em] leading-[1.8]"
                  style={{ color: "var(--text-muted)" }}
                >
                  You'll be redirected to Paystack's secure checkout to complete your purchase. Your payment information is encrypted and never stored on our servers.
                </p>
              </div>

              <div
                className="flex flex-wrap items-center gap-x-7 gap-y-3 mt-7 pt-7"
                style={{ borderTop: "1px solid var(--border-soft)" }}
              >
                <TrustItem icon={<Lock size={11} />} text="SSL Encrypted" />
                <TrustItem icon={<Shield size={11} />} text="PCI Compliant" />
                <TrustItem icon={<Check size={11} />} text="Buyer Protected" />
              </div>
            </Section>

            <Section number="04" title="Order Notes" optional>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={3}
                placeholder="Special instructions for your order, gift message, etc."
                className="w-full px-4 py-3 text-[0.78rem] bg-transparent outline-none transition-colors resize-none"
                style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              />
            </Section>
          </div>

          {/* RIGHT: Summary */}
          <div>
            <div
              className="lg:sticky lg:top-32 p-7 lg:p-9"
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-soft)",
              }}
            >
              <div
                className="flex items-center justify-between mb-7 pb-5"
                style={{ borderBottom: "1px solid var(--border-soft)" }}
              >
                <h2
                  className="text-[0.6rem] font-semibold tracking-[0.3em] uppercase"
                  style={{ color: "var(--gold)" }}
                >
                  Order Summary
                </h2>
                <span
                  className="text-[0.55rem] tracking-[0.15em] uppercase"
                  style={{ color: "var(--text-muted)" }}
                >
                  {totalItems} {totalItems === 1 ? "item" : "items"}
                </span>
              </div>

              <div
                className="space-y-5 mb-7 pb-7 max-h-72 overflow-y-auto pr-2"
                style={{ borderBottom: "1px solid var(--border-soft)" }}
              >
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4">
                    <div
                      className={`w-14 h-18 flex-shrink-0 overflow-hidden relative ${item.bg || ""}`}
                      style={{ background: "var(--bg-primary)", height: "4.5rem" }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className="text-[0.4rem] tracking-[0.15em] uppercase"
                          style={{ color: "rgba(201,169,110,0.2)" }}
                        >
                          Image
                        </span>
                      </div>
                      <div
                        className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full flex items-center justify-center text-[0.5rem] font-semibold"
                        style={{ background: "var(--gold)", color: "var(--bg-primary)" }}
                      >
                        {item.qty}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between min-w-0 py-0.5">
                      <div>
                        <p
                          className="font-['Cormorant_Garamond',serif] text-[0.92rem] leading-tight mb-1 truncate"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {item.name}
                        </p>
                        <p
                          className="text-[0.55rem] tracking-[0.15em] uppercase"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Size {item.size}
                        </p>
                      </div>
                      <p className="text-[0.72rem]" style={{ color: "var(--gold-light)" }}>
                        {formatPrice(item.price * item.qty)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-7">
                <Row label="Subtotal" value={formatPrice(subtotal)} />
                <Row label="Shipping" value={formatPrice(shipping)} />
                <Row label="Taxes" value="Included" muted />
              </div>

              <div
                className="flex justify-between items-baseline pt-5 mb-8"
                style={{ borderTop: "1px solid var(--border-soft)" }}
              >
                <span
                  className="text-[0.65rem] tracking-[0.25em] uppercase"
                  style={{ color: "var(--text-primary)" }}
                >
                  Total <span style={{ color: "var(--text-muted)", marginLeft: "6px" }}>NGN</span>
                </span>
                <span
                  className="font-['Cormorant_Garamond',serif] text-2xl"
                  style={{ color: "var(--gold-light)" }}
                >
                  {formatPrice(total)}
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-4 text-[0.65rem] tracking-[0.3em] uppercase transition-all duration-300 flex items-center justify-center gap-2 mb-4"
                style={{ background: "var(--gold)", color: "var(--bg-primary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <Lock size={11} />
                Place Order
              </button>

              <p
                className="text-center text-[0.5rem] tracking-[0.25em] uppercase mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                Secured by Paystack
              </p>

              <div className="flex items-center justify-center gap-1.5 opacity-50">
                <PayBadge text="VISA" />
                <PayBadge text="MC" />
                <PayBadge text="VERVE" />
                <PayBadge text="USSD" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

/* ---------- Helpers ---------- */

const Section = ({ number, title, optional, children }) => (
  <section>
    <div className="flex items-baseline gap-4 mb-8 pb-4"
      style={{ borderBottom: "1px solid var(--border-soft)" }}
    >
      <span
        className="font-['Cormorant_Garamond',serif] text-xl"
        style={{ color: "var(--gold)" }}
      >
        {number}
      </span>
      <h2
        className="text-[0.6rem] font-semibold tracking-[0.3em] uppercase"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
        {optional && (
          <span
            className="ml-2 normal-case font-normal tracking-normal text-[0.6rem]"
            style={{ color: "var(--text-muted)" }}
          >
            (optional)
          </span>
        )}
      </h2>
    </div>
    {children}
  </section>
);

const Step = ({ number, label, active, complete }) => (
  <div className="flex items-center gap-2">
    <div
      className="w-6 h-6 rounded-full flex items-center justify-center text-[0.55rem] font-semibold transition-all"
      style={{
        background: complete || active ? "var(--gold)" : "transparent",
        color: complete || active ? "var(--bg-primary)" : "var(--text-muted)",
        border: complete || active ? "none" : "1px solid var(--border)",
      }}
    >
      {complete ? <Check size={11} strokeWidth={3} /> : number}
    </div>
    <span
      className="hidden sm:inline text-[0.55rem] tracking-[0.25em] uppercase"
      style={{
        color: active ? "var(--text-primary)" : "var(--text-muted)",
        fontWeight: active ? 600 : 400,
      }}
    >
      {label}
    </span>
  </div>
);

const StepLine = ({ complete }) => (
  <div
    className="w-5 sm:w-8 h-px"
    style={{ background: complete ? "var(--gold)" : "var(--border)" }}
  />
);

const Input = ({ label, name, type = "text", value, onChange, placeholder, required }) => (
  <div>
    <label
      className="block text-[0.55rem] tracking-[0.25em] uppercase mb-2.5"
      style={{ color: "var(--text-muted)" }}
    >
      {label} {required && <span style={{ color: "var(--gold)" }}>*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-3 text-[0.78rem] bg-transparent outline-none transition-colors"
      style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
    />
  </div>
);

const Row = ({ label, value, muted }) => (
  <div className="flex justify-between text-[0.7rem] tracking-[0.05em]">
    <span style={{ color: "var(--text-muted)" }}>{label}</span>
    <span style={{ color: muted ? "var(--text-muted)" : "var(--text-primary)" }}>{value}</span>
  </div>
);

const TrustItem = ({ icon, text }) => (
  <div className="flex items-center gap-2">
    <span style={{ color: "var(--gold)" }}>{icon}</span>
    <span className="text-[0.55rem] tracking-[0.2em] uppercase" style={{ color: "var(--text-muted)" }}>
      {text}
    </span>
  </div>
);

const PayBadge = ({ text }) => (
  <span
    className="text-[0.5rem] font-bold tracking-[0.15em] px-2 py-1"
    style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
  >
    {text}
  </span>
);

export default Checkout;