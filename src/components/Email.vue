<script setup lang="ts">
import NewsletterField from "./ui/NewsletterField.vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="bg-orange-400 p-6 rounded-3xl shadow-md text-center mx-12 my-24">
    <div
      class="relative flex justify-center md:justify-start bg-white border border-orange-400 py-3 px-9 rounded-2xl shadow-xl shadow-black-600 -mt-12 max-w-xl">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 z-20">{{ t('email.title') }}</h2>
    </div>
    <div
      class="flex flex-col md:flex-row md:gap-8 justify-start items-start md:items-center align-bottom mt-9 md:mt-3 px-1 md:px-6">
      <div class="flex md:w-1/2">
        <p class="no-select text-white text-base font-semibold md:text-left">
          {{ t('email.description') }}
        </p>
      </div>
      <div class="justify-center mt-6 md:mt-0 w-full md:w-1/2">
        <NewsletterField />
      </div>
    </div>
  </div>
</template>

<style scoped></style>