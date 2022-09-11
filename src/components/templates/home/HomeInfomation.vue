<template>
  <FullWidthContainer
    tag="article"
    class="home-information pt-16">
    <div
      class="mt-8 d-flex flex-column">
      <v-row no-gutters>
        <v-col class="d-flex align-center justify-center px-6">  
          <div
            class="d-flex flex-column align-start">
            <div class="info-title d-flex flex-wrap mb-6">
              <div>音ゲーサークル</div>
              <div>「やりこみ」とは</div>
            </div>
            <div class="info-area d-flex flex-column align-start pa-4">
              <div class="info-text mb-4">
                <span>株式会社こだわりの<b>"音ゲー"好き</b>が集まる場所</span>
              </div>

              <div class="info-text mb-4">
                <span>「交流」と「成長」を目的とし、楽しみながら音ゲーを「やりこむ」サークルです。</span>
                <ul>
                  <li><b>音ゲー</b>に興味がある方</li>
                  <li>普段<b>カジュアル</b>にプレイしている方</li>
                  <li>引かれるくらい<b>やりこんでいる</b>方</li>
                </ul>
                <span>どんなスタイルでも楽しめる活動を目指しています！</span>
              </div>

              <div class="info-text mb-4">
                <span><b>サークルメンバー絶賛</b>募集中！</span>
                <span>興味のある方は、<b>代表まで</b>ご連絡ください！</span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
      <div class="py-4">
        <SmoothScrollBtn
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
export default {
  components: {
    FullWidthContainer,
    SmoothScrollBtn,
  },
  props: {
    nextArticleId: {type: String, required: false, default: null},
  }
}
</script>

<style lang="scss" scoped>
.home-information{
  background: url("@/assets/img/bg_neon02_dark.jpg") no-repeat center center / cover;
  color: #fff;
  font-family: 'Zen Kaku Gothic New', sans-serif;
}

.info-title {
  max-width: 100%;
  font-size: 2rem;
  font-weight: 700;
  border: 2px solid #fff;
  padding: 5px 10px;
  background-color: rgba($color: #000000, $alpha: 0.4);
  transform: rotate(0.025turn) skew(0deg, -10deg);
}

.info-title > div:first-child::first-letter {
  color: #22A2F2;
}

.info-area {
  border: 2px dotted #fff;
  padding: 5px 10px;
  background-color: rgba($color: #000000, $alpha: 0.4);
}

.info-text {
  font-size: 1rem;
}

.info-text b {
  font-weight: 600;
}

.info-text > span {
  display: block;
}
</style>