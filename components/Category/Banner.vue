<script setup lang="ts">
const props = defineProps<{
  title: string
  image: string
  placeholder: string
  width: number
  height: number
}>()
</script>

<template>
  <section id="products-banner">
    <div class="banner-img" style="height: 120px">
        <NuxtImg 
          alt="ATIŞTIRMALIKLAR"
          loading="lazy" 
          :src="image"
          :placeholder="placeholder"
          :width="width"
          :height="height"
        />
    </div>
    <div class="container p-banner-text">
        <h2>{{ title }}</h2>
    </div>
</section>
</template>
<style scoped lang="scss">

</style>
