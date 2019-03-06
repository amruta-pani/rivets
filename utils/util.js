/* eslint-disable valid-jsdoc */
/**
 * Util is a utility module consisting of frequently used functions across the application
 * 
 * @module Util
 * @exports util
 */

'use strict';

require('dotenv').config();

const jwt = require('jsonwebtoken');
const constants = require('./app.constants');


module.exports = {

    clone: object => JSON.parse(JSON.stringify(object)),

    /**
     * Generates JW Token  for vednor with userId, vendorId and roles that the user is a member of as payload.
     * @param {Object} payloadData payload to be included in jw token
     * @param {String} payloadData.userId payload to be included in jw token
     * @param {String} jti - jwt id for revoking token
     * @param {String} expiry - token expiry in seconds
     * 
     * @return {String} jwt - JSON Web Token
     * 
     * For a full list of jwt @see {@link https://www.iana.org/assignments/jwt/jwt.xhtml| registered claims}
     */
    generateJWT: (payloadData, jti, expiry) => {
        const jwtExpiry = expiry || process.env.TOKEN_EXPIRY;
        const payload = {
            user: payloadData.userId,
            email: payloadData.email,
            gender: payloadData.gender || '',
            firstName: payloadData.firstName || '',
            lastName: payloadData.lastName || '',
            dob: payloadData.dob || 2181171150000, // setting to year 2039 as default till user dob is provided
            hasPaymentInstrument: payloadData.hasPaymentInstrument || false,
            membershipType: payloadData.membershipType,
            isProfileComplete: payloadData.isProfileComplete || false,
            jti: jti,
            iat: moment().unix(),
            exp: moment().add(jwtExpiry, 'seconds').unix(),
            iss: process.env.TOKEN_ISSUER,
            aud: process.env.TOKEN_AUDIENCE
        };

        return jwt.sign(payload, process.env.TOKEN_SECRET);
    },


};