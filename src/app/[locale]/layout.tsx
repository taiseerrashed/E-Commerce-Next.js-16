import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { getLocale } from "next-intl/server";
import { Roboto } from "next/font/google";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import { Suspense } from "react";
import Loading from "./loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ShopMart",
  description:
    "An e-commerce website for ShopMart, a fashion brand specializing in high-end clothing and accessories. Explore our collection of stylish and luxurious products, designed to elevate your wardrobe and make a statement. Shop now and experience the epitome of fashion with Maison Valvet Cartel.",
};

export default async function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${inter.variable} ${inter.className} h-full antialiased`}
    >
      <body>
        <NextIntlClientProvider>
          <ReactQueryProvider>
            <Header />
            <main className="mt-30 pb-18 container px-2 space-y-14">
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </main>
            <Footer />
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
