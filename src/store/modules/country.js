import CountryService from '@/services/CountryService';

export const state = {
    countries: [],
    country: {}
}

export const mutations = {
    SET_COUNTRIES(state, countries) {
        state.countries = countries;
    },
    SET_COUNTRY(state, country) {
        state.country = country;
    }
}

export const actions = {
    async getCountries({ commit }) {
        try {
            const countries = await CountryService.query();
            commit('SET_COUNTRIES', countries);
            return countries

        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    async getCountry({ commit }, countryCode) {
        try {
            const country = await CountryService.getCountryByCode(countryCode);
            commit('SET_COUNTRY', country[0]);
            return country[0];
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}