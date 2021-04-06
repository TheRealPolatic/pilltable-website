<template>
  <div class="my-32 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-y-10" :class="usp.textleft ? 'md:gap-x-8' : 'md:gap-x-32'">
    <!-- <div class="flex flex-col justify-center" :class="usp.textleft ? 'order-first' : 'order-last'"> -->
    <div class="flex flex-col justify-center" :class="{ 'order-last': usp.textright }">
      <div class="tagline">{{ usp.tagline }}</div>
      <h2 class="max-w-sm">{{ usp.headline }}</h2>
      <p>{{ usp.description }}</p>
    </div>
    <div class="">
      <!--  Hoe img vergroten? Maakt niet veel uit omdat het een placeholdert is. -->
      <img :src="require(`~/assets/images/${usp.image}`)" />
      <!-- "~/assets/images/keep-track.png" -->
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
