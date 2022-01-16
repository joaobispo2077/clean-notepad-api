import { winstonLogger } from './winstonLogger';

import { LoggerContract } from '@src/shared/utils/contracts/logger';

const parseLogPayloadToWinstonFormat = <T>(payload: T): string | object => {
  if (typeof payload === 'string') {
    return payload;
  }

  return JSON.stringify(payload, null, 2);
};

const logger: LoggerContract = {
  debug: <T>(payload: T) =>
    winstonLogger.debug(parseLogPayloadToWinstonFormat(payload)),
  info: <T>(payload: T) =>
    winstonLogger.info(parseLogPayloadToWinstonFormat(payload)),
  warn: <T>(payload: T) =>
    winstonLogger.warn(parseLogPayloadToWinstonFormat(payload)),
  error: <T>(payload: T) =>
    winstonLogger.error(parseLogPayloadToWinstonFormat(payload)),
  silly: <T>(payload: T) =>
    winstonLogger.silly(parseLogPayloadToWinstonFormat(payload)),
  verbose: <T>(payload: T) =>
    winstonLogger.verbose(parseLogPayloadToWinstonFormat(payload)),
};

export { logger };
