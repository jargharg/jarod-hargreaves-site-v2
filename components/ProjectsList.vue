<template>
  <div class="text-sm grid sm:grid-cols-2 md:grid-cols-3 relative overflow-hidden bg-black gap-0.5 pb-0.5">
    <div v-for="project in projects" :key="project.id" class="projects-list__item">
      <NuxtLink :to="$prismic.asLink(project)" class="relative block bg-white cursor-pointer h-full -outline-offset-2">
        <!--
        @blur="onMouseLeaveProject()"
        @click="onMouseLeaveProject()"
        @focus="onMouseEnterProject(project)"
        @mouseenter="onMouseEnterProject(project)"
        @mouseleave="onMouseLeaveProject()"
       -->
        <div class="aspect-square 2xl:aspect-[3/2] w-full relative">
          <PrismicSizedImage
            :image="project.metaImage"
            :with-dimensions="false"
            sizes="sm:100vw md:50vw lg:50vw xl:33vw 2xl:33vw"
            style="image-rendering: pixelated;"
          />

          <div class="absolute inset-0 mix-blend-screen" :style="{ backgroundColor: project.tint }" />
        </div>

        <div class="flex items-center gap-2 px-4 py-6">
          <IconArrowRight class="w-4 h-4" />
          <h2 class="leading-none text-base font-medium text-center">
            {{ project.title }}
          </h2>
        </div>
      </NuxtLink>
    </div>

    <transition name="fade">
      <PrismicSizedImage
        v-if="imageOverlay"
        :with-dimensions="false"
        class="image-overlay"
        :image="imageOverlay"
        sizes="sm:100vw md:100vw lg:100vw xl:100vw xl:100vw"
        style="image-rendering: pixelated;"
      />
    </transition>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },

  setup () {
    const imageOverlay = ref(null)

    const onMouseEnterProject = (project) => {
      if (project.metaImage?.card) {
        imageOverlay.value = project.metaImage.card
      }
    }

    const onMouseLeaveProject = () => {
      imageOverlay.value = null
    }

    return { onMouseEnterProject, onMouseLeaveProject, imageOverlay }
  },
}
</script>

<style lang="scss" scoped>
.project {
  &__title {
    @apply absolute h-[24rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none;

    @apply font-medium;
    animation: spin 30s linear infinite;
  }

  :deep(svg) {
    @apply scale-x-50;
  }
}

.image-overlay {
  @apply inset-0 fixed z-[9999] object-cover object-center;
  @apply mix-blend-multiply opacity-75;
  @apply pointer-events-none select-none;
}

.fade-leave-active,
.fade-enter-active {
  @apply transition-all duration-300;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}

@keyframes spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
</style>
