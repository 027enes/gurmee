<template>
    <div>
        <Header />
        <slot />
        <Footer />
        <BottomNavigation />
    </div>
</template>

<script setup>
  import Header from '@/components/Head/Header/index.vue'
  import Footer from '@/components/Head/Footer/index.vue'

</script>
<style scoped>

</style>