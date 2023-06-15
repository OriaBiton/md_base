<template>
  <section id="services">      
    <HomeHeading>שירותי המועצה</HomeHeading>
    <div class="container">
      <div class="cards">
        <LinkCard
          v-for="service in services"
          :key="service.name"
          :to="service.url"
          :image="service.img"
          :name="service.name"
        />
      </div>
    </div>
    <Icon name="fa6-solid:star-of-david" class="star big" />
    <Icon name="fa6-solid:star-of-david" class="star small" />
  </section>
</template>

<script setup lang="ts">
import { siteConfigInjectionKey } from '../../assets/injection-keys';
const { services } = inject(siteConfigInjectionKey)!.home;
</script>

<style scoped>
section {
  padding-top: 10rem;
  background: linear-gradient(to bottom, var(--bright), var(--brightest));
}
.cards{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  z-index: 1;
}
.star{
  color: var(--primary);
  animation: rotate 10s linear infinite;
  position: absolute;
  opacity: 0.8;
}
.star.big{
  font-size: 50rem;
  right: -13rem;
  bottom: 20rem;
}
.star.small{
  font-size: 10rem;
  top: 20rem;
  left: 6rem;
}
@keyframes rotate { to {transform: rotate(360deg);} }

@media (max-width: 600px) {
  section {
    padding-top: 3rem;
    margin-bottom: 0;
  }
  .star.big {
    bottom: 0;
    font-size: 32rem;
  }
}
</style>