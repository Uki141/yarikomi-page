<template>
  <!-- height: 100%, width: 100%のコンテナ -->
  <v-container 
    fluid 
    :tag="tag"
    class="fill-height padding-all-0"
    :class="{'mobile-padding': mobilePadding}"
    v-bind="$attrs">
    <slot />
  </v-container>
</template>

<script>
export default {
  props: {
    tag: { type: String, default: "div" },
    mobilePadding: { type: Boolean, default: false}
  }
}
</script>

<style scoped>
.padding-all-0 {
  padding: 0px;
}

@media screen and (max-width: 425px) {
  .mobile-padding {
    padding: 0px;
    padding-bottom: 10%;
  }
}

</style>