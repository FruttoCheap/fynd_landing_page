<template>
    <div class="flex flex-col relative justify-center align-center items-center w-full">
        <img src="../../assets/imgs/logo_black.png" alt="Fynd Logo" class="w-20 h-20 object-contain" />
    </div>
</template>

<script setup>
const props = defineProps({
    color: {
        type: String,
        default: 'black'
    }
});
</script>

<style scoped></style>