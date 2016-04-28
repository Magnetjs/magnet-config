'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var base = process.cwd();
var serverPath = base + '/server';

exports.default = {
  app: {
    name: 'magnet-app'
  },

  env: {
    dev: !process.env.NODE_ENV || process.env.NODE_ENV === 'development' || false,
    prod: process.env.NODE_ENV && process.env.NODE_ENV === 'production' || false
  },

  server: {
    port: 3000
  },

  // Experimenting
  paths: {
    base: base,
    client: base + '/client',
    public: base + '/public',
    share: {
      schema: base + '/isomorphic'
    },
    server: {
      base: serverPath,
      config: serverPath + '/config',
      controller: serverPath + '/controllers',
      queue: serverPath + '/queues',
      scheduler: serverPath + '/schedulers',
      log: 'logs',
      model: serverPath + '/models',
      module: serverPath + '/modules',
      view: serverPath + '/views',
      acl: serverPath + '/acl'
    }
  }
};