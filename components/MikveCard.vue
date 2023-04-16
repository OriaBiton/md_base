<template>
  <InfoCard :name="mikve.name" :img="mikve.img">
    <p class="mt-0">
      <a :href="mikve.navigation" target="_blank">
        <Icon name="simple-icons:waze" size="22" class="ml-1" />
        {{ mikve.address }}
      </a>
      <br>
      <a :href="`tel:${phoneToRaw(mikve.phone)}`">
        <Icon name="fa-solid:phone-alt" size="20" class="ml-1" /> {{ mikve.phone }}
      </a>
    </p>
    <p class="mt-0">
      <template v-if="mikve.hours">
        {{ mikve.hours }}
      </template>
      <template v-else>
          <span v-if="!mikve.closedOnWeekdays">
            <strong>ימי חול א'-ה'</strong>
            <br>
            מזמן שקיעת החמה עד כארבע שעות לאחר מכן.
          </span>
          <br>
          <span>
            <strong>ערב שבת /חג:</strong>
            <br>
            מזמן הדלקת נרות עד שעה לאחר מכן.
          </span>
          <br>
          <span v-if="!mikve.closedOnShabbatEnd">
            <strong>מוצאי שבת/חג</strong>
            <br>
            חצי שעה לאחר צאת השבת/חג עד כשלוש שעות לאחר מכן.
          </span>
      </template>
    </p>
    <p v-if="mikve.notes">
      <Icon name="material-symbols:info-rounded" size="20" /> {{ mikve.notes }}
    </p>
  </InfoCard>
</template>

<script setup lang="ts">
import { Mikve } from '../types';

defineProps<{
  mikve: Mikve;
}>();
</script>