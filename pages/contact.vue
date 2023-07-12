<template>
  <AppPage title="יצירת קשר" :img="{ src: IMG, alt: 'מעטפה' }">
    <AppSplit>
      <AppCard header="שליחת הודעה">
        <p>
          אתם מוזמנים לשלוח לנו הודעה בכל נושא: שאלה, הערה, הארה - או פשוט לתת לנו משוב מכל סוג.
          <br>
          נעשה את מלוא המאמצים לענות בהקדם.
        </p>
        <ContactForm />
      </AppCard>
      <img :src="IMG" class="post" alt="מעטפה">
    </AppSplit>
  </AppPage>
</template>

<script setup lang="ts">
const IMG = '/images/letter.jpg';
</script>