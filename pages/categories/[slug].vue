<template>
  <div>
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
                <Item v-for="p in category.data.items" :product="p" :key="p.id"/>
              </template>
            </div>
          </div>
        </section>
      </div>
    </div>
</template>

<script setup>

const route = useRoute();
const slug = route.params.slug || '';
const uri = `https://dev.gurmenu.com/api/v2/restaurant/category/`;
const {data: category, pending: categoryPending, error, pending} = await useFetch(uri, {
  key: slug,
  method: 'POST',
  body: {
    restaurant: 'mezbaakarakoy',
    locale: 'tr',
    category: slug,
  },
})
</script>
<style scoped>

</style>
