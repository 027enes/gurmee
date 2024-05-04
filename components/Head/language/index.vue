<template>
  <div>
    <div class="lang-btn" :class="{active: isLangActive}" @click="handleClick" >
      <div class="lang-cont">
        <svg style="height: 30px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 5 36 26">
          <path fill="#E30917"
                d="M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z"/>
          <path fill="#EEE"
                d="M16 24c-3.314 0-6-2.685-6-6 0-3.314 2.686-6 6-6 1.31 0 2.52.425 3.507 1.138-1.348-1.524-3.312-2.491-5.507-2.491-4.061 0-7.353 3.292-7.353 7.353 0 4.062 3.292 7.354 7.353 7.354 2.195 0 4.16-.967 5.507-2.492C18.521 23.575 17.312 24 16 24zm3.913-5.77l2.44.562.22 2.493 1.288-2.146 2.44.561-1.644-1.888 1.287-2.147-2.303.98-1.644-1.889.22 2.494z"/>
        </svg>
      </div>

      <ul class="lang-content" :class="{active: isLangActive}">
        <li class="langs">
          <a href="https://gurmenu.com/en/restaurant/lavita" class="lang">
            <svg style="height: 30px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 5 36 26">
              <path fill="#00247D"
                    d="M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z"/>
              <path fill="#CF1B2B"
                    d="M25.14 23l9.712 6.801c.471-.479.808-1.082.99-1.749L28.627 23H25.14zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943V23zm10-10h2.141l9.711-6.8c-.521-.53-1.188-.909-1.937-1.085L23 12.057V13zm-12.141 0L1.148 6.2C.677 6.68.34 7.282.157 7.949L7.372 13h3.487z"/>
              <path fill="#EEE"
                    d="M36 21H21v10h2v-5.836L31.335 31H32c1.117 0 2.126-.461 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36v-2zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21H0zM36 9c0-1.091-.439-2.078-1.148-2.8L25.141 13H23v-.943l9.915-6.942C32.62 5.046 32.316 5 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059V9zM13 5v5.837L4.664 5H4c-1.118 0-2.126.461-2.852 1.2l9.711 6.8H7.372L.157 7.949C.065 8.286 0 8.634 0 9v.059L5.628 13H0v2h15V5h-2z"/>
              <path fill="#CF1B2B" d="M21 15V5h-6v10H0v6h15v10h6V21h15v-6z"/>
            </svg>
          </a>
        </li>
        <li class="langs">
          <a href="https://gurmenu.com/ru/restaurant/lavita" class="lang">
            <svg style="height: 30px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 5 36 26">
              <path fill="#CE2028"
                    d="M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4v-4h36v4z"/>
              <path fill="#22408C" d="M0 13h36v10H0z"/>
              <path fill="#EEE" d="M32 5H4C1.791 5 0 6.791 0 9v4h36V9c0-2.209-1.791-4-4-4z"/>
            </svg>
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script >
  export default{
    data(){
      return{
        isLangActive : false
      }
    },
    methods:{
      handleClick(){
        this.isLangActive = !this.isLangActive
      }
    }
  }

</script>

<style lang="scss" scoped>

</style>