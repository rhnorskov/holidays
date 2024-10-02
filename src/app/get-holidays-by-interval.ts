import { Temporal } from "@js-temporal/polyfill";

import { Holiday } from "../utils/holiday";
import { Interval } from "temporal-interval";
import { getHolidaysByYear } from "./get-holidays-by-year";
import { start } from "repl";

export function getHolidaysByInterval(
  startYear: number,
  endYear: number
): Holiday[] {
  const length = endYear - startYear + 1;

  const holidays = Array.from({ length }).map((_, index) => {
    return getHolidaysByYear(startYear + index);
  });

  return holidays.flat();
}
