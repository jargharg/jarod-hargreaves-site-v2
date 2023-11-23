<template>
  <div class="flex flex-col">
    <h2 v-if="heading" class="font-medium mb-2">
      {{ heading }}
    </h2>

    <BodyText v-if="$prismic.asText(body)">
      <prismic-rich-text :field="body" />
    </BodyText>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: null,
    },

    body: {
      type: Array,
      required: true,
    },
  },
}
</script>
