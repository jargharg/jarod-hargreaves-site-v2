<template>
  <div class="default-layout">
    <main>
      <NuxtPage :transition="transition" />
    </main>
  </div>
</template>

<script>
import transition from '~/helpers/defaultTransition'

export default {
  setup () {
    useHead(() => ({
      htmlAttrs: { lang: 'en' },
    }))

    return { transition }
  },
}
</script>

<style lang="scss" scoped>
.default-layout {
  @apply min-h-[100dvh] flex flex-col text-base;
}
</style>
