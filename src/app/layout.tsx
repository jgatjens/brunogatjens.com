import type { Metadata } from "next";
import { Bricolage_Grotesque, Fira_Code } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", display: "swap" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Bruno Gätjens — UX/UI Designer / Illustrator", template: "%s | Bruno Gätjens" },
  description: "Portfolio of Bruno Gätjens, UX/UI Designer and Illustrator.",
  icons: {
    icon: { url: "/icon.png", type: "image/png", sizes: "64x64" },
    shortcut: "/icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${firaCode.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:p-4">Skip to content</a>
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
