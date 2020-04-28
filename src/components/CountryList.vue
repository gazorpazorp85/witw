<template>
  <div>
    <div class="countries-container" :class="{ darkMode: isDarkModeOn }">
      <CountryPreview
        v-for="countryIndex in countriesToShow"
        :key="countries[countryIndex - 1].name"
        :country="countries[countryIndex - 1]"
        :isDarkModeOn="isDarkModeOn"
      />
    </div>
    <div
      class="flex center align-center pointer capitalize show-more-btn"
      @click="showMoreCountries"
      v-if="countriesToShow < max"
    >
      <div>show more</div>
    </div>
  </div>
</template>

<script>

import CountryPreview from './CountryPreview';

export default {
  props: {
    isDarkModeOn: {
      required: true
    },
    countries: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      countriesToShow: 25,
      prevCountriesLength: this.countries.length,
      max: this.countries.length
    }
  },
  components: {
    CountryPreview
  },
  beforeUpdate() {
    this.max = this.countries.length;
    if (this.prevCountriesLength !== this.max) {
      this.countriesToShow = (this.countries.length >= 25) ? 25 : this.countries.length;
      this.prevCountriesLength = this.max;
    }
  },
  methods: {
    showMoreCountries() {
      this.countriesToShow = ((this.countriesToShow + 25) < this.max) ? this.countriesToShow + 25 : this.max;
    }
  }
};
</script>