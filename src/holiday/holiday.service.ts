import { Injectable } from "@nestjs/common";
import { createHash } from "crypto";
import ics, { EventAttributes } from "ics";
import { Interval } from "luxon";

import { HolidayRepository } from "./holiday.repository.js";

@Injectable()
export class HolidayService {
  constructor(private holidayRepository: HolidayRepository) {}

  findAll(interval: Interval) {
    const events = interval.splitBy({ year: 1 }).flatMap((interval) => {
      const holidays = this.holidayRepository.findAll(interval.start.year);

      return holidays.map((holiday): EventAttributes => {
        const start = holiday.date;
        const end = start.plus({ day: 1 });
        const hash = createHash("sha1")
          .update(holiday.name + start.toISO())
          .digest("base64");

        return {
          title: holiday.name,
          start: [start.year, start.month, start.day],
          end: [end.year, end.month, end.day],
          productId: "rhnorskov/holidays/en",
          uid: hash + "@rhnorskov.com",
        };
      });
    });

    const { value, error } = ics.createEvents(events);

    if (error) throw error;

    return value;
  }
}
