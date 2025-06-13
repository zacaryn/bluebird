import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bluebird Mortgage | Colorado Springs Mortgage Lender",
  description: "Bluebird Mortgage specializes in VA loans, FHA loans, conventional loans, and more in Colorado Springs. Get expert guidance for your home financing needs.",
  keywords: "mortgage lender, VA loans, FHA loans, conventional loans, Colorado Springs mortgage, home financing, mortgage rates",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
