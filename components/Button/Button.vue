<template>
  <div>
    <a :href="`${link}`">
      <button
        class="transform transition duration-300 ease-in-out font-rubik text-white text-l font-medium bg-gradient-to-tr from-button-gradient-1 to-button-gradient-2 hover:text-primary hover:from-white hover:to-white px-8 py-4 rounded-md shadow-none hover:shadow-2xl scale-100 hover:scale-110 active:scale-100 active:scale-100 border-transparent focus:outline-none"
      >
        {{ text }}
      </button></a
    >
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    link: String,
  },
}
</script>
