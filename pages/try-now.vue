<template>
  <div class="text-center min-h-screen">
    <div class="pt-32 z-10 relative">
      <img class="absolute overflow-visible w-screen" src="~/assets/images/bg-circle.svg" />
      <div class="tagline text-center">EXPERIENCE THE APP</div>
      <h2 class="text-center">
        Pilltable is a web based application.<br />
        That means no download or install is required.
      </h2>

      <h2 class="text-center text-dark-grey">
        Although it is possible to add it to your home screen for insanely quick access 🚀.
      </h2>

      <Button class="mt-32" text="Start tracking" link="/try-now" secondary="true" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.circle-background {
  background-image: url('~/assets/images/bg-circle.svg');
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}
</style>
