import { defineStore } from 'pinia'

export const useCursorPositionStore = defineStore('cursorPosition', {
  state: () => {
    return {
      x: 0,
      y: 0,
    }
  },
})
