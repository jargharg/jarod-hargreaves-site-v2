<template>
  <ArticleSection :with-container="false">
    <ImageBlock
      :image="slice.primary.image"
      :caption="slice.primary.caption"
      :variation="slice.variation"
    />
  </ArticleSection>
</template>

<script>
export default {
  name: 'ImageBlockSlice',

  props: {
    slice: {
      type: Object,
      required: true,
    },
  },
}
</script>
