<script setup lang="ts">
const props = defineProps<{
  title: string
  image: string
}>()
</script>

<template>
  <section id="products-banner">
    <div class="banner-img" style="height: 120px">
        <img alt="ATIŞTIRMALIKLAR" loading="lazy" :src="image" />
    </div>
    <div class="container p-banner-text">
        <h2>{{ title }}</h2>
    </div>
</section>
</template>
<style scoped lang="scss">

</style>
