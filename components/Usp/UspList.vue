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
        {
          'tagline': 'TRACK YOUR MATES',
          'headline': 'A timeline of the intakes at a festival or party.',
          'description': 'Keep an 👀 on each other. Safety first!',
          'image': 'timeline.png',
          'textright': true,
        },
        {
          'tagline': 'CLEAR OVERVIEW',
          'headline': 'Fancy ✨ statistics of your ecstacy usage.',
          'description': 'Stop tracking in your notepad! Do it the fancy way.',
          'image': 'statistics.png',
          'textright': false,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
