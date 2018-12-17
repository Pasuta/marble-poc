import { app } from './app';
import { Database } from './connection/Database';
import { Server } from './connection/Server';

const bootstrap = async () => {
  await Database.connect();
  await Server.create(app);
};

bootstrap();
