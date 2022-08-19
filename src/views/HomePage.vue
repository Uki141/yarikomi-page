<template>
  <v-container id="Home" fluid class="home-page pa-0">
    <HomeTopSection>
      <template #titleHeader>音ゲーサークル</template>
      <template #title>やりこみ</template>
      <template #annotation>(仮称)</template>
      <template #subTitle>音を楽しむ、だから本気になる。</template>
    </HomeTopSection>

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
            <li>Twitterに書くほどでもない自慢　とか</li>
            <li>誰かと共有したいこと　とか</li>
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
    </HomeInfomation>
  </v-container>
</template>

<script>
import HomeTopSection from "@/components/templates/HomeTopSection.vue"
import HomeArticle from "@/components/templates/HomeArticle.vue"
import HomeGames from "@/components/templates/HomeGames.vue"
import HomeInfomation from "@/components/templates/HomeInfomation.vue"

export default {
  components: {
    HomeTopSection,
    HomeArticle,
    HomeGames,
    HomeInfomation
  },
  data() {
    return {
      drawer: true,
    }
  }
}
</script>

<style>
:root {
  /* 画面サイズ関連 */
  --section-height: 100vh;
  --nav-height: 50px;
  /* 色関係 */
  --base-color: #06080D;
  --base-color-rgb: 6, 8, 3;
  --text-color: #FFFFFF;
  --text-color-rgb: 255, 255, 255;
  /* フォント関係 */
  font-size: calc(100vw / 32);
}
</style>

<style scoped>
.full-fill {
  height: 100vh;
}
</style>