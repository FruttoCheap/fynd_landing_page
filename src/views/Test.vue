<template>
    <div style="height: 2200vh;">
        <div ref="background" style="height: 150vh; width: 150vw; position: fixed; top: -10rem; left: -10rem;"></div>
        <div ref="title" class="fixed text-4xl font-bold text-left p-12">
            La nostra <span class="text-orange-400">vision:</span>
        </div>
        <div ref="container" class="fixed flex flex-col justify-between items-start text-6xl font-bold mt-24 p-12">
            <span ref="fynd" class="moving_text no-select" @click="onFyndTap">Fynd It</span>
            <span ref="book" class="moving_text no-select" @click="onBookTap">Book It</span>
            <span ref="live" class="moving_text no-select" @click="onLiveTap">Live It</span>
        </div>
        <div class="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 mt-8 text-left w-full">
            <div ref="fynd_text" class="text-3xl  text-white w-full ps-24 pe-36">
                Scopri luoghi che non avresti mai considerato, ma che
                amerai. Grazie alla nostra intelligenza
                artificiale, ti suggeriamo destinazioni ed esperienze su misura per te, aprendoti le porte di un mondo
                ancora da esplorare.
            </div>
        </div>
        <div class="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 mt-16 text-left w-full">
            <div ref="book_text" class="text-3xl  text-white w-full ps-24 pe-36">
                Dimentica lo stress della pianificazione. Con FYND puoi creare un itinerario in pochi clic e prenotare
                tutto, trasporti, alloggi e attività, in un’unica piattaforma, con un'esperienza fluida e intuitiva.
            </div>
        </div>
        <div class="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 mt-24 text-left w-full">
            <div ref="live_text" class="text-3xl  text-white w-full ps-24 pe-36">
                Vivi il viaggio come un local, immergendoti nella cultura del posto e lasciandoti guidare da esperienze
                autentiche. FYND ti accompagna per rendere ogni avventura più semplice, personalizzata e
                indimenticabile.
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrollOffset = ref(0);
const fynd = ref(null);
const fynd_text = ref(null);
const book = ref(null);
const book_text = ref(null);
const live = ref(null);
const live_text = ref(null);
const background = ref(null);
const container = ref(null);
const title = ref(null);

const onFyndTap = () => {
    window.scrollTo({
        top: 6000,
        behavior: 'smooth'
    });
};

const onBookTap = () => {
    window.scrollTo({
        top: 12000,
        behavior: 'smooth'
    });
};

const onLiveTap = () => {
    window.scrollTo({
        top: 18000,
        behavior: 'smooth'
    });
};

