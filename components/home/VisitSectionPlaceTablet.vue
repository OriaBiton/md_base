<template>
  <VisitSectionTablet
    :header="address"
    type="place"
    body-icon="fa-solid:wheelchair"
    body-header="מידע בנושא נגישות"
  >
    <p>
      המקום מונגש לבעלי מוגבלויות. במידה ויש צורך בשירות פרונטלי ניתן ליצור קשר בשעות הפעילות ונציג המועצה יגיע לסייע.
    </p>
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
p {font-size: 1.4rem;}
iframe {
  flex-grow: 1;
  width: 100%; height: 100%;
}
</style>