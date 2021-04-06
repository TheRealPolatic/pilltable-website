<template>
  <div>
    <a :href="`${link}`">
      <button
        class="transform transition duration-300 ease-in-out font-rubik text-white text-l font-medium px-8 h-14 rounded-md shadow-none hover:shadow-2xl scale-100 hover:scale-105 active:scale-100 active:scale-100 focus:outline-none"
        :class="
          secondary
            ? 'bg-gradient-to-tr from-button-gradient-1 to-button-gradient-2 hover:text-primary hover:from-white hover:to-white'
            : 'bg-transparent hover:text-primary hover:bg-white border-2 border-white'
        "
      >
        {{ text }}
      </button>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    text: String,
    // eslint-disable-next-line vue/require-default-prop
    link: String,
    secondary: Boolean,
  },
}
</script>
