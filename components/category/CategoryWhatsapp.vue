<template>
  <p class="mt-5">
    <Icon name="logos:whatsapp-icon" size="35" />
    {{ whatsapp.text }}
    <a :href="url">
      {{ whatsapp.phone }}
    </a>
  </p>
  <div v-if="whatsapp.img" class="middle">
    <a :href="url">
      <img :src="whatsapp.img" alt="ווצאפ">
    </a>
  </div>
</template>

<script setup lang="ts">
import { DepartmentWhatsapp } from '../../types';

const props = defineProps<{
  whatsapp: DepartmentWhatsapp;
}>();

const raw = phoneToRaw(props.whatsapp.phone);
const url = `https://wa.me/972${raw}`;
</script>