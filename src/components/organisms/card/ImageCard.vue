<template>
  <v-card
    class="overflow-hidden d-flex flex-column aligin-center"
    color="#ffffff00"
    :elevation="elevation">
    <img
      src="/img/slack_ss_mosaic.png"
      :style="STYLES_IMG">
    <!-- <v-img 
      :src="src"
      :lazy-src="lazySrc"
      :contain="contain"
      :aspect-ratio="aspectRatio"
      :width="_width"
      :min-width="_minWidth"
      :max-width="_maxWidth"
      :height="_height"
      :min-height="_minHeight"
      :max-height="_maxHeight" /> -->
  </v-card>
</template>

<script>
export default {
  props: {
    src: { type: String, required: true, default: null },
    contain: { type: Boolean, required: false, default: false },
    aspectRatio: { type: [Number, String], required: false, default: null },
    width: { type: [Number, String], required: false, default: null },
    minWidth: { type: [Number, String], required: false, default: null },
    maxWidth: { type: [Number, String], required: false, default: null },
    height: { type: [Number, String], required: false, default: null },
    minHeight: { type: [Number, String], required: false, default: null },
    maxHeight: { type: [Number, String], required: false, default: null },
    elevation: { type: Number, required: false, default: null },
  },
  computed: {
    _width() {
      return toPixel(this.width)
    },
    _minWidth() {
      return toPixel(this.minWidth)
    },
    _maxWidth() {
      return toPixel(this.maxWidth)
    },
    _height() {
      return toPixel(this.height)
    },
    _minHeight() {
      return toPixel(this.minHeight)
    },
    _maxHeight() {
      return toPixel(this.maxHeight)
    },
    STYLES_IMG() {
      const width = this._width
      const minWidth = this._minWidth
      const maxWidth = this._maxWidth
      return {width, minWidth, maxWidth}
    }
  }
}

function toPixel(num) {
  if (isNaN(num)){
    return num
  }
  return num + "px"
}
</script>

<style scoped>
  .inner-img{
    object-fit: contain;
  }
</style>