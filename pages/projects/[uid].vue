<template>
  <article class="pt-6 pb-20">
    <div class="container">
      <ProjectHeader :project="doc" />

      <div class="max-w-6xl mx-auto">
        <prismic-rich-text
          :field="doc.intro"
          class="text-xl font-serif mb-5"
        />

        <ProjectDetails
          :credits="doc.credits"
          :tech="doc.tech"
          :project-link="$prismic.asLink(doc.projectLink)"
        />
      </div>
    </div>

    <NuxtSliceZone :slices="doc.slices3" />
  </article>
</template>

<script>
import { getDocumentFromPrismic } from '~/helpers/getDocumentFromPrismic'

export default {
  async setup () {
    const doc = await getDocumentFromPrismic('project', { repeatable: true })

    return { doc }
  },
}
</script>
