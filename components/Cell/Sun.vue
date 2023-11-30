<template>
  <svg viewBox="0 0 10 10" fill="black" class="h-full w-full bg-white" preserveAspectRatio="xMidYMid meet">
    <circle
      cx="5"
      cy="5"
      r="1.9"
      class="beams"
      stroke="black"
      stroke-width="5"
      fill="none"
      pathLength="85"
      stroke-dasharray="0.5 5.5"
    />
    <circle
      cx="5"
      cy="5"
      r="1.5"
      class="center"
      stroke="black"
      fill="white"
      stroke-width="2"
      vector-effect="non-scaling-stroke"
    />
  </svg>
</template>

<style lang="scss" scoped>
.center {
  transform-origin: center;
  animation: pulse 1s alternate infinite ease-in-out;
  animation-delay: -1s;
}

.beams {
  transform-origin: center;
  animation: pulse 1s alternate infinite ease-in-out;
}

@keyframes pulse {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0.7);
  }
}
</style>
