<template>
  <v-container
    fluid
    class="home-games"
    :style="styles">
    <v-row class="game-container">
      <div
        class="left-game"
        @click="focus = 'left'">
        <div class="game-article bg-bpl">
          <GameArticle>
            <template #title>
              beatmania IIDX
            </template>
            <template #subtitle>
              KONAMIの誇る 元祖音ゲー
            </template>
            <template #main>
              <p>7つの鍵盤とターンテーブルを操作して</p>
              <p>音楽を奏でるDJシミュレーションゲーム。</p>
              <p><br></p>
              <p>NHK『沼にハマってきいてみた』や</p>
              <p>フジテレビ『いいすぽ！』などで取り上げられ、</p>
              <p>e-sportsとしても注目される今アツい音ゲー</p>
              <p><br></p>
              <p>去年発足されたプロリーグも非常にアツく、</p>
              <p>6/29から始まるリーグ戦season2も必見！</p>
            </template>
            <template #media>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/oI-AHudJNrk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen />
            </template>
          </GameArticle>
        </div>
      </div>
      <div
        class="right-game"
        @click="focus = 'right'">
        <div class="game-article bg-sekai">
          <GameArticle>
            <template #title>
              プロジェクトセカイ
            </template>
            <template #subtitle>
              一緒に歩み出そう、想いのセカイへ
            </template>
            <template #main>
              <p>スマホやタブレットでできる</p>
              <p>カジュアルな音楽ゲーム、通称『プロセカ』。</p>
              <p><br></p>
              <p>月間アクティブユーザー数は300万人といわれ、</p>
              <p>ポカリスエットやカップヌードルとコラボするなど</p>
              <p>今もっとも身近にある音ゲー</p>
              <p><br></p>
              <p>多くのユーザーを瞬時にマッチングさせる対戦や</p>
              <p>スマホ上で3Dモデルのライブをさせるなど、</p>
              <p>エンジニア的にも興味深い技術要素があり、</p>
              <p>そういう意味でも是非。</p>
            </template>
            <template #media>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/aq8-3XKKI0c"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen />
            </template>
          </GameArticle>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import GameArticle from "@/components/organisms/GameArticle.vue"

export default {
  components: {
    GameArticle
  },
  data() {
    return {
      focus: null,
    }
  },

  computed: {
    styles() {
      let leftWidthPer = "50"
      let rightWidthPer = "50"
      let leftZIndex = 0
      let rightZIndex = 1
      if (this.focus) {
        if (this.focus === "left") {
          leftWidthPer = "90"
          leftZIndex = 1
          rightWidthPer = "10"
          rightZIndex = 0
        } else {
          leftWidthPer = "10"
          leftZIndex = 0
          rightWidthPer = "90"
          rightZIndex = 1
        }
      }
      return {
        "--left-game-width": leftWidthPer + "%",
        "--left-game-z": leftZIndex,
        "--right-game-width": rightWidthPer + "%",
        "--right-game-z": rightZIndex
      }
    }
  }
}
</script>

<style scoped>
.home-games {
  height: 100vh;
  background-color: #fff;

  --left-game-width: 90%;
  --left-game-z: 0;
  --right-game-width: 90%;
  --right-game-z: 1;
}

.game-container {
  position: relative;
}

.left-game {
  position: absolute;
  width: var(--left-game-width);
  min-height: 100vh;
  transition: width 1s, z-index 5s;
  z-index: var(--left-game-z);
}

.right-game {
  position: absolute;
  right: 0;
  width: var(--right-game-width);
  min-height: 100vh;
  transition: width 1s;
  z-index: var(--right-game-z);
}

.game-article {
  color: #fff;
  overflow: hidden;
  width: 90vw;
  min-height: 100vh;
  max-height: 100vh;
}

.bg-bpl {
  background-image: url("@/assets/img/bpl.png");
  background-size: cover;
}

.bg-sekai {
  background-image: url("@/assets/img/miku_d.png");
  background-size: cover;
}
</style>