"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function StaggeredGallery() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>(".stagger-row");
      
      rows.forEach((row) => {
        const textBlock = row.querySelector(".text-block");
        const imageBlock = row.querySelector(".image-block img");

        // Subtle entrance for text
        gsap.from(textBlock, {
          y: 50,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 75%",
          }
        });

        // Image parallax block revealing
        gsap.from(imageBlock, {
          scale: 1.15,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-abyss py-32 px-6 md:px-16 flex flex-col gap-32">
      
      {/* Row 1 */}
      <div className="stagger-row max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="text-block flex flex-col justify-center order-2 md:order-1 w-full text-center md:text-left">
          <h2 className="font-serif text-5xl md:text-6xl text-champagne mb-8 leading-tight">
            The Ethos of Serenity
          </h2>
          <p className="font-sans text-stone text-lg leading-relaxed mb-6">
            A uniquely tailored space capturing the essence of the surrounding tea gardens and misty hills. Every element from the rich wood accents to the ambient lighting was placed thoughtfully to elevate your senses.
          </p>
          <div className="w-24 border-t border-gold/40 mt-6 pt-6 mx-auto md:mx-0"></div>
        </div>
        
        <div className="image-block order-1 md:order-2 overflow-hidden rounded-2xl h-[60vh] w-full">
          <img 
            src="/WhatsApp Image 2026-03-29 at 7.42.36 PM.jpeg" 
            alt="Interior Ambiance" 
            className="w-full h-full object-cover sepia-[0.2]" 
          />
        </div>
      </div>

      {/* Row 2 (Reversed) */}
      <div className="stagger-row max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="image-block overflow-hidden rounded-2xl h-[60vh] w-full">
          <img 
            src="/WhatsApp Image 2026-03-29 at 7.42.33 PM.jpeg" 
            alt="Living Space" 
            className="w-full h-full object-cover sepia-[0.2]" 
          />
        </div>

        <div className="text-block flex flex-col justify-center w-full text-center md:text-left">
          <h2 className="font-serif text-5xl md:text-6xl text-champagne mb-8 leading-tight">
            Mindful Gastronomy
          </h2>
          <p className="font-sans text-stone text-lg leading-relaxed mb-6">
            Experience an environment where time slows down. Relish intimate dining setups bathed in the soft ambient light, overlooking the vast expanse of the Himalayas right from your comfort zone.
          </p>
          <div className="w-24 border-t border-gold/40 mt-6 pt-6 mx-auto md:mx-0"></div>
        </div>
      </div>

    </section>
  );
}
