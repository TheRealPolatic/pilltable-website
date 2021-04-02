<template>
  <div>
    <div class="mt-12 font-rubik">
      <h2 class="text-sm text-highlight tracking-widestPilltable uppercase">
        Questions
      </h2>
      <h1
        class="md:text-40xl text-4xl mt-3 mb-12 font-medium text-white tracking-wide"
      >
        What the FAQ!? 🤔
      </h1>
      <FaqQuestion v-for="faq in faqs" :key="faq.question" :faq="faq" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: 'What will happen when there is a data leak? ',
          answer:
            'Yes! All the data is encrypted with military grade  🔐 ️encryption. Since we don’t collect any personally identifiable information, you are at no risk.',
        },
        {
          question: 'What will happen when there is a data leak? ',
          answer:
            'Yes! All the data is encrypted with military grade  🔐 ️encryption. Since we don’t collect any personally identifiable information, you are at no risk.',
        },
        {
          question: 'What will happen when there is a data leak? ',
          answer:
            'Yes! All the data is encrypted with military grade  🔐 ️encryption. Since we don’t collect any personally identifiable information, you are at no risk.',
        },
      ],
    }
  },
}
</script>
