<template>
  <div v-if="image?.url">
    <div class="h-full lg:hidden">
      <PrismicSizedImage :image="image.SmallScreen" />
    </div>

    <div class="h-full hidden lg:block">
      <PrismicSizedImage :image="image" />
    </div>

    <p v-if="caption" class="container mt-2 text-xs">
      {{ caption }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true,
    },

    caption: {
      type: String,
      default: null,
    },
  },
}
</script>
