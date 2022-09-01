<template>
  <!-- height: 100%, width: 100%のコンテナ -->
  <v-container fluid :tag="tag" class="fill-height pa-0" v-bind="$attrs">
    <slot />
  </v-container>
</template>

<script>
export default {
  props: {
    tag: { type: String, default: "div" }
  }
};
</script>