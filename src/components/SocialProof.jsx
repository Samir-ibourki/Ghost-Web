import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StarFilled } from "@ant-design/icons";
import { reviews, tiktoks, tweets } from "../utils/utils";
import { Stars, TikTokCard, TweetCard } from "./utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SocialProof = () => {
  const container = useRef();
  const col1Ref = useRef();
  const col2Ref = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        ".sp-title",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".sp-title", start: "top 85%" },
        },
      );
      gsap.fromTo(
        ".sp-stat",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: ".sp-stats", start: "top 80%" },
        },
      );
      gsap.fromTo(
        ".tweet-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: ".tweets-grid", start: "top 75%" },
        },
      );
      gsap.fromTo(
        ".tiktok-card",
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: { trigger: ".tiktoks-row", start: "top 80%" },
        },
      );
      gsap.fromTo(
        ".review-card",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: ".reviews-row", start: "top 80%" },
        },
      );
      gsap.to(col1Ref.current, {
        y: "-50%",
        duration: 25,
        ease: "none",
        repeat: -1,
      });
      gsap.to(col2Ref.current, {
        y: "0%",
        duration: 30,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: container },
  );

  return (
    <section
      id="social"
      ref={container}
      className="relative overflow-hidden  bg-[color:var(--color-bg)]"
    >
      {/* ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px]
                      opacity-[0.06] blur-[100px] pointer-events-none glow-circle"
      />

      <div className="max-w-[90vw] mx-auto">
        {/* header */}
        <div className="sp-title mb-16 flex flex-col items-center gap-6">
          <div>
            <p className="text-[10px] text-center font-bold tracking-[5px] mb-3 accent-text">
              THE INTERNET AGREES
            </p>
            <h2
              className="text-themed text-center font-black leading-none"
              style={{
                fontFamily: "'Barlow Condensed', Impact, sans-serif",
                fontSize: "clamp(3rem, 7vw, 6rem)",
                letterSpacing: "4px",
              }}
            >
              GHOST GOES
              <span className="accent-text"> VIRAL</span>
            </h2>
          </div>

          <div className="sp-stats flex gap-8 md:gap-12">
            {[
              { val: "4.9★", label: "AVG RATING" },
              { val: "50K+", label: "REVIEWS" },
              { val: "200M+", label: "TIKTOK VIEWS" },
            ].map((s, i) => (
              <div key={i} className="sp-stat text-center md:text-right">
                <div
                  className="font-black text-2xl md:text-3xl accent-text"
                  style={{
                    fontFamily: "'Barlow Condensed', Impact, sans-serif",
                  }}
                >
                  {s.val}
                </div>
                <div className="text-[10px] tracking-[3px] text-themed opacity-30 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="tweets-grid hidden md:grid grid-cols-3 gap-4 mb-16
                        max-h-[600px] overflow-hidden relative"
        >
          <div
            className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, var(--color-bg), transparent)",
            }}
          />
          <div ref={col1Ref} className="flex flex-col gap-4">
            {[...tweets, ...tweets].slice(0, 4).map((t, i) => (
              <TweetCard key={`c1-${i}`} tweet={t} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {tweets.slice(1, 4).map((t, i) => (
              <TweetCard key={`c2-${i}`} tweet={t} />
            ))}
          </div>
          <div ref={col2Ref} className="flex flex-col gap-4">
            {[...tweets]
              .reverse()
              .slice(0, 4)
              .map((t, i) => (
                <TweetCard key={`c3-${i}`} tweet={t} />
              ))}
          </div>
        </div>

        {/* tweets — mobile */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 mb-12 snap-x snap-mandatory">
          {tweets.map((t) => (
            <div key={t.id} className="snap-start flex-shrink-0 w-[85vw]">
              <TweetCard tweet={t} />
            </div>
          ))}
        </div>

        {/* tiktok row */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-themed opacity-60"
            >
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.77a8.16 8.16 0 004.77 1.52V6.84a4.85 4.85 0 01-1-.15z" />
            </svg>
            <span className="text-themed opacity-40 text-xs tracking-[3px]">
              TRENDING ON TIKTOK
            </span>
          </div>

          <div className="tiktoks-row flex gap-4 overflow-x-auto pb-2">
            {tiktoks.map((tok) => (
              <TikTokCard key={tok.id} tok={tok} />
            ))}
            <div
              className="flex-shrink-0 w-[180px] h-[320px] cursor-pointer
                         flex flex-col items-center justify-center gap-3
                         hover:border-[color:var(--color-accent)]/50
                         transition-colors duration-300"
              style={{
                borderRadius: "4px",
                border:
                  "1px solid color-mix(in srgb, var(--color-text) 15%, transparent)",
              }}
            >
              <span className="text-3xl">👻</span>
              <p className="text-themed opacity-30 text-[10px] tracking-widest text-center px-4">
                VIEW ALL
                <br />
                CONTENT
              </p>
            </div>
          </div>
        </div>

        {/* reviews */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarFilled
                  key={i}
                  style={{ color: "var(--color-accent)", fontSize: 14 }}
                />
              ))}
            </div>
            <span className="text-themed opacity-40 text-xs tracking-[3px]">
              VERIFIED BUYERS
            </span>
          </div>

          <div className="reviews-row flex gap-4 overflow-x-auto pb-2">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="review-card flex-shrink-0 w-[240px] card-bg p-4
                           hover:border-[color:var(--color-accent)]/30
                           transition-colors duration-300"
                style={{
                  borderRadius: "2px",
                  border:
                    "1px solid color-mix(in srgb, var(--color-text) 8%, transparent)",
                }}
              >
                <Stars count={r.stars} />
                <p className="text-themed opacity-70 text-xs leading-relaxed mt-3 mb-4">
                  "{r.text}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-themed opacity-40 text-xs">
                    {r.name}
                  </span>
                  <span
                    className="text-[9px] tracking-widest px-2 py-0.5 accent-text"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--color-accent) 10%, var(--color-bg))",
                    }}
                  >
                    {r.flavor.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
