<template>
    <div class="flex justify-center items-center -mt-16 overflow-hidden">
        <Vue3Spline v-if="!isMobile" :scene="{
            url: 'https://prod.spline.design/02sDJiJB-Cjs-EJU/scene.splinecode',
        }" />
        <Vue3Spline v-else :scene="{
            url: 'https://prod.spline.design/mcICstOjLVM3MC-o/scene.splinecode',
        }" />
    </div>
</template>

<script setup>
import { Vue3Spline } from 'vue3-spline'
import { ref, computed } from 'vue'

const isMobile = ref(false)

isMobile.value = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
</script>