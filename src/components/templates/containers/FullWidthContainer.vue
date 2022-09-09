<template>
  <v-container 
    fluid
    :tag="tag"
    class="full-width padding-all-0"
    :class="{'mobile-padding': mobilePadding}"
    v-bind="$attrs">
    <slot />
  </v-container>
</template>

<script>
export default {
  props: {
    tag: { type: String, required: false, default: "div" },
    mobilePadding: { type: Boolean, required: false, default: false },
  }
}
</script>

<style scoped>
  .full-width {
    width: 100%
  }
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