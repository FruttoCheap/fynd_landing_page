<template>
  <nav class="navbar">
    <div class="navbar-left">
      <router-link class="flex flex-row page-link items-center" to="/">
        <Logo class="logo" color="#000000" />
        <span class="brand-name text-2xl">FYND</span>
      </router-link>
    </div>
    <div class="navbar-center text-base">
      <router-link class="page-link border-e pe-6" :class="{ active: $route.path === '/' }" to="/">{{ t('navbar.home')
      }}</router-link>
      <router-link class="page-link border-e pe-6" :class="{ active: $route.path === '/team' }" to="/team">{{
        t('navbar.team') }}</router-link>
      <router-link class="page-link border-e pe-6" :class="{ active: $route.path === '/faq' }" to="/faq">{{
        t('navbar.faq') }}</router-link>
      <router-link class="page-link" :class="{ active: $route.path === '/quiz' }" to="/quiz">{{ t('navbar.quiz')
      }}</router-link>
    </div>
    <div class="navbar-right text-base">
      <select v-model="locale" class="language-selector">
        <option value="en">{{ t('navbar.language.en') }}</option>
        <option value="it">{{ t('navbar.language.it') }}</option>
      </select>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Logo from './ui/Logo.vue';

const { locale, t } = useI18n();
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: black;
}

.navbar-left,
.navbar-center,
.navbar-right {
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-name {
  margin-left: 10px;
  font-weight: bold;
}

.language-selector {
  margin-right: 20px;
  padding: 10px;
  background-color: white;
  border-radius: 4px;
}

.page-link {
  color: black;
  font-size: larger;
  margin-left: 1rem;
  margin-right: 1rem;
  z-index: 200;
  transition: color 0.3s ease;
}

.page-link:hover {
  color: #ff8000;
}

.active {
  color: #ff8000;
}
</style>