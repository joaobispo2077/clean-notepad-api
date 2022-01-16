export type LoggerPayload<T> = {
  type: string;
  payload?: T;
  message?: string;
  error?: Error;
} & (
  | {
      message: string;
    }
  | {
      error: Error;
    }
);

export type LoggerSmallPayload = unknown;

export type LoggerMethod = <T>(
  payload: LoggerPayload<T> | LoggerSmallPayload,
) => void;

export type LoggerContract = {
  debug: LoggerMethod;
  info: LoggerMethod;
  warn: LoggerMethod;
  error: LoggerMethod;
  silly: LoggerMethod;
  verbose: LoggerMethod;
};
