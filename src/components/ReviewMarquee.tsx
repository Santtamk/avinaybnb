"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const reviews = [
  "“The perfect calm stay in Darjeeling.” – Sarah",
  "“Waking up to the toy train was magical.” – Michael",
  "“A mindful retreat that truly resets your soul.” – Emma",
  "“Incredible ambiance combined with a homely feel.” – Rohan"
];

export default function ReviewMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = scrollRef.current;
    if (!track) return;
    
    const ctx = gsap.context(() => {
      gsap.to(track, {
        xPercent: -50,
        ease: "none",
        duration: 30,
        repeat: -1,
      });
    }, scrollRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-champagne text-abyss overflow-hidden py-4 md:py-6 relative z-20">
      <div 
        ref={scrollRef} 
        className="flex w-max whitespace-nowrap font-sans tracking-[0.2em] text-xs md:text-sm uppercase font-semibold"
      >
        {/* Render twice for a seamless infinite loop */}
        <div className="flex px-8 gap-8 items-center">
          {reviews.map((rev, i) => (
             <span key={`a-${i}`} className="flex items-center gap-8">
               {rev} 
               <span className="text-gold">✦</span>
             </span>
          ))}
        </div>
        <div className="flex px-8 gap-8 items-center">
          {reviews.map((rev, i) => (
             <span key={`b-${i}`} className="flex items-center gap-8">
               {rev} 
               <span className="text-gold">✦</span>
             </span>
          ))}
        </div>
      </div>
    </div>
  );
}
