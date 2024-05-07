<template>
    <div>
      <section id="address">
        <div class="container">
          <div class="opinion">
            <button class="opinion-btn" @click="openBottomSheet">
              Görüş ve Önerileriniz
            </button>
          </div>
        </div>
      </section>
      <vue-bottom-sheet ref="sheetsScore" class="bottomSheet" :max-height="1000">
        <AboutBottomSheet  />
      </vue-bottom-sheet>
    </div>
  </template>
  
  <script setup>
    import AboutBottomSheet from "@/components/BottomSheets/About/index.vue";
import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import  "@webzlodimir/vue-bottom-sheet/dist/style.css";
import { ref } from "vue";

const sheetsScore = ref(null)

const openBottomSheet = () => {
    sheetsScore.value.open();
}

const close = () => {
    sheetsScore.value.close();
}
  </script>
  
  <style lang="scss" scoped>
  </style>
  