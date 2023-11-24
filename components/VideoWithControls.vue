<template>
  <div class="relative video-with-controls">
    <video
      ref="elVideo"
      :autoplay="autoplay"
      muted
      loop
      :src="src"
      class="max-w-none w-full h-full object-cover object-top"
    />

    <button
      :aria-label="isPlaying ? 'Pause' : 'Play'"
      class="absolute bottom-0 right-0 p-10 opacity-75 hover:opacity-100 transition-opacity"
      @click="onClickToggle"
    >
      <span class="font-medium text-xs bg-white rounded-full px-2 py-1">
        {{ isPlaying ? "Pause" : "Play" }}
      </span>
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
    const autoplay = ref(true) // @TODO hook up with carbon controls
    const elVideo = ref(null)
    const isPlaying = ref(autoplay.value)

    const onClickToggle = () => {
      isPlaying.value = !isPlaying.value
      elVideo.value.paused ? elVideo.value.play() : elVideo.value.pause()
    }

    return { autoplay, elVideo, isPlaying, onClickToggle }
  },
}
</script>
