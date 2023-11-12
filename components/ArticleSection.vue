<template>
  <section
    :class="{
      container: withContainer,
      'my-6 md:my-10': withMargin,
    }"
  >
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    withContainer: {
      type: Boolean,
      default: true,
    },

    withMargin: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
