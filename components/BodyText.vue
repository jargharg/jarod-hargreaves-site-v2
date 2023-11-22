<template>
  <div
    class="body-text"
    :class="{
      'text-sm lg:text-base leading-[1.1] -tracking-[0.015em]': size === 'base',
      // add other sizes here
      'prose max-w-none': prose,
      'leading-7': !prose,
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BodyText',

  props: {
    prose: {
      type: Boolean,
      default: true,
    },

    size: {
      type: String,
      default: 'base',
    },
  },
}
</script>

<style lang="scss" scoped>
.body-text {
  &:deep {
    a {
      font-weight: inherit;
    }
  }
}
</style>
