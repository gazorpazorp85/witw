<template>
  <div class="filter-container">
    <div v-if="toggleRegionFilter" @click.self="onToggleRegionFilter" class="screen"></div>
    <input
      type="text"
      id="txt-filter"
      :class="{countryFilterElementsDarkMode: isDarkModeOn}"
      placeholder="Search for a country..."
      @input="onFilter"
      v-model="filterBy.name"
    />
    <div class="region-filter-container" :class="{countryFilterElementsDarkMode: isDarkModeOn}">
      <div @click.self="onToggleRegionFilter" class="pointer region-filter-select-container" :class="{countryFilterElementsDarkMode: isDarkModeOn}">
        {{filterRegionInput}}
        <div v-if="this.toggleRegionFilter" class="region-filter" :class="{countryFilterElementsDarkMode: isDarkModeOn}">
        <div v-for="option in filterOptions" :key="option" @click="onSetRegionFilter($event)" class="filter-option">{{option}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    props: {
    isDarkModeOn: {
      required: true
    }
  },
  data() {
    return {
      filterBy: { name: '', region: '' },
      toggleRegionFilter: false,
      filterOptions: this.$store.state.filterOptions
    };
  },
  computed: {
    filterRegionInput() {
      return (this.filterBy.region === '') ? 'Filter by Region' : this.filterBy.region;
    }
  },
  methods: {
    onFilter() {
      this.$emit("filterCountries", this.filterBy);
    },
    onToggleRegionFilter() {
      return this.toggleRegionFilter = !this.toggleRegionFilter;
    },
    onSetRegionFilter(event) {
      const value = (event.target.textContent === 'Show All') ? '' : event.target.textContent;
      this.filterBy.region = value;
      this.onFilter();
      this.toggleRegionFilter = !this.toggleRegionFilter;
    }
  }
};
</script>

<style>
</style>