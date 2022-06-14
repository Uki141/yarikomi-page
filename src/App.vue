<template>
  <v-app>
    <v-main>
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
@import url('https://fonts.googleapis.com/css2?family=RocknRoll+One&family=Zen+Antique+Soft&family=Zen+Kaku+Gothic+New&display=swap');

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