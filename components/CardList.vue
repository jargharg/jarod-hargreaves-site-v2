<template>
  <section class="container">
    <ul class="grid md:grid-cols-2 gap-2">
      <li v-for="item in items" :key="item.id" class="h-full">
        <nuxt-link
          :to="$prismic.asLink(item)"
          class="h-full flex flex-col border-2 border-black group"
        >
          <PrismicSizedImage
            :image="imageCrop === 'default' ? item.metaImage : item.metaImage[imageCrop]"
            sizes="sm:100vw md:50vw lg:50vw xl:50vw 2xl:50vw"
          />

          <div class="p-4">
            <Heading level="3" class="group-hover:underline">
              {{ item.title }}
            </Heading>

            <p>
              {{ item.metaDescription }}
            </p>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },

    imageCrop: {
      type: String,
      default: 'default',
    },
  },
}
</script>
