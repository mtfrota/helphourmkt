import type { Metadata } from "next";
import { Space_Grotesk, Work_Sans } from "next/font/google";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HelpHour | Agência Digital",
  description: "Agência digital completa para negócios locais. Estratégias de marketing, social media e desenvolvimento web.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "HelpHour | Agência Digital",
    description: "Agência digital para negócios locais.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${workSans.variable} ${spaceGrotesk.variable} flex min-h-screen flex-col overflow-x-hidden bg-brand font-sans text-brand antialiased`}
      >
        <Navbar />
        <main id="main-content" className="flex-1 pt-28 sm:pt-32 md:pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
