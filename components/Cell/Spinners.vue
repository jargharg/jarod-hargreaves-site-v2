<template>
  <div class="relative overflow-hidden bg-white">
    <div class="outer" />
    <div class="inner" />
    <div class="circle" />
  </div>
</template>

<style lang="scss" scoped>
.outer,
.inner,
.circle {
  border-radius: 9999px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid black;
}

.outer,
.inner {
  top: 110%;
  aspect-ratio: 1;
  width: 210%;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    aspect-ratio: 1;
    animation: spin 2.13s linear reverse infinite;
    background-image: repeating-conic-gradient(black 0 0.5deg,
        white 0.5deg 18deg);
  }
}

.inner {
  width: 130%;
  aspect-ratio: 1;

  &::after {
    animation: spin 2s linear infinite;
  }
}

.circle {
  border-radius: 9999px;
  position: absolute;
  top: 105%;
  width: 20%;
  aspect-ratio: 1;
  background: white;
}

@keyframes spin {
  to {
    transform: rotate(18deg);
  }
}
</style>
