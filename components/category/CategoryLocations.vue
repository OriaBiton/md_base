<template>
  <AppCard header="ניווט">
    <WazeLink
      v-for="(location, i) in locations"
      :key="i"
      :url="location.url"
      class="link"
    >
      {{ location.name }}
    </WazeLink>
  </AppCard>
</template>

<script setup lang="ts">
import { Navigation } from '../../types';
defineProps<{
  locations: Navigation[];
}>();
</script>

<style scoped>
.link {
  display: block;
  margin-bottom: 20px;
}
</style>