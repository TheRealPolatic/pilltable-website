<template>
  <div class="min-h-screen mb-20 md:mt-0 mt-28" id="pricing">
    <div class="tagline text-center">TRY FOR FREE</div>
    <h2 class="text-center">Pricing table</h2>

    <div class="grid grid-cols-12 gap-2 md:p-6 px-11 py-6">
      <div class="col-span-6"></div>
      <div class="col-span-3 mx-auto">
        <p class="p-bold">Free</p>
      </div>
      <div class="col-span-3 mx-auto">
        <p class="p-bold">Unlimited</p>
      </div>
    </div>

    <!-- Render all features -->
    <PricingTableRow v-for="feature in features" :key="feature.title" :feature="feature" />

    <div class="md:grid md:grid-cols-12 md:gap-2 p-6">
      <div class="md:col-span-6"></div>
      <div class="md:col-span-3 md:mx-auto -mx-4">
        <Button text="Free version" link="/try-now" secondary />
      </div>
      <div class="md:col-span-3 md:mx-auto md:mt-0 mt-5 -mx-4">
        <Button text="Go unlimited" link="https://www.google.nl" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          title: 'Completely anonymous',
          isFree: true,
          transparent: false,
        },
        {
          title: 'Fancy statistics of the ecstasy usage',
          isFree: true,
          transparent: true,
        },
        {
          title: 'Custom dosage guidelines',
          isFree: true,
          transparent: false,
        },
        {
          title: 'Use without download or installation',
          isFree: true,
          transparent: true,
        },
        {
          title: 'Friend in need alert',
          isFree: true,
          transparent: false,
        },
        {
          title: 'Unlimited group members',
          isFree: false,
          transparent: true,
        },
      ],
    }
  },
}
</script>
