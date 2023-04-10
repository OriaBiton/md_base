<template>
  <div class="blog-slider__item">
    <div class="blog-slider__img">
      <img :src="update.img" :alt="update.title">
    </div>
    <div class="blog-slider__content">
      <div>
        <span class="blog-slider__code">{{ update.date }}</span>
        <div class="blog-slider__title">{{ update.title }}</div>
      </div>
      <div class="blog-slider__text" v-html="update.content" />
      <nuxt-link :to="update.link" class="blog-slider__button">
        {{ update.linkText }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Update } from '~~/types';

defineProps<{
  update: Update;
}>();
</script>

<style scoped>
.swiper-slide-active .blog-slider__img img {
  opacity: 1;
  transition-delay: 0.3s;
}
.blog-slider__item {
  display: flex;
  align-items: center;
}
.swiper-slide-active .blog-slider__content > * {
  opacity: 1;
  transform: none;
}
.blog-slider__img {
  width: 55%;
  flex-shrink: 0;
  height: 43rem;
  background: var(--highlight);
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  transform: translateX(-80px);
  overflow: hidden;
}
.blog-slider__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
  opacity: 0;
  border-radius: 20px;
  transition: all 0.3s;
}
.blog-slider__content {
  padding-right: 15px;
  padding-top: 30px;
  direction: rtl;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.blog-slider__content > * {
  opacity: 0;
  transform: translateY(25px);
  transition: all 0.4s;
}
.blog-slider__code {
  margin-bottom: 15px;
  display: block;
  font-size: 16px;
}
.blog-slider__title {
  font-size: 30px;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 20px;
}
.blog-slider__text {
  color: var(--dark);
  margin-bottom: 30px;
  line-height: 1.5em;
  font-size: 20px;
}
.blog-slider__button {
  display: inline-flex;
  background: var(--highlight);
  color: var(--brightest);
  padding: 10px 25px;
  border-radius: 50px;
  box-shadow: 0px 14px 80px rgba(252, 185, 56, 0.1);
  text-decoration: none;
  font-weight: 500;
  justify-content: center;
  text-align: center;
  letter-spacing: 1px;
  font-size: 20px;
}

@media (max-width: 600px) {
  .blog-slider__item {
      flex-direction: column;
  }
  .blog-slider__img {
      transform: translateY(-50%);
      width: 95%;    
      height: 270px;
  }
  .blog-slider__content {
      margin-top: -80px;
      text-align: center;
      padding: 0;
   }
}
</style>