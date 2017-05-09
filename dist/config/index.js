"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    baseDirPath: process.cwd(),
    configDirPath: '/src/config',
    env: {
        name: process.env.NODE_ENV || 'development',
        dev: (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') || false,
        test: (process.env.NODE_ENV && process.env.NODE_ENV === 'test') || false,
        stag: (process.env.NODE_ENV && process.env.NODE_ENV === 'staging') || false,
        prod: (process.env.NODE_ENV && process.env.NODE_ENV === 'production') || false,
        development: (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') || false,
        staging: (process.env.NODE_ENV && process.env.NODE_ENV === 'staging') || false,
        production: (process.env.NODE_ENV && process.env.NODE_ENV === 'production') || false
    }
};
//# sourceMappingURL=index.js.map