<template>
  <ArticleSection class="columns">
    <div />

    <div />
  </ArticleSection>
</template>

<script>
export default {
  name: 'TextMediaBlockSlice',

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
