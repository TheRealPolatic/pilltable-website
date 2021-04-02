<template>
  <div class="bg-primary p-6 rounded-xl max-w-md mx-auto shadow-lg">
    <img
      class="bg-gradient-to-tr from-primary-gradient-1 to-primary-gradient-2 rounded-lg shadow-2xl"
      :src="require(`~/assets/emojis/${feature.image}`)"
    />

    <h3>
      {{ feature.headline }}
    </h3>
    <p class="p-small">
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
