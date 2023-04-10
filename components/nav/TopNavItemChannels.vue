<template>
  <div class="icons">
    <a :href="`tel:${phoneRaw}`" target="_blank" rel="noopener">
      <img src="/images/phone.png" title="התקשרו אלינו" alt="אייקון טלפון">
    </a>
    <a href="https://www.waze.com/en/live-map/directions/il/center-district/yavne/halilach-st-6?latlng=31.871266491546326%2C34.74526047706605&navigate=yes&reverse=yes&time=1668333600000" target="_blank" rel="noopener">
      <img src="/images/waze.png" title="ניווט" alt="אייקון ניווט באמצעות Waze">
    </a>
    <nuxt-link to="/contact">
      <img src="/images/mail.png" title="יצירת קשר" alt="אייקון יצירת קשר">
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const { phoneRaw } = useRuntimeConfig().public;
</script>

<style scoped>
.icons{
  display: flex;
  align-items: center;
  gap: 1rem;
}
.icons > *{
  filter:sepia(.3) grayscale(.5);
  height: var(--icon-size);
}
.icons > *:hover{filter: grayscale(0);}
</style>