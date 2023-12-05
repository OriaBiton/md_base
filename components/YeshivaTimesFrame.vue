<template>
  <iframe :src="`https://www.yeshiva.org.il/calendar/YeshivaTimes.aspx?bgcolor=FFFFFF&place=${placeId}`" frameborder="0" />
</template>

<script setup lang="ts">
import { siteConfigInjectionKey } from '~/assets/injection-keys';

const { placeId } = inject(siteConfigInjectionKey)!.location;
</script>