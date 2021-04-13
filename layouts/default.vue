<template>
  <div class="w-full bg-background h-full antialiased pattern-background">
    <NavBar />
    <div class="container mx-auto 2xl:px-40 xl:px-32 lg:px-16 md:px-12 px-6">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.pattern-background {
  background-image: url('~/assets/images/bg-circle-right.svg'), url('~/assets/images/bg-circle-left.svg'),
    url('~/assets/images/pilltable-pattern.svg'), url('~/assets/images/bg-circle-left.svg');
  background-position: 115% 18%, 0% 30%, 98% 40%, 0% 52%;
  background-repeat: no-repeat;
  background-size: 35%, 25%, 20%, 25%;
}
</style>
