"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("magnet-core/module");
const fs = require("mz/fs");
const requireAll = require("require-all");
const isPromise = require("is-promise");
const entries = require("lodash/entries");
const isFunction = require("lodash/isFunction");
const config_js_1 = require("./config/config.js");
class MagnetConfig extends module_1.Module {
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.app.config = Object.assign(config_js_1.default, this.options);
                const config = yield this.setupConfig(this.app.config.baseDirPath + this.app.config.configDirPath);
                this.app.config = Object.assign(config_js_1.default, config);
            }
            catch (err) {
                throw err;
            }
        });
    }
    setupConfig(configPath) {
        return __awaiter(this, void 0, void 0, function* () {
            let config = {};
            try {
                yield fs.stat(configPath);
                config = requireAll(configPath);
            }
            catch (err) {
                if (err.code === 'ENOENT') {
                    this.log.warn(err);
                }
                else {
                    this.log.error(err);
                }
                return {};
            }
            try {
                for (let [key, conf] of entries(config)) {
                    if (key === 'index')
                        continue;
                    conf = conf.default || conf;
                    key = key.replace('-', '_');
                    if (isFunction(conf)) {
                        config[key] = conf(this.app);
                        if (isPromise(config[key])) {
                            config[key] = yield config[key];
                        }
                    }
                    else {
                        config[key] = conf;
                    }
                }
                return config;
            }
            catch (err) {
                this.app.log.error(err);
                return {};
            }
        });
    }
}
exports.default = MagnetConfig;
//# sourceMappingURL=index.js.map