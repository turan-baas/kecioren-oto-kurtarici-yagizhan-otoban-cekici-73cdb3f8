"use client";

import { useScrollReveal } from "./useScrollReveal";

export default function Contact() {
  useScrollReveal();

  return (
    <section id="contact" className="py-28 lg:py-36 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Contact info + form */}
          <div className="reveal">
            <p className="text-[var(--color-accent)] text-[0.8rem] uppercase tracking-[0.15em] font-medium mb-4">
              İletişim
            </p>
            <h2
              className="text-[2rem] md:text-[2.75rem] font-semibold tracking-[-0.02em] text-[var(--color-text)] mb-8 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Bize Ulaşın
            </h2>

            {/* Info items */}
            <div className="space-y-6 mb-12">
              {/* Phone */}
              <a
                href="tel:+905349637038"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center group-hover:bg-[var(--color-accent)]/20 transition-colors">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">Telefon</p>
                  <p className="font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                    0534 963 70 38
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">Adres</p>
                  <p className="font-medium text-[var(--color-text)]">
                    İvedikköy, 1492. Sk No13/C No 49, 06374 Yenimahalle/Ankara
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div>
                <input
                  type="text"
                  placeholder="Adınız Soyadınız"
                  className="w-full px-5 py-3.5 rounded-xl border border-neutral-200 bg-white text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 focus:border-[var(--color-accent)] transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-posta Adresiniz"
                  className="w-full px-5 py-3.5 rounded-xl border border-neutral-200 bg-white text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 focus:border-[var(--color-accent)] transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder="Mesajınız"
                  rows={4}
                  className="w-full px-5 py-3.5 rounded-xl border border-neutral-200 bg-white text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 focus:border-[var(--color-accent)] transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[var(--color-accent)] text-[var(--color-text)] text-sm uppercase tracking-[0.15em] font-medium px-10 py-4 rounded-full hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
              >
                Mesaj Gönder
              </button>
            </form>
          </div>

          {/* Right — Google Maps embed */}
          <div className="reveal reveal-delay-1">
            <div className="relative rounded-2xl overflow-hidden h-full min-h-[450px] border-2 border-[var(--color-accent)]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.5!2d32.82!3d39.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU4JzEyLjAiTiAzMsKwNDknMTIuMCJF!5e0!3m2!1str!2str!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Keçiören Oto Kurtarıcı Yağızhan Otoban Çekici - Konum"
              />
              {/* Bottom info bar overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-10">
                <p className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                  Keçiören Oto Kurtarıcı Yağızhan Otoban Çekici
                </p>
                <p className="text-white/60 text-xs mt-1">
                  İvedikköy, 1492. Sk No13/C No 49, 06374 Yenimahalle/Ankara
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=İvedikköy+1492+Sk+No13+Yenimahalle+Ankara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-[var(--color-accent)] text-sm font-medium hover:underline"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  Google Maps&apos;te Aç
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
