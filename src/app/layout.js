import "./globals.css";
import { Inter } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import CursorGlow from "@/components/cursor_glow";
import Navigation from "@/components/navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Almee Christian",
  description: "Almee Christian's Portfolio",
  icons: {
    icon: '/my-portfolio/favicon.ico',
    shortcut: '/my-portfolio/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html className={`h-full scroll-smooth bg-[#0a192f] ${inter.variable} font-sans`}>
      <body className="leading-relaxed">
        <CursorGlow />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4 flex flex-col lg:flex-row text-white">
              <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24"><Navigation /></header>
            {/* Right Content Area - Scrollable */}
            <main id="content"
            className="pt-24 lg:py-24 scroll-smooth lg:w-[52%] flex flex-col items-center">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}