<template>
    <div>
        <div v-for="category in categories.data" :key="category.id">
            <h2>{{ category.title }}</h2>
        </div>
    </div>
</template>

<script setup>
    async function CategoriesList(){
        const { data : categories } = await useFetch('https://dev.gurmenu.com/api/v2/restaurant/categories', {
        method: 'POST',

    })
    }
</script>

<style lang="scss" scoped>

</style>