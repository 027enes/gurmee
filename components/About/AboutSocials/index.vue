<template>
  <div>

    <section id="socials">
      <div class="container">
        <Swiper
            class="about-Slider"
            :loop="false"
            :modules="[ Autoplay, Scrollbar]"
            :slides-per-view="slidesPerView"
            :space-between="20"
            :breakpoints="breakpoints"
            :scrollbar="{ draggable: true, hide: false }" 
            :draggable="true"
        >
          <swiper-slide>
            <div class="slide-socials" data-bs-toggle="modal" data-bs-target="#address-modal">
              <div class="socials-content">
                <nuxt-icon name="instagram" class="Socials"></nuxt-icon>
                
              </div>
              <span>Instagram</span>
            </div>
          </swiper-slide>
        </Swiper>
      </div>
    </section>
  </div>
</template>

<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Pagination, Autoplay, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';  


import { ref } from 'vue';
const slidesPerView = ref(2);
const breakpoints = ref({
  // when window width is <= 768px
  768: {
    slidesPerView: 2,
  },
  // when window width is <= 1024px
  1024: {
    slidesPerView: 3,
  },
  // when window width is <= 1200px
  1200: {
    slidesPerView: 4,
  },
  // when window width is <= 1600px
  1600: {
    slidesPerView: 5,
  },
});

</script>

<style lang="scss" scoped>
    
</style>