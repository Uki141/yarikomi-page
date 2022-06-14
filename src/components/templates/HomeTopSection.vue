<template>
  <v-container fluid class="home-top-section">
    <v-row>
      <v-col class="col-8 full-height d-flex flex-column">
        <TopTitle>
          <template #subtitle>音ゲーサークル</template>
          <template>やりこみ</template>
          <template #annotation>(仮称)</template>
        </TopTitle>
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
import TopTitle from '../organisms/TopTitle.vue'
export default {
  components: {
    TopTitle
  }
}
</script>

<style scoped>
.home-top-section {
  height: 100vh;
  background-color: aquamarine;
}

.full-height {
  height: 100vh;
  background-color: aliceblue;
}
</style>