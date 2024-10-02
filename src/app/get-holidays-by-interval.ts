import { getHolidaysByYear, type Holiday } from "./get-holidays-by-year";

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
