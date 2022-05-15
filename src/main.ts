import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module.js";

const app = await NestFactory.create(AppModule);

app.useGlobalPipes(new ValidationPipe());

await app.listen(process.env.PORT ?? 3000);
