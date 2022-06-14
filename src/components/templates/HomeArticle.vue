<template>
  <v-container fluid class="home-article"
    :class="{ 'half-height': halfHeight, 'text-aligin-right': rightJustifiy, 'home-article-dark': dark }">
    <v-row class="article-title">
      <v-col class="col-lg-1 col-auto"></v-col>
      <v-col class="article-title-col col-10"
        :class="{ 'article-title-col-right': rightJustifiy, 'article-title-col-dark': dark, 'article-title-col-right-dark': dark && rightJustifiy }">
        <slot name="title"></slot>
      </v-col>
      <v-col class="col-lg-1 col-auto"></v-col>
    </v-row>
    <v-row class="article-description" :class="{ 'article-description-dark': dark }">
      <v-col class="col-lg-2 col-auto"></v-col>
      <v-col class="article-description-col col-8">
        <slot name="description"></slot>
      </v-col>
      <v-col class="col-lg-2 col-auto"></v-col>
    </v-row>
    <v-row class="article-description" :class="{ 'article-description-dark': dark }" v-if="!halfHeight">
      <v-col class="col-lg-2 col-auto"></v-col>
      <v-col class="article-description-col col-8">
        <slot name="description2"></slot>
      </v-col>
      <v-col class="col-lg-2 col-auto"></v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  props: {
    halfHeight: {
      require: false,
      type: Boolean,
      default: false
    },
    rightJustifiy: {
      require: false,
      type: Boolean,
      default: false
    },
    dark: {
      require: false,
      type: Boolean,
      default: false,
    }
  },

  computed: {
    justify() {
      return this.rightJustifiy ? "end" : "start"
    }
  }
}
</script>

<style scoped>
.home-article {
  height: 100vh;
  font-size: 7vh;
  font-family: 'Zen Antique Soft', serif;
}

.home-article-dark {
  background-color: rgba(6, 8, 13, 90%);
}

.half-height {
  height: 50vh;
}

.article-title {
  font-size: 1em;
}

.article-title-col {
  border-left: 4px solid #06080D
}

.article-title-col-dark {
  border-left: 4px solid #FFF
}

.article-title-col-right-dark {
  border-left: 0px solid #FFF;
  border-right: 4px solid #FFF;
}

.article-title-col::first-letter {
  font-size: 1.2em;
}

.title-impact {
  font-size: 1.5em;
  color: #1B8EF2;
}

.title-impact-dark {
  color: #5CB9F2;
}

.title-impact-red {
  font-size: 1.5em;
  color: #F23B33;
}

.article-description {
  font-size: 0.6em;
  color: #1A2E40;
}

.article-description-dark {
  color: #FFF;
}

.text-aligin-right {
  text-align: right;
}
</style>