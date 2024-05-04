<template>
    <div>

        <Head>
            <Title>{{restaurant.data.title}}</Title>
            <meta name="description" :content="restaurant.data.description" />
        </Head>

        <header id="header" class="header-top">
            <div class="container">
                <div class="header-top-row">
                    <NuxtLink to='/' class="header-top-left ">
                        <h2>{{restaurant.data.title}}</h2>
                        <h5>Restaurant Coffee</h5>
                    </NuxtLink>
                    <div class="header-top-right ">
                        <Language />


                    </div>
                </div>
            </div>
        </header>
        
    </div>
</template>

<script setup>

    const { data: restaurant } = useFetch('https://dev.gurmenu.com/api/v2/restaurant', {
        method: 'POST',
        body: {
            restaurant: 'mezbaakarakoy',
            locale: 'tr'
        }
    })

</script>

<style scoped>

</style>