<template>
    <div>
      <h1>Puanlayın</h1>
        <form method="post" class="form-star">
          <input type="hidden" autocomplete="off">
          <input id="restaurant_id" type="hidden" name="restaurant_id" value="60">
  
          <div class="star-row">
            <h5>Menü</h5>
        test

            <div class="clasificacion">
              <input id="menu5" type="radio" name="menuRating" value="5" >
              <label for="menu5">&#9733;</label>
              <input id="menu4" type="radio" name="menuRating" value="4" >
              <label for="menu4">&#9733;</label>
              <input id="menu3" type="radio" name="menuRating" value="3" >
              <label for="menu3">&#9733;</label>
              <input id="menu2" type="radio" name="menuRating" value="2" >
              <label for="menu2">&#9733;</label>
              <input id="menu1" type="radio" name="menuRating" value="1" >
              <label for="menu1">&#9733;</label>
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