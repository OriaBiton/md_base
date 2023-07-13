<template>
  <div ref="revealable" :class="{ hidden, side, bottom, right, left }">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  side?: boolean;
  bottom?: boolean;
  right?: boolean;
  left?: boolean;
  duration?: number;
}>();

const revealable = ref<HTMLDivElement>();
const hidden = ref(true);

onMounted(() => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        hidden.value = false;
        observer.unobserve(entry.target);
      }
    });
  });
  observer.observe(revealable.value);
});
</script>

<style scoped>
div {
  transition: all v-bind('`${duration || 800}ms`');
}
.hidden.side {
  transform: translateX(min(100rem, 80vw));
  width: 100%;
  opacity: 0;
}
.hidden.bottom {
  top: 30vh;
}
.hidden.right {
  left: -30vw;
}
.hidden.left {
  left: 30vw;
}
</style>