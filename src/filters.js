import Vue from 'vue';
// import * as countryCodeTranslator from 'i18n-iso-countries';
// import CountryService from './services/CountryService';
// const lookup = require('country-code-lookup');

Vue.filter('localizeNumber', function (number) {
    if (!number) return 0;
    return number.toLocaleString();
})

// Vue.filter('getBorderCountryName', function (borderCountry) {
//     if (!borderCountry) return '';
//     return borderCountry[0].name;
// })

// Vue.filter('getBorderCountryName', countryCode => {
//     let country = lookup.byIso(countryCode);
//     let countryName = country.country;
//     return countryName;
// })