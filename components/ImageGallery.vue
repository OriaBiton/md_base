<template>
  <silent-box
    :gallery="new Array(count).fill(0).map((_, i) => ({ src: `${folder}/${count - i}.${extension || DEFAULT_EXT}` }))"
  />
</template>

<script setup lang="ts">
const DEFAULT_EXT = 'jpeg';

defineProps<{
  folder: string;
  count: number;
  extension?: string;
}>();

onMounted(() => {
  fixHeight();
});

function fixHeight() {
  setTimeout(() => {
    document.querySelectorAll('.silentbox-item img').forEach(img => img.removeAttribute('height'));
  }, 2000);
}
</script>

<style scoped>
:deep(button) {
  background-color: transparent;
  border-width: 0;
}
:deep(#silentbox-overlay__arrow-buttons .arrow) {
  height: 35px;
  width: 35px;
}
:deep(#silentbox-overlay__close-button .icon) {
  right: 15px;
  width: 20px;
}
</style>