<template>
    <div>
        <div v-for="p in products.data.items" :key="p.id">
            <h1>{{ p.title }}</h1>
        </div>
    </div>
</template>

<script setup>

const { id } = useRoute().params;
const uri = `https://dev.gurmenu.com/api/v2/restaurant/category/${id}`;
const { data: products } = await useFetch(uri, { key: id },
        {
        method: 'POST',
        body: {
            restaurant: 'mezbaakarakoy',
            locale: 'tr',
            category: 'izgaralar',
        }
    });
</script>
<style lang="scss" scoped>

</style>
