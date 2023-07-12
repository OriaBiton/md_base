<template>
  <AppForm @submit="send">
    <FormField label="פירוט המשוב">
      <textarea v-model="feedback" maxlength="400" required />
    </FormField>
    <FormButton :loading="loading" :sent="sent" />
  </AppForm>
</template>

<script setup lang="ts">
defineProps<{
  isRabbiQuestion?: boolean;
}>();

const feedback = ref('');
const loading = ref(false);
const sent = ref(false);

async function send(e: SubmitEvent) {
  e.preventDefault();
  loading.value = true;
  await useFetch('/api/send-feedback', { method: 'POST', body: { feedback: feedback.value } });
  loading.value = false;
  sent.value = true;  
}
</script>