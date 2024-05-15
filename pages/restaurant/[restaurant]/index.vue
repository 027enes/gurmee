<template>
    <div>
        <div v-if="pending">
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
const {data: restaurant} = useNuxtData('restaurant')
import {useCategories} from "~/composables/useCategories";

const {
  data: categories,
  error: categoriesError,
  pending: categoriesPending,
} = useCategories(useRoute().params.restaurant)
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