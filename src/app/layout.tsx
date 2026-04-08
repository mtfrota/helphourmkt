import "./globals.css";
import type { Metadata } from "next";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

export const metadata: Metadata = {
  title: "Help Hour MKT | Agencia Digital",
  description: "Agencia digital para negocios locais.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen flex-col bg-brand text-brand antialiased">
        <Navbar />
        <main className="flex-1 pt-36 md:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
