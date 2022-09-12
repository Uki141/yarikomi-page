<template>
  <FullWidthContainer
    tag="article"
    class="home-activity pt-4 pt-lg-16">
    <div
      class="mt-8 d-flex flex-column">
      <v-row no-gutters>
        <v-col class="px-6 d-flex justify-center">
          <div
            class="d-flex flex-column align-center activity-container px-0 px-lg-16">
            <div class="activity-title mb-4 py-1 px-8 px-lg-16 align-self-start">
              <span>Activity</span>
            </div>
            <v-carousel
              class="activity-carousel"
              width="100%"
              height="100%"
              cycle
              hide-delimiter-background
              delimiter-icon="mdi-minus">
              <template
                v-for="(content, i) in contents">
                <TitleImageCarouselItem
                  :key="i"
                  :title="content.title"
                  :img-src="content.src"
                  @click="imgClick(content.src)" />
              </template>
            </v-carousel>
          </div>
        </v-col>
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
    <ImageDialog
      v-if="!!showImgSrc"
      :show.sync="dialog"
      :img-src="showImgSrc" />
  </FullWidthContainer>
</template>

<script>
import FullWidthContainer from '@/components/templates/containers/FullWidthContainer.vue'
import SmoothScrollBtn from "@/components/organisms/btn/SmoothScrollBtn.vue"
import TitleImageCarouselItem from "@/components/organisms/carousel/TitleImageCarouselItem.vue"
import ImageDialog from "@/components/organisms/dialog/ImageDialog.vue"

export default {
  components: {
    FullWidthContainer,
    SmoothScrollBtn,
    TitleImageCarouselItem,
    ImageDialog,
  },
  props: {
    nextArticleId: {type: String, required: false, default: null},
  },
  data: () => ({
    // TODO: API化(外部から取得)
    contents: [
      {title: "オフライン交流会", src: "img/immigrant.jpg"},
      {title: "チャット", src: "img/slack_zatsudan.png"},
      {title: "オンライン大会", src: "img/slack_ss_mosaic.png"},
    ],
    dialog: false,
    showImgSrc: null,
  }),
  methods: {
    imgClick(imgSrc) {
      if (!imgSrc){
        return
      }
      console.log(imgSrc)
      this.showImgSrc = imgSrc
      this.dialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
.home-activity{
  background-image: url("@/assets/img/bg_neon03.jpg");
  color: #fff;
  font-family: 'Zen Kaku Gothic New', sans-serif;
  font-size: 1rem;
}

.activity-container{
  width: 100%;
}

.activity-title {
  font-size: 1.75rem;
  font-weight: 600;
  white-space: nowrap;
  border: 2px solid #fff;
  background-color: rgba($color: #000000, $alpha: 0.4);
  transform: rotate(0.025turn) skew(0deg, -10deg);
}

.activity-title::first-letter {
  font-size: 2.1rem;
  color: #22A2F2;
}

.activity-container {
  max-width: 1280px;
}

.activity-carousel {
  width: 100%;
  height: auto !important; 
  aspect-ratio: 16/9;
}

</style>