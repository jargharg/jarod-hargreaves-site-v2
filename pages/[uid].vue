<template>
  <article class="py-10 bg-white min-h-[100dvh]">
    <div class="container">
      <Heading level="2" class="text-lg md:text-xl mb-4">
        {{ doc.title }}
      </Heading>
    </div>

    <NuxtSliceZone :slices="doc.slices" />
  </article>
</template>

<script>
import { getDocumentFromPrismic } from '~/helpers/getDocumentFromPrismic'

export default {
  async setup () {
    const doc = await getDocumentFromPrismic('contentPage', { repeatable: true })

    return { doc }
  },
}
</script>
