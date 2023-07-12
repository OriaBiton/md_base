<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<script setup lang="ts">
import { siteConfigInjectionKey } from '../../assets/injection-keys';
import { SiteConfig } from '../../types';

const props = defineProps<{
  config: SiteConfig;
}>();

provide(siteConfigInjectionKey, props.config);
</script>