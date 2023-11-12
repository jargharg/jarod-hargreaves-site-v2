<template>
  <SizedImage
    :src="image.url"
    :alt="image.alt"
    :dimensions="withDimensions ? image.dimensions : null"
    :lazy="lazy"
    :sizes="sizes"
  />
</template>

<script>
export default {
  name: 'PrismicSizedImage',

  props: {
    image: {
      type: Object,
      required: true,
    },

    lazy: {
      type: Boolean,
      default: true,
    },

    sizes: {
      type: String,
      default: 'sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw',
    },

    withDimensions: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
