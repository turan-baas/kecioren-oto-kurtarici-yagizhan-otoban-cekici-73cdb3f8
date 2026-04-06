"use client";

import { useScrollReveal } from "./useScrollReveal";

export default function About() {
  useScrollReveal();

  return (
    <section id="about" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Text — 3 cols */}
          <div className="lg:col-span-3 reveal">
            <p className="text-[var(--color-accent)] text-[0.8rem] uppercase tracking-[0.15em] font-medium mb-4">
              Hakkımızda
            </p>
            <h2
              className="text-[2rem] md:text-[2.75rem] font-semibold tracking-[-0.02em] text-[var(--color-text)] mb-8 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ankara Keçiören&apos;in Güvenilir
              <br />
              Oto Kurtarma Uzmanı
            </h2>
            <div className="space-y-6 text-[var(--color-text-muted)] text-[1.125rem] leading-[1.8]">
              <p>
                İvedikköy&apos;deki merkezimizden Ankara&apos;nın dört bir yanına hizmet
                veriyoruz. Yıllardır bu mesleği tutkuyla sürdürüyor, her aracı kendi
                aracımız gibi özenle taşıyoruz. Keçiören&apos;de yaşayan herkes bilir;
                Yağızhan Çekici dediğinizde güven ve hız akla gelir.
              </p>
              <p>
                Otoban arızalarından şehir içi kaza çekimlerine, uzun yol
                transferlerinden acil yol yardımına kadar geniş bir yelpazede
                profesyonel çözümler sunuyoruz. Modern araç filomuz ve deneyimli
                ekibimizle 7 gün 24 saat hizmetinizdeyiz.
              </p>
              <p>
                Müşteri memnuniyeti bizim için her şeyden önemli. Her çağrıya en kısa
                sürede ulaşmayı, her aracı güvenle teslim etmeyi kendimize ilke
                edindik. Ankara&apos;da oto kurtarma denince akla gelen ilk isim olmaktan
                gurur duyuyoruz.
              </p>
            </div>
          </div>

          {/* Decorative — 2 cols */}
          <div className="lg:col-span-2 reveal reveal-delay-1">
            <div className="relative flex items-center justify-center min-h-[350px]">
              {/* Abstract shapes */}
              <div className="absolute w-64 h-64 rounded-full bg-[var(--color-accent)]/10 -top-4 -right-4" />
              <div className="absolute w-48 h-48 rounded-full border-2 border-[var(--color-accent)]/20 top-8 left-4" />
              <div className="absolute w-32 h-32 bg-[var(--color-surface)] rounded-2xl rotate-12 bottom-8 right-8" />

              {/* Rating card */}
              <div className="relative bg-white rounded-3xl shadow-xl p-10 text-center z-10">
                <div
                  className="text-[5rem] font-bold text-[var(--color-text)] leading-none mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  5.0
                </div>
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-[var(--color-accent)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[var(--color-text-muted)] text-sm">
                  Google Değerlendirmesi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
