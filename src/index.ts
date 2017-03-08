import { Module } from 'magnet-core/module'
import * as fs from 'mz/fs'
import * as requireAll from 'require-all'
import * as isPromise from 'is-promise'
import * as camelCase from 'lodash/camelCase'
import * as isFunction from 'lodash/isFunction'
import * as entries from 'lodash/entries'

import defaultConfig from './config/config.js'

export interface Config {
  baseDirPath: string
  configDirPath: string
  env: {
    dev: boolean
    test: boolean
    stag: boolean
    prod: boolean
  }
  [propName: string]: any
}

export default class MagnetConfig extends Module {
  async setup () {
    try {
      this.app.config = Object.assign(defaultConfig, this.options)

      const config: any = await this.setupConfig(
        this.app.config.baseDirPath + this.app.config.configDirPath
      )

      this.app.config = Object.assign(defaultConfig, config)
    } catch (err) {
      throw err
    }
  }

  async setupConfig (configPath: string): Promise<any> {
    let config = {}

    try {
      await fs.stat(configPath)
      config = requireAll(configPath)
    } catch (err) {
      if (err.code === 'ENOENT') {
        this.log.warn(err)
      } else {
        this.log.error(err)
      }

      return {}
    }

    try {
      for (let [key, conf] of entries(config)) {
        if (key === 'index') continue

        conf = conf.default || conf

        if (isFunction(conf)) {
          config[camelCase(key)] = isFunction(conf) ? conf(this.app) : conf
          if (isPromise(config[camelCase(key)])) {
            config[camelCase(key)] = await config[camelCase(key)]
          }
        } else {
          config[camelCase(key)] = conf
        }
      }

      return config
    } catch (err) {
      this.app.log.error(err)
      return {}
    }
  }
}
