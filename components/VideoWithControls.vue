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
      class="absolute inset-0 opacity-0 bg-black bg-opacity-0 focus-visible:bg-opacity-20 hover:bg-opacity-20 focus-visible:opacity-100 hover:opacity-100 transition-all"
      :class="{ 'opacity-100': !isPlaying }"
      @click="onClickToggle"
    >
      <span class="absolute bottom-10 right-10 font-medium text-xs bg-white rounded-full px-2 py-1">
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
