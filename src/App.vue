<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import NavbarMobile from "./components/NavbarMobile.vue";
</script>

<template>
  <div class="hidden md:block">
    <Navbar />
  </div>
  <div class="md:hidden">
    <NavbarMobile />
  </div>
  <router-view class="max-w-[100vw]"></router-view>
</template>

<style scoped></style>
