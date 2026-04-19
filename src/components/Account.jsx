import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Package, Heart, LogOut, ChevronRight, Eye, EyeOff } from "lucide-react";

const mockOrders = [
  { id: "#CR-10042", date: "Apr 12, 2025", status: "Delivered", total: "$480.00", items: ["Crepe Wrap Coat"] },
  { id: "#CR-10038", date: "Mar 28, 2025", status: "Shipped",   total: "$625.00", items: ["Silk Wrap Dress", "Leather Belt"] },
  { id: "#CR-10021", date: "Feb 14, 2025", status: "Delivered", total: "$340.00", items: ["Cashmere Knit Midi"] },
];
const mockWishlist = [
  { id: 9,  name: "Velvet Evening Gown", price: "$620.00", bg: "bg-[#1d1612]" },
  { id: 6,  name: "Wool Overcoat",       price: "$520.00", bg: "bg-[#141210]" },
  { id: 14, name: "Chain Shoulder Bag",  price: "$455.00", bg: "bg-[#1c1810]" },
];

const statusStyle = (s) => {
  if (s === "Delivered") return { color: "#5a9a5a", background: "rgba(90,154,90,0.08)", border: "1px solid rgba(90,154,90,0.3)" };
  if (s === "Shipped")   return { color: "var(--gold)", background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.3)" };
  return { color: "var(--text-muted)", background: "transparent", border: "1px solid var(--border)" };
};

function InputField({ label, type = "text", placeholder, value, onChange, required }) {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[0.52rem] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--text-muted)" }}>
        {label} {required && <span style={{ color: "var(--gold)" }}>*</span>}
      </label>
      <div className="relative">
        <input
          type={isPassword && show ? "text" : type}
          placeholder={placeholder} value={value} onChange={onChange} required={required}
          className="w-full px-4 py-3 text-[0.7rem] outline-none transition-colors duration-200"
          style={{ background: "transparent", border: "1px solid var(--border)", color: "var(--text-primary)" }}
          onFocus={e => e.target.style.borderColor = "var(--gold)"}
          onBlur={e => e.target.style.borderColor = "var(--border)"}
        />
        {isPassword && (
          <button type="button" onClick={() => setShow(!show)}
            className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
          >{show ? <EyeOff size={14} /> : <Eye size={14} />}</button>
        )}
      </div>
    </div>
  );
}

function AuthView({ onLogin }) {
  const [tab, setTab] = useState("login");
  const [loginForm,    setLoginForm]    = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); setError("");
    if (!loginForm.email || !loginForm.password) { setError("Please fill in all fields."); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); onLogin({ name: "Guest User", email: loginForm.email }); }, 1000);
  };
  const handleRegister = (e) => {
    e.preventDefault(); setError("");
    if (!registerForm.name || !registerForm.email || !registerForm.password) { setError("Please fill in all fields."); return; }
    if (registerForm.password !== registerForm.confirm) { setError("Passwords do not match."); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); onLogin({ name: registerForm.name, email: registerForm.email }); }, 1000);
  };

  return (
    <div className="min-h-screen font-['Montserrat',sans-serif] pt-24 flex items-center justify-center px-6"
      style={{ background: "var(--bg-primary)" }}>
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-px block" style={{ background: "var(--gold)" }} />
            <span className="text-[0.52rem] font-semibold tracking-[0.35em] uppercase" style={{ color: "var(--gold)" }}>My Account</span>
            <span className="w-8 h-px block" style={{ background: "var(--gold)" }} />
          </div>
          <h1 className="font-['Cormorant_Garamond',serif] text-[3rem] font-light" style={{ color: "var(--text-primary)" }}>
            {tab === "login" ? "Welcome Back" : <span>Create <em className="italic" style={{ color: "var(--gold-light)" }}>Account</em></span>}
          </h1>
        </div>

        <div className="flex mb-8" style={{ border: "1px solid var(--border)" }}>
          {["login", "register"].map((t) => (
            <button key={t} onClick={() => { setTab(t); setError(""); }}
              className="flex-1 py-3 text-[0.58rem] font-semibold tracking-[0.2em] uppercase transition-all duration-200"
              style={tab === t ? { background: "var(--gold)", color: "var(--bg-primary)" } : { color: "var(--text-muted)" }}>
              {t === "login" ? "Sign In" : "Register"}
            </button>
          ))}
        </div>

        {error && (
          <p className="text-[0.62rem] px-4 py-3 mb-6 tracking-[0.03em]"
            style={{ color: "#b83a2a", border: "1px solid rgba(184,58,42,0.3)", background: "rgba(184,58,42,0.05)" }}>{error}</p>
        )}

        {tab === "login" && (
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <InputField label="Email" type="email" placeholder="your@email.com" value={loginForm.email}
              onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} required />
            <InputField label="Password" type="password" placeholder="Your password" value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} required />
            <div className="flex justify-end">
              <button type="button" className="text-[0.55rem] tracking-[0.1em] underline underline-offset-2 transition-colors"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
              >Forgot password?</button>
            </div>
            <button type="submit" disabled={loading}
              className="w-full py-4 text-[0.6rem] font-semibold tracking-[0.3em] uppercase transition-all duration-300"
              style={{ background: "var(--gold)", color: "var(--bg-primary)", opacity: loading ? 0.5 : 1 }}
              onMouseEnter={e => { if (!loading) e.currentTarget.style.background = "var(--gold-light)"; }}
              onMouseLeave={e => { if (!loading) e.currentTarget.style.background = "var(--gold)"; }}
            >{loading ? "Signing in..." : "Sign In"}</button>
            <p className="text-center text-[0.58rem]" style={{ color: "var(--text-muted)" }}>
              Don't have an account?{" "}
              <button type="button" onClick={() => setTab("register")} className="transition-colors" style={{ color: "var(--gold)" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--gold-light)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--gold)"}
              >Register</button>
            </p>
          </form>
        )}

        {tab === "register" && (
          <form onSubmit={handleRegister} className="flex flex-col gap-5">
            <InputField label="Full Name" placeholder="Your name" value={registerForm.name}
              onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })} required />
            <InputField label="Email" type="email" placeholder="your@email.com" value={registerForm.email}
              onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })} required />
            <InputField label="Password" type="password" placeholder="Create a password" value={registerForm.password}
              onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })} required />
            <InputField label="Confirm Password" type="password" placeholder="Repeat password" value={registerForm.confirm}
              onChange={(e) => setRegisterForm({ ...registerForm, confirm: e.target.value })} required />
            <button type="submit" disabled={loading}
              className="w-full py-4 text-[0.6rem] font-semibold tracking-[0.3em] uppercase transition-all duration-300"
              style={{ background: "var(--gold)", color: "var(--bg-primary)", opacity: loading ? 0.5 : 1 }}
            >{loading ? "Creating account..." : "Create Account"}</button>
            <p className="text-center text-[0.55rem]" style={{ color: "var(--text-dim)" }}>
              By registering you agree to our{" "}
              <span className="underline underline-offset-2 cursor-pointer" style={{ color: "var(--text-muted)" }}>Terms</span> &{" "}
              <span className="underline underline-offset-2 cursor-pointer" style={{ color: "var(--text-muted)" }}>Privacy Policy</span>.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

function Dashboard({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState("orders");
  const tabs = [
    { id: "orders",   label: "Orders",   icon: Package, count: mockOrders.length },
    { id: "wishlist", label: "Wishlist", icon: Heart,   count: mockWishlist.length },
    { id: "profile",  label: "Profile",  icon: User,    count: null },
  ];

  return (
    <div className="min-h-screen font-['Montserrat',sans-serif] pt-24" style={{ background: "var(--bg-primary)" }}>
      <div style={{ borderBottom: "1px solid var(--border-soft)" }}>
        <div className="px-6 sm:px-12 lg:px-20 py-8 flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-px block" style={{ background: "var(--gold)" }} />
              <span className="text-[0.5rem] font-semibold tracking-[0.3em] uppercase" style={{ color: "var(--gold)" }}>My Account</span>
            </div>
            <h1 className="font-['Cormorant_Garamond',serif] text-[2.2rem] sm:text-[2.8rem] font-light leading-none" style={{ color: "var(--text-primary)" }}>
              Hello, <em className="italic" style={{ color: "var(--gold-light)" }}>{user.name}</em>
            </h1>
            <p className="text-[0.6rem] mt-2 tracking-[0.05em]" style={{ color: "var(--text-muted)" }}>{user.email}</p>
          </div>
          <button onClick={onLogout}
            className="flex items-center gap-2 text-[0.55rem] font-semibold tracking-[0.2em] uppercase px-5 py-2.5 transition-all duration-200"
            style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
          ><LogOut size={12} /> Sign Out</button>
        </div>

        <div className="px-6 sm:px-12 lg:px-20 flex gap-0">
          {tabs.map(({ id, label, icon: Icon, count }) => (
            <button key={id} onClick={() => setActiveTab(id)}
              className="flex items-center gap-2 px-6 py-4 text-[0.58rem] font-semibold tracking-[0.15em] uppercase border-b-2 transition-all duration-200"
              style={{ borderColor: activeTab === id ? "var(--gold)" : "transparent", color: activeTab === id ? "var(--gold)" : "var(--text-muted)" }}>
              <Icon size={13} />
              {label}
              {count !== null && (
                <span className="text-[0.45rem] px-1.5 py-0.5 rounded-full font-bold"
                  style={{ background: activeTab === id ? "var(--gold)" : "var(--border-soft)", color: activeTab === id ? "var(--bg-primary)" : "var(--text-muted)" }}>
                  {count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 sm:px-12 lg:px-20 py-10">

        {activeTab === "orders" && (
          <div className="max-w-3xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-['Cormorant_Garamond',serif] text-[1.8rem] font-light" style={{ color: "var(--text-primary)" }}>Order History</h2>
              <span className="text-[0.55rem] tracking-[0.1em]" style={{ color: "var(--text-muted)" }}>{mockOrders.length} orders</span>
            </div>
            <div className="flex flex-col gap-3">
              {mockOrders.map((order) => (
                <div key={order.id} className="group p-6 cursor-pointer transition-all duration-200"
                  style={{ border: "1px solid var(--border-soft)" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "var(--border-hover)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border-soft)"}
                >
                  <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                    <div className="flex items-center gap-4">
                      <p className="text-[0.72rem] font-semibold tracking-[0.05em]" style={{ color: "var(--text-secondary)" }}>{order.id}</p>
                      <span className="text-[0.48rem] font-semibold tracking-[0.18em] uppercase px-2.5 py-1"
                        style={statusStyle(order.status)}>{order.status}</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-[0.72rem] font-medium" style={{ color: "var(--gold)" }}>{order.total}</span>
                      <button className="flex items-center gap-1 text-[0.52rem] tracking-[0.12em] uppercase transition-colors"
                        style={{ color: "var(--text-muted)" }}
                        onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
                        onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
                      >View <ChevronRight size={10} /></button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[0.58rem] tracking-[0.05em]" style={{ color: "var(--text-dim)" }}>{order.date}</span>
                    <span className="w-1 h-1 rounded-full" style={{ background: "var(--text-dim)" }} />
                    <span className="text-[0.62rem] tracking-[0.02em]" style={{ color: "var(--text-muted)" }}>{order.items.join(", ")}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "wishlist" && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-['Cormorant_Garamond',serif] text-[1.8rem] font-light" style={{ color: "var(--text-primary)" }}>Saved Items</h2>
              <span className="text-[0.55rem] tracking-[0.1em]" style={{ color: "var(--text-muted)" }}>{mockWishlist.length} items</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
              {mockWishlist.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`} className="group flex flex-col">
                  <div className={`relative w-full aspect-[3/4] overflow-hidden ${item.bg} mb-3`}>
                    <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 80px,rgba(201,169,110,0.015) 80px,rgba(201,169,110,0.015) 81px)" }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[0.44rem] tracking-[0.15em] uppercase" style={{ color: "rgba(201,169,110,0.18)" }}>Image</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                      style={{ background: "rgba(10,8,6,0.92)" }}>
                      <p className="text-center text-[0.52rem] font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--gold)" }}>View Product</p>
                    </div>
                  </div>
                  <p className="font-['Cormorant_Garamond',serif] text-[0.95rem] font-light mb-1 leading-snug transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--gold-light)"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}
                  >{item.name}</p>
                  <p className="text-[0.65rem] font-medium" style={{ color: "var(--gold)" }}>{item.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="max-w-lg">
            <h2 className="font-['Cormorant_Garamond',serif] text-[1.8rem] font-light mb-8" style={{ color: "var(--text-primary)" }}>Profile Details</h2>
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <InputField label="Full Name" placeholder="Your name" value={user.name} onChange={() => {}} />
              <InputField label="Email" type="email" placeholder="your@email.com" value={user.email} onChange={() => {}} />
              <InputField label="Phone" type="tel" placeholder="+1 (000) 000-0000" value="" onChange={() => {}} />
              <div className="pt-6 mt-2" style={{ borderTop: "1px solid var(--border-soft)" }}>
                <p className="text-[0.52rem] font-semibold tracking-[0.25em] uppercase mb-5" style={{ color: "var(--gold)" }}>Change Password</p>
                <div className="flex flex-col gap-4">
                  <InputField label="Current Password" type="password" placeholder="••••••••" value="" onChange={() => {}} />
                  <InputField label="New Password" type="password" placeholder="••••••••" value="" onChange={() => {}} />
                  <InputField label="Confirm New Password" type="password" placeholder="••••••••" value="" onChange={() => {}} />
                </div>
              </div>
              <button type="submit"
                className="w-full py-4 text-[0.6rem] font-semibold tracking-[0.3em] uppercase transition-all duration-300 mt-2"
                style={{ background: "var(--gold)", color: "var(--bg-primary)" }}
                onMouseEnter={e => e.currentTarget.style.background = "var(--gold-light)"}
                onMouseLeave={e => e.currentTarget.style.background = "var(--gold)"}
              >Save Changes</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Account() {
  const [user, setUser] = useState(null);
  return user
    ? <Dashboard user={user} onLogout={() => setUser(null)} />
    : <AuthView onLogin={(u) => setUser(u)} />;
}