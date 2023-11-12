<template>
  <article class="pt-10">
    <NuxtSliceZone :slices="doc.slices" class="mb-10" />

    <div class="border-t border-black mb-6 py-10">
      <div class="container mb-4">
        <Heading level="2" class="text-xl">
          Content Pages (user-selected documents in CMS)
        </Heading>
      </div>

      <CardList :items="doc.pageLinks" />
    </div>
  </article>
</template>

<script>
import { getDocumentFromPrismic } from '~/helpers/getDocumentFromPrismic'
import { mapPrismicContentRelationships } from '~/helpers/prismicMappers'

export default {
  async setup () {
    // @NOTE: this allows you to pull data from linked documents
    // See https://prismic.io/docs/graphquery-rest-api for full details of the API
    const graphQuery = `{
      homepage {
        ...homepageFields
        pageLinks {
          link {
            ...linkFields
          }
        }
      }
    }`

    const dataMapFunction = doc => ({
      ...doc,
      pageLinks: mapPrismicContentRelationships(doc.pageLinks),
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
