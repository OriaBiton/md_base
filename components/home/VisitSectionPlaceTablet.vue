<template>
  <VisitSectionTablet type="place" :header="address" body-icon="fa-solid:wheelchair" body-header="מידע בנושא נגישות">
    <p>
      המקום מונגש לבעלי מוגבלויות. במידה ויש צורך בשירות פרונטלי ניתן ליצור קשר בשעות הפעילות ונציג המועצה יגיע לסייע.
    </p>
    <template #footer>
      <iframe class="post" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=המועצה הדתית יבנה&key=AIzaSyB6C1Ls4JUdQjQPURs3dDmPJ6yauukTDzM&region=IL&language=iw" allowfullscreen></iframe>
    </template>
  </VisitSectionTablet>
</template>

<script setup lang="ts">
import { siteConfigInjectionKey } from '../../assets/injection-keys';
const { address } = inject(siteConfigInjectionKey)!.location;
</script>

<style scoped>
p {font-size: 1.4rem;}
iframe {
  flex-grow: 1;
  margin-top: 20px;
}
</style>