import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import CursorGlow from "@/components/cursor_glow";
import Navigation from "@/components/navigation";


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
};

export default function RootLayout({ children }) {
  return (
    <html className="h-full scroll-smooth bg-[#0a192f]">
      <body className="min-h-screen">
        <CursorGlow />
        <div className="flex w-[100%] min-h-screen bg-[#0a192f] text-white">
            <aside className="p-5 w-1/3"><Navigation /></aside>
          {/* Right Content Area - Scrollable */}
          <main id="content"
          className="ml-[230px] mb-24 pr-22 mt-24 scroll-smooth max-w-[700px] flex flex-col items-center">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

