import { Injectable } from "@nestjs/common";
import { gregorian as computus } from "computus";
import { DateTime } from "luxon";

import { HolidayEntity } from "./holiday.entity.js";

@Injectable()
export class HolidayRepository {
  findAll(year: number): HolidayEntity[] {
    const date = DateTime.utc().set({ year }).startOf("year");
    const easter = DateTime.fromJSDate(computus(year), { zone: "utc" });

    return [
      {
        name: "New Year's Day",
        date: date.set({ month: 1, day: 1 }),
      },
      {
        name: "Valentine's Day",
        date: date.set({ month: 2, day: 14 }),
      },
      {
        name: "Carnival",
        date: easter.minus({ weeks: 7 }),
      },
      {
        name: "Daylight Saving Time starts",
        date: date.set({ month: 3 }).endOf("week").plus({ weeks: 3 }),
      },
      {
        name: "Palm Sunday",
        date: easter.minus({ week: 1 }),
      },
      {
        name: "Maundy Thursday",
        date: easter.minus({ day: 3 }),
      },
      {
        name: "Good Friday",
        date: easter.minus({ day: 2 }),
      },
      {
        name: "Easter Sunday",
        date: easter,
      },
      {
        name: "Easter Monday",
        date: easter.plus({ day: 1 }),
      },
      {
        name: "International Workers' Day",
        date: date.set({ month: 5, day: 1 }),
      },
      {
        name: "Liberation Day",
        date: date.set({ month: 5, day: 5 }),
      },
      {
        name: "Mother's Day",
        date: date.set({ month: 5 }).endOf("week").plus({ week: 1 }),
      },
      {
        name: "Great Prayer Day",
        date: easter.plus({ days: 26 }),
      },
      {
        name: "Ascension Day",
        date: easter.plus({ days: 39 }),
      },
      {
        name: "Pentecost Sunday",
        date: easter.plus({ days: 49 }),
      },
      {
        name: "Whit Monday",
        date: easter.plus({ days: 50 }),
      },
      {
        name: "Constitution Day",
        date: date.set({ month: 6, day: 5 }),
      },
      {
        name: "Father's Day",
        date: date.set({ month: 6, day: 5 }),
      },
      {
        name: "Daylight Saving Time ends",
        date: date.set({ month: 10 }).endOf("week").plus({ weeks: 4 }),
      },
      {
        name: "Halloween",
        date: date.set({ month: 10, day: 31 }),
      },
      {
        name: "Christmas Eve",
        date: date.set({ month: 12, day: 24 }),
      },
      {
        name: "Christmas Day",
        date: date.set({ month: 12, day: 25 }),
      },
      {
        name: "2nd Christmas Day",
        date: date.set({ month: 12, day: 26 }),
      },
      {
        name: "New Year's Eve",
        date: date.set({ month: 12, day: 31 }),
      },
    ];
  }
}
