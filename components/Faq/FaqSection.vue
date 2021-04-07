<template>
  <div>
    <div class="mb-64">
      <div class="tagline">Questions</div>
      <h2>What the FAQ!? 🤔</h2>
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
          question: 'Which information do you store? ',
          answer:
            'Yes! All the data is encrypted with military grade  🔐 ️encryption. Since we don’t collect any personally identifiable information, you are at no risk.',
        },
        {
          question: 'Is my data safe? ',
          answer:
            'Yes! All the data is encrypted with military grade  🔐 ️encryption. Since we don’t collect any personally identifiable information, you are at no risk.',
        },
        {
          question: 'Which information do you store? ',
          answer:
            'Yes! All the data is encrypted with military grade  🔐 ️encryption. Since we don’t collect any personally identifiable information, you are at no risk.',
        },
        {
          question: 'Is my data safe? ',
          answer:
            'Yes! All the data is encrypted with military grade  🔐 ️encryption. Since we don’t collect any personally identifiable information, you are at no risk.',
        },
      ],
    }
  },
}
</script>
