<template>
  <div class="relative overflow-hidden h-96 flex justify-center items-center bg-primary w-full mb-32 rounded-lg">
    <svg
      class="absolute top-0 w-full"
      width="1111"
      height="397"
      viewBox="0 0 1111 367"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.6" filter="url(#filter0_f)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M569.976 145.416C631.531 160.68 675.121 188.842 719.288 214.365C760.156 237.982 807.392 262.977 814.902 286.955C822.168 310.154 773.865 318.726 757.646 336.833C738.618 358.074 765.198 396.694 711.923 401.915C659.284 407.073 586.869 376.611 523.492 359.781C468.808 345.258 409.98 333.15 368.56 310.73C327.623 288.571 311.087 263.422 302.858 240.355C295.165 218.787 310.11 202.28 323.763 185.145C339.704 165.137 343.522 139.741 388.854 132.427C437.281 124.612 506.442 129.661 569.976 145.416Z"
          fill="#4A57FC"
        />
      </g>
      <defs>
        <filter
          id="filter0_f"
          x="-219"
          y="-407"
          width="1554.23"
          height="1332.89"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
    <div class="absolute bg-opacity-elements rounded-full animation-space-float-2 left-0 -top-20 w-44 h-44"></div>
    <div class="absolute bg-opacity-elements rounded-full animation-space-float-3 left-20 -bottom-10 w-60 h-60"></div>
    <div class="absolute bg-opacity-elements rounded-full animation-space-float -top-10 -right-10 w-72 h-72"></div>

    <div class="flex flex-col items-center justify-center">
      <h2 class="md:w-2/3 w-4/5 text-center leading-tight z-10">Try Pilltable with your friends for free</h2>
      <Button text="Open Pilltable" secondary="true" link="/try-now" />
    </div>
  </div>
</template>

<style scoped>
.animation-space-float {
  animation: space-float 20s linear infinite;
}

.animation-space-float-2 {
  animation-delay: 2s;
  animation: space-float 20s linear infinite;
}

.animation-space-float-3 {
  animation-delay: 5s;
  animation: space-float 20s linear infinite;
}

@keyframes space-float {
  0% {
    transform: translate(0, 0);
  }

  25% {
    transform: translate(-12%, 12%);
  }

  50% {
    transform: translate(0, 23%);
  }

  75% {
    transform: translate(10%, -10%);
  }

  100% {
    transform: translate(0, 0);
  }
}
</style>
