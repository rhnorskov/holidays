import { Module } from "@nestjs/common";

import { HealthModule } from "./health/health.module.js";
import { HolidayModule } from "./holiday/holiday.module.js";
import { I18nModule } from "./i18n/i18n.module.js";

@Module({
  imports: [I18nModule, HealthModule, HolidayModule],
})
export class AppModule {}
