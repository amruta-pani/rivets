'use strict';

require('dotenv').config();

const express = require('express');
const expressjwt = require('express-jwt');

const geoCode = require('../utils/geocode');
const metaWeather = require('../utils/metaweather');
const waterState = require('../utils/api-on-water');
const logger = require('../utils/logger').winston;
const constants = require('../utils/app.constants');

const cityRouter = express.Router();

/**
 * @module City
 * @description This is the city controller for all the city information APIs. The root node for this module is <b>/city</b> and has to preceed with base url defined in the home page and succeed with each API endpoint mentioned in each API example.
 */

/**
 * search cities. Search cities based on the input matching string. Input string is matched with City names at the beginning only and is case sensitive
 * 
 * @method GET /city/search?q=
 * 
 * @param {String} q retrieves city and other information with matching city name and provides weather info for a random nearby city.
 * 
 * @example GET /city/search?q=Warsaw
 * 
 * @returns {StandardResponse} see the properties table above
 * 
 * @version 0.1.0
 * @since 0.1.0
 * @author Hanumanthu Indrakanti <ambika.amruta.pani@gmail.com> 
 * 
 */

cityRouter.get('/search', expressjwt(constants.EXPRESS_JWT_OBJECT), async (request, response, next) => {
    try {
        if (!request.query.q || typeof request.query.q !== 'string') {
            const errorResponse = JSON.parse(JSON.stringify(constants.ERROR_CODES.MISSING_MANDATORY_PARAMETERS));
            errorResponse.error.message = 'Start typing a city name';
            if (process.env.NODE_ENV === 'development') {
                errorResponse.error.stack = 'city name is required in query params with q parameter. Check the API documentation';
            }
            response.status(400).send(errorResponse);
            return;
        }

        const latLongObject = await geoCode.getLatLong(request.query.q);
        if (!latLongObject) {
            response.status(412).send({
                success: false,
                error: {
                    code: 41201,
                    message: 'Cannot identify the location'
                }
            });
            return;
        }
        const nearbyCities = await metaWeather.getNearbyCities(latLongObject);

        logger.info('nearby cities: %o', nearbyCities);

        if (nearbyCities.length < 1) {
            const error = new Error('no cities found in proximity');
            throw error;
        }

        //Out of many nearby cities, picking up one random city

        const randomCityIndex = Math.floor(Math.random() * Math.floor(nearbyCities.length));

        const weatherForecastResponse = await metaWeather.getWeatherForecast(nearbyCities[randomCityIndex].woeid);
        const onWaterState = await waterState.getOnWaterState(weatherForecastResponse.data.latt_long);
        weatherForecastResponse.data.onWater = onWaterState;

        response.send({
            weather_forecast_for_nearby_city: weatherForecastResponse.data
        });

    } catch (error) {
        return next(error);
    }
});

/**
 * @typedef {Object} StandardResponse
 * @property {String} name
 * @property {String} country
 * @property {String} _id
 * @property {String} countryCode
 * @property {Double} latitude
 * @property {Double} longitude
 * 
 */

module.exports.cityRouter = cityRouter;