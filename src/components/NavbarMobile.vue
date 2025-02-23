<template>
  <nav class="flex flex-col">
    <div class="navbar">
      <div class="navbar-left">
        <router-link class="flex justify-center items-center page-link" to="/"
          @click="isNavbarExpanded ? toggleNavbar() : null">
          <Logo :color="isNavbarExpanded" />
        </router-link>
      </div>
      <div class="navbar-right text-base">
        <i :class="['fas', 'fa-navicon', 'cursor-pointr', 'transition-all', 'duration-300', { 'text-white': isNavbarExpanded }]"
          @click="toggleNavbar"></i>
      </div>
    </div>
    <div :class="['navbar-items', { 'expanded': isNavbarExpanded }]">
      <router-link class="page-link" to="/" :hidden="!isNavbarExpanded" @click="toggleNavbar">{{ t('navbar.home')
        }}</router-link>
      <router-link class="page-link" to="/team" :hidden="!isNavbarExpanded" @click="toggleNavbar">{{ t('navbar.team')
        }}</router-link>
      <router-link class="page-link" to="/faq" :hidden="!isNavbarExpanded" @click="toggleNavbar">{{ t('navbar.faq')
        }}</router-link>
      <router-link class="page-link" to="/quiz" :hidden="!isNavbarExpanded" @click="toggleNavbar">{{ t('navbar.quiz')
        }}</router-link>
      <select v-model="locale" class="language-selector">
        <option value="en">{{ t('navbar.language.en') }}</option>
        <option value="it">{{ t('navbar.language.it') }}</option>
      </select>
    </div>
  </nav>
</template>

<script setup lang="ts">
import Logo from './ui/Logo.vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n();

const isNavbarExpanded = ref(false);

function toggleNavbar() {
  isNavbarExpanded.value = !isNavbarExpanded.value;
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  padding: 1rem 3rem;
  color: black;
}

.navbar-left,
.navbar-center,
.navbar-right {
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  flex-basis: 1;
  z-index: 300;
}

.brand-name {
  margin-left: 10px;
  font-weight: bold;
}

.dropdown {
  margin-top: 20vh;
  position: relative;
  display: inline-block;
  background-color: transparent;
  border-radius: 4px;
  border: white 2px solid;
}

.dropdown-content {
  display: none;
  position: absolute;
  margin-top: 10%;
  background-color: white;
  /* Set background to white */
  min-width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px;
}

.dropdown-content a {
  color: black;
  padding: 12px 8px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.language-selector {
  margin-right: 20px;
  margin-top: 2rem;
  padding: 10px;
  /* Increased padding */
  background-color: transparent;
  /* Set background to white */
  border-radius: 4px;
  /* Optional: Add border radius */
  color: white;
}

.page-link {
  color: white;
  font-size: 24px;
  font-weight: bold;
  z-index: 200;
  transition: color 0.3s ease;
}

.page-link:disabled {
  pointer-events: none;
}

.page-link:hover {
  color: #ff8000;
}

.navbar-items {
  position: fixed;
  top: 0;
  z-index: -20;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  padding-top: 50%;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  backdrop-filter: blur(0px) brightness(1);
  opacity: 0;
  transition: opacity 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out;
}

.navbar-items.expanded {
  backdrop-filter: blur(10px) brightness(0.6);
  opacity: 1;
  z-index: 200;
}

.cursor-pointr {
  cursor: pointer;
  z-index: 300;
}
</style>