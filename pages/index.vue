<template>
    <div>
            <section id="line"></section>
            <section id="products">
                <div class="container">
                    <div class="products-row rectangle">
                        <div  v-for="category in categories.data" :key="category.id">
                            <Category :category="category"/>
                        </div>
                    </div>
                </div>
            </section>


    </div>
</template>

<script setup>
    const {data : categories } =  useFetch('https://dev.gurmenu.com/api/v2/restaurant/categories', {
        method: 'POST',
        body: {
            restaurant: 'mezbaakarakoy',
            locale: 'tr'
        }
    })
</script>
    
<style lang="scss" scoped>

</style>