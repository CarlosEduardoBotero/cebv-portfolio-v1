import type { PropsWithChildren } from "react";
import type { RouteLocale } from "next-roots";

export type RootLayoutProps = PropsWithChildren<{
  locale: RouteLocale;
  params: any;
}>;
