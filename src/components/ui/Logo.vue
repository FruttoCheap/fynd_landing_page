<template>
    <div class="flex flex-col relative justify-center align-center items-center w-full">
        <img v-if="color" src="../../assets/imgs/logo_white.png" alt="Fynd Logo"
            class="w-20 h-20 object-contain motion-preset-fade-md" />
        <img v-else src="../../assets/imgs/logo_black.png" alt="Fynd Logo"
            class="w-20 h-20 object-contain motion-preset-fade-md" />
    </div>
</template>

<script setup>
const props = defineProps({
    color: {
        type: Boolean,
        default: false
    }
});
</script>

<style scoped></style>