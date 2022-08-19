<template>
  <v-container fluid class="home-top-section lazyload base">
    <v-row class="full-height">
      <v-col class="col-12 d-flex flex-column justify-center">
        <TopTitle>
          <template #titleHeader>
            <slot name="titleHeader"></slot>
          </template>
          <template>やりこみ</template>
          <template #annotation>(仮称)</template>
        </TopTitle>

        <TopSubTitle>
          <template>音を楽しむ、だから本気になる。</template>
        </TopSubTitle>
      </v-col>
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
  min-height: var(--section-height);
  max-height: var(--section-height);
}

.home-top-section.lazyload {
  background-image: url("@/assets/img/top.png");
}

.home-top-section.lazyloaded {
  background-image: url("@/assets/img/top.min.gif"), url("@/assets/img/top.png");
}

.full-height {
  height: var(--section-height);
  background-color: rgba(var(--base-color-rgb), 0.9);
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