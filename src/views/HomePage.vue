<template>
  <FluidFillContainer id="Home">
    <!-- 現状非表示・ページが増えた際は、ダイアログにリンクを設置 -->
    <FloatingSquareBtn
      v-if="$vuetify.breakpoint.smAndDown && false"
      :size="52"
      :right="0"
      :top="0"
      :elevation="0"
      style="z-index: 100; background-color:  rgba(0, 0, 0, 0.4);"
      @click="onBtnClick">
      <v-icon color="white">
        mdi-menu
      </v-icon>
    </FloatingSquareBtn>
    <!-- 現状非表示・ページが増えた際は、ダイアログにリンクを設置 -->
    <NavigationAppbar
      v-if="$vuetify.breakpoint.mdAndUp && false"
      scroll-target="#HomeContent" />

    <FluidFillContainer
      id="HomeContent"
      class="overflow-y-auto">
      <!-- トップ -->
      <HomeTop
        id="HomeTop"
        next-article-id="HomeInfomation" />
      <HomeInfomation
        id="HomeInfomation"
        next-article-id="HomeActivity" />
      <HomeActiviry
        id="HomeActivity"
        next-article-id="HomeMember" />
      <HomeMember
        id="HomeMember" />
      <GeneralFooter />
    </FluidFillContainer>

    <HomeMenuOverlay
      v-if="$vuetify.breakpoint.smAndDown"
      :show="overlay" />
  </FluidFillContainer>
</template>

<script>
import FluidFillContainer from "@/components/templates/containers/FluidFillContainer.vue"

import FloatingSquareBtn from "@/components/organisms/btn/FloatingSquareBtn.vue"
import NavigationAppbar from "@/components/organisms/appbar/NavigationAppbar.vue"
import HomeMenuOverlay from "@/components/templates/overlay/HomeMenuOverlay.vue"

import HomeTop from "@/components/templates/home/HomeTop.vue"
import HomeInfomation from "@/components/templates/home/HomeInfomation.vue"
import HomeActiviry from "@/components/templates/home/HomeActivity.vue"
import HomeMember from "@/components/templates/home/HomeMember.vue"

import GeneralFooter from "@/components/templates/GeneralFooter.vue"

export default {
  components: {
    FluidFillContainer,
    FloatingSquareBtn,
    NavigationAppbar,
    HomeMenuOverlay,
    HomeTop,
    HomeInfomation,
    HomeActiviry,
    GeneralFooter,
    HomeMember,
  },
  data: () => ({
    overlay: false,
  }),
  methods: {
    onBtnClick() {
      this.overlay = !this.overlay
    },
  }
}
</script>