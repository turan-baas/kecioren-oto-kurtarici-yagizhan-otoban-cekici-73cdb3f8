"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#1a1a1a]">
        {/* Gradient mesh */}
        <div
          className="absolute inset-0 animate-gradient"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(232,168,56,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(232,168,56,0.1) 0%, transparent 40%), radial-gradient(ellipse at 50% 80%, rgba(45,45,45,0.8) 0%, transparent 60%)",
            backgroundSize: "200% 200%",
          }}
        />
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        {/* Floating geometric shapes */}
        <div className="absolute top-[15%] right-[15%] w-72 h-72 border border-[var(--color-accent)]/20 rounded-full animate-float" />
        <div className="absolute bottom-[20%] left-[10%] w-48 h-48 border border-[var(--color-accent)]/15 rotate-45 animate-float-reverse" />
        <div className="absolute top-[40%] left-[25%] w-24 h-24 bg-[var(--color-accent)]/5 rounded-full animate-float" />
        <div className="absolute bottom-[30%] right-[25%] w-36 h-36 border border-white/5 rounded-full animate-float-reverse" />
        {/* Diagonal accent line */}
        <div
          className="absolute top-0 right-[30%] w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--color-accent)]/20 to-transparent"
          style={{ transform: "rotate(15deg)", transformOrigin: "top center" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-[var(--color-accent)] text-[0.8rem] uppercase tracking-[0.2em] font-medium mb-6">
          7/24 Profesyonel Hizmet
        </p>
        <h1
          className="text-[2.75rem] md:text-[4rem] lg:text-[5rem] font-bold text-white leading-[1.05] tracking-[-0.03em] mb-8"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Keçiören Oto Kurtarıcı
          <br />
          <span className="text-[var(--color-accent)]">Yağızhan</span> Otoban Çekici
        </h1>
        <p className="text-gray-300 text-xl md:text-2xl font-light max-w-xl mx-auto mb-12 leading-relaxed">
          Ankara ve çevresinde güvenilir, hızlı ve profesyonel oto kurtarma hizmeti.
          Aracınız yolda kaldığında yanınızdayız.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+905349637038"
            className="bg-[var(--color-accent)] text-[var(--color-text)] text-sm uppercase tracking-[0.15em] font-medium px-10 py-4 rounded-full hover:scale-[1.03] hover:shadow-2xl hover:brightness-110 transition-all duration-300"
          >
            Hemen Ara
          </a>
          <a
            href="#services"
            className="border border-white/20 text-white text-sm uppercase tracking-[0.15em] font-medium px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Hizmetlerimiz
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
    </section>
  );
}
