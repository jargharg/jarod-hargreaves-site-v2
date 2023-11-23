<template>
  <div
    v-if="credits.length || tech.length || projectLink"
    class="text-sm tracking-normal font-medium py-4 border-y-2 border-black my-5"
  >
    <div class="flex flex-wrap gap-x-5 gap-y-2 mb-2">
      <p v-for="(item, index) in credits" :key="index">
        {{ item.heading }}: {{ item.credit }}
      </p>
    </div>

    <div class="flex flex-wrap gap-5 justify-between leading-tight">
      <p v-if="tech.length">
        Tech: {{ tech.map(({ item }) => item).join(", ") }}
      </p>

      <a
        v-if="projectLink"
        :href="projectLink"
        target="_blank"
        class="flex gap-2 items-center hover:underline"
      >
        <IconArrowRight class="h-4" />
        <span> Visit Website </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    credits: {
      type: Array,
      default: () => [],
    },

    tech: {
      type: Array,
      default: () => [],
    },

    projectLink: {
      type: String,
      default: null,
    },
  },
}
</script>

<style>
</style>
