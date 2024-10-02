import { Temporal } from "@js-temporal/polyfill";

export function endOfMonth<
  T extends Temporal.PlainDate | Temporal.PlainDateTime | Temporal.ZonedDateTime
>(date: T): T {
  if (date instanceof Temporal.PlainDate) {
    return date.with({ day: date.daysInMonth }) as T;
  }

  if (date instanceof Temporal.PlainDateTime) {
    return date.with({ day: date.daysInMonth }) as T;
  }

  if (date instanceof Temporal.ZonedDateTime) {
    return date.with({ day: date.daysInMonth }) as T;
  }

  throw new Error("Invalid date");
}
