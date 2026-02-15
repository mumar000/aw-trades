import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const clashGrotesk = localFont({
  src: "../public/clash-grotest/Fonts/WEB/fonts/ClashGrotesk-Variable.woff2",
  variable: "--font-clash",
  display: "swap",
  weight: "200 700",
});

export const metadata: Metadata = {
  title: "AW Trades",
  description: "Financial futures trading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${clashGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
