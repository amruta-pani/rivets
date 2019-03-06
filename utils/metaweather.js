'use strict';

const axios = require('axios');
const constants = require('./app.constants');

const metaWeatherInstance = axios.create({
    baseURL: constants.META_WEATHER_BASE_URL,
    // headers: {
    // }
});

module.exports = {
    getNearbyCities: async locationObject => {
        return metaWeatherInstance.get('/search', {
                params: {
                    lattlong: `${locationObject.latitude},${locationObject.longitude}`,
                }
            })
            .then(proximityCitiesResponse => {
                if ((proximityCitiesResponse || {}).data) {
                    return proximityCitiesResponse.data || [];
                }
                return [];
            })
            .catch(error => Promise.reject(error));
    },

    getWeatherForecast: async woeid => {
        return metaWeatherInstance.get(`/${woeid}`)
            .then(weatherForecast => weatherForecast)
            .catch(error => Promise.reject(error))
    }
};