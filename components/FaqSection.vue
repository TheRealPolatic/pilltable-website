<template>
  <div class="mt-12 font-rubik">
    <h2 class="text-sm text-highlight tracking-widest uppercase">Questions</h2>
    <h1 class="text-40xl font-medium text-white">What the FAQ!? 🤔</h1>

    <div class="bg-primary my-6 py-6 px-6">
      <div class="text-lg">
        <!-- Expand/collapse question button -->
        <button
          type="button"
          class="text-left w-full flex justify-between items-start"
          aria-controls="faq-0"
          aria-expanded="false"
        >
          <span class="font-medium text-white mb-4">
            What will happen when there is a data leak?
          </span>
          <span class="ml-6 h-7 flex items-center">
            <!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
            <svg
              class="rotate-0 h-6 w-6 transform"
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
      <p class="text-base text-white font-thin w-11/12">
        Yes! All the data is encrypted with military grade 🔐 ️encryption. Since
        we don’t collect any personally identifiable information, you are at no
        risk.
      </p>
    </div>
  </div>
</template>
