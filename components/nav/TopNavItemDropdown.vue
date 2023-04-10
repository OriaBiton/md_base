<template>
  <li class="dropdown">
    <nuxt-link :to="to">{{ name }}</nuxt-link>
    <div class="content">
      <nuxt-link v-for="(item, i) in menu" :to="item.to" :key="i">
        {{ item.name }}
      </nuxt-link>
    </div>
  </li>
</template>

<script setup lang="ts">
import { MenuLink } from '~~/types';

defineProps<{
  name: string;
  to: string;
  menu: MenuLink[];
}>();
</script>

<style scoped>
.dropdown {
  padding-top: 15px;
  padding-bottom: 15px;
}
.dropdown > a {
  font-size: 18px;
}
.dropdown::after{
  content: '⯇';
  transform: rotate(0);
  display: inline-block;
  transition: transform .3s;
  margin-right: 5px;
}
.content {
  display: none;
  position: absolute;
  flex-direction: column;
  gap: 20px;
  background-color: var(--brightest);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 5px;
  z-index: 1;
  animation: fadeIn .25s;
}
@keyframes fadeIn {
  from{opacity: 0;}
  to{opacity: 1;}
}
.content a {
  padding: 12px 16px;
  display: block;
}
.content a:hover {background-color: var(--grey)}
.dropdown:hover .content {display: block;}
.dropdown:hover::after{transform: rotate(-90deg)}
</style>