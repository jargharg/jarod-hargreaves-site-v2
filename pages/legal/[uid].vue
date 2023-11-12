<template>
  <article class="py-10">
    <div class="container">
      <Heading level="2" class="text-lg md:text-xl mb-4">
        {{ doc.title }}
      </Heading>

      <div class="max-w-xl">
        <BodyText>
          <prismic-rich-text :field="doc.body" />
        </BodyText>
      </div>
    </div>
  </article>
</template>

<script>
import { getDocumentFromPrismic } from '~/helpers/getDocumentFromPrismic'

export default {
  async setup () {
    const doc = await getDocumentFromPrismic('legalPage', { repeatable: true })

    return { doc }
  },
}
</script>
