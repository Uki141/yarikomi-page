<template>
  <v-btn
    :absolute="absolute && !fixed"
    :fixed="!absolute && fixed"
    :fab="fab"
    :dark="dark"
    :width="_width"
    :height="_height"
    :color="color"
    :style="STYLE"
    :class="{'x-center': xCenter,
             'y-center': yCenter}"
    class="hidden-on-landscape"
    @click="onClick">
    <v-icon
      v-if="!!icon"
      size="1.5rem">
      {{ icon }}
    </v-icon>
    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    idTo: {type: String, required: true, default: null},
    idContianer: {type: String, required: true, default: null},
    icon: {type: String, required: false, default: null},
    absolute: {type: Boolean, required: false, default: true},
    fixed: {type: Boolean, required: false, default: false},
    fab: {type: Boolean, required: false, default: true},
    dark: {type: Boolean, required: false, default: false},
    size: { type: [String, Number], required: false, default: "3rem" },
    width: {type: [String, Number], required: false, default: null},
    height: {type: [String, Number], required: false, default: null},
    color: {type: String, required: false, default: null},
    left: {type: [String, Number], required: false, default: null},
    right: {type: [String, Number], required: false, default: null},
    top: {type: [String, Number], required: false, default: null},
    bottom: {type: [String, Number], required: false, default: null},
    xCenter: {type: Boolean, required: false, default: false},
    yCenter: {type: Boolean, required: false, default: false},
  },
  computed: {
    STYLE() {
      const left = isNaN(this.left)?this.left:this.left+"px"
      const right = isNaN(this.right)?this.right:this.right+"px"
      const top = isNaN(this.top)?this.top:this.top+"px"
      const bottom = isNaN(this.bottom)?this.bottom:this.bottom+"px"
      return { left, right, top, bottom }
    },
    _width() {
      if (this.size){
        return this.size
      }
      return this.width
    },
    _height() {
      if (this.size){
        return this.size
      }
      return this.height
    }
  },
  methods: {
    onClick() {
      const scrollTo = document.getElementById(this.idTo)
      const scrollTarget = document.getElementById(this.idContianer)
      this.$smoothScroll({
        scrollTo: scrollTo,
        container: scrollTarget,
      })
    },
  },
}
</script>

<style>
  .x-center {
    left: 50%;
    transform: translateX(-50%);
  }

  .y-center {
    top: 50%;
    transform: translateY(-50%);
  }

@media (orientation: landscape) and (max-height: 430px){
  .hidden-on-landscape{
    display: none;
  }
}
</style>