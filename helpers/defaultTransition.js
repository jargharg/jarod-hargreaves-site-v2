import { gsap } from 'gsap'

const DISABLE_PAGE_TRANSITIONS = false // process.dev

export const DEFAULT_DURATION = 1.2
const duration = DISABLE_PAGE_TRANSITIONS ? 0 : DEFAULT_DURATION
const defaults = { ease: 'none', duration }

export const DURATION_IN_MS = DEFAULT_DURATION * 1000

const getTransitionBlock = () => {
  return document.querySelector('#transitionBlock')
}

export const defaultTransition = DISABLE_PAGE_TRANSITIONS
  ? {}
  : {
      mode: 'in-out',

      onEnter (el, onComplete) {
        const elHeader = document.querySelector('header')
        const headerHeight = elHeader?.offsetHeight ?? 0
        const elTransitionBlock = getTransitionBlock()

        return gsap.timeline({ onComplete, defaults })

          .set(el, { position: 'fixed', top: headerHeight, left: 0, right: 0, zIndex: 50, background: 'white', minHeight: '100dvh' })

        // .set(elHeader, { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'white' })

          .set(elTransitionBlock, { opacity: 1, rotate: -360, x: 0 - elTransitionBlock.scrollWidth - window.innerWidth })
          .to(elTransitionBlock, { x: elTransitionBlock.scrollWidth, rotate: 0, ease: 'sine.out' })

          .fromTo(el, { clipPath: `inset(0 ${window.innerWidth + (elTransitionBlock.scrollWidth * 1.5)}px 0 0)` }, { clipPath: `inset(0 -${elTransitionBlock.scrollWidth * 0.5}px 0 0)`, ease: 'sine.out' }, '<')

          .set([el, elTransitionBlock, elHeader], { clearProps: true })
      },

      onLeave (el, onComplete) {
        const { top } = el.getBoundingClientRect()

        return gsap.timeline({ onComplete, defaults })
          .to(el, {})
          .set(el, { position: 'fixed', top: top ?? 0, left: 0, right: 0, zIndex: 1, background: 'white' })
      },
    }

export default defaultTransition
