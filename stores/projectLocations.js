import { defineStore } from 'pinia'

import nuxtStorage from 'nuxt-storage'

const PROJECT_LOCATIONS_KEY = 'ui/projectLocations'
const WINDOW_DIMENSIONS_KEY = 'ui/windowDimensions'

const setData = (key, value) => {
  nuxtStorage.localStorage.setData(key, value, 30, 'd')
}

export const useProjectLocationsStore = defineStore('projectLocations', {
  state: () => {
    return {
      // { [url: string]: { x: number, y: number, zIndex: number } }
      isFirstLoad: true,
      windowDimensions: { width: 0, height: 0 },
      locations: {},
    }
  },

  actions: {
    getLocation (url) {
      return this.locations[url]
    },

    setLocation (url, x, y, zIndex) {
      this.locations[url] = { x, y, zIndex }
      setData(PROJECT_LOCATIONS_KEY, this.locations)

      this.windowDimensions = { width: window.innerWidth, height: window.innerHeight }
      setData(WINDOW_DIMENSIONS_KEY, this.windowDimensions)
    },

    setPreferencesFromStorage () {
      this.locations = nuxtStorage.localStorage.getData(PROJECT_LOCATIONS_KEY) ?? this.locations
      this.windowDimensions = nuxtStorage.localStorage.getData(WINDOW_DIMENSIONS_KEY) ?? this.windowDimensions
    },
  },
})
