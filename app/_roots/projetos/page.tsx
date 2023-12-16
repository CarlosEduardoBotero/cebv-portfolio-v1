import Link from "next/link";
import { getHomeHref, router } from "@/app/server/router/router";
import { getDictionary } from "@/app/utils/get-dictionary";
import type { PageProps, RouteLocale } from "next-roots";

export default async function Projects({ pageHref }: PageProps) {
  const lang = router.getLocaleFromHref(pageHref) as RouteLocale;
  const dictionary = await getDictionary(lang);
  const href = getHomeHref(lang);
  console.log({ href });
  return (
    <div>
      <h1 className="text-slate-200 text-4xl">
        {dictionary.home.content.Title} 👷
      </h1>
      <Link className="text-slate-200" href={href}>
        {dictionary.home.nav.home}
      </Link>
    </div>
  );
}
