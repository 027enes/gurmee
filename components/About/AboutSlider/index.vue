<template>
    <div>
        <section id="about-slider">
            <Swiper
                class="aboutSlider"
                :loop="true"
                :modules="modules"
                :navigation="false"
                :slides-per-view="1"
                :space-between="150"
                @slideChange="onSlideChange"
                @swiper="onSwiper"
                :pagination="{ clickable: true }"
                :draggable="true"
            >
                    <swiper-slide v-for="(media, index) in aboutSlider.medias.photos" :key="index">
                        <img :src="media.url" alt="LaVita" />
                    </swiper-slide>
                    <div class="about-row">
                        <div class="about-top-row">
                            <h5 class="about-photo-content">{{ aboutSlider.opening_and_closing_time }}</h5>
                        </div>
                        <div class="about-bottom-row">
                            <div class="about-bottom-left">
                                <div class="about-bottom-icon">
                                    <img alt="LaVita" :src="aboutSlider.medias.logo.url">
                                </div>
                                <div class="about-bottom-text">
                                    <h2>{{aboutSlider.title}}</h2>
                                    <span>{{ aboutSlider.slogan_or_branch }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </Swiper>
        </section>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

    const {aboutSlider} = defineProps(['aboutSlider']);

const modules = [ Pagination, Autoplay];
</script>

<style scoped>

</style>