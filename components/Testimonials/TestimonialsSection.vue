<template>
  <div class="mt-80">
    <div>
      <div class="tagline">Testimonials</div>
      <h2 class="md:w-3/5 w-full leading-tight">This is what our users say about Pilltable🤔</h2>
    </div>

    <div class="md:h-screen h-auto w-full relative">
      <div
        class="md:absolute md:top-0 md:transform md:translate-x-24 md:translate-y-24 bg-primary md:w-96 md:h-80 h-96 w-full rounded-md"
      >
        <div class="">
          <img class="absolute transform translate-x-4 -translate-y-4" :src="require(`~/assets/images/quote.svg`)" />
          <p class="text-white md:m-7 md:p-0 p-7 md:text-xl text-base">
            Great app, works really well for harm reduction and responsible usage! I like the attractive aesthetic and
            the ease of use of the UI. It has great functionality and the "I'm having a bad time" button is a great
            feature (luckily I have never had to use it).
          </p>
          <img class="h-28 transform -translate-x-4 -translate-y-8" :src="require(`~/assets/memoji/avatar1.png`)" />
          <div class="transform translate-x-20 -translate-y-28 text-lg font-medium text-white">BoneaMarrowT</div>
        </div>
      </div>

      <div
        class="md:absolute md:top-0 md:right-0 md:transform md:-translate-x-24 bg-primary md:w-5/12 md:h-64 h-auto w-full rounded-md md:my-0 my-7"
      >
        <div class="">
          <img class="absolute transform translate-x-4 translate-y-3" :src="require(`~/assets/images/quote.svg`)" />
          <p class="text-white p-7 md:text-xl text-base">
            The notepad experience is really unfriendly if you're tracking for multiple people. Your app seems like a
            great solution to the problem and a good way to keep an eye out for your mates.
          </p>
          <img class="h-14 transform translate-x-4 translate-y-2" :src="require(`~/assets/memoji/avatar2.png`)" />
          <div class="transform translate-x-20 -translate-y-9 text-lg font-medium text-white">blu-sparro</div>
        </div>
      </div>

      <div
        class="md:absolute md:bottom-0 md:right-0 md:transform md:-translate-x-48 md:-translate-y-80 bg-primary md:w-4/12 md:h-60 h-auto w-full rounded-md"
      >
        <div class="">
          <img class="absolute transform translate-x-4 -translate-y-4" :src="require(`~/assets/images/quote.svg`)" />
          <p class="text-white md:m-7 md:p-0 p-7 md:text-xl text-base">
            I was super stoked for this! While I luckily distanced myself from being a festival dad, I do tend to still
            be the ''tracker guy'' for my mates.
          </p>
          <img class="h-14 transform translate-x-4 -translate-y-2" :src="require(`~/assets/memoji/avatar3.png`)" />
          <div class="transform translate-x-20 -translate-y-12 text-lg font-medium text-white">dropped_my_banana</div>
        </div>
      </div>
    </div>
  </div>
</template>
