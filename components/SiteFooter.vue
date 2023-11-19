<template>
  <footer class="pb-8 pt-40 -mt-20 bg-gradient-to-t from-yellow-100 font-medium text-sm tracking-normal leading-none">
    <div class="container">
      <div class="flex justify-between items-end">
        <div>
          <CurrentTime />
        </div>

        <div class="flex flex-col gap-3 items-end">
          <NuxtLink
            v-for="({ link, label }, index) in footer.menuItems"
            :key="index"
            :to="$prismic.asLink(link)"
            class="hover:underline"
            active-class="underline cursor-default"
          >
            {{ label }}
          </NuxtLink>

          <div class="flex">
            <a
              v-if="$prismic.asLink(contact.linkedInLink)"
              :href="$prismic.asLink(contact.linkedInLink)"
              class="inline-block px-2"
              target="_blank"
              active-class="underline cursor-default"
            >
              <svg viewBox="0 0 72 72" class="h-[18px]">
                <path
                  d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                  fill="currentColor"
                />
              </svg>
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

    return { footer, contact }
  },
}
</script>
