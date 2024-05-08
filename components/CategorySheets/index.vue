<template>
    <div>
        <main class="body fill column">
            <div class="sheets-img">
                <img :src="image" alt="Product Image" />
            </div>

            <div class="sheets-title-row products-item-text">
                <h2 class="products-title">{{ title }}</h2>
                <h2 class="products-sell">{{ price }}₺</h2>
            </div>

            <div class="sheets-text-cal">
                <!-- Additional details can be added here -->
            </div>

            <div class="sheet-desc">
                <p>{{ description }}</p>
                <p>
                    <b>Alerjenler:</b> {{ allergens }}
                </p>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String,
    price: Number,
    image: String,
    description: String,
    allergens: String
});
</script>

<style lang="scss" scoped>
</style>