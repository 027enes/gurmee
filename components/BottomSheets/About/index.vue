<template>
    <div>
        <h1>Puanlayın</h1>
        <form method="post" class="form-star">
          <input type="hidden" autocomplete="off">
          <input id="restaurant_id" type="hidden" name="restaurant_id" value="60">
  
          <!-- Menu Rating -->
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
  
          <!-- Fiyat Rating -->
          <div class="star-row">
            <h5>Fiyat</h5>
            <div class="clasificacion">
              <input id="fiyat5" type="radio" name="fiyatRating" value="5" v-model="fiyatRating">
              <label for="fiyat5">&#9733;</label>
              <input id="fiyat4" type="radio" name="fiyatRating" value="4" v-model="fiyatRating">
              <label for="fiyat4">&#9733;</label>
              <input id="fiyat3" type="radio" name="fiyatRating" value="3" v-model="fiyatRating">
              <label for="fiyat3">&#9733;</label>
              <input id="fiyat2" type="radio" name="fiyatRating" value="2" v-model="fiyatRating">
              <label for="fiyat2">&#9733;</label>
              <input id="fiyat1" type="radio" name="fiyatRating" value="1" v-model="fiyatRating">
              <label for="fiyat1">&#9733;</label>
            </div>
          </div>
  
          <!-- Servis Rating -->
          <div class="star-row">
            <h5>Servis</h5>
            <div class="clasificacion">
              <input id="servis5" type="radio" name="servisRating" value="5" v-model="servisRating">
              <label for="servis5">&#9733;</label>
              <input id="servis4" type="radio" name="servisRating" value="4" v-model="servisRating">
              <label for="servis4">&#9733;</label>
              <input id="servis3" type="radio" name="servisRating" value="3" v-model="servisRating">
              <label for="servis3">&#9733;</label>
              <input id="servis2" type="radio" name="servisRating" value="2" v-model="servisRating">
              <label for="servis2">&#9733;</label>
              <input id="servis1" type="radio" name="servisRating" value="1" v-model="servisRating">
              <label for="servis1">&#9733;</label>
            </div>
          </div>
  
          <!-- Nezaket Rating -->
          <div class="star-row">
            <h5>Nezaket</h5>
            <div class="clasificacion">
              <input id="nezaket5" type="radio" name="nezaketRating" value="5" v-model="nezaketRating">
              <label for="nezaket5">&#9733;</label>
              <input id="nezaket4" type="radio" name="nezaketRating" value="4" v-model="nezaketRating">
              <label for="nezaket4">&#9733;</label>
              <input id="nezaket3" type="radio" name="nezaketRating" value="3" v-model="nezaketRating">
              <label for="nezaket3">&#9733;</label>
              <input id="nezaket2" type="radio" name="nezaketRating" value="2" v-model="nezaketRating">
              <label for="nezaket2">&#9733;</label>
              <input id="nezaket1" type="radio" name="nezaketRating" value="1" v-model="nezaketRating">
              <label for="nezaket1">&#9733;</label>
            </div>
          </div>
  
          <!-- Ortam Rating -->
          <div class="star-row">
            <h5>Ortam</h5>
            <div class="clasificacion">
              <input id="ortam5" type="radio" name="ortamRating" value="5" v-model="ortamRating">
              <label for="ortam5">&#9733;</label>
              <input id="ortam4" type="radio" name="ortamRating" value="4" v-model="ortamRating">
              <label for="ortam4">&#9733;</label>
              <input id="ortam3" type="radio" name="ortamRating" value="3" v-model="ortamRating">
              <label for="ortam3">&#9733;</label>
              <input id="ortam2" type="radio" name="ortamRating" value="2" v-model="ortamRating">
              <label for="ortam2">&#9733;</label>
              <input id="ortam1" type="radio" name="ortamRating" value="1" v-model="ortamRating">
              <label for="ortam1">&#9733;</label>
            </div>
          </div>
          <div class="sheet-message">
                            <textarea class="n-message" name="comment" id="" cols="30" rows="3"
                                      placeholder="Görüş veya önerileriniz"></textarea>
                    </div>
                    <button class="sheet-submit" type="submit">Gönder</button>
        </form>
    </div>
  </template>
<script setup>

</script>

<style lang="scss" scoped>

</style>