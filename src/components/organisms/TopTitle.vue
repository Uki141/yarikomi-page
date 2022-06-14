<template>
  <div class="top-title d-flex flex-column">
    <div class="top-title-subtitle">
      <slot name="subtitle"></slot>
    </div>
    <div class="top-title-title mt-n10">
      <slot></slot>
    </div>
    <div class="top-title-annotation">
      <slot name="annotation"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.top-title-title {
  font-size: 20vh;
  font-family: 'gagagaga', 'RocknRoll One', sans-serif;
}

.top-title-subtitle,
top-title-annotation {
  font-family: 'Zen Kaku Gothic New', sans-serif;
}
</style>