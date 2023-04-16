<template>
  <nuxt-loading-indicator />
  <AppNav />
  <AppHeader />
  <main>
    <nuxt-page />
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
import { siteConfigInjectionKey } from '../../assets/injection-keys';
 
export interface SiteConfig {
  phone: string;
  phoneRaw: string;
  email: string;
  geoName: number;
}

const props = defineProps<SiteConfig>();

provide(siteConfigInjectionKey, props);
</script>