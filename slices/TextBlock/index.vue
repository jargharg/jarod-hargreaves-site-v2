<template>
  <ArticleSection>
    <div class="max-w-5xl mx-auto">
      <TextBlock :variation="slice.variation" v-bind="{ ...slice.primary }" />
    </div>
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
