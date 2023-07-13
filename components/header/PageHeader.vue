<template>
  <div class="wrapper">
    <img :src="img.src" :alt="img.alt" class="bg">
    <div class="logo">
      <img src="/images/logo.png" alt="לוגו המועצה" class="whiten">
    </div>
    <h1>{{ header }}</h1>
  </div>
</template>

<script setup lang="ts">
const { header, img } = usePageHeader();
</script>

<style scoped>
.wrapper {
  height: 400px;
  position: relative;
  overflow: hidden;
}
.bg {
  position: absolute;
  object-position: center;
  object-fit: cover;
  height: 100%;
  width: 100%;
  filter: blur(15px);
}
.logo, h1 {
  position: absolute;
  border-radius: 3px;
  background-color: var(--secondary);
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
}
.logo {
  height: 100px;
  top: 80px;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  left: 0;
  padding: 0 20px 0 50px;
}
h1 {
  bottom: 20px;
  right: 0;
  padding: 0 50px 10px 20px;
  display: inline-block;
  font-size: 66px;
  margin: 0;
  color: var(--brightest);
}
h1::after {
  content: '';
  width: calc(100% - 20px);
  height: 9px;
  background-color: var(--highlight);
  position: absolute;
  right: 0;
  bottom: 5px;
  border-radius: 0 0 0 1rem;
}

@media (max-width: 600px) {
  h1 {
    font-size: 33px;
    padding-right: 15px;
  }
  .logo {
    padding-left: 15px;
    height: 60px;
  }
}
</style>