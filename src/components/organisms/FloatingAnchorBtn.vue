<template>
  <v-card-text style="height: 100px; position: relative">
    <v-fab-transition>
      <v-btn
        v-smooth-scroll
        :color="color"
        dark
        absolute
        top
        fab
        style="right: 50vw"
        @click="location.href = hash">
        <v-icon>mdi-arrow-down-bold</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-card-text>
</template>

<script>
export default {
  props: {
    hash: {
      require: true,
      type: String,
      default: null,
    },
    color: {
      require: false,
      type: String,
      default: "#22A2F2"
    }
  }
}
</script>

<style>
</style>