<template>
  <h1 ref="elName" class="name">
    <span>Ja</span>

    <span class="name__repeater">
      <span ref="elLetter" class="name__repeater__letter">
        {{ repeatedChars }}
      </span>

      <span class="name__repeater__spacer" aria-hidden="true">ja</span>
    </span>

    <span
      ref="elDraggable"
      class="name__draggable"
      :class="{ 'name__draggable--max': isAtMaxWidth }"
    >rod Hargreaves</span>
  </h1>
</template>

<script>
import gsap from 'gsap'
import Draggable from 'gsap/Draggable'

// @TODO: this can probably be much simpler — just change the text content on drag of the name element
// the dragger can be a separate element that's absolutely positioned over the name
export default {
  setup () {
    let draggable = null

    const elName = ref(null)
    const elDraggable = ref(null)
    const elLetter = ref(null)

    const numberOfChars = ref(1)
    const repeatedChars = computed(() => {
      return `${'ja'.repeat(numberOfChars.value)}`
    })
    const isAtMaxWidth = ref(false)

    function initStretcher () {
      const { right: containerRight } = elName.value.getBoundingClientRect()
      const { left: charLeft, width: charWidth } =
        elLetter.value.getBoundingClientRect()
      const { right, width } = elDraggable.value.getBoundingClientRect()

      const bounds = {
        left: elDraggable.value.offsetLeft,
        width: containerRight - right + width,
      }

      draggable = Draggable.create(elDraggable.value, {
        bounds,
        trigger: '.name',
        type: 'x',
        liveSnap: (value) => {
          return value - (value % charWidth)
        },
        onDrag: () => {
          const { left, right } = elDraggable.value.getBoundingClientRect()
          numberOfChars.value = Math.round((left - charLeft) / charWidth)
          isAtMaxWidth.value = containerRight - right < charWidth
        },
      })
    }

    function resetStretcher () {
      gsap.set(elDraggable.value, { clearProps: 'all' })
      draggable[0]?.kill()
      numberOfChars.value = 1
      initStretcher()
    }

    onMounted(() => {
      initStretcher()
      window.addEventListener('resize', resetStretcher)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', resetStretcher)
    })

    return {
      repeatedChars,
      elName,
      elDraggable,
      elLetter,
      isAtMaxWidth,
    }
  },
}
</script>

<style lang="scss" scoped>
.name {
  @apply relative flex text-lg w-full align-baseline;
  $root: &;

  &:hover {
    #{$root}__draggable::after {
      @apply brightness-100;
    }
  }

  &__repeater {
    @apply relative;

    &__spacer {
      @apply absolute opacity-0 not-sr-only;
    }

    &__letter {
      @apply block absolute z-50 top-0 left-0 overflow-visible;
    }
  }

  &__draggable {
    @apply relative;

    &::after {
      @apply inline-block text-base p-1 brightness-0;
      transition: filter 0.1s, transform 0.1s;
      content: "👉";
    }

    &--max::after {
      @apply -scale-x-100;
    }
  }
}
</style>
