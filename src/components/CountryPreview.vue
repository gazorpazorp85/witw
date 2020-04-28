<template>
  <router-link class="country-container" :class="{CountryPreviewDarkMode: isDarkModeOn}" :to="`/country/${country.alpha3Code}`">
    <div>
      <div class="flag-container">
        <img :src="country.flag" :alt="country.name" />
      </div>
      <div class="country-preview-info-container">
        <div class="bold country-name">{{country.name}}</div>
        <div>
          <span class="bold">Population: </span>
          <span>{{country.population | localizeNumber}}</span>
        </div>
        <div>
          <span class="bold">Region: </span>
          <span>{{country.region}}</span>
        </div>
        <div>
          <span class="bold">Capital: </span>
          <span>{{country.capital}}</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    country: {
      required: true
    },
    isDarkModeOn: {
      required: true
    }
  }
}
</script>

<style>
</style>