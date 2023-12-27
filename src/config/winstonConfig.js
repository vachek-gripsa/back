import winston from 'winston';

const logFormat = winston.format.printf(({ level, message }) => {
  return `[${level.toUpperCase()}]: ${message}`;
});

const errorLogFormat = winston.format.printf(({ level, message, stack }) => {
  return `[${level.toUpperCase()}]: ${message}\n${stack || ''}`;
});

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(winston.format.timestamp(), logFormat),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: './logs/server.log' }),
    new winston.transports.File({
      filename: './logs/error.log',
      level: 'error',
      format: winston.format.combine(winston.format.timestamp(), errorLogFormat)
    })
  ]
});
