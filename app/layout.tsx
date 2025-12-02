import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Veya projedeki font neyse
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fullpage Banner Design",
  description: "Design Studio & Code Lab Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}