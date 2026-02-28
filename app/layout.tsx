import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "Serenique Spa - Elevate your well-being with luxury spa.",
  description: "Award-winning spa experience blending traditional healing with modern techniques.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${instrumentSerif.variable} font-sans antialiased bg-[#FAF8F5] text-[#2F2C24] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
