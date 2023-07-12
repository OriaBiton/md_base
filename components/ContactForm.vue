<template>
  <AppForm @submit="send">
    <FormField label='שם מלא'>
      <input v-model="form.name" type="text" required>
    </FormField>
    <FormField label='דוא"ל'>
      <input v-model="form.fromEmail" type="email">
    </FormField>
    <FormField v-if="!isRabbiQuestion" label='טלפון'>
      <input v-model="form.phone" type="tel" required>
    </FormField>
    <FormField :label="isRabbiQuestion ? 'שאלה' : 'הודעה'">
      <textarea v-model="form.msg" rows="4" />
    </FormField>

    <FormButton :loading="loading" :sent="sent" />
  </AppForm>
</template>

<script setup lang="ts">
import { siteConfigInjectionKey } from '../assets/injection-keys';

defineProps<{
  isRabbiQuestion?: boolean;
}>();

const { email } = inject(siteConfigInjectionKey)?.communication!;

const form = {
  name: '',
  fromEmail: '',
  phone: '',
  msg: '',
  mdEmail: email,
};

const loading = ref(false);
const sent = ref(false);

async function send(e: Event) {
  e.preventDefault();
  loading.value = true;
  await useFetch('/api/send-contact-message', { method: 'POST', body: form });
  loading.value = false;
  sent.value = true;  
}
</script>