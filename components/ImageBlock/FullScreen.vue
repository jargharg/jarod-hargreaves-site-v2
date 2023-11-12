<template>
  <div class="h-[100dvh] w-full relative">
    <div class="fs-image fs-image--wide">
      <PrismicSizedImage :image="image.wide" :lazy="lazy" :with-dimensions="false" />
    </div>

    <div class="fs-image fs-image--default">
      <PrismicSizedImage :image="image" :lazy="lazy" :with-dimensions="false" />
    </div>

    <div class="fs-image fs-image--square">
      <PrismicSizedImage :image="image.square" :lazy="lazy" :with-dimensions="false" />
    </div>

    <div class="fs-image fs-image--portrait">
      <PrismicSizedImage :image="image.portrait" :lazy="lazy" :with-dimensions="false" />
    </div>

    <div
      v-if="caption"
      class="absolute bottom-0 inset-x-0 z-10 bg-gradient-to-t from-[#0004]"
    >
      <p class="py-4 container text-xs sm:text-sm text-white">
        {{ caption }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true,
    },

    lazy: {
      type: Boolean,
      default: true,
    },

    caption: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.fs-image {
  @apply absolute inset-0 hidden;
  $root: &;

  @media (min-aspect-ratio: 9/5) {
    &#{$root}--wide {
      @apply block;
    }
  }

  @media (min-aspect-ratio: 5/4) and (max-aspect-ratio: 9/5) {
    &#{$root}--default {
      @apply block;
    }
  }

  @media (min-aspect-ratio: 1/1) and (max-aspect-ratio: 5/4) {
    &#{$root}--square {
      @apply block;
    }
  }

  @media (max-aspect-ratio: 1/1) {
    &#{$root}--portrait {
      @apply block;
    }
  }
}
</style>
