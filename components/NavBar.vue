<template>
  <headroom speed="400" class="transition ease-in-out duration-300">
    <header
      class="flex items-center justify-between flex-wrap p-6 container mx-auto 2xl:px-40 xl:px-32 lg:px-16 md:px-12 px-6"
    >
      <div class="flex items-center flex-no-shrink mr-6">
        <a href="#">
          <h3 class="mt-0">Pilltable</h3>
        </a>
      </div>
      <div class="block sm:hidden">
        <button class="flex items-center px-3 py-2 hover:text-white text-white" @click="toggle">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
      <div
        :class="isOpen ? 'block' : 'hidden'"
        class="transition duration-500 ease-in-out sm:flex sm:items-center sm:w-auto sm:relative h-screen mt-32 sm:mt-0 sm:h-9 z-20 w-full flex-grow"
      >
        <div class="flex flex-col sm:flex-row justify-center items-center sm:justify-between sm:w-full">
          <div class="text-sm sm:flex-grow sm:flex sm:items-center justify-center">
            <p class="text-lg">
              <a
                href="/"
                class="no-underline block mt-9 sm:inline-block sm:mt-0 hover:text-white mr-0 sm:mr-4 md:mr-16 text-center"
              >
                Home
              </a>
            </p>
            <p class="text-lg">
              <a
                v-scroll-to="{
                  el: '#features',
                  duration: 1500,
                  lazy: false,
                  easing: 'ease-in-out',
                  offset: -50,
                  x: false,
                  y: true,
                }"
                href="#"
                class="no-underline block mt-9 sm:inline-block sm:mt-0 hover:text-white mr-0 sm:mr-4 md:mr-16 text-center"
              >
                Features
              </a>
            </p>
            <p class="text-lg">
              <a
                v-scroll-to="{
                  el: '#pricing',
                  duration: 1500,
                  lazy: false,
                  easing: 'ease-in-out',
                  offset: -50,
                }"
                href="#"
                class="no-underline block mt-9 sm:inline-block sm:mt-0 hover:text-white text-center"
              >
                Pricing
              </a>
            </p>
          </div>
          <div class="flex justify-center mt-9 sm:mt-0">
            <a href="/try-now">
              <button
                class="bg-gradient-to-tr from-button-gradient-1 to-button-gradient-2 hover:text-primary hover:from-white hover:to-white transform transition duration-300 ease-in-out font-rubik text-white text-l font-medium px-6 h-11 roundedsm shadow-none hover:shadow-2xl scale-100 hover:scale-105 active:scale-100 active:scale-100 focus:outline-none"
              >
                Try for free
              </button></a
            >
          </div>
        </div>
      </div>
    </header>
  </headroom>
</template>

<script>
import { headroom } from 'vue-headroom'

export default {
  components: {
    headroom,
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style>
.headroom--not-top.headroom--pinned {
  @apply shadow-xl transition ease-in-out duration-300 delay-500 bg-dark-elements;
}

.headroom--top {
  @apply shadow-none transition ease-in-out duration-500;
}
</style>
