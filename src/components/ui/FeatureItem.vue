<template>
  <div class="flex flex-row items-center mt-12 motion-opacity-in-0 motion-translate-y-in-100 motion-duration-[1s] motion-ease-spring-smooth motion-delay-[700ms]">
    <div class="text-3xl px-4 py-3">{{ icon }}</div>
    <div class="font-semibold text-base text-left ms-6">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  icon: string;
  text: string;
}>();
</script>

<style scoped>
/* Add any additional styles if needed */
</style>