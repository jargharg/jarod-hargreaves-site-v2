<template>
  <ArticleSection>
    <VideoWithControls
      :src="$prismic.asLink(slice.primary.videoUrl)"
      class="w-full"
    />
    <div class="text-xs mt-2 font-medium flex justify-between gap-x-10">
      <p v-if="slice.primary.caption">
        {{ slice.primary.caption }}
      </p>
      <p v-if="slice.primary.fileSize">
        {{ slice.primary.fileSize }}
      </p>
    </div>
  </ArticleSection>
</template>

<script>
export default {
  name: 'VideoBlockSlice',

  props: {
    slice: {
      type: Object,
      required: true,
    },
  },
}
</script>
