<template>
  <div class="mt-24 md:my-40">
    <div id="features" class="tagline text-center">GET ALL THE FEATURES</div>
    <h2 class="text-center">An experience you deserve</h2>
    <!-- Feature Tile Grid -->
    <div class="grid mt-16 lg:grid-cols-3 gap-6 2xl:gap-y-6 md:grid-cols-2 sm:grid-cols-1">
      <FeatureTile v-for="feature in features" :key="feature.headline" :feature="feature" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          headline: 'Fancy statistics ',
          description: 'Get a clear overview of all the ecstacy usage within your group',
          image: 'dizzy-face.png',
        },
        {
          headline: 'Anonymous',
          description: 'We respect your privacy, Pilltable is completely anonymous. ',
          image: 'detective.png',
        },
        {
          headline: 'Dosing guidelines',
          description: 'We provide dosage guidelines for you and your friends.',
          image: 'pill.png',
        },
        {
          headline: 'Web based',
          description: 'Use Pilltable without download or installation. Just a website',
          image: 'world.png',
        },
        {
          headline: 'Notifications',
          description: 'Get a 💬 when you or someone in your group might go to hard 😵',
          image: 'speech-bubble.png',
        },
        {
          headline: 'Track your intakes',
          description: 'Track the ecstacy intakes of you and your friends. F*ck notepad!',
          image: 'checkmark.png',
        },
      ],
    }
  },
}
</script>
