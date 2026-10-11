import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://freshcutz.com"),
  title: "Fresh Cutz | The Grooming Standard — Bespoke Barber Atelier",
  description:
    "Master the craft. Own your standard. Premium men's haircuts, skin fades, beard architecture, and traditional straight razor shaves. Connect directly with our barbers via Instagram, WhatsApp, and Email.",
  keywords: [
    "Barber",
    "Men's Grooming",
    "Fresh Cutz",
    "Fade Haircut",
    "Beard Sculpting",
    "Hot Towel Shave",
    "Luxury Barbershop",
    "Master Barber",
  ],
  openGraph: {
    title: "Fresh Cutz | The Grooming Standard",
    description:
      "Precision cuts, discipline, and luxury men's grooming. Connect with our barbers directly.",
    images: ["/images/hero_barber.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#080808] text-[#f5f2eb]">
        {children}
      </body>
    </html>
  );
}
