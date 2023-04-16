import { InjectionKey } from "vue";
import { SiteConfig } from "../components/views/AppView.vue";

export const siteConfigInjectionKey = Symbol() as InjectionKey<SiteConfig>;