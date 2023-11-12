<template>
  <h1 ref="elName" class="name">
    <div
      ref="elChar"
      class="absolute opacity-0 not-sr-only pointer-events-none select-none"
    >
      h
    </div>

    <div ref="elSpacer" class="opacity-0">
      Jarod Hargreaves
    </div>

    <div
      class="absolute flex items-baseline gap-2 not-sr-only"
      aria-hidden="true"
    >
      <div class="flex">
        <span> Ja </span>

        <transition-group name="name-char" tag="div">
          <span
            v-for="(char, index) in jaStretchedChars"
            :key="`${index}-ja`"
            class="inline-block"
          >
            {{ char }}
          </span>
        </transition-group>

        <div>rod Ha</div>

        <transition-group name="name-char" tag="div">
          <span
            v-for="(char, index) in haStretchedChars"
            :key="`${index}-ha`"
            class="inline-block"
          >
            {{ char }}
          </span>
        </transition-group>

        <div>rgreaves</div>
      </div>

      <div
        ref="elIndicator"
        class="name__indicator"
        :class="{ 'name__indicator--max': isAtMaxWidth }"
      />
    </div>

    <span ref="elDraggable" class="w-0" />
  </h1>
</template>

<script>
import gsap from 'gsap'
import Draggable from 'gsap/Draggable'

export default {
  setup () {
    let draggable = null

    const elChar = ref(null)
    const elDraggable = ref(null)
    const elIndicator = ref(null)
    const elName = ref(null)
    const elSpacer = ref(null)

    const numberOfExtraChars = ref(0)
    const jaStretchedChars = ref('')
    const haStretchedChars = ref('')

    watch(numberOfExtraChars, (extraChars) => {
      let jaString = ''
      let haString = ''

      for (let i = 0; i < extraChars; i++) {
        const initialAs = 5

        // if (i <= initialAs && extraChars <= initialAs) {
        if (i <= initialAs) {
          haString += 'a'
        } else {
          const mod = i - initialAs > 0 ? 4 : 2

          if (i % mod === 0) {
            haString += 'a'
          } else if (i % mod === 1) {
            haString = `${haString.slice(0, -1)}ha`
          } else if (i % mod === 2) {
            jaString += 'a'
          } else {
            jaString = `${jaString.slice(0, -1)}ja`
          }
        }
      }

      jaStretchedChars.value = jaString
      haStretchedChars.value = haString
    })

    const isAtMaxWidth = ref(false)

    function initStretcher () {
      const { right: containerRight } = elName.value.getBoundingClientRect()
      const { right: draggableRight } =
        elDraggable.value.getBoundingClientRect()
      const { right: spacerRight } = elSpacer.value.getBoundingClientRect()

      const charWidth = elChar.value.offsetWidth
      const indicatorWidth = elIndicator.value.offsetWidth

      const bounds = {
        left: elDraggable.value.offsetLeft,
        width: containerRight - draggableRight,
      }

      draggable = Draggable.create(elDraggable.value, {
        bounds,
        trigger: elName.value,
        type: 'x',
        liveSnap: (value) => {
          return Math.min(
            value - (value % charWidth),
            containerRight - indicatorWidth,
          )
        },
        onDrag: () => {
          const { right: draggableRight } =
            elDraggable.value.getBoundingClientRect()

          numberOfExtraChars.value = Math.round(
            (draggableRight - spacerRight) / charWidth,
          )
          isAtMaxWidth.value = containerRight - draggableRight < charWidth
        },
      })
    }

    function resetStretcher () {
      gsap.set(elDraggable.value, { clearProps: 'all' })
      draggable[0]?.kill()
      numberOfExtraChars.value = 1
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
      elChar,
      elDraggable,
      elIndicator,
      elName,
      elSpacer,
      isAtMaxWidth,
      jaStretchedChars,
      haStretchedChars,
    }
  },
}
</script>

<style lang="scss" scoped>
.name {
  @apply relative flex text-6xl w-full align-baseline font-serif font-medium -mt-2 overflow-y-hidden;
  $root: &;
  letter-spacing: -0.03em;
  line-height: 1.05;

  &:hover {
    #{$root}__indicator::after {
      @apply brightness-100;
    }
  }

  &__indicator {
    &::after {
      @apply flex items-center justify-center h-full text-3xl p-1 brightness-0;
      transition: filter 0.1s;
      content: "👉";
    }

    &--max::after {
      @apply brightness-100;
      content: "🙃";
    }
  }
}

.name-char-enter-active {
  @apply transition-all duration-200 ease-out;
}

.name-char-enter-from {
  @apply -translate-y-full opacity-0;
}

.name-char-leave-active {
  @apply transition-none;
}
</style>
