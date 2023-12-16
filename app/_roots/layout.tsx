import { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { getDictionary } from "../utils/get-dictionary";
import { router } from "../server/router/router";
import type { PropsWithChildren } from "react";
import type { GenerateLayoutMetadataProps, RouteLocale } from "next-roots";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = PropsWithChildren<{ locale: RouteLocale }>;

export async function generateMetadata({
  locale,
}: GenerateLayoutMetadataProps): Promise<Metadata> {
  const lang = router.getLocaleFromHref(locale) as RouteLocale;
  const dictionaty = await getDictionary(lang);
  return {
    title: dictionaty.home.matadata.title,
    description: dictionaty.home.matadata.description,
    keywords: ["react", "portfolio"],
  };
}

export default function RootLayout({ children, locale }: RootLayoutProps) {
  return (
    <html lang={locale} className="">
      <body className={`bg-slate-800 ${inter.className}`}>{children}</body>
    </html>
  );
}
