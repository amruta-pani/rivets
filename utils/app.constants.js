'use strict';

require('dotenv').config();

/**
 * @module AppConstants
 */

exports.LOGGING_DIR = 'logs';

exports.META_WEATHER_BASE_URL = 'https://www.metaweather.com/api/location';
exports.GEO_CODE_BASE_URL = 'https://geocode.xyz/';
exports.GEO_CODE_API_AUTH_CODE = '163952999376719354710x1925';
exports.API_ON_WATER_BASE_URL = 'https://api.onwater.io/api/v1/';
exports.API_ON_WATER_ACCESS_TOKEN = '1ysnRFByaztj5ZAeRdzm';

/**
 * @method ERRORCODES
 *  
 * @property {Object} error
 * @property {Number} error.code
 * @property {String} error.subject brief description of the message
 * @property {String} error.message user friendly message
 * @property {Object} [error.stack] only available in development environments for debugging purposes.
 *  
 * @property {Object} SERVER_ERROR <b>http response code: 500</b>
 * @property {String} SERVER_ERROR.code <b>50001</b>
 * @property {String} SERVER_ERROR.subject <b>error/server-error</b>
 * @property {String} SERVER_ERROR.message
 * 
 * @property {Object} MISSING_MANDATORY_PARAMETERS <b>http response code: 400</b>
 * @property {String} MISSING_MANDATORY_PARAMETERS.code <b>40001</b>
 * @property {String} MISSING_MANDATORY_PARAMETERS.subject <b>validation/mandatory-parameters-missing</b>
 * @property {String} MISSING_MANDATORY_PARAMETERS.message
 * 
 * @property {Object} RESOURCE_NOT_FOUND <b>http response code: 404</b>
 * @property {String} RESOURCE_NOT_FOUND.code <b>40401</b>
 * @property {String} RESOURCE_NOT_FOUND.subject <b>error/not-found</b>
 * @property {String} RESOURCE_NOT_FOUND.message
 * 
 * @property {Object} UNAUTHORIZED <b>http response code: 401</b>
 * @property {String} UNAUTHORIZED.code <b>40101</b>
 * @property {String} UNAUTHORIZED.subject <b>auth/jwt-expired</b>
 * @property {String} UNAUTHORIZED.message
 * 
 */
exports.ERROR_CODES = {
    UNAUTHORIZED: {
        success: false,
        error: {
            code: 40101,
            subject: 'auth/jwt-expired',
            message: "auth token is required"
        }
    },

    SERVER_ERROR: {
        success: false,
        error: {
            code: 50001,
            subject: 'error/server-error'
        }
    },

    MISSING_MANDATORY_PARAMETERS: {
        success: false,
        error: {
            code: 40001,
            subject: 'validation/mandatory-parameters-missing'
        }
    },

    RESOURCE_NOT_FOUND: {
        success: false,
        error: {
            code: 40401,
            subject: 'error/not-found',
            message: 'Url not found'
        }
    }
};

exports.EXPRESS_JWT_OBJECT = {
    credentialsRequired: true,
    secret: process.env.TOKEN_SECRET,
    requestProperty: 'user',
    audience: process.env.TOKEN_AUDIENCE,
    issuer: process.env.TOKEN_ISSUER,
    // isRevoked: isRevokedCallback
};