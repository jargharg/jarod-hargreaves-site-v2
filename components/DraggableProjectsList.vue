<template>
  <ul
    ref="elContainer"
    class="mb-6 py-10 text-sm flex flex-wrap gap-10 relative"
  >
    <li v-for="project in projects" :key="project.id" ref="elProjects">
      <NuxtLink
        :to="$prismic.asLink(project)"
        class="font-serif inline-flex flex-col gap-1"
      >
        <img src="/file.svg" class="h-28">

        <h2 class="rounded-full bg-white px-4 py-1 text-xl text-center -tracking-[0.04em]">
          {{ project.title }}
        </h2>
      </NuxtLink>
    </li>
  </ul>
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
    const draggables = []

    const getProjectLink = index => prismic.asLink(props.projects[index])

    onMounted(() => {
      projectLocationsStore.setPreferencesFromStorage()

      const { width, height } = projectLocationsStore.windowDimensions
      const isWindowDimensionsChanged =
        width !== window.innerWidth || height !== window.innerHeight

      elProjects.value.forEach((el, index) => {
        const url = getProjectLink(index)

        const storedLocation = projectLocationsStore.getLocation(url)

        if (storedLocation && !isWindowDimensionsChanged) {
          gsap[projectLocationsStore.isFirstLoad ? 'to' : 'set'](el, {
            x: storedLocation.x,
            y: storedLocation.y,
            zIndex: storedLocation.zIndex,
          })
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
      gsap.set(elProjects.value, { clearProps: 'zIndex' })
    })

    return { elContainer, elProjects }
  },
}
</script>
