<template>
  <div>
    <!--<Head>
      <Link rel="icon" :href="restaurant.data.medias.favicon.url"/>
      <link rel="icon" type="image/x-icon" :href="restaurant.data.medias.favicon.url">
      <Meta name="description" :content="restaurant.data.meta.description"/>
      <Meta name="og:site_name" :content="restaurant.data.meta.title"/>
      <Meta name="og:image" :content="restaurant.data.meta.og_image"/>
    </Head>-->
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
<style scoped>

</style>