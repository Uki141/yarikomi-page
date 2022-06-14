<template>
  <v-container fluid class="home-top-section">
    <v-row>
      <v-col class="col-lg-8 col-12 full-height d-flex flex-column justify-center">
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
  background-image: url("@/assets/img/top.min.gif");
}

.full-height {
  height: 100vh;
  background-color: rgba(6, 8, 13, 90%);
  clip-path: polygon(0% 100%, 0% 0%, 62.5% 0%, 100% 100%);
}
</style>