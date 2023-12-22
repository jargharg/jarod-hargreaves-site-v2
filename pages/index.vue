<template>
  <article class="flex-1 container mb-10">
    <section class="mt-4 pb-8">
      <BodyText>
        <prismic-rich-text
          :field="doc.intro"
          class="max-w-[40ch] text-lg md:text-2xl leading-[1.1] font-serif -tracking-[0.04em]"
        />
      </BodyText>
    </section>

    <section class="mb-5">
      <ProjectsList :projects="doc.projects" class="border-t-2 border-current" />
    </section>

    <section class="pb-10 border-b-2 border-black">
      <Heading level="2" class="text-4xl tracking-tighter leading-none pb-5 border-b-2 border-b-black">
        {{ doc.aboutHeading }}
      </Heading>

      <BodyText>
        <prismic-rich-text
          :field="doc.aboutIntro"
          class="text-lg md:text-xl leading-[1.1] font-serif -tracking-[0.04em] mt-5 pb-5 border-b-2 border-b-black"
        />
      </BodyText>

      <div class="grid lg:grid-cols-2 gap-5 mt-7">
        <div>
          <PrismicSizedImage :image="doc.aboutImage" :with-dimensions="false" class="w-full aspect-[2/3] max-h-[100vh]" />
        </div>

        <div>
          <ul class="flex flex-col gap-5 mb-5">
            <li v-for="(item, index) in doc.aboutPoints" :key="index">
              <h3 class="font-medium leading-none mb-2.5">
                {{ item.heading }}
              </h3>

              <BodyText>
                <prismic-rich-text :field="item.body" />
              </BodyText>
            </li>
          </ul>

          <NuxtLink
            :v-if="$prismic.asLink(doc.aboutCtaLink) && doc.aboutCtaLabel"
            :to="$prismic.asLink(doc.aboutCtaLink)"
            class="font-medium flex items-center gap-2"
          >
            <IconArrowRight class="w-4 h-4" />
            {{ doc.aboutCtaLabel }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import Draggable from 'gsap/Draggable'
import { getDocumentFromPrismic } from '~/helpers/getDocumentFromPrismic'
import { mapPrismicContentRelationships } from '~/helpers/prismicMappers'

export default {
  async setup () {
    const elHead = ref(null)

    onMounted(() => {
      Draggable.create(elHead.value)
    })

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

    return { doc, elHead }
  },
}
</script>
