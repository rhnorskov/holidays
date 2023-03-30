// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { DateTime, Interval } from "luxon";
import { getHolidaysIcs } from "@/utils/get-holidays-ics";
import { getHolidaysByInterval } from "@/utils/get-holidays-by-interval";
import { init, Language } from "@/i18n";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await init();

  const interval = Interval.fromDateTimes(
    DateTime.now().minus({ years: 5 }).startOf("year"),
    DateTime.now().plus({ years: 5 }).endOf("year")
  );

  const holidays = getHolidaysByInterval(interval);
  const ics = getHolidaysIcs(holidays, Language.Danish);

  res.setHeader("Content-Type", "text/calendar");
  res.setHeader("Content-Disposition", "attachment; filename=holidays.ics");
  res.status(200).send(ics);
}
