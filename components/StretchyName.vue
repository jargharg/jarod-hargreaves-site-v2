<template>
  <NuxtLink ref="elContainer" class="name" to="/">
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
        <div>
          <span
            v-for="(char, index) in nameParts[0]"
            :key="index"
            :class="`name__letter--${char}`"
          >
            {{ char }}
          </span>
        </div>

        <transition-group name="name-char" tag="div">
          <span
            v-for="(char, index) in nameParts[1]"
            :key="index"
            class="inline-block"
            :class="`name__letter--${char}`"
          >
            {{ char }}
          </span>
        </transition-group>

        <div>
          <span
            v-for="(char, index) in nameParts[2]"
            :key="index"
            :class="`name__letter--${char}`"
          >
            {{ char }}
          </span>
        </div>

        <transition-group name="name-char" tag="div">
          <span
            v-for="(char, index) in nameParts[3]"
            :key="index"
            :class="`name__letter--${char}`"
            class="inline-block"
          >
            {{ char }}
          </span>
        </transition-group>

        <div>
          <span
            v-for="(char, index) in nameParts[4]"
            :key="index"
            :class="`name__letter--${char}`"
          >
            {{ char }}
          </span>
        </div>
      </div>

      <div
        ref="elIndicator"
        class="name__indicator"
        :class="{ 'name__indicator--max': isAtMaxWidth }"
      />
    </div>

    <span ref="elDraggable" class="w-0" />
  </NuxtLink>
</template>

<script>
import gsap from 'gsap'
import Draggable from 'gsap/Draggable'
import sleep from '~/helpers/sleep'

export default {
  setup () {
    let draggable = null

    const elChar = ref(null)
    const elContainer = ref(null)
    const elDraggable = ref(null)
    const elIndicator = ref(null)
    const elSpacer = ref(null)

    const isAtMaxWidth = ref(false)

    const numberOfExtraChars = ref(0)

    const nameParts = reactive(['Ja', '', 'rod Ha', '', 'rgreaves'])

    function initStretcher () {
      const { right: containerRight } =
        elContainer.value.$el.getBoundingClientRect()
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
        trigger: elContainer.value.$el,
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

          numberOfExtraChars.value = Math.floor(
            (draggableRight - spacerRight - 10) / charWidth,
          )

          isAtMaxWidth.value = containerRight - draggableRight < charWidth
        },
      })
    }

    watch(numberOfExtraChars, (extraChars) => {
      let jaString = ''
      let haString = ''

      for (let i = 0; i < extraChars; i++) {
        const initialHas = 2

        const mod = i - initialHas * 2 >= 0 ? 4 : 2

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

      nameParts[1] = jaString
      nameParts[3] = haString
    })

    async function resetStretcher () {
      await sleep(100)
      gsap.set(elDraggable.value, { clearProps: 'all' })
      draggable[0]?.kill()
      numberOfExtraChars.value = 0
      initStretcher()
    }

    onMounted(async () => {
      await nextTick()
      initStretcher()
      window.addEventListener('resize', resetStretcher)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', resetStretcher)
    })

    return {
      elChar,
      elContainer,
      elDraggable,
      elIndicator,
      elSpacer,
      isAtMaxWidth,
      nameParts,
    }
  },
}
</script>

<style lang="scss" scoped>
.name {
  @apply relative flex text-3xl md:text-5xl xl:text-6xl w-full align-baseline font-serif font-medium -mt-2;
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
      @apply flex items-center justify-center h-full text-lg md:text-3xl p-1 brightness-0;
      transition: filter 0.1s;
      content: "👉";
    }

    &--max::after {
      @apply brightness-100;
      content: "🙃";
    }
  }

  &__letter {
    &--J {
      letter-spacing: -0.07em;
    }

    &--a {
      letter-spacing: -0.02em;

      &:has(+ .name__letter--v) {
        letter-spacing: -0.045em;
      }
    }

    &--r {
      letter-spacing: -0.05em;
    }

    &--o {
      letter-spacing: -0.03em;
    }

    &--H {
      letter-spacing: -0.05em;
    }

    &--g {
      letter-spacing: -0.005em;
    }

    &--e {
      letter-spacing: -0.04em;
    }

    &--v {
      letter-spacing: -0.05em;
    }
  }
}

.name-char-enter-active {
  @apply transition-all duration-200;
}

.name-char-enter-from {
  @apply opacity-0 -translate-y-full;
}

.name-char-leave-active {
  @apply transition-none;
}
</style>
