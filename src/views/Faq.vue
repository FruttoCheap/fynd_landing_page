<template>
  <div class="min-h-screen bg-white text-gray-900 p-8">
    <!-- FAQ Header -->
    <section class="text-center max-w-3xl mx-auto mb-16">
      <h1 class="text-5xl font-extrabold">Domande Frequenti</h1>
      <p class="text-lg text-gray-600 mt-4">
        Hai qualche dubbio sul progetto? <br> Sei nel posto giusto...
      </p>
    </section>

    <!-- FAQ List -->
    <section class="max-w-4xl mx-auto">
      <div v-for="(faq, index) in faqs" :key="index">
        <button @click="toggleFAQ(index)" class="w-full text-left flex justify-between items-center focus:outline-none"
          :class="['w-full text-left flex justify-between items-center focus:outline-none', index % 2 === 0 ? 'bg-orange-400' : 'bg-orange-500']"
          style="margin-bottom: 14px;">
          <h3 class="text-lg font-semibold">{{ faq.question }}</h3>
          <span class="text-xl">{{ faq.open ? '−' : '+' }}</span>
        </button>
        <p v-if="faq.open" class="mt-2 text-gray-700" style="margin-bottom: 14px;">{{ faq.answer }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const faqs = ref([
  { question: "Come funziona il servizio?", answer: "Il nostro servizio ti aiuta a organizzare il tuo viaggio in pochi click.", open: false },
  { question: "Quali sono i costi?", answer: "I costi variano in base alle opzioni selezionate. Contattaci per maggiori dettagli.", open: false },
  { question: "Posso ottenere un rimborso?", answer: "I rimborsi sono disponibili secondo le nostre condizioni di servizio.", open: false },
  { question: "Come posso contattare l'assistenza clienti?", answer: "Puoi contattarci tramite email o il nostro supporto chat disponibile 24/7.", open: false },
  { question: "Quanto tempo ci vuole per ricevere una conferma di prenotazione?", answer: "Di solito la conferma avviene entro pochi minuti, ma in alcuni casi può richiedere fino a 24 ore.", open: false },
  { question: "Ci sono offerte speciali o sconti disponibili?", answer: "Sì, offriamo sconti per gruppi e promozioni stagionali. Controlla la nostra pagina delle offerte.", open: false },
  { question: "Posso modificare o cancellare la mia prenotazione?", answer: "Sì, puoi modificare o cancellare la tua prenotazione seguendo le condizioni specificate nella conferma.", open: false },
  { question: "Come posso pagare?", answer: "Accettiamo pagamenti con carta di credito, PayPal e bonifico bancario.", open: false },
  { question: "I vostri servizi sono disponibili in tutto il mondo?", answer: "Attualmente operiamo in diverse destinazioni. Contattaci per sapere se copriamo la tua area.", open: false },
  { question: "Quali documenti sono necessari per la prenotazione?", answer: "Dipende dalla destinazione e dal tipo di servizio. Ti forniremo tutte le informazioni necessarie al momento della prenotazione.", open: false },
  { question: "È sicuro prenotare tramite il vostro sito?", answer: "Sì, utilizziamo tecnologie di sicurezza avanzate per proteggere i tuoi dati e transazioni.", open: false },
  { question: "Posso regalare un viaggio o un’esperienza?", answer: "Sì, offriamo voucher regalo personalizzabili.", open: false }
]);

const toggleFAQ = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>

<style scoped>
h1,
h3 {
  font-family: 'Inter', sans-serif;
}
</style>
