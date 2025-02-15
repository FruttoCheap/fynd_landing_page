<template>
  <nav class="flex flex-col">
    <div class="navbar">
      <div class="navbar-left">
        <router-link class="flex flex-row justify-center items-center page-link" to="/">
          <img src="https://via.placeholder.com/50" alt="Logo" class="logo" />
          <span :class="['brand-name', 'text-2xl', 'transition-all', 'duration-300', 'text-black', {'text-white': isNavbarExpanded}]">FYND</span>
        </router-link>
      </div>
      <div class="navbar-right text-base">
        <i :class="['fas', 'fa-navicon', 'cursor-pointr', 'transition-all', 'duration-300', {'text-white': isNavbarExpanded}]" @click="toggleNavbar"></i>
      </div>
    </div>
    <div :class="['navbar-items', { 'expanded': isNavbarExpanded }]">
      <router-link class="page-link" to="/" :hidden="!isNavbarExpanded">Home</router-link>
      <router-link class="page-link" to="/team" :hidden="!isNavbarExpanded">Team</router-link>
      <router-link class="page-link" to="/faq" :hidden="!isNavbarExpanded">FAQ</router-link>
      <div class="dropdown">
        <select class="language-selector" :hidden="!isNavbarExpanded">
          <option value="en">English (EN)</option>
          <option value="it">Italiano (IT)</option>
          <!-- Add more languages if needed -->
        </select>
        <div class="dropdown-content">
          <a href="#">English (EN)</a>
          <a href="#">Italiano (IT)</a>
          <!-- Add more languages if needed -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

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
  padding: 2rem 3rem;
  color: black;
}

.navbar-left, .navbar-center, .navbar-right {
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  z-index: 300;
}

.logo {
  width: 50px;
  height: 50px;
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
  background-color: white; /* Set background to white */
  min-width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
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
  padding: 10px; /* Increased padding */
  background-color: transparent; /* Set background to white */
  border-radius: 4px; /* Optional: Add border radius */
  color: white;
}

.page-link {
  color: white;
  font-size: 24px;
  font-weight: bold;
  z-index: 200;
  transition: color 0.3s ease;
  padding-bottom: 1rem;
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