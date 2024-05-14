<template>
  <!-- Arama bölümünü ve sonuçları içeren bir div -->
  <div class="search-bottom">
    <!-- Arama formu, arama yapma ve sıfırlama butonları -->
    <form @submit.prevent="fetchData"> <!-- Form gönderimi engellenir ve fetchData fonksiyonu çağrılır -->
      <div class="search-input">
        <label for="search-input"></label> <!-- Etiketi, boş bırakılmış -->
        <input id="search-input" v-model="searchInput" type="text" placeholder="Arama yapın..."> <!-- Kullanıcıdan arama girdisini alır ve searchInput değişkenine bağlar -->
        <button type="submit">Search</button> <!-- Arama butonu, formu gönderir -->
        <button type="reset" @click="resetSearch"><i class="fa-regular fa-circle-xmark"></i></button> <!-- Sıfırlama butonu, resetSearch fonksiyonunu çağırır -->
      </div>
    </form>
    <!-- Arama sonuçlarını gösteren bölüm -->
    <div class="p-products-items" id="search-results" v-if="searchInput"> <!-- Eğer arama girdisi varsa bu div görüntülenir -->
      <!-- Arama sonuçları varsa -->
      <template v-if="searchResult.searchResults.length"> <!-- Eğer arama sonuçları varsa bu template çalışır -->
        <!-- Her bir arama sonucu için bir öğe oluştur -->
        <template v-for="item in searchResult.searchResults" :key="item.id"> <!-- Arama sonuçları üzerinden döngü yaparak her bir sonuç için bir div oluşturur -->
          <div class="p-products-item" @click="openBottomSheet"> <!-- Ürün tıklandığında openBottomSheet fonksiyonunu çağırır -->
            <div class="products-item-img">
              <!-- Ürün görseli -->
              <NuxtImg alt="ATIŞTIRMALIKLAR" 
                :src="item.medias.cover.conversions.optimized.url"  <!-- Ürün görselinin URL'si -->
                :placeholder="item.medias.cover.conversions.optimized.placeholder" <!-- Görsel yüklenirken gösterilecek placeholder -->
                loading="lazy" <!-- Görselin tembel yüklenmesini sağlar -->
                height="item.medias.cover.conversions.optimized.height" <!-- Görsel yüksekliği -->
                width="item.medias.cover.conversions.optimized.width"  <!-- Görsel genişliği -->
              />
            </div>
            <div class="products-item-text">
              <!-- Ürün başlığı ve fiyatı -->
              <h2 class="products-title">{{ item.title }}</h2> <!-- Ürün başlığını gösterir -->
              <h2 class="products-sell">{{ item.price }} {{ item.currency }}</h2> <!-- Ürün fiyatını ve para birimini gösterir -->
            </div>
          </div>
        </template>
      </template>
      <!-- Arama sonuçları yoksa ve hata varsa -->
      <template v-else-if="searchResult.searchResultsError"> <!-- Eğer arama sonuçları yoksa ve hata varsa bu template çalışır -->
        <div class="p-products-item">
          <div class="not-page">
            <h2 class="products-title">Ürün Bulunamadı</h2> <!-- Ürün bulunamadı mesajını gösterir -->
          </div>
        </div> <!-- Hata mesajını göster -->
      </template>
    </div>
  </div>
</template>


<script setup>
import { ref, watch } from 'vue'; // Vue'den ref ve watch fonksiyonlarını import ediyoruz
import { useDebounceFn } from '@vueuse/core'; // @vueuse/core'dan useDebounceFn fonksiyonunu import ediyoruz

const searchInput = ref(''); // Arama girdisi için bir ref oluşturuyoruz
const searchResult = ref({
  searchResults: [], // Arama sonuçlarını depolamak için bir dizi
  searchResultsError: null, // Hata durumunu depolamak için bir değişken
  searchResultsPending: false, // Aramanın bekleme durumunu depolamak için bir değişken
  searchResultsStatus: null // Arama durumunu depolamak için bir değişken
});

async function fetchData() {
  if (!searchInput.value) { // Eğer arama girdisi boşsa
    searchResult.value = {
      searchResults: [], // Arama sonuçlarını boş bir dizi olarak ayarla
      searchResultsError: null, // Hata durumunu null olarak ayarla
      searchResultsPending: false, // Bekleme durumunu false olarak ayarla
      searchResultsStatus: null // Arama durumunu null olarak ayarla
    };
    return;
  }

  searchResult.value.searchResultsPending = true; // Arama başlarken bekleme durumunu true olarak ayarla

  try {
    const response = await fetch('https://dev.gurmenu.com/api/v2/restaurant/items/search', {
      method: 'POST', // POST yöntemi kullanarak veri gönder
      headers: {
        'Content-Type': 'application/json' // JSON veri gönderileceğini belirt
      },
      body: JSON.stringify({
        restaurant: 'mezbaakarakoy', // Restoran ismi
        search: searchInput.value, // Arama girdisi
        locale: 'tr' // Dil bilgisi
      })
    });

    const data = await response.json(); // Gelen yanıtı JSON olarak ayrıştır
    console.log('Fetched data:', data); // Gelen veriyi konsola yazdır

    searchResult.value = {
      searchResults: data.data.length ? data.data : [], // Eğer veri varsa veriyi ayarla, yoksa boş bir dizi ayarla
      searchResultsError: data.data.length ? null : new Error('Ürün bulunamadı'), // Eğer veri yoksa hata ayarla
      searchResultsPending: false, // Bekleme durumunu false olarak ayarla
      searchResultsStatus: response.status // Yanıt durumunu ayarla
    };
  } catch (e) {
    console.log(e); // Hata varsa konsola yazdır
    searchResult.value = {
      searchResults: [], // Arama sonuçlarını boş bir dizi olarak ayarla
      searchResultsError: e, // Hata durumunu ayarla
      searchResultsPending: false, // Bekleme durumunu false olarak ayarla
      searchResultsStatus: null // Arama durumunu null olarak ayarla
    };
  }
}

const throttledSearch = useDebounceFn(fetchData, 200); // fetchData fonksiyonunu 200ms gecikmeyle çalıştırmak için bir debounce fonksiyonu oluştur

watch(
  () => searchInput.value, // searchInput değiştiğinde
  () => throttledSearch() // throttledSearch fonksiyonunu çağır
);

function resetSearch() {
  searchInput.value = ''; // Arama girdisini boşalt
  searchResult.value = {
    searchResults: [], // Arama sonuçlarını boş bir dizi olarak ayarla
    searchResultsError: null, // Hata durumunu null olarak ayarla
    searchResultsPending: false, // Bekleme durumunu false olarak ayarla
    searchResultsStatus: null // Arama durumunu null olarak ayarla
  };
}
</script>


<style  scoped>
</style>
