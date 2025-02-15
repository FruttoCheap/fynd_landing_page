<script setup lang="ts">

import ActionButton from "./ui/ActionButton.vue";
</script>

<template>
  <div class="bg-white border border-orange-400 p-6 rounded-3xl shadow-md text-center mx-12 mt-24">
    <div
      class="relative flex justify-start bg-white border border-orange-400 py-3 px-9 rounded-2xl shadow-xl shadow-black-600 -mt-12 max-w-2xl">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 z-20">Aiutaci a rendere FYND realtà</h2>
    </div>
    <div class="flex flex-col md:flex-row md:gap-8 justify-center items-center mt-6">
      <div class="flex w-4/5">
        <p class="no-select text-gray-700 text-base font-semibold md:text-left">
          Sono 10 domande rapidissime dove ti chiederemo quanto è interessante l’idea e su quali aspetti concentrarci.
        </p>
      </div>
      <div class="flex flex-row justify-center mt-6 md:mt-0 w-full md:w-1/3">
        <router-link to="/quiz" class="flex justify-center w-full px-auto">
          <ActionButton text="Vai al Quiz"
            buttonClass="bg-orange-400 text-sm sm:text-base text-white font-semibold w-1/2 md:w-auto" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>