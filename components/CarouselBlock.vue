<template>
  <div class="columns">
    <div class="flex flex-col justify-between gap-10">
      <div>
        <button
          v-for="(item, index) in items"
          :key="index"
          class="text-left relative mb-4"
          @click="onClickLabel(index)"
        >
          <IconArrowRight
            class="absolute top-1 right-full h-3 pr-2 opacity-0 transition-opacity duration-500"
            :class="{ 'opacity-100': index === activeIndex }"
          />

          <h2 v-if="item.heading" class="font-medium mb-1">
            {{ item.heading }}
          </h2>

          <prismic-rich-text :field="item.body" />
        </button>
      </div>

      <div class="flex gap-2 justify-between flex-row-reverse">
        <div class="font-medium">
          {{ activeIndex + 1 }}/{{ items.length }}
        </div>

        <button
          class="font-medium text-xs border-black border-2 rounded-full px-2 py-1 focus-visible:outline-offset-4"
          @click="isPlaying = !isPlaying"
        >
          {{ isPlaying ? "Pause" : "Play" }}
        </button>
      </div>
    </div>

    <div
      class="relative min-h-[80vh] p-10 overflow-hidden"
      :style="{ backgroundColor: 'black' }"
    >
      <template v-for="(item, index) in items" :key="index">
        <transition name="fade">
          <div v-show="index === activeIndex" class="absolute inset-0">
            <div
              class="absolute inset-10"
              :style="{ backgroundColor: item.backgroundColor ?? 'black' }"
            >
              <VideoWithControls
                v-if="$prismic.asLink(item.videoUrl)"
                :src="$prismic.asLink(item.videoUrl)"
                class="rounded-[50px] overflow-hidden h-full w-full"
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
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  setup (props) {
    const activeIndex = ref(0)
    const isPlaying = ref(true)

    const onClickLabel = (index) => {
      isPlaying.value = false
      activeIndex.value = index
    }

    onMounted(() => {
      setInterval(() => {
        if (!isPlaying.value) {
          return
        }
        activeIndex.value = (activeIndex.value + 1) % props.items.length
      }, 5000)
    })

    return { activeIndex, isPlaying, onClickLabel }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;

  @media (prefers-reduced-motion: no-preference) {
    transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1);
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;

  @media (prefers-reduced-motion: no-preference) {
    transform: translateY(-100%);
    opacity: 1;
  }
}

.fade-enter-from {
  opacity: 0;

  @media (prefers-reduced-motion: no-preference) {
    transform: translateY(100%);
    opacity: 1;
  }
}
</style>
