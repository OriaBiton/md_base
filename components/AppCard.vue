<template>
  <div class="card">
    <h2>{{ header }}</h2>
    <div class="wrapper">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  header: string;
}>();
</script>

<style scoped>
.card {
  padding-bottom: 3rem;
  border-radius: 3.5rem;
  box-shadow: 0 5px 15px -2px rgba(0, 0, 0, .2);
  background-color: white;
  max-width: 100%;
}
h2 {
  font-size: 34px;
  color: var(--brightest);
  width: 100%;
  background-color: var(--secondary);
  margin: 0 0 30px 0;
  text-align: center;
  border-radius: 3.5rem 3.5rem 0 0;
  padding: 1rem 0;
}
.wrapper {
  padding: 0 3rem;
}

@media (max-width: 600px) {
  .wrapper {
    padding: 0 1.5rem;
  }
}
</style>