<template>
  <AppButton v-if="!sent" type="submit" :disabled="loading">
    <template v-if="loading">
      <Icon name="line-md:loading-twotone-loop" />
    </template>
    <template v-else>
      שליחה
    </template>
  </AppButton>
  <p v-else>
    <Icon name="fa-solid:check-circle" size="20" class="good" />
    <strong class="good">
      ההודעה נשלחה בהצלחה
    </strong>
  </p>
</template>

<script setup lang="ts">
defineProps<{
  loading: boolean;
  sent: boolean;
}>();

defineEmits(['click']);
</script>