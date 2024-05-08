<template>
<!--    <section id="search" :class="{active: isSearchActive}">
      <div class="container">
        <div class="search-top">
          <div class="search-title">
            <h2>Arama Yap</h2>
          </div>
          <div class="search-close" v-on:click="isSearchActive = !isSearchActive">
            <i class="fa-solid fa-x"></i>
            <span>Kapat</span>
          </div>
        </div>
       <Search/>
      </div>
    </section>-->
    <div class="bottom-navigation">
      <section id="bottom-navigation">
        <div class="container">
          <div class="bottom-navigation-row">
            <NuxtLink to='/about' class="navigation-item " activeClass="active">
              <div class="navigation-icon restaurant-name">
                L
              </div>
              <span>Hakkında</span>
            </NuxtLink>
            <NuxtLink href="/" class="navigation-item" activeClass="active">

                <div class="navigation-icon">
                  <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22.575 27.125H5.42501C3.80626 27.125 2.45001 25.8125 2.45001 24.15V10.8937C2.45001 10.0187 2.84376 9.18748 3.54376 8.61873L12.1188 1.53123C13.2125 0.612476 14.7875 0.612476 15.8813 1.53123L24.4563 8.57498C25.1563 9.14373 25.55 9.97498 25.55 10.85V24.1062C25.55 25.8125 24.1938 27.125 22.575 27.125ZM14 2.62498C13.7375 2.62498 13.4313 2.71248 13.2125 2.88748L4.63751 9.97498C4.37501 10.1937 4.20001 10.5437 4.20001 10.8937V24.15C4.20001 24.8062 4.72501 25.375 5.42501 25.375H22.575C23.2313 25.375 23.8 24.85 23.8 24.15V10.8937C23.8 10.5437 23.625 10.1937 23.3625 9.97498L14.7875 2.88748C14.5688 2.71248 14.2625 2.62498 14 2.62498Z"
                        fill="#9C9C9C"/>
                    <path
                        d="M19.25 23.275H8.75C8.26875 23.275 7.875 22.8813 7.875 22.4C7.875 21.9188 8.26875 21.525 8.75 21.525H19.25C19.7312 21.525 20.125 21.9188 20.125 22.4C20.125 22.8813 19.7312 23.275 19.25 23.275Z"
                        fill="#9C9C9C"/>
                  </svg>
                </div>
                <span>Menü</span>

            </NuxtLink>
            <button class="navigation-item" v-on:click="isSearchActive = !isSearchActive">
              <div class="navigation-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_415_2710)">
                    <path
                        d="M28 26.7642L20.5559 19.32C22.3215 17.2712 23.3905 14.6058 23.3905 11.6952C23.3904 5.24647 18.144 0 11.6952 0C5.24647 0 0 5.24647 0 11.6952C0 18.144 5.24647 23.3905 11.6952 23.3905C14.6058 23.3905 17.2712 22.3215 19.32 20.5559L26.7642 28.0001L28 26.7642ZM1.74779 11.6952C1.74779 6.2102 6.2102 1.74779 11.6952 1.74779C17.1803 1.74779 21.6427 6.2102 21.6427 11.6952C21.6427 17.1803 17.1803 21.6427 11.6952 21.6427C6.2102 21.6427 1.74779 17.1803 1.74779 11.6952Z"
                        fill="#9C9C9C"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_415_2710">
                      <rect width="28" height="28" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
  
              </div>
              <span>Arama Yap</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  // import Search from "~/components/Head/Search/index.vue";
  // const isSearchActive = ref(false);
  </script>
  
  <style>
  .bottom-navigation {
    position: sticky;
    bottom: 0;
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.13);
    background: rgba(0, 0, 0, 0.80);
    backdrop-filter: blur(10.5px);
    z-index: 99;
  }
  .active{
    color: #FFD700;
  }
  </style>
