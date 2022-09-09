<template>
  <SquareBtn
    :size="size"
    absolute
    :style="STYLE"
    :elevation="elevation"
    v-bind="$attrs"
    v-on="$listeners">
    <slot />
  </SquareBtn>
</template>

<script>
import SquareBtn from '@/components/atoms/btn/SquareBtn.vue'

export default {
  components: {
    SquareBtn,
  },
  props: {
    size: { type: Number, default: 32 },
    elevation: { type: Number, required: false, default: 4 },
    left: { type: Number, required: false, default: null },
    right: { type: Number, required: false, default: null },
    top: { type: Number, required: false, default: null },
    bottom: { type: Number, required: false, default: null },
  },
  computed: {
    STYLE() {
      return {
        left: this.left,
        right: this.right,
        top: this.top,
        bottom: this.bottom,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>