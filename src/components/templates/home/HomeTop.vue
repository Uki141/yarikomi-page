<template>
  <FluidFillContainer
    tag="article"
    class="home-top-section lazyload flex-column">
    <div
      class="full-width flex-grow-1">
      <div
        class="fill-height d-flex align-center justify-center">
        <TitleTextset
          title="やりこみ"
          sub-title="音ゲーサークル"
          slogan1="音を楽しむ、"
          slogan2="だから本気になる。" />
      </div>
    </div>
    <div
      class="full-width flex-grow-0 py-8">
      <SmoothScrollBtn
        :id-to="nextArticleId"
        id-contianer="HomeContent"
        icon="mdi-arrow-down-thick"
        color="#1A2E40"
        dark
        fixed
        x-center />
    </div>
  </FluidFillContainer>
</template>

<script>
import FluidFillContainer from '@/components/templates/containers/FluidFillContainer.vue'
import TitleTextset from "@/components/organisms/textset/TitleTextset.vue"
import SmoothScrollBtn from "@/components/organisms/btn/SmoothScrollBtn.vue"

export default {
  components: {
    FluidFillContainer,
    TitleTextset,
    SmoothScrollBtn,
  },
  props: {
    nextArticleId: {type: String, required: false, default: null},
  },
  data: () => ({
    env: process.env
  }),
  mounted() {
    console.log(this.env)
    console.log(this.$route.path)
    console.log(this.$route.name)
  }
}
</script>

<style scoped>
.home-top-section.lazyload {
  background-image: url("@/assets/img/top.png");
}

.home-top-section.lazyloaded {
  background-image: url("@/assets/img/top.min.gif"), url("@/assets/img/top.png");
}

.full-width {
  width: 100%
}

.skew-bg {
  background-color: rgba(6, 8, 13, 90%);
  clip-path: polygon(0% 100%, 0% 0%, 75% 0%, 90% 100%);
}
</style>