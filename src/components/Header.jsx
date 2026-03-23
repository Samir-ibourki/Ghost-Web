import { navLinks } from "../utils/utils";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const imgLogo = useRef();
  const container = useRef();
  const headerEl = useRef();
  const [mobileOpen, setMobileOpen] = useState(false);

  useGSAP(
    () => {
      // logo
      gsap.fromTo(
        imgLogo.current,
        { y: -20, opacity: 0 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      );

      // nav links
      gsap.fromTo(
        ".nav-link",
        { y: -20, opacity: 0 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.5,
        },
      );

      // social icons
      gsap.fromTo(
        ".social-icon",
        { y: -20, opacity: 0 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.12,
          ease: "power2.out",
          delay: 1.0,
        },
      );

      // header scroll blur
      ScrollTrigger.create({
        trigger: "body",
        start: "80px top",
        onEnter: () => {
          gsap.to(headerEl.current, {
            backgroundColor: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(12px)",
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.to(".nav-link, .social-icon, .hamburger-btn", {
            color: "#ffffff",
            opacity: 1,
            duration: 0.4,
          });
          gsap.to(imgLogo.current, {
            filter: "brightness(0) invert(1)",
            duration: 0.4,
          });
        },
        onLeaveBack: () => {
          gsap.to(headerEl.current, {
            backgroundColor: "transparent",
            backdropFilter: "blur(0px)",
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.to(".nav-link, .social-icon, .hamburger-btn", {
            color: "var(--color-text)",
            opacity: 0.5,
            duration: 0.4,
          });
          gsap.to(imgLogo.current, {
            filter: "brightness(1) invert(0)",
            duration: 0.4,
          });
        },
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="sticky top-0 w-full z-50">
      <style>
        {`
          .nav-link, .social-icon {
            color: var(--header-text-color);
          }
          .nav-link:hover {
            color: var(--color-accent) !important;
          }
          .social-icon:hover {
            color: var(--color-accent) !important;
            opacity: 1 !important;
          }
        `}
      </style>
      <header
        ref={headerEl}
        className="w-full py-1 transition-all duration-400 ease-out"
        style={{ backgroundColor: "transparent" }}
      >
        <div className="flex justify-between items-center w-[90vw] mx-auto">
          {/* logo */}
          <div className="flex-1 flex">
            <img
              alt="Ghost Energy"
              ref={imgLogo}
              className="w-20 md:w-28"
              src={logo}
              style={{ filter: "brightness(0) invert(var(--header-invert))" }}
            />
          </div>

          {/* nav links */}
          <nav className="hidden md:flex items-center justify-center gap-10 flex-1">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link relative text-sm transition-colors duration-500 group"
                style={{ color: "inherit" }}
              >
                {item.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-5 flex-1">
            {/* social icons  */}
            <div className="hidden md:flex items-center gap-7">
              {[InstagramOutlined, FacebookOutlined, TwitterOutlined].map(
                (Icon, i) => (
                  <Icon
                    key={i}
                    className="social-icon text-base transition-colors duration-500 cursor-pointer opacity-50 hover:opacity-100"
                    style={{ color: "inherit" }}
                  />
                ),
              )}
            </div>

            {/* hamburger btn */}
            <button
              className="hamburger-btn md:hidden transition-colors duration-200 relative z-50 p-2"
              style={{ color: "var(--header-text-color)", opacity: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X size={30} style={{ color: "#ffffff" }} />
              ) : (
                <Menu size={30} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-in-out bg-black/95 backdrop-blur-xl ${
          mobileOpen
            ? "max-h-[500px] opacity-100 border-b"
            : "max-h-0 opacity-0"
        }`}
        style={{
          borderBottomColor: mobileOpen ? "var(--color-accent)" : "transparent",
        }}
      >
        <nav className="flex flex-col gap-1 px-6 py-8">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/85 text-lg py-4 border-b border-white/10 transition-all duration-200 
                         hover:text-[var(--color-accent)] hover:pl-2"
              style={{ textDecoration: "none" }}
            >
              {item.label}
            </a>
          ))}

          {/* social icons mobile */}
          <div className="flex gap-6 pt-5 mt-2">
            {[InstagramOutlined, FacebookOutlined, TwitterOutlined].map(
              (Icon, i) => (
                <Icon
                  key={i}
                  className="text-white/70 text-xl cursor-pointer transition-colors duration-300 hover:text-[var(--color-accent)]"
                />
              ),
            )}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
