<template>
    <div>
        <section id="p-about-desc">
            <div class="container">
                <h2>İşletme Hakkında</h2>
                <div class="about-content" :class="{'expanded': expanded}" @click="expanded = true">
                    <div v-html="aboutDescription.description"></div>
                </div>
                <div class="btn-about" :class="{'btn': btn}">
                    <button class="button-show" @click="toggleContent">
                        Daha Fazla Göster
                    </button>
                    <nuxt-icon name="back" class="icon-font"></nuxt-icon>

                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    const { aboutDescription } = defineProps(['aboutDescription']);
    const expanded = ref(false);
    const btn = ref(false);
    const toggleContent = () => {
        expanded.value = !expanded.value;
        btn.value = !btn.value;
    };
</script>

<style lang="scss" scoped>
</style>
