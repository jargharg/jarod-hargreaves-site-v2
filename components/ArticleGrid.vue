<template>
  <section>
    <div class="border-y border-black py-4 mb-10">
      <section class="container">
        <Heading level="3" class="mb-4">
          Filters
        </Heading>

        <div class="text-sm flex justify-between gap-4">
          <ul v-if="filters.length" class="flex flex-wrap gap-4">
            <li v-for="tag in filters" :key="tag.id">
              <NuxtLink
                class="hover:underline"
                :to="`/blogs/?blogTag=${tag.uid}`"
                :class="{ underline: currentFilter === tag.uid }"
              >
                {{ tag.title }}
              </NuxtLink>
            </li>
          </ul>

          <NuxtLink
            v-if="currentFilter"
            class="hover:underline"
            :to="`/blogs/`"
          >
            Clear filters
          </NuxtLink>
        </div>
      </section>
    </div>

    <section v-if="articles?.length">
      <CardList :items="articles" image-crop="card" />
    </section>

    <section v-else-if="!isLoading" class="container py-10 text-center">
      <p class="mb-4">
        No <em>{{ currentFilter }}</em> articles found.
      </p>

      <NuxtLink class="underline hover:no-underline" :to="`/blogs/`">
        Clear filters
      </NuxtLink>
    </section>
  </section>
</template>

<script>
import errorLog from '~/helpers/errorLog'
import { mapPrismicResults } from '~/helpers/prismicMappers'

export default {
  props: {
    filters: {
      type: Array,
      default: () => [],
    },

    filterName: {
      type: String,
      default: null,
    },

    type: {
      type: String,
      required: true,
    },
  },

  async setup (props) {
    const { client, filter } = usePrismic()
    const route = useRoute()

    const isLoading = ref(false)
    const currentFilter = computed(() => route.query?.[props.filterName])

    async function fetchArticles () {
      isLoading.value = true
      const filters = [filter.any('document.type', [props.type])]

      let filterId

      if (currentFilter.value) {
        filterId = props.filters.find(
          tag => tag.uid === currentFilter.value,
        )?.id
      }

      if (filterId) {
        filters.push(filter.any(`my.${props.type}.tags.tag`, [filterId]))
      }

      try {
        const response = await client.get({
          filters,
          orderings: [{ field: `my.${props.type}.title` }],
          pageSize: 100,
        })

        isLoading.value = false
        return mapPrismicResults(response.results)
      } catch (error) {
        errorLog(error, { type: props.type })
      }
    }

    const { data: articles } = await useAsyncData('articles', fetchArticles, {
      watch: [() => route.query?.[props.filterName]],
    })

    return { articles, currentFilter, isLoading }
  },
}
</script>
