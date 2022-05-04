import { Module } from "@nestjs/common";

import { HolidayController } from "./holiday.controller.js";
import { HolidayRepository } from "./holiday.repository.js";
import { HolidayService } from "./holiday.service.js";

@Module({
  controllers: [HolidayController],
  providers: [HolidayRepository, HolidayService],
})
export class HolidayModule {}
