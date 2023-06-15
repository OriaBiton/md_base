<template>
  <div class="icons">
    <a :href="`tel:${phoneRaw}`" target="_blank" rel="noopener">
      <img src="/images/phone.png" title="התקשרו אלינו" alt="אייקון טלפון">
    </a>
    <a :href="location.navigationUrl" target="_blank" rel="noopener">
      <img src="/images/waze.png" title="ניווט" alt="אייקון ניווט באמצעות Waze">
    </a>
    <nuxt-link to="/contact">
      <img src="/images/mail.png" title="יצירת קשר" alt="אייקון יצירת קשר">
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { siteConfigInjectionKey } from '../../assets/injection-keys';
const { communication, location } = inject(siteConfigInjectionKey)!;
const phoneRaw = phoneToRaw(communication.phone);
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