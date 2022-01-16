import winston, { format } from 'winston';

import { config } from '@src/config';

const { isProduction } = config.global;

const productionLogFormat = format.combine(
  format.metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] }),
  format.timestamp(),
  format.json(),
);

const formatLogDevelopment = (info: winston.Logform.TransformableInfo) => {
  const { level, timestamp, message } = info;
  return `[${level}] [${[timestamp]}]: ${message}`;
};

const developmentLogFormat = format.combine(
  format.align(),
  format.timestamp(),
  format.metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] }),
  format.printf(formatLogDevelopment),
  format.colorize({
    all: true, // Debug local log
  }),
);

const logFormat = isProduction ? productionLogFormat : developmentLogFormat;

const winstonLogger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'silly',
  exitOnError: false,
});

winstonLogger.add(
  new winston.transports.Console({
    format: logFormat,
  }),
);

export { winstonLogger };
