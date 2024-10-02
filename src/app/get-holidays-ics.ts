import { createHash } from "crypto";

import { t } from "i18next";
import { createEvents, EventAttributes } from "ics";

import { Language } from "@/i18n";

import { Holiday } from "./get-holidays-by-year";

export function getHolidaysIcs(
  holidays: Holiday[],
  language?: Language,
): string {
  const events = holidays.map((holiday): EventAttributes => {
    const start = holiday.date;
    const end = start.add({ days: 1 });
    const hash = createHash("sha1")
      .update(`holiday.${holiday.key}` + start.toString())
      .digest("base64");

    const description = Object.entries(Language).map(
      ([key, lng]) => `${key}: ${t(`holiday.${holiday.key}`, { lng })}`,
    );

    if (holiday.isBankHoliday) {
      description.push(t("common.bank.holiday", { lng: language }));
    }

    return {
      title: t(`holiday.${holiday.key}`, { lng: language }) ?? holiday.key,
      start: [start.year, start.month, start.day],
      end: [end.year, end.month, end.day],
      productId: `com.rhnorskov.holidays.${language}`,
      description: description.join("\n"),
      uid: hash + "@rhnorskov.com",
    };
  });

  const { value, error } = createEvents(events);

  if (!value || error) throw error;

  return value;
}
