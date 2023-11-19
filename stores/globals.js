import { defineStore } from 'pinia'
import errorLog from '~/helpers/errorLog'

export const useGlobalsStore = defineStore('globals', {
  state: () => {
    return {
      contact: {},
    }
  },

  actions: {
    async fetchGlobals ($prismic) {
      let data

      try {
        const response = await $prismic.client.getSingle('globals')
        data = response.data
      } catch (e) {
        errorLog(e, { type: 'globals' })
        return this
      }

      this.contact = {
        ctaText: data.contactCtaText,
        number: data.contactNumber,
        email: data.contactEmailAddress,
        linkedInLink: data.linkedInLink,
      }

      return this
    },
  },
})
