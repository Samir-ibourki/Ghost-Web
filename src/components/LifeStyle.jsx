import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import energy1 from "../assets/energy1.jpg";
import energy2 from "../assets/energy2.jpg";
import energy3 from "../assets/energy3.jpg";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const marqueeItems = [
  "Stay Focused", "Zero Sugar", "Level Up",
  "Ghost Energy", "Keep Moving", "Zero Calories",
];

export function LifeStyle() {
  const container = useRef();
  const marqueeRef = useRef();

  useGSAP(() => {

    // clip-path reveal
    gsap.fromTo(
      ".gallery-img",
      { clipPath: "inset(100% 0% 0% 0%)", opacity: 1 },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.4,
        stagger: 0.25,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".gallery-grid",
          start: "top 75%",
        },
      }
    );

    // inner scale l
    gsap.fromTo(
      ".gallery-img img",
      { scale: 1.3 },
      {
        scale: 1,
        duration: 1.4,
        stagger: 0.25,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".gallery-grid",
          start: "top 75%",
        },
      }
    );

    // parallax per image
    gsap.to(".img-main img", {
      y: -60, ease: "none",
      scrollTrigger: {
        trigger: ".img-main",
        start: "top bottom", end: "bottom top",
        scrub: 1.5,
      },
    });
    gsap.to(".img-side-1 img", {
      y: -40, ease: "none",
      scrollTrigger: {
        trigger: ".img-side-1",
        start: "top bottom", end: "bottom top",
        scrub: 2,
      },
    });
    gsap.to(".img-side-2 img", {
      y: -80, ease: "none",
      scrollTrigger: {
        trigger: ".img-side-2",
        start: "top bottom", end: "bottom top",
        scrub: 1,
      },
    });

    // title
    gsap.fromTo(
      ".gallery-title",
      { y: 60, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".gallery-title", start: "top 85%" },
      }
    );

    gsap.fromTo(
      ".gallery-sub",
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.9, delay: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: ".gallery-title", start: "top 85%" },
      }
    );

    // marquee
    const totalWidth = marqueeRef.current?.scrollWidth / 2 || 0;
    gsap.to(".marquee-track", {
      x: -totalWidth,
      duration: 18,
      ease: "none",
      repeat: -1,
    });

    // badges
    gsap.fromTo(
      ".img-badge",
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1, scale: 1, duration: 0.5,
        stagger: 0.3, ease: "back.out(1.7)",
        scrollTrigger: { trigger: ".gallery-grid", start: "top 70%" },
        delay: 0.8,
      }
    );

  }, { scope: container });

  const ImageCard = ({ src, alt, label, description, badge, className, extraClass }) => (
    <div
      className={`gallery-img ${extraClass} relative overflow-hidden
                  rounded-[2rem] group ${className}`}
    >
      {/* badge */}
      <span
        className="img-badge absolute top-5 left-5 z-20 w-10 h-10
                   rounded-full flex items-center justify-center
                   text-xs font-black border"
        style={{
          background: "rgba(0,0,0,0.6)",
          borderColor: "var(--color-accent)",
          color: "var(--color-accent)",
          backdropFilter: "blur(8px)",
        }}
      >
        {badge}
      </span>

      {/* image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover scale-110
                   transition-transform duration-[1200ms] group-hover:scale-100"
      />

      {/* dark overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t
                   from-black/95 via-black/40 to-transparent
                   opacity-60 group-hover:opacity-100
                   transition-opacity duration-700"
      />

      {/* glitch scanlines*/}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100
                   transition-opacity duration-300 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.08) 2px,
            rgba(0,0,0,0.08) 4px
          )`,
        }}
      />

      {/* accent glow border*/}
      <div
        className="absolute inset-0 rounded-[2rem] opacity-0
                   group-hover:opacity-100 transition-opacity duration-500
                   pointer-events-none"
        style={{
          boxShadow: "inset 0 0 0 1.5px var(--color-accent)",
        }}
      />

      {/* label & description */}
      <div
        className="absolute bottom-0 left-0 right-0 p-8 md:p-10
                   translate-y-8 opacity-0
                   group-hover:translate-y-0 group-hover:opacity-100
                   transition-all duration-700 ease-out"
      >
        {/* accent line */}
        <div
          className="w-12 h-1 mb-6"
          style={{ background: "var(--color-accent)" }}
        />
        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-4">
          {label.split(" ").map((word, i, arr) =>
            i === arr.length - 1 ? (
              <span key={i} style={{ color: "var(--color-accent)" }}>
                {word}
              </span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </h3>
        <p className="text-white/70 text-base md:text-lg font-medium leading-relaxed max-w-lg mb-4">
          {description}
        </p>
        <button className="text-xs font-black uppercase tracking-[2px] opacity-60 hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
           Explore Story <span className="w-4 h-[1px] bg-white"></span>
        </button>
      </div>

      {/* bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-[4px] w-0
                   group-hover:w-full transition-all duration-700 ease-out"
        style={{ background: "var(--color-accent)" }}
      />
    </div>
  );

  return (
    <section
      id="lifestyle"
      ref={container}
      className="py-24 px-6 md:px-12 bg-black text-white overflow-hidden"
    >
      <div className="max-w-[95vw] mx-auto">

        {/* header */}
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <p
            className="gallery-title text-xs font-bold tracking-[4px] uppercase"
            style={{ color: "var(--color-accent)" }}
          >
            — Visual Stories —
          </p>
          <h2
            className="gallery-title text-5xl md:text-8xl font-black
                       uppercase tracking-tighter leading-none"
          >
            The Ghost®{" "}
            <span style={{ color: "var(--color-accent)" }}>Lifestyle</span>
          </h2>
          <p className="gallery-sub text-white/50 text-base md:text-lg font-medium max-w-xl mx-auto">
            More than just energy. It's a movement. We're here to fuel your
            focus, your fitness, and your future.
          </p>
        </div>

        {/* grid */}
        <div className="gallery-grid grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

          <ImageCard
            src={energy1}
            alt="Ghost Energy Focus"
            label="Stay Focused"
            description="Whether it's a mid-day grind or a late-night session, Ghost Energy keeps your focus razor-sharp with natural caffeine and zero crashes. True energy for the dedicated."
            badge="01"
            extraClass="img-main"
            className="lg:col-span-2 h-[500px] md:h-full "
          />

          <div className="grid grid-rows-2 gap-6 md:gap-8 lg:col-span-1">
            <ImageCard
              src={energy2}
              alt="Ghost Energy Vibe"
              label="Level Up"
              description="Born from legends. Our collabs aren't just flavors, they're experiences designed to push your performance to the next level."
              badge="02"
              extraClass="img-side-1"
              className="h-[350px] md:h-full"
            />
            <ImageCard
              src={energy3}
              alt="Ghost Energy Action"
              label="Keep Moving"
              description="Energy in motion. Ghost is for those who live life in the fast lane and never settle for second best. Stay active, stay Ghost."
              badge="03"
              extraClass="img-side-2"
              className="h-[350px] md:h-full"
            />
          </div>

        </div>

        {/* marque */}
        <div className="mt-20 overflow-hidden py-8 border-t border-b border-white/10">
          <div ref={marqueeRef} className="flex whitespace-nowrap">
            <div className="marquee-track flex gap-0">
              {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-8 px-8 text-sm md:text-base font-black
                             uppercase tracking-[4px] text-white/20"
                >
                  {item}
                  <span
                    className="inline-block w-2 h-2 rounded-full"
                    style={{ background: "var(--color-accent)" }}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}