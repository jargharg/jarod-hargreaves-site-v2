<template>
  <SliceSimulator v-slot="{ slices }">
    <SliceZone :slices="slices" :components="components" />
  </SliceSimulator>
</template>

<script>
import { SliceSimulator } from '@slicemachine/adapter-nuxt/simulator'
import { components } from '~/slices'

export default {
  components: {
    SliceSimulator,
  },

  layout: 'sliceSimulator',
  setup () {
    return { components }
  },
}
</script>
