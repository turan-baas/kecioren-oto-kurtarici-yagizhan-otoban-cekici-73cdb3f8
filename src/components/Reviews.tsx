"use client";

import { useScrollReveal } from "./useScrollReveal";

const reviews = [
  {
    text: "Gece yarısı otoban üzerinde aracım bozuldu. Yağızhan Çekici'yi aradım, 20 dakika içinde geldiler. Çok profesyonel ve ilgili bir ekip, kesinlikle tavsiye ederim.",
    name: "Ahmet Yılmaz",
  },
  {
    text: "Keçiören'de kaza sonrası çok zor bir durumdaydım. Hem moral verdiler hem de aracımı güvenle servise ulaştırdılar. Fiyatları da çok makul, teşekkürler.",
    name: "Elif Demir",
  },
  {
    text: "Ankara dışından araç taşıtmam gerekiyordu. Her şey söyledikleri gibi, zamanında ve sorunsuz teslim ettiler. Güvenilir ve dürüst bir firma.",
    name: "Murat Özkan",
  },
];

function Stars({ size = "w-4 h-4" }: { size?: string }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`${size} text-[var(--color-accent)]`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  useScrollReveal();

  return (
    <section id="reviews" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p className="text-[var(--color-accent)] text-[0.8rem] uppercase tracking-[0.15em] font-medium mb-4">
            Yorumlar
          </p>
          <div
            className="text-[6rem] font-bold text-[var(--color-text)] leading-none mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            5
          </div>
          <Stars size="w-7 h-7" />
          <p className="text-[var(--color-text-muted)] mt-4">
            Google üzerinden mükemmel puan
          </p>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl shadow-sm p-8 relative`}
            >
              {/* Decorative quote */}
              <svg
                className="absolute top-6 right-6 w-10 h-10 text-[var(--color-accent)] opacity-20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
              </svg>
              <p className="italic text-[var(--color-text)] leading-relaxed mb-6">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[var(--color-text)] text-sm">
                    {review.name}
                  </p>
                  <p className="text-[var(--color-text-muted)] text-xs">
                    Google Yorumu
                  </p>
                </div>
                <Stars size="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
