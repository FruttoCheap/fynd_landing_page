<template>
  <div>
    <div class="mx-6">
      <h1 class="text-4xl md:text-6xl font-bold mt-3 text-left">{{ t('quiz.title') }}</h1>
      <div class="text-xl text-left">
        <br>
        {{ t('quiz.intro1') }} <span class="font-bold">{{ t('quiz.intro2') }}</span>.
        <br><br>
        {{ t('quiz.intro3') }}
        <br><br>
        {{ t('quiz.intro4') }}
        <br>
        <span class="font-bold">{{ t('quiz.intro5') }}</span>.
      </div>
    </div>

    <form @submit.prevent="submitForm" class="mt-6 mx-6 flex flex-col justify-start items-start">
      <label for="age" class="title">{{ t('quiz.age') }}</label>
      <div class="radio-group">
        <div v-for="option in ageOptions" :key="option" class="radio-option">
          <input type="radio" :id="option" :value="option" v-model="form['Age']" required>
          <label :for="option">{{ option }}</label>
        </div>
      </div>

      <div class="divider"></div>

      <label for="frequency" class="title">{{ t('quiz.frequency') }}</label>
      <div class="radio-group">
        <div v-for="option in frequencyOptions" :key="option" class="radio-option">
          <input type="radio" :id="option" :value="option" v-model="form['Frequency']" required>
          <label :for="option">{{ option }}</label>
        </div>
      </div>

      <div class="divider"></div>

      <label for="area" class="title">{{ t('quiz.area') }}</label>
      <div class="radio-group">
        <div v-for="option in areaOptions" :key="option" class="radio-option">
          <input type="radio" :id="option" :value="option" v-model="form['Area']" required>
          <label :for="option">{{ option }}</label>
        </div>
      </div>

      <div class="divider"></div>

      <label for="purpose" class="title">{{ t('quiz.purpose') }}</label>
      <div class="radio-group">
        <div v-for="option in purposeOptions" :key="option" class="radio-option">
          <input type="radio" :id="option" :value="option" v-model="form['Purpose']" required>
          <label :for="option">{{ option }}</label>
        </div>
      </div>

      <div class="divider"></div>

      <label for="budget" class="title">
        {{ t('quiz.budget') }}
        <br>
        <span class="text-sm font-normal subtitle">{{ t('quiz.budgetSubtitle') }}</span>
      </label>
      <div class="radio-group">
        <div v-for="option in budgetOptions" :key="option" class="radio-option">
          <input type="radio" :id="option" :value="option" v-model="form['Budget']" required>
          <label :for="option">{{ option }}</label>
        </div>
      </div>

      <div class="divider"></div>

      <label for="travelAspects" class="title">
        {{ t('quiz.travelAspects') }}
        <br>
        <span class="text-sm font-normal subtitle">{{ t('quiz.travelAspectsSubtitle') }}</span>
      </label>
      <div class="checkbox-group">
        <div v-for="option in travelAspectsOptions" :key="option" class="checkbox-option">
          <input type="checkbox" :id="option" :value="option" v-model="form['TravelAspects']"
            :disabled="form['TravelAspects'].length >= 2 && !form['TravelAspects'].includes(option)">
          <label :for="option">{{ option }}</label>
        </div>
      </div>

      <div class="divider"></div>

      <label for="travelInterests" class="title">
        {{ t('quiz.travelInterests') }}
        <br>
        <span class="text-sm font-normal">{{ t('quiz.travelInterestsSubtitle') }}</span>
      </label>
      <div class="checkbox-group">
        <div v-for="option in travelInterestsOptions" :key="option" class="checkbox-option">
          <input type="checkbox" :id="option" :value="option" v-model="form['TravelInterests']"
            :disabled="form['TravelInterests'].length >= 3 && !form['TravelInterests'].includes(option)">
          <label :for="option">{{ option }}</label>
        </div>
      </div>

      <div class="divider"></div>

      <label for="advanceBooking" class="title">
        {{ t('quiz.advanceBooking') }}
        <br>
        <span class="text-sm font-normal">{{ t('quiz.advanceBookingSubtitle') }}</span>
      </label>
      <div class="checkbox-group">
        <div v-for="option in advanceBookingOptions" :key="option" class="checkbox-option">
          <input type="checkbox" :id="option" :value="option" v-model="form['AdvanceBooking']"
            :disabled="form['AdvanceBooking'].length >= 4 && !form['AdvanceBooking'].includes(option)">
          <label :for="option">{{ option }}</label>
        </div>
      </div>

      <div class="divider"></div>

      <label for="planningApproach" class="title">
        {{ t('quiz.planningApproach') }}
        <br>
        <span class="text-sm font-normal">{{ t('quiz.planningApproachSubtitle') }}</span>
      </label>
      <div class="radio-group">
        <div v-for="option in planningApproachOptions" :key="option" class="radio-option">
          <input type="radio" :id="option" :value="option" v-model="form['PlanningApproach']" required>
          <label :for="option">{{ option }}</label>
        </div>
      </div>

      <div class="divider"></div>

      <label for="paymentPreference" class="title">
        {{ t('quiz.paymentPreference') }}
      </label>
      <div class="radio-group">
        <div v-for="option in paymentPreferenceOptions" :key="option" class="radio-option">
          <input type="radio" :id="option" :value="option" v-model="form['PaymentPreference']" required>
          <label :for="option">{{ option }}</label>
        </div>
      </div>

      <div class="text-xl text-left my-9">
        {{ t('quiz.closing1') }} <span class="font-bold">{{ t('quiz.closing2') }}</span> {{ t('quiz.closing3') }} <span
          class="font-bold">{{ t('quiz.closing4') }}</span>.
        <br><br>
        {{ t('quiz.closing5') }} <span class="font-bold">{{ t('quiz.closing6') }}</span> {{ t('quiz.closing7') }}
        <br>
        {{ t('quiz.closing8') }}
      </div>

      <label for="email" class="title">{{ t('quiz.email') }}</label>
      <input type="email" v-model="form.Email" id="email" class="bg-white" placeholder="Email..." />

      <div v-if="responseMessage" style="margin-top: 20px; color: green;" class="text-left">
        {{ responseMessage }}
      </div>

      <button type="submit">{{ t('quiz.submit') }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const form = ref({
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
});

const ageOptions = ref([]);
const frequencyOptions = ref([]);
const areaOptions = ref([]);
const purposeOptions = ref([]);
const budgetOptions = ref([]);
const travelAspectsOptions = ref([]);
const travelInterestsOptions = ref([]);
const advanceBookingOptions = ref([]);
const planningApproachOptions = ref([]);
const paymentPreferenceOptions = ref([]);

const updateOptions = () => {
  ageOptions.value = ['15-19', '20-25', '26-35', '36-45', '46-55', '56-65', '65+'];
  frequencyOptions.value = ['0', '1-2', '3-5', '6-8', '9+'];
  areaOptions.value = [
    t('quiz.areaOptions.option1'),
    t('quiz.areaOptions.option2'),
    t('quiz.areaOptions.option3'),
    t('quiz.areaOptions.option4'),
    t('quiz.areaOptions.option5'),
    t('quiz.areaOptions.option6'),
    t('quiz.areaOptions.option7'),
  ];
  purposeOptions.value = [
    t('quiz.purposeOptions.option1'),
    t('quiz.purposeOptions.option2'),
    t('quiz.purposeOptions.option3'),
    t('quiz.purposeOptions.option4'),
  ];
  budgetOptions.value = [
    t('quiz.budgetOptions.option1'),
    t('quiz.budgetOptions.option2'),
    t('quiz.budgetOptions.option3'),
    t('quiz.budgetOptions.option4'),
    t('quiz.budgetOptions.option5'),
    t('quiz.budgetOptions.option6'),
    t('quiz.budgetOptions.option7'),
    t('quiz.budgetOptions.option8'),
  ];
  travelAspectsOptions.value = [
    t('quiz.travelAspectsOptions.option1'),
    t('quiz.travelAspectsOptions.option2'),
    t('quiz.travelAspectsOptions.option3'),
    t('quiz.travelAspectsOptions.option4'),
    t('quiz.travelAspectsOptions.option5'),
    t('quiz.travelAspectsOptions.option6'),
  ];
  travelInterestsOptions.value = [
    t('quiz.travelInterestsOptions.option1'),
    t('quiz.travelInterestsOptions.option2'),
    t('quiz.travelInterestsOptions.option3'),
    t('quiz.travelInterestsOptions.option4'),
    t('quiz.travelInterestsOptions.option5'),
    t('quiz.travelInterestsOptions.option6'),
    t('quiz.travelInterestsOptions.option7'),
  ];
  advanceBookingOptions.value = [
    t('quiz.advanceBookingOptions.option1'),
    t('quiz.advanceBookingOptions.option2'),
    t('quiz.advanceBookingOptions.option3'),
    t('quiz.advanceBookingOptions.option4'),
    t('quiz.advanceBookingOptions.option5'),
    t('quiz.advanceBookingOptions.option6'),
    t('quiz.advanceBookingOptions.option7'),
    t('quiz.advanceBookingOptions.option8'),
  ];
  planningApproachOptions.value = [
    t('quiz.planningApproachOptions.option1'),
    t('quiz.planningApproachOptions.option2'),
    t('quiz.planningApproachOptions.option3'),
    t('quiz.planningApproachOptions.option4'),
  ];
  paymentPreferenceOptions.value = [
    t('quiz.paymentPreferenceOptions.option1'),
    t('quiz.paymentPreferenceOptions.option2'),
    t('quiz.paymentPreferenceOptions.option3'),
    t('quiz.paymentPreferenceOptions.option4'),
  ];
};

watch(locale, updateOptions, { immediate: true });

const responseMessage = ref('');

const submitForm = async () => {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbw_n4R-aWwylI1ClpcIweZCSt_DjNqfM1NbQSy1mvzbPsdz7Sc2N9c60gd_UnJNswdFGQ/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(form.value),
    });
    const result = await response.json();
    if (result.result) {
      responseMessage.value = t('quiz.successMessage');
    } else {
      responseMessage.value = t('quiz.errorMessage');
    }
  } catch (error) {
    responseMessage.value = t('quiz.errorMessage');
  }
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

.title {
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

input[type="checkbox"]+label,
input[type="radio"]+label {
  padding: 10px 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  cursor: pointer;
  text-align: left;
  width: auto;
  transition: all 0.3s ease-in-out;
}

input[type="checkbox"]:hover+label,
input[type="radio"]:hover+label {
  border: 1px solid orange;
}

input[type="checkbox"]:checked+label,
input[type="radio"]:checked+label {
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
