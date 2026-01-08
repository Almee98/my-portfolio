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
  title: {
    default: "Almee Christian | Software Engineer",
    template: "%s | Almee Christian",
  },
  description: "Almee Christian is a software engineer building reliable, user-focused applications and contributing to open-source projects.",
  openGraph: {
    type: "website",
    url: "https://almee98.github.io/my-portfolio/",
    title: "Almee Christian | Software Engineer",
    description:
      "Personal website of Almee Christian, software engineer focused on full-stack development and open-source contributions.",
    siteName: "Almee Christian",
  },
  verification: {
    google: "gW2DAGQi1xmki_Ua5UwBw1g1wkJ9B_c5v0ff1GEiQig",
  },
  icons: {
    icon: '/my-portfolio/favicon.ico',
    shortcut: '/my-portfolio/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html className={`h-full scroll-smooth bg-[#0a192f] ${inter.variable} font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Almee Christian",
              url: "https://almee98.github.io/my-portfolio/",
              jobTitle: "Software Engineer",
              sameAs: [
                "https://github.com/Almee98",
                "https://www.linkedin.com/in/your-linkedin-username/"
              ]
            })
          }}
        />
      </head>
      <body className="leading-relaxed">
        <CursorGlow />
        <LayoutWrapper>
              {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}