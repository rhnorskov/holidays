import { Temporal } from "@js-temporal/polyfill";

export class HolidayEntity {
  key!: string;
  date!: Temporal.PlainDate;
}
