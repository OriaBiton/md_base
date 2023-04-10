<template>
  <AppCard :header="name" class="middle">
    <a :href="src" :download="name" target="_blank" title="לחצו להורדה">
      <img :src="src" :alt="name" class="post">
    </a>
  </AppCard>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  src: string;
}>();
</script>