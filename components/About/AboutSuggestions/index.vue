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
          <h1>Puanlayın</h1>
        <form method="post" class="form-star">
          <input type="hidden" autocomplete="off">
          <input id="restaurant_id" type="hidden" name="restaurant_id" value="60">
  
          <div class="star-row">
            <h5>Menü</h5>
            <div class="clasificacion">
              <input id="menu5" type="radio" name="menuRating" value="5" v-model="menuRating">
              <label for="menu5">&#9733;</label>
              <input id="menu4" type="radio" name="menuRating" value="4" v-model="menuRating">
              <label for="menu4">&#9733;</label>
              <input id="menu3" type="radio" name="menuRating" value="3" v-model="menuRating">
              <label for="menu3">&#9733;</label>
              <input id="menu2" type="radio" name="menuRating" value="2" v-model="menuRating">
              <label for="menu2">&#9733;</label>
              <input id="menu1" type="radio" name="menuRating" value="1" v-model="menuRating">
              <label for="menu1">&#9733;</label>
            </div>
          </div>
  
          <div class="sheet-message">
                            <textarea class="n-message" name="comment" id="" cols="30" rows="3"
                                      placeholder="Görüş veya önerileriniz"></textarea>
                    </div>
                    <button class="sheet-submit" type="submit">Gönder</button>
        </form>
        </vue-bottom-sheet>
    </client-only>
    </div>
  </template>
  
  <script setup>
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
  