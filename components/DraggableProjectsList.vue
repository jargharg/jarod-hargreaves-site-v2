<template>
  <div ref="elContainer" class="mb-6 py-20 text-sm grid grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-40 relative">
    <div v-for="project in projects" :key="project.id" class="flex justify-center">
      <NuxtLink
        ref="elProjects"
        :to="$prismic.asLink(project)"
        class="inline-flex flex-col items-center gap-1 relative"
        @blur="onMouseLeaveProject()"
        @click="onMouseLeaveProject()"
        @focus="onMouseEnterProject(project)"
        @mouseenter="onMouseEnterProject(project)"
        @mouseleave="onMouseLeaveProject()"
      >
        <img src="/file.svg" class="w-16">

        <svg viewBox="0 0 100 100" class="project__title">
          <defs>
            <path :id="`${project.id}-path`" d="M20 50A30 30 0 1 1 80 50A30 30 0 1 1 20 50" fill="none" stroke="black" />
          </defs>

          <text font-size="6" class="project__title__text" dy="2" fill="currentColor">
            <textPath :href="`#${project.id}-path`" textLength="181">
              {{ project.title }} &bullet;
              {{ project.title }} &bullet;
              {{ project.title }} &bullet;
              <template v-if="project.title.length < 10">
                {{ project.title }} &bullet;
                {{ project.title }} &bullet;
              </template>
            </textPath>
          </text>
        </svg>

        <!-- <h2 class="rounded-full bg-white px-4 py-1 text-lg font-serif text-center">
          {{ project.title }}
        </h2> -->
      </NuxtLink>
    </div>

    <transition name="fade">
      <PrismicSizedImage v-if="imageOverlay" :with-dimensions="false" class="image-overlay" :image="imageOverlay" />
    </transition>
  </div>
</template>

<script>
import Draggable from 'gsap/Draggable'
import gsap from 'gsap'
import { useProjectLocationsStore } from '~/stores/projectLocations'

export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },

  setup (props) {
    const projectLocationsStore = useProjectLocationsStore()
    const prismic = usePrismic()

    const elContainer = ref(null)
    const elProjects = ref([])
    const imageOverlay = ref(null)
    const draggables = []

    const onMouseEnterProject = (project) => {
      if (project.metaImage?.card) {
        imageOverlay.value = project.metaImage.card
      }
    }

    const onMouseLeaveProject = () => {
      imageOverlay.value = null
    }

    const getProjectLink = index => prismic.asLink(props.projects[index])

    onMounted(() => {
      projectLocationsStore.setPreferencesFromStorage()

      const { width, height } = projectLocationsStore.windowDimensions
      const isWindowDimensionsChanged =
        width !== window.innerWidth || height !== window.innerHeight

      if (isWindowDimensionsChanged) {
        projectLocationsStore.resetLocations()
      }

      elProjects.value.forEach(({ $el: el }, index) => {
        const url = getProjectLink(index)

        if (!isWindowDimensionsChanged) {
          const storedLocation = projectLocationsStore.getLocation(url)
          if (storedLocation) {
            gsap[projectLocationsStore.isFirstLoad ? 'to' : 'set'](el, {
              x: storedLocation.x,
              y: storedLocation.y,
              zIndex: storedLocation.zIndex,
            })
          }
        }

        const [drag] = Draggable.create(el, {
          bounds: elContainer.value.parentElement,

          onDragEnd: () => {
            const x = gsap.getProperty(el, 'x')
            const y = gsap.getProperty(el, 'y')
            const zIndex = gsap.getProperty(el, 'zIndex')
            projectLocationsStore.setLocation(url, x, y, zIndex)
          },
        })

        draggables.push(drag)
      })

      projectLocationsStore.isFirstLoad = false
    })

    onBeforeUnmount(() => {
      draggables.forEach(instance => instance.kill())
      gsap.set(elProjects.value.map(({ $el }) => $el), { clearProps: 'zIndex' })
    })

    return { elContainer, elProjects, onMouseEnterProject, onMouseLeaveProject, imageOverlay }
  },
}
</script>

<style lang="scss" scoped>
.project {
  &__title {
    @apply absolute h-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none;

    @apply font-medium;
    animation: spin 20s linear infinite;

  }
}

.image-overlay {
  @apply inset-0 fixed z-[9999] object-cover object-center;
  @apply mix-blend-multiply opacity-50;
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
