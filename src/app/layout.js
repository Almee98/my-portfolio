import "./globals.css";
import { Inter } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import CursorGlow from "@/components/cursor_glow";
import LayoutWrapper from "@/components/layout-wrapper";

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
  verification: {
    google: "kWoD4SSAwRq80UQVJfdOByzzcfIItU7MBYmIAdpWgKk",
  },
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
        <LayoutWrapper>
              {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}