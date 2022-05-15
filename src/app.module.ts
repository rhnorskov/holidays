import { Module } from "@nestjs/common";

import { HolidayModule } from "./holiday/holiday.module.js";
import { I18nModule } from "./i18n/i18n.module.js";

@Module({
  imports: [I18nModule, HolidayModule],
})
export class AppModule {}
