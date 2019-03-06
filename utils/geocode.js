'use strict';

const axios = require('axios');
const constants = require('./app.constants');

const geoCodeInstance = axios.create({
    baseURL: constants.GEO_CODE_BASE_URL
});

module.exports = {
    getLatLong: async cityName => {
        return geoCodeInstance.get('/', {
                params: {
                    locate: cityName,
                    json: 1,
                    auth: constants.GEO_CODE_API_AUTH_CODE
                }
            })
            .then(geoCodeResponse => {
                if (((geoCodeResponse || {}).data || {}).latt && ((geoCodeResponse || {}).data || {}).longt) {
                    return {
                        latitude: parseFloat(geoCodeResponse.data.latt),
                        longitude: parseFloat(geoCodeResponse.data.longt)
                    }
                }
                throw new Error('invalid geocode API response');
            })
            .catch(error => Promise.reject(error));
    }
};