<template>
  <article class="py-6">
    <div class="container">
      <div class="relative h-[80dvh] mb-20">
        <PrismicSizedImage
          :image="doc.heroImage"
          :with-dimensions="false"
          :lazy="false"
          :modifiers="{ monochrome: '888888', q: 30 }"
        />

        <div
          class="absolute bottom-0 px-5 pb-5 inset-x-0 text-white flex flex-col items-center text-center bg-gradient-to-t from-[#0008] to-transparent z-20"
        >
          <Heading
            level="2"
            class="text-5xl md:text-6xl xl:text-7xl w-auto mb-4"
          >
            {{ doc.title }}
          </Heading>

          <div
            class="flex flex-wrap gap-y-2 gap-x-5 text-sm tracking-normal font-medium justify-center"
          >
            <p v-for="(item, index) in doc.credits" :key="index">
              {{ item.heading }}: {{ item.credit }}
            </p>

            <p>Tech: {{ doc.tech.map(({ item }) => item).join(", ") }}</p>
          </div>
        </div>
      </div>

      <div class="max-w-5xl mx-auto">
        <prismic-rich-text
          :field="doc.intro"
          class="text-2xl font-serif mb-10"
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
