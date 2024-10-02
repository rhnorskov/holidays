import { Temporal } from "@js-temporal/polyfill";
import { computus } from "computus";

import { endOfMonth } from "@/utils/end-of-month";
import { endOfWeek } from "@/utils/end-of-week";

export interface Holiday {
  key: string;
  date: Temporal.ZonedDateTime;
  isBankHoliday: boolean;
}

export function getHolidaysByYear(year: number): Holiday[] {
  const date = Temporal.ZonedDateTime.from({
    year,
    month: 1,
    day: 1,
    timeZone: "Europe/Copenhagen",
  });

  const easter = computus(year).toZonedDateTime("Europe/Copenhagen");

  const lastSundayOfMonth = (month: number) => {
    const lastDayOfMonth = endOfMonth(date.with({ month }));

    return lastDayOfMonth.subtract({ days: lastDayOfMonth.dayOfWeek % 7 });
  };

  return [
    {
      key: "new.years.day",
      date: date.with({ month: 1, day: 1 }),
      isBankHoliday: true,
    },
    {
      key: "valentines.day",
      date: date.with({ month: 2, day: 14 }),
      isBankHoliday: false,
    },
    {
      key: "carnival",
      date: easter.subtract({ weeks: 7 }),
      isBankHoliday: false,
    },
    {
      key: "daylight.saving.time.starts",
      date: lastSundayOfMonth(3),
      isBankHoliday: false,
    },
    {
      key: "palm.sunday",
      date: easter.subtract({ weeks: 1 }),
      isBankHoliday: true,
    },
    {
      key: "maundy.thursday",
      date: easter.subtract({ days: 3 }),
      isBankHoliday: true,
    },
    {
      key: "good.friday",
      date: easter.subtract({ days: 2 }),
      isBankHoliday: true,
    },
    {
      key: "easter.sunday",
      date: easter,
      isBankHoliday: true,
    },
    {
      key: "easter.monday",
      date: easter.add({ days: 1 }),
      isBankHoliday: true,
    },
    {
      key: "international.workers.day",
      date: date.with({ month: 5, day: 1 }),
      isBankHoliday: false,
    },
    {
      key: "liberation.day",
      date: date.with({ month: 5, day: 5 }),
      isBankHoliday: false,
    },
    {
      key: "mothers.day",
      date: endOfWeek(date.with({ month: 5 })).add({ weeks: 1 }),
      isBankHoliday: false,
    },
    {
      key: "great.prayer.day",
      date: easter.add({ days: 26 }),
      isBankHoliday: year < 2024,
    },
    {
      key: "ascension.day",
      date: easter.add({ days: 39 }),
      isBankHoliday: true,
    },
    {
      key: "whit.sunday",
      date: easter.add({ days: 49 }),
      isBankHoliday: true,
    },
    {
      key: "whit.monday",
      date: easter.add({ days: 50 }),
      isBankHoliday: true,
    },
    {
      key: "constitution.day",
      date: date.with({ month: 6, day: 5 }),
      isBankHoliday: true,
    },
    {
      key: "fathers.day",
      date: date.with({ month: 6, day: 5 }),
      isBankHoliday: false,
    },
    {
      key: "saint.johns.eve",
      date: date.with({ month: 6, day: 23 }),
      isBankHoliday: false,
    },
    {
      key: "daylight.saving.time.ends",
      date: lastSundayOfMonth(10),
      isBankHoliday: false,
    },
    {
      key: "halloween",
      date: date.with({ month: 10, day: 31 }),
      isBankHoliday: false,
    },
    {
      key: "christmas.eve",
      date: date.with({ month: 12, day: 24 }),
      isBankHoliday: false,
    },
    {
      key: "christmas.day",
      date: date.with({ month: 12, day: 25 }),
      isBankHoliday: true,
    },
    {
      key: "2nd.christmas.day",
      date: date.with({ month: 12, day: 26 }),
      isBankHoliday: true,
    },
    {
      key: "new.years.eve",
      date: date.with({ month: 12, day: 31 }),
      isBankHoliday: false,
    },
  ];
}
