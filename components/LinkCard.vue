<template>
  <div class="card">
    <nuxt-link :to="to" :target="external ? '_blank' : '_self'">
      <img :src="image" :alt="alt || name">
      <span class="text">
        <small v-if="subtitle">{{ subtitle }}</small>
        <h3>{{ name }}</h3>
      </span>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  to: string;
  external?: boolean;
  image: string;
  alt?: string;
  name: string;
  subtitle?: string;
}>();
</script>

<style scoped>
.card{
  margin: 3rem;
  box-shadow: 0 5px 15px -2px rgba(0, 0, 0, 0.1);
  border: 1px solid white;
  background-color: #fff;
  text-align: center;
  transition: .35s;
  display: inline-block;
  position: relative;
}
img{
  width: 21rem;
  border-radius: 3px 3px 0 0;
}
h3 {
  font-size: 24px;
  margin: 1.5rem 0;
  color: var(--dark);
  transition: color .2s;
  text-align: center;
}
a {
  display: flex;
  flex-direction: column;
}
a::after {
  content: '';
  width: 0;
  height: 5px;
  background-color: var(--highlight);
  position: absolute;
  right: 0;
  bottom: -3px;
  transition: .25s;
}
a:hover::after {
  width: 100%;
}
.text {
  padding: 8px;
  text-align: right;
}
small {
  color: var(--dark);
}

@media (max-width: 600px) {
  .card {
    margin: 1rem;
  }
  h3 {
    font-size: 18px;
  }
  .text {
    padding: 2px;
  }
  img{width: 15rem;}
}
</style>