import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { companyInfo } from "@/lib/data/company-info";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${companyInfo.tagline}`,
  description: companyInfo.description,
  keywords:
    "logistics, cargo transportation, warehousing, freight, shipping, supply chain",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://dpnexlogistic.com/storage/others/favicon.ico"
        ></link>
        <link
          rel="apple-touch-icon"
          href="https://dpnexlogistic.com/storage/others/dpnex-57.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="https://dpnexlogistic.com/storage/others/dpnex-72.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="https://dpnexlogistic.com/storage/others/dpnex-114.png"
        ></link>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="48x48" />
      </head>
      <body className={inter.className}>
        <ScrollProgress />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
