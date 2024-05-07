<template>
    <div>
        <section id="address">
        <div class="container">

            <div class="opinion">
                <button class="opinion-btn"  @click="open">
                    Görüş ve Önerileriniz
                </button>
            </div>
        </div>
    </section>
    <template>
        <vue-bottom-sheet ref="myBottomSheet">
            <h1>Lorem Ipsum</h1>
            <h2>What is Lorem Ipsum?</h2>
            <p>
            <strong>Lorem Ipsum</strong> is simply dummy text
            </p>
        </vue-bottom-sheet>
    </template>
    </div>
</template>

<script setup>
import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import  "@webzlodimir/vue-bottom-sheet/dist/style.css";
import { ref } from "vue";

const myBottomSheet = ref(null)

const open = () => {
  myBottomSheet.value.open();
}

const close = () => {
  myBottomSheet.value.close();
}
</script>

<style lang="scss" scoped>

</style>