<template>
  <header>
    <HomeHeader v-if="$route.path == '/'" />
    <PageHeader v-else />
  </header>
</template>

<style scoped>
header {
  background: linear-gradient(130deg, var(--bright), var(--secondary));
  position: relative;
}
</style>