<template>
  <nuxt-link :to="municipality.url" target="_blank" rel="noopener">
    <img src="/images/muni-logo.png" alt="לוגו העירייה">
  </nuxt-link>
</template>

<script setup lang="ts">
import { siteConfigInjectionKey } from '../../assets/injection-keys';
const { municipality } = inject(siteConfigInjectionKey)!;
</script>