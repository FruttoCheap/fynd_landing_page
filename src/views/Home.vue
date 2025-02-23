<template>
  <div class="home-container flex flex-col relative justify-start align-start">
    <Hero :onScrollToLastSection="scrollToLastSection" />
    <Features />
    <Iphone />
    <Cards />
    <QuizSection />
    <div ref="email">
      <Email />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Hero from '../components/Hero.vue';
import Features from "../components/Features.vue";
import Cards from "../components/Cards.vue";
import QuizSection from "../components/QuizSection.vue";
import Email from "../components/Email.vue";
import Iphone from '../components/Iphone.vue';

const email = ref<HTMLElement | null>(null);

function scrollToLastSection() {
  email.value?.scrollIntoView({ behavior: 'smooth' });
}
</script>

<style scoped>
.home-container {
  overflow: hidden;
  scroll-behavior: smooth;
}
</style>