<script setup lang="ts">
import { defineProps } from 'vue';
import { useI18n } from 'vue-i18n';
import ActionButton from "./ui/ActionButton.vue";

const props = defineProps<{
  onScrollToLastSection: () => void;
}>();

const { t } = useI18n();
</script>

<template>
  <div class="flex flex-col md:flex-row relative">
    <div class="flex flex-col bg-transparent h-full z-20">
      <div
        class="no-select flex flex-col font-bold text-4xl sm:text-5xl md:text-7xl text-center md:text-left p-6 sm:p-12">
        <div>
          {{ t('hero.introLine1') }} <br>
          <span class="text-orange-400">{{ t('hero.destination') }}</span> {{ t('hero.introLine2') }}<br>
          {{ t('hero.introLine3') }} <br>
        </div>
        <div class="mt-2">{{ t('hero.startExperience') }} <br></div>
        <span><span class="text-orange-400">{{ t('hero.experience') }}</span></span>
      </div>
      <div
        class="flex flex-col justify-center md:justify-start md:flex-row gap-8 px-[15%] sm:px-36 md:px-12 mb-12 mt-6 motion-opacity-in-0 motion-translate-y-in-100 motion-duration-[1s] motion-ease-spring-smooth">
        <ActionButton :text="t('heroButton.becomeFynder')"
          buttonClass="bg-orange-400 text-sm sm:text-base text-white font-semibold"
          @click="props.onScrollToLastSection" />
        <router-link to="/quiz" class="flex justify-center">
          <ActionButton :text="t('heroButton.tellUs')"
            buttonClass="border-2 border-orange-400 text-sm sm:text-base text-black font-semibold" />
        </router-link>
      </div>
    </div>
    <div
      class="flex-1 mt-12 hidden xl:flex motion-opacity-in-0 motion-translate-y-in-50 motion-duration-[1s] motion-ease-spring-smooth">
      <img src="../assets/imgs/travel_hero.png" alt="Hero Image of a travelling man"
        class="object-cover transition duration-300 ease-in-out hover:drop-shadow-2xl">
    </div>
  </div>
</template>

<style scoped></style>