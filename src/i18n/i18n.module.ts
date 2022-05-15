import { join } from "node:path";

import { Module } from "@nestjs/common";
import { use } from "i18next";
import Backend from "i18next-fs-backend";

const locales = new URL("../../locales", import.meta.url).pathname;

@Module({})
export class I18nModule {
  constructor() {
    use(Backend).init({
      fallbackLng: "en",
      preload: ["en", "da"],
      backend: {
        addPath: join(locales, "/{{lng}}/{{ns}}.missing.json"),
        loadPath: join(locales, "/{{lng}}/{{ns}}.json"),
      },
    });
  }
}
