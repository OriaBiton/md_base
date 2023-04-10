<template>
  <AppForm @submit="send">
    <FormField label='שם מלא'>
      <input v-model="form.name" type="text" required>
    </FormField>
    <FormField label='דוא"ל'>
      <input v-model="form.email" type="email">
    </FormField>
    <FormField label='טלפון'>
      <input v-model="form.phone" type="tel" required>
    </FormField>
    <FormField label='הודעה'>
      <textarea v-model="form.msg" rows="4" />
    </FormField>

    <FormButton :loading="loading" :sent="sent" />
  </AppForm>
</template>

<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  phone: '',
  msg: ''
});

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