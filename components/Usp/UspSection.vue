<template>
  <div class="my-4 flex md:h-screen w-full md:flex-row flex-col justify-between overflow-hidden">
    <div class="md:w-2/5 flex flex-col justify-center" :class="{ 'md:order-last': usp.textright }">
      <div class="tagline">{{ usp.tagline }}</div>
      <h2>{{ usp.headline }}</h2>
      <p>{{ usp.description }}</p>
    </div>
    <div
      class="md:w-3/5 flex items-center my-16"
      :class="usp.textright ? 'md:justify-start w-16/12' : 'md:justify-end'"
    >
      <video autoplay muted loop class="md:h-3/4 md:rounded-video rounded-2xl">
        <source :src="require(`~/assets/videos/${usp.video}`)" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    usp: Object,
  },
}
</script>
