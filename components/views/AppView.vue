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
import { SiteConfig } from '../../types';

const props = defineProps<{
  config: SiteConfig;
}>();

provide(siteConfigInjectionKey, props.config);
</script>