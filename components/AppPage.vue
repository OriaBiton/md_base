<template>
  <div class="wrapper">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  title: string;
  img?: string;
}>(), {
  img: '/images/hero.jpeg'
});

usePageHeader().setHeader(props.title, props.img);
</script>

<style scoped>
.wrapper {
  background-color: var(--brightest);
  padding: 4rem 0 14rem 0;
}
</style>