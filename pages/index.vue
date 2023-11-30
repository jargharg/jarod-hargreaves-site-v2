<template>
  <article class="flex-1">
    <div class="mt-4 pb-8">
      <BodyText class="container">
        <prismic-rich-text :field="doc.intro" class="text-lg md:text-xl leading-[1] max-w-[56ch] font-serif" />
      </BodyText>
    </div>

    <div class="flex-1 container mb-40">
      <ProjectsList :projects="doc.projects" class="border-t-2 border-current" />
    </div>
  </article>
</template>

<script>
import Draggable from 'gsap/Draggable'
import { getDocumentFromPrismic } from '~/helpers/getDocumentFromPrismic'
import { mapPrismicContentRelationships } from '~/helpers/prismicMappers'

export default {
  async setup () {
    const elHead = ref(null)

    onMounted(() => {
      Draggable.create(elHead.value)
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

    return { doc, elHead }
  },
}
</script>
