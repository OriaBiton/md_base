<template>
  <ul>
    <SideNavItem
      v-for="(item, i) in items"
      :icon="item.icon"
      :name="item.name"
      :to="item.to"
      :dropdown="item.menu"
      :active="activeItem == i"
      :key="i"
      @click="handleClick(i)"
    />
  </ul>
</template>

<script setup lang="ts">
import { siteConfigInjectionKey } from '../../assets/injection-keys';

const { items } = inject(siteConfigInjectionKey)!.nav.sideNav;

const activeItem = ref();

const router = useRouter();
const emit = defineEmits(['navigation']);
watch(router.currentRoute, () => emit('navigation'));

function handleClick(index: number) {
  const item = items[index];
  if (item.to) {
    router.push(item.to);
  } else {
    activeItem.value = activeItem.value == index ? null : index;
  }
}
</script>

<style scoped>
ul {
  color: var(--brightest);
}
</style>