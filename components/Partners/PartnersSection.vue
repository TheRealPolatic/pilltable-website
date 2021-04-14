<template>
  <div class="my-24">
    <div class="tagline flex justify-center my-4">Our partners</div>
    <div class="flex sm:justify-center sm:flex-row flex-col my-10">
      <img class="h-10 mx-8 md:my-0 my-6" :src="require(`~/assets/partners/electric.svg`)" />
      <img class="h-8 mx-8 md:my-0 my-6" :src="require(`~/assets/partners/vice.svg`)" />
      <img class="h-8 mx-8 md:my-0 my-6" :src="require(`~/assets/partners/soenda.svg`)" />
      <img class="h-8 mx-8 md:my-0 my-6" :src="require(`~/assets/partners/solar.svg`)" />
    </div>
    <div class="flex sm:justify-center sm:flex-row flex-col md:mt-10 -mt-10">
      <img class="h-10 mx-8 md:my-0 my-6" :src="require(`~/assets/partners/pinkpop.svg`)" />
      <img class="h-8 mx-8 md:my-0 my-6" :src="require(`~/assets/partners/ggd.svg`)" />
      <img class="h-14 mx-8 md:-pt-4 md:-mt-3 my-6" :src="require(`~/assets/partners/lowlands.svg`)" />
    </div>
  </div>
</template>
