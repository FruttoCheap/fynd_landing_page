<template>
    <div :class="containerClasses">
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

const containerClasses = computed(() => ({
    'flex justify-center items-center': true,
    '-mt-16 sm:-mt-24 md:-mt-36 lg:-mt-36 xl:-mt-44': !isMobile.value,
    '-mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 xl:-mt-24': isMobile.value,
    'overflow-hidden': true
}))
</script>