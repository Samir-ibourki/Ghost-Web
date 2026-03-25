import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import energy1 from "../assets/energy1.jpg";
import energy2 from "../assets/energy2.jpg";
import energy3 from "../assets/energy3.jpg";
import { ImageCard } from "./utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const marqueeItems = [
  "Stay Focused",
  "Zero Sugar",
  "Level Up",
  "Ghost Energy",
  "Keep Moving",
  "Zero Calories",
];

export function LifeStyle() {
  const container = useRef();
  const marqueeRef = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        ".gallery-img",
        { clipPath: "inset(100% 0% 0% 0%)", opacity: 1 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.4,
          stagger: 0.25,
          ease: "power4.inOut",
          scrollTrigger: { trigger: ".gallery-grid", start: "top 75%" },
        },
      );

      gsap.fromTo(
        ".gallery-img img",
        { scale: 1.3 },
        {
          scale: 1,
          duration: 1.4,
          stagger: 0.25,
          ease: "power4.inOut",
          scrollTrigger: { trigger: ".gallery-grid", start: "top 75%" },
        },
      );

      gsap.to(".img-main img", {
        ease: "none",
        scrollTrigger: {
          trigger: ".img-main",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
      gsap.to(".img-side-1 img", {
        ease: "none",
        scrollTrigger: {
          trigger: ".img-side-1",
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
      gsap.to(".img-side-2 img", {
        ease: "none",
        scrollTrigger: {
          trigger: ".img-side-2",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.fromTo(
        ".gallery-title",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".gallery-title", start: "top 85%" },
        },
      );
      gsap.fromTo(
        ".gallery-sub",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".gallery-title", start: "top 85%" },
        },
      );

      const totalWidth = marqueeRef.current?.scrollWidth / 2 || 0;
      gsap.to(".marquee-track", {
        x: -totalWidth,
        duration: 18,
        ease: "none",
        repeat: -1,
      });

      gsap.fromTo(
        ".img-badge",
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.3,
          ease: "back.out(1.7)",
          delay: 0.8,
          scrollTrigger: { trigger: ".gallery-grid", start: "top 70%" },
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      id="lifestyle"
      ref={container}
      className="py-24 px-6 md:px-12 overflow-hidden bg-[color:var(--color-bg)]"
    >
      <div className="max-w-[95vw] mx-auto">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <p className="gallery-title text-xs font-bold tracking-[4px] uppercase accent-text">
            — Visual Stories —
          </p>
          <h2
            className="gallery-title text-5xl md:text-8xl font-black
                       uppercase tracking-tighter leading-none text-themed"
          >
            The Ghost® <span className="accent-text">Lifestyle</span>
          </h2>

          <p
            className="gallery-sub text-themed opacity-50 text-base md:text-lg
                        font-medium max-w-xl mx-auto"
          >
            More than just energy. It's a movement. We're here to fuel your
            focus, your fitness, and your future.
          </p>
        </div>

        <div className="gallery-grid grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <ImageCard
            src={energy1}
            alt="Ghost Energy Focus"
            label="Stay Focused"
            description="Whether it's a mid-day grind or a late-night session, Ghost Energy keeps your focus razor-sharp with natural caffeine and zero crashes."
            badge="01"
            extraClass="img-main"
            className="lg:col-span-2 h-[500px] md:h-full"
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
              description="Energy in motion. Ghost is for those who live life in the fast lane and never settle for second best."
              badge="03"
              extraClass="img-side-2"
              className="h-[350px] md:h-full"
            />
          </div>
        </div>

        {/* marquee */}

        <div
          className="mt-20 overflow-hidden py-8
                        border-t border-b border-[color:var(--color-text)] border-opacity-10"
        >
          <div ref={marqueeRef} className="flex whitespace-nowrap">
            <div className="marquee-track flex gap-0">
              {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
                (item, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-8 px-8 text-sm md:text-base
                             font-black uppercase tracking-[4px] text-themed opacity-20"
                  >
                    {item}
                    <span className="inline-block w-2 h-2 rounded-full accent-bg" />
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
