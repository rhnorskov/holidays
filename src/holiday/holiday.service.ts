import { createHash } from "crypto";

import { Injectable } from "@nestjs/common";
import { t } from "i18next";
import { createEvents, EventAttributes } from "ics";
import { Interval } from "luxon";

import { HolidayRepository } from "./holiday.repository.js";

@Injectable()
export class HolidayService {
  constructor(private holidayRepository: HolidayRepository) {}

  async findAll(interval: Interval) {
    const holidays = await Promise.all(
      interval.splitBy({ year: 1 }).map((interval) => {
        return this.holidayRepository.findAll(interval.start.year);
      })
    );

    return holidays.flat();
  }

  async generateIcs(interval: Interval, language?: string) {
    const holidays = await this.findAll(interval);

    const events = holidays.map((holiday): EventAttributes => {
      const start = holiday.date;
      const end = start.plus({ day: 1 });
      const hash = createHash("sha1")
        .update(`holiday.${holiday.key}` + start.toISO())
        .digest("base64");

      return {
        title: t(`holiday.${holiday.key}`, { lng: language }),
        start: [start.year, start.month, start.day],
        end: [end.year, end.month, end.day],
        productId: `com.rhnorskov.holidays.${language}`,
        uid: hash + "@rhnorskov.com",
      };
    });

    const { value, error } = createEvents(events);

    if (!value || error) throw error;

    return value;
  }
}
