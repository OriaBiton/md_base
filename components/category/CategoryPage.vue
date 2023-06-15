<template>
  <AppPage :title="title" :img="img">
    <div class="intro">
      <slot name="intro" />
    </div>
    <AppSplit class="menu-section">
      <CategoryMenu
        :menu="menu.concat(...(locations ? [{ name: 'ניווט', to: '#locations' }] : []))"
      />
      <img :src="img" :alt="title" class="post">
    </AppSplit>
    <AppSplit v-if="locations" id="locations">
      <CategoryLocations :locations="locations" />
    </AppSplit>
    <div class="slot">
      <slot />
    </div>
    <AppSplit>
      <CategoryTeam v-if="team" :team="team" />
      <AppCard id="contact" header="יצירת קשר">
        <CategoryWhatsapp v-if="whatsapp" :whatsapp="whatsapp" />
        <ContactForm />
      </AppCard>
    </AppSplit>
  </AppPage>
</template>

<script setup lang="ts">
import { MenuLink, DepartmentContact, DepartmentMember, Navigation, DepartmentWhatsapp } from '../../types';

defineProps<{
  title: string;
  img: string;
  menu: MenuLink[];
  whatsapp?: DepartmentWhatsapp;
  contact?: DepartmentContact;
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