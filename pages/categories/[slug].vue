<template>
    <div>
        <section id="products-content">
<<<<<<< HEAD
          <div class="container">
            <div class="p-products-items products-page-items" >
              <div class="p-products-item " id="openSheetgunun-corbasi11474" aria-controls="sheet"  v-for="p in category.data.items" :key="p.id">
                <div class="prod-cont">
                  <div class="p-products-top">
                    <div class="products-item-img">
                      <img :src="p.medias.cover.url" alt="ATIŞTIRMALIKLAR" loading="lazy"/>
                    </div>
                    <div class="products-item-text">
                      <h2 class="products-titlee">{{ p.title }}</h2>
                      <h2 class="products-sell">{{ p.price }} {{ p.currency }}</h2> 
                    </div>
                  </div>
=======
      <div class="container">
        <div class="p-products-items products-page-items" v-for="p in category.data.items" :key="p.id">
          <div class="p-products-item " id="openSheetgunun-corbasi11474" aria-controls="sheet">
            <div class="prod-cont">
              <div class="p-products-top">
                <div class="products-item-img">
                  <!-- Image -->
                </div>
                <div class="products-item-text">
                  <h2 class="products-titlee">{{ p.title }}</h2>
                  <h2 class="products-sell">75₺</h2>
>>>>>>> 253ed7318e8e0c4443f85efb180c18bc64fdb1db
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
=======
        </div>
      </div>
>>>>>>> 253ed7318e8e0c4443f85efb180c18bc64fdb1db
    </section>
    </div>
</template>

<script setup>
<<<<<<< HEAD
  import { ref } from 'vue';
  const route = useRoute();
  const slug = route.params.slug || '';
  const uri = `https://dev.gurmenu.com/api/v2/restaurant/category/`
  const { data: category } = await useFetch(uri, {
    key: slug,
    method: 'POST',
    body: {
      restaurant: 'mezbaakarakoy',
      locale: 'tr',
      category: slug,
    },
  });
  /*const banner = ref({
    title: category.data.title || 'Sample Title',
    subtitle: 'Sample Banner Subtitle',
    imageUrl: category?.data?.medias?.cover?.url || '',
  });*/
=======

const route = useRoute();
const slug = route.params.slug || '';
const uri = `https://dev.gurmenu.com/api/v2/restaurant/category/`
const { data: category } = await useFetch(uri, {
  key: slug,
  method: 'POST',
  body: {
    restaurant: 'mezbaakarakoy',
    locale: 'tr',
    category: slug,
  },
});
>>>>>>> 253ed7318e8e0c4443f85efb180c18bc64fdb1db

</script>
<style scoped>

</style>
