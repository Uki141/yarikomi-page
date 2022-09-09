<template>
  <div
    class="top-title d-flex flex-column"
    data-aos="fade-right"
    data-aos-duration="1500">
    <div class="top-title-subtitle">
      <slot name="subtitle" />
    </div>
    <div class="top-title-title mt-n16 d-flex">
      <slot />
      <div class="top-title-annotation align-self-end">
        <slot name="annotation" />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.top-title {
  font-size: 10vh;
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