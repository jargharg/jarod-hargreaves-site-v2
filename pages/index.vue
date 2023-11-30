<template>
  <article class="flex-1">
    <div class="mt-4 pb-8">
      <BodyText class="container">
        <prismic-rich-text
          :field="doc.intro"
          class="max-w-[40ch] text-lg md:text-2xl leading-[1.1] font-serif -tracking-[0.04em]"
        />
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
