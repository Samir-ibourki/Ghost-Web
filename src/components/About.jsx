import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import energy1 from "../assets/energy1.jpg";
import energy2 from "../assets/energy2.jpg";
import energy3 from "../assets/energy3.jpg";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const container = useRef();

  useGSAP(
    () => {
      // Title revealing
      gsap.from(".gallery-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gallery-title",
          start: "top 85%",
        },
      });

      // Images reveals
      gsap.from(".gallery-img", {
        scale: 1.1,
        opacity: 0,
        y: 60,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".gallery-grid",
          start: "top 75%",
        },
      });
    },
    { scope: container },
  );

  const images = [
    { src: energy1, scale: "lg:col-span-2 lg:row-span-2", alt: "Ghost Energy Focus" },
    { src: energy2, scale: "lg:col-span-1 lg:row-span-1", alt: "Ghost Energy Vibe" },
    { src: energy3, scale: "lg:col-span-1 lg:row-span-1", alt: "Ghost Energy Action" },
  ];

  return (
    <section id="lifestyle" ref={container} className="py-24 px-6 md:px-12 bg-black text-white overflow-hidden">
      <div className="max-w-[95vw] mx-auto">
        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="gallery-title text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              The Ghost® <span className="accent-text">Lifestyle</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-medium max-w-xl mx-auto">
              More than just energy. It's a movement. We're here to fuel your focus, your fitness, and your future.
            </p>
          </div>
        </div>

        <div className="gallery-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto md:h-[80vh]">
          {/* Main Large Image */}
          <div className="gallery-img relative overflow-hidden rounded-[2rem] md:col-span-1 lg:col-span-2 h-[400px] md:h-full group cursor-crosshair">
            <img 
              src={energy1} 
              alt="Lifestyle 1" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <span className="text-2xl font-black uppercase tracking-tight">Stay Focused.</span>
            </div>
          </div>

          {/* Side Column with 2 Stacked Images */}
          <div className="grid grid-rows-2 gap-6 h-full md:col-span-1 lg:col-span-1">
             <div className="gallery-img relative overflow-hidden rounded-[2rem] h-[300px] md:h-full group cursor-crosshair">
                <img 
                  src={energy2} 
                  alt="Lifestyle 2" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="text-xl font-black uppercase tracking-tight">Level Up.</span>
                </div>
             </div>
             <div className="gallery-img relative overflow-hidden rounded-[2rem] h-[300px] md:h-full group cursor-crosshair">
                <img 
                  src={energy3} 
                  alt="Lifestyle 3" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="text-xl font-black uppercase tracking-tight">Keep Moving.</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}