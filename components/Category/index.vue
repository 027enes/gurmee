<template>

    <NuxtLink :to="'/categories/' + category.slug" :key="category.id" class="products-link  sag-bg">
      <div class="products-img">
        <NuxtImg alt="ATIŞTIRMALIKLAR" 
          :src="category.medias.cover.conversions.optimized.url" 
          :placeholder="category.medias.cover.conversions.optimized.placeholder" 
          loading="lazy"
          height="category.medias.cover.conversions.optimized.height"
          width="category.medias.cover.conversions.optimized.width" 
        />
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

