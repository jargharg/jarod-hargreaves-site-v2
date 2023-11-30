<template>
  <div class="relative h-[calc(100dvh-150px)] mb-10">
    <PrismicSizedImage
      :image="project.heroImage"
      :lazy="false"
      :with-dimensions="false"
      class="image-pixelated"
      densities="1"
      sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
    />

    <div class="absolute inset-0 mix-blend-screen" :style="{ backgroundColor: project.tint }" />

    <div
      class="absolute bottom-0 px-5 pt-20 inset-x-0 text-white flex flex-col items-center text-center z-20"
      :style="`background: linear-gradient(transparent, ${project.tint ?? 'black'});`"
    >
      <Heading level="2" class="project-header__title">
        <span v-for="(char, index) in title" :key="index" :class="`char--${char}${title[index + 1]}`">{{ char }}</span>
      </Heading>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  setup (props) {
    const title = computed(() => props.project.title.split(''))
    return { title }
  },
}
</script>

<style lang="scss" scoped>
.project-header {
  &__title {
    @apply text-5xl md:text-6xl xl:text-7xl w-auto mb-4 tracking-tight;
  }
}

.char {
  &--Wa {
    letter-spacing: -0.15em;
  }

  &--al {
    letter-spacing: -0.04em;
  }

  &--lk {
    letter-spacing: 0em;
  }

  &--th {
    letter-spacing: 0em;
  }

  &--he {
    letter-spacing: -0.05em;
  }

  &--Pl {
    letter-spacing: -0.07em;
  }

  &--la {
    letter-spacing: -0.04em;
  }

  &--an {
    letter-spacing: -0.01em;
  }

  &--nk {
    letter-spacing: 0.015em;
  }
}
</style>
