export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Yağızhan <span className="text-[var(--color-accent)]">Çekici</span>
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Ankara Keçiören ve çevresinde 7/24 profesyonel oto kurtarma ve çekici hizmeti.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-white/30 font-medium mb-4">
              Hızlı Bağlantılar
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "#hero", label: "Ana Sayfa" },
                { href: "#about", label: "Hakkımızda" },
                { href: "#services", label: "Hizmetler" },
                { href: "#reviews", label: "Yorumlar" },
                { href: "#contact", label: "İletişim" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/50 hover:text-[var(--color-accent)] transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-white/30 font-medium mb-4">
              İletişim
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+905349637038"
                className="flex items-center gap-2 text-white/50 hover:text-[var(--color-accent)] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                0534 963 70 38
              </a>
              <div className="flex items-start gap-2 text-white/50">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                İvedikköy, 1492. Sk No13/C No 49, 06374 Yenimahalle/Ankara
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; 2026 Keçiören Oto Kurtarıcı Yağızhan Otoban Çekici. Tüm hakları saklıdır.
          </p>
          <p className="text-white/20 text-xs">
            7/24 Oto Kurtarma Hizmeti
          </p>
        </div>
      </div>
    </footer>
  );
}
