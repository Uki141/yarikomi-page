<template>
  <FullWidthContainer id="Footer">
    <v-container fluid>
      <v-row class="pb-4">
        <v-col cols="6">
          <a
            v-smooth-scroll="{scrollTo: '#HomeTop', container: '#HomeContent'}"
            class="footer-title"
            href="#HomeTop">やりこみ</a>
        </v-col>
        <v-divider
          vertical
          dark />
        <v-spacer />
        <v-col cols="6" />
      </v-row>
      <v-row>
        <v-col
          cols="6"
          class="d-flex flex-column">
          <div class="footer-address">
            <p>株式会社こだわり</p>
            <v-divider />
            <p>東京都品川区上大崎2-24-11 5F</p>
          </div>
        </v-col>
        <v-spacer />
        <v-col
          cols="6"
          class="d-flex flex-column justify-end">
          <div class="d-flex justify-end">
            <span>🄫 KODAWARI.inc allright reserved</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </FullWidthContainer>
</template>

<script>
import FullWidthContainer from "@/components/templates/containers/FullWidthContainer.vue"
export default {
  components: {
    FullWidthContainer
  }
}
</script>

<style scoped>
#Footer {
  background-color: #151727; 
  color: #fff;
}

.footer-title {
  font-size: 2rem;
  text-decoration: none;
  color: #22A2F2;
  font-family: 'gagagaga', 'RocknRoll One', sans-serif;
}

.footer-address {
  font-size: 1rem;
}
</style>