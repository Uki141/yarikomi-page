<template>
  <FluidFillContainer id="Home">
    <FloatingSquareBtn
      v-if="$vuetify.breakpoint.smAndDown"
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
    <NavigationAppbar
      v-else
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

    <!-- <HomeTopSection />

    <HomeArticle :half-height="true">
      <template #title>
        <span class="title-accent">音ゲー</span>って何？
      </template>
      <template #description>
        <p>音ゲーとは、</p>
        <p>流れてくる音楽のリズムに合わせて操作を行う、</p>
        <p>体感型ゲームの総称。</p>
      </template>
    </HomeArticle>

    <HomeArticle :half-height="true" :justify-right="true" :accent-red="true">
      <template #title>
        <span class="title-accent">何が</span>楽しいの？
      </template>
      <template #description>
        <p>知らない曲との出会い</p>
        <p>昨日の自分を明確に超えられる達成感</p>
        <p>音楽と同じで、人それぞれの楽しみ方がある。</p>
      </template>
    </HomeArticle>

    <HomeArticle :half-height="false" :dark="true">
      <template #title>
        <span class="title-accent">活動内容</span>
      </template>
      <template #description>
        <ul>
          <li>定例会</li>
          <ul>
            <li>ゲームセンター行って、遊んで、ご飯食べて</li>
            みたいな感じです
          </ul>
          <li>チャット交流</li>
          <ul>
            <li>Twitterに書くほどでもない自慢 とか</li>
            <li>誰かと共有したいこと とか</li>
            しようもない事でも話せる場をつくります
          </ul>
          <li>月例大会開催</li>
          <ul>
            <li>景品アリで大会を開きたいなぁと思っています</li>
            人が集まればですが！
          </ul>
        </ul>
      </template>
    </HomeArticle>

    <HomeGames />

    <HomeInfomation>
      <template #heading>
        部員募集中！
      </template>
    </HomeInfomation> -->
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
// import HomeTopSection from "@/components/templates/HomeTopSection.vue"
// import HomeArticle from "@/components/templates/HomeArticle.vue"
// import HomeGames from "@/components/templates/HomeGames.vue"

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
    // HomeTopSection,
    // HomeArticle,
    // HomeGames,
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

<style scoped>
.test-anc {
  position: absolute;
}
</style>