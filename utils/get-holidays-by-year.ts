import { computus } from "computus";
import { DateTime } from "luxon";

import type { Holiday } from "@/types/holiday";

export function getHolidaysByYear(year: number): Holiday[] {
  const date = DateTime.local()
    .setZone("Europe/Copenhagen")
    .set({ year })
    .startOf("year");

  const easter = DateTime.fromJSDate(computus(year), {
    zone: "Europe/Copenhagen",
  });

  const lastSundayOfMonth = (month: number) => {
    const lastDayOfMonth = date.set({ month }).endOf("month");
    return lastDayOfMonth.minus({
      days: lastDayOfMonth.weekday % 7,
    });
  };

  return [
    {
      key: "new.years.day",
      date: date.set({ month: 1, day: 1 }),
      isBankHoliday: true,
    },
    {
      key: "valentines.day",
      date: date.set({ month: 2, day: 14 }),
      isBankHoliday: false,
    },
    {
      key: "carnival",
      date: easter.minus({ weeks: 7 }),
      isBankHoliday: false,
    },
    {
      key: "daylight.saving.time.starts",
      date: lastSundayOfMonth(3),
      isBankHoliday: false,
    },
    {
      key: "palm.sunday",
      date: easter.minus({ week: 1 }),
      isBankHoliday: true,
    },
    {
      key: "maundy.thursday",
      date: easter.minus({ day: 3 }),
      isBankHoliday: true,
    },
    {
      key: "good.friday",
      date: easter.minus({ day: 2 }),
      isBankHoliday: true,
    },
    {
      key: "easter.sunday",
      date: easter,
      isBankHoliday: true,
    },
    {
      key: "easter.monday",
      date: easter.plus({ day: 1 }),
      isBankHoliday: true,
    },
    {
      key: "international.workers.day",
      date: date.set({ month: 5, day: 1 }),
      isBankHoliday: false,
    },
    {
      key: "liberation.day",
      date: date.set({ month: 5, day: 5 }),
      isBankHoliday: false,
    },
    {
      key: "mothers.day",
      date: date.set({ month: 5 }).endOf("week").plus({ week: 1 }),
      isBankHoliday: false,
    },
    {
      key: "great.prayer.day",
      date: easter.plus({ days: 26 }),
      isBankHoliday: year < 2024,
    },
    {
      key: "ascension.day",
      date: easter.plus({ days: 39 }),
      isBankHoliday: true,
    },
    {
      key: "whit.sunday",
      date: easter.plus({ days: 49 }),
      isBankHoliday: true,
    },
    {
      key: "whit.monday",
      date: easter.plus({ days: 50 }),
      isBankHoliday: true,
    },
    {
      key: "constitution.day",
      date: date.set({ month: 6, day: 5 }),
      isBankHoliday: true,
    },
    {
      key: "fathers.day",
      date: date.set({ month: 6, day: 5 }),
      isBankHoliday: false,
    },
    {
      key: "saint.johns.eve",
      date: date.set({ month: 6, day: 23 }),
      isBankHoliday: false,
    },
    {
      key: "daylight.saving.time.ends",
      date: lastSundayOfMonth(10),
      isBankHoliday: false,
    },
    {
      key: "halloween",
      date: date.set({ month: 10, day: 31 }),
      isBankHoliday: false,
    },
    {
      key: "christmas.eve",
      date: date.set({ month: 12, day: 24 }),
      isBankHoliday: false,
    },
    {
      key: "christmas.day",
      date: date.set({ month: 12, day: 25 }),
      isBankHoliday: true,
    },
    {
      key: "2nd.christmas.day",
      date: date.set({ month: 12, day: 26 }),
      isBankHoliday: true,
    },
    {
      key: "new.years.eve",
      date: date.set({ month: 12, day: 31 }),
      isBankHoliday: false,
    },
  ];
}
