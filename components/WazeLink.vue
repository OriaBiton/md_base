<template>
  <a :href="url" target="_blank">
    <Icon name="simple-icons:waze" size="30" />
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  url: string;
}>();
</script>

<style scoped>
a {
  font-size: 24px;
}
.icon {
  margin-left: 10px;
}
</style>