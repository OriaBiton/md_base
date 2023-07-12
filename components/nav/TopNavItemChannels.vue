<template>
  <div class="wrapper">
    <template v-if="nav.topNav.hasMunicipality">
      <TopNavItemMunicipality />
      <div class="divider" />
    </template>
    <div class="icons">
      <nuxt-link :to="`tel:${phoneRaw}`" target="_blank" rel="noopener">
        <img src="/images/phone.png" title="התקשרו אלינו" alt="אייקון טלפון">
      </nuxt-link>
      <nuxt-link :to="location.navigationUrl" target="_blank" rel="noopener">
        <img src="/images/waze.png" title="ניווט" alt="אייקון ניווט באמצעות Waze">
      </nuxt-link>
      <nuxt-link v-if="youtube" :to="youtube" target="_blank" rel="noopener">
        <img src="/images/youtube.png" title="יוטיוב" alt="אייקון יוטיוב">
      </nuxt-link>
      <nuxt-link v-if="facebook" :to="facebook" target="_blank" rel="noopener">
        <img src="/images/facebook.png" title="פייסבוק" alt="אייקון פייסבוק">
      </nuxt-link>
      <nuxt-link v-if="whatsapp" :to="buildWhatsappUrl(whatsapp)" target="_blank" rel="noopener">
        <img src="/images/whatsapp.png" title="ווצאפ" alt="אייקון ווצאפ">
      </nuxt-link>
      <nuxt-link to="/contact">
        <img src="/images/mail.png" title="יצירת קשר" alt="אייקון יצירת קשר">
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { siteConfigInjectionKey } from '../../assets/injection-keys';

const { communication, location, nav } = inject(siteConfigInjectionKey)!;
const { phone, youtube, facebook, whatsapp } = communication;
const phoneRaw = phoneToRaw(phone);
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
}
.divider {
  width: 3px;
  height: 3rem;
  background-color: var(--secondary);
  border-radius: 2rem;
  opacity: .2;
}
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