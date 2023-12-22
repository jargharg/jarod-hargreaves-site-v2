<template>
  <div>
    <svg class="background" viewBox="0 0 100 100" preserveAspectRatio="xMidYMax slice">
      <path d="M0,0 h100 v100 h-100 z" class="sky" />

      <path d="M-5,105 h110 v-10 h-110 z" class="ground" />

      <g class="clouds">
        <g class="cloud" transform="translate(7, 15)">
          <circle cx=50 cy=50 r=10 />
          <circle cx=38 cy=47 r=10 />
          <circle cx=60 cy=42 r=12 />
          <circle cx=52 cy=36 r=8 />
          <circle cx=42 cy=37 r=6 />
        </g>

        <g class="cloud" transform="translate(-20, 8)">
          <circle cx=30 cy=48 r=6 />
          <circle cx=22 cy=47 r=7 />
          <circle cx=37 cy=42 r=7 />
          <circle cx=22 cy=40 r=4 />
          <circle cx=28 cy=37 r=6 />
        </g>

        <g class="cloud" transform="translate(60, 0) scale(0.9, 0.7)">
          <circle cx=30 cy=48 r=6 />
          <circle cx=22 cy=47 r=7 />
          <circle cx=37 cy=42 r=7 />
          <circle cx=22 cy=40 r=4 />
          <circle cx=28 cy=37 r=6 />
        </g>

        <g class="cloud" transformOrigin="center center" transform="translate(0, 23) scale(0.5, 0.4)">
          <circle cx=50 cy=50 r=10 />
          <circle cx=38 cy=47 r=10 />
          <circle cx=60 cy=42 r=12 />
          <circle cx=52 cy=36 r=8 />
          <circle cx=42 cy=37 r=6 />
        </g>
      </g>
    </svg>

    <svg class="tube-man" viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">
      <g class="body-bottom">
        <g class="body-center">
          <g class="body-top">
            <circle cx="50" cy="25" r="5" />

            <g class="head">
              <path d="M45,15 h10v10h-10z" />

              <g class="hair">
                <path d="M45,16 v-6 h1 v6 z" />
                <path d="M46.5,16 v-6 h1 v6 z" />
                <path d="M48,16 v-6 h1 v6 z" />
                <path d="M49.5,16 v-6 h1 v6 z" />
                <path d="M51,16 v-6 h1 v6 z" />
                <path d="M52.5,16 v-6 h1 v6 z" />
                <path d="M54,16 v-6 h1 v6 z" />
              </g>

              <g class="eyes">
                <ellipse cx="47.7" cy="20" rx="1.8" ry="3" fill="white" stroke="black" stroke-width="0.4" />
                <ellipse cx="47.7" cy="21" rx="1" ry="1.7" fill="black" />
                <ellipse cx="52.3" cy="20" rx="1.8" ry="3" fill="white" stroke="black" stroke-width="0.4" />
                <ellipse cx="52.3" cy="21" rx="1" ry="1.7" fill="black" />

              </g>
            </g>

            <path d="M45,25 h10v20h-10z" />

            <path class="mouth" d="M46,26 q4,4 8,0 q-4,8 -8,0 z" fill="white" stroke="black" stroke-width="0.4" />

            <circle cx="45" cy="32" r="2" />
            <g class="arm-left">
              <path d="M45,30 h-10 v4 h10 z" />

              <circle cx="35" cy="32" r="2" />
              <g class="arm-left-end">
                <path d="M35,30 h-7 v4 h7 z" />
                <circle cx="28" cy="32" r="2" />
              </g>
            </g>

            <circle cx="55" cy="32" r="2" />
            <g class="arm-right">
              <path d="M55,30 h10 v4 h-10 z" />

              <circle cx="65" cy="32" r="2" />
              <g class="arm-right-end">
                <path d="M65,30 h7 v4 h-7 z" />
                <circle cx="72" cy="32" r="2" />
              </g>
            </g>
          </g>

          <circle cx="50" cy="45" r="5" />

          <path d="M45,45 h10v20h-10z" />
        </g>

        <circle cx="50" cy="65" r="5" />

        <path d="M45,65 h10v40h-10z" />
      </g>
    </svg>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  setup() {
    function animateHair() {
      const strands = Array.from(document.querySelectorAll('.hair path'))

      strands.forEach((element, index) => {
        gsap.set(element, { transformOrigin: 'center bottom' })
        gsap.timeline({ repeat: -1, yoyo: true, delay: -index * 0.1 }).to(element, {
          scaleY: 0.3,
          duration: 0.3 + Math.random() * 0.5,
          ease: 'power1.inOut',
        })
      })
    }

    function animateClouds() {
      const clouds = Array.from(document.querySelectorAll('.cloud'))

      clouds.forEach((element, index) => {
        const bbox = element.getBBox()
        gsap
          .timeline({
            repeat: -1,
            defaults: { duration: 20 + index * 5, ease: 'none' },
          })
          .set(element, { x: -100 })
          .to(element, { x: 100 })
      })
    }

    function animateBodyElement(
      element,
      rotate,
      duration,
      transformOrigin = 'center bottom',
    ) {
      gsap
        .timeline({ repeat: -1, defaults: { duration, ease: 'sine.inOut' } })
        .set(element, { transformOrigin })
        .set(element, { rotate })
        .to(element, { rotate: -rotate })
        .to(element, { rotate })
    }

    onMounted(() => {
      animateBodyElement('.head', 25, 0.7)
      animateBodyElement('.body-top', 15, 1)
      animateBodyElement('.body-center', 10, 2)
      animateBodyElement('.body-bottom', 5, 4)

      animateBodyElement('.arm-left', 40, 1, 'right center')
      animateBodyElement('.arm-left-end', 30, 0.7, 'right center')
      animateBodyElement('.arm-right', -38, 1.1, 'left center')
      animateBodyElement('.arm-right-end', -30, 0.65, 'left center')

      animateHair()
      animateClouds()
    })
  },
}
</script>

<style lang="scss" scoped>
.background,
.tube-man {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.tube-man {
  // z-index: 2;
}

.sky {
  fill: white;
}

.ground {
  fill: white;
  stroke: black;
  stroke-width: 0.5;
}

.clouds {
  // fill: black;
}

.cloud {
  fill: black;
  opacity: 0.2;
}

.tube-man {
  fill: white;

  filter:
    drop-shadow(1px 1px 0px black) drop-shadow(-1px 1px 0px black) drop-shadow(-1px -1px 0px black) drop-shadow(1px -1px 0px black);
}

.hair {
  fill: white;
}
</style>
