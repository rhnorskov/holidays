import { Temporal } from "@js-temporal/polyfill";
import { Controller, Get, StreamableFile } from "@nestjs/common";
import { startOfYear, endOfYear, Interval } from "temporal-fns";

import { HolidayService } from "./holiday.service.js";

@Controller("")
export class HolidayController {
  constructor(private readonly holidayService: HolidayService) {}

  @Get("en")
  async english() {
    const interval: Interval = {
      start: startOfYear(Temporal.Now.plainDateISO().subtract({ years: 5 })),
      end: endOfYear(Temporal.Now.plainDateISO().add({ years: 5 })),
    };

    const ics = await this.holidayService.generateIcs(interval, "en");

    return new StreamableFile(Buffer.from(ics, "utf-8"), {
      type: "text/calendar",
    });
  }

  @Get("da")
  async danish() {
    const interval: Interval = {
      start: startOfYear(Temporal.Now.plainDateISO().subtract({ years: 5 })),
      end: endOfYear(Temporal.Now.plainDateISO().add({ years: 5 })),
    };

    const ics = await this.holidayService.generateIcs(interval, "da");

    return new StreamableFile(Buffer.from(ics, "utf-8"), {
      type: "text/calendar",
    });
  }
}
