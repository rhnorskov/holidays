import { Controller, Get, Param, StreamableFile } from "@nestjs/common";
import { DateTime, Interval } from "luxon";

import { HolidayService } from "./holiday.service.js";
import { HolidaysParams } from "./holiday.types.js";

@Controller("holidays")
export class HolidayController {
  constructor(private readonly holidayService: HolidayService) {}

  @Get(":language?")
  async holidays(@Param() { language }: HolidaysParams) {
    const interval = Interval.fromDateTimes(
      DateTime.now().minus({ years: 5 }).startOf("year"),
      DateTime.now().plus({ years: 5 }).endOf("year")
    );

    const ics = await this.holidayService.generateIcs(interval, language);

    return new StreamableFile(Buffer.from(ics, "utf-8"), {
      type: "text/calendar",
    });
  }
}
