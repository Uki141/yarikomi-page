<template>
  <div
    class="article-title"
    :style="styles"
    :class="{ 'article-title-right': justifyRight }">
    <span>
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    dark: {
      require: false,
      type: Boolean,
      default: false
    },
    red: {
      require: false,
      type: Boolean,
      default: false
    },
    justifyRight: {
      require: false,
      type: Boolean,
      default: false
    }
  },

  computed: {
    styles() {
      let titleColor = "#06080D"
      let titleAccentColor = "#1B8EF2"

      if (this.dark) {
        titleColor = "#FFF"
        titleAccentColor = "#5CB9F2"
      }
      if (this.red) {
        titleAccentColor = "#F23B33"
      }

      return {
        "--title-color": titleColor,
        "--title-accent-color": titleAccentColor
      }
    }
  }
}
</script>

<style scoped>
.article-title {
  font-size: 7vh;
  font-family: 'Zen Antique Soft', serif;

  --title-color: #06080D;
  --title-accent-color: #1B8EF2;
  color: var(--title-color);
  border-left: 4px solid var(--title-color);
}

.article-title-right {
  border-left: 0px solid var(--title-color);
  border-right: 4px solid var(--title-color);
}

.article-title::first-letter {
  font-size: 1.2em;
}

.title-accent {
  font-size: 1.5em;
  color: var(--title-accent-color)
}
</style>