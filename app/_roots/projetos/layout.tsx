import { router } from "@/app/server/router/router";
import { getDictionary } from "@/app/utils/get-dictionary";
import type { Metadata } from "next";
import type { GenerateLayoutMetadataProps, RouteLocale } from "next-roots";
import { PropsWithChildren } from "react";

type RootLayoutProps = PropsWithChildren<{ locale: RouteLocale }>;

export async function generateMetadata({
  locale,
}: GenerateLayoutMetadataProps): Promise<Metadata> {
  const lang = router.getLocaleFromHref(locale) as RouteLocale;
  console.log("en layout interno");
  const dictionaty = await getDictionary(lang);
  return {
    title: "test",
    description: "test 2",
  };
}

export default function ProjectsLayout({ children, locale }: RootLayoutProps) {
  return <div>{children}</div>;
}
