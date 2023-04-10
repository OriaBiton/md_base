<template>
  <FormField :label="label" class="field">
    <input v-bind="$attrs" :checked="modelValue" type="checkbox" @change="$emit('update:modelValue', !modelValue)">
  </FormField>
</template>

<script lang="ts">
import FormField from './FormField.vue';
export default {
  extends: FormField,
  inheritAttrs: false
};
</script>

<script setup lang="ts">
defineProps<{
  modelValue: boolean;
}>();

defineEmits<{
  (e: 'update:modelValue', checked: boolean): void
}>();
</script>

<style scoped>
.field {
  display: flex;
  flex-direction: row-reverse;
  gap: 15px;
}
</style>