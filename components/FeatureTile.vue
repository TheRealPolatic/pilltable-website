<template>
  <div class="bg-primary p-6 rounded-xl min-w-96">
    <!-- <img class="bg-highlight rounded-lg" src="~/assets/emojis/dizzy-face.png" /> -->
    <img
      class="bg-highlight rounded-lg"
      :src="require(`~/assets/emojis/${feature.image}`)"
    />

    <h3 class="text-24xl text-white font-semibold mt-4">
      {{ feature.headline }}
    </h3>
    <p class="text-xl text-white mt-2 font-light">
      {{ feature.description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    feature: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style></style>
