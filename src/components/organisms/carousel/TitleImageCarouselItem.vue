<template>
  <v-carousel-item>
    <v-sheet
      height="100%"
      tile>
      <div
        :style="STYLES"
        class="bg-image pa-3"
        justify="center">
        <div
          v-if="!!title"
          class="carousel-title py-2 px-10">
          <span>{{ title }}</span>
        </div>
      </div>
    </v-sheet>
  </v-carousel-item>
</template>

<script>
export default {
  props: {
    title: { type: String, required: false, default: null },
    imgSrc: { type: String, required: false, default: null },
  },
  computed: {
    STYLES() {
      const backgroundImage = "url(" + this.imgSrc + ")"
      return {backgroundImage}
    }
  }
}
</script>

<style scoped>
  .carousel-title {
    width: fit-content;
    background-color: #2466e0;
    border: 2px solid rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-size: min(3rem, 24px);
    font-weight: 600;
    transform: rotate(0.025turn) skew(0deg, -10deg);
  }

  .bg-image {
    aspect-ratio: 16/9;
    height: auto;
    width: 100%;
    background-repeat: no-repeat;
    background-attachment: local;
    background-size: contain;
  }
</style>