<template>
    <div>
        <section id="products-content">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
</template>

<script setup>

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

</script>
<style scoped>

</style>
