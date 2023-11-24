<template>
  <article class="pt-10 flex-1 container flex flex-col">
    <div class="">
      <BodyText>
        <prismic-rich-text
          :field="doc.intro"
          class="text-lg mb-10 leading-[1.15] max-w-[56ch]"
        />
      </BodyText>

      <!-- <div
        ref="elHead"
        class="absolute top-4 right-32 w-[20vw] z-[10000] hidden xl:block"
      >
        <img
          src="/my-head.png"
          alt="Photo of me"
          class="w-full"
        >
      </div> -->
    </div>

    <div class="flex-1">
      <Heading level="2" class="text-2xl">
        Selected Work
      </Heading>
      <DraggableProjectsList :projects="doc.projects" />
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
