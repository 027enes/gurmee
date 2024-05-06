<template>
    <div>
        <section id="search">
    <div class="container">
        <div class="search-top">
            <div class="search-title">
                <h2>Arama Yap</h2>
            </div>
            <div class="search-close" id="sclose">
                <i class="fa-solid fa-x"></i>
                <span>Kapat</span>
            </div>
        </div>
        <div class="search-bottom">
            <form method="POST">
                <div class="search-input">
                    <label for="searchh">
                        <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_614_1113)">
                                <path d="M28 26.7642L20.5559 19.32C22.3215 17.2712 23.3905 14.6058 23.3905 11.6952C23.3904 5.24647 18.144 0 11.6952 0C5.24647 0 0 5.24647 0 11.6952C0 18.144 5.24647 23.3905 11.6952 23.3905C14.6058 23.3905 17.2712 22.3215 19.32 20.5559L26.7642 28.0001L28 26.7642ZM1.74779 11.6952C1.74779 6.2102 6.2102 1.74779 11.6952 1.74779C17.1803 1.74779 21.6427 6.2102 21.6427 11.6952C21.6427 17.1803 17.1803 21.6427 11.6952 21.6427C6.2102 21.6427 1.74779 17.1803 1.74779 11.6952Z"
                                      fill="#9C9C9C"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_614_1113">
                                    <rect width="28" height="28" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </label>
                    <input id="search-input" type="text" placeholder="Arama yapın...">
                    <button type="reset"><i class="fa-regular fa-circle-xmark"></i></button>
                </div>
            </form>
            <div class="p-products-items" id="search-results">
                <div class="p-products-item">
                    <div class="products-item-img">
                        <img src="" alt="Ispanak Yatağında Tavuk Pirzola">
                    </div>
                    <div class="products-item-text"><h2 class="products-titlee">Ispanak Yatağında Tavuk Pirzola</h2>
                        <h2 class="products-sell">305₺</h2></div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>