'use strict';

import Hapi from '@hapi/hapi';
import routes from './routes'
import plugins from './plugins'
import config from './config'
import { connect } from './mongodb'
import moment from 'moment';
import debug from './utils/debug.utils'

const NAMESPACE = `APP-${moment.utc().toISOString()}`

const init = async () => {
  const server = Hapi.server({
    port: config.port,
    host: config.host
  });
  server.route(routes);
  await server.register(plugins);
  await server.start();
  server.events.on('response', function (request) {
    // eslint-disable-next-line no-console
    console.log(request.info.remoteAddress + ': ' + request.method.toUpperCase() + ' ' + request.url.pathname + ' --> ' + request.response.statusCode);
  });
  debug.log(NAMESPACE, 'INFO: Server running on %s', server.info.uri);
  connect();
};

process.on('unhandledRejection', (err) => {
  debug.error(err.message);
  process.exit(1);
});

init();
