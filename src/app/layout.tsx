import type { Metadata } from "next";
import { Orbitron, Press_Start_2P } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Vice Cuts — Barber Miami Vice",
  description:
    "Barbershop w klimacie Miami Vice. Strzyżenie, broda, styl. Wkrótce rezerwacja online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${orbitron.variable} ${pressStart.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
