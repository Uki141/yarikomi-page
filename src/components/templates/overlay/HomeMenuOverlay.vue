<template>
  <v-overlay
    color="#ececec"
    :z-index="0"
    :value="overlay">
    <span>整備中</span>
  </v-overlay>
</template>

<script>
export default {
  props: {
    show: { type: Boolean, required: true, default: false },
  },
  computed: {
    overlay: {
      get() {
        return this.show
      },
      set(value) {
        this.$emit("update:show", value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>