/**
 *
 * @module Index
 * @fileOverview Entry point to the application.
 * @description This is the entry point to the application. Application has a MVC architecture and all the controller modules are routed from here and models too including mongodb, redis connections are initialized and established and monitored here. An AppKey is maintained to make sure that any API defined is called from a known environment and calls from anonymous sources are forbidden. This filtering will be eventually moved to webserver level to avoid any DDoS attacks. Base URL: <b>http://localhost:3000/</b> to be appended with each controller node and specific API endpoint. The <i>latest</i> node in the base url always connects to the latest API version and replacing it with an appropriate version would provide access to respective versioned API.
 * @author Hanumanthu Indrakanti <ambika.amruta.pani@gmail.com> 
 * @version 0.1.0
 * @returns {StandardResponse} All APIs return response in a standard format
 */

'use strict';

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const constants = require('./utils/app.constants');
const logger = require('./utils/logger').winston;

// ----------API Middleware Setup--------------//


const app = express();

app.use('*', (request, response, next) => {
    if (process.env.NODE_ENV === 'development') {
        logger.info('%s is called', request.originalUrl);
    }
    next();
});


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/ping', (request, response) => {
    response.json('Bruce is alive and kicking');
});

const cityRouter = require('./controllers/city.controller').cityRouter;
app.use('/city', cityRouter);

// Error routes to be placed at the bottom of routes as the last routes to scan
app.use((request, response) => {
    response.status(404).send(constants.ERROR_CODES.RESOURCE_NOT_FOUND);
});

app.use((error, request, response, next) => {
    if (error.name === 'UnauthorizedError' && error.code != 'permission_denied') {
        response.status(401).send(constants.ERROR_CODES.UNAUTHORIZED);
        return;
    }
    return next(error);
});

// global error handler
app.use((error, request, response, next) => {
    logger.error('%o', error);
    const errorResponse = JSON.parse(JSON.stringify(constants.ERROR_CODES.SERVER_ERROR));
    if (process.env.NODE_ENV === 'development') {
        errorResponse.error.stack = error.stack || error;
    } else {
        // do not throw the error stack to end user in production
        errorResponse.error.message = error.message;
    }
    response.status(500).send(errorResponse);
});


let server;
try {
    server = app.listen(process.env.API_PORT, process.env.HOST, error => {
        if (error) {
            throw error;
        }
        logger.info('Listening on localhost: %s', process.env.API_PORT);
    });
} catch (error) {
    logger.error('Error while connecting: %o', error);
    process.exit(1);
}


process.on('SIGINT', () => {
    logger.crit('SIGINT signal received at %s', new Date());

    // Stop server from accepting new connections
    if (server) {
        server.close(error => {
            if (error) {
                logger.emerg('server is closing with the following error: %o', error);
                process.exit(1);
            }
        });
    }

    // Close all db connections here
});

process.on('uncaughtException', exception => {
    logger.error('uncaught exception received: %o', exception);
});

process.on('unhandledRejection', (reason, p) => {
    logger.info('Unhandled Rejection at: %o, reason: %o', p, reason);
    // application specific logging, throwing an error, or other logic here
});

/**
 * @typedef StandardResponse
 * @property {Object} response
 * @property {Boolean} success returns true if API is executed successfully passing all error checks else returns false with error code and message.
 * @property {Object} [error] only if success is false
 * @property {Number} [error.code] 
 * @property {String} [error.message] 
 * @property {String} [error.description] 
 * @property {String} [error.stack] 
 * @property {Object} [result] returns the API response if success is true 
 */