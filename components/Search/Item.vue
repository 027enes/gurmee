<script setup lang="ts">
import "@webzlodimir/vue-bottom-sheet/dist/style.css";
import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import { ref } from "vue";
const {item} = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const bottomSheet = ref(null);
const openBottomSheet = () => {
    bottomSheet.value.open();
}
</script>

<template>
  <div class="p-products-item" v-on:click="openBottomSheet">
    <div class="products-item-img">
        <NuxtImg alt="ATIŞTIRMALIKLAR" 
                :src="item.medias.cover.conversions.optimized.url"  
                :placeholder="item.medias.cover.conversions.optimized.placeholder" 
                loading="lazy"
                height="item.medias.cover.conversions.optimized.height" 
                width="item.medias.cover.conversions.optimized.width" 
              />
    </div>
    <div class="products-item-text">
      <h2 class="products-titlee">{{ item.title }}</h2>
      <h2 class="products-sell">{{ item.price + item.currency }}</h2>
    </div>
  </div>
  <client-only>
    <vue-bottom-sheet ref="bottomSheet">
      <main class="body fill column">
        <div class="sheets-img">
            <NuxtImg alt="ATIŞTIRMALIKLAR" 
                :src="item.medias.cover.conversions.optimized.url"  
                :placeholder="item.medias.cover.conversions.optimized.placeholder" 
                loading="lazy"
                height="item.medias.cover.conversions.optimized.height" 
                width="item.medias.cover.conversions.optimized.width" 
              />
        </div>
        <div class="sheets-title-row products-item-text">
          <h2 class="products-title price-width">{{ item.title }}</h2>
          <h2 class="products-sell">{{ item.price + item.currency }}</h2>
        </div>

        <div class="sheets-text-cal">
          <!-- Additional details can be added here -->
        </div>

        <div class="sheet-desc">
          <p>{{ item.description }}</p>
          <p>
            <b>Alerjenler:</b> {{ item.allergens }}
          </p>
        </div>
      </main>
    </vue-bottom-sheet>
  </client-only>
</template>

<style scoped>

</style>