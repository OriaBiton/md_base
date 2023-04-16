<template>
  <footer>
    <div class="container">
      <img src="/images/logo.png" class="logo whiten">
      <div>
        <h3>קישורים רלוונטיים</h3>
        <li>
          <a href="https://www.yavne.muni.il/" target="_blank">
            עיריית יבנה
          </a>
        </li>
        <li>
          <a href="https://www.gov.il/he/departments/ministry_of_religious_services/govil-landing-page" target="_blank">
            המשרד לשירותי דת
          </a>
        </li>
        <li>
          <a href="https://www.gov.il/he/Departments/conversion_authority" target="_blank">
            מערך הגיור
          </a>
        </li>
        <li>
          <a href="https://www.gov.il/he/Departments/the_rabbinical_courts" target="_blank">
            בתי הדין הרבניים
          </a>
        </li> 
      </div>
      <div>
        <h3>משרדי המועצה</h3>
        <ul>
          <li>
            <a :href="`tel:${phoneRaw}`">
              <Icon name="fa-solid:phone-alt" size="20" class="ml-1" />
              {{ phone }}
            </a>
          </li>
          <li>
            <a :href="`mailto:${email}`">
              <Icon name="fa-envelope" size="20" class="ml-1" />
              {{ email }}
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3>דרכי התקשרות</h3>
        <div class="socials">
          <nuxt-link to="/contact">
            <Icon name="fa-envelope" size="30" />
          </nuxt-link>
          <a :href="`tel:${phoneRaw}`">
            <Icon name="fa-solid:phone-alt" size="30" />
          </a>
        </div>
      </div>
    </div>
    <p class="copyright">
      כל הזכויות שמורות למועצה הדתית יבנה
      •
      All rights reserved © {{ new Date().getFullYear() }}
    </p>
  </footer>
</template>

<script setup lang="ts">
import { siteConfigInjectionKey } from '../assets/injection-keys';
const { phone, phoneRaw, email } = inject(siteConfigInjectionKey)!;
</script>

<style scoped>
footer::before{
  width: 100%;
  background-color: inherit;
  height: 13rem;
  transform: skewY(3.5deg);
  content: '';
  display: block;
  position: absolute;
  top: -7rem;
}
footer {
  position:relative;
  text-align:center;
  background-color: #144775;
  color: var(--brightest);
  font-size: 18px;
}
.logo {
  height: 200px;
}
p{padding-top: 10rem;}
.container{
  display: flex;
  padding-top: 12rem;
  text-align: right;
  justify-content: space-between;
  flex-wrap: wrap;
}
h3{
  font-size: 20px;
  margin-bottom: 2rem;
}
li{
  list-style: none;
  margin-bottom: 1.2rem;
}
a{
  opacity: .8;
}
.icon {font-size: 2.2rem;}
:is(a, button):hover{opacity: 1 !important;}
.socials{
  display: flex;
  gap: 40px;
}
.copyright {
  font-size: 1.2rem;
  opacity: .8;
  margin-bottom: 0;
}
input {
  padding: 1rem;
  border-radius: 3rem;  
  text-align: left;
  height: unset;
  border: unset;
}
::placeholder{
  font-size: 1.4rem;
}
@media screen and (max-width: 750px) {
  .container{
    padding-top: 7rem;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
  }
  .container > *{margin-bottom: 3rem;}
}
</style>