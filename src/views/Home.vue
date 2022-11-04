<template>
  <div
    class="home"
    @scroll="handleScroll"
    :class="{ darkMode: isDarkModeOn }"
  >
    <div
      class="main-container home-subcontainer"
      :class="{ darkMode: isDarkModeOn }"
      id="top"
    >
      <CountryFilter
        @filterCountries="onFilterCountries"
        :isDarkModeOn="isDarkModeOn"
      />
      <CountryList :countries="countriesToShow" :isDarkModeOn="isDarkModeOn" />
      <button
        href="#"
        v-scroll-to="'#top'"
        class="pointer scroll-to-top-btn"
        :class="{ darkMode: isDarkModeOn, shown: scrollpx > 110 }"
      >
      </button>
    </div>
  </div>
</template>

<script>

import store from '@/store/store';

import CountryList from '@/components/CountryList';
import CountryFilter from '@/components/CountryFilter';

async function getCountries(routeTo, next) {
  try {
    const countries = await store.dispatch('getCountries');
    routeTo.params.countries = countries;
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
    countries: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      filterBy: { name: '', region: '' },
      scrollpx: 0
    }
  },
  components: {
    CountryList,
    CountryFilter
  },
  computed: {
    countriesToShow() {
      const lowerCaseFilterName = this.filterBy.name.toLowerCase();
      const lowerCaseRegionName = this.filterBy.region.toLowerCase();
      return this.countries.filter(country =>
        country.name.toLowerCase().includes(lowerCaseFilterName) &&
        country.region.toLowerCase().includes(lowerCaseRegionName)
      ).sort((countryA, countryB) => {
        let nameA = countryA.name.toLowerCase();
        let nameB = countryB.name.toLowerCase();
        return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
      });
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getCountries(routeTo, next);
  },
  methods: {
    onFilterCountries(filterBy) {
      this.filterBy = filterBy;
    },
    handleScroll() {
      this.scrollpx = this.$el.scrollTop;
    }
  }
}

</script>
