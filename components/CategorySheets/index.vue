<template>
    <div>
        <main class="body fill column" v-if="selectedProduct">
            <div class="sheets-img">
                <img :src="selectedProduct.medias.cover?.url" alt="Product Image" />
            </div>
            <div class="sheets-title-row products-item-text">
                <h2 class="products-title">{{ selectedProduct.title }}</h2>
                <h2 class="products-sell">{{ selectedProduct.price }}₺</h2>
            </div>

            <div class="sheets-text-cal">
                <!-- Additional details can be added here -->
            </div>

            <div class="sheet-desc">
                <p>{{ selectedProduct.description }}</p>
                <p>
                    <b>Alerjenler:</b> {{ selectedProduct.allergens }}
                </p>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
  selectedProduct: Object,
});
</script>

<style lang="scss" scoped>
</style>
