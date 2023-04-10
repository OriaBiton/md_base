import { HOSTNAME } from "~~/assets/constants";

export function isExternalUrl(url: string) {
  return url.includes(HOSTNAME);
}