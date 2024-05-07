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
      <client-only>
        <vue-bottom-sheet ref="sheetsScore" class="bottomSheet" :max-height="1000">
          <BottomSheetsAbout />
        </vue-bottom-sheet>
    </client-only>
    </div>
  </template>
  
  <script setup>
    import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
    import  "@webzlodimir/vue-bottom-sheet/dist/style.css";
    import BottomSheetsAbout from "@/components/BottomSheets/About/index.vue";

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
  