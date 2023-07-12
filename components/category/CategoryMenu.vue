<template>
  <AppCard :header="header">
    <MenuLink
      v-for="(link, i) in menu"
      :to="link.to"
      :target="link.external || link.download ? '_blank' : '_self'"
      :download="link.download"
      :key="i"
    >
      {{ link.name }}
    </MenuLink>
  </AppCard>
</template>

<script setup lang="ts">
import { Link } from '../../types';

withDefaults(defineProps<{
  menu: Link[];
  header?: string;
}>(), {
  header: 'תפריט'
});
</script>

<style scoped>
.card {
  text-align: center;
}
</style>