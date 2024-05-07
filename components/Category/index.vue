<template>

    <NuxtLink :to="'/categories/' + category.slug" :key="category.id" class="products-link  sag-bg">
      <div class="products-img">
        <img alt="ATIŞTIRMALIKLAR" :src="category.medias.cover.url" loading="lazy"/>
      </div>
      <div class="product-text sag">
        <h3>{{ category.title }}</h3>
      </div>
    </NuxtLink>

</template>

<script setup>
const {category} = defineProps(['category']);

</script>

<style lang="scss" scoped>
</style>

