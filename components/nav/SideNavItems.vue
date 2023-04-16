<template>
  <ul>
    <SideNavItem
      v-for="(item, i) in ITEMS"
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
import { MenuLink } from '../../types';

interface Item {
  icon: string;
  name: string;
  to?: string;
  menu?: MenuLink[];
}

const ITEMS: Item[] = [
  { icon: "fa6-solid:hands-holding", name: "דברי ברכה", to: "/blessing" },
  { icon: "fa6-solid:utensils", name: "כשרות", menu:
    [
      { name: 'מחלקת כשרות', to: '/kosher' },
      { name: 'מכירת חמץ', to: '/kosher/hametz-sale' },
      { name: 'עסקים כשרים בעיר', to: '/kosher/businesses' },
      { name: 'תהליך קבלת תעודת כשרות', to: '/kosher/cert' }
    ]
  },
  { icon: "fa-heart", name: "נישואין", menu:
    [
      { name: 'מחלקת נישואין', to: '/marriage' },
      { name: 'רשימת עורכי החופות של הרבנות', to: 'https://www.gov.il/he/Departments/DynamicCollectors/list_of_rabbis_for_kidushin?skip=0', external: true },
      { name: 'לרישום נישואין', to: '/marriage/file' }
    ]
  },
  { icon: "fa6-solid:synagogue", name: "בתי כנסת", to: "/synagogues" },
  { icon: "mdi:grave-stone", name: "קבורה ואבלות", to: "/mourning" },
  { icon: "fa-solid:swimming-pool", name: "מקוואות", to: "/mikve" },
  { icon: 'mdi:candle', name: 'עירובין', to: '/eruvin' },
  { icon: 'fa6-solid:star-of-david', name: 'לקהילה האתיופית', to: '/ethiopian' },
  { icon: 'ic:baseline-work', name: 'משרות ומכרזים', to: '/jobs' },
  { icon: "fa-envelope", name: "יצירת קשר", to: "/contact" }
];

const activeItem = ref();

const router = useRouter();
const emit = defineEmits(['navigation']);
watch(router.currentRoute, () => emit('navigation'));

function handleClick(index: number) {
  const item = ITEMS[index];
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