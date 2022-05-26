import { Controller, Get, StreamableFile } from "@nestjs/common";
import { DateTime, Interval } from "luxon";

import { HolidayService } from "./holiday.service.js";

@Controller("")
export class HolidayController {
  constructor(private readonly holidayService: HolidayService) {}

  @Get("en")
  async english() {
    const interval = Interval.fromDateTimes(
      DateTime.now().minus({ years: 5 }).startOf("year"),
      DateTime.now().plus({ years: 5 }).endOf("year")
    );

    const ics = await this.holidayService.generateIcs(interval, "en");

    return new StreamableFile(Buffer.from(ics, "utf-8"), {
      type: "text/calendar",
    });
  }

  @Get("da")
  async danish() {
    const interval = Interval.fromDateTimes(
      DateTime.now().minus({ years: 5 }).startOf("year"),
      DateTime.now().plus({ years: 5 }).endOf("year")
    );

    const ics = await this.holidayService.generateIcs(interval, "da");

    return new StreamableFile(Buffer.from(ics, "utf-8"), {
      type: "text/calendar",
    });
  }

  @Get("health")
  async health() {
    return null;
  }
}
