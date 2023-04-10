<template>
  <section id="location">
    <HomeHeading>מיקום ושעות פעילות</HomeHeading>
    <img src="/images/cloud.png" class="cloud" alt="ענן">
    <div class="tablets-wrapper container">
      <VisitSectionPlaceTablet />
      <VisitSectionTimeTablet />
    </div>
  </section>
</template>

<style scoped>
#location{
  margin-top: -3px;
  background: linear-gradient(to bottom,rgb(218, 238, 255), aliceblue);
}
img.cloud{
  position: absolute;
  top: 0;
  left: 5rem;
  z-index: 1;
  width: max(25rem, 32%);
  animation: cloudFloat 2.5s ease-in-out infinite;
}
@keyframes cloudFloat {
  50%{transform: translateY(-2rem) scaleX(1.05)}
  100%{transform: translateY(0) scaleX(1)}
}
.tablets-wrapper{
  display: flex;
  justify-content: center;
}

@media (max-width: 600px) {
  img.cloud{
    top: 19rem;
    left: 1rem;
  }
  .tablets-wrapper{display: block;}
}
</style>