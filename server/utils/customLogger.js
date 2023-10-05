import logger from 'logger';
import fs from "fs";
import { stringifyJson, parseJson } from './objectHandler.js'
import { LogLevel } from './constants.js';

const createLogger = (logName = 'log', logInConsole = true) => {
  if (!fs.existsSync('./logs'))
    fs.mkdirSync('./logs');

  const myLogger = logger.createLogger(`./logs/${logName}-${new Date().toLocaleString('en-CA', { dateStyle: 'short' })}.json`);

  myLogger.format = (level, date, message) => {
    message = parseJson(message.trim());

    const obj = level === LogLevel.ERROR || level === LogLevel.FATAL ? { exception: message } : { message };

    if (logInConsole)
      level === LogLevel.ERROR || level === LogLevel.FATAL ? console.error(date.toLocaleString(), obj) : console.log(date.toLocaleString(), obj);

    return stringifyJson({ level: level.toUpperCase(), timestamp: date.toLocaleString(), ...obj });
  };

  return myLogger;
};

const Logger = createLogger();

export { Logger };