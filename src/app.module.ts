import { Module } from "@nestjs/common";

import { HolidayModule } from "./holiday/holiday.module.js";

@Module({
  imports: [HolidayModule],
})
export class AppModule {}
