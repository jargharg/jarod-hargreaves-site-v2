<template>
  <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
    <path fill="#fff" d="M-100 0h300v100H-100z" />

    <g class="main-group">
      <g>
        <path
          class="curve curve--1"
          d="M90 50a40 40 0 0 0-80 0v70a40 40 0 0 0 80 0V50Z"
          fill="none"
          vector-effect="non-scaling-stroke"
          stroke-width="2"
          stroke="#000"
        />
        <path
          class="curve curve--2"
          d="M80 50a30 30 0 0 0-60 0v80a30 30 0 0 0 60 0V50Z"
          fill="none"
          vector-effect="non-scaling-stroke"
          stroke-width="2"
          stroke="#fff"
        />
        <path
          class="curve curve--3"
          d="M70 50a20 20 0 0 0-40 0v70a20 20 0 0 0 40 0V50Z"
          fill="none"
          vector-effect="non-scaling-stroke"
          stroke-width="2"
          stroke="#000"
        />
        <path
          class="curve curve--4"
          d="M60 50a10 10 0 0 0-20 0v80a10 10 0 0 0 20 0V50Z"
          fill="none"
          vector-effect="non-scaling-stroke"
          stroke-width="2"
          stroke="#fff"
        />
      </g>

      <g transform="translate(-85, 0) rotate(180)" transform-origin="center">
        <path
          class="curve curve--1"
          d="M90 50a40 40 0 0 0-80 0v70a40 40 0 0 0 80 0V50Z"
          fill="none"
          vector-effect="non-scaling-stroke"
          stroke-width="2"
          stroke="#000"
        />
        <path
          class="curve curve--2"
          d="M80 50a30 30 0 0 0-60 0v80a30 30 0 0 0 60 0V50Z"
          fill="none"
          vector-effect="non-scaling-stroke"
          stroke-width="2"
          stroke="#fff"
        />
        <path
          class="curve curve--3"
          d="M70 50a20 20 0 0 0-40 0v70a20 20 0 0 0 40 0V50Z"
          fill="none"
          vector-effect="non-scaling-stroke"
          stroke-width="2"
          stroke="#000"
        />
        <path
          class="curve curve--4"
          d="M60 50a10 10 0 0 0-20 0v80a10 10 0 0 0 20 0V50Z"
          fill="none"
          vector-effect="non-scaling-stroke"
          stroke-width="2"
          stroke="#fff"
        />
      </g>

      <g transform="translate(85, 0) rotate(180)" transform-origin="center">
        <path
          class="curve curve--1"
          d="M90 50a40 40 0 0 0-80 0v70a40 40 0 0 0 80 0V50Z"
          fill="none"
          vector-effect="non-scaling-stroke"
          stroke-width="2"
          stroke="#000"
        />
        <path
          class="curve curve--2"
          d="M80 50a30 30 0 0 0-60 0v80a30 30 0 0 0 60 0V50Z"
          fill="none"
          vector-effect="non-scaling-stroke"
          stroke-width="2"
          stroke="#fff"
        />
        <path
          class="curve curve--3"
          d="M70 50a20 20 0 0 0-40 0v70a20 20 0 0 0 40 0V50Z"
          fill="none"
          vector-effect="non-scaling-stroke"
          stroke-width="2"
          stroke="#000"
        />
        <path
          class="curve curve--4"
          d="M60 50a10 10 0 0 0-20 0v80a10 10 0 0 0 20 0V50Z"
          fill="none"
          vector-effect="non-scaling-stroke"
          stroke-width="2"
          stroke="#fff"
        />
      </g>
    </g>
  </svg>
</template>

<script>
import gsap from 'gsap'

export default {
  setup () {
    onMounted(() => {
      [1, 2, 3, 4].forEach((index) => {
        gsap.timeline({ repeat: -1, yoyo: true })
          .to(`.curve--${index}`, { y: 10, ease: 'sine.inOut', delay: -(index * 0.1) })
      })
    })
  },
}
</script>

<style lang="scss" scoped>
@media screen and (orientation: portrait) {
  .main-group {
    transform-origin: "center";
    transform: rotate(90deg) translate(0px, -100px);
  }
}
</style>
