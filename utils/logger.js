const {
    createLogger,
    format,
    transports
} = require('winston');
const winstonConfig = require('winston').config;
const {
    combine,
    timestamp,
    printf
} = format;

const myFormat = printf(info => {
    return `${info.timestamp} ${info.level}: ${info.message}`;
});

const fs = require('fs');
const constants = require('./app.constants');
const process = require('process');
require('winston-daily-rotate-file');

// Create the log directory if it does not exist
if (!fs.existsSync(constants.LOGGING_DIR)) {
    fs.mkdirSync(constants.LOGGING_DIR);
}

const tsFormat = () => (new Date()).toISOString();

const logger = createLogger({
    format: combine(
        format.splat(),
        format.simple(),
        format.json(),
        // format.colorize(),
        timestamp(),
        myFormat
    ),
    levels: winstonConfig.syslog.levels,
    transports: [
        new transports.Console({
            name: 'console',
            // format: winston.format.simple(),
            timestamp: tsFormat,
            pid: process.pid,
            colorize: true,
            level: 'info'
        }),
        new transports.DailyRotateFile({
            name: 'error-file',
            filename: `${constants.LOGGING_DIR}/error_%DATE%.log`,
            level: 'error',
            pid: process.pid,
            timestamp: tsFormat,
            datePattern: 'YYYY-MM-DD',
            createTree: true,
            prettyPrint: true,
            zippedArchive: true,
            prepend: true,
            colorize: true
        }),
        new transports.DailyRotateFile({
            name: 'info-file',
            filename: `${constants.LOGGING_DIR}/info_%DATE%.log`,
            level: 'info',
            pid: process.pid,
            timestamp: tsFormat,
            datePattern: 'YYYY-MM-DD',
            createTree: true,
            prettyPrint: true,
            zippedArchive: true,
            prepend: true,
            colorize: true
        }),
        new transports.DailyRotateFile({
            name: 'debug-file',
            filename: `${constants.LOGGING_DIR}/debug_%DATE%.log`,
            level: 'debug',
            pid: process.pid,
            timestamp: tsFormat,
            datePattern: 'YYYY-MM-DD',
            createTree: true,
            prettyPrint: true,
            zippedArchive: true,
            prepend: true,
            colorize: true
        }),
        new transports.DailyRotateFile({
            name: 'emergency-file',
            filename: `${constants.LOGGING_DIR}/emergency_%DATE%.log`,
            pid: process.pid,
            level: 'emerg',
            timestamp: tsFormat,
            datePattern: 'YYYY-MM-DD',
            createTree: true,
            prettyPrint: true,
            zippedArchive: true,
            prepend: true,
            colorize: true
        }),
        new transports.DailyRotateFile({
            name: 'critical-file',
            filename: `${constants.LOGGING_DIR}/critical_%DATE%.log`,
            pid: process.pid,
            level: 'crit',
            timestamp: tsFormat,
            datePattern: 'YYYY-MM-DD',
            createTree: true,
            prettyPrint: true,
            zippedArchive: true,
            prepend: true,
            colorize: true
        })
    ],
    exceptionHandlers: [
        new transports.DailyRotateFile({
            filename: `${constants.LOGGING_DIR}/exceptions_%DATE%.log`
        })
    ],
    exitOnError: false
});

if (process.env.NODE_ENV === 'production') {
    logger.remove('console'); //Forbid console logging in production
    logger.remove('debug');
    logger.remove('silly');
    logger.remove('verbose');
}

module.exports.winston = logger;