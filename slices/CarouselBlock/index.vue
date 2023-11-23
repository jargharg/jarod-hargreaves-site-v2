<template>
  <ArticleSection>
    <CarouselBlock :items="slice.items" />
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
