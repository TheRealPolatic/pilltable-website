<template>
  <div
    class="w-full bg-background h-full antialiased pattern-background"
    :class="{ 'circle-background': isTryNowPage }"
  >
    <NavBar />
    <div
      class="container mx-auto 2xl:px-40 xl:px-28 lg:px-16 md:px-12 px-6 bg-circle bg-contain bg-no-repeat bg-center"
    >
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  computed: {
    isTryNowPage() {
      return this.$route.path === '/try-now'
    },
  },
}
</script>

<style scoped>
.pattern-background {
  background-image: url('~/assets/images/bg-circle-right.svg'), url('~/assets/images/bg-circle-left.svg'),
    url('~/assets/images/pilltable-pattern.svg'), url('~/assets/images/bg-circle-left.svg');
  background-position: 115% 18%, 0% 30%, 98% 40%, 0% 52%;
  background-repeat: no-repeat;
  background-size: 35%, 25%, 20%, 25%;
}
.circle-background {
  background-image: url('~/assets/images/try-now-circle.svg');
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}
</style>
