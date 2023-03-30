import type { DateTime } from "luxon";

export interface Holiday {
  key: string;
  date: DateTime;
  isBankHoliday: boolean;
}
