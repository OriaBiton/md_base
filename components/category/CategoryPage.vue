<template>
  <AppPage :title="title" :img="img">
    <div class="intro">
      <slot name="intro" />
    </div>
    <AppSplit class="menu-section">
      <CategoryMenu
        :menu="menu
          .concat(locations ? [{ name: 'ניווט', to: '#locations' }] : [])
          .concat(team ? [{ name: 'צוות המחלקה', to: '#team' }] : [])"
      />
      <img :src="img.src" :alt="title" class="post">
    </AppSplit>
    <AppSplit v-if="locations" id="locations">
      <CategoryLocations :locations="locations" />
    </AppSplit>
    <div class="slot">
      <slot />
    </div>
    <AppSplit>
      <CategoryTeam v-if="team" id="team" :team="team" />
      <AppCard v-if="contact || whatsapp" id="contact" header="יצירת קשר">
        <CategoryWhatsapp v-if="whatsapp" :whatsapp="whatsapp" />
        <ContactForm v-if="contact" />
      </AppCard>
    </AppSplit>
  </AppPage>
</template>

<script setup lang="ts">
import { Link, DepartmentMember, Navigation, DepartmentWhatsapp, Image } from '../../types';

defineProps<{
  title: string;
  img: Image;
  menu: Link[];
  whatsapp?: DepartmentWhatsapp;
  contact?: boolean;
  team?: DepartmentMember[];
  locations?: Navigation[];
}>();
</script>

<style scoped>
.intro {
  margin-bottom: 40px;
}
.menu-section {
  margin-bottom: 10rem;
}
.slot {
  margin: 100px 0;
}
</style>