<template>
  <div>
    <div>
      <div class="grid grid-cols-12 gap-2 p-6">
        <div class="col-span-6"></div>
        <div class="col-span-3 mx-auto">
          <p class="p-bold">Free</p>
        </div>
        <div class="col-span-3 mx-auto">
          <p class="p-bold">Unlimited</p>
        </div>
      </div>
    </div>

    <!-- Render all features -->
    <PricingTableRow
      v-for="feature in features"
      :key="feature.title"
      :feature="feature"
    />
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
