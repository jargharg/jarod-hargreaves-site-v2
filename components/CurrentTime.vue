<template>
  <client-only>
    <div class="current-time">
      {{ currentTime }}
    </div>
  </client-only>
</template>

<script>
export default {
  setup () {
    const currentTime = ref(new Date().toLocaleTimeString())

    onMounted(() => {
      setInterval(() => {
        currentTime.value = new Date().toLocaleTimeString()
      }, 1000)
    })

    return { currentTime }
  },
}
</script>

<style lang="scss" scoped>
.current-time {
  opacity: 0;
  animation: fadeIn 0.3s forwards linear;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
