<template>
  <section class="article-section">
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    withContainer: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.article-section {
  @apply py-5 border-b-2 border-black max-w-6xl mx-auto;
  @apply last-of-type:border-b-0 last-of-type:pb-0 first-of-type:pt-0;
}
</style>
