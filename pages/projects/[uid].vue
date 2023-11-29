<template>
  <article class="pt-6 pb-20">
    <div class="container grid grid-cols-12">
      <ProjectHeader :project="doc" class="col-span-full" />

      <div class="col-span-full xl:col-span-10 xl:col-start-2">
        <prismic-rich-text
          :field="doc.intro"
          class="text-2xl font-serif mb-5"
        />

        <ProjectDetails
          :credits="doc.credits"
          :tech="doc.tech"
          :project-link="$prismic.asLink(doc.projectLink)"
        />

        <NuxtSliceZone :slices="doc.slices3" />
      </div>
    </div>
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
