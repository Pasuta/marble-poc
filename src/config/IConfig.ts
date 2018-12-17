export interface IConfig {
  env: NodeEnv;
  server: {
    host: string;
    port: number;
  };
  db: {
    urlMain: string;
    urlTest: string;
  };
  logger: {
    level: LoggerLevel;
  };
  jwt: {
    secret: string;
  };
}

export type LoggerLevel = 'dev' | 'prod';

export enum NodeEnv {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development',
}
