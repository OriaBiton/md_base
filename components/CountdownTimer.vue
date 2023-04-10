<template>
  <div class="timer">
    <div class="unit">
      <span>{{ seconds }}</span>
      שניות
    </div>
    <div class="unit">
      <span>{{ minutes }}</span>
      דקות
    </div>
    <div class="unit">
      <span>{{ hours }}</span>
      שעות
    </div>
    <div class="unit">
      <span>{{ days }}</span>
      ימים
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  end: Date;
}>();

const countDownDate = props.end.getTime();
const now = ref(0);
const distance = computed(() => countDownDate - now.value);

const seconds = computed(() => Math.floor((distance.value % (1000 * 60)) / 1000));
const minutes = computed(() => Math.floor((distance.value % (1000 * 60 * 60)) / (1000 * 60)));
const hours = computed(() => Math.floor((distance.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const days = computed(() => Math.floor(distance.value / (1000 * 60 * 60 * 24)));

onMounted(() => {
  now.value = new Date().getTime();
  const interval = setInterval(() => {
    now.value = new Date().getTime();
    if (distance.value < 0) clearInterval(interval);
  }, 1000);
});
</script>

<style scoped>
.timer {
  text-align: center;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: var(--dark);
  color: var(--brightest);
}
.unit {
  display: flex;
  flex-direction: column;
  font-size: 20px;
}
.unit span {
  font-size: 30px;
}
</style>