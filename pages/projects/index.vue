<template>
  <article class="py-10">
    <div class="container mb-10">
      <Heading level="2" class="text-lg md:text-xl mb-4">
        {{ doc.title }}
      </Heading>

      <BodyText :prose="false">
        <prismic-rich-text :field="doc.intro" />
      </BodyText>
    </div>
  </article>
</template>

<script>
import { getDocumentFromPrismic } from '~/helpers/getDocumentFromPrismic'

export default {
  async setup () {
    const doc = await getDocumentFromPrismic('projectIndex')
    return { doc }
  },
}
</script>
