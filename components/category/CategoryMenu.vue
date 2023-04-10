<template>
  <AppCard :header="header">
    <nuxt-link
      v-for="(link, i) in menu"
      :to="link.to"
      :target="link.external || link.download ? '_blank' : '_self'"
      :download="link.download"
      :key="i"
      class="item"
    >
      {{ link.name }}
    </nuxt-link>
  </AppCard>
</template>

<script setup lang="ts">
import { MenuLink } from '~~/types';

withDefaults(defineProps<{
  menu: MenuLink[];
  header?: string;
}>(), {
  header: 'תפריט'
});
</script>

<style scoped>
.card {
  text-align: center;
}
.item {
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