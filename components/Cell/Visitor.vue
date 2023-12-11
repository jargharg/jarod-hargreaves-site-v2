<template>
  <article class="flex flex-col items-center text-center justify-between">
    <h2 class="p-1 border-b-2 border-black w-full font-serif text-lg bg-gray-100">
      Message Important
    </h2>

    <p class="uppercase font-medium bg-gradient-to-r from-black to-gray-400 text-white px-4 text-base">
      Congratulations!
    </p>

    <!-- @TODO move to component -->
    <svg role="presentation" fill-rule="evenodd" viewBox="0 0 100 100" class="h-1/4 motion-safe:animate-spin overflow-visible">
      <path
        fill="#fff"
        d="M50 .5A49.52 49.52 0 0 1 99.5 50 49.52 49.52 0 0 1 50 99.5 49.52 49.52 0 0 1 .5 50 49.52 49.52 0 0 1 50 .5ZM63 26c4.42 0 8 5.6 8 12.5S67.42 51 63 51c-4.41 0-8-5.6-8-12.5S58.59 26 63 26Zm-25.5 0c4.41 0 8 5.6 8 12.5S41.91 51 37.5 51s-8-5.6-8-12.5 3.59-12.5 8-12.5Z"
      />
      <circle
        cx="50"
        cy="50"
        r="49.5"
        fill="none"
        stroke="#000"
        stroke-width="2"
        vector-effect="non-scaling-stroke"
      />
      <path
        fill="none"
        stroke="#000"
        stroke-width="2"
        vector-effect="non-scaling-stroke"
        d="M21.5 62.5s0 0 0 0a31.2 31.2 0 0 0 58.03 1.6L80 63"
      />
      <g fill="none" stroke="#000" stroke-width="2" vector-effect="non-scaling-stroke">
        <ellipse cx="63" cy="38.5" rx="8" ry="12.5" />
        <ellipse cx="37.5" cy="38.5" rx="8" ry="12.5" />
      </g>
    </svg>

    <div class="text-sm">
      <p class="font-medium uppercase">
        This is not a joke!
      </p>

      <p>You are the 5th visitor!!</p>
    </div>

    <button class="w-full p-2 border-black border-t-2 bg-gray-100 font-medium">
      Click here
    </button>
  </article>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>
