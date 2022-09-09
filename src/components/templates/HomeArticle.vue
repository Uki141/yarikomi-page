<template>
  <v-container
    fluid
    class="home-article"
    :class="{ 'half-height': halfHeight, 'text-aligin-right': justifyRight, 'home-article-dark': dark }"
    data-aos="fade-down"
    data-aos-duration="1500">
    <v-row>
      <v-col class="col-lg-1 col-auto" />
      <v-col class="col-10">
        <ArticleTitle
          :dark="dark"
          :justify-right="justifyRight"
          :red="accentRed">
          <slot name="title" />
        </ArticleTitle>
      </v-col>
      <v-col class="col-lg-1 col-auto" />
    </v-row>

    <v-row
      class="article-description"
      :class="{ 'article-description-dark': dark }"
      data-aos="fade-right"
      data-aos-duration="1500">
      <v-col class="col-lg-2 col-auto" />
      <v-col class="article-description-col col-8">
        <slot name="description" />
      </v-col>
      <v-col class="col-lg-2 col-auto" />
    </v-row>
    <v-row
      v-if="!halfHeight"
      class="article-description"
      :class="{ 'article-description-dark': dark }"
      data-aos="fade-right"
      data-aos-duration="1500">
      <v-col class="col-lg-2 col-auto" />
      <v-col class="article-description-col col-8">
        <slot name="description2" />
      </v-col>
      <v-col class="col-lg-2 col-auto" />
    </v-row>
  </v-container>
</template>

<script>
import ArticleTitle from '../organisms/ArticleTitle.vue'

export default {

  components: {
    ArticleTitle
  },
  props: {
    halfHeight: {
      require: false,
      type: Boolean,
      default: false
    },
    justifyRight: {
      require: false,
      type: Boolean,
      default: false
    },
    dark: {
      require: false,
      type: Boolean,
      default: false,
    },
    accentRed: {
      require: false,
      type: Boolean,
      default: false
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
  min-height: 100vh;
  font-size: 7vh;
  font-family: 'Zen Antique Soft', serif;
}

.home-article-dark {
  background-color: #1A2E40;
}

.half-height {
  min-height: 50vh;
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