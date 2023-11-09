<template>
  <div class="card" :style="{ width }">
    <div class="image" :style="{ backgroundImage: `url(${img})` }">
      <div class="links">
        <nuxt-link v-for="(link, i) in links" :to="link.to" :key="i" target="_blank">
          <Icon :name="link.icon" size="26" />
        </nuxt-link>
      </div>
    </div>
    <div class="body">
      <h4>{{ name }}</h4>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Link {
  to: string;
  icon: string;
}

const props = defineProps<{
  name: string;
  img: string;
  links?: Link[];
  width?: number;
}>();

const width = computed(() => (props.width || 320) + 'px');
</script>

<style scoped>
.card {
  box-shadow: 0 5px 15px -2px rgba(0, 0, 0, 0.1);
  border: 1px solid white;
  background-color: white;
  border-radius: 6px;
}
.image {
  background-position: center;
  background-size: cover;
  position: relative;
  height: 200px;
  border-radius: inherit;
}
.links {
  position: absolute;
  padding: 10px;
  display: flex;
  gap: 10px;
}
.body {
  padding: 15px;
}
:slotted(p) {
  font-size: 16px;
}
</style>