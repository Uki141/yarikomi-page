<template>
  <v-app>
    <v-main id="VMain">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=RocknRoll+One&family=Zen+Antique+Soft&family=Zen+Kaku+Gothic+New:wght@400;700&display=swap');

#VMain {
  height: 95vh;
  width: 100vw;
}

:root {
  font-size: calc(15px + 0.390625vw);
}

html {
  font-family: 'Zen Kaku Gothic New', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #06080D;
}

body {
  /* bodyでスクロールしない */
  overflow: hidden;
  scrollbar-width: none; /*Firefox対応のスクロールバー非表示コード*/  
  -ms-overflow-style: none;/*Internet Explore対応のスクロールバー非表示コード*/   
}

body::-webkit-scrollbar {  
  display: none; /*Google Chrome、Safari、Microsoft Edge対応のスクロールバー非表示コード*/
}

* {
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: local;
  background-size: cover;

  box-sizing: border-box;
}

/* スマホサイズの共通定義 */
@media screen and (max-width: 425px) {
  .mobile-padding {
    padding-bottom: 10%;
  }
}

</style>