<template>
  <div class="wrapper" :style="{ '--img': `url(${img})` }">
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
  background-image: var(--img);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  position: relative;
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
  padding: 0 50px 0 20px;
  display: inline-block;
  font-size: 66px;
  margin: 0;
  color: var(--brightest);
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