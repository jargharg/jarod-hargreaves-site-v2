<template>
  <ArticleSection class="columns">
    <div>
      <NuxtLink
        v-if="
          slice.primary.ctaLabel && $prismic.asLink(slice.primary.ctaLink)
        "
        :to="$prismic.asLink(slice.primary.ctaLink)"
      >
        {{ slice.primary.ctaLabel }}
      </NuxtLink>
    </div>

    <TextBlock v-bind="{ ...slice.primary }" />
  </ArticleSection>
</template>

<script>
export default {
  name: 'TextBlockSlice',

  props: {
    slice: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.columns {
  @apply grid gap-5;

  @screen md {
    grid-template-columns: 4fr 6fr;
  }
}
</style>
