<template>
  <v-btn tile v-bind="$attrs" v-on="$listeners" :min-width="size" :min-height="size" :width="size" :height="size"
    :elevation="elevation">
    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    size: { type: Number, default: 32 },
    elevation: { type: Number, required: false, default: null },
  }
};
</script>