<template>
  <VisitSectionTablet type="time" body-icon="fa6-solid:business-time" body-header="ימי ושעות פעילות">
    <template #header>
      המועצה
      <span v-if="isOpen" class="good">פתוחה</span>
      <span v-else class="danger">סגורה</span>
      כעת
    </template>
    <div class="opening-time">
      <p class="opening-day">
        <strong>יום א'</strong>
        <span dir="ltr">9:00 - 13:00</span>
      </p>
      <p class="opening-day">
        <strong>יום ב'</strong>
        <span dir="ltr">
          <span>9:00 - 13:00</span>
          <br>
          <span>16:00 - 18:00</span>
        </span>
      </p>
      <p class="opening-day">
        <strong>יום ג'</strong>
        <span dir="ltr">9:00 - 13:00</span>
      </p>
      <p class="opening-day">
        <strong>יום ד'</strong>
        <span dir="ltr">
          <span>9:00 - 13:00</span>
          <br>
          <span>16:00 - 18:00</span>
        </span>
      </p>
      <p class="opening-day">
        <strong>יום ה'</strong>
        <span dir="ltr">9:00 - 13:00</span>
      </p>
      <p class="opening-day">
        <strong>יום ו'</strong>
        <span dir="ltr">המועצה סגורה</span>
      </p>
      <p class="opening-day">
        <strong>יום שבת</strong>
        <span dir="ltr">המועצה סגורה</span>
      </p>
    </div>
    <template #footer>
      <!-- <img src="/images/outside.jpeg" class="post" alt="בניין המועצה הדתית"> -->
    </template>
  </VisitSectionTablet>
</template>

<script setup lang="ts">
const isOpen = useIsOpen();
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
}
.opening-day:hover {background-color: var(--highlight);}
</style>