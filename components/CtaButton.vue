<template>
  <component
    :is="componentType"
    v-if="$slots.default"
    ref="elButton"
    class="cta-button"
    :class="classModifiers"
    v-bind="boundAttrs"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'CtaButton',

  props: {
    border: { type: Boolean, default: false },
  },

  emits: ['click'],

  setup (props, { attrs }) {
    const elButton = ref(null)

    const componentType = computed(() => {
      if (attrs.to) {
        return resolveComponent('NuxtLink')
      }
      if (attrs.href) {
        return 'a'
      }
      if (attrs.dummy) {
        return 'div'
      }
      return 'button'
    })

    const boundAttrs = computed(() => {
      const boundAttrs = { ...(attrs ?? {}) }

      if (attrs.href) {
        boundAttrs.target = '_blank'
      }

      return boundAttrs
    })

    const classModifiers = computed(() => {
      return [
        {
          'cta-button--border': props.border,
        },
      ]
    })

    // onMounted(() => {
    //   gsap.timeline({ repeat: -1 })
    //     .to(elButton.value.$el, {
    //       scale: 2,
    //     })
    // })

    return { boundAttrs, componentType, classModifiers, elButton }
  },
}
</script>

<style lang="scss" scoped>
.cta-button {
  $root: &;
  @apply flex items-center whitespace-nowrap;
  @apply text-center leading-none;

  &--border {
    @apply border border-black px-12 py-4 hover:bg-black hover:text-white;
  }
}
</style>
