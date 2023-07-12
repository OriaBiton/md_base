<template>
  <form ref="formRef" @submit="$emit('submit', $event)">
    <slot />
  </form>
</template>

<script setup lang="ts">
const formRef = ref<InstanceType<typeof HTMLFormElement>>();

defineEmits<{
  (e: 'submit', event: SubmitEvent): void;
}>();

defineExpose({ reset });

function reset() {
  formRef.value?.reset();
}
</script>

<style scoped>
form {
  padding: 2rem;
  border: var(--brightest) 3px solid;
  border-radius: 1rem;
  max-width: 100%;
  background-color: var(--dark);
  color: var(--brightest);
}

.icon {
  margin-left: 10px;
}
</style>