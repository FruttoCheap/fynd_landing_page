<template>
  <div>
    <div class="mx-6">
      <h1 class="font-bold mt-3 text-left">Aiutaci a crescere</h1>
      <div class="text-xl text-left">
        <br>
        Prima di iniziare, ti ricordiamo che tutte le risposte saranno <span class="font-bold">completamente anonime</span>.
        <br><br>
        Prenditi il tempo necessario per riflettere, non richiederà molto tempo (circa 3 min).
        <br><br>
        Ti invitiamo a rispondere in modo sincero, seguendo i tuoi pensieri e le tue preferenze.
        <br>
        <span class="font-bold">Non esistono risposte giuste o sbagliate.</span>
      </div>
    </div>

    <form @submit.prevent="submitForm" class="mt-6 mx-6 flex flex-col justify-start items-start">
      <label for="age" class="title">Quanti anni hai?</label>
      <div class="radio-group">
        <div v-for="option in ageOptions" :key="option" class="radio-option">
          <input type="radio" :id="option" :value="option" v-model="form['Age']" required>
          <label :for="option">{{ option }}</label>
        </div>
      </div>

      <div class="divider"></div>

      <label for="frequency" class="title">Quante volte ti capita di viaggiare durante l'anno?</label>
      <div class="radio-group">
        <div v-for="option in frequencyOptions" :key="option" class="radio-option">
          <input type="radio" :id="option" :value="option" v-model="form['Frequency']" required>
          <label :for="option">{{ option }}</label>
        </div>
      </div>

      <div class="divider"></div>

      <label for="area" class="title">Quando viaggi, in quale area geografica ti sposti più frequentemente?</label>
      <div class="radio-group">
        <div v-for="option in areaOptions" :key="option" class="radio-option">
          <input type="radio" :id="option" :value="option" v-model="form['Area']" required>
          <label :for="option">{{ option }}</label>
        </div>
      </div>

      <div class="divider"></div>

      <label for="purpose" class="title">Solitamente, per quale motivo viaggi?</label>
      <div class="radio-group">
        <div v-for="option in purposeOptions" :key="option" class="radio-option">
          <input type="radio" :id="option" :value="option" v-model="form['Purpose']" required>
          <label :for="option">{{ option }}</label>
        </div>
      </div>

      <div class="divider"></div>

      <label for="budget" class="title">
        Qual è il budget medio che hai destinato per i tuoi ultimi viaggi?
        <br>
        <span class="text-sm font-normal subtitle">(Pensaci in termini di spese totali per alloggio, trasporti e attività)</span>
      </label>
      <div class="radio-group">
        <div v-for="option in budgetOptions" :key="option" class="radio-option">
          <input type="radio" :id="option" :value="option" v-model="form['Budget']" required>
          <label :for="option">{{ option }}</label>
        </div>
      </div>

      <div class="divider"></div>

      <label for="travelAspects" class="title">
        Quali aspetti dell’organizzare un viaggio trovi più impegnativi o meno piacevoli?
        <br>
        <span class="text-sm font-normal subtitle">(Seleziona fino a 2 opzioni)</span>
      </label>
      <div class="checkbox-group">
        <div v-for="option in travelAspectsOptions" :key="option" class="checkbox-option">
          <input type="checkbox" :id="option" :value="option" v-model="form['TravelAspects']" :disabled="form['TravelAspects'].length >= 2 && !form['TravelAspects'].includes(option)">
          <label :for="option">{{ option }}</label>
        </div>
      </div>

      <div class="divider"></div>

      <label for="travelInterests" class="title">
        Quando viaggi, quali sono gli aspetti o le attività che ti interessano di più?
        <br>
        <span class="text-sm font-normal">(Seleziona fino a 3 opzioni)</span>
      </label>
      <div class="checkbox-group">
        <div v-for="option in travelInterestsOptions" :key="option" class="checkbox-option">
          <input type="checkbox" :id="option" :value="option" v-model="form['TravelInterests']" :disabled="form['TravelInterests'].length >= 3 && !form['TravelInterests'].includes(option)">
          <label :for="option">{{ option }}</label>
        </div>
      </div>

      <div class="divider"></div>

      <label for="advanceBooking" class="title">
        Tra le seguenti attività e aspetti del viaggio, quali saresti più propenso/a a prenotare in anticipo?
        <br>
        <span class="text-sm font-normal">(Seleziona fino a 4 opzioni. Se non sei interessato/a a prenotare nulla, lascia il campo vuoto)</span>
      </label>
      <div class="checkbox-group">
        <div v-for="option in advanceBookingOptions" :key="option" class="checkbox-option">
          <input type="checkbox" :id="option" :value="option" v-model="form['AdvanceBooking']" :disabled="form['AdvanceBooking'].length >= 4 && !form['AdvanceBooking'].includes(option)">
          <label :for="option">{{ option }}</label>
        </div>
      </div>

      <div class="divider"></div>

      <label for="planningApproach" class="title">
        Come ti organizzi di solito per pianificare i tuoi viaggi?
        <br>
        <span class="text-sm font-normal">(Seleziona l’opzione che descrive meglio il tuo approccio)</span>
      </label>
      <div class="radio-group">
        <div v-for="option in planningApproachOptions" :key="option" class="radio-option">
          <input type="radio" :id="option" :value="option" v-model="form['PlanningApproach']" required>
          <label :for="option">{{ option }}</label>
        </div>
      </div>

      <div class="divider"></div>

      <label for="paymentPreference" class="title">
        Se utilizzassi un’app che genera per te un itinerario personalizzato, che puoi modificare e adattare come preferisci, e ti permette di prenotare tutte le attività e i servizi del viaggio in un unico posto, quale modalità di pagamento preferiresti?
      </label>
      <div class="radio-group">
        <div v-for="option in paymentPreferenceOptions" :key="option" class="radio-option">
          <input type="radio" :id="option" :value="option" v-model="form['PaymentPreference']" required>
          <label :for="option">{{ option }}</label>
        </div>
      </div>

      <div class="text-xl text-left my-9">
        Noi siamo <span class="font-bold">FYND</span> e la nostra missione è creare un’app che cresca con te, per generarti il <span class="font-bold">viaggio perfetto</span> e permetterti di prenotare e gestire tutto in modo semplice e veloce, in un unico luogo.
        <br><br>
        Se vuoi diventare un <span class="font-bold">FYNDER</span> speciale e ricevere vantaggi esclusivi, lasciaci la tua email!
        <br>
        Ti contatteremo solo quando l’app sarà pronta per il lancio.
      </div>

      <label for="email" class="title">Il tuo indirizzo mail</label>
      <input type="email" v-model="form.Email" id="email" required />

      <div v-if="responseMessage" style="margin-top: 20px; color: green;" class="text-left">
        {{ responseMessage }}
      </div>

      <button type="submit">Conferma</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        'Age': '',
        'Frequency': '',
        'Area': '',
        'Purpose': '',
        'Budget': '',
        'TravelAspects': [],
        'TravelInterests': [],
        'AdvanceBooking': [],
        'PlanningApproach': '',
        'PaymentPreference': '',
        Email: '',
      },
      ageOptions: ['15-19', '20-25', '26-35', '36-45', '46-55', '56-65', '65+'],
      frequencyOptions: ['Mai', '1-2', '3-5', '6-8', '9+'],
      areaOptions: [
        'Principalmente in Italia',
        'Soprattutto in Europa',
        'Asia',
        'Africa',
        'America',
        'Oceania',
        'Non ho una preferenza specifica',
      ],
      purposeOptions: [
        'Lavoro o formazione',
        'Vacanze e svago',
        'Eventi vari (Fiere, Concerti, ...)',
        'Altro'
      ],
      budgetOptions: [
        'Meno di €250 a viaggio',
        '€250-500',
        '€500-750',
        '€750-1000',
        '€1000-1500',
        '€1500-2000',
        'Oltre €2000',
        'Non saprei',
      ],
      travelAspectsOptions: [
        'Confrontare prezzi e gestire le prenotazioni su più piattaforme diverse (voli, hotel o trasporti).',
        'Trovare attività o esperienze che rispecchino i miei interessi.',
        'Conciliare le esigenze di viaggio di più persone (es. viaggio di gruppo o famiglia).',
        'Informarmi sulle regole, le usanze locali e gestire i documenti di viaggio necessari (visti, passaporti, assicurazioni).',
        'Scoprire ristoranti o trovare pasti che rispettino le mie preferenze alimentari.',
        'Altro...',
      ],
      travelInterestsOptions: [
        'Visitare attrazioni culturali (musei, monumenti, siti storici).',
        'Dedicarti alla natura e al relax (escursioni, parchi, spiagge, spa e terme).',
        'Provare esperienze culinarie (ristoranti, mercati, locali tipici).',
        'Partecipare a eventi (festival, concerti, eventi sportivi).',
        'Scoprire la vita notturna (bar, club, discoteche).',
        'Trovare l’alloggio più adatto a te (hotel, B&B, case vacanza) e ottimizzare i trasporti (voli, treni, autobus).',
        'Partecipare a tour organizzati (guide turistiche, gite a tema).',
      ],
      advanceBookingOptions: [
        'Visite e biglietti per le attrazioni culturali (musei, monumenti, siti storici).',
        'Esperienze nella natura e attività di relax (escursioni, parchi, spa e terme).',
        'Ristoranti ed esperienze gastronomiche (pranzi e cene al tavolo, degustazioni, eventi culinari).',
        'Biglietti per eventi (festival, concerti, competizione sportiva).',
        'Vita notturna (club, discoteche, bar specializzati).',
        'Trasporti (voli, treni, autobus, transfer).',
        'Alloggi (hotel, B&B, case vacanza).',
        'Tour organizzati (guide turistiche, escursioni a tema).',
      ],
      planningApproachOptions: [
        'Organizzo tutto da solo/a, prenotando ciò che mi interessa senza supporto esterno.',
        'Chiedo ad amici o parenti di aiutarmi a pianificare e organizzare il viaggio.',
        'Mi affido a servizi o agenzie che pianificano il viaggio e offrono assistenza in caso di problemi.',
        'Acquisto pacchetti/box per viaggi già pronti.',
      ],
      paymentPreferenceOptions: [
        'Un abbonamento mensile di €5 per avere accesso illimitato al servizio.',
        'Un abbonamento annuale di €50 (con un risparmio rispetto al mensile).',
        'Un costo aggiuntivo del 5% sul totale di ogni prenotazione effettuata tramite l’app.',
        'Non sarei disposto/a a pagare nulla.',
      ],
      responseMessage: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbw_n4R-aWwylI1ClpcIweZCSt_DjNqfM1NbQSy1mvzbPsdz7Sc2N9c60gd_UnJNswdFGQ/exec', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(this.form),
        });
        const result = await response.json();
        if (result.result) {
          this.responseMessage = 'Grazie per aver completato il questionario! Ti contatteremo presto.';
        } else {
          this.responseMessage = 'Si è verificato un errore. Riprova.';
        }
      } catch (error) {
        this.responseMessage = 'Si è verificato un errore. Riprova.';
      }
    },
  },
};
</script>

<style>
label {
  display: block;
}
button {
  padding: 10px 20px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 6rem;
}
button:hover {
  background-color: rgb(240, 165, 0, 1);
}

.title{
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: bold;
  margin-top: 0.5rem;
  text-align: left;
}

.subtitle {
  display: block;
  text-align: left;
}

.radio-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 1rem;
}

.radio-option {
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 1rem;
}

.checkbox-option {
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
}

input[type="radio"] {
  display: none;
}
input[type="checkbox"] + label,
input[type="radio"] + label {
  padding: 10px 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  cursor: pointer;
  text-align: left;
  width: auto;
  transition: all 0.3s ease-in-out;
}
input[type="checkbox"]:hover + label,
input[type="radio"]:hover + label {
  border: 1px solid orange;
}

input[type="checkbox"]:checked + label,
input[type="radio"]:checked + label {
  border: 1px solid orange;
  background-color: orange;
  color: white;
}

input[type="checkbox"] {
  display: none;
}

input[type='email'] {
  padding: 10px 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 1rem 0;
}
</style>
