<template>
  <img class="bg-img" src="/images/hero.jpeg">
  <div class="hero-wrapper">
    <div class="hero">
      <h1 title="המועצה הדתית יבנה">
        <img src="/images/logo.png" alt="לוגו מועצה" class="whiten">
      </h1>
      <div class="header-buttons">
        <a href="#services" class="btn cta">שירותי המועצה</a>
        <a href="#communicate" class="btn">יצירת קשר</a>
      </div>
    </div>
    <HomeHeaderUpdates />
  </div>
  <HomeHeaderWave />
</template>

<style scoped>
header .bg-img{
  min-height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: .8;
  mask-image: linear-gradient(to right, rgb(0, 0, 0), rgba(0,0,0,0));
  -webkit-mask-image: linear-gradient(to right, rgb(0, 0, 0), rgba(0,0,0,0));
  filter: saturate(1.3) brightness(1.3);
}
header .container{
  position: relative;
  text-align: center;
}
.hero-wrapper{
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 13rem 0 20rem 0;
}
.logo-container{
  text-align: right;
  padding-top: 6.5rem;
}
.hero{width: 45%;}
.updates{width: 45%;}
header a.btn{
  padding: 2rem 6rem;
  background-color: var(--secondary);
  color: var(--bright);
  font-size: 2.1rem;
  border-radius: 10rem;
  cursor: pointer;
  transition: .2s;
  display: inline-block;
}
header a.btn.cta{
  background: var(--grad1);
}
header a.btn:hover{
  background-color: var(--dark);
  color: var(--bright);
}
header a.btn.cta:hover{
  background: var(--highlight);
  color: var(--dark);
}
.header-buttons{
  animation: floatUp .7s ease .8s forwards;
  margin-top: 10rem;
  opacity: 0;
  transform: translateY(2rem);
}
@keyframes floatUp {
  to{transform: translateY(0); opacity: 1;}
}
.header-buttons .btn:first-child{
  margin-left: 5rem;
}

header .wave-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}
header .wave-bottom svg {
  position: relative;
  display: block;
  width: calc(138%);
  height: 150px;
}
header .wave-bottom .shape-fill {
  fill: url(#MyGradient);
}
@media screen and (max-width: 750px) {
  header .wave-bottom{width: 190%;}
  header .bg-img{
    height: 100%;
    object-fit: cover;
    mask-image: linear-gradient(to top, rgb(0, 0, 0), rgba(0,0,0,0));
    -webkit-mask-image: linear-gradient(to top, rgb(0, 0, 0), rgba(0,0,0,0));
    min-width: 100%;
  }
  .hero{width: unset;}
  .hero-wrapper{
    width: 95%;
    display: block;
    padding-top: 7rem;
  }
  header a.btn{
    display: block;
    text-align: center;
  }
  .hero .logo{
    min-height: 6rem;
  }
  .header-buttons{
    margin-top: 5rem;
  }
  .header-buttons .btn:first-child{
    margin-left: 0;
    margin-bottom: 2rem;
  }
  .logo-container{
    height: 7rem;
    margin-bottom: 5rem;
  }
  .updates {
    width:  unset;
  }
}
</style>