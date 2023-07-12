<template>
  <a v-if="hashed" :href="href">
    <slot />
  </a>
  <nuxt-link v-else>
    <slot />
  </nuxt-link>
</template>

<script setup lang="ts">
const href = useAttrs().to as string;
const hashed = href.startsWith('#');
</script>

<style scoped>
a {
  font-size: 26px;
  background-color: var(--secondary);
  padding: 10px 0;
  color: var(--brightest);
  border-radius: 3px;
  display: inline-block;
  transition: background-color 0.2s;
  width: 80%;
  box-sizing: border-box;
  margin: 2.5rem auto;
  text-align: center;
}
</style>