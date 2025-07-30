<script setup lang="ts">
import NewsletterField from "./ui/NewsletterField.vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="flex flex-col space-y-6 px-12 mt-6 md:mt-12 w-full mb-48">
    <h1 class="z-20 font-bold text-gray-900">{{ t("email.title") }}</h1>
    <p class="text-base font-semibold text-gray-700 no-select">
      {{ t('email.description') }}
    </p>
    <div class="flex flex-col md:flex-row gap-8 w-full justify-center items-center">
      <NewsletterField />
    </div>
  </div>
  
</template>

<style scoped></style>