'use strict';

const axios = require('axios');
const constants = require('./app.constants');

const apiOnWaterInstance = axios.create({
    baseURL: constants.API_ON_WATER_BASE_URL
});

module.exports = {
    getOnWaterState: async latLong => {
        return apiOnWaterInstance.get(`/results/${latLong}`, {
                params: {
                    access_token: constants.API_ON_WATER_ACCESS_TOKEN
                }
            })
            .then(onWaterState => {
                if ((onWaterState || {}).data) {
                    return onWaterState.data.water;
                }
                return;
            })
            .catch(error => Promise.reject(error));
    }
};