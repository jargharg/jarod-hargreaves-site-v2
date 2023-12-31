<template>
  <NuxtLink ref="elContainer" class="name group" to="/" @mousedown.once="killDragTl">
    <div ref="elChar" class="absolute opacity-0 not-sr-only pointer-events-none select-none">
      h
    </div>

    <div ref="elSpacer" class="opacity-0">
      Jarod Hargreaves
    </div>

    <div class="absolute flex items-baseline gap-2 not-sr-only pr-1 bg-white z-10" aria-hidden="true">
      <div class="flex items-baseline">
        <div>
          <span v-for="(char, index) in nameParts[0]" :key="index" :class="`name__letter--${char}`">
            {{ char }}
          </span>
        </div>

        <transition-group name="name-char" tag="div">
          <span v-for="(char, index) in nameParts[1]" :key="index" class="inline-block" :class="`name__letter--${char}`">
            {{ char }}
          </span>
        </transition-group>

        <div>
          <span v-for="(char, index) in nameParts[2]" :key="index" :class="`name__letter--${char}`">
            {{ char }}
          </span>
        </div>

        <transition-group name="name-char" tag="div">
          <span v-for="(char, index) in nameParts[3]" :key="index" :class="`name__letter--${char}`" class="inline-block">
            {{ char }}
          </span>
        </transition-group>

        <div>
          <span v-for="(char, index) in nameParts[4]" :key="index" :class="`name__letter--${char}`">
            {{ char }}
          </span>
        </div>
      </div>
    </div>

    <span ref="elDraggable" class="name__draggable">
      <img src="/hand-dither.png" class="name__draggable__icon">
    </span>
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

    let dragTl = null

    function initStretcher () {
      const { right: containerRight } =
        elContainer.value.$el.getBoundingClientRect()
      const { right: draggableRight } =
        elDraggable.value.getBoundingClientRect()
      const { right: spacerRight } = elSpacer.value.getBoundingClientRect()

      const charWidth = elChar.value.offsetWidth

      const bounds = {
        left: elDraggable.value.offsetLeft,
        width: containerRight - draggableRight,
      }

      draggable = Draggable.create(elDraggable.value, {
        bounds,
        trigger: elContainer.value.$el,
        type: 'x',
        // liveSnap: (value) => {
        //   return Math.min(
        //     value - (value % charWidth),
        //     containerRight,
        //   )
        // },
        zIndexBoost: false,
        onDrag: () => {
          const { left: draggableLeft } =
            elDraggable.value.getBoundingClientRect()

          numberOfExtraChars.value = Math.floor(
            (draggableLeft - spacerRight) / charWidth,
          )

          isAtMaxWidth.value = containerRight - draggableLeft < charWidth
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

    function killStretcher () {
      gsap.set(elDraggable.value, { clearProps: 'all' })
      draggable[0]?.kill()
      numberOfExtraChars.value = 0
    }

    function killDragTl () {
      dragTl?.kill()
      gsap.set(elDraggable.value, { clearProps: 'all' })
    }

    async function resetStretcher () {
      await sleep(100)
      killStretcher()
      initStretcher()
    }

    onMounted(async () => {
      await nextTick()
      initStretcher()
      window.addEventListener('resize', resetStretcher)

      dragTl = gsap.timeline({ repeat: 1, repeatDelay: 1 }).to(elDraggable.value, {
        duration: 1,
        x: 20,
        ease: 'sine.inOut',
      }).to(elDraggable.value, {
        duration: 0.8,
        x: 0,
        ease: 'elastic.out',
      })
    })

    onUnmounted(() => {
      killDragTl()
      killStretcher()
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
      killDragTl,
    }
  },
}
</script>

<style lang="scss" scoped>
.name {
  @apply relative flex text-2xl md:text-4xl xl:text-5xl w-full align-baseline font-serif font-medium -mt-2 leading-none;
  $root: &;
  letter-spacing: -0.03em;

  &:hover {
    #{$root}__indicator::after {
      @apply brightness-100;
    }
  }

  &__draggable {
    @apply hidden sm:block ml-4 w-10 md:w-16 relative;

    &::after {
      content: "";
      @apply absolute top-[48%] right-full w-40 md:w-80 border-b-2 border-black;
    }

    &__icon {
      @apply absolute left-0 top-0 xl:top-2 w-full;
      image-rendering: pixelated;
    }
  }

  &__letter {
    &--J {
      letter-spacing: -0.07em;
    }

    &--a {
      letter-spacing: -0.02em;

      &:has(+ .name__letter--v) {
        letter-spacing: -0.07em;
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
      letter-spacing: -0.07em;
    }
  }
}

.name-char-enter-active {
  @apply transition-all duration-300;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275)
}

.name-char-enter-from {
  @apply opacity-0 -translate-y-full;
}

.name-char-leave-active {
  @apply transition-none;
}
</style>
