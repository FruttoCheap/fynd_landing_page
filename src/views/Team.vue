<template>
  <div class="relative min-h-screen bg-white text-gray-900 w-full">
    <canvas ref="canvas" class="fixed inset-0 pointer-events-none z-20"></canvas>
    <!-- Mission & Vision -->
    <section class="absolute w-full flex flex-col justify-center items-center text-center mx-auto mb-16 z-50">
      <h1 class="text-3xl md:text-5xl  font-extrabold">{{ t('team.title') }}</h1>
      <p class="text-lg text-gray-600 mt-4 mx-9">
        {{ t('team.subtitle') }}
      </p>
    </section>

    <!-- Team Section -->
    <section class="absolute w-full mx-auto z-50 mt-36">

      <!-- Founders -->
      <div class="flex flex-col md:flex-row gap-8 mb-16 items-center justify-center">
        <div v-for="founder in founders" :key="founder.id" @mouseenter="founder.onEnter" @mouseleave="founder.onLeave"
          class="hover:shadow-2xl cardina group p-8 rounded-xl duration-300 transition-all mx-12 md:mx-0 max-w-xs">
          <img :src="founder.pic" :alt="founder.name" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover">
          <h3 class="text-xl font-semibold">{{ founder.name }}</h3>
          <p class="text-sm text-gray-500">{{ founder.role }}</p>
          <p class="mt-4 text-gray-700">{{ founder.description }}</p>
          <div class="mt-4 flex flex-row gap-4 justify-center">
            <a v-if="founder.linkedin" :href="founder.linkedin" target="_blank" class="">
              <i
                class="fab fa-linkedin text-2xl text-gray-400 group-hover:text-blue-600 transition-all duration-300"></i>
            </a>
            <a v-if="founder.email" :href="founder.email" target="_blank" class="-mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"
                class="fill-gray-400 group-hover:fill-orange-400 transition-all duration-300">
                <path
                  d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
            </a>
            <a v-if="founder.instagram" :href="founder.instagram" target="_blank">
              <i class="fab fa-instagram text-2xl text-pink-600"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Collaborators -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:w-3/4 mx-auto mb-24">
        <div v-for="collaborator in collaborators" :key="collaborator.id" @mouseenter="collaborator.onEnter"
          @mouseleave="collaborator.onLeave"
          class="hover:shadow-2xl cardina group border border-transparent p-8 rounded-xl duration-300 transition-all mx-12 md:mx-0">
          <img :src="collaborator.pic" :alt="collaborator.name"
            class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
          <h3 class="text-lg font-semibold">{{ collaborator.name }}</h3>
          <p class="text-sm text-gray-500">{{ collaborator.role }}</p>
          <p class="mt-2 text-gray-700">{{ collaborator.description }}</p>
          <div class="mt-4 flex flex-row gap-4 justify-center">
            <a v-if="collaborator.linkedin" :href="collaborator.linkedin" target="_blank" class="">
              <i
                class="fab fa-linkedin text-2xl text-gray-400 group-hover:text-blue-600 transition-all duration-300"></i>
            </a>
            <a v-if="collaborator.email" :href="collaborator.email" target="_blank" class="-mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"
                class="fill-gray-400 group-hover:fill-orange-400 transition-all duration-300">
                <path
                  d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
            </a>
            <a v-if="collaborator.instagram" :href="collaborator.instagram" target="_blank">
              <i
                class="fab fa-instagram text-2xl text-gray-400 group-hover:text-pink-600 transition-all duration-300"></i>
            </a>
          </div>
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
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const founders = ref([]);
const collaborators = ref([]);

const updateTeam = () => {
  founders.value = [
    { id: 1, name: "Andrea Villa", role: "CEO", description: t('team.founders.andrea.description'), pic: andreaImage, linkedin: "https://www.linkedin.com/in/andrea-villa-9239a6268/", email: "mailto:and.vil.2001@gmail.com", onEnter: () => isHovering.value.andrea = true, onLeave: () => isHovering.value.andrea = false },
    { id: 2, name: "Giulio Desana", role: "CTO", description: t('team.founders.giulio.description'), pic: giulioImage, linkedin: "www.linkedin.com/in/giulio-desana", email: "mailto:desanagiulio@gmail.com", onEnter: () => isHovering.value.giulio = true, onLeave: () => isHovering.value.giulio = false },
    { id: 3, name: "Marco Pinto", role: "COO", description: t('team.founders.marco.description'), pic: marcoImage, linkedin: "https://www.linkedin.com/in/pinto-marco/", email: "mailto:marcopinto01@icloud.com", onEnter: () => isHovering.value.marco = true, onLeave: () => isHovering.value.marco = false }
  ];

  collaborators.value = [
    { id: 4, name: "Giorgio Francone", role: "Commercialista", description: t('team.collaborators.giorgio.description'), pic: giorgioImage, onEnter: () => isHovering.value.giorgio = true, onLeave: () => isHovering.value.giorgio = false },
    { id: 5, name: "Federica Fino", role: "Product Management", description: t('team.collaborators.federica.description'), pic: fedeImage, linkedin: "https://www.linkedin.com/in/federica-fino-0641786/", onEnter: () => isHovering.value.federica = true, onLeave: () => isHovering.value.federica = false },
    { id: 6, name: "Edoardo Morone", role: "Designer", description: t('team.collaborators.edoardo.description'), pic: edoImage, linkedin: "https://www.linkedin.com/in/edoardo-morone-74910419a/", instagram: "https://www.instagram.com/edomorone?igsh=MjVwaXptajB1YW04", onEnter: () => isHovering.value.edoardo = true, onLeave: () => isHovering.value.edoardo = false }
  ];
};

