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
        const headerHeight = document.querySelector('header')?.offsetHeight ?? 0
        const elTransitionBlock = getTransitionBlock()

        return gsap.timeline({ onComplete, defaults })

          .set(el, { position: 'absolute', top: headerHeight, left: 0, right: 0, zIndex: 10, background: 'white' })

          .set(elTransitionBlock, { opacity: 1, rotate: -360, x: 0 - elTransitionBlock.scrollWidth - window.innerWidth })
          .to(elTransitionBlock, { x: elTransitionBlock.scrollWidth, rotate: 0, ease: 'sine.out' })

          .fromTo(el, { clipPath: `inset(0 ${window.innerWidth + (elTransitionBlock.scrollWidth * 1.5)}px 0 0)` }, { clipPath: `inset(0 -${elTransitionBlock.scrollWidth * 0.5}px 0 0)`, ease: 'sine.out' }, '<')

          .set([el, elTransitionBlock], { clearProps: true })
      },

      // .fromTo(el, { clipPath: `inset(0 0 0 -${elTransitionBlock.scrollWidth * 1.5}px)` }, { clipPath: `inset(0 0 0 ${window.innerWidth + (elTransitionBlock.scrollWidth * 0.5)}px)`, ease: 'sine.out' }, '<')

      onLeave (el, onComplete) {
        const elTransitionBlock = getTransitionBlock()

        const { top } = el.getBoundingClientRect()

        const elFooter = document.querySelector('footer')
        const footerTop = elFooter.getBoundingClientRect().top

        return gsap.timeline({ onComplete, defaults })
          .to(el, {})
          .set(el, { position: 'fixed', top: top ?? 0, left: 0, right: 0, zIndex: 1, background: 'white' })
      // .set(elFooter, { position: 'fixed', top: footerTop, left: 0, right: 0 })
      // .set(elTransitionBlock, { opacity: 1, rotate: -360, x: 0 - elTransitionBlock.scrollWidth - window.innerWidth })
      // .to(elTransitionBlock, { x: elTransitionBlock.scrollWidth, rotate: 0, ease: 'sine.out' })
      // .fromTo([el, elFooter], { clipPath: `inset(0 0 0 -${elTransitionBlock.scrollWidth * 1.5}px)` }, { clipPath: `inset(0 0 0 ${window.innerWidth + (elTransitionBlock.scrollWidth * 0.5)}px)`, ease: 'sine.out' }, '<')
      // .set([el, elFooter, elTransitionBlock], { clearProps: true })
      },
    }

export default defaultTransition
