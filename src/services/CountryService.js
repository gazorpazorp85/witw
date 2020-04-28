import axios from 'axios';

const BASE_URL = 'https://restcountries.eu/rest/v2';

const Axios = axios.create({
    baseURL: BASE_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

import * as lookup from 'country-code-lookup';

export default {
    query,
    getCountryByCode
}

async function query() {
    try {
        const { data } = await Axios.get(`/all`);
        return data || [];
    } catch (err) {
        console.log('error getting countries');
    }
}

async function getCountryByCode(countryCode) {
    try {
        const { data } = await Axios.get(`/alpha?codes=${countryCode}`);
        const borders = data[0].borders;
        const convertedBorders = borders.map(border => lookup.byIso(border));
        data[0].borders = convertedBorders.filter(border => border);
        return data || {};
    } catch (err) {
        console.log('error getting country');
    }
}