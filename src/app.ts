import { httpListener } from '@marblejs/core';
import { bodyParser$ } from '@marblejs/middleware-body';
import { api$ } from './api';
import { logger$ } from './api/common/middlewares/logger.middleware';

const middlewares = [
  bodyParser$,
  logger$,
];

const effects = [
  api$,
];

export const app = httpListener({ middlewares, effects });
