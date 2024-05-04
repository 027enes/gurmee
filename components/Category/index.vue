<template>
  <div>

    <NuxtLink :to="'/products/' + category.slug" :key="category.slug" class="products-item  sag-bg" >
      <div class="products-img">
        <img alt="ATIŞTIRMALIKLAR" :src="category.medias.cover.url" loading="lazy">
      </div>
      <div class="product-text sag">
        <h3>{{ category.title }}</h3>
      </div>
    </NuxtLink>

  </div>
</template>

<script setup>
const {category} = defineProps(['category']);
</script>

<style lang="scss" scoped>

</style>