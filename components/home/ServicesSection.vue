<template>
  <section id="services">      
    <HomeHeading>שירותי המועצה</HomeHeading>
    <div class="container">
      <div class="cards">
        <LinkCard to="blessing" image="/images/gamliel-sqr.jpg" name="דברי ברכה" />
        <LinkCard to="kosher" image="/images/salmon.jpg" name="כשרות" />
        <LinkCard to="marriage" image="/images/rings.jpg" name="נישואין" />
        <LinkCard to="mikve" image="/images/mikve.jpg" name="מקוואות" />
        <LinkCard to="mourning" image="/images/cemetery-sqr.jpg" name="קבורה ואבלות" />
        <LinkCard to="eruvin" image="/images/eruv-sqr.jpg" name="עירוב שבת" />
        <LinkCard to="synagogues" image="/images/synagogue-sqr.jpg" name="בתי כנסת" />
        <LinkCard to="ethiopian" image="/images/eth-pray-sqr.jpg" name="לקהילה האתיופית" />
        <LinkCard to="jobs" image="/images/auction-sqr.jpg" name="משרות ומכרזים" />
      </div>
    </div>
    <Icon name="fa6-solid:star-of-david" class="star big" />
    <Icon name="fa6-solid:star-of-david" class="star small" />
  </section>
</template>

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