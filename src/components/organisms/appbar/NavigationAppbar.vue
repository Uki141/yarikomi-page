<template>
  <v-app-bar
    dark
    color="#e6e6e633"
    absolute
    inverted-scroll
    :scroll-target="scrollTarget">
    <v-app-bar-nav-icon />

    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer />

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    scrollTarget: { type: String, required: true, default: null },
  }
}
</script>

<style scoped>
.navigation-appbar {
  background-color: #e6e6e633;
}

.v-app-bar--is-scrolled {
  background-color: #1A2E40 !important;
}
</style>