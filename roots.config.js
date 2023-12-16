const path = require("path");

module.exports = {
  originDir: path.resolve(__dirname, "app/_roots"),
  localizedDir: path.resolve(__dirname, "app/(routes)"),
  locales: ["pt-BR", "en-US", "es-VE"],
  defaultLocale: "pt-BR",
  prefixDefaultLocale: false, // serves "pt-BR" locale on / instead of /pt-BR
};
