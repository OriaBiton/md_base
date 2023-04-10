<template>
  <div :class="`tablet reveal ${type}`">
    <h3>
      <slot name="header">{{ header }}</slot>
    </h3>
    <div class="wrapper">
      <Icon :name="bodyIcon" size="50" />
      <h4>{{ bodyHeader }}</h4>
      <slot />
    </div>
    <slot name="footer" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  type: 'place' | 'time';
  header?: string;
  bodyIcon: string;
  bodyHeader: string;
}>();
</script>

<style scoped>
.tablet{
  width: 50%;
  background: url('/images/cracks-pattern.png'), var(--bright);
  background-size: cover;
  background-blend-mode: soft-light;
  border-radius: 15rem 15rem 1rem 1rem;
  padding: 80px 30px 30px;
  position: relative;
  left: 0;
  top: 0;
  box-shadow: 0px 14px 80px rgba(125, 125, 125, 0.2);
  transition: 2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  text-align: center;
}
.tablet.reveal{
  top: 30vh;
}
.tablet::before{
  font-size: 15rem;
  font-family: 'Noto Rashi Hebrew', serif;
  letter-spacing: 3vw;
  color: var(--highlight);
  opacity: .25;
  position: absolute;
  top: -2rem;
  right: 15px;
}
.tablet.time{margin-right: 1rem;}
.tablet.place{margin-left: 1rem;}
.tablet.place.reveal{
  left: 30vw;
}
.tablet.time.reveal{
  left: -30vw;
}
.tablet > *{
  transition: opacity .5s 1s;
}
.tablet.reveal > * {
  opacity: 0;
}
.gmap_canvas{width: 100%; height: 100%;}
h3{
  font-size: 3.5rem;
  margin-bottom: 4rem;
  margin-top: 0;
}
p{
  margin-bottom: 0;
}
.wrapper{
  background: rgba(255, 255, 255, 0.3);
  padding: 1rem;
  border-radius: 1rem;
}
h4 {font-size: 2rem; margin-bottom: 1.4rem;}

@media (max-width: 600px) {
  .tablet{width: unset;}
  .tablet.place{
    margin-left: unset;
    margin-bottom: 3rem;
  }
}
</style>