<template>
  <header class="site-header container">
    <div class="site-header__inner">
      <StretchyName class="site-header__name" />

      <div class="site-header__side">
        <CurrentTime class="hidden md:block" />
        <SiteOptions />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  setup () {
    const route = useRoute()
    const isCollapsed = computed(() => route.path !== '/')

    return { isCollapsed }
  },
}
</script>

<style scoped lang="scss">
.site-header {
  @apply sticky top-0 z-[9999] pt-4 bg-white;

  &--collapsed {
    @apply -translate-y-4 transition-transform;
  }

  &__inner {
    @apply flex justify-between gap-2 pb-3 border-b-2 border-black;
  }

  &__name {
    @apply flex-1;
  }

  &__side {
    @apply flex flex-col items-end justify-between gap-2 text-sm tracking-normal font-medium;
  }
}
</style>
