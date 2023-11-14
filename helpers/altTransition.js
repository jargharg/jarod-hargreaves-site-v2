import { gsap } from 'gsap'

const DISABLE_PAGE_TRANSITIONS = false // process.dev

export const DURATION = 1
const defaults = { ease: 'power2', duration: DISABLE_PAGE_TRANSITIONS ? 0 : DURATION }

export const DURATION_IN_MS = DURATION * 1000

export const altTransition = DISABLE_PAGE_TRANSITIONS
  ? {}
  : {
      mode: 'in-out',

      onEnter (el, onComplete) {
        const headerHeight = document.querySelector('header')?.offsetHeight ?? 0
        return gsap.timeline({ onComplete, defaults })

          .set(el, { position: 'fixed', top: headerHeight, left: 0, right: 0, zIndex: 10, background: 'white', transformOrigin: 'top center', clipPath: 'inset(0 0 calc(100% - 100vh) 0)' })
          .from(el, { scale: 0, y: '50vh' })
          .set(el, { clearProps: true })
      },

      onLeave (el, onComplete) {
        const { top } = el.getBoundingClientRect()
        return gsap.timeline({ onComplete, defaults })
          .to(el, {})
          .set(el, { position: 'fixed', top: top ?? 0, left: 0, right: 0, zIndex: 1, background: 'white' })
      },
    }

export default altTransition
