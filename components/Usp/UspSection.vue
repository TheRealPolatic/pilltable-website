<template>
  <div class="my-4 flex h-screen w-full md:flex-row flex-col justify-between">
    <div class="w-2/5 flex flex-col justify-center" :class="{ 'order-last': usp.textright }">
      <div class="tagline">{{ usp.tagline }}</div>
      <h2>{{ usp.headline }}</h2>
      <p>{{ usp.description }}</p>
    </div>
    <div class="w-3/5 flex items-center" :class="usp.textright ? 'justify-start' : 'justify-end'">
      <img class="h-3/4" :src="require(`~/assets/images/${usp.image}`)" />
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
