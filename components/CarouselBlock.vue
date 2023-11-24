<template>
  <div class="columns">
    <div class="flex flex-col justify-between gap-10">
      <div class="flex flex-col gap-5">
        <button v-for="(item, index) in items" :key="index" class="text-left relative" @click="onClickLabel(index)">
          <!-- @TODO FLIP between maybe with a curve? -->
          <transition>
            <IconArrowRight v-if="index === activeIndex" class="absolute top-1 right-full h-3 pr-2" />
          </transition>

          <h2 v-if="item.heading" class="font-medium mb-1">
            {{ item.heading }}
          </h2>

          <prismic-rich-text :field="item.body" />
        </button>
      </div>

      <div class="flex gap-2 justify-between items-end">
        <button class="carousel__play-button" :aria-label="isPlaying ? 'Pause' : 'Play'" @click="onClickPlayToggle">
          {{ isPlaying ? "Pause" : "Play" }}

          <svg
            viewBox="0 0 1 1"
            preserveAspectRatio="none"
            class="mix-blend-difference fill-white absolute -top-0.5 -left-0.5 w-[calc(100%+4px)] h-[calc(100%+4px)]"
            role="presentation"
          >
            <path ref="elPlayIndicator" d="M0,0 H1 V1 H0 Z" />
          </svg>
        </button>

        <div class="font-medium">
          {{ activeIndex + 1 }}/{{ items.length }}
        </div>
      </div>
    </div>

    <div class="relative min-h-[80vh] p-10 overflow-hidden" :style="{ backgroundColor }">
      <template v-for="(item, index) in items" :key="index">
        <transition name="fade">
          <div v-if="index === activeIndex" class="absolute inset-0">
            <div class="absolute inset-10">
              <VideoWithControls
                v-if="$prismic.asLink(item.videoUrl)"
                :src="$prismic.asLink(item.videoUrl)"
                class="h-full w-full"
              />

              <PrismicSizedImage
                v-else-if="item.image?.url"
                class="h-full w-full"
                :image="item.image"
                :with-dimensions="false"
                sizes="sm:100vw md:100vw lg:50vw xl:50vw 2xl:50vw"
              />
            </div>
          </div>
        </transition>
      </template>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  props: {
    backgroundColor: {
      type: String,
      default: 'black',
    },

    items: {
      type: Array,
      required: true,
    },
  },

  setup (props) {
    const elPlayIndicator = ref(null)

    const activeIndex = ref(0)
    const isPlaying = ref(true)

    let carouselAnimation

    const onClickPlayToggle = () => {
      isPlaying.value = !isPlaying.value
    }

    const onClickLabel = (index) => {
      isPlaying.value = false
      activeIndex.value = index
      carouselAnimation.progress(0.01)
    }

    onMounted(() => {
      carouselAnimation = gsap.timeline({ repeat: -1 })
        .set(elPlayIndicator.value, { scaleX: 0, transformOrigin: 'left' })
        .to(elPlayIndicator.value, { scaleX: 1, duration: 10, ease: 'none', autoRound: false })
        .add(() => {
          if (isPlaying.value) {
            activeIndex.value = (activeIndex.value + 1) % props.items.length
          }
        })
        // .set(elPlayIndicator.value, { scaleX: 1, transformOrigin: 'right' })
        // .to(elPlayIndicator.value, { scaleX: 0, duration: 5, ease: 'none', autoRound: false })
        // .add(() => {
        //   if (isPlaying.value) {
        //     activeIndex.value = (activeIndex.value + 1) % props.items.length
        //   }
        // })

      watch(isPlaying, (isPlaying) => {
        if (isPlaying) {
          carouselAnimation.play()
        } else {
          carouselAnimation.pause()
        }
      })
    })

    onUnmounted(() => {
      carouselAnimation.kill()
    })

    return { activeIndex, elPlayIndicator, isPlaying, onClickLabel, onClickPlayToggle }
  },
}
</script>

<style lang="scss" scoped>
.columns {
  @apply grid gap-5;

  @screen md {
    grid-template-columns: 4fr 6fr;
  }
}

.carousel {
  &__play-button {
    @apply bg-white text-black border-black border-2 px-2 py-1 font-medium text-xs;
    @apply relative rounded-full overflow-hidden focus-visible:outline-offset-4;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;

  @media (prefers-reduced-motion: no-preference) {
    transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1);
  }
}

.fade-enter-from {
  @apply motion-reduce:opacity-0 motion-safe:translate-y-full;
}

.fade-leave-to {
  @apply motion-reduce:opacity-100 motion-safe:-translate-y-full;
}
</style>
