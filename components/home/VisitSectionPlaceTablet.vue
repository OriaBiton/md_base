<template>
  <VisitSectionTablet
    :header="address"
    type="place"
    body-icon="fa-solid:wheelchair"
    body-header="מידע בנושא נגישות"
  >
    <p v-html="location.accessibilityStatement" />
    <nuxt-link to="/accessibility-statement">
      הצהרת הנגישות של האתר
    </nuxt-link>
    <template #footer>
      <iframe
        :src="`https://www.google.com/maps/embed/v1/place?q=${title}&key=AIzaSyB6C1Ls4JUdQjQPURs3dDmPJ6yauukTDzM&region=IL&language=iw`"
        class="post"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </template>
  </VisitSectionTablet>
</template>

<script setup lang="ts">
import { siteConfigInjectionKey } from '../../assets/injection-keys';
const { location, title } = inject(siteConfigInjectionKey)!;
const { address } = location;
</script>

<style scoped>
p {
  margin-bottom: 3px;
}
p, a {font-size: 1.4rem;}
a {
  display: block;
}
iframe {
  flex-grow: 1;
  width: 100%; height: 100%;
}
</style>