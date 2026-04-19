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

const statusStyles = (s) => {
  if (s === "Delivered") return "text-[#5a9a5a] bg-[rgba(90,154,90,0.08)] border-[rgba(90,154,90,0.3)]";
  if (s === "Shipped")   return "text-[#c9a96e] bg-[rgba(201,169,110,0.08)] border-[rgba(201,169,110,0.3)]";
  return "text-[#9e9082] bg-transparent border-[rgba(158,144,130,0.3)]";
};

function InputField({ label, type = "text", placeholder, value, onChange, required }) {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[0.52rem] font-semibold tracking-[0.2em] uppercase text-[#9e9082]">
        {label} {required && <span className="text-[#c9a96e]">*</span>}
      </label>
      <div className="relative">
        <input
          type={isPassword && show ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full bg-transparent border border-[rgba(201,169,110,0.2)] px-4 py-3 text-[0.7rem] text-[#f0e8de] placeholder:text-[#9e9082]/40 outline-none focus:border-[#c9a96e] transition-colors duration-200"
        />
        {isPassword && (
          <button type="button" onClick={() => setShow(!show)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9e9082] hover:text-[#c9a96e] transition-colors">
            {show ? <EyeOff size={14} /> : <Eye size={14} />}
          </button>
        )}
      </div>
    </div>
  );
}

function AuthView({ onLogin }) {
  const [tab, setTab] = useState("login");
  const [loginForm, setLoginForm]       = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    if (!loginForm.email || !loginForm.password) { setError("Please fill in all fields."); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); onLogin({ name: "Guest User", email: loginForm.email }); }, 1000);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    if (!registerForm.name || !registerForm.email || !registerForm.password) { setError("Please fill in all fields."); return; }
    if (registerForm.password !== registerForm.confirm) { setError("Passwords do not match."); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); onLogin({ name: registerForm.name, email: registerForm.email }); }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0a0806] font-['Montserrat',sans-serif] pt-24 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-px bg-[#c9a96e] block" />
            <span className="text-[0.52rem] font-semibold tracking-[0.35em] uppercase text-[#c9a96e]">My Account</span>
            <span className="w-8 h-px bg-[#c9a96e] block" />
          </div>
          <h1 className="font-['Cormorant_Garamond',serif] text-[3rem] font-light text-[#f5efe6]">
            {tab === "login" ? "Welcome Back" : <span>Create <em className="italic text-[#e8d5a3]">Account</em></span>}
          </h1>
        </div>

        <div className="flex border border-[rgba(201,169,110,0.18)] mb-8">
          {["login", "register"].map((t) => (
            <button key={t} onClick={() => { setTab(t); setError(""); }}
              className={`flex-1 py-3 text-[0.58rem] font-semibold tracking-[0.2em] uppercase transition-all duration-200
                ${tab === t ? "bg-[#c9a96e] text-[#0a0806]" : "text-[#9e9082] hover:text-[#c9a96e]"}`}>
              {t === "login" ? "Sign In" : "Register"}
            </button>
          ))}
        </div>

        {error && (
          <p className="text-[0.62rem] text-[#b83a2a] border border-[rgba(184,58,42,0.3)] px-4 py-3 mb-6 tracking-[0.03em] bg-[rgba(184,58,42,0.05)]">
            {error}
          </p>
        )}

        {tab === "login" && (
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <InputField label="Email" type="email" placeholder="your@email.com" value={loginForm.email}
              onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} required />
            <InputField label="Password" type="password" placeholder="Your password" value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} required />
            <div className="flex justify-end">
              <button type="button" className="text-[0.55rem] tracking-[0.1em] text-[#9e9082] hover:text-[#c9a96e] transition-colors underline underline-offset-2">
                Forgot password?
              </button>
            </div>
            <button type="submit" disabled={loading}
              className={`w-full py-4 text-[0.6rem] font-semibold tracking-[0.3em] uppercase transition-all duration-300
                ${loading ? "bg-[rgba(201,169,110,0.4)] cursor-not-allowed text-[#0a0806]" : "bg-[#c9a96e] text-[#0a0806] hover:bg-[#e8d5a3]"}`}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
            <p className="text-center text-[0.58rem] text-[#9e9082]">
              Don't have an account?{" "}
              <button type="button" onClick={() => setTab("register")} className="text-[#c9a96e] hover:text-[#e8d5a3] transition-colors">Register</button>
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
              className={`w-full py-4 text-[0.6rem] font-semibold tracking-[0.3em] uppercase transition-all duration-300
                ${loading ? "bg-[rgba(201,169,110,0.4)] cursor-not-allowed text-[#0a0806]" : "bg-[#c9a96e] text-[#0a0806] hover:bg-[#e8d5a3]"}`}>
              {loading ? "Creating account..." : "Create Account"}
            </button>
            <p className="text-center text-[0.55rem] text-[#7a6240]">
              By registering you agree to our{" "}
              <span className="text-[#9e9082] underline underline-offset-2 cursor-pointer">Terms</span> &{" "}
              <span className="text-[#9e9082] underline underline-offset-2 cursor-pointer">Privacy Policy</span>.
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
    <div className="min-h-screen bg-[#0a0806] font-['Montserrat',sans-serif] pt-24">

      {/* ── HEADER ── */}
      <div className="border-b border-[rgba(201,169,110,0.1)]">
        <div className="px-6 sm:px-12 lg:px-20 py-8 flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-px bg-[#c9a96e] block" />
              <span className="text-[0.5rem] font-semibold tracking-[0.3em] uppercase text-[#c9a96e]">My Account</span>
            </div>
            <h1 className="font-['Cormorant_Garamond',serif] text-[2.2rem] sm:text-[2.8rem] font-light text-[#f5efe6] leading-none">
              Hello, <em className="italic text-[#e8d5a3]">{user.name}</em>
            </h1>
            <p className="text-[0.6rem] text-[#9e9082] mt-2 tracking-[0.05em]">{user.email}</p>
          </div>
          <button onClick={onLogout}
            className="flex items-center gap-2 text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-[#9e9082] hover:text-[#c9a96e] transition-colors border border-[rgba(201,169,110,0.2)] hover:border-[#c9a96e] px-5 py-2.5 transition-all duration-200">
            <LogOut size={12} />
            Sign Out
          </button>
        </div>

        {/* Tab nav */}
        <div className="px-6 sm:px-12 lg:px-20 flex gap-0">
          {tabs.map(({ id, label, icon: Icon, count }) => (
            <button key={id} onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-6 py-4 text-[0.58rem] font-semibold tracking-[0.15em] uppercase border-b-2 transition-all duration-200
                ${activeTab === id
                  ? "border-[#c9a96e] text-[#c9a96e]"
                  : "border-transparent text-[#9e9082] hover:text-[#e8d5a3]"}`}>
              <Icon size={13} />
              {label}
              {count !== null && (
                <span className={`text-[0.45rem] px-1.5 py-0.5 rounded-full font-bold
                  ${activeTab === id ? "bg-[#c9a96e] text-[#0a0806]" : "bg-[rgba(201,169,110,0.1)] text-[#9e9082]"}`}>
                  {count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="px-6 sm:px-12 lg:px-20 py-10">

        {/* ORDERS */}
        {activeTab === "orders" && (
          <div className="max-w-3xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-['Cormorant_Garamond',serif] text-[1.8rem] font-light text-[#f5efe6]">Order History</h2>
              <span className="text-[0.55rem] tracking-[0.1em] text-[#9e9082]">{mockOrders.length} orders</span>
            </div>
            <div className="flex flex-col gap-3">
              {mockOrders.map((order) => (
                <div key={order.id}
                  className="group border border-[rgba(201,169,110,0.1)] hover:border-[rgba(201,169,110,0.25)] transition-all duration-200 p-6 cursor-pointer">
                  <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                    <div className="flex items-center gap-4">
                      <p className="text-[0.72rem] font-semibold text-[#f0e8de] tracking-[0.05em]">{order.id}</p>
                      <span className={`text-[0.48rem] font-semibold tracking-[0.18em] uppercase border px-2.5 py-1 ${statusStyles(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-[0.72rem] font-medium text-[#c9a96e]">{order.total}</span>
                      <button className="flex items-center gap-1 text-[0.52rem] tracking-[0.12em] uppercase text-[#9e9082] group-hover:text-[#c9a96e] transition-colors">
                        View <ChevronRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[0.58rem] text-[#7a6240] tracking-[0.05em]">{order.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#7a6240]" />
                    <span className="text-[0.62rem] text-[#9e9082] tracking-[0.02em]">{order.items.join(", ")}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WISHLIST */}
        {activeTab === "wishlist" && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-['Cormorant_Garamond',serif] text-[1.8rem] font-light text-[#f5efe6]">Saved Items</h2>
              <span className="text-[0.55rem] tracking-[0.1em] text-[#9e9082]">{mockWishlist.length} items</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
              {mockWishlist.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`} className="group flex flex-col">
                  <div className={`relative w-full aspect-[3/4] overflow-hidden ${item.bg} mb-3`}>
                    <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 80px,rgba(201,169,110,0.015) 80px,rgba(201,169,110,0.015) 81px)" }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[0.44rem] tracking-[0.15em] uppercase text-[rgba(201,169,110,0.18)]">Image</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 py-3 bg-[rgba(10,8,6,0.92)] translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-center text-[0.52rem] font-semibold tracking-[0.25em] uppercase text-[#c9a96e]">View Product</p>
                    </div>
                  </div>
                  <p className="font-['Cormorant_Garamond',serif] text-[0.95rem] font-light text-[#f0e8de] mb-1 group-hover:text-[#e8d5a3] transition-colors leading-snug">{item.name}</p>
                  <p className="text-[0.65rem] font-medium text-[#c9a96e]">{item.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* PROFILE */}
        {activeTab === "profile" && (
          <div className="max-w-lg">
            <h2 className="font-['Cormorant_Garamond',serif] text-[1.8rem] font-light text-[#f5efe6] mb-8">Profile Details</h2>
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <InputField label="Full Name" placeholder="Your name" value={user.name} onChange={() => {}} />
              <InputField label="Email" type="email" placeholder="your@email.com" value={user.email} onChange={() => {}} />
              <InputField label="Phone" type="tel" placeholder="+1 (000) 000-0000" value="" onChange={() => {}} />

              <div className="pt-6 mt-2 border-t border-[rgba(201,169,110,0.08)]">
                <p className="text-[0.52rem] font-semibold tracking-[0.25em] uppercase text-[#c9a96e] mb-5">Change Password</p>
                <div className="flex flex-col gap-4">
                  <InputField label="Current Password" type="password" placeholder="••••••••" value="" onChange={() => {}} />
                  <InputField label="New Password" type="password" placeholder="••••••••" value="" onChange={() => {}} />
                  <InputField label="Confirm New Password" type="password" placeholder="••••••••" value="" onChange={() => {}} />
                </div>
              </div>

              <button type="submit"
                className="w-full py-4 bg-[#c9a96e] text-[#0a0806] text-[0.6rem] font-semibold tracking-[0.3em] uppercase hover:bg-[#e8d5a3] transition-all duration-300 mt-2">
                Save Changes
              </button>
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