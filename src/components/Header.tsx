"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -50,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.5,
    });
  }, []);

  return (
    <header 
      ref={headerRef} 
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 mix-blend-difference text-champagne"
    >
      <div className="flex items-center gap-3">
        {/* We use a tiny bordered logo mark or raw text if logo is awkward. The image logo.jpeg is available */}
        <div className="w-10 h-10 rounded-full overflow-hidden border border-gold/50 flex items-center justify-center">
          <img src="/logo.avif" alt="Satori Logo" className="w-full h-full object-cover grayscale opacity-90" />
        </div>
        <span className="font-serif text-xl tracking-widest uppercase">Satori</span>
      </div>
    </header>
  );
}
