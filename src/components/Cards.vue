<template>
  <div ref="container" class="flex flex-row flex-wrap justify-between -mt-20 sm:-mt-24 md:-mt-32 lg:-mt-40 xl:-mt-40"
    :style="{ marginTop: isMobile ? '-18rem' : NaN }">
    <Card backgroundClass="background-image-div1" :mainText="t('cards.card1.mainText')"
      :buttonText="t('cards.card1.buttonText')" />
    <Card backgroundClass="background-image-div2" :mainText="t('cards.card2.mainText')" />
    <Card backgroundClass="background-image-div3" :mainText="t('cards.card3.mainText')" />
  </div>
</template>

<script setup lang="ts">
import Card from './ui/Card.vue';
import { useI18n } from 'vue-i18n';
import { ref } from 'vue'

const isMobile = ref(false)

isMobile.value = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

const { t } = useI18n();
</script>

<style scoped></style>