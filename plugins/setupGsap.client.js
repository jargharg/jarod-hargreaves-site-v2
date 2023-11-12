// @NOTE: register any extra GSAP plugins here

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Draggable from 'gsap/Draggable'

export default defineNuxtPlugin(() => {
  if (!process.client) { return }
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(Draggable)
})
