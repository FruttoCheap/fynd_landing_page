<script setup lang="ts">
import ActionButton from "./ui/ActionButton.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="flex flex-col space-y-6 px-12 mt-6 md:mt-12 w-full">
    <h1 class="z-20 font-bold text-gray-900">{{ t("quizSection.title") }}</h1>
    <p class="text-base font-semibold text-gray-700 no-select">
      {{ t("quizSection.description") }}
    </p>
    <a
      class="flex justify-center w-full px-auto"
      href="https://docs.google.com/forms/d/e/1FAIpQLSe2sNgVieErAnJrV-sVBkSCQosiq7cqcAohAfpf_OGYdTxX6A/viewform?usp=header"
    >
      <ActionButton
        :text="t('quizSection.buttonText')"
        buttonClass="bg-orange-400 text-sm sm:text-base text-white font-semibold"
      />
    </a>
  </div>
</template>

<style scoped></style>
