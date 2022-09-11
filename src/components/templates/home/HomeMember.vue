<template>
  <FullWidthContainer
    tag="article"
    class="home-member pt-4 pt-lg-16">
    <div
      class="mt-8 d-flex flex-column">
      <v-row no-gutters>
        <v-col class="px-6 d-flex justify-center">
          <div
            class="d-flex flex-column align-center member-container">
            <div class="member-title mb-4 py-1 px-8 px-lg-16 align-self-start">
              <span>member</span>
            </div>
            <div
              class="mamber-container d-flex flex-wrap justify-center">
              <PortraitCard 
                v-for="(member, i) in members"
                :key="i"
                width="300px"
                :name="member.name"
                :portrait="member.portrait"
                :games="member.games"
                :article="member.article" />
            </div>
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
  </FullWidthContainer>
</template>

<script>
import FullWidthContainer from '@/components/templates/containers/FullWidthContainer.vue'
import SmoothScrollBtn from "@/components/organisms/btn/SmoothScrollBtn.vue"
import PortraitCard from "@/components/organisms/card/PortraitCard.vue"

export default {
  components: {
    FullWidthContainer,
    SmoothScrollBtn,
    PortraitCard,
  },
  props: {
    nextArticleId: {type: String, required: false, default: null},
  },
  data: () => ({
    // TODO: API化(外部から取得)
    members: [
      {name: "y", games: ["Beatmania iidx", "MUSECA", "オンゲキ"], article: "サークル長です。", portrait: "img/defalut_portrait.jpg"},
      {name: "s", games: ["Beatmania iidx", "CROSS×BEATS"], article: "立ち上げを勧めました。"},
      {name: "m", games: ["SOUND VOLTEX"], article: "ボルテメインです。"},
      {name: "o", games: ["テニラビ", "DEEMO"], article: "スマホメインです。"},
    ],
  }),
}
</script>

<style lang="scss" scoped>
.home-member{
  background-image: url("@/assets/img/bg_neon04.jpg");
  color: #fff;
  font-family: 'Zen Kaku Gothic New', sans-serif;
  font-size: 1rem;
}

.member-container{
  width: 80%;
}

.member-title {
  font-size: 2rem;
  font-weight: 600;
  white-space: nowrap;
  border: 2px solid #fff;
  background-color: rgba($color: #000000, $alpha: 0.4);
  transform: rotate(0.025turn) skew(0deg, -10deg);
}

.member-title::first-letter {
  font-size: 2.1rem;
  color: #22A2F2;
}

.mamber-container {
  gap: 1rem;
}

</style>