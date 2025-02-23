<template>
  <div class="flex flex-1 p-12">
    <div :class="[backgroundClass, 'rounded-3xl']">
      <div
        class="no-select flex flex-col justify-between items-stretch card-content rounded-3xl text-2xl text-white font-semibold">
        <div v-html="mainText"></div>
        <router-link to="/fynder">
          <ActionButton v-if="showButton" :text="buttonText"
            buttonClass="bg-orange-400 text-sm sm:text-base text-white font-semibold" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue';
import ActionButton from "./ActionButton.vue";

const showButton = ref(false);

const props = defineProps<{
  backgroundClass: string;
  mainText: string;
  buttonText: string;
}>();

onMounted(() => {
  if (props.buttonText) {
    showButton.value = true;
  }
});

</script>

<style scoped>
.background-image-div1 {
  background-image: url('../../assets/imgs/cards/beach_mobile.webp');
  position: relative;
  display: flex;
  flex-direction: column;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 50vh;
  /* Adjust the height as needed */
}

@media (min-width: 768px) {
  .background-image-div1 {
    background-image: url('../../assets/imgs/cards/beach_resize.png');
  }
}

.background-image-div2 {
  background-image: url('../../assets/imgs/cards/mountain_mobile.webp');
  position: relative;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 50vh;
  /* Adjust the height as needed */
}

@media (min-width: 768px) {
  .background-image-div2 {
    background-image: url('../../assets/imgs/cards/mountain_resize.png');
  }
}

.background-image-div3 {
  background-image: url('../../assets/imgs/cards/city_mobile.webp');
  position: relative;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 50vh;
  /* Adjust the height as needed */
}

@media (min-width: 768px) {
  .background-image-div3 {
    background-image: url('../../assets/imgs/cards/city_resize.png');
  }
}

.card-content {
  padding: 3rem;
  backdrop-filter: brightness(0.6);
  height: 100%;
}
</style>