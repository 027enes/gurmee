<template>
    <div v-if="pending">
        <h1>Loading...</h1>
    </div>
      <div v-else-if="error" class="error">
          <nuxt-icon name="error" filled class="icon-font error-icon"></nuxt-icon>
          <h1 class="error-title">
            Aradığınız sayfa bulunamadı.
          </h1>
          <h2 class="error-subtitle">
            Kapatıp tekrar açmayı denediniz mi?
          </h2>
          <NuxtLink to="/" class="errorBtn">Anasayfaya Dön</NuxtLink>
      </div>
    <div v-else>
      <Banner v-if="!categoryPending" :title="category.data.title" :image="category.data.medias.cover.url"/>
      <section id="products-content">
      <div class="container">
        <div class="p-products-items products-page-items">
          <template v-if="categoryPending">
            Kategoriler bekleniyor...
          </template>
         <template v-else>
           <div class="p-products-item"  @click="openSheet(p)"  v-for="p in category.data.items" :key="p.id">
             <div class="prod-cont">
               <div class="p-products-top">
                 <div class="products-item-img">
                   <img :src="p.medias.cover?.url" alt="product image" />
                 </div>
                 <div class="products-item-text">
                   <h2 class="products-titlee">{{ p.title }}</h2>
                   <h2 class="products-sell">{{p.price}} {{ p.currency }}</h2>
                 </div>
               </div>
             </div>
           </div>
         </template>
        </div>
      </div>
    </section>
    </div>
    <client-only>
        <vue-bottom-sheet ref="categorSheets" :max-height="1000">
          <categorySheet
    :title="selectedProduct.title"
    :price="selectedProduct.price"
    :image="selectedProduct.medias.cover?.url"
    :description="selectedProduct.description"
    :allergens="selectedProduct.allergens"
/>
        </vue-bottom-sheet>
    </client-only>
</template>

<script setup>

  import { ref } from 'vue';
  import Banner from "~/components/Category/Banner.vue";
  import categorySheet from "~/components/CategorySheets/index.vue";
  const route = useRoute();
  const slug = route.params.slug || '';
  const uri = `https://dev.gurmenu.com/api/v2/restaurant/category/`;
  const { data: category, pending: categoryPending , error, pending} = await useFetch(uri, {
    key: slug,
    method: 'POST',
    body: {
      restaurant: 'mezbaakarakoy',
      locale: 'tr',
      category: slug,
    },
  });
/*
  const banner = ref({
    title: category.data.title || 'Sample Title',
    subtitle: 'Sample Banner Subtitle',
    imageUrl: category?.data?.medias?.cover?.url || '',
  });
*/
import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import  "@webzlodimir/vue-bottom-sheet/dist/style.css";


const categorSheets = ref(null);
const selectedProduct = ref(null);

const openSheet = (product) => {
    selectedProduct.value = product;
    categorSheets.value.open();
};

const close = () => {
    categorSheets.value.close();
};

</script>
<style scoped>

</style>
