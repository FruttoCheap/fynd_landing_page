<!-- filepath: /Users/Frutto/Dev/fynd/src/views/Home.vue -->
<template>
  <div class="text-4xl font-bold mt-12">
    Il Nostro Team
  </div>
  <div class="flex flex-col md:flex-row md:flex-wrap gap-8 justify-center my-12 px-16">
    <div class="flex flex-col items-center md:basis-1/3 transition-all duration-300 rounded-2xl border border-orange-400 p-12" v-for="item in items" :key="item.id">
      <!-- Your content here -->
      <img :src='item.pic' :alt="item.content" class="mb-8 h-[80px] w-[80px] object-cover">
      <span class="text-xl font-bold">{{ item.content }}</span>
      <span class="text-base mt-2">{{ item.description }}</span>
    </div>
  </div>
</template>

<script setup>
</script>