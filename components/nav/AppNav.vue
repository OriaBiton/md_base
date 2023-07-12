<template>
  <nav>
    <TopNav @burgerClick="expanded = true" />
    <SideNav v-model="expanded" />
    <ScreenDarkener v-model="expanded" />
  </nav>
</template>

<script setup lang="ts">
const expanded = ref(false);
</script>

<style scoped>
@media (max-width: 600px) {
  .top-nav{background-color: var(--brightest);}
  .top-nav ul{
    margin: 0 auto;
    justify-content: space-between;
    width: 100%;
  }
  .top-nav li{
    margin-left: 0;
    font-size: 1.4rem;
  }
  .top-nav .link, .top-nav .icons{
    display: none;
  }
  .top-nav-wrapper{
    width: 95%;
  }  
}
</style>