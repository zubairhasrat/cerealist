import type { Metadata } from "next";
import { Crimson_Text, Inter } from "next/font/google";
import "./globals.css";

const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Inter is used exclusively for the Nutrition Facts heading
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Cerealist — Cereal, Grown Up.",
  description:
    "A monthly cereal for people who grew up, but never stopped liking cereal. The Morning Paper, Now on Cereal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${crimsonText.variable} ${inter.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-paper font-[family-name:var(--font-crimson)] px-6"
      >
        {children}
      </body>
    </html>
  );
}
