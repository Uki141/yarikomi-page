<template>
  <v-container fluid class="home-top-section lazyload" data-bg="/img/top.min.gif">
    <v-row>
      <v-col class="col-12 full-height d-flex flex-column justify-center">
        <TopTitle>
          <template #subtitle>音ゲーサークル</template>
          <template>やりこみ</template>
          <template #annotation>(仮称)</template>
        </TopTitle>

        <TopSubTitle>
          <template>音を楽しむ、だから本気になる。</template>
        </TopSubTitle>
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
import TopTitle from '@/components/organisms/TopTitle.vue'
import TopSubTitle from '@/components/organisms/TopSubTitle.vue'

export default {
  components: {
    TopTitle,
    TopSubTitle,
  }
}
</script>

<style scoped>
.home-top-section {
  height: 100vh;
  min-height: 100vh;
  background-image: url("@/assets/img/top.png");
}

.full-height {
  height: 100vh;
  background-color: rgba(6, 8, 13, 90%);
  clip-path: polygon(0% 100%, 0% 0%, 50% 0%, 72% 100%);
}

@media (max-width:1750px) {
  .full-height {
    clip-path: polygon(0% 100%, 0% 0%, 62.5% 0%, 84.5% 100%);
  }
}

@media (max-width:1440px) {
  .full-height {
    clip-path: polygon(0% 100%, 0% 0%, 60% 0%, 82% 100%);
  }
}

@media (max-width:1200px) {
  .full-height {
    clip-path: polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%);
  }
}
</style>