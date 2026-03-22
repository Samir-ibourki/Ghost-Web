import { useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useGSAP } from "@gsap/react";

const Home = ({ product, onSwitch, activeIndex, totalProducts }) => {
  const canRef = useRef();
  const textRef = useRef();
  const heroRef = useRef();
  const isFirstRender = useRef(true);

  useGSAP(() => {
    if (!isFirstRender.current) return;
    isFirstRender.current = false;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      ".hero-title",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, delay: 0.3 },
    )
      .fromTo(
        ".hero-tagline",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.5",
      )
      .fromTo(
        ".hero-desc",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4",
      )
      .fromTo(
        ".hero-btns",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3",
      )
      .fromTo(
        canRef.current,
        { x: 120, opacity: 0, scale: 0.85 },
        { x: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.2)" },
        "-=0.8",
      )
      .fromTo(
        ".glow-orb",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6",
      )
      .fromTo(
        ".switch-btn",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.3",
      )
      .fromTo(
        ".product-dots",
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4 },
        "-=0.2",
      );
  }, []);

  useGSAP(() => {
    if (isFirstRender.current) return;

    const tl = gsap.timeline();

    tl.to(canRef.current, {
      x: -80,
      opacity: 0,
      scale: 0.9,
      duration: 0.35,
      ease: "power2.in",
    })
      .to(
        textRef.current,
        {
          y: -20,
          opacity: 0,
          duration: 0.25,
          ease: "power2.in",
        },
        "-=0.3",
      )
      .set(canRef.current, { x: 100 })
      .set(textRef.current, { y: 20 })
      .to(textRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      })
      .to(
        canRef.current,
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.4)",
        },
        "-=0.3",
      );
  }, [activeIndex]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero-section relative w-full flex items-center justify-center overflow-hidden h-[calc(100vh-55px)] md:h-[calc(100vh-72px)]"
    >
      {/* decorative background  */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[55%] h-full primary-bg"
          style={{
            borderRadius: "0 0 0 40%",
            opacity: 0.15,
          }}
        />
          
        <div
          className="absolute bottom-0 left-0 w-full h-[30%] primary-bg"
          style={{
            borderRadius: "50% 50% 0 0",
            opacity: 0.08,
          }}
        />
        <div
          className="glow-orb absolute top-[15%] right-[20%] w-32 h-32 rounded-full glow-circle"
          style={{ filter: "blur(40px)" }}
        />
        <div
          className="glow-orb absolute bottom-[25%] left-[10%] w-20 h-20 rounded-full glow-circle"
          style={{ filter: "blur(30px)" }}
        />
      </div>

      {/* content */}
      <div 
        className="relative z-10 w-full max-w-[90vw] mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-8  md:pt-1 pb-16 lg:pt-0"
      >
        
        {/* left: text content */}
        <div ref={textRef} className="flex-1 max-w-xl text-center   lg:text-left">
          <h1
            className="hero-title font-black leading-[1.1] mb-2 md:mb-4 text-[clamp(1.5rem,7vw,4.5rem)]"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Life Moves Fast.
            <br />
            Your Energy Should Too.
            <br />
            Choose{" "}
            <span className="accent-text">Ghost Energy.</span>
          </h1>

          <p
            className="hero-tagline text-base md:text-2xl font-semibold mb-2 md:mb-4 accent-text"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {product.tagline}
          </p>

          <p className="hero-desc text-[10px] md:text-lg leading-relaxed mb-4 md:mb-8 opacity-70">
            {product.description}
          </p>

          <div className="hero-btns flex items-center justify-center lg:justify-start gap-3 md:gap-5 flex-wrap">
            <button
              className="group flex items-center gap-2 px-5 md:px-8 py-2.5 md:py-4 rounded-full font-bold text-[10px] md:text-base
                         transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-bg)",
              }}
            >
              Order Now
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
            <button
              className="px-5 md:px-8 py-2.5 md:py-4 rounded-full font-bold text-[10px] md:text-base border-2
                         transition-all duration-500 hover:scale-105 cursor-pointer"
              style={{
                borderColor: "var(--color-accent)",
                color: "var(--color-accent)",
                backgroundColor: "transparent",
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* right: product */}
        <div className="flex-1 flex items-center justify-center relative lg:mt-0">
          <div
            className="glow-orb absolute w-[250px] h-[250px] md:w-[600px] md:h-[600px] rounded-full glow-circle"
            style={{ filter: "blur(60px)" }}
          />

          <img
            ref={canRef}
            src={product.image}
            alt={product.name}
            data-flip-id="hero-can"
            className="hero-can relative z-10 h-[44vh] md:h-[75vh] lg:h-[100vh] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
            style={{
              filter: "drop-shadow(0 30px 60px var(--color-glow))",
              transition: "filter 0.8s ease",
            }}
          />
        </div>
      </div>

      {/*switch button + dots */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 md:gap-6 z-20">
        <div className="product-dots flex items-center gap-3 md:gap-4">
          {Array.from({ length: totalProducts }).map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-500"
              style={{
                width: i === activeIndex ? "24px" : "8px",
                height: "8px",
                backgroundColor:
                  i === activeIndex
                    ? "var(--color-accent)"
                    : "var(--color-text)",
                opacity: i === activeIndex ? 1 : 0.3,
              }}
            />
          ))}
        </div>

        <button
          onClick={onSwitch}
          className="switch-btn group flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-4 rounded-full
                     font-bold text-[11px] md:text-base transition-all duration-500
                     hover:scale-110 hover:shadow-2xl cursor-pointer"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-bg)",
            boxShadow: "0 8px 32px var(--color-glow)",
          }}
        >
          Next Flavor
          <ChevronRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
    </section>
  );
};

export default Home;
