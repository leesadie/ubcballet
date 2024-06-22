import type { Metadata } from "next";
import { font_reg } from "./fonts";
import { font_light } from "./fonts";
import { font_med } from "./fonts";
import { font_bold } from "./fonts";
import "./globals.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/navbar/Footer";

export const metadata: Metadata = {
  title: "UBC Ballet Club",
  description: "UBC Ballet Club Web 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font_reg.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
