<template>
  <div class="updates">
    <div class="blog-slider">  
      <h3>
        עדכונים <Icon name="fa6-solid:bullhorn" size="44" />
      </h3>
        <Swiper
          :loop="true"
          :mousewheel="{ invert: false }"
          :pagination="{
            el: '.blog-slider__pagination',
            clickable: true
          }"
          space-between="30"
          effect="fade"
        >
          <SwiperSlide v-for="(update, i) in UPDATES" :key="i">
            <HomeHeaderUpdate :update="update" />
          </SwiperSlide>
        </Swiper>
        <div class="blog-slider__pagination"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Update } from '../../types';

const UPDATES: Update[] = [
  {
    title: "מכירת חמץ אונליין",
    content: "הציבור מוזמן למכור את החמץ בטופס דיגיטלי כאן באתר",
    date: "א' ניסן תשפ\"ג",
    img: "/images/hametz-sale.jpeg",
    link: "/kosher/hametz-sale",
    linkText: "למילוי הטופס"
  }
];
</script>

<style scoped>
.updates{
  transform: scaleY(0);
  animation: scaleUp .7s forwards;
}
@keyframes scaleUp {
  to {transform: scaleY(1)}
}
.blog-slider {
  position: relative;
  background: rgba(255, 255, 255, .9);
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 25px;
  border-radius: 25px;
  transition: all 0.3s;
  direction: ltr;
}
.blog-slider::before{
  /* content: ''; */
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(6rem);
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 1);
  border-radius: inherit;
}
h3 {
  margin: 0;
  direction: rtl;
  font-size: 52px;
  position: absolute;
  top: 2rem;
  right: 35px;
  color: var(--highlight);
}
h3 .icon {
  margin-right: 10px;
  transform: scaleX(-1);
  animation: wiggle 1s linear infinite;
}
@keyframes wiggle {
  50% {transform: scaleX(-1) rotate(8deg);}
  100% {transform: scaleX(-1) rotate(0);}
}
.blog-slider .swiper-container-horizontal > .swiper-pagination-bullets, .blog-slider .swiper-pagination-custom, .blog-slider .swiper-pagination-fraction {
  bottom: 10px;
  left: 0;
  width: 100%;
}
.blog-slider__pagination {
  position: absolute;
  z-index: 1;
  width: 11px !important;
  text-align: center;
  right: 2rem;
  left: auto !important;
  top: 50%;
  bottom: auto !important;
  transform: translateY(-50%);
}
:deep(.swiper) {
  overflow: unset;
}
:deep(.swiper-pagination-bullet) {
  margin: 8px 0 !important;
  width: 11px;
  height: 11px;
  display: block;
  border-radius: 10px;
  background: #062744;
  opacity: 0.2;
  transition: all 0.3s;
}
:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  background: var(--highlight);
  height: 30px;
  box-shadow: 0px 0px 20px rgba(252, 56, 56, 0.3);
}
@media (max-width: 600px) {
  .updates{width: unset;}
  :deep(.swiper-pagination-bullet-active) {
    height: 11px;
    width: 30px;
 }
 :deep(.swiper-pagination-bullet) {
    margin: 0 5px;
  }
  .blog-slider__pagination {
    transform: translateX(-50%);
    left: 50% !important;
    top: 205px;
    width: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
 }
  .blog-slider {
    max-width: 680px;
    height: 400px;
    min-height: 500px;
    height: auto;
    margin: 18rem auto 3rem auto;
    height: 350px;
    padding-top: 3px;
    padding-bottom: 4rem;
 }
}
</style>