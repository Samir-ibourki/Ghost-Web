import { products } from "../utils/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)
export function Products() {

useGSAP(()=>{
    gsap.from('.title',{
        y:50,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:'.title',
            start:"top 85%"
        }
    })
    gsap.from('.card',{
        y:100,
        opacity:0,
        duration:1.3,
        stagger:0.2,
        scrollTrigger:{
            trigger:'.card',
            start:"top 80%"
        }
    })
})


  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-transparent">
      <div className="max-w-[95vw] mx-auto">
        <h2 
          className="title text-3xl md:text-5xl font-black uppercase mb-10 tracking-tight text-center "
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Explore Our <span className="accent-text">Flavors</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative flex flex-col items-center rounded-[2rem] transition-all duration-700 hover:scale-[1.03]
                         border-2 border-white/5 bg-white/5 hover:bg-white/[0.08]"
            >
              <div className="card cursor-pointer relative  h-[30rem] flex items-center justify-center">
                {/* Glow backdrop */}
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-3xl scale-75"
                  style={{ backgroundColor: product.theme?.accent || 'var(--color-accent)' }}
                />
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="relative z-10 lg:mb-5 md:mb-5  filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]
                             transition-transform duration-700 group-hover:-translate-y-4 group-hover:rotate-6"
                />
              </div>

              <div className="text-center  mt-auto">
                <h3 
                  className="text-2xl md:text-3xl font-black uppercase mb-2 tracking-tight"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {product.name}
                </h3>
                <p className="text-sm md:text-base opacity-60 font-medium line-clamp-2 min-h-[3rem]">
                  {product.tagline}
                </p>
                <div 
                  className="w-12 h-1 mx-auto  rounded-full opacity-30 group-hover:w-24 group-hover:opacity-100 transition-all duration-500"
                  style={{ backgroundColor: product.theme?.accent || 'var(--color-accent)' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}