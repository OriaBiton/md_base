<template>
  <h2 class="reveal">
    <slot />
  </h2>
</template>

<style scoped>
h2 {
  width: min(75rem, 80vw);
  text-align: left;
  padding: 2rem 2rem 2rem 5rem;
  background: var(--grad1);
  color: var(--brightest);
  border-radius: 20rem 0 0 20rem;
  position: relative;  
  font-size: max(3vw, 3.8rem);
  transition: transform 1s;
  opacity: 1;
  margin-bottom: 12rem;
}
h2::after {
  content: '';
  width: calc(100% - 5rem);
  height: 9px;
  background-color: var(--highlight);
  position: absolute;
  right: 0;
  bottom: 10px;
  border-radius: 0 0 0 1rem;
}
h2.reveal {
  transform: translateX(min(100rem, 80vw));
  width: 100%;
  opacity: 0;
}
</style>