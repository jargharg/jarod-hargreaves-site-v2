<template>
  <div v-if="src" v-bind="{ style }" class="relative">
    <nuxt-img
      v-bind="{ alt, sizes, src, ...attrs }"
      class="transition-opacity object-cover absolute w-full h-full"
      :loading="lazy ? 'lazy' : ''"
    />
  </div>
</template>

<script>
export default {
  name: 'SizedImage',

  props: {
    src: {
      type: String,
      required: true,
    },

    alt: {
      type: String,
      default: null,
    },

    dimensions: {
      type: Object,
      default: () => null,
    },

    lazy: {
      type: Boolean,
      default: true,
    },

    sizes: {
      type: String,
      default: 'sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw',
    },
  },

  setup (props, { attrs }) {
    const style = computed(() =>
      props.dimensions
        ? { aspectRatio: props.dimensions.width / props.dimensions.height }
        : { height: '100%', width: '100%' },
    )

    return { attrs, style }
  },
}
</script>
