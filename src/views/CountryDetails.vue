<template>
  <div
    class="country-details-page"
    :class="{ darkMode: isDarkModeOn }"
  >
    <div class="flex column main-container country-details-container" :class="{ darkMode: isDarkModeOn }">
      <div
        class="flex pointer capitalize back-btn"
        :class="{ backBtnDark: isDarkModeOn }"
        @click="this.goBack"
      >
        <span class="back-btn-text">back</span>
      </div>
      <div class="flex details-subcontainer">
        <div class="details-flag-container">
          <img :src="country.flag" :alt="country.name" />
        </div>
        <div class="flex column info-container">
          <div class="details-info-country-name">{{ country.name }}</div>
          <div class="flex column info-subcontainer">
            <div class="left-subcontainer">
              <div class="info-field">
                <span>Native Name:</span>
                {{ country.nativeName }}
              </div>
              <div class="info-field">
                <span>Population:</span>
                {{ country.population | localizeNumber }}
              </div>
              <div class="info-field">
                <span>Region:</span>
                {{ country.region }}
              </div>
              <div class="info-field">
                <span>Sub Region:</span>
                {{ country.subregion }}
              </div>
              <div class="info-field">
                <span>Capital:</span>
                {{ country.capital }}
              </div>
            </div>
            <div class="flex info-field">
              <span>Top Level Domain:</span>
              <div v-for="domain in country.topLevelDomain" :key="domain">
                {{ domain }}
              </div>
            </div>
            <div class="flex info-field">
              <span>Currencies:</span>
              <div v-for="currency in country.currencies" :key="currency.name">
                {{ currency.name }}
              </div>
            </div>
            <div class="flex info-field">
              <span>Languages:</span>
              <div v-for="language in country.languages" :key="language.name">
                {{ language.name }}
              </div>
            </div>
          </div>
          <div
            v-if="country.borders.length !== 0"
            class="flex border-countries-container"
          >
            <div class="category-name">Border Countries:</div>
            <router-link
              v-for="borderCountry in country.borders"
              :key="borderCountry.iso2"
              :to="`/country/${borderCountry.iso3}`"
              class="border-country-button"
              :class="{ borderCountrybtnDarkMode: isDarkModeOn }"
            >
              <div>{{ borderCountry.country }}</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import store from '@/store/store';

async function getCountry(routeTo, next) {
  try {
    const country = await store.dispatch('getCountry', routeTo.params.code);
    routeTo.params.country = country;
    next();
  } catch (error) {
    console.log(error);
    next({ name: 'not-found' });
  }
}

export default {
  props: {
    isDarkModeOn: {
      required: true
    },
    country: {
      type: Object,
      required: true
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getCountry(routeTo, next);
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getCountry(routeTo, next);
  },
  methods: {
    goBack() {
      this.$router.push('/');
    }
  }
};
</script>