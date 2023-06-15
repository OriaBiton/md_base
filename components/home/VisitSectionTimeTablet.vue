<template>
  <VisitSectionTablet type="time" body-icon="fa6-solid:business-time" body-header="ימי ושעות פעילות">
    <template #header>
      המועצה
      <span v-if="isOpen" class="good">פתוחה</span>
      <span v-else class="danger">סגורה</span>
      כעת
    </template>
    <div class="opening-time">
      <div v-for="(day, i) in openingHours" :key="i" class="opening-day">
        <strong>{{ WEEK_DAY_NAMES[i] }}</strong>
        <div>
          <div v-if="day.length" v-for="hours in day" dir="ltr">
            {{ hours.join(' - ') }}
          </div>
          <span v-else>המועצה סגורה</span>
        </div>
      </div>
    </div>
    <template #footer>
      <!-- <img src="/images/outside.jpeg" class="post" alt="בניין המועצה הדתית"> -->
    </template>
  </VisitSectionTablet>
</template>

<script setup lang="ts">
import { siteConfigInjectionKey } from '../../assets/injection-keys';
import { WEEK_DAY_NAMES } from '../../assets/constants';

const isOpen = useIsOpen();
const { openingHours } = inject(siteConfigInjectionKey)!;
</script>

<style scoped>
.opening-time {
  margin: 0 auto;
  margin-bottom: 2.5rem;
  width: min(90%, 30rem);
}
.opening-day {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.7rem;
  padding: 0.6rem;
  border-radius: 5px;
  margin: 20px 0;
}
.opening-day:hover {background-color: var(--highlight);}
</style>