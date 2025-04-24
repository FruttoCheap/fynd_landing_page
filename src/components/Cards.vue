<template>
  <div ref="container" class="flex flex-row flex-wrap max-h-[200vh] justify-between -mt-10"
    :style="{ marginTop: isMobile ? '-18rem' : NaN }">
    <div class="flex flex-1 p-12">
      <div class="parallax-container rounded-3xl">
        <div
          class="parallax-beach no-select flex flex-col justify-between items-stretch rounded-3xl text-2xl text-white font-semibold">
          <div v-html="t('cards.card1.mainText')" class="z-20 card-content"></div>
          <router-link to="/fynder" class="z-20 card-button">
            <ActionButton :text="t('cards.card1.buttonText')"
              buttonClass="bg-orange-400 text-sm sm:text-base text-white font-semibold z-20" />
          </router-link>
        </div>
      </div>
    </div>
    <div class="flex flex-1 p-12">
      <div class="parallax-container rounded-3xl">
        <div
          class="parallax-mountain no-select flex flex-col justify-between items-stretch rounded-3xl text-2xl text-white font-semibold">
          <div v-html="t('cards.card2.mainText')" class="z-20 card-content"></div>
        </div>
      </div>
    </div>
    <div class="flex flex-1 p-12">
      <div class="parallax-container rounded-3xl">
        <div
          class="parallax-city no-select flex flex-col justify-between items-stretch rounded-3xl text-2xl text-white font-semibold">
          <div v-html="t('cards.card3.mainText')" class="z-20 card-content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref } from 'vue'
import ActionButton from "./ui/ActionButton.vue";

const isMobile = ref(false)

isMobile.value = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

const { t } = useI18n();
</script>

<style scoped>
.parallax-container {
  position: relative;
  width: 100%;
  height: 50vh;
  /* Adjust as you wish */
  overflow: hidden;
}

.parallax-beach {
  background-image: url('../assets/imgs/cards/beach_resize.png');
  height: 50vh;
  display: flex;
  width: 100%;
  clip-path: inset(0 0 0 0);
}

.parallax-beach::before {
  content: "";
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: inherit;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.parallax-mountain {
  background-image: url('../assets/imgs/cards/mountain_resize.png');
  height: 50vh;
  display: flex;
  width: 100%;
  clip-path: inset(0 0 0 0);
}

.parallax-mountain::before {
  content: "";
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: inherit;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.parallax-city {
  background-image: url('../assets/imgs/cards/city_resize.png');
  height: 50vh;
  display: flex;
  width: 100%;
  clip-path: inset(0 0 0 0);
}

.parallax-city::before {
  content: "";
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: inherit;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.card-content {
  padding: 3rem;
  backdrop-filter: brightness(0.6);
  height: 100%;
}

.card-button {
  padding: 3rem;
  backdrop-filter: brightness(0.6);
}
</style>