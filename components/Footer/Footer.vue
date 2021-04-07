<template>
  <div class="bg-opacity-elements">
    <footer class="container mx-auto 2xl:px-40 xl:px-32 lg:px-16 md:px-12 px-6">
      <div class="mx-auto py-8 md:flex md:items-center md:justify-between">
        <div class="md:flex md:justify-center md:space-x-10">
          <a href="#" class="flex flex-row">
            <img class="h-10 md:ml-0 -ml-2.5" :src="require(`~/assets/emojis/mail.png`)" />
            <p href="#" class="text-center hover:underline mt-2 text-base text-white font-medium">
              contact@pilltable.io
            </p>
          </a>

          <a href="#" class="flex flex-row">
            <img class="h-10 -mt-0.5 md:ml-0 -ml-3" :src="require(`~/assets/emojis/rainbow.png`)" />
            <p href="#" class="text-center hover:underline mt-2 text-base text-white font-medium">Instagram</p>
          </a>

          <a href="#" class="flex flex-row">
            <img class="h-10 -mt-0.5 md:ml-0 -ml-3" :src="require(`~/assets/emojis/book.png`)" />
            <p href="#" class="text-center hover:underline mt-2 text-base text-white font-medium">Facebook</p>
          </a>
        </div>
        <div class="flex flex-col md:flex-row md:justify-center mt-4 md:mt-0 md:space-x-10">
          <a href="#" class="md:text-center hover:underline text-base text-white font-medium">© Pilltable inc.</a>
          <a href="#" class="md:text-center hover:underline text-base text-white font-medium md:mt-0 mt-2"
            >Terms of Service</a
          >
          <a href="#" class="md:text-center hover:underline text-base text-white font-medium md:mt-0 mt-2"
            >Privacy Policy</a
          >
        </div>
      </div>
    </footer>
  </div>
</template>
