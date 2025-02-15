<template>
  <div class="min-h-screen bg-white text-gray-900 p-8">
    <!-- Mission & Vision -->
    <section class="text-center max-w-3xl mx-auto mb-16">
      <h1 class="text-5xl font-extrabold">La Nostra Missione e Visione</h1>
      <p class="text-lg text-gray-600 mt-4">
        "Qui va la frase della vostra mission e vision, per comunicare al mondo il vostro scopo."
      </p>
    </section>

    <!-- Team Section -->
    <section class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12">Il Nostro Team</h2>
      
      <!-- Founders -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div v-for="founder in founders" :key="founder.id" class="bg-white shadow-2xl p-8 rounded-3xl text-center border border-gray-200">
          <img :src="founder.pic" :alt="founder.name" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover">
          <h3 class="text-xl font-semibold">{{ founder.name }}</h3>
          <p class="text-sm text-gray-500">{{ founder.role }}</p>
          <p class="mt-4 text-gray-700">{{ founder.description }}</p>
        </div>
      </div>

      <!-- Collaborators -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="collaborator in collaborators" :key="collaborator.id" class="bg-white shadow-xl p-6 rounded-2xl text-center border border-gray-200">
          <img :src="collaborator.pic" :alt="collaborator.name" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
          <h3 class="text-lg font-semibold">{{ collaborator.name }}</h3>
          <p class="text-sm text-gray-500">{{ collaborator.role }}</p>
          <p class="mt-2 text-gray-700">{{ collaborator.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const founders = [
  { id: 1, name: "Founder 1", role: "CEO", description: "Breve descrizione del ruolo e della persona.", pic: "https://via.placeholder.com/150" },
  { id: 2, name: "Founder 2", role: "CTO", description: "Breve descrizione del ruolo e della persona.", pic: "https://via.placeholder.com/150" },
  { id: 3, name: "Founder 3", role: "COO", description: "Breve descrizione del ruolo e della persona.", pic: "https://via.placeholder.com/150" }
];

const collaborators = [
  { id: 4, name: "Collaboratore 1", role: "Designer", description: "Breve descrizione del collaboratore.", pic: "https://via.placeholder.com/100" },
  { id: 5, name: "Collaboratore 2", role: "Sviluppatore", description: "Breve descrizione del collaboratore.", pic: "https://via.placeholder.com/100" },
  { id: 6, name: "Collaboratore 3", role: "Marketing", description: "Breve descrizione del collaboratore.", pic: "https://via.placeholder.com/100" }
];
</script>

<style scoped>
  h1, h2 {
    font-family: 'Inter', sans-serif;
  }
</style>
