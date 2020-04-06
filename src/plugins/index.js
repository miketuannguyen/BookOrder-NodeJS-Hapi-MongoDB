const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const config = require('../config');

module.exports = [
  Inert,
  Vision,
  {
    plugin: HapiSwagger,
    options: {
      basePath: config.basePath,
      info: {
        title: config.pkg.name,
        version: config.pkg.version
      },
      securityDefinitions: {
        jwt: {
          type: 'apiKey',
          name: 'Authorization',
          in: 'header'
        }
      }
    }
  }
];
