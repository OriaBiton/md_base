<template>
  <li :class="{ wide }" class="nav-icon-couple">
    <div class="time-icon bulb" />
    <span class="text">
      המועצה
      <strong>{{ isOpen ? 'פתוחה' : 'סגורה' }}</strong>
      כעת
    </span>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  wide: boolean;
}>();
const isOpen = useIsOpen();
</script>

<style scoped>
.text {
  font-size: 0;
  transition: all 0.3s;
}
.wide .text {
  font-size: var(--top-nav-font-size);
  transition-delay: .3s;
}
.bulb {
  width: var(--icon-size);
  background-color: v-bind('isOpen ? "var(--good)" : "var(--danger)"');
  border-radius: 50%;
  display: inline-block;
  opacity: .65;
}

@media (max-width: 600px) {
  .wide .text {
    font-size: 0;
  }
}
</style>