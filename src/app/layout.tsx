import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import PinriseBanner from '@/components/PinriseBanner';

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keçiören Oto Kurtarıcı Yağızhan Otoban Çekici | 7/24 Oto Çekici Hizmeti",
  description:
    "Ankara Keçiören ve çevresinde 7/24 profesyonel oto kurtarma, yol yardım ve otoban çekici hizmeti. Hızlı, güvenilir ve uygun fiyatlı.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}        <PinriseBanner />
              
{/* Pinrise Sales Banner */}
<script src="https://portal.pinrise.io/api/portal/banner.js?id=73cdb3f8-544b-41e6-bc9f-81da5f4b8975" defer></script>
      </body>
    </html>
  );
}
