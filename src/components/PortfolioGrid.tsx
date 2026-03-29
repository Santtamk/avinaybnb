"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const portfolioItems = [
  {
    src: "/nonroom.jpeg",
    title: "The Lounge",
    desc: "A meditative space framed by deep woods and natural textures."
  },
  {
    src: "/WhatsApp Image 2026-03-29 at 7.42.40 PM.jpeg",
    title: "Master Suite",
    desc: "Unbridled opulence featuring panoramic vistas."
  },
  {
    src: "/WhatsApp Image 2026-03-29 at 7.42.31 PM (1).jpeg",
    title: "Ambient Dining",
    desc: "Intimate settings with warm lighting for memorable evenings."
  }
];

export default function PortfolioGrid() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".portfolio-card");
      
      gsap.from(".portfolio-title", {
        y: 30,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

      gsap.from(cards, {
        y: 60,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-abyss py-32 px-6 md:px-12 flex flex-col items-center">
      
      <div className="portfolio-title text-center mb-24">
        <span className="text-gold tracking-[0.4em] text-xs uppercase mb-4 block font-sans">Discover Rooms</span>
        <h2 className="font-serif text-5xl md:text-7xl text-champagne">Portfolio</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-screen-xl">
        {portfolioItems.map((item, idx) => (
          <div key={idx} className="portfolio-card flex flex-col group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl h-[50vh] w-full mb-6">
              <div className="absolute inset-0 bg-abyss/20 z-10 group-hover:bg-transparent transition-colors duration-500"/>
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[20s] ease-out sepia-[0.1]"
              />
            </div>
            <h3 className="font-serif text-2xl text-champagne mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
            <p className="font-sans text-stone text-sm leading-relaxed mb-6">{item.desc}</p>
            <div className="h-[1px] w-full bg-stone/20 overflow-hidden">
                <div className="h-full w-0 bg-gold group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}
