import Base from 'magnet-core/dist/base';
import requireAll from 'require-all';
import defaultConfig from './config/index.js';

export default class Config extends Base {
  async setup() {
    try {
      // Get user's config
      let paths = this.options.paths || ['/server/config'];
      let prepareConfigs = [];
      if (paths && Array.isArray(paths)) {
        for (let path of paths) {
          prepareConfigs.push(this.setupConfig(process.cwd() + path));
        }
      }
      let configs = await Promise.all(prepareConfigs);

      this.app.config = Object.assign({}, defaultConfig, ...configs);
    } catch (err) {
      throw err;
    }
  }

  async setupConfig(configPath) {
    let config = {};

    try {
      config = requireAll(configPath);
    } catch (err) {
      this.consoleTrace(err);
      return {};
    }

    try {
      for (let conf in config) {
        if (config.hasOwnProperty(conf) && conf !== 'index') {
          // To support es2015 module
          if (config[conf].default) {
            config[conf] = config[conf].default;
          } else {
            config[conf] = config[conf];
          }
        }
      }

      return config;
    } catch (err) {
      this.consoleError(err);
      return {};
    }
  }

  consoleTrace(err) {
    if (this.app.log) {
      this.app.log.trace(err);
    } else {
      console.trace(err);
    }
  }

  consoleError(err) {
    if (this.app.log) {
      this.app.log.error(err);
    } else {
      console.error(err);
    }
  }
}
