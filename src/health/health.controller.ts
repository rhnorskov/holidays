import { Controller, Get } from "@nestjs/common";
import { DateTime } from "luxon";

@Controller("healthz")
export class HealthController {
  @Get()
  findAll() {
    return DateTime.local();
  }
}
