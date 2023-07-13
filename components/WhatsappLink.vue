<template>
  <a :href="`https://wa.me/${number}`">
    <img src="/images/whatsapp.png" alt="סמל ווצאפ">
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  number: string;
}>();
</script>