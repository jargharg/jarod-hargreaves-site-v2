<template>
  <header class="sticky top-0 z-20 pt-4 pb-2 bg-white container">
    <div class="flex flex-wrap justify-between items-baseline gap-x-4 gap-y-2 pb-2 border-b-2 border-black">
      <StretchyName class="flex-1" />

      <ul class="flex flex-wrap gap-x-4 gap-y-2">
        <li v-for="({ link, label }, index) in header.menuItems" :key="index">
          <NuxtLink
            :to="$prismic.asLink(link)"
            class="hover:underline"
            active-class="underline cursor-default"
          >
            {{ label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import errorLog from '~/helpers/errorLog'

export default {
  async setup () {
    const { client } = usePrismic()
    const type = 'siteHeader'
    let header = {}

    try {
      const response = await client.getSingle(type)
      header = response?.data ?? {}
    } catch (e) {
      errorLog(e, { type })
    }

    return { header }
  },
}
</script>
