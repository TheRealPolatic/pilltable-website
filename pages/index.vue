<template>
  <div>
    <NavBar />
    <UspList />
    <FeatureSection />
    <PricingTableSection />
    <FaqSection />
    <div class="grid lg:grid-cols-3 gap-6 2xl:gap-y-12 md:grid-cols-2 sm:grid-cols-1">
      <FeatureTile v-for="feature in features" :key="feature.headline" :feature="feature" />
    </div>

    <CtaSection />
  </div>
</template>
