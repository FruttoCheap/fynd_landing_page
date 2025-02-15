<template>
  <div @click="handleClick" :class="buttonClass" class="no-select flex flex-row items-center align-middle justify-center rounded-xl hover:shadow-lg transition-shadow duration-300 ease-in-out py-3 px-3 md:px-9">
    <div>{{ text }}</div>
    <span v-if="highlightText" class="text-base md:text-xl font-bold ms-1">{{ highlightText }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{
  text: string;
  highlightText?: string;
  buttonClass: string;
  url?: string;
}>();

const emit = defineEmits(['click']);
const router = useRouter();

function handleClick() {
  if (props.url) {
    if (props.url.startsWith('http')) {
      window.location.href = props.url;
    } else {
      router.push(props.url);
    }
  } else {
    emit('click');
  }
}
</script>

<style scoped>
/* Add any additional styles if needed */
</style>