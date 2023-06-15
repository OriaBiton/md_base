import { InjectionKey } from "vue";
import { SiteConfig } from "../types";

export const siteConfigInjectionKey = Symbol() as InjectionKey<SiteConfig>;