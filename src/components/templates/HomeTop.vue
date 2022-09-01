<template>
  <FluidFillContainer tag="article" class="home-top-section lazyload">
    <v-row no-gutters class="fill-height">
      <v-col cols="12" class="fill-height d-flex align-center justify-center">
        <TitleTextset title="やりこみ" sub-title="音ゲーサークル" slogan1="音を楽しむ、" slogan2="だから本気になる。" />
      </v-col>
    </v-row>
  </FluidFillContainer>
</template>

<script>
import FluidFillContainer from '@/components/templates/containers/FluidFillContainer.vue';
import TitleTextset from '@/components/organisms/textset/TitleTextset.vue';

export default {
  components: {
    FluidFillContainer,
    TitleTextset,
  }

};
</script>

<style lang="scss" scoped>
.home-top-section.lazyload {
  background-image: url("@/assets/img/top.png");
}

.home-top-section.lazyloaded {
  background-image: url("@/assets/img/top.min.gif"), url("@/assets/img/top.png");
}
</style>