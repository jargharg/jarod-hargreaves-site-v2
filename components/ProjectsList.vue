<template>
  <div
    class="text-sm grid sm:grid-cols-2 lg:grid-cols-4 relative overflow-hidden bg-black gap-0.5 pb-0.5 grid-flow-dense"
  >
    <div v-for="project in projects" :key="project.id" class="projects-list__item">
      <NuxtLink
        :to="$prismic.asLink(project)"
        class="relative bg-white cursor-pointer h-full -outline-offset-2 group z-20 aspect-square flex flex-col pt-4"
        @click="onMouseLeaveProject()"
        @mouseenter="onMouseEnterProject(project)"
        @mouseleave="onMouseLeaveProject()"
      >
        <div class="w-full max-w-[calc(100%-2rem)] h-full max-h-[calc(100%-1rem)] mx-auto relative flex-1">
          <PrismicSizedImage
            :image="project.metaImage.card"
            :with-dimensions="false"
            sizes="sm:100vw md:50vw lg:25vw xl:25vw 2xl:25vw"
            class="image-pixelated object-bottom"
            fit="contain"
          />

          <div class="absolute inset-0 mix-blend-screen select-none pointer-events-none" :style="{ backgroundColor: project.tint }" />
        </div>

        <div class="flex items-center gap-2 px-4 py-6 group-hover:translate-x-10">
          <IconArrowRight class="w-4 h-4" />
          <h2 class="leading-none text-base font-medium text-center">
            {{ project.title }}
          </h2>
        </div>
      </NuxtLink>
    </div>

    <div class="hidden lg:block relative bg-white aspect-square col-start-2 row-start-1">
      <CellTubeMan class="absolute inset-0 w-full h-full" />
    </div>
    <!--
    <div class="hidden lg:block relative bg-white aspect-square">
      <CellSun class="absolute inset-0 w-full h-full" />
    </div> -->

    <div class="hidden lg:block relative bg-white aspect-square col-start-3 row-start-2">
      <!-- <CellSpinners class="absolute inset-0 w-full h-full" /> -->
      <CellVisitor class="absolute inset-0 w-full h-full" />
    </div>

    <!-- <transition name="fade"> -->
    <div v-if="imageOverlay" class="image-overlay">
      <PrismicSizedImage
        :with-dimensions="false"
        class="image-pixelated"
        :image="imageOverlay"
        sizes="sm:100vw md:100vw lg:100vw xl:100vw xl:100vw"
      />

      <div class="absolute inset-0 mix-blend-screen" :style="{ backgroundColor: imageOverlayTint }" />
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },

  setup () {
    const imageOverlay = ref(null)
    const imageOverlayTint = ref(null)

    const onMouseEnterProject = (project) => {
      if (project.metaImage?.card) {
        imageOverlay.value = project.metaImage
        imageOverlayTint.value = project.tint
      }
    }

    const onMouseLeaveProject = () => {
      imageOverlay.value = null
    }

    return { onMouseEnterProject, onMouseLeaveProject, imageOverlay, imageOverlayTint }
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
  @apply inset-0 fixed object-cover object-center z-10;
  @apply mix-blend-multiply opacity-100;
  @apply pointer-events-none select-none;
}

.fade-leave-active,
.fade-enter-active {
  @apply transition-opacity;
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
