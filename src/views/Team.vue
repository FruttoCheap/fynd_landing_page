<template>
  <div class="min-h-screen bg-white text-gray-900 p-8">
    <!-- Mission & Vision -->
    <section class="text-center max-w-3xl mx-auto mb-16">
      <h1 class="text-5xl font-extrabold">{{ t('team.title') }}</h1>
      <p class="text-lg text-gray-600 mt-4">
        {{ t('team.subtitle') }}
      </p>
    </section>

    <!-- Team Section -->
    <section class="max-w-6xl mx-auto">

      <!-- Founders -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-center justify-center">
        <div v-for="founder in founders" :key="founder.id"
          class="hover:shadow-2xl border border-transparent hover:border-orange-400 p-8 rounded-xl duration-300 transition-all mx-12 md:mx-0">
          <img :src="founder.pic" :alt="founder.name" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover">
          <h3 class="text-xl font-semibold">{{ founder.name }}</h3>
          <p class="text-sm text-gray-500">{{ founder.role }}</p>
          <p class="mt-4 text-gray-700">{{ founder.description }}</p>
        </div>
      </div>

      <!-- Collaborators -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:w-3/4 mx-auto">
        <div v-for="collaborator in collaborators" :key="collaborator.id"
          class="hover:shadow-2xl border border-transparent hover:border-orange-400 p-8 rounded-xl duration-300 transition-all mx-12 md:mx-0">
          <img :src="collaborator.pic" :alt="collaborator.name"
            class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
          <h3 class="text-lg font-semibold">{{ collaborator.name }}</h3>
          <p class="text-sm text-gray-500">{{ collaborator.role }}</p>
          <p class="mt-2 text-gray-700">{{ collaborator.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import andreaImage from '../assets/imgs/team/andrea.png';
import giulioImage from '../assets/imgs/team/giulio.png';
import marcoImage from '../assets/imgs/team/pinto.png';
import giorgioImage from '../assets/imgs/team/giorgio.png';
import fedeImage from '../assets/imgs/team/federica.png';
import edoImage from '../assets/imgs/team/edo.jpg';
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const founders = ref([]);
const collaborators = ref([]);

const updateTeam = () => {
  founders.value = [
    { id: 1, name: "Andrea Villa", role: "CEO", description: t('team.founders.andrea.description'), pic: andreaImage },
    { id: 2, name: "Giulio Desana", role: "CTO", description: t('team.founders.giulio.description'), pic: giulioImage },
    { id: 3, name: "Marco Pinto", role: "COO", description: t('team.founders.marco.description'), pic: marcoImage }
  ];

  collaborators.value = [
    { id: 4, name: "Giorgio Francone", role: "Commercialista", description: t('team.collaborators.giorgio.description'), pic: giorgioImage },
    { id: 5, name: "Federica Fino", role: "Product Management", description: t('team.collaborators.federica.description'), pic: fedeImage },
    { id: 6, name: "Edoardo Morone", role: "Designer", description: t('team.collaborators.edoardo.description'), pic: edoImage }
  ];
};

watch(locale, updateTeam, { immediate: true });
</script>

<style scoped>
h1,
h2 {
  font-family: 'Inter', sans-serif;
}
</style>
