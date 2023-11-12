<template>
  <footer
    class="py-8 bg-black text-white border-t-[3px] border-double border-white"
  >
    <div class="container">
      <Heading level="2" class="mb-2">
        <NuxtLink to="/" class="hover:underline">
          Footer
        </NuxtLink>
      </Heading>

      <div class="flex justify-between">
        <ul class="flex flex-col gap-2">
          <li v-for="({ link, label }, index) in footer.menuItems" :key="index">
            <NuxtLink
              :to="$prismic.asLink(link)"
              class="hover:underline"
              active-class="underline cursor-default"
            >
              {{ label }}
            </NuxtLink>
          </li>
        </ul>

        <ul class="flex flex-col gap-2 text-right">
          <li v-for="({ platform, link }, index) in socialLinks" :key="index">
            <NuxtLink
              :to="$prismic.asLink(link)"
              class="hover:underline"
              target="_blank"
              active-class="underline cursor-default"
            >
              {{ platform }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-1 text-xs">
        <a
          v-if="contact.mapLink"
          :href="$prismic.asLink(contact.mapLink)"
          class="hover:underline"
          target="_blank"
        >
          <prismic-rich-text
            v-if="$prismic.asText(contact.address)"
            :field="contact.address"
          />
        </a>

        <a
          v-if="contact.number"
          :href="`tel:${contact.number}`"
          target="_blank"
          class="hover:underline"
        >
          {{ contact.number }}
        </a>

        <a
          v-if="contact.email"
          :href="`mailto:${contact.email}`"
          target="_blank"
          class="hover:underline"
        >
          {{ contact.email }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import errorLog from '~/helpers/errorLog'
import { useGlobalsStore } from '~/stores/globals'

export default {
  async setup () {
    const { client } = usePrismic()
    const type = 'siteFooter'
    let footer = {}

    try {
      const response = await client.getSingle(type)
      footer = response?.data ?? {}
    } catch (e) {
      errorLog(e, { type })
    }
    const globalsStore = useGlobalsStore()
    const contact = toRef(globalsStore, 'contact')
    const socialLinks = toRef(globalsStore, 'socialLinks')

    return { footer, contact, socialLinks }
  },
}
</script>
