<template>
  <div :class="{ visible: modelValue }" class="wrapper">
    <div class="header">
      <nuxt-link to="/">
        <img src="/images/logo.png" alt="לוגו המועצה הדתית" class="whiten">
      </nuxt-link>
      <div class="close" @click="close">✕</div>
    </div>
    <SideNavItems @navigation="close" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  'update:modelValue': [boolean];
}>();

function close() {
  emit('update:modelValue', false);
}
</script>

<style scoped>
.wrapper {
  --side-nav-width: 40rem;
  position: fixed;
  top: 0;
  right: calc(-1 * var(--side-nav-width));
  height: 100vh;
  width: var(--side-nav-width);
  max-width: 90%;
  z-index: 11;
  padding: 1rem 2rem;
  background: var(--secondary);
  box-sizing: border-box;
  transition: .5s cubic-bezier(0.19, 1, 0.22, 1);
}
.header {
  margin-bottom: 20px;
}
.header img {
  width: 200px;
}
.close{
  width: 4rem;
  height: 4rem;
  font-size: 3rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
  line-height: 4rem;
  text-align: center;
  cursor: pointer;
  transition: .7s cubic-bezier(.08,.82,.17,1);
  transform: scale(0) rotate(180deg);
  border-radius: 50%;
  opacity: 0;
}
.visible {
  right: 0;
}
.visible .close{
  opacity: 1;
  background-color: #fff;
  transform: scale(1, 1) rotate(0);
  transition: .7s;
}
.visible .close:hover{
  transition-duration: .2s;
  transition-timing-function: ease-out;
  transform: rotate(-25deg);
}
</style>