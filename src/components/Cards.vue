<template>
  <div class="flex flex-row flex-wrap justify-between mt-6 md:mt-12">
    <Card backgroundClass="background-image-div1" :mainText="t('cards.card1.mainText')"
      :buttonText="t('cards.card1.buttonText')" />
    <Card backgroundClass="background-image-div2" :mainText="t('cards.card2.mainText')" />
    <Card backgroundClass="background-image-div3" :mainText="t('cards.card3.mainText')" />
  </div>
</template>

<script setup lang="ts">
import Card from './ui/Card.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped></style>