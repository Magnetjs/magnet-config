"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    dirPath: '/server/config',
    env: {
        dev: (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') || false,
        test: (process.env.NODE_ENV && process.env.NODE_ENV === 'test') || false,
        stag: (process.env.NODE_ENV && process.env.NODE_ENV === 'staging') || false,
        prod: (process.env.NODE_ENV && process.env.NODE_ENV === 'production') || false
    }
};
//# sourceMappingURL=app.js.map