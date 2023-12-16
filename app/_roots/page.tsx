import Image from "next/image";
import { getDictionary } from "../utils/get-dictionary";
import type { RouteLocale } from "next-roots";
import type { PageProps } from "next-roots";
import Link from "next/link";
import { getProjectsHref, router } from "../server/router/router";

export default async function Home({ pageHref }: PageProps) {
  const lang = router.getLocaleFromHref(pageHref) as RouteLocale;
  const dictionary = await getDictionary(lang);
  const href = getProjectsHref(lang);
  console.log("se reinicia");
  console.count("counte");
  return (
    <main className="">
      <h1 className="text-slate-200 text-4xl">
        {dictionary.home.content.Title} 👷
      </h1>
      <Link className="text-slate-200" href={href}>
        {dictionary.home.nav.projects}
      </Link>
    </main>
  );
}
