<template>
  <div>
    <ServicesSection />
    <DomeCurveSvg />
    <VisitSection />
    <ChannelsSection />
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  setReveal();
});

function setReveal() {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.remove('reveal');
        observer.unobserve(entry.target);
      }
    });
  });
  document.querySelectorAll('.reveal').forEach(r => observer.observe(r));
}
</script>

<style scoped>
main {
  width: unset;
  margin: unset;
  padding: unset;
}
main > .container{width: unset;}
section{
  padding-bottom: 20rem;
  padding-top: 3rem;
  position: relative;
}
</style>