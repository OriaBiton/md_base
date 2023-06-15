<template>
  <li class="nav-icon-couple">
    <img src="/images/calendar-icon.png" class="time-icon" alt="">
    <div>
      <span>{{ dayOfWeek }}</span>
      <br>
      <span>{{ hebDate }}</span>
    </div>
  </li>
</template>

<script setup lang="ts">
const { dayOfWeek, hebDate } = useHebcal();
</script>