import { Temporal } from "@js-temporal/polyfill";
import { Injectable } from "@nestjs/common";
import { computus } from "computus";
import { endOfWeek, parseJsDate } from "temporal-fns";

import { HolidayEntity } from "./holiday.entity.js";

@Injectable()
export class HolidayRepository {
  async findAll(year: number): Promise<HolidayEntity[]> {
    const date = Temporal.PlainDate.from({ year, month: 1, day: 1 });
    const easter = parseJsDate(computus(date.year));

    return [
      {
        key: "new.years.day",
        date: date.with({ month: 1, day: 1 }),
      },
      {
        key: "valentines.day",
        date: date.with({ month: 2, day: 14 }),
      },
      {
        key: "carnival",
        date: easter.subtract({ weeks: 7 }),
      },
      {
        key: "daylight.saving.time.starts",
        date: endOfWeek(date.with({ month: 3 })).add({ weeks: 3 }),
      },
      {
        key: "palm.sunday",
        date: easter.subtract({ weeks: 1 }),
      },
      {
        key: "maundy.thursday",
        date: easter.subtract({ days: 3 }),
      },
      {
        key: "good.friday",
        date: easter.subtract({ days: 2 }),
      },
      {
        key: "easter.sunday",
        date: easter,
      },
      {
        key: "easter.monday",
        date: easter.add({ days: 1 }),
      },
      {
        key: "international.workers.day",
        date: date.with({ month: 5, day: 1 }),
      },
      {
        key: "liberation.day",
        date: date.with({ month: 5, day: 5 }),
      },
      {
        key: "mothers.day",
        date: endOfWeek(date.with({ month: 5 })).add({ weeks: 1 }),
      },
      {
        key: "great.prayer.day",
        date: easter.add({ days: 26 }),
      },
      {
        key: "ascension.day",
        date: easter.add({ days: 39 }),
      },
      {
        key: "whit.sunday",
        date: easter.add({ days: 49 }),
      },
      {
        key: "whit.monday",
        date: easter.add({ days: 50 }),
      },
      {
        key: "constitution.day",
        date: date.with({ month: 6, day: 5 }),
      },
      {
        key: "fathers.day",
        date: date.with({ month: 6, day: 5 }),
      },
      {
        key: "saint.johns.eve",
        date: date.with({ month: 6, day: 23 }),
      },
      {
        key: "daylight.saving.time.ends",
        date: endOfWeek(date.with({ month: 10 })).add({ weeks: 4 }),
      },
      {
        key: "halloween",
        date: date.with({ month: 10, day: 31 }),
      },
      {
        key: "christmas.eve",
        date: date.with({ month: 12, day: 24 }),
      },
      {
        key: "christmas.day",
        date: date.with({ month: 12, day: 25 }),
      },
      {
        key: "2nd.christmas.day",
        date: date.with({ month: 12, day: 26 }),
      },
      {
        key: "new.years.eve",
        date: date.with({ month: 12, day: 31 }),
      },
    ];
  }
}
