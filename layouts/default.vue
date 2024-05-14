<template>
  <div :class='restaurant?.data.theme'>
      <Head>
      <Link rel="icon" :href="restaurant?.data.medias.favicon.url"/>
      <Meta name="description" :content="restaurant?.data.meta.description"/>
      <Meta name="og:site_name" :content="restaurant?.data.meta.title"/>
      <Meta name="og:image" :content="restaurant?.data.meta.og_image"/>
    </Head>
    <NuxtLoadingIndicator />
      <Header/>
      <slot/>
      <Footer/>
      <BottomNavigation/>
  </div>
</template>

<script setup>
import Header from '@/components/Head/Header/index.vue'
import Footer from '@/components/Head/Footer/index.vue'
//import Search from '@/components/Head/Search/index.vue'
const { data: restaurant } = useFetch('https://dev.gurmenu.com/api/v2/restaurant', {
        method: 'POST',
        body: {
            restaurant: 'mezbaakarakoy',
            locale: 'tr'
        }
})


</script>
<style>
:root {
    --light: #ffffff;
    --dark: #000;
    --restaurant-color: #ff5400;
    --restaurant-theme: var(--dark);
    --text-right: end;
    --text-center: center;
    --text-left: start;
    --category-text-position: var(--text-center);
    --sheets-img-bg: 192, 131, 87;
}
</style>