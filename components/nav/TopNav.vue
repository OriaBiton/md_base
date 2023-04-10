<template>
  <div ref="wrapperRef" :class="{ sticky }" class="wrapper">
    <TopNavItems :wide="sticky" @burgerClick="$emit('burgerClick')" />
  </div>
</template>

<script setup lang="ts">
const sticky = ref(false);
const wrapperRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
  setStickyTrigger();
});

function setStickyTrigger() {
  window.addEventListener('scroll', () => {
    sticky.value = window.scrollY > wrapperRef.value!.offsetHeight;
  });
}

defineEmits(['burgerClick']);
</script>

<style scoped>
.wrapper{
  transition: .45s;
  background-color: var(--brightest);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: fit-content;
  box-shadow: 0px 0px 30px rgba(58, 54, 34, 0.15);
  margin: 0 auto;
}

@media (max-width: 600px) {
  .wrapper {
    height: 60px;
  }
}
</style>