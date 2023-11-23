<template>
  <div class="relative video-with-controls">
    <video
      ref="elVideo"
      autoplay
      muted
      loop
      :src="src"
      class="max-w-none w-full h-full object-cover"
    />

    <button
      :aria-label="isPlaying ? 'Pause' : 'Play'"
      class="absolute bottom-6 right-6 font-medium text-xs bg-white border-2 rounded-full px-2 py-1"
      @click="onClickToggle"
    >
      {{ isPlaying ? "Pause" : "Play" }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },

  setup () {
    const elVideo = ref(null)
    const isPlaying = ref(true)

    const onClickToggle = () => {
      isPlaying.value = !isPlaying.value
      elVideo.value.paused ? elVideo.value.play() : elVideo.value.pause()
    }

    return { elVideo, isPlaying, onClickToggle }
  },
}
</script>
