/* eslint-disable no-console */
import './config/moduleAliases';

import { sum } from '@src/example';
import { logger } from '@src/shared/utils/implementations/logger';

const result = sum(2, 2);
logger.info(13412341);
logger.info('normal string');
logger.info(['string', 'array']);
logger.info([]);
logger.info({});
logger.info({ result });
