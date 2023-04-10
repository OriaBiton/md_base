<template>
  <div class="split">
    <slot />
  </div>
</template>

<style scoped>
.split {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3vw;
  margin-bottom: 5rem;
}
.split > :slotted(*) {
  max-width: 50%;
}
.split > :slotted(*:not(img)) {
  min-width: 50%;
}

@media (max-width: 600px) {
  .split {
    columns: unset;
    flex-wrap: wrap;
  }
  .split > :slotted(*) {
    max-width: 100%;
  }
}
</style>