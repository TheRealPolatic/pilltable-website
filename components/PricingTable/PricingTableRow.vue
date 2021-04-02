<template>
  <div>
    <div
      class="grid grid-cols-12 gap-2 p-6 rounded-md"
      :class="feature.transparent ? '' : 'bg-primary'"
    >
      <div class="col-span-6">
        <p class="p-bold">{{ feature.title }}</p>
      </div>
      <div class="col-span-3 mx-auto">
        <img
          v-show="feature.isFree"
          src="~/assets/icons/checkmark.png"
          alt=""
          srcset=""
        />
      </div>
      <div class="col-span-3 mx-auto">
        <img src="~/assets/icons/checkmark.png" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    feature: Object,
  },
}
</script>
