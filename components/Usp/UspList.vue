<template>
  <div>
    <UspSection v-for="usp in usps" :key="usp.headline" :usp="usp" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      usps: [
        {
          'tagline': 'ECSTASY TRACKER',
          'headline': 'Keep track of ecstasy usage of you and your friends. 🙌🏻',
          'description': 'Based on tailored dosage guidelines.',
          'image': 'keep-track.png',
          'textright': false,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
