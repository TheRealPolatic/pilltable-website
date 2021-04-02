<template>
  <div class="mt-12 font-rubik">
    <h2 class="text-sm text-highlight tracking-widestPilltable uppercase">
      Questions
    </h2>
    <h1 class="md:text-40xl text-4xl mt-3 font-medium text-white tracking-wide">
      What the FAQ!? 🤔
    </h1>

    <div class="bg-primary mt-10 py-6 px-6 rounded-md">
      <div class="text-lg">
        <!-- Expand/collapse question button -->
        <button
          type="button"
          class="text-left w-full flex justify-between items-start focus:outline-none"
          aria-controls="faq-0"
          aria-expanded="false"
          :aria-checked="isOpen"
          @click="isOpen = !isOpen"
        >
          <span class="font-medium text-white">
            What will happen when there is a data leak?
          </span>
          <span class="ml-6 h-7 flex items-center">
            <!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
            <svg
              :class="
                isOpen
                  ? 'rotate-0 h-6 w-6 transform'
                  : 'rotate-180 h-6 w-6 transform'
              "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
      </div>
      <p
        :class="
          isOpen
            ? 'hidden text-base text-white font-thin w-11/12 mt-4'
            : 'text-base text-white font-thin w-11/12 mt-4'
        "
      >
        Yes! All the data is encrypted with military grade 🔐 ️encryption. Since
        we don’t collect any personally identifiable information, you are at no
        risk.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpen: true,
  }),
}
</script>
