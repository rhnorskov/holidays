import { Temporal } from "@js-temporal/polyfill";

export function endOfWeek<
  T extends
    | Temporal.PlainDate
    | Temporal.PlainDateTime
    | Temporal.ZonedDateTime,
>(date: T): T {
  if (date instanceof Temporal.PlainDate) {
    return date.add({ days: 7 - date.dayOfWeek }) as T;
  }

  if (date instanceof Temporal.PlainDateTime) {
    return date.add({ days: 7 - date.dayOfWeek }) as T;
  }

  if (date instanceof Temporal.ZonedDateTime) {
    return date.add({ days: 7 - date.dayOfWeek }) as T;
  }

  throw new Error("Invalid date");
}
