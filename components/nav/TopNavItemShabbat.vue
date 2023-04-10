<template>
  <li class="nav-icon-couple">
    <img src="/images/candles-icon.png" class="time-icon" alt="אייקון נרות שבת">
    <div>
      <span>{{ parasha }}</span>
      <br>
      <span dir="ltr">{{ hadlaka }} | {{ havdala }}</span>
    </div>
  </li>
</template>

<script setup lang="ts">
const { hadlaka, havdala, parasha } = await useHebcal();
const shabbatTooltip = ref(`
  <strong>כניסת שבת: </strong>${hadlaka}
  <br>
  <strong>יציאת שבת: </strong>${havdala}
  <br> (בת ים)
`);
</script>