<template>
  <div class="relative min-h-screen overflow-hidden">
    <img class="absolute overflow-visible w-screen md:mt-0 mt-12" src="~/assets/images/bg-circle.svg" />

    <div class="text-center md:pt-40 pt-20 pb-16 max-w-2xl m-auto">
      <div class="tagline">Ecstacy tracker</div>
      <h1 class="md:text-56xl text-5xl">The ecstasy tracking tool you’ll enjoy using</h1>
      <p class="max-w-xl m-auto mb-10">
        Anonymously create or join a group and keep track of everyne's ecstasy usage with ease.
      </p>
      <Button text="Start tracking" link="/try-now" />
    </div>
    <div class="md:w-full md:ml-0 w-16/12 -ml-16">
      <video class="md:ml-10 ml-1" autoplay muted loop>
        <source src="~/assets/videos/hero-video.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>