watch(locale, updateTeam, { immediate: true });

// canvas
const canvas = ref(null);
let ctx = null;
let mouseX = 0;
let mouseY = 0;

let dots = [];
let animationFrameId;

let canvasRect;

const isHovering = ref({
  'andrea': false,
  'giulio': false,
  'marco': false,
  'giorgio': false,
  'federica': false,
  'edoardo': false
});

const colors = {
  'andrea': '#dc2626',
  'giulio': '#a855f7',
  'marco': '#15803d',
  'giorgio': '#fb923c',
  'federica': '#fb923c',
  'edoardo': '#fb923c'
};

// draw a grid of dots on the canvas which will cover the whole page
const drawDots = () => {
  if (!canvas.value || !ctx) return;

  // Pulisci il canvas
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

  let width = document.documentElement.clientWidth;
  const height = window.innerHeight;
  const baseSize = 1;
  const gap = 25;
  const maxDistance = 100; // Distanza massima di influenza del cursore

  if (width > 1280) {
    width = 1280;
  }

  canvas.value.width = width;
  canvas.value.height = height;

  // Genera la griglia di punti se non esiste
  if (dots.length === 0) {
    for (let x = 0; x < width; x += gap) {
      for (let y = 0; y < height; y += gap) {
        dots.push({ x, y });
      }
    }
  }

  // Disegna tutti i punti
  dots.forEach(dot => {
    // Calcola la distanza dal cursore
    const dx = dot.x - mouseX;
    const dy = dot.y - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Calcola la dimensione del punto in base alla distanza dal cursore
    let size = baseSize;
    if (distance < maxDistance) {
      // Aumenta la dimensione fino a 5 volte quando il punto è vicino al cursore
      const scale = 1 - (distance / maxDistance);
      size = baseSize + (scale * 4);
    }

    ctx.beginPath();
    ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
    ctx.fillStyle = isHovering.value.andrea ? colors.andrea : isHovering.value.giulio ? colors.giulio : isHovering.value.marco ? colors.marco : isHovering.value.giorgio ? colors.giorgio : isHovering.value.federica ? colors.federica : isHovering.value.edoardo ? colors.edoardo : '#fb923c';
    ctx.fill();
  });

  // Richiedi il prossimo frame di animazione
  animationFrameId = requestAnimationFrame(drawDots);
};

function handleMouseMove(e) {
  if (!canvas.value) return;

  // Aggiorna il rettangolo del canvas ad ogni movimento del mouse
  canvasRect = canvas.value.getBoundingClientRect();

  // Calcola la posizione del mouse relativa al canvas, considerando lo scroll
  mouseX = e.clientX - canvasRect.left;
  mouseY = e.clientY - canvasRect.top + window.scrollY / 100;
}

function handleResize() {
  if (!canvas.value) return;
  dots = []; // Resetta l'array dei punti
  drawDots();
}

// initialize the canvas when the component is mounted
function initCanvas() {
  if (!canvas.value) return;

  // Imposta le dimensioni del canvas considerando l'intero documento
  canvas.value.width = window.innerWidth;
  canvas.value.height = Math.max(
    window.innerHeight,
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  );

  ctx = canvas.value.getContext('2d');
  canvasRect = canvas.value.getBoundingClientRect();

  // Avvia l'animazione
  drawDots();
}

// draw the dots when the component is mounted
onMounted(() => {
  initCanvas();
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', () => {
    if (canvas.value) {
      canvasRect = canvas.value.getBoundingClientRect();
    }
  });
});

// cleanup the event listeners when the component is unmounted
onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('scroll', () => {
    if (canvas.value) {
      canvasRect = canvas.value.getBoundingClientRect();
    }
  });
});

</script>

<style scoped>
h1,
h2 {
  font-family: 'Inter', sans-serif;
}

.cardina {
  background-color: rgba(255, 255, 255, 0.0);
  backdrop-filter: blur(0);
}

.cardina:hover {
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
}
</style>
