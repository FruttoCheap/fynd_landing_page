<template>
  <div class="flex flex-1 p-12">
    <div :class="[backgroundClass, 'rounded-3xl']">
      <div class="no-select flex flex-col justify-between items-stretch card-content rounded-3xl text-2xl text-white font-semibold">
        <div v-html="mainText"></div>
        <ActionButton v-if="showButton" text="Scopriti" buttonClass="bg-orange-400 text-sm sm:text-base text-white font-semibold"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, onMounted, ref} from 'vue';
import ActionButton from "./ActionButton.vue";

const showButton = ref(false);

const props = defineProps<{
  backgroundClass: string;
  mainText: string;
  buttonText?: string;
}>();

onMounted(() => {
  if (props.buttonText) {
    showButton.value = true;
  }
});

</script>

<style scoped>
.background-image-div1 {
  background-image: url('../../assets/imgs/beach.jpg');
  position: relative;
  display: flex;
  flex-direction: column;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 50vh; /* Adjust the height as needed */
}

.background-image-div2 {
  background-image: url('../../assets/imgs/mountain.jpg');
  position: relative;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 50vh; /* Adjust the height as needed */
}

.background-image-div3 {
  background-image: url('../../assets/imgs/city.jpg');
  position: relative;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 50vh; /* Adjust the height as needed */
}

.card-content {
  padding: 3rem;
  backdrop-filter: blur(0px) brightness(0.6);
  height: 100%;
  transition: all 0.3s ease-in-out;
}

.card-content:hover {
  backdrop-filter: blur(5px) brightness(0.6);
  height: 100%;
}
</style>