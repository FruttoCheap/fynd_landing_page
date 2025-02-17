<template>
  <div class="min-h-screen bg-white text-gray-900 p-8">
    <!-- FAQ Header -->
    <section class="text-center max-w-3xl mx-auto mb-16">
      <h1 class="text-5xl font-extrabold">{{ t('faq.title') }}</h1>
      <p class="text-lg text-gray-600 mt-4">
        {{ t('faq.subtitle') }}
      </p>
    </section>

    <!-- FAQ List -->
    <section class="max-w-4xl mx-auto">
      <div v-for="(faq, index) in faqs" :key="index">
        <button @click="toggleFAQ(index)" class="w-full text-left flex justify-between items-center focus:outline-none"
          :class="['w-full text-left flex justify-between items-center focus:outline-none', index % 2 === 0 ? 'bg-orange-400' : 'bg-orange-500']"
          style="margin-bottom: 14px;">
          <h3 class="text-lg font-semibold">{{ faq.question }}</h3>
          <span class="text-xl">{{ faq.open ? '−' : '+' }}</span>
        </button>
        <p v-if="faq.open" class="mt-2 text-gray-700" style="margin-bottom: 14px;">{{ faq.answer }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const faqs = ref([]);

const updateFaqs = () => {
  faqs.value = [
    { question: t('faq.questions.q1.question'), answer: t('faq.questions.q1.answer'), open: false },
    { question: t('faq.questions.q2.question'), answer: t('faq.questions.q2.answer'), open: false },
    { question: t('faq.questions.q3.question'), answer: t('faq.questions.q3.answer'), open: false },
    { question: t('faq.questions.q4.question'), answer: t('faq.questions.q4.answer'), open: false },
    { question: t('faq.questions.q5.question'), answer: t('faq.questions.q5.answer'), open: false },
    { question: t('faq.questions.q6.question'), answer: t('faq.questions.q6.answer'), open: false },
    { question: t('faq.questions.q7.question'), answer: t('faq.questions.q7.answer'), open: false },
    { question: t('faq.questions.q8.question'), answer: t('faq.questions.q8.answer'), open: false },
    { question: t('faq.questions.q9.question'), answer: t('faq.questions.q9.answer'), open: false },
    { question: t('faq.questions.q10.question'), answer: t('faq.questions.q10.answer'), open: false },
    { question: t('faq.questions.q11.question'), answer: t('faq.questions.q11.answer'), open: false },
    { question: t('faq.questions.q12.question'), answer: t('faq.questions.q12.answer'), open: false }
  ];
};

watch(locale, updateFaqs, { immediate: true });

const toggleFAQ = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>

<style scoped>
h1,
h3 {
  font-family: 'Inter', sans-serif;
}
</style>
