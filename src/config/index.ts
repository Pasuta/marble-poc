import { env } from './env';
import { IConfig, LoggerLevel, NodeEnv } from './IConfig';

export const config: IConfig = {
  env: process.env.NODE_env as NodeEnv || env.NODE_ENV,
  server: {
    host: process.env.HOST || env.SERVER_HOST,
    port: Number(process.env.PORT) || env.SERVER_PORT,
  },
  db: {
    urlMain: process.env.DB_URL_MAIN || env.DB_URL_MAIN,
    urlTest: process.env.DB_URL_TEST || env.DB_URL_TEST,
  },
  logger: {
    level: process.env.LOG_LEVEL as LoggerLevel || env.LOG_LEVEL,
  },
  jwt: {
    secret: env.JWT_SECRET,
  },
};
