<template>
  <ArticleSection>
    <CarouselBlock :items="slice.items" :background-color="slice.primary.backgroundColor" />
  </ArticleSection>
</template>

<script>
export default {
  name: 'CarouselBlockSlice',

  props: {
    slice: {
      type: Object,
      required: true,
    },
  },
}
</script>
