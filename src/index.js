import Base from 'magnet-core/base'
import requireAll from 'require-all'
import camelCase from 'lodash/camelCase'
import isFunction from 'lodash/isFunction'
import entries from 'lodash/entries'
import defaultConfig from './config/app.js'

export default class Config extends Base {
  async setup () {
    try {
      // Get user's config
      let paths = this.options.paths || ['/server/config']
      let prepareConfigs = []

      this.app.config = defaultConfig

      if (paths && Array.isArray(paths)) {
        for (let path of paths) {
          prepareConfigs.push(this.setupConfig(process.cwd() + path))
        }
      }

      let configs = await Promise.all(prepareConfigs)

      this.app.config = Object.assign(defaultConfig, ...configs)
    } catch (err) {
      throw err
    }
  }

  async setupConfig (configPath) {
    let config = {}

    try {
      config = requireAll(configPath)
    } catch (err) {
      this.consoleTrace(err)
      return {}
    }

    try {
      for (let [key, conf] of entries(config)) {
        if (key === 'index') continue

        conf = conf.default || conf

        config[camelCase(key)] = isFunction(conf) ? conf(this.app) : conf
      }

      return config
    } catch (err) {
      this.consoleError(err)
      return {}
    }
  }

  consoleTrace (err) {
    if (this.app.log) {
      this.app.log.trace(err)
    } else {
      console.trace(err)
    }
  }

  consoleError (err) {
    if (this.app.log) {
      this.app.log.error(err)
    } else {
      console.error(err)
    }
  }
}
