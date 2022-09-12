<template>
  <v-card
    :width="_width"
    :height="_height"
    class="px-2">
    <v-card-title>{{ name }}</v-card-title>
    <div>
      <v-img
        :src="portrait"
        lazy-src="img/defalut_portrait.jpg"
        width="100%"
        position="center center"
        aspect-ratio="1" />
    </div>
    <v-card-text>
      <div>{{ article }}</div>

      <div
        class="my-4">
        <v-row no-gutters>
          <v-col cols="5">
            <span>得意機種：</span>
          </v-col>
          <v-col class="games-chips">
            <v-chip
              v-for="(game, i) in games"
              :key="i"
              small>
              {{ game }}
            </v-chip>
          </v-col>
        </v-row>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    name: { type: String, required: false, default: null },
    portrait: { type: String, required: false, default: "img/defalut_portrait.jpg" },
    games: { type: Array, required: false, default: () => [] },
    article: { type: String, required: false, default: null },

    width: { type: [String, Number], required: false, default: null },
    height: { type: [String, Number], required: false, default: null },
  },
  computed: {
    _width() {
      if (isNaN(this.width)){
        return this.width
      }
      return this.width + "px"
    },
    _height() {
      if (isNaN(this.height)){
        return this.height
      }
      return this.height + "px"
    }
  }
}
</script>