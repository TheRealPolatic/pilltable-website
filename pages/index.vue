<template>
  <div>
    <NavBar />
    <h1 class="font-medium text-22xl">Pilltable website</h1>

    <FaqSection />

    <div
      class="grid lg:grid-cols-3 gap-6 2xl:gap-y-12 md:grid-cols-2 sm:grid-cols-1"
    >
      <FeatureTile
        v-for="feature in features"
        :key="feature.headline"
        :feature="feature"
      />
    </div>

    <CtaSection />
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          headline: 'Fancy statistics ',
          description:
            'Get a clear overview of all the ecstacy usage within your group',
          image: 'dizzy-face.png',
        },
        {
          headline: 'Anonymous',
          description:
            'We respect your privacy, Pilltable is completely anonymous. ',
          image: 'detective.png',
        },
        {
          headline: 'Dosing guidelines',
          description: 'We provide dosage guidelines for you and your friends.',
          image: 'pill.png',
        },
        {
          headline: 'Web based',
          description:
            'Use Pilltable without download or installation. Just a website',
          image: 'world.png',
        },
        {
          headline: 'Notifications',
          description:
            'Get a 💬 when you or someone in your group might go to hard 😵',
          image: 'speech-bubble.png',
        },
        {
          headline: 'Track your intakes',
          description:
            'Track the ecstacy intakes of you and your friends. F*ck notepad!',
          image: 'checkmark.png',
        },
      ],
    }
  },
}
</script>
