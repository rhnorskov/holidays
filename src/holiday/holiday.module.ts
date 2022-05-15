import { Module } from "@nestjs/common";

import { I18nModule } from "../i18n/i18n.module.js";
import { HolidayController } from "./holiday.controller.js";
import { HolidayRepository } from "./holiday.repository.js";
import { HolidayService } from "./holiday.service.js";

@Module({
  imports: [I18nModule],
  controllers: [HolidayController],
  providers: [HolidayRepository, HolidayService],
})
export class HolidayModule {}
