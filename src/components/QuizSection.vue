<script setup lang="ts">
import ActionButton from "./ui/ActionButton.vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="p-6 mx-12 mt-24 text-center bg-white rounded-3xl border border-orange-400 shadow-md">
    <div
      class="flex relative justify-start px-9 py-3 -mt-12 max-w-2xl bg-white rounded-2xl border border-orange-400 shadow-xl shadow-black-600">
      <h2 class="z-20 text-3xl font-bold text-gray-900 md:text-4xl">{{ t('quizSection.title') }}</h2>
    </div>
    <div class="flex flex-col justify-center items-center mt-6 md:flex-row md:gap-8">
      <div class="flex w-4/5">
        <p class="text-base font-semibold text-gray-700 no-select md:text-left md:ms-6">
          {{ t('quizSection.description') }}
        </p>
      </div>
      <div class="flex flex-row justify-center mt-6 w-full md:mt-0 md:w-1/3">
        <a class="flex justify-center w-full px-auto"
          href="https://docs.google.com/forms/d/e/1FAIpQLSe2sNgVieErAnJrV-sVBkSCQosiq7cqcAohAfpf_OGYdTxX6A/viewform?usp=header">
          <ActionButton :text="t('quizSection.buttonText')"
            buttonClass="bg-orange-400 text-sm sm:text-base text-white font-semibold w-1/2 md:w-auto" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>