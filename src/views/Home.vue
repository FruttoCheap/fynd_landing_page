<template>
  <div class="flex flex-col relative justify-start align-start">
    <Hero :onScrollToLastSection="scrollToLastSection" />
    <Features />
    <Cards />
    <QuizSection />
    <section ref="email">
      <Email />
    </section>


  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Hero from '../components/Hero.vue';
import Features from "../components/Features.vue";
import Cards from "../components/Cards.vue";
import QuizSection from "../components/QuizSection.vue";
import Email from "../components/Email.vue";

const email = ref(null);

function scrollToLastSection() {
  email.value?.scrollIntoView({ behavior: 'smooth' });
}
</script>

<style scoped>
</style>