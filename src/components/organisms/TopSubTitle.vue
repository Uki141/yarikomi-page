<template>
  <div class="top-subtitle d-flex flex-column mt-12" data-aos="fade-right" data-aos-duration="1500"
    data-aos-delay="200">
    <div class="top-subtitle-content ml-12">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.top-subtitle {
  font-family: 'Zen Antique Soft', serif;
  font-size: 10vh;
  color: #fff;
}

.top-subtitle-content {
  font-size: 0.3em;
  background: linear-gradient(transparent 90%, rgba(28, 142, 242, 50%) 45%);
}
</style>