import mongoose from 'mongoose'
import debug from './utils/debug.utils'
import config from './config'
import moment from 'moment'

const NAMESPACE = `DATABASE-${moment.utc().toISOString()}`

export const connect = () => {
  mongoose.Promise = global.Promise;

  mongoose.connect(config.mongoUri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    poolSize: 10
  }, err => {
    if (err) {
      debug.error(NAMESPACE, 'ERROR: An error happened whilst connecting to mongodb', err);
    }
    else {
      debug.log(NAMESPACE, 'INFO: Connect to mongodb successfully.');
    }
  });
};

export const disconnect = done => {
  mongoose.disconnect(done);
};
