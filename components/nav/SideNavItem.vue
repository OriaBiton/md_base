<template>
  <li :class="{ dropdown, active }" @click="$emit('click')">
    <Icon :name="icon" /> {{ name }}
    <div class="dropdown-content">
      <nuxt-link
        v-for="(item, i) in dropdown"
        :to="item.to"
        :target="item.external ? '_blank' : '_self'"
        :key="i"
      >
        {{ item.name }}
      </nuxt-link>
    </div>
  </li>
</template>

<script setup lang="ts">
import { MenuLink } from '../../types';

defineProps<{
  icon: string;
  name: string;
  to?: string;
  dropdown?: MenuLink[];
  active: boolean;
}>();

defineEmits(['click']);
</script>

<style scoped>
.dropdown {position: relative; transition: .3s;}
.dropdown.active{color: var(--highlight);}
.dropdown-content {
  max-height: 0;  
  overflow: hidden;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);  
  transition: max-height .5s ease;
  color: var(--dark);
  background-color: var(--brightest);
  border-radius: 10px;
  border-right: 6px var(--highlight) solid;
  margin: 1rem 3rem 0 0;
}
.dropdown.active .dropdown-content {
  overflow: hidden;
  max-height: 40rem;
}
.dropdown::after{
  content: '🠸';
  color: var(--brightest);
  transform: rotate(0);
  display: inline-block;
  transition: transform .3s;
  position: absolute;
  top: 0;
  left: 2rem;
  font-size: 4rem;
}
.dropdown.active::after{transform: rotate(-90deg)}
.dropdown-content a {
  padding: 12px 14px;
  display: block;
  color: var(--dark);
}
li {
  font-size: 1.7rem;
  padding: 15px 10px;
  width: 100%;
  margin: 0;
  opacity: 1;  
  cursor: pointer;
  list-style: none;
  transition: none;
  border-radius: 0 6px 6px 0;
}
li:hover {
  background-color: #26588a;
}
li:hover svg {
  opacity: 0;
  transform: translateY(10px);
  animation: floatOnce .3s ease-out 1 forwards;
}
@keyframes floatOnce {
  to {opacity: 1; transform: translateY(0);}
}
li svg {
  margin-left: 3rem;
  width: 2.5rem;
  text-align: center;
  font-size: 2.5rem;
}
</style>