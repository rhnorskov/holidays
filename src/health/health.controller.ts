import { Controller, Get } from "@nestjs/common";


@Controller("healthz")
export class HealthController {
  @Get()
  findAll() {
    return;
  }

}



