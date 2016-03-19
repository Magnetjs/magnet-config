const base = process.cwd();
const serverPath = `${base}/server`;

export default {
  app: {
    name: 'magnet-app'
  },

  server: {
    port: 3000
  },

  paths: {
    base,
    client: `${base}/client`,
    public: `${base}/public`,
    share: {
      schema: `${base}/isomorphic`
    },
    server: {
      base: serverPath,
      config: `${serverPath}/config`,
      controller: `${serverPath}/controllers`,
      queue: `${serverPath}/queues`,
      scheduler: `${serverPath}/schedulers`,
      log: 'logs',
      model: `${serverPath}/models`,
      module: `${serverPath}/modules`,
      view: `${serverPath}/views`,
      acl: `${serverPath}/acl`,
    }
  }
};
