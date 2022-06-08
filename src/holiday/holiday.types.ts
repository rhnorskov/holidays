import { IsEnum, IsOptional } from "class-validator";

import { Language } from "../i18n/i18n.types.js";

export class HolidaysParams {
  @IsEnum(Language)
  @IsOptional()
  language!: Language;
}
