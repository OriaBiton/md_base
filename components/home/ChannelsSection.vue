<template>
  <section id="communicate">
    <HomeHeading>ערוצי תקשורת</HomeHeading>
    <div class="container">
      <div v-if="sideComponent">
        <component :is="sideComponent" />
      </div>
      <ul class="channels">
        <li class="phone">
          <a :href="`tel:${phone}`" target="_blank" rel="noopener noreferrer">
            <span>טלפון</span>
            <Icon name="fa-solid:phone-alt" />
          </a>
        </li>
        <li class="email">
          <a :href="`mailto:${email}`" target="_blank" rel="noopener noreferrer">
            <span>דוא"ל</span>
            <Icon name="fa-envelope" />
          </a>
        </li>
        <li class="feedback">
          <nuxt-link to="contact">
            <span>משוב</span>
            <Icon name="fluent:person-feedback-24-filled" />
          </nuxt-link>
        </li>
        <li v-if="facebook" class="facebook">
          <nuxt-link :to="facebook" target="_blank" rel="noopener noreferrer">
            <span>פייסבוק</span>
            <Icon name="fa-facebook" />
          </nuxt-link>
        </li>
        <li v-if="youtube" class="youtube">
          <nuxt-link :to="youtube" target="_blank" rel="noopener noreferrer">
            <span>יוטיוב</span>
            <Icon name="fa-youtube" />
          </nuxt-link>
        </li>
        <li v-if="whatsapp" class="whatsapp">
          <nuxt-link :to="whatsapp" target="_blank" rel="noopener noreferrer">
            <span>ווצאפ</span>
            <Icon name="fa-whatsapp" />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { siteConfigInjectionKey } from '../../assets/injection-keys';
const { communication, home } = inject(siteConfigInjectionKey)!;
const { phone, email, whatsapp, youtube, facebook } = communication;
const sideComponent = home.channelsSideComponent;
</script>

<style scoped>
section {
  background: aliceblue;
}
.container {
  display: flex;
}
.channels {
  display:flex;
  justify-content: space-evenly;
}
ul {
  flex-wrap: wrap;
  width: 100%;
}
li {
  margin: 4rem 5rem;
}

li .icon {
  font-size: 40px;
  line-height:80px;
  transition: .5s;  
  position: absolute;
  left: 25px;
  top: 15px;
}

li span {
  position:absolute;
  top: 30px;
  right: 14px;
  letter-spacing: 4px;
  transition: .5s;
  font-size: 1.8rem;
  font-weight: bold;
}

li a {
  display:absolute;
  display:block;
  width:210px;
  height:80px;
  background: #fff;
  padding-left: 20px;
  transform: rotate(-30deg) skew(25deg) translate(0,0);
  transition:.5s;
  box-shadow: -20px 20px 10px rgba(0,0,0,.5);
  color: var(--dark);
}
li a::before {
  content: '';
  position: absolute;
  top:10px;
  left:-20px;
  height:100%;
  width:20px;
  background: #b1b1b1;
  transform: .5s;
  transform: rotate(0deg) skewY(-45deg);
}
li a::after {
  content: '';
  position: absolute;
  bottom:-20px;
  right : 11px;
  height:20px;
  width:100%;
  background: #b1b1b1;
  transform: .5s;
  transform: rotate(0deg) skewX(-45deg);
}
li a:hover {
  transform: rotate(-30deg) skew(25deg) translate(20px,-15px);
  box-shadow: -50px 50px 50px rgba(0,0,0,.5);
}
li:hover .icon {color: var(--brightest);}
li:hover span {color: var(--brightest);}
.facebook:hover a{background: #3b5998;}
.facebook:hover a:before{background: #365492;}
.facebook:hover a:after{background: #4a69ad;}
.email:hover a{background: #00aced;}
.email:hover a:before{background: #097aa5;}
.email:hover a:after{background: #53b9e0;}
.feedback:hover a{background: #dd4b39;}
.feedback:hover a:before{background: #b33a2b;}
.feedback:hover a:after{background: #e66a5a;}
.youtube:hover a{background: #dd4b39;}
.youtube:hover a:before{background: #b33a2b;}
.youtube:hover a:after{background: #e66a5a;}
.phone:hover a{background: #cf39dd;}
.phone:hover a::before{background: #b32bac;}
.phone:hover a::after{background: #cf5ae6;}
.whatsapp:hover a{background: #39dd8b;}
.whatsapp:hover a::before{background: #2bb35f;}
.whatsapp:hover a::after{background: #5ae690;}


@media (max-width: 600px) {
  .channels {
    justify-content: end;
    flex-wrap: wrap;
  }
  .channels li{
    margin: 4rem 0 1rem 2.5rem;
    list-style: none;
  }
  .channels li a{width: 13rem;}
}
</style>