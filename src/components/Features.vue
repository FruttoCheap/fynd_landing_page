<script setup lang="ts">
import FeatureItem from "./ui/FeatureItem.vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="flex flex-row px-12 mt-6 md:mt-12">
    <div class="flex flex-col">
      <div
        class="font-bold text-2xl sm:text-4xl md:text-6xl md:text-left motion-opacity-in-0 motion-translate-y-in-100 motion-duration-[1s] motion-ease-spring-smooth motion-delay-300">
        {{ t('features.title') }}
      </div>
      <div class="flex flex-row gap-8">
        <div class="flex flex-2 flex-col">
          <FeatureItem icon="⚡️" :text="t('features.item1')" />
          <FeatureItem icon="🔎" :text="t('features.item2')" />
          <FeatureItem icon="🤖" :text="t('features.item3')" />
        </div>
        <div
          class="relative flex flex-1 motion-translate-y-in-100 motion-duration-[1s] motion-ease-spring-smooth motion-delay-[700ms]">
          <div class="hidden lg:flex lg:p-6">
            <img src="../assets/imgs/features.png" alt="Trip to Indonesia" class="object-contain">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>