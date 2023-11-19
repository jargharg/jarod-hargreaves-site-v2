<template>
  <div
    :class="{
      'text-sm lg:text-base leading-[1.05] tracking-tight': size === 'base',
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
