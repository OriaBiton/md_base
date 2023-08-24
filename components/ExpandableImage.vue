<template>
  <div class="wrapper">
    <img :src="src" class="clickable" @click="visible = true">
    <AppModal v-model="visible">
      <img :src="src" alt="תמונה בגודל מלא">
    </AppModal>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string;
}>();

const visible = ref(false);
</script>

<style scoped>
.wrapper {
  position: relative;
  display: inline-block;
}
.clickable {
  cursor: zoom-in;
}
</style>