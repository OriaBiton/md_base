<template>
  <InfoCard :name="mikve.name" :img="mikve.img">
    <p class="mt-0">
      <a :href="mikve.navigation" target="_blank">
        <Icon name="simple-icons:waze" size="22" class="ml-1" />
        {{ mikve.address }}
      </a>
      <br>
      <a :href="`tel:${phoneToRaw(mikve.phone)}`">
        <Icon name="fa-solid:phone-alt" size="20" class="ml-1" />
        {{ mikve.phone }}
        |
      </a>
      <small>
        זמין בשעות הפתיחה.
        לברורים בשעות אחרות ניתן לפנות טלפונית למשרדי המועצה.
      </small>
    </p>
    <hr class="mb-2">
    <p class="mt-0">
      <span v-if="mikve.closed" class="danger">
        <Icon name="mdi-warning-circle" size="20" />
        המקווה סגור עד להודעה חדשה
      </span>
      <template v-else-if="mikve.hours">
        {{ mikve.hours }}
      </template>
      <template v-else>
          <span v-if="!mikve.closedOnWeekdays">
            <strong>ימי חול א'-ה'</strong>
            <br>
            מזמן שקיעת החמה עד כארבע שעות לאחר מכן.
            <br>
          </span>
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
    <p v-if="mikve.notes" class="danger">
      <Icon name="mdi-info" size="20" class="ml-1" />
      <strong>
        {{ mikve.notes }}
      </strong>
    </p>
  </InfoCard>
</template>

<script setup lang="ts">
import { Mikve } from '../types';

defineProps<{
  mikve: Mikve;
}>();
</script>