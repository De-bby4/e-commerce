import { useState } from "react";
import { Mail, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@crovia.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (212) 555-0190",
    sub: "Mon – Fri, 9am – 6pm EST",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#0a0806] font-['Montserrat',sans-serif] pt-24">

      {/* HERO STRIP */}
      <div className="px-6 sm:px-12 lg:px-20 py-16 border-b border-[rgba(201,169,110,0.1)] relative overflow-hidden">
        <span className="absolute right-10 top-1/2 -translate-y-1/2 font-['Cormorant_Garamond',serif] text-[10rem] font-light text-[rgba(201,169,110,0.04)] select-none pointer-events-none leading-none">
          Hello
        </span>
        <div className="flex items-center gap-4 mb-3">
          <span className="w-8 h-px bg-[#c9a96e] block" />
          <span className="text-[0.55rem] font-semibold tracking-[0.35em] uppercase text-[#c9a96e]">
            Get in Touch
          </span>
        </div>
        <h1 className="font-['Cormorant_Garamond',serif] text-[3rem] sm:text-[4.5rem] font-light leading-none text-[#f5efe6]">
          We'd love to <em className="italic text-[#e8d5a3]">hear</em> from you
        </h1>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-0 px-6 sm:px-12 lg:px-20 py-16 lg:py-20">

        {/* LEFT — Info */}
        <div className="lg:pr-16 lg:border-r border-[rgba(201,169,110,0.1)] mb-14 lg:mb-0">
          <p className="text-[0.7rem] leading-[2] tracking-[0.04em] text-[#9e9082] mb-12 max-w-sm">
            Whether you have a question about a product, need styling advice, or want to know more about an order — our team is here for you.
          </p>

          <div className="flex flex-col gap-8">
            {contactInfo.map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[rgba(201,169,110,0.2)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={15} className="text-[#c9a96e]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[0.52rem] font-semibold tracking-[0.25em] uppercase text-[#c9a96e] mb-1">
                    {label}
                  </p>
                  {label === "Email" ? (
                    <a href={`mailto:${value}`} className="text-[0.72rem] text-[#f0e8de] mb-0.5 hover:underline">
                      {value}
                      </a>
                  ) : (
                    <p className="text-[0.72rem] text-[#f0e8de] mb-0.5">{value}</p>
                  )}
 
                  <p className="text-[0.6rem] text-[#9e9082] tracking-[0.03em]">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="mt-12 pt-10 border-t border-[rgba(201,169,110,0.08)]">
            <p className="text-[0.52rem] font-semibold tracking-[0.25em] uppercase text-[#c9a96e] mb-5">
              Follow Us
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 border border-[rgba(201,169,110,0.2)] flex items-center justify-center hover:border-[#c9a96e] transition-colors group">
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-[#9e9082] group-hover:fill-[#c9a96e] transition-all">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-[rgba(201,169,110,0.2)] flex items-center justify-center hover:border-[#c9a96e] transition-colors group">
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-[#9e9082] group-hover:fill-[#c9a96e] transition-all">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-[rgba(201,169,110,0.2)] flex items-center justify-center hover:border-[#c9a96e] transition-colors group">
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-[#9e9082] group-hover:fill-[#c9a96e] transition-all">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="lg:pl-16">
          <p className="text-[0.55rem] font-semibold tracking-[0.3em] uppercase text-[#c9a96e] mb-8">
            Send a Message
          </p>

          {submitted ? (
            <div className="flex flex-col items-start gap-4 py-12">
              <div className="w-12 h-12 border border-[#c9a96e] flex items-center justify-center mb-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#c9a96e] fill-none" strokeWidth="1.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-[2rem] font-light text-[#f5efe6]">
                Message received
              </h3>
              <p className="text-[0.68rem] leading-[1.9] text-[#9e9082] max-w-sm">
                Thank you for reaching out. A member of our team will be in touch within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                className="mt-4 text-[0.58rem] font-semibold tracking-[0.2em] uppercase text-[#c9a96e] underline underline-offset-4 hover:text-[#e8d5a3] transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[0.52rem] font-semibold tracking-[0.2em] uppercase text-[#9e9082]">
                    Full Name <span className="text-[#c9a96e]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="bg-transparent border border-[rgba(201,169,110,0.2)] px-4 py-3 text-[0.7rem] text-[#f0e8de] placeholder:text-[#9e9082]/50 outline-none focus:border-[#c9a96e] transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[0.52rem] font-semibold tracking-[0.2em] uppercase text-[#9e9082]">
                    Email <span className="text-[#c9a96e]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="bg-transparent border border-[rgba(201,169,110,0.2)] px-4 py-3 text-[0.7rem] text-[#f0e8de] placeholder:text-[#9e9082]/50 outline-none focus:border-[#c9a96e] transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[0.52rem] font-semibold tracking-[0.2em] uppercase text-[#9e9082]">
                  Subject
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="bg-[#0a0806] border border-[rgba(201,169,110,0.2)] px-4 py-3 text-[0.7rem] text-[#f0e8de] outline-none focus:border-[#c9a96e] transition-colors duration-200 appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0d0b08]">Select a topic</option>
                  <option value="order" className="bg-[#0d0b08]">Order Enquiry</option>
                  <option value="product" className="bg-[#0d0b08]">Product Question</option>
                  <option value="returns" className="bg-[#0d0b08]">Returns & Exchanges</option>
                  <option value="styling" className="bg-[#0d0b08]">Personal Styling</option>
                  <option value="wholesale" className="bg-[#0d0b08]">Wholesale</option>
                  <option value="other" className="bg-[#0d0b08]">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[0.52rem] font-semibold tracking-[0.2em] uppercase text-[#9e9082]">
                  Message <span className="text-[#c9a96e]">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="bg-transparent border border-[rgba(201,169,110,0.2)] px-4 py-3 text-[0.7rem] text-[#f0e8de] placeholder:text-[#9e9082]/50 outline-none focus:border-[#c9a96e] transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 text-[0.6rem] font-semibold tracking-[0.3em] uppercase transition-all duration-300 mt-2
                  ${loading
                    ? "bg-[rgba(201,169,110,0.4)] text-[#0a0806] cursor-not-allowed"
                    : "bg-[#c9a96e] text-[#0a0806] hover:bg-[#e8d5a3]"
                  }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              <p className="text-[0.55rem] tracking-[0.05em] text-[#7a6240]">
                * Required fields. We respect your privacy and never share your information.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}