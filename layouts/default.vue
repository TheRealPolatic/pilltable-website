<template>
  <div class="w-full bg-background h-full antialiased" :class="{ 'circle-background': isTryNowPage }">
    <NavBar />
    <div
      class="container mx-auto 2xl:px-72 xl:px-28 lg:px-16 md:px-12 px-6 bg-circle bg-contain bg-no-repeat bg-center">
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
.circle-background {
  background-image: url('~/assets/images/try-now-circle.svg');
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}
</style>
