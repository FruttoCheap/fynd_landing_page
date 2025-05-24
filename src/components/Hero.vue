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
  <div class="flex relative flex-col md:flex-row">
    <div class="flex z-20 flex-col justify-center items-center h-full md:justify-start md:items-start">
      <div
        class="flex flex-col p-6 text-4xl font-bold text-center no-select sm:text-5xl md:text-7xl md:text-left sm:p-12">
        <div>
          {{ t('hero.introLine1') }} <br>
          <span class="text-orange-400">{{ t('hero.destination') }}</span> {{ t('hero.introLine2') }}<br>
          {{ t('hero.introLine3') }} <br>
        </div>
        <div class="mt-2">{{ t('hero.startExperience') }} <br></div>
        <span><span class="text-orange-400">{{ t('hero.experience') }}</span></span>
      </div>
      <div
        class="flex md:hidden max-w-sm motion-opacity-in-0 motion-translate-y-in-50 motion-duration-[1s] motion-ease-spring-smooth">
        <img src="../assets/imgs/travel_hero.png" alt="Hero Image of a travelling man"
          class="object-cover transition duration-300 ease-in-out hover:drop-shadow-2xl">
      </div>
      <div
        class="flex flex-col w-full justify-center md:justify-start md:flex-row gap-8 px-[15%] sm:px-36 md:px-12 mb-12 -mt-10 md:mt-6 motion-opacity-in-0 motion-translate-y-in-100 motion-duration-[1s] motion-ease-spring-smooth">
        <ActionButton :text="t('heroButton.becomeFynder')"
          buttonClass="bg-orange-400 text-sm sm:text-base text-white font-semibold"
          @click="props.onScrollToLastSection" />
        <!-- <router-link to="/quiz" class="hidden justify-center md:flex">
          <ActionButton :text="t('heroButton.tellUs')"
            buttonClass="border-2 border-orange-400 text-sm sm:text-base text-black font-semibold" />
        </router-link> -->
        <a class="hidden justify-center md:flex"
          href="https://docs.google.com/forms/d/e/1FAIpQLSe2sNgVieErAnJrV-sVBkSCQosiq7cqcAohAfpf_OGYdTxX6A/viewform?usp=header">
          <ActionButton :text="t('heroButton.tellUs')"
            buttonClass="border-2 border-orange-400 text-sm sm:text-base text-black font-semibold" />
        </a>
      </div>
    </div>
    <div
      class="absolute w-1/2 max-w-[45vw] right-0 mt-12 hidden lg:flex motion-opacity-in-0 motion-translate-y-in-50 motion-duration-[1s] motion-ease-spring-smooth">
      <img src="../assets/imgs/travel_hero.png" alt="Hero Image of a travelling man"
        class="object-cover transition duration-300 ease-in-out hover:drop-shadow-2xl">
    </div>
  </div>
</template>

<style scoped></style>