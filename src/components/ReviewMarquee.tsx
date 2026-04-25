"use client";

type GuestReview = {
  name: string;
  date: string;
  rating: number;
  text: string;
};

const reviews: GuestReview[] = [
  {
    name: "Prosenjit",
    date: "January 2026",
    rating: 5,
    text: "Avinay is a superhost, always available for help and arranged local sightseeing cabs. We felt totally comfortable, like it was our own home.",
  },
  {
    name: "Komal",
    date: "December 2025",
    rating: 5,
    text: "Warm and cozy stay. The host was just a call away for even minor issues. Great location with mall road and local markets accessible.",
  },
  {
    name: "Shreya",
    date: "April 2026",
    rating: 5,
    text: "The host went above and beyond with cabs and sightseeing guidance. It made our Darjeeling trip smooth, enjoyable, and memorable.",
  },
  {
    name: "Kritika",
    date: "March 2026",
    rating: 5,
    text: "Exceptional hospitality from start to finish. Avinay helped with travel, bags, cabs, and food recommendations. Highly recommended.",
  },
  {
    name: "Ataryah",
    date: "December 2025",
    rating: 5,
    text: "Spacious and clean 4BHK on the main road. Genuine care, incredible support, and beautiful views made this stay truly special.",
  },
  {
    name: "Harshul",
    date: "January 2026",
    rating: 5,
    text: "One of the best hosts I have met. Very responsive and supportive whenever needed. Tourist spots were conveniently reachable.",
  },
  {
    name: "Shivam",
    date: "January 2026",
    rating: 5,
    text: "Great hospitality. Avinay received us personally, helped with luggage, arranged taxis and bike rental, and made everything hassle-free.",
  },
  {
    name: "Sibendu",
    date: "September 2025",
    rating: 5,
    text: "Clean, pretty property and very helpful host. The kitchen and dining area were perfect for group hangouts.",
  },
  {
    name: "Sourav",
    date: "February 2025",
    rating: 5,
    text: "Close to mall road with great communication and food options nearby. The toy train view from the balcony was a highlight.",
  },
  {
    name: "Vibhanshu",
    date: "November 2025",
    rating: 4,
    text: "Very responsive host with heartfelt support from the family. Great hosting experience overall.",
  },
  {
    name: "Varughese",
    date: "January 2026",
    rating: 4,
    text: "Pleasant group stay with kind, responsive assistance whenever needed. Comfortable option in a quieter part of Darjeeling.",
  },
  {
    name: "Kushal",
    date: "December 2025",
    rating: 3,
    text: "Some property issues were there, but Avinay responded quickly and was proactive with help and local taxi arrangements.",
  },
];

function ReviewCard({ review }: { review: GuestReview }) {
  return (
    <article className="group flex h-full min-w-[85vw] max-w-[85vw] snap-center flex-col rounded-2xl border border-gold/20 bg-abyss-light/80 p-5 backdrop-blur-sm md:min-w-[26rem] md:max-w-[26rem] md:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-gold">{review.name}</p>
          <p className="font-sans text-xs text-stone">{review.date}</p>
        </div>
        <p className="font-sans text-sm text-champagne">{"★".repeat(review.rating)}<span className="text-stone">{"☆".repeat(5 - review.rating)}</span></p>
      </div>
      <p className="font-sans text-sm leading-relaxed text-champagne/90 md:text-[0.95rem]">{review.text}</p>
    </article>
  );
}

export default function ReviewMarquee() {
  return (
    <section className="relative z-20 w-full overflow-hidden border-t border-gold/10 bg-abyss py-16 md:py-20">
      <div className="mx-auto mb-8 flex w-full max-w-screen-xl flex-col items-start px-6 md:mb-10 md:px-12">
        <span className="mb-3 font-sans text-xs uppercase tracking-[0.35em] text-gold">Guest Love</span>
        <h2 className="font-serif text-3xl uppercase leading-none text-champagne md:text-5xl">Real Reviews, Real Stays</h2>
        <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-stone md:text-base">
          Trusted by families, couples, and groups visiting Darjeeling. Swipe on mobile or enjoy a smooth flowing wall of guest stories on larger screens.
        </p>
      </div>

      <div className="px-6 md:hidden">
        <div className="reviews-mobile-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pt-1">
          {reviews.map((review, index) => (
            <ReviewCard key={`mobile-${review.name}-${index}`} review={review} />
          ))}
        </div>
      </div>

      <div className="hidden overflow-hidden md:block">
        <div className="reviews-desktop-track flex w-max gap-6 px-12 py-1">
          {[...reviews, ...reviews].map((review, index) => (
            <ReviewCard key={`desktop-${review.name}-${index}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
