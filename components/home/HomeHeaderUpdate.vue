<template>
  <div class="blog-slider__item">
    <div class="blog-slider__img">
      <ExpandableImage :src="update.img.src" :alt="update.title" class="expandable" />
    </div>
    <div class="blog-slider__content">
      <div>
        <div class="blog-slider__title">{{ update.title }}</div>
        <span class="blog-slider__code">{{ update.date }}</span>
      </div>
      <div class="blog-slider__text" v-html="update.content" />
      <nuxt-link
        v-if="update.link"
        :to="update.link.href"
        :target="update.link.isFile ? '_blank' : '_self'"
        class="blog-slider__button"
      >
        {{ update.link.text }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Update } from '../../types';

defineProps<{
  update: Update;
}>();
</script>

<style scoped>
.blog-slider__item {
  display: flex;
  align-items: center;
}
.blog-slider__text {
  font-size: 18px !important;
  flex-grow: 1;
}
.swiper-slide-active .blog-slider__content > * {
  opacity: 1;
  transform: none;
}
.blog-slider__img {
  width: 50%;
  flex-shrink: 0;
  height: 43rem;
  background: var(--highlight);
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  transform: translateX(-80px);
  overflow: hidden;
}
.blog-slider__img .expandable,
.blog-slider__img :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: v-bind('update.img.position || "top"');
  display: block;
  opacity: 0;
  border-radius: 20px;
  transition: all 0.3s;
}
.swiper-slide-active .blog-slider__img .expandable,
.swiper-slide-active .blog-slider__img :deep(img) {
  opacity: 1;
  transition-delay: 0.3s;
}
.blog-slider__content {
  padding-right: 25px;
  padding-top: 30px;
  direction: rtl;
  height: 350px;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  margin-bottom: 5px;
}
.blog-slider__text {
  color: var(--dark);
  margin-bottom: 30px;
  line-height: 1.5em;
}
.blog-slider__button {
  display: inline-flex;
  background: var(--secondary);
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
    margin-top: -97px;
    text-align: center;
    padding: 0;
  }
}
</style>