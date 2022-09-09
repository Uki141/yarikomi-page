<template>
  <div
    class="game-article d-flex flex-column"
    :style="styles">
    <h1
      class="mt-5 ml-5"
      data-aos="fade-right"
      data-aos-duration="1500">
      <span class="game-article-title px-5">
        <slot name="title" />
      </span>
    </h1>
    <h2
      class="ml-10"
      data-aos="fade-right"
      data-aos-duration="1500"
      data-aos-delay="300">
      <span class="game-article-subtitle">
        <slot name="subtitle" />
      </span>
    </h2>
    <div class="game-article-content d-flex justify-center mt-12 mx-6">
      <v-row class="d-flex">
        <v-col
          class="col-6 game-article-text"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="500">
          <slot name="main" />
        </v-col>
        <v-col class="col-6 d-flex flex-column align-center">
          <p>movie</p>
          <slot name="media" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dark: {
      require: false,
      type: Boolean,
      default: false
    }
  },

  computed: {
    styles() {
      let color = this.dark ? "#1A2E40" : "#FFF"
      let strokeColor = this.dark ? "#FFF" : "#1A2E40"

      return {
        "--color": color,
        "--text-stroke-color": strokeColor
      }
    }
  }
}
</script>

<style scoped>
.game-article {
  color: #FFF;
  font-size: 4vh;
  font-family: 'Zen Kaku Gothic New', Courier, monospace;
  overflow: hidden;

  --color: "#FFF";
  --text-stroke-color: "#1A2E40";
}

.game-article-title {
  background-color: rgb(26, 46, 64, 0.2);
}

.game-article-subtitle {
  color: var(--color);
  -webkit-text-stroke: 0.5px var(--text-stroke-color);
  background: linear-gradient(transparent 90%, rgba(28, 142, 242, 50%) 45%);
}

.game-article-text {
  background-color: rgb(6, 9, 14, 0.5);
}

.game-article-content {
  max-height: 100%;
  flex-grow: 1;
  font-size: 0.75em;
}
</style>