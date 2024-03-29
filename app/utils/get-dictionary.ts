import "server-only";
import type { RouteLocale } from "next-roots";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  "en-US": () =>
    import("../dictionaries/en-US.json").then((module) => module.default),
  "es-VE": () =>
    import("../dictionaries/es-VE.json").then((module) => module.default),
  "pt-BR": () =>
    import("../dictionaries/pt-BR.json").then((module) => module.default),
};

export const getDictionary = async (locale: RouteLocale) =>
  dictionaries[locale]?.() ?? dictionaries["en-US"]();
