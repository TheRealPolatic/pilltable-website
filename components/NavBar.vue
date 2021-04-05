<template>
  <nav class="flex items-center justify-between flex-wrap p-6">
    <div class="flex items-center flex-no-shrink mr-6">
      <a href="#">
        <h3 class="mt-0">Pilltable</h3>
      </a>
    </div>
    <div class="block sm:hidden">
      <button
        class="flex items-center px-3 py-2 hover:text-white text-white"
        @click="toggle"
      >
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
      :class="open ? 'block' : 'hidden'"
      class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
    >
      <div class="text-sm sm:flex-grow md:flex md:items-center justify-center">
        <p>
          <a
            href="#"
            class="no-underline block mt-6 sm:inline-block sm:mt-0 hover:text-white mr-16"
          >
            Home
          </a>
        </p>
        <p>
          <a
            href="#"
            class="no-underline block mt-6 sm:inline-block sm:mt-0 hover:text-white mr-16"
          >
            Features
          </a>
        </p>
        <p>
          <a
            href="#"
            class="no-underline block mt-6 sm:inline-block sm:mt-0 hover:text-white"
          >
            Pricing
          </a>
        </p>
      </div>
      <div>
        <a
          href="#"
          class="mt-4 sm:mt-0 whitespace-nowrap inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Try for Free
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
  },
}
</script>
