<template>
  <div ref="elContainer" class="projects-list">
    <div v-for="project in projects" :key="project.id" class="projects-list__item">
      <NuxtLink
        ref="elProjects"
        :to="$prismic.asLink(project)"
        class="inline-flex flex-col items-center gap-1 relative h-40 w-40 p-4"
        @blur="onMouseLeaveProject()"
        @click="onMouseLeaveProject()"
        @focus="onMouseEnterProject(project)"
        @mouseenter="onMouseEnterProject(project)"
        @mouseleave="onMouseLeaveProject()"
      >
        <svg viewBox="0 0 100 100" class="project__title">
          <defs>
            <path :id="`${project.id}-path`" d="M20 50A30 30 0 1 1 80 50A30 30 0 1 1 20 50" fill="none" stroke="black" />
          </defs>

          <circle cx="50" cy="50" r="35" fill="white" stroke="black" />
          <text font-size="6" class="project__title__text" dy="2" fill="currentColor">
            <textPath :href="`#${project.id}-path`" textLength="183">
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

        <svg v-if="project.title === 'Walk the Plank'" fill="currentColor" viewBox="-2 -2 143 139" class="h-full w-full z-20">
          <title>Walk the Plank Logo</title>
          <path
            d="M8.5 12.6A6.3 6.3 0 0 0 2.2 19v3.3a6.3 6.3 0 0 0 6.3 6.3m-1.6 78.5a6.3 6.3 0 0 0-6.3 6.3v3.3A6.3 6.3 0 0 0 7 123"
          />
          <path
            d="M8.5 12.6A6.3 6.3 0 0 0 2.2 19v3.3a6.3 6.3 0 0 0 6.3 6.3m-1.6 78.5a6.3 6.3 0 0 0-6.3 6.3v3.3A6.3 6.3 0 0 0 7 123m109.4-93a6.2 6.2 0 0 1 4.4-1.7h10.6c3.5 0 6.2-3 6.2-6.5v-3.4a6.2 6.2 0 0 0-6.2-6.2 6.1 6.1 0 0 1-6.3-6.1c0-3.5-2.8-6.1-6.3-6.1h-3.3c-3.5 0-6.3 2.4-6.3 5.9v10.6a6.3 6.3 0 0 1-1.8 4.4l-.3.3a44.8 44.8 0 0 1 7 11l2.3-2.2Z"
          />
          <path
            d="M8.2 28.3h10.6c1.7 0 3.3.6 4.4 1.7l2.5 2.5A49.1 49.1 0 0 1 33 21.7l-.7-.8a6.4 6.4 0 0 1-2-4.4V5.9c0-3.5-2.6-5.9-6-5.9h-3.4a6.1 6.1 0 0 0-6.3 6 6.2 6.2 0 0 1-6.3 6.2A6.3 6.3 0 0 0 2 18.4v3.4c0 3.5 2.8 6.5 6.3 6.5ZM26.7 100l-5 5.1a6.5 6.5 0 0 1-4.5 2.1H6.6c-3.4 0-6 2.3-6 5.8v3.3c0 3.5 2.7 6.3 6.2 6.3s6.1 3 6.1 6.5a6.5 6.5 0 0 0 6.3 6.5h3.4c3.4 0 6.4-3.2 6.4-6.7v-10.6c0-1.6.6-3.2 1.8-4.4l4.9-5a9.6 9.6 0 0 0-9-9ZM90 91.5a13.8 13.8 0 0 1-12.6-12.6 13.8 13.8 0 0 1 27.5-2.2A13.8 13.8 0 0 1 90 91.5Zm-14 16a4.2 4.2 0 0 1-6-1l-.3-.4-.4.5a4.2 4.2 0 0 1-6.9-4.9l7.3-10.1 7.2 10.1a4.2 4.2 0 0 1-1 5.9ZM61.1 78.9l-4.6 1.6a1 1 0 0 0-.6 1.4l2 4.4a1 1 0 0 1-1.3 1.4l-4.4-2.1a1 1 0 0 0-1.5.6l-1.6 4.6a1 1 0 0 1-2 0l-1.6-4.6a1 1 0 0 0-1.4-.6l-4.5 2a1 1 0 0 1-1.4-1.3l2.2-4.4a1 1 0 0 0-.6-1.5l-4.6-1.6a1 1 0 0 1 0-2l4.6-1.6c.6-.2.9-.9.6-1.4l-2.1-4.5a1 1 0 0 1 1.4-1.3l4.4 2.1a1 1 0 0 0 1.4-.6l1.7-4.6a1 1 0 0 1 2 0l1.6 4.6c.2.6.9.9 1.4.6l4.5-2a1 1 0 0 1 1.3 1.3l-2 4.3a1 1 0 0 0 .6 1.5l4.6 1.6a1 1 0 0 1 0 2Zm36.6 25.5-5 .2a1.8 1.8 0 0 1-1.7-1 1.8 1.8 0 0 1 .8-2.6l1.7-.7 12.5-5.5.1-.1a14.3 14.3 0 0 0 5.6-15l-6.9-24.1c-.3-1 .3-2 1.4-2.3a1.9 1.9 0 0 1 2 .8l3.5 5.3a.6.6 0 0 0 1.1-.3c1-7.5 0-15.2-2.9-22.8l-.5-1.2a39.3 39.3 0 0 0-6-10.2 39.4 39.4 0 0 0-15.2-11.1 44.7 44.7 0 0 0-42.6 3.5 43.7 43.7 0 0 0-16 19.2 43.4 43.4 0 0 0-3 22.6c0 .6.8.8 1.1.3l3.5-5.3a1.9 1.9 0 0 1 2-.8 1.8 1.8 0 0 1 1.4 2.3l-6.9 24.2a14.3 14.3 0 0 0 5.6 14.9h.1l12.3 5.7 1.3.6a2.1 2.1 0 0 1 1.1 1.9c0 1-.8 2-1.8 2l-4.7-.3c-.5 0-1 .2-1 .7v.6a29.2 29.2 0 0 0 28.6 29.3 29 29 0 0 0 29.4-28.8v-1a1 1 0 0 0-1-1Zm35.3 2.8h-10.6a7 7 0 0 1-4.5-2l-5-5.2a9.6 9.6 0 0 0-9 9l4.9 4.9a6 6 0 0 1 1.7 4.4V129c0 3.5 3 6.7 6.6 6.7h3.3c3.5 0 6.3-3 6.3-6.5s3-6.4 6.4-6.4a6.4 6.4 0 0 0 6.4-6.3V113c0-3.5-3-5.8-6.5-5.8Z"
          />
        </svg>

        <svg v-else-if="project.title === 'Purcell'" viewBox="0 0 69 97" fill="currentColor" class="h-full w-full z-20">
          <title>Purcell Logo</title>
          <path d="M0,0V96H2V2H67V96h2V0Z" />
          <path d="M9,9V81h2V11H59V81h2V9Z" />
          <path d="M17,17V65h1V18H51V65h1V17Z" />
        </svg>

        <svg v-else-if="project.title === 'Silures'" viewBox="-0.5 0 57 59" fill="currentColor" class="h-full w-full z-20">
          <path
            d="M55.6 33c.7-4.4 1.4-9 .1-13.4-1.3-5.2-5-9.6-10-11.7l-.6-.5c-2-1.3-4-3-6-4.4a20.2 20.2 0 0 0-9.7-3c-4-.2-8.2 1-11.4 3.6l-.4.1c-2.2 1.2-4.7 2-6.9 3.1-3 1.6-5.5 4-7.3 6.8A17.3 17.3 0 0 0 .7 25.3v.4c-.1 2.5-.7 5-.8 7.5C0 36.5.5 40 2.1 43c2 3.8 5.3 6.8 9.3 8.3 3 2.4 6 4.9 9.6 6.2 6 2.4 12.8 1.1 17.6-2.5l.1-.1c3.6-1.4 7.3-2.7 10.3-5.2 5-4 7.4-10.6 6.6-16.5V33Zm-1.1-9.4c0 1.6-.1 3-.5 4.5-1.7-3.4-4.9-6-8.6-7-6.7-2-12.6 2.2-16.9 6.8-.5-2-1-4-1-6.1a12 12 0 0 1 6.2-11 13 13 0 0 1 8.7-1.5h.6a14.6 14.6 0 0 1 11.5 14.3ZM29.4 1.8c4 0 7.9 1.9 10.7 4.7-3.6-.3-7.4 1-10.4 4-5.2 4.6-4.4 11.9-2.6 18C21.7 27 16 23.8 15.1 18c-1-4 .4-8 3-11 2.7-3.4 7-5.3 11.3-5.2ZM4.9 14.5c1.4-2.3 3.5-4.2 6-5.5 1-.6 2.2-1 3.3-1.4a13 13 0 0 0-2 7.9c.1 5.3 3.4 10 8.3 12.2 2 1 4.2 1.5 6.4 2-4.5 4.8-10.5 8-16.8 4.7A13 13 0 0 1 3.7 27l-.2-.4c-1.3-4-.8-8.4 1.3-12ZM3.7 42.1a15.2 15.2 0 0 1-1.8-7.9c0-1.2.2-2.4.4-3.6a13.9 13.9 0 0 0 20.5 4.6c2-1.3 3.6-2.8 5-4.5 1.7 5.4 1.8 12-2.9 15.7a13 13 0 0 1-11 3C9.6 48.5 5.8 46 3.7 42ZM27 57c-4-.2-7.8-1.9-10.6-4.6a13 13 0 0 0 7.8-2.2c4.5-2.8 7-8 6.4-13.3a29 29 0 0 0-1.4-6.5c2 .5 4 1.1 6 2.2a12.4 12.4 0 0 1 3.3 19.1l-.4.5A14.5 14.5 0 0 1 27 57Zm24.5-12.8a16.2 16.2 0 0 1-9.3 6.9 14 14 0 0 0 1.7-11c-1.5-6.8-8.1-9.8-14.3-11.2a22 22 0 0 1 4.8-3.9c5.2-3.3 12-2 16 2.5 1 1.4 2 2.9 2.5 4.6v.1c1.3 4 .8 8.4-1.4 12Z"
          />
        </svg>

        <svg
          v-else-if="project.title === 'Studio Treble'"
          viewBox="0 0 108 150"
          fill="currentColor"
          class="h-full w-full z-20"
        >
          <path
            d="M107.5 65.42a12.04 12.04 0 0 0-16.46-11.16l5.02-29.1a12.1 12.1 0 0 0-2.05-9.09 12.11 12.11 0 0 0-11.06-5.1A12.2 12.2 0 0 0 72.1 21l-5.97 32.24-4.85-40.8A12.2 12.2 0 0 0 45.3 1.6 12.26 12.26 0 0 0 37 14.07l5.59 45.44-18.75-30.68c-2.5-4-5.9-8-12.2-7.47a12.14 12.14 0 0 0-9.99 6.97 12.1 12.1 0 0 0-.25 9.7L23.86 79.7A12.18 12.18 0 0 0 12.5 91.85c0 .25.03.5.1.74l9.67 36a28.9 28.9 0 0 0 27.84 21.39H82.6a24.95 24.95 0 0 0 24.9-24.94V65.41ZM95.48 59.1a6.34 6.34 0 0 1 6.33 6.33v34.19a6.34 6.34 0 0 1-12.66 0V65.41c0-.22.05-.43.07-.65l.16-.94a6.32 6.32 0 0 1 6.1-4.74ZM6.8 30.76a6.46 6.46 0 0 1 5.32-3.72c2.34-.2 4.22.53 6.9 4.79L44.58 73.7a2.84 2.84 0 0 0 5.25-1.84l-7.18-58.3a6.5 6.5 0 0 1 6.08-6.87 6.53 6.53 0 0 1 6.87 6.28l7.07 59.54a2.85 2.85 0 0 0 5.6.19l9.4-50.68a6.5 6.5 0 0 1 11.69-2.65 6.44 6.44 0 0 1 1.1 4.84l-6.62 38.3c-.15.6-.27 1.22-.32 1.85l-.01.06c-.04.23-.05.46-.03.68l-.02.33v16.13a12.08 12.08 0 0 0-6.48-1.9H30.3L6.52 35.54a6.47 6.47 0 0 1 .29-4.78v.01Zm75.8 113.53H50.14a23.2 23.2 0 0 1-22.36-17.17l-9.57-35.6a6.5 6.5 0 0 1 6.47-6.16h52.31a6.5 6.5 0 0 1 0 12.99l-36.67-.07h-.01l-.3.03a2.83 2.83 0 0 0-2 4.46l10.66 18.73a2.84 2.84 0 1 0 4.94-2.82l-8.37-14.7 31.76.06c2.48 0 4.8-.75 6.72-2.04a11.96 11.96 0 0 0 18.1 7.81v15.24c0 10.6-8.62 19.24-19.21 19.24h-.01Z"
          />
        </svg>

        <svg v-else-if="project.title === 'Brighter Sound'" viewBox="0 0 73 132" class="h-full w-full z-20" fill="currentColor">
          <path
            d="M44.24 132H0v-17.45h4.82v12.66h39.42c7.3 0 13.02-2 17.47-6.07 4.3-3.84 6.47-8.92 6.47-15.12 0-2.13-.27-4.17-.81-6.09l4.65-1.28c.65 2.33.98 4.81.98 7.37 0 7.62-2.7 13.9-8.05 18.66-5.28 4.85-12.26 7.32-20.71 7.32Z"
          />
          <path
            d="M44.24 118.5H0v-15.23h4.82v10.44h39.42c7.3 0 13.02-1.98 17.47-6.06 4.3-3.84 6.47-8.92 6.47-15.13 0-2-.24-3.94-.73-5.77l4.67-1.21c.58 2.22.88 4.57.88 6.98 0 7.63-2.7 13.9-8.05 18.67-5.28 4.85-12.26 7.32-20.71 7.32Z"
          />
          <path
            d="M44.24 105.67H0V89.3h4.82v11.57h39.42c7.3 0 13.02-1.98 17.47-6.06 4.3-3.84 6.47-8.92 6.47-15.13 0-2.19-.3-4.3-.87-6.28l4.64-1.32c.7 2.4 1.05 4.96 1.05 7.6 0 7.63-2.7 13.92-8.04 18.68-5.28 4.84-12.26 7.31-20.72 7.31Z"
          />
          <path
            d="M44.24 91.7H0V0h40.5c8.45 0 15.42 2.47 20.73 7.34 5.33 4.88 8.02 11.24 8.02 18.9 0 7.65-2.5 13.62-7.47 18.23C68.96 49.07 73 56.62 73 65.71c0 7.63-2.7 13.9-8.04 18.67-5.28 4.84-12.26 7.31-20.72 7.31ZM4.82 86.9h39.42c7.3 0 13.02-1.99 17.47-6.07 4.3-3.83 6.47-8.91 6.47-15.12 0-8.45-4.27-15.26-11.72-18.68l-3.8-1.75 3.43-2.39c5.61-3.9 8.34-9.35 8.34-16.65 0-6.35-2.11-11.38-6.47-15.37C53.51 6.78 47.8 4.8 40.5 4.8H4.82v82.1Z"
          />
        </svg>

        <img v-else src="/file.svg" class="h-full w-full z-20">

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
.projects-list {
  @apply mb-6 py-20 text-sm grid gap-x-28 gap-y-28 md:gap-x-16 md:gap-y-10 relative px-10 overflow-hidden;
  @apply grid-cols-2 md:grid-cols-6;

  &__item {
    @apply md:col-span-2 flex justify-start;

    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6) {
      @apply justify-end;
    }
  }
}

.project {
  &__title {
    @apply absolute h-[24rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none;

    @apply font-medium;
    animation: spin 30s linear infinite;

  }
}

.image-overlay {
  @apply inset-0 fixed z-[9999] object-cover object-center;
  @apply mix-blend-multiply dark:mix-blend-screen opacity-75;
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
