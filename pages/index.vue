<template>
  <article class="pt-10 flex-1 container flex flex-col">
    <BodyText>
      <prismic-rich-text
        :field="doc.intro"
        class="text-lg mb-10 max-w-[56ch]"
      />
    </BodyText>

    <div class="flex-1">
      <Heading level="2" class="text-2xl">
        Selected Work
      </Heading>
      <DraggableProjectsList :projects="doc.projects" />
    </div>
  </article>
</template>

<script>
import { getDocumentFromPrismic } from '~/helpers/getDocumentFromPrismic'
import { mapPrismicContentRelationships } from '~/helpers/prismicMappers'

export default {
  async setup () {
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

    return { doc }
  },
}
</script>
