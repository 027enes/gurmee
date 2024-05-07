<template>
    <div>
        <main class="about-height">
            <AboutSlider :aboutSlider="restaurant.data"/>
            <AboutDescription :aboutDescription="restaurant.data"/>
            <AboutSocials />
            <AboutSuggestions />
        </main>
    </div>
</template>

<script setup>
import AboutSlider from '@/components/About/AboutSlider/index.vue';
import AboutDescription from '@/components/About/AboutDescription/index.vue';
import AboutSocials from '@/components/About/AboutSocials/index.vue';
import AboutSuggestions from '@/components/About/AboutSuggestions/index.vue';


const { data: restaurant } = useFetch('https://dev.gurmenu.com/api/v2/restaurant', {
        method: 'POST',
        body: {
            restaurant: 'mezbaakarakoy',
            locale: 'tr'
        }
})


</script>

<style lang="scss" scoped>

</style>