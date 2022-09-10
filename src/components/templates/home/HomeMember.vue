<template>
  <FullWidthContainer
    tag="article"
    class="home-activity pt-16">
    <div
      class="mt-8 d-flex flex-column">
      <v-row no-gutters>
        <v-spacer />
        <v-col
          cols="10"
          lg="5">
          <div
            class="d-flex flex-column align-start">
            <div class="info-title mb-4 px-16">
              <h3>Member</h3>
            </div>
            <v-carousel
              cycle
              hide-delimiter-background
              delimiter-icon="mdi-minus">
              <template
                v-for="(content, i) in contents">
                <TitleImageCarouselItem
                  :key="i"
                  :title="content.title"
                  :img-src="content.src" />
              </template>
            </v-carousel>
          </div>
        </v-col>
        <v-spacer />
      </v-row>
      <div class="py-4">
        <SmoothScrollBtn
          v-if="!!nextArticleId"
          :id-to="nextArticleId"
          id-contianer="HomeContent"
          icon="mdi-arrow-down-thick"
          color="#1A2E40"
          dark
          fixed
          x-center />
      </div>
    </div>
  </FullWidthContainer>
</template>

<script>
import FullWidthContainer from '@/components/templates/containers/FullWidthContainer.vue'
import SmoothScrollBtn from "@/components/organisms/btn/SmoothScrollBtn.vue"
import TitleImageCarouselItem from "@/components/organisms/carousel/TitleImageCarouselItem.vue"

export default {
  components: {
    FullWidthContainer,
    SmoothScrollBtn,
    TitleImageCarouselItem,
  },
  props: {
    nextArticleId: {type: String, required: false, default: null},
  },
  data: () => ({
    contents: [
      {title: "オフライン交流会", src: "/img/immigrant.jpg"},
      {title: "チャット", src: "/img/slack_zatsudan.png"},
      {title: "オフライン大会", src: "/img/slack_ss_mosaic.png"},
    ]
  })
}
</script>

<style lang="scss" scoped>
.home-activity{
  background: rgb(2,0,36);
  background: linear-gradient(335deg, rgba(2,0,36,1) 0%, rgba(19,17,51,1) 64%, rgba(63,62,87,1) 89%, rgba(108,114,134,1) 100%);
  color: #fff;
  font-family: 'Zen Kaku Gothic New', sans-serif;
  font-size: 1rem;
}

.info-title {
  font-size: min(6.5rem, 32px);
  white-space: nowrap;
  border: 2px solid #fff;
  padding: 5px 10px;
  background-color: rgba($color: #000000, $alpha: 0.4);
  transform: rotate(0.025turn) skew(0deg, -10deg);
}

.info-title::first-letter {
  color: #22A2F2;
}

.info-area {
  border: 2px dotted #fff;
  padding: 5px 10px;
  background-color: rgba($color: #000000, $alpha: 0.4);
}

.info-text {
  font-size: min(5rem, 20px);
}

.info-text b {
  font-weight: 600;
}

.info-text > span {
  display: block;
}
</style>