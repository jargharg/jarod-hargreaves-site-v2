<template>
  <div class="default-layout">
    <SiteHeader />

    <main class="flex flex-col flex-1 w-screen min-h-[100dvh]">
      <NuxtPage :transition="transition" />
    </main>

    <SiteFooter />
    <!--
    <CookieControl>
      <template #bar>
        <div class="mb-4">
          <Heading level="2" class="mb-2">
            Cookie Policy
          </Heading>

          <p class="!text-sm">
            To give you the best experience on our website, we use cookies.

            <NuxtLink
              to="/legal/cookie-policy/"
              class="underline hover:no-underline"
            >
              Find out more
            </NuxtLink>
          </p>
        </div>
      </template>
    </CookieControl> -->

    <div id="transitionBlock" class="transition-block">
      <img src="/smiley.svg" alt="">
    </div>
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

.transition-block {
  @apply fixed right-0 top-0 h-[100dvh] w-[100dvh];
  @apply z-50 pointer-events-none select-none;
  transform: translateX(100%);

  img {
    @apply h-full w-full;
  }
}
</style>
