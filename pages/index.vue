<template>
  <article class="pt-10">
    <NuxtSliceZone :slices="doc.slices" class="mb-10" />

    <ul class="mb-6 py-10 container text-sm">
      <li v-for="project in doc.projects" :key="project.id">
        <NuxtLink :to="$prismic.asLink(project)" class="font-serif">
          {{ project.title }}
        </NuxtLink>
      </li>
    </ul>
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
