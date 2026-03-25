import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cards } from "../utils/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SUBJECTS = ["SPONSORSHIP", "COLLAB", "WHOLESALE", "PRESS"];

const Contact = () => {
  const container = useRef();
  const [active, setActive] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useGSAP(
    () => {
      gsap.fromTo(
        ".c-word",
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: { trigger: ".c-heading", start: "top 85%" },
        },
      );
      gsap.fromTo(
        ".c-field",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: ".c-form", start: "top 80%" },
        },
      );
      gsap.fromTo(
        ".c-card",
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: ".c-cards", start: "top 80%" },
        },
      );
    },
    { scope: container },
  );

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const fieldCls =
    `w-full bg-transparent py-3 outline-none resize-none text-sm
    text-[color:var(--color-text)] placeholder:text-[color:var(--color-text)]
    placeholder:opacity-25 focus:border-[color:var(--color-accent)]
    transition-colors duration-300` +
    ` border-b border-[color:var(--color-text)] border-opacity-10`;

  return (
    <section
      ref={container}
      id="contact"
      className="relative overflow-hidden py-[2rem] lg:py-[3.5rem] bg-[color:var(--color-bg)]"
    >
      <p
        className="absolute -bottom-8 right-0 font-black text-themed opacity-[0.03]
                   leading-none pointer-events-none select-none"
        style={{
          fontFamily: "'Barlow Condensed', Impact, sans-serif",
          fontSize: "clamp(10rem, 26vw, 24rem)",
          letterSpacing: "-6px",
        }}
      >
        👻
      </p>

      <div className="relative z-10 max-w-[90vw] mx-auto">
        {/* heading */}
        <div className="c-heading mb-16">
          <p className="text-[10px] font-bold text-center tracking-[6px] mb-5 accent-text">
            GET IN TOUCH
          </p>

          <div className="overflow-hidden leading-none text-center">
            {["LET'S BUILD", "SOMETHING", "LEGENDARY"].map((word, i) => (
              <span
                key={i}
                className="c-word inline-block font-black mr-4"
                style={{
                  fontFamily: "'Barlow Condensed', Impact, sans-serif",
                  fontSize: "clamp(2rem, 5vw, 4.5rem)",
                  letterSpacing: "-2px",
                  color:
                    i === 1
                      ? "var(--color-accent)"
                      : i === 2
                        ? "transparent"
                        : "var(--color-text)",
                  WebkitTextStroke:
                    i === 2
                      ? "1px color-mix(in srgb, var(--color-text) 20%, transparent)"
                      : "none",
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">
          {/* form */}
          <form className="c-form flex flex-col gap-8">
            <div className="c-field h-[2px] accent-bg opacity-60" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="c-field">
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Name"
                  className={fieldCls}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>
              <div className="c-field">
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="Email"
                  className={fieldCls}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>
            </div>

            {/* subject pills */}
            <div className="c-field flex flex-wrap gap-2">
              {SUBJECTS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setActive(s)}
                  className="text-[10px] tracking-[2px] px-3 py-2 border
                             transition-all duration-300"
                  style={{
                    borderRadius: "2px",
                    borderColor:
                      active === s
                        ? "var(--color-accent)"
                        : "color-mix(in srgb, var(--color-text) 15%, transparent)",
                    color:
                      active === s
                        ? "var(--color-accent)"
                        : "color-mix(in srgb, var(--color-text) 40%, transparent)",
                    backgroundColor:
                      active === s
                        ? "color-mix(in srgb, var(--color-accent) 10%, transparent)"
                        : "transparent",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="c-field">
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={onChange}
                placeholder="Your message..."
                className={fieldCls}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              />
            </div>

            <div className="c-field">
              <button
                type="submit"
                className="group relative overflow-hidden px-12 py-4
                           border font-black tracking-[4px]"
                style={{
                  borderRadius: "2px",
                  borderColor: "var(--color-accent)",
                  color: "var(--color-accent)",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "1rem",
                }}
              >
                <span
                  className="absolute inset-0 translate-y-full group-hover:translate-y-0
                             transition-transform duration-500 ease-out accent-bg"
                />
                <span
                  className="relative group-hover:text-[color:var(--color-bg)]
                                 transition-colors duration-300"
                >
                  SEND MESSAGE →
                </span>
              </button>
            </div>
          </form>

          {/* contact cards */}
          <div className="c-cards flex flex-col gap-3">
            {cards.map((card) => (
              <div
                key={card.num}
                className="c-card group flex items-start gap-4 p-5 cursor-pointer
                           relative overflow-hidden transition-all duration-300"
                style={{
                  borderRadius: "2px",
                  // ✅ border themed bdel border-white/[0.07]
                  border:
                    "1px solid color-mix(in srgb, var(--color-text) 8%, transparent)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor =
                    "color-mix(in srgb, var(--color-accent) 40%, transparent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor =
                    "color-mix(in srgb, var(--color-text) 8%, transparent)")
                }
              >
                {/* left accent line */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[2px]
                             scale-y-0 origin-bottom group-hover:scale-y-100
                             transition-transform duration-400 accent-bg"
                />

                <span
                  className="font-black text-2xl shrink-0 leading-none
                             transition-colors duration-300"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: "var(--color-primary)",
                  }}
                >
                  {card.num}
                </span>

                <div className="flex-1">
                  <p
                    className="font-bold tracking-[2px] text-xs text-themed opacity-70
                               group-hover:text-[color:var(--color-accent)] group-hover:opacity-100
                               transition-colors duration-300 mb-1"
                  >
                    {card.title}
                  </p>
                  <p className="text-xs text-themed opacity-25 mb-2">
                    {card.desc}
                  </p>
                  <p className="text-xs text-themed opacity-35">{card.email}</p>
                </div>

                <span
                  className="text-themed opacity-15 text-sm mt-1 shrink-0
                                 group-hover:text-[color:var(--color-accent)] group-hover:opacity-100
                                 group-hover:translate-x-1 transition-all duration-300"
                >
                  →
                </span>
              </div>
            ))}

            {/* response badge */}
            <div
              className="flex items-center gap-3 px-4 py-3 mt-1"
              style={{
                borderRadius: "2px",
                border:
                  "1px solid color-mix(in srgb, var(--color-text) 6%, transparent)",
              }}
            >
              <span className="w-2 h-2 rounded-full shrink-0 animate-pulse accent-bg" />
              <p className="text-themed opacity-20 text-[10px] tracking-[3px]">
                WE REPLY WITHIN 24 HOURS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
