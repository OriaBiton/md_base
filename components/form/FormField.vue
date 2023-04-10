<template>
  <label>
    {{ label }}
    <slot />
  </label>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<style scoped>
label {
  margin-bottom: 27px;
  font-size: 18px;
}
:deep(input:focus), :deep(textarea:focus) {
  box-shadow: 0 0 15px -5px var(--primary);
}
:deep(input), :deep(textarea) {
  width: 100%;
  min-height: 4rem;
  border: 1px var(--grey) solid;
  transition: box-shadow .3s;
  color: var(--dark);
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  box-sizing: border-box;
  border-radius: 1rem;
  margin-top: 10px;
}
:deep(input[type="radio"]), :deep(input[type="checkbox"]) {
  width: unset;
  vertical-align: middle;
  min-height: 2rem;
}
@media (max-width: 600px) {
  label {
    width: 95%;
    margin: 0 auto 1.5rem;
  }
}
</style>