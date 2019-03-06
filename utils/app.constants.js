'use strict';

require('dotenv').config();

/**
 * @module AppConstants
 */

exports.LOGGING_DIR = 'logs';
exports.JTI_KEY_SUFFIX = 'JTI';

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
 * @property {Object} CONFLICT_RESOURCE <b>http response code: 409</b>
 * @property {String} CONFLICT_RESOURCE.code <b>40901</b>
 * @property {String} CONFLICT_RESOURCE.subject <b>error/conflict-resource-exists</b>
 * @property {String} CONFLICT_RESOURCE.message
 * 
 * @property {Object} MISSING_MANDATORY_PARAMETERS <b>http response code: 400</b>
 * @property {String} MISSING_MANDATORY_PARAMETERS.code <b>40001</b>
 * @property {String} MISSING_MANDATORY_PARAMETERS.subject <b>validation/mandatory-parameters-missing</b>
 * @property {String} MISSING_MANDATORY_PARAMETERS.message
 * 
 * @property {Object} NOT_ACCEPTED_VALUE <b>http response code: 406</b>
 * @property {String} NOT_ACCEPTED_VALUE.code <b>40601</b>
 * @property {String} NOT_ACCEPTED_VALUE.subject <b>validation/unaccepted-value</b>
 * @property {String} NOT_ACCEPTED_VALUE.message
 * 
 * @property {Object} INVALID_INPUTS <b>http response code: 412</b>
 * @property {String} INVALID_INPUTS.code <b>41201</b>
 * @property {String} INVALID_INPUTS.subject <b>validation/invalid-input</b>
 * @property {String} INVALID_INPUTS.message
 * 
 * @property {Object} CODE_EXPIRED <b>http response code: 410</b>
 * @property {String} CODE_EXPIRED.code <b>41001</b>
 * @property {String} CODE_EXPIRED.subject <b>validation/invalid-input</b>
 * @property {String} CODE_EXPIRED.message
 * 
 * @property {Object} INVALID_CODE <b>http response code: 406</b>
 * @property {String} INVALID_CODE.code <b>40602</b>
 * @property {String} INVALID_CODE.subject <b>validation/invalid-input</b>
 * @property {String} INVALID_CODE.message
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
 * @property {Object} CONFLICT_EVENT <b>http response code: 409</b>
 * @property {String} CONFLICT_EVENT.code <b>40902</b>
 * @property {String} CONFLICT_EVENT.subject <b>event/conflict-event-exists</b>
 * @property {String} CONFLICT_EVENT.message
 * 
 * @property {Object} PAYMENT_INSTRUMENT_UNAVAILABLE <b>http response code: 412</b>
 * @property {String} PAYMENT_INSTRUMENT_UNAVAILABLE.code <b>41202</b>
 * @property {String} PAYMENT_INSTRUMENT_UNAVAILABLE.subject <b>event/payment-instrument-required</b>
 * @property {String} PAYMENT_INSTRUMENT_UNAVAILABLE.message
 * 
 * @property {Object} EXCESS_BAGGAGE <b>http response code: 412</b>
 * @property {String} EXCESS_BAGGAGE.code <b>41203</b>
 * @property {String} EXCESS_BAGGAGE.subject <b>event/excess-input</b>
 * @property {String} EXCESS_BAGGAGE.message
 * 
 * @property {Object} EXCESS_DURATION <b>http response code: 412</b>
 * @property {String} EXCESS_DURATION.code <b>41204</b>
 * @property {String} EXCESS_DURATION.subject <b>event/excess-duration</b>
 * @property {String} EXCESS_DURATION.message
 * 
 * @property {Object} EXCESS_GUESTS <b>http response code: 412</b>
 * @property {String} EXCESS_GUESTS.code <b>41205</b>
 * @property {String} EXCESS_GUESTS.subject <b>event/excess-guests</b>
 * @property {String} EXCESS_GUESTS.message
 * 
 * @property {Object} INVALID_EVENT_START_TIME <b>http response code: 412</b>
 * @property {String} INVALID_EVENT_START_TIME.code <b>41206</b>
 * @property {String} INVALID_EVENT_START_TIME.subject <b>event/invalid-event-start</b>
 * @property {String} INVALID_EVENT_START_TIME.message
 * 
 * @property {Object} INVALID_EVENT_END_TIME <b>http response code: 412</b>
 * @property {String} INVALID_EVENT_END_TIME.code <b>41207</b>
 * @property {String} INVALID_EVENT_END_TIME.subject <b>event/invalid-event-end</b>
 * @property {String} INVALID_EVENT_END_TIME.message
 * 
 * @property {Object} EVENTS_EXCEEDED <b>http response code: 412</b>
 * @property {String} EVENTS_EXCEEDED.code <b>41208</b>
 * @property {String} EVENTS_EXCEEDED.subject <b>event/event-count-exceeded</b>
 * @property {String} EVENTS_EXCEEDED.message
 * 
 * @property {Object} DRINK_TYPES_EXCEEDED <b>http response code: 412</b>
 * @property {String} DRINK_TYPES_EXCEEDED.code <b>41209</b>
 * @property {String} DRINK_TYPES_EXCEEDED.subject <b>event/drink-types-count-exceeded</b>
 * @property {String} DRINK_TYPES_EXCEEDED.message
 * 
 * @property {Object} MUSIC_GENRE_TYPES_EXCEEDED <b>http response code: 412</b>
 * @property {String} MUSIC_GENRE_TYPES_EXCEEDED.code <b>41210</b>
 * @property {String} MUSIC_GENRE_TYPES_EXCEEDED.subject <b>event/music-genre-types-count-exceeded</b>
 * @property {String} MUSIC_GENRE_TYPES_EXCEEDED.message
 * 
 * @property {Object} NON_GROUP_MEMBER <b>http response code: 403</b>
 * @property {String} NON_GROUP_MEMBER.code <b>40302</b>
 * @property {String} NON_GROUP_MEMBER.subject <b>forbidden/non-group-member</b>
 * @property {String} NON_GROUP_MEMBER.message
 * 
 * @property {Object} NON_GROUP_ADMIN <b>http response code: 403</b>
 * @property {String} NON_GROUP_ADMIN.code <b>40303</b>
 * @property {String} NON_GROUP_ADMIN.subject <b>forbidden/non-group-admin</b>
 * @property {String} NON_GROUP_ADMIN.message
 * 
 * @property {Object} EDIT_DOB_DENIED <b>http response code: 403</b>
 * @property {String} EDIT_DOB_DENIED.code <b>40306</b>
 * @property {String} EDIT_DOB_DENIED.subject <b>forbidden/edit-dob-denied</b>
 * @property {String} EDIT_DOB_DENIED.message
 * 
 * @property {Object} EDIT_GENDER_DENIED <b>http response code: 403</b>
 * @property {String} EDIT_GENDER_DENIED.code <b>40307</b>
 * @property {String} EDIT_GENDER_DENIED.subject <b>forbidden/edit-gender-denied</b>
 * @property {String} EDIT_GENDER_DENIED.message
 * 
 * @property {Object} EDIT_FIRSTNAME_DENIED <b>http response code: 403</b>
 * @property {String} EDIT_FIRSTNAME_DENIED.code <b>40308</b>
 * @property {String} EDIT_FIRSTNAME_DENIED.subject <b>forbidden/edit-firstname-denied</b>
 * @property {String} EDIT_FIRSTNAME_DENIED.message
 * 
 * @property {Object} EDIT_LASTNAME_DENIED <b>http response code: 403</b>
 * @property {String} EDIT_LASTNAME_DENIED.code <b>40309</b>
 * @property {String} EDIT_LASTNAME_DENIED.subject <b>forbidden/edit-lastname-denied</b>
 * @property {String} EDIT_LASTNAME_DENIED.message
 * 
 * @property {Object} EDIT_CITY_DENIED <b>http response code: 403</b>
 * @property {String} EDIT_CITY_DENIED.code <b>40310</b>
 * @property {String} EDIT_CITY_DENIED.subject <b>forbidden/edit-city-denied</b>
 * @property {String} EDIT_CITY_DENIED.message
 * 
 * @property {Object} OPERATION_DENIED <b>http response code: 403</b>
 * @property {String} OPERATION_DENIED.code <b>40311</b>
 * @property {String} OPERATION_DENIED.subject <b>forbidden/operation-denied</b>
 * @property {String} OPERATION_DENIED.message
 * 
 * @property {Object} SEATS_UNAVAILABLE <b>http response code: 412</b>
 * @property {String} SEATS_UNAVAILABLE.code <b>41211</b>
 * @property {String} SEATS_UNAVAILABLE.subject <b>event/seats-unavailable</b>
 * @property {String} SEATS_UNAVAILABLE.message
 * 
 * @property {Object} BOOKING_TIME_ENDED <b>http response code: 412</b>
 * @property {String} BOOKING_TIME_ENDED.code <b>41212</b>
 * @property {String} BOOKING_TIME_ENDED.subject <b>event/booking-time-ended</b>
 * @property {String} BOOKING_TIME_ENDED.message
 * 
 * @property {Object} DUPLICATE_REQUEST <b>http response code: 412</b>
 * @property {String} DUPLICATE_REQUEST.code <b>41213</b>
 * @property {String} DUPLICATE_REQUEST.subject <b>event/duplicate-request</b>
 * @property {String} DUPLICATE_REQUEST.message
 * 
 * @property {Object} EVENT_REQUEST_SENT <b>http response code: 412</b>
 * @property {String} EVENT_REQUEST_SENT.code <b>41214</b>
 * @property {String} EVENT_REQUEST_SENT.subject <b>event/first-request-sent</b>
 * @property {String} EVENT_REQUEST_SENT.message
 * 
 * @property {Object} EVENT_REQUEST_EXPIRED <b>http response code: 412</b>
 * @property {String} EVENT_REQUEST_EXPIRED.code <b>41215</b>
 * @property {String} EVENT_REQUEST_EXPIRED.subject <b>event/request-expired</b>
 * @property {String} EVENT_REQUEST_EXPIRED.message
 * 
 * @property {Object} TICKET_ALREADY_PURCHASED <b>http response code: 412</b>
 * @property {String} TICKET_ALREADY_PURCHASED.code <b>41216</b>
 * @property {String} TICKET_ALREADY_PURCHASED.subject <b>event/ticket-already-purchased</b>
 * @property {String} TICKET_ALREADY_PURCHASED.message
 * 
 * @property {Object} INCOMPLETE_PROFILE <b>http response code: 412</b>
 * @property {String} INCOMPLETE_PROFILE.code <b>41217</b>
 * @property {String} INCOMPLETE_PROFILE.subject <b>user/incomplete-profile</b>
 * @property {String} INCOMPLETE_PROFILE.message
 * 
 * @property {Object} NEW_GROUP_DENIED <b>http response code: 403</b>
 * @property {String} NEW_GROUP_DENIED.code <b>40312</b>
 * @property {String} NEW_GROUP_DENIED.subject <b>group/group-create-denied</b>
 * @property {String} NEW_GROUP_DENIED.message
 * 
 * @property {Object} NOT_EVENT_HOST <b>http response code: 403</b>
 * @property {String} NOT_EVENT_HOST.code <b>40313</b>
 * @property {String} NOT_EVENT_HOST.subject <b>event/not-event-host</b>
 * @property {String} NOT_EVENT_HOST.message <b>You are not a host to this event</b>
 * 
 * @property {Object} SELF_REQUEST_DENIED <b>http response code: 403</b>
 * @property {String} SELF_REQUEST_DENIED.code <b>40314</b>
 * @property {String} SELF_REQUEST_DENIED.subject <b>event/self-request-forbidden</b>
 * @property {String} SELF_REQUEST_DENIED.message <b>You are the host for this event and cannot send a self-request.</b>
 * 
 * @property {Object} NON_GUEST_LIKE <b>http response code: 403</b>
 * @property {String} NON_GUEST_LIKE.code <b>40315</b>
 * @property {String} NON_GUEST_LIKE.subject <b>event/non-guest-like</b>
 * @property {String} NON_GUEST_LIKE.message <b>You cannot mark a reaction to a person who is not an event guest</b>
 * 
 * @property {Object} DUPLICATE_REACTION <b>http response code: 403</b>
 * @property {String} DUPLICATE_REACTION.code <b>40316</b>
 * @property {String} DUPLICATE_REACTION.subject <b>event/non-guest-like</b>
 * @property {String} DUPLICATE_REACTION.message <b>You already marked your reaction to this guest for this event.</b>
 * 
 * @property {Object} NOT_ALLOWED_AGE_RANGE <b>http response code: 403</b>
 * @property {String} NOT_ALLOWED_AGE_RANGE.code <b>40317</b>
 * @property {String} NOT_ALLOWED_AGE_RANGE.subject <b>event/not-allowed-age</b>
 * @property {String} NOT_ALLOWED_AGE_RANGE.message <b>You do not fall into the required age range for this event.</b>
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