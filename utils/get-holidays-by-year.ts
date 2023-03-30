import { computus } from "computus";
import { DateTime } from "luxon";

import type { Holiday } from "@/types/holiday";

export function getHolidaysByYear(year: number): Holiday[] {
  const date = DateTime.utc().set({ year }).startOf("year");
  const easter = DateTime.fromJSDate(computus(year), { zone: "utc" });

  return [
    {
      key: "new.years.day",
      date: date.set({ month: 1, day: 1 }),
    },
    {
      key: "valentines.day",
      date: date.set({ month: 2, day: 14 }),
    },
    {
      key: "carnival",
      date: easter.minus({ weeks: 7 }),
    },
    {
      key: "daylight.saving.time.starts",
      date: date.set({ month: 3 }).endOf("week").plus({ weeks: 3 }),
    },
    {
      key: "palm.sunday",
      date: easter.minus({ week: 1 }),
    },
    {
      key: "maundy.thursday",
      date: easter.minus({ day: 3 }),
    },
    {
      key: "good.friday",
      date: easter.minus({ day: 2 }),
    },
    {
      key: "easter.sunday",
      date: easter,
    },
    {
      key: "easter.monday",
      date: easter.plus({ day: 1 }),
    },
    {
      key: "international.workers.day",
      date: date.set({ month: 5, day: 1 }),
    },
    {
      key: "liberation.day",
      date: date.set({ month: 5, day: 5 }),
    },
    {
      key: "mothers.day",
      date: date.set({ month: 5 }).endOf("week").plus({ week: 1 }),
    },
    {
      key: "great.prayer.day",
      date: easter.plus({ days: 26 }),
    },
    {
      key: "ascension.day",
      date: easter.plus({ days: 39 }),
    },
    {
      key: "whit.sunday",
      date: easter.plus({ days: 49 }),
    },
    {
      key: "whit.monday",
      date: easter.plus({ days: 50 }),
    },
    {
      key: "constitution.day",
      date: date.set({ month: 6, day: 5 }),
    },
    {
      key: "fathers.day",
      date: date.set({ month: 6, day: 5 }),
    },
    {
      key: "saint.johns.eve",
      date: date.set({ month: 6, day: 23 }),
    },
    {
      key: "daylight.saving.time.ends",
      date: date.set({ month: 10 }).endOf("week").plus({ weeks: 4 }),
    },
    {
      key: "halloween",
      date: date.set({ month: 10, day: 31 }),
    },
    {
      key: "christmas.eve",
      date: date.set({ month: 12, day: 24 }),
    },
    {
      key: "christmas.day",
      date: date.set({ month: 12, day: 25 }),
    },
    {
      key: "2nd.christmas.day",
      date: date.set({ month: 12, day: 26 }),
    },
    {
      key: "new.years.eve",
      date: date.set({ month: 12, day: 31 }),
    },
  ];
}
