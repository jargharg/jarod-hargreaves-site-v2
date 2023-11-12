<template>
  <article class="py-10">
    <div class="container mb-10">
      <Heading level="2" class="text-lg md:text-xl">
        {{ doc.title }}
      </Heading>
    </div>

    <NuxtSliceZone :slices="doc.slices3" />
  </article>
</template>

<script>
import { getDocumentFromPrismic } from '~/helpers/getDocumentFromPrismic'

export default {
  async setup () {
    const doc = await getDocumentFromPrismic('blogArticle', { repeatable: true })

    return { doc }
  },
}
</script>
