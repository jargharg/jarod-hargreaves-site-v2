<template>
  <div class="error-layout">
    <SiteHeader />

    <main class="flex-1 flex flex-col justify-center items-center text-center">
      <Heading level="2" class="text-xl mb-4">
        {{ error.statusCode === 404 ? "404 Page not found" : "500 Error" }}
      </Heading>

      <NuxtLink to="/" class="underline hover:no-underline">
        Back to the homepage
      </NuxtLink>
    </main>

    <SiteFooter />
  </div>
</template>

<script>
import { useGlobalsStore } from './stores/globals'

export default {
  props: {
    error: {
      type: Object,
      default: () => ({ statusCode: 404 }),
    },
  },
  setup (props) {
    const globalsStore = useGlobalsStore()
    const $prismic = usePrismic()
    console.error(props.error)

    if (process.client && !globalsStore.footer?.links?.length) {
      globalsStore.fetchGlobals($prismic)
    }
  },
}
</script>

<style lang="scss" scoped>
.error-layout {
  @apply min-h-[100dvh] flex flex-col;
}
</style>
