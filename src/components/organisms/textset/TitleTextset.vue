<template>
  <div class="fill-height title-text-set">
    <!-- モバイル用 -->
    <v-row
      v-if="$vuetify.breakpoint.smAndDown"
      no-gutters
      class="fill-height">
      <v-col
        cols="2"
        class="d-flex align-center justify-end"
        data-aos="fade-up-right">
        <div class="slogan-2 writing-mode-vertical">
          {{ slogan2 }}
        </div>
      </v-col>
      <v-col
        cols="8"
        class="d-flex flex-row justify-center align-center">
        <div
          class="title-container"
          data-aos="flip-left">
          <div class="main-title d-flex flex-nowrap justify-center">
            <div
              v-for="(s, i) in title.split('')"
              :key="i">
              {{ s }}
            </div>
          </div>
          <div class="sub-title d-flex justify-center">
            <span>{{ subTitle }}</span>
          </div>
        </div>
      </v-col>
      <v-col
        cols="2"
        class="d-flex align-center justify-start"
        data-aos="fade-down-left">
        <div class="slogan-1 writing-mode-vertical">
          {{ slogan1 }}
        </div>
      </v-col>
    </v-row>
    <!-- デスクトップ用 -->
    <div
      v-else
      class="fill-height d-flex flex-column justify-center">
      <div
        class="top-title d-flex flex-column skew-bg py-12"
        data-aos="fade-right">
        <div class="top-title-subtitle">
          {{ subTitle }}
        </div>
        <div class="top-title-title mt-n16 d-flex">
          {{ title }}
        </div>
        <div class="top-title-annotation align-center ml-6">
          {{ slogan1 }}{{ slogan2 }}
        </div>
      </div>
    </div>
  </div>

  <!-- デスクトップ用 -->
</template>

<script>
export default {
  props: {
    title: { type: String, required: true, default: null },
    subTitle: { type: String, required: false, default: null },
    slogan1: { type: String, required: false, default: null },
    slogan2: { type: String, required: false, default: null },
  }
}
</script>

<style lang="scss" scoped>
// モバイル用
.title-text-set {
  width: 100%;
  color: #fff;
}

.title-container {
  height: 150px;
}

.sub-title {
  font-size: clamp(16px, 6rem, 32px);
  font-weight: 600;
  letter-spacing: 3px;
  font-family: 'Zen Kaku Gothic New', sans-serif;
}

.main-title {
  padding: 0 1rem;
  font-size: clamp(60px, 22rem, 100px);
  column-gap: 2vw;
  color: #fff;
  font-family: 'gagagaga', 'RocknRoll One', sans-serif;
  border: 2px solid #fff;
  background-color: rgba($color: #000000, $alpha: 0.4);
  transform: rotate(0.025turn) skew(0deg, -10deg);
}

.writing-mode-vertical {
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
}

.slogan-1,
.slogan-2 {
  font-size: clamp(20px, 9rem, 30px);
  height: fit-content;
  padding: 5rem 1rem;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background-color: rgba($color: #000000, $alpha: 0.4);
  clip-path: polygon(0% 0%, 65% 0%, 100% 10%, 100% 100%, 30% 100%, 0% 90%);
  transition: transform 0.5s ease;
}

.slogan-2 {
  transform: translateY(80%) rotate(0.005turn);
}

.slogan-1 {
  transform: translateY(-100%) rotate(0.005turn);
}

@media screen and (max-height: 640px) {
  .slogan-2 {
    transform: translateY(0%) rotate(0.005turn);
  }

  .slogan-1 {
    transform: translateY(-0%) rotate(0.005turn);
  }
}

// デスクトップ用
.skew-bg {
  background-color: rgba(6, 8, 13, 70%);
  clip-path: polygon(0% 100%, 0% 0%, 75% 0%, 90% 100%);
}

.top-title {
  font-size: 7rem;
  min-width: 1280px;
  color: #fff;
}

.top-title-title {
  font-size: 2em;
  color: #22A2F2;
  -webkit-text-stroke: 2px #1A2E40;
  font-family: 'gagagaga', 'RocknRoll One', sans-serif;
}

.top-title-subtitle {
  font-size: 0.5em;
  font-family: 'Zen Kaku Gothic New', sans-serif;
}

.top-title-annotation {
  color: #fff;
  -webkit-text-stroke: 0px #1A2E40;
  font-size: 0.15em;
  font-family: 'Zen Kaku Gothic New', sans-serif;
}
</style>