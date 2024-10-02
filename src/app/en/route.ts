import { Temporal } from "@js-temporal/polyfill";

import { initialize, Language } from "@/i18n";

import { getHolidaysByInterval } from "../get-holidays-by-interval";
import { getHolidaysIcs } from "../get-holidays-ics";

export async function GET() {
  await initialize();

  const now = Temporal.Now.zonedDateTimeISO("Europe/Copenhagen");

  const holidays = getHolidaysByInterval(now.year - 5, now.year + 5);
  const ics = getHolidaysIcs(holidays, Language.English);

  return new Response(ics, { status: 200 });
}
