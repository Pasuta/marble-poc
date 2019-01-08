import chalk from 'chalk';
import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import { config } from '../config';

export namespace Database {
  const { urlMain, urlTest } = config.db;

  const onOpen = () => {
    console.info(chalk.green(`[database] connected to ${urlMain}`));
  };

  const onError = (error: mongoose.Error) => {
    console.error(chalk.red(`[database] connection error: ${error.message}`));
    process.exit();
  };

  export const connect = () =>
    mongoose
      .connect(urlMain, { useNewUrlParser: true })
      .then(onOpen)
      .catch(onError);

  export const connectTest = () =>
    mongoose
      .connect(`${urlTest}/${uuid.v4()}`, { useNewUrlParser: true });

  export const disconnect = () =>
    mongoose.disconnect();

  export const drop = () =>
    mongoose.connection.dropDatabase();
}
