<template>
  <div class="bg-primary mt-4 py-6 px-6 rounded-md">
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
        <p class="p-bold">
          {{ faq.question }}
        </p>
        <span class="ml-6 h-7 flex items-center">
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
    <p :class="isOpen ? 'hidden' : 'p-small'">
      {{ faq.answer }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    faq: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data: () => ({
    isOpen: true,
  }),
}
</script>
