<template>
  <div class="md:mt-72 mt-36 lg:mb-44 md:mb-24 mb-24">
    <div>
      <div class="tagline">Testimonials</div>
      <h2 class="md:w-3/5 w-full leading-tight">This is what our users say about Pilltable🤔</h2>
    </div>

    <div class="xl:h-screen w-full flex md:flex-row flex-col">
      <div class="md:w-1/2 w-full flex justify-center">
        <div class="bg-primary xl:w-9/12 lg:w-10/12 md:w-10/12 md:h-96 w-full rounded-md xl:my-44 md:my-32 my-7">
          <img class="absolute transform translate-x-5 translate-y-6" :src="require(`~/assets/images/quote.svg`)" />
          <div class="flex flex-col">
            <p class="md:px-10 px-5 mt-12 lg:text-xl text-base">
              Great app, works really well for harm reduction and responsible usage! I like the attractive aesthetic and
              the ease of use of the UI. It has great functionality and the "I'm having a bad time" button is a great
              feature (luckily I have never had to use it).
            </p>
            <div class="flex flex-row">
              <img class="h-32 w-32 md:-ml-3 -ml-5" :src="require(`~/assets/memoji/avatar1.png`)" />
              <div class="text-lg font-medium text-white mt-10 -ml-6">BoneaMarrowT</div>
            </div>
          </div>
        </div>
      </div>
      <div class="md:w-1/2 w-full flex flex-col">
        <div
          class="bg-primary xl:w-10/12 lg:w-11/12 md:w-11/12 md:h-72 h-full w-full rounded-md xl:my-9 lg:my-3 md:my-0 my-7"
        >
          <img class="absolute transform translate-x-5 translate-y-6" :src="require(`~/assets/images/quote.svg`)" />
          <div class="flex flex-col">
            <p class="md:px-10 px-5 mt-8 mb-4 lg:text-xl text-base">
              The notepad experience is really unfriendly if you're tracking for multiple people. Your app seems like a
              great solution to the problem and a good way to keep an eye out for your mates.
            </p>
            <div class="flex flex-row md:ml-6 mb-4">
              <img class="h-16 w-16" :src="require(`~/assets/memoji/avatar2.png`)" />
              <div class="text-lg font-medium text-white mt-5">blu-sparro</div>
            </div>
          </div>
        </div>
        <div class="bg-primary xl:w-9/12 lg:w-10/12 md:w-11/12 md:h-72 h-full w-full rounded-md md:my-9 my-7">
          <img class="absolute transform translate-x-5 translate-y-6" :src="require(`~/assets/images/quote.svg`)" />
          <div class="flex flex-col">
            <p class="md:px-10 px-5 mt-12 mb-4 lg:text-xl text-base">
              I was super stoked for this! While I luckily distanced myself from being a festival dad, I do tend to
              still be the ''tracker guy'' for my mates.
            </p>
            <div class="flex flex-row">
              <img class="h-16 w-16 md:ml-6 mb-2" :src="require(`~/assets/memoji/avatar3.png`)" />
              <div class="text-lg font-medium text-white mt-5">dropped_my_banana</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
