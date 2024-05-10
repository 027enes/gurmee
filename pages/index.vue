<template>
    <div>
        <div v-if="pending" >
                <div>Loading...</div>
            </div>
        <div v-else>
            <section id="line"></section>
            <section id="products">
                <div class="container">
                    <div class="products-row rectangle">
                        <div class="products-item"  v-for="category in categories" :key="category.id" >
                            <Category :category="category"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
    const {data : categories, pending} =  useFetch('https://dev.gurmenu.com/api/v2/restaurant/categories', {
        method: 'POST',
        body: {
            restaurant: 'mezbaakarakoy',
            locale: 'tr'
        }
    })

</script>
    
<style  scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>