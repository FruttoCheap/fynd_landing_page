<template>
  <nav class="navbar">
    <div class="navbar-left">
      <router-link class="flex flex-row page-link items-center" to="/">
        <img src="https://via.placeholder.com/50" alt="Logo" class="logo" />
        <span class="brand-name text-2xl">FYND</span>
      </router-link>
    </div>
    <div class="navbar-center text-base">
      <router-link class="page-link" to="/team">Chi siamo</router-link>
      <router-link class="page-link" to="/faq">FAQ</router-link>
    </div>
    <div class="navbar-right text-base">
      <div class="dropdown">
        <select class="language-selector">
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
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  padding: 20px;
  color: black;
}

.navbar-left, .navbar-center, .navbar-right {
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
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
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  left: -10%;
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
  background-color: white; /* Set background to white */
  border-radius: 4px; /* Optional: Add border radius */
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
</style>