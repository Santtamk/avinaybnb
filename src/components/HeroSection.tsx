"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const images = [
  "/hero&room.jpeg",
  "/hero&room2.jpeg",
];

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const textContainer = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slider Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 sec per slide
    return () => clearInterval(interval);
  }, []);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro drop-in for text
      gsap.from(textContainer.current!.children, {
        y: 40,
        opacity: 0,
        duration: 2,
        stagger: 0.3,
        ease: "power4.out",
        delay: 0.2,
      });
      
      // Slight slow continuous scale on the background image for a premium feel
      gsap.to(".slide-img", {
        scale: 1.1,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "none"
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-abyss flex items-center justify-center overflow-hidden">
      
      {/* Background Slides */}
      <div ref={sliderRef} className="absolute inset-0 z-0 w-full h-full">
        {images.map((src, i) => (
          <div 
            key={i} 
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${currentIndex === i ? 'opacity-100' : 'opacity-0 z-0'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/40 to-abyss/40 z-10 mix-blend-multiply" />
            <img 
              src={src} 
              alt={`Satori Luxury View ${i+1}`} 
              className="slide-img w-full h-full object-cover origin-center brightness-[0.7] sepia-[0.3]" 
            />
          </div>
        ))}
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] z-20 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')"}}></div>
      </div>

      {/* Foreground Content */}
      <div ref={textContainer} className="relative z-30 flex flex-col items-center justify-center pt-24">
        <span className="text-gold tracking-[0.4em] text-xs md:text-sm uppercase mb-6 font-sans">
          The Satori Experience
        </span>
        <h1 className="font-serif text-[10vw] md:text-8xl lg:text-9xl text-champagne text-center leading-[0.85] drop-shadow-2xl">
          A CALM<br />STAY
        </h1>
        <p className="mt-8 text-champagne/80 max-w-lg text-center font-sans tracking-wide text-sm md:text-base leading-relaxed px-4">
          Discover a peaceful Airbnb retreat nestled in the serenity of the Darjeeling mountains. Experience comfort, nature, and the iconic toy train right outside your window.
        </p>
      </div>

    </section>
  );
}
