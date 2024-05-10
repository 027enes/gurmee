<template>
  <div class="search-bottom">
    <form @submit.prevent="fetchData">
      <div class="search-input">
        <label for="search-input"></label>
        <input id="search-input" v-model="searchInput" type="text" placeholder="Arama yapın..." >
        <button type="submit">Search</button>
        <button type="reset" @click="resetSearch"><i class="fa-regular fa-circle-xmark"></i></button>
      </div>
    </form>
    <div class="p-products-items" id="search-results">
      <div class="p-products-item" v-for="item in search.data" :key="item.id">
        <div class="products-item-img">
          <img :src="item.medias.cover?.url" :alt="item.name">
        </div>
        <div class="products-item-text">
          <h2 class="products-title">{{ item.title }}</h2>
          <h2 class="products-sell">{{ item.price }}₺</h2>
        </div>
      </div>
    </div>
  </div>
</template>


<script  setup>
  const {data : search, pending ,searchString: string} =  useFetch('https://dev.gurmenu.com/api/v2/restaurant/items/search', {
    method: 'POST',
    body: {
      restaurant: 'mezbaakarakoy',
      locale: 'tr',
      search: 'pizza',
    },
  });

</script>

<style lang="scss" scoped>
</style>
