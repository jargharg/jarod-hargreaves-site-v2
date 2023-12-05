<template>
  <div
    class="text-sm grid sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-8 relative overflow-hidden bg-black gap-0.5 pb-0.5 grid-flow-dense"
  >
    <div
      v-for="(project, index) in projects"
      :key="project.id"
      class="projects-list__item"
      :style="{ gridColumn: `span ${index % 3 ? 2 : 3}`, gridRow: `span ${index % 3 ? 2 : 3}` }"
    >
      <NuxtLink
        :to="$prismic.asLink(project)"
        class="relative bg-white cursor-pointer h-full -outline-offset-2 group z-10 aspect-square flex flex-col"
        @click="onMouseLeaveProject()"
        @mouseenter="onMouseEnterProject(project)"
        @mouseleave="onMouseLeaveProject()"
      >
        <div class="w-full relative flex-1">
          <PrismicSizedImage
            :image="project.metaImage.card"
            :with-dimensions="false"
            sizes="sm:100vw md:50vw lg:50vw xl:33vw 2xl:33vw"
            class="image-pixelated object-bottom px-2 w-[calc(100%-1rem)]"
            fit="contain"
            format="png"
          />

          <div class="absolute inset-0 mix-blend-screen select-none" :style="{ backgroundColor: project.tint }" />
        </div>

        <div class="flex items-center gap-2 px-4 py-6 group-hover:translate-x-10">
          <IconArrowRight class="w-4 h-4" />
          <h2 class="leading-none text-base font-medium text-center">
            {{ project.title }}
          </h2>
        </div>
      </NuxtLink>
    </div>

    <div class="hidden lg:block relative bg-white aspect-square">
      <CellBreathers class="absolute inset-0 w-full h-full" />
    </div>

    <div class="hidden lg:block bg-white aspect-square" />

    <div class="hidden lg:block relative bg-white aspect-square">
      <CellSun class="absolute inset-0 w-full h-full" />
    </div>

    <div class="hidden lg:block bg-white aspect-square" />

    <div class="hidden lg:block bg-white aspect-square" />

    <div class="hidden lg:block relative bg-white aspect-square">
      <CellSpinners class="absolute inset-0 w-full h-full" />
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
        imageOverlay.value = project.metaImage.card
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
  @apply inset-0 fixed object-cover object-center;
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
