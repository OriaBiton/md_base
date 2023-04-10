<template>
  <div class="wrapper">
    <template v-for="(step, i) in steps" :key="i">
      <div class="step" @click="$router.push(`#step${i + 1}`)">
        <Icon :name="step.icon" :style="{ color: step.color }" size="60" />
        <span class="name">{{ step.name }}</span>
      </div>
      <Icon
        v-if="i + 1 < steps.length"
        name="material-symbols:arrow-back-rounded"
        size="40"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { Step } from '~~/types';

defineProps<{
  steps: Step[];
}>();

const router = useRouter();
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  cursor: pointer;
}
.name {
  font-size: 22px;
}
</style>