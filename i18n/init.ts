import i18next from "i18next";
import { resources } from "./resources";

export function init() {
  return i18next.init({
    lng: "en",
    resources,
  });
}
