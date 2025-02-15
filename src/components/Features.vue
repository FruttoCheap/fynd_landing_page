<script setup lang="ts">

import FeatureItem from "./ui/FeatureItem.vue";
</script>

<template>
  <div class="flex flex-row px-12">
    <div class="flex flex-col">
      <div class="font-bold text-2xl sm:text-4xl md:text-6xl md:text-left motion-opacity-in-0 motion-translate-y-in-100 motion-duration-[1s] motion-ease-spring-smooth motion-delay-300">
        Dimentica le ore perse per organizzare un viaggio
      </div>
      <div class="flex flex-row gap-8">
        <div class="flex flex-2 flex-col">
          <FeatureItem icon="⚡️" text="Smettila di consumare energie per organizzare le tue vacanze" />
          <FeatureItem icon="🔎" text="Scopri, prenota e vivi viaggi ed esperienze autentiche" />
          <FeatureItem icon="🤖" text="Itinerari ed esperienze creati su misura per te, grazie alla potenza dell’AI." />
        </div>
        <div class="relative hidden lg:block flex-1 motion-translate-y-in-100 motion-duration-[1s] motion-ease-spring-smooth motion-delay-[700ms]">
          <div class="absolute -top-24 rounded-3xl bg-white shadow-2xl lg:p-6 m-24">
            <img src="../assets/imgs/trip_1.png" alt="Trip to Indonesia" class="object-cover">
          </div>
          <div class="absolute top-64 left-72 rounded-2xl bg-white shadow-2xl p-3 hidden xl:flex xl:m-6">
            <img src="../assets/imgs/trip_2.png" alt="Trip to Indonesia" class="object-cover z-20">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>