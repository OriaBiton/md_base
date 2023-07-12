<template>
  <iframe width="560" height="315" :src="'https://www.youtube.com/embed/' + video" title="נגן יוטיוב" frameborder="0" allow="web-share" allowfullscreen></iframe>
</template>

<script setup lang="ts">
defineProps<{
  video: string;
}>();
</script>