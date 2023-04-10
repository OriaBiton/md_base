<template>
  <div class="darkener" :class="{ visible: modelValue }" @click="$emit('update:modelValue', false)" />
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean;
}>();

defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();
</script>

<style scoped>
.darkener {
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  right: 0;
  z-index: -1;
  transition: opacity .3s, z-index 0s .3s;
  opacity: 0;

}
.darkener.visible {
  transition: opacity .3s, z-index 0s;
  opacity: 1;
  z-index: 10;
}
</style>