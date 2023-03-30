import { Interval } from "luxon";

import { getHolidaysByYear } from "./get-holidays-by-year";

import type { Holiday } from "@/types/holiday";

export function getHolidaysByInterval(interval: Interval): Holiday[] {
  const holidays = interval.splitBy({ year: 1 }).map((interval) => {
    return getHolidaysByYear(interval.start.year);
  });

  return holidays.flat();
}
