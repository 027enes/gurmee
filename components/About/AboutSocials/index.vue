<template>
  <div>

    <section id="socials">
      <div class="container">
        <Swiper
            class="aboutSlider"
            :loop="false"
            :modules="[ Autoplay, Scrollbar]"
            :slides-per-view="5"
            :space-between="20"
            :scrollbar="{ draggable: true, hide: false }" 
            @slideChange="onSlideChange"
            @swiper="onSwiper"
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

</script>

<style lang="scss" scoped>
    
</style>