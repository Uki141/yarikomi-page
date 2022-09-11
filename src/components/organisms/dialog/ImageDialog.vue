<template>
  <v-dialog 
    v-model="dialog"
    width="90%"
    dark
    :persistent="false">
    <v-sheet
      color="#ffffff00">
      <div>
        <v-img :src="imgSrc" />
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: { type: Boolean, required: true, default: false },
    imgSrc: { type: String, required: true, default: null },
  },
  computed: {
    dialog: {
      get() {
        return this.show
      },
      set(value) {
        this.$emit("update:show", value)
      }
    }
  },
  methods: {
    onClick() {
      this.dialog = false
    }
  }
}
</script>

<style>

</style>