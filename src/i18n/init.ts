import { init } from "i18next";

import { resources } from "./resources";

export function initialize() {
  return init({
    lng: "en",
    resources,
  });
}
