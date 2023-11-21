<template>
  <article ref="elContainer" class="pt-10 flex-1 container">
    <ul class="mb-6 py-10 text-sm flex flex-wrap gap-10">
      <li v-for="project in doc.projects" :key="project.id" ref="elProjects">
        <NuxtLink
          :to="$prismic.asLink(project)"
          class="font-serif inline-flex flex-col gap-1"
        >
          <img src="/file.svg" class="h-20">

          <h2 class="bg-white px-2 py-1">
            {{ project.title }}
          </h2>
        </NuxtLink>
      </li>
    </ul>
  </article>
</template>

<script>
import Draggable from 'gsap/Draggable'
import { getDocumentFromPrismic } from '~/helpers/getDocumentFromPrismic'
import { mapPrismicContentRelationships } from '~/helpers/prismicMappers'

export default {
  async setup () {
    const elContainer = ref(null)
    const elProjects = ref([])
    const zIndexes = ref([])

    onMounted(() => {
      zIndexes.value = Array.from(
        { length: elProjects.value.length },
        (_, i) => i + 1,
      )
      // @TODO zindexes

      elProjects.value.forEach((elProject, i) => {
        Draggable.create(elProject, {
          bounds: elContainer.value,
          onClick: () => {},
        })
      })
    })

    const graphQuery = `{
      homepage {
        ...homepageFields
        projects {
          project {
            ...projectFields
          }
        }
      }
    }`

    const dataMapFunction = doc => ({
      ...doc,
      projects: mapPrismicContentRelationships(doc.projects),
    })

    const doc = await getDocumentFromPrismic('homepage', {
      overrideFullTitle: true,
      graphQuery,
      dataMapFunction,
    })

    return { doc, elContainer, elProjects }
  },
}
</script>
