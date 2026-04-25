import HeroSection from "@/components/HeroSection";
import ReviewMarquee from "@/components/ReviewMarquee";
import StaggeredGallery from "@/components/StaggeredGallery";
import PortfolioGrid from "@/components/PortfolioGrid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full bg-abyss">
      <HeroSection />

      <div className="relative w-full z-10 bg-abyss border-t border-gold/10">
        <StaggeredGallery />
        <PortfolioGrid />
      </div>

      <ReviewMarquee />

      <footer className="w-full bg-abyss-light text-champagne py-24 px-6 flex flex-col items-center justify-center text-center">
        <span className="text-gold tracking-[0.4em] text-xs uppercase mb-4 block font-sans">
          Reach Out
        </span>
        <h2 className="font-serif text-5xl md:text-[6vw] leading-none mb-12 uppercase tracking-tighter hover:text-gold transition-colors duration-500 cursor-pointer">
          <a
            href="https://wa.me/918617586316"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reserve Your Stay
          </a>
        </h2>
        <div className="w-full max-w-lg border-t border-stone/30 pt-8 flex justify-between uppercase font-sans text-xs tracking-widest text-stone">
          <span>&copy; 2026 Satori Stay</span>
          <span>Darjeeling, India</span>
        </div>
      </footer>
    </main>
  );
}
