import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const { googleAnalyticsId, isDevMode } = config.public

  if (isDevMode || !googleAnalyticsId) {
    return
  }

  let isGtagInitialised = false

  const { cookiesEnabledIds } = useCookieControl()

  watch(
    () => cookiesEnabledIds.value,
    (cookies) => {
      const isGaEnabled = cookies?.includes('ga')

      if (!isGtagInitialised && isGaEnabled) {
        isGtagInitialised = true

        nuxtApp.vueApp.use(VueGtag,
          {
            pageTrackerTemplate (to) {
              return {
                page_title: document.title,
                page_path: to.path,
              }
            },
            config: { id: googleAnalyticsId },
            bootstrap: true,
          },
          nuxtApp.$router,
        )
      }
    },
    { deep: true, immediate: true },
  )
})