const handleScroll = () => {
    // Calcola lo spostamento in base allo scroll
    // Puoi modificare il divisore (20) per regolare la velocità
    scrollOffset.value = window.scrollY / 10;

    if (scrollOffset.value < 300) {
        fynd_text.value.style.opacity = `0`;
        book_text.value.style.opacity = `0`;
        live_text.value.style.opacity = `0`;
        background.value.style.backgroundColor = `rgb(${255 - scrollOffset.value * 2.55}, ${255 - scrollOffset.value * 2.55}, ${255 - scrollOffset.value * 2.55})`;
        container.value.style.color = `rgb(${scrollOffset.value * 2.55}, ${scrollOffset.value * 2.55}, ${scrollOffset.value * 2.55})`;
        title.value.style.color = `rgb(${scrollOffset.value * 2.55}, ${scrollOffset.value * 2.55}, ${scrollOffset.value * 2.55})`;
        fynd.value.style.fontSize = `${3.75 + scrollOffset.value / 50}rem`;
        book.value.style.transform = `translateY(${scrollOffset.value}px)`;
        book.value.style.opacity = `${1 - scrollOffset.value / 600}`;
        live.value.style.transform = `translateY(${scrollOffset.value}px)`;
        live.value.style.opacity = `${1 - scrollOffset.value / 600}`;
    } else if (scrollOffset.value >= 300 && scrollOffset.value < 600) {
        background.value.style.backgroundColor = `rgb(${255 - 300 * 2.55}, ${255 - 300 * 2.55}, ${255 - 300 * 2.55})`;
        container.value.style.color = `rgb(${300 * 2.55}, ${300 * 2.55}, ${300 * 2.55})`;
        book_text.value.style.opacity = `0`;
        live_text.value.style.opacity = `0`;
        if (scrollOffset.value < 450) {
            fynd_text.value.style.opacity = `${(scrollOffset.value - 300) / 50}`;
        } else {
            fynd_text.value.style.opacity = `1`;
        }
    } else if (scrollOffset.value >= 600 && scrollOffset.value < 900) {
        background.value.style.backgroundColor = `rgb(${255 - 300 * 2.55}, ${255 - 300 * 2.55}, ${255 - 300 * 2.55})`;
        container.value.style.color = `rgb(${300 * 2.55}, ${300 * 2.55}, ${300 * 2.55})`;
        book_text.value.style.opacity = `0`;
        live_text.value.style.opacity = `0`;
        if (scrollOffset.value < 750) {
            fynd_text.value.style.opacity = `${1 - ((scrollOffset.value - 600) / 50)}`;
        } else {
            fynd_text.value.style.opacity = `0`;
        }
        fynd_text.value.style.transform = `translateY(-${(scrollOffset.value - 600) * 2}px)`;
        fynd.value.style.fontSize = `${8.73 - (scrollOffset.value - 600) / 50}rem`;
        fynd.value.style.opacity = `${1 - (scrollOffset.value - 600) / 600}`;
        book.value.style.transform = `translateY(${(900 - scrollOffset.value)}px)`;
        book.value.style.fontSize = `${3.75 + (scrollOffset.value - 600) / 50}rem`;
        book.value.style.opacity = `${0.5 + (scrollOffset.value - 600) / 200}`;
    } else if (scrollOffset.value >= 900 && scrollOffset.value < 1200) {
        background.value.style.backgroundColor = `rgb(${255 - 300 * 2.55}, ${255 - 300 * 2.55}, ${255 - 300 * 2.55})`;
        container.value.style.color = `rgb(${300 * 2.55}, ${300 * 2.55}, ${300 * 2.55})`;
        if (scrollOffset.value < 1050) {
            book_text.value.style.opacity = `${(scrollOffset.value - 900) / 50}`;
        } else {
            book_text.value.style.opacity = `1`;
        }
    } else if (scrollOffset.value >= 1200 && scrollOffset.value < 1500) {
        background.value.style.backgroundColor = `rgb(${255 - 300 * 2.55}, ${255 - 300 * 2.55}, ${255 - 300 * 2.55})`;
        container.value.style.color = `rgb(${300 * 2.55}, ${300 * 2.55}, ${300 * 2.55})`;
        if (scrollOffset.value < 1350) {
            book_text.value.style.opacity = `${1 - ((scrollOffset.value - 1200) / 50)}`;
        } else {
            book_text.value.style.opacity = `0`;
        }
        book_text.value.style.transform = `translateY(-${(scrollOffset.value - 1200) * 2}px)`;
        book.value.style.fontSize = `${8.73 - (scrollOffset.value - 1200) / 50}rem`;
        book.value.style.opacity = `${1 - (scrollOffset.value - 1200) / 600}`;
        live.value.style.transform = `translateY(${(1500 - scrollOffset.value)}px)`;
        live.value.style.fontSize = `${3.75 + (scrollOffset.value - 1200) / 50}rem`;
        live.value.style.opacity = `${0.5 + (scrollOffset.value - 1200) / 300}`;
    } else if (scrollOffset.value >= 1500 && scrollOffset.value < 1800) {
        background.value.style.backgroundColor = `rgb(${255 - 300 * 2.55}, ${255 - 300 * 2.55}, ${255 - 300 * 2.55})`;
        container.value.style.color = `rgb(${300 * 2.55}, ${300 * 2.55}, ${300 * 2.55})`;
        if (scrollOffset.value < 1650) {
            live_text.value.style.opacity = `${(scrollOffset.value - 1500) / 50}`;
        } else {
            live_text.value.style.opacity = `1`;
        }
    } else if (scrollOffset.value >= 1800 && scrollOffset.value < 2100) {
        background.value.style.backgroundColor = `rgb(${255 - 300 * 2.55}, ${255 - 300 * 2.55}, ${255 - 300 * 2.55})`;
        container.value.style.color = `rgb(${300 * 2.55}, ${300 * 2.55}, ${300 * 2.55})`;
        if (scrollOffset.value < 1950) {
            live_text.value.style.opacity = `${1 - ((scrollOffset.value - 1800) / 50)}`;
        } else {
            live_text.value.style.opacity = `0`;
        }
        live_text.value.style.transform = `translateY(-${(scrollOffset.value - 1800) * 2}px)`;
        live.value.style.fontSize = `${8.73 - (scrollOffset.value - 1800) / 50}rem`;
        live.value.style.opacity = `${1 - (scrollOffset.value - 1800) / 600}`;
    }
};

onMounted(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.moving-text {
    display: inline-block;
    margin-bottom: 6rem;
    transition: transform 0.1s ease-out;
}
</style>