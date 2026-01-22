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
  metadataBase: new URL("https://almeechristian.site"),
  title: {
    default: "Almee Christian | Software Engineer",
    template: "%s | Almee Christian",
  },
  description: "Almee Christian is a software engineer building reliable, user-focused applications and contributing to open-source projects.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://almeechristian.site/",
    title: "Almee Christian | Software Engineer",
    description:
      "Personal website of Almee Christian, software engineer focused on full-stack development and open-source contributions.",
    siteName: "Almee Christian",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Almee Christian | Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Almee Christian | Software Engineer",
    description:
      "Personal website of Almee Christian, software engineer focused on full-stack development and open-source contributions.",
    images: ["/og.png"],
  },
  verification: {
    google: "gW2DAGQi1xmki_Ua5UwBw1g1wkJ9B_c5v0ff1GEiQig",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
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
              url: "https://almeechristian.site/",
              jobTitle: "Software Engineer",
              sameAs: [
                "https://github.com/Almee98",
                "https://www.linkedin.com/in/almee-christian-m/"
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
