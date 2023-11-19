<template>
  <component
    :is="component"
    class="heading"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Heading',

  props: {
    level: {
      type: [Number, String],
      default: 1,
    },
  },

  setup (props) {
    const component = computed(() => `h${props.level}`)
    return { component }
  },
}
</script>

<style lang="scss" scoped>
.heading {
  @apply font-serif font-medium tracking-tighter;
}
</style>
