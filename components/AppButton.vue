<template>
  <button @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineEmits(['click']);
</script>

<style scoped>
button {
  font-size: 22px;
  background-color: var(--dark);
  padding: 10px 20px;
  color: var(--brightest);
  border-radius: 3px;
  display: inline-block;
  transition: background-color 0.2s;
  border: 2px solid var(--brightest);
}
</style>