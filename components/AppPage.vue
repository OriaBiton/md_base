<template>
  <div class="wrapper">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Image } from '../types';

const {
  title,
  img = { src: '/images/hero.jpeg' }
} = defineProps<{
  title: string;
  img?: Image;
}>();

onMounted(() => usePageHeader().setHeader(title, img));
</script>

<style scoped>
.wrapper {
  background-color: var(--brightest);
  padding: 4rem 0 14rem 0;
}
</style>