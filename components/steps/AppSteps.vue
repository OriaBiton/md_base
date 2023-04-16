<template>
  <StepsBar :steps="steps" />
  <div
    v-for="(step, i) in steps"
    :id="`step${i + 1}`"
    :key="i"
    class="step"
  >
    <h3 :style="{ color: step.color || 'inherit' }">
      <Icon :name="step.icon" size="50" />
      {{ step.name }}
    </h3>
    <slot :name="`step${i + 1}`" />
  </div>
</template>

<script setup lang="ts">
import { Step } from '../../types';

defineProps<{
  steps: Step[];
}>();
</script>

<style scoped>
.step {
  margin: 60px 0;
}
.icon {
  margin-left: 10px;
}
</style>