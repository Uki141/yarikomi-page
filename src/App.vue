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
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=RocknRoll+One&family=Zen+Antique+Soft&family=Zen+Kaku+Gothic+New:wght@400;700&display=swap');

:root {
  font-size: 16px;
}

#VMain {
  height: 100vh;
  width: 100vw;
}

html {
  font-family: 'Zen Kaku Gothic New', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #06080D;
}

* {
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  box-sizing: border-box;
}
</style>