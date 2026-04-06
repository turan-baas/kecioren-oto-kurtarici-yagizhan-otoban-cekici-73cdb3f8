"use client";

import { useScrollReveal } from "./useScrollReveal";

const services = [
  {
    title: "Otoban & Şehir İçi Çekici",
    description:
      "Ankara genelinde ve otoban güzergahlarında 7/24 profesyonel oto çekici hizmeti sunuyoruz. Aracınız nerede kalırsa kalsın, en kısa sürede olay yerine ulaşıyoruz.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.2}>
        <rect x="2" y="22" width="20" height="14" rx="2" />
        <path d="M22 22h10l6 8v6h-16z" />
        <circle cx="10" cy="38" r="3" fill="currentColor" stroke="none" />
        <circle cx="34" cy="38" r="3" fill="currentColor" stroke="none" />
        <path d="M38 36h4a2 2 0 002-2v-2" />
        <path strokeLinecap="round" d="M44 28l-4-6" />
        <path d="M2 22v-6a2 2 0 012-2h6" strokeLinecap="round" />
        <path d="M10 14v-4m0 0l-3 3m3-3l3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Acil Yol Yardım",
    description:
      "Lastik patlaması, akü bitmesi, yakıt bitimi veya kilitlenme gibi acil durumlarda anında yardım. Tecrübeli ekibimiz sizi yolda bırakmaz.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.2}>
        <circle cx="24" cy="24" r="20" />
        <path d="M24 4v8m0 24v8M4 24h8m24 0h8" strokeWidth={2} strokeLinecap="round" />
        <path d="M20 16h8v6h6v8h-6v6h-8v-6h-6v-8h6z" fill="currentColor" stroke="none" opacity={0.15} />
        <path d="M20 16h8v6h6v8h-6v6h-8v-6h-6v-8h6z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Uzun Yol Taşıma",
    description:
      "Şehirlerarası araç taşıma ve transfer hizmeti. Aracınızı istediğiniz şehre güvenle ve hasarsız olarak ulaştırıyoruz. Sigortalı taşımacılık garantisi.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.2}>
        <path d="M6 36h36" strokeLinecap="round" strokeDasharray="2 3" />
        <rect x="8" y="20" width="24" height="14" rx="2" />
        <path d="M32 20h6l4 7v7h-10z" />
        <circle cx="16" cy="36" r="3" fill="currentColor" stroke="none" />
        <circle cx="36" cy="36" r="3" fill="currentColor" stroke="none" />
        <path d="M14 8l10 4-10 4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 12H44" strokeLinecap="round" strokeDasharray="4 3" />
      </svg>
    ),
  },
];

export default function Services() {
  useScrollReveal();

  return (
    <section id="services" className="py-28 lg:py-36 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <p className="text-[var(--color-accent)] text-[0.8rem] uppercase tracking-[0.15em] font-medium mb-4">
            Hizmetler
          </p>
          <h2
            className="text-[2rem] md:text-[2.75rem] font-semibold tracking-[-0.02em] text-[var(--color-text)] leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Profesyonel Çözümlerimiz
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal reveal-delay-${i + 1} group bg-white border border-neutral-200 rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[var(--color-accent)]/30`}
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] mb-6 group-hover:bg-[var(--color-accent)]/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 reveal">
          <p className="text-[var(--color-text-muted)] mb-6">
            Aracınızla ilgili herhangi bir sorununuzda bizi arayın.
          </p>
          <a
            href="tel:+905349637038"
            className="inline-block bg-[var(--color-accent)] text-[var(--color-text)] text-sm uppercase tracking-[0.15em] font-medium px-10 py-4 rounded-full hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
          >
            Bizi Arayın
          </a>
        </div>
      </div>
    </section>
  );
}
