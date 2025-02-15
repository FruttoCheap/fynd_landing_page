<template>
    <div class="fynder">
        <h1 class="text-5xl font-extrabold mx-6">Scopri che <span class="text-orange-400">Fynder</span> sei!</h1>
        <div class="mx-12 mt-9">
            <div>Putroppo dovrai ancora aspettare per scoprire che <span class="font-bold">Fynder</span> sei...</div>
            <br>
            <div>Nel frattempo, lasciaci la tua mail e ti contatteremo non appena sarà pronto!</div>
        </div>
        <Email />
    </div>
</template>

<script setup lang="ts">
import Email from "../components/Email.vue";
</script>

<style scoped></style>