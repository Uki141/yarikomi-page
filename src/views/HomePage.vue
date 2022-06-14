<template>
  <v-container id="Home" fluid class="pa-0">
    <HomeTopSectionVue />
    <HomeArticle :halfHeight="true">
      <template #title><span class="title-impact">音ゲー</span>って何？</template>
      <template #description>
        <p>音ゲーとは、</p>
        <p>流れてくる音楽のリズムに合わせて操作を行う、</p>
        <p>体感型ゲームの総称。</p>
      </template>
    </HomeArticle>
    <v-divider></v-divider>
    <HomeArticle :halfHeight="true" :rightJustifiy="true">
      <template #title><span class="title-impact-red">何が</span>楽しいの？</template>
      <template #description>
        <p>知らない曲との出会い</p>
        <p>昨日の自分を明確に超えられる達成感</p>
        <p>音楽と同じで、人それぞれの楽しみ方がある。</p>
      </template>
    </HomeArticle>
    <v-divider></v-divider>
    <HomeArticle :halfHeight="false" :rightJustifiy="false" :dark="true">
      <template #title><span class="title-impact">活動内容</span></template>
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

  </v-container>
</template>

<script>
import HomeTopSectionVue from "@/components/templates/HomeTopSection.vue"
import HomeArticle from "@/components/templates/HomeArticle.vue"

export default {
  components: {
    HomeTopSectionVue,
    HomeArticle
  }
}
</script>

<style scoped>
.full-fill {
  height: 100vh;
}
</style>