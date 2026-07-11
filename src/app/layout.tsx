import type { Metadata } from "next";
import { Crimson_Text } from "next/font/google";
import "./globals.css";

const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
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
    <html lang="en" className={`${crimsonText.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#f1e9e4] font-[family-name:var(--font-crimson)]">
        {children}
      </body>
    </html>
  );
}
