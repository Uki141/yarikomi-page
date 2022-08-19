<template>
  <div class="top-title d-flex flex-column" data-aos="fade-right" data-aos-duration="1500"
    data-aos-anchor-placement="bottom-bottom">
    <div>
      <span class="top-title-titleHeader ">
        <slot name="titleHeader"></slot>
      </span>
    </div>
    <div class="top-title-title d-flex primary--text">
      <slot></slot>
      <div class="top-title-annotation align-self-end">
        <slot name="annotation"></slot>
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
  min-width: calc(100vw * 0.8);
  color: var(--text-color);
}

.top-title-titleHeader {
  font-size: 1rem;
  font-family: 'Zen Kaku Gothic New', sans-serif;
}

.top-title-title {
  font-size: min(5rem, 300px);
  font-family: 'gagagaga', sans-serif;
  -webkit-text-stroke: 2px #1A2E40;
  margin-top: -1.5rem;
}

.top-title-annotation {
  font-size: 0.75rem;
  font-family: 'Zen Kaku Gothic New', sans-serif;
  -webkit-text-stroke: 0px;
  color: var(--text-color);
}
</style>