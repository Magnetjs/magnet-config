[![Build Status](https://travis-ci.org/Magnetjs/magnet-config.svg?branch=master)](https://travis-ci.org/Magnetjs/magnet-config)

# What it does

[![Greenkeeper badge](https://badges.greenkeeper.io/Magnetjs/magnet-config.svg)](https://greenkeeper.io/)
Compose all js files under server/config and expose it via app.config.

# Config structure
```
{
  app: {
    name: 'magnet-app'
  },

  env: {
    dev: (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') || false,
    prod: (process.env.NODE_ENV && process.env.NODE_ENV === 'production') || false,
  },

  server: {
    port: 3000
  }
}
```

### Usage
Basic
```
import magnet from 'magnet-core';
import Config from 'magnet-config';

let app = await magnet([Config]);
console.log(app.config.app.name); // magnet-app
```

Use your own path
```
import magnet from 'magnet-core';
import Config from 'magnet-config';

let app = await magnet([
  {
    module: Config,
    options: { paths: ['/tests/config'] }
  }
]);
console.log(app.config.app.name); // magnet-app
```

### Todo
1. Explore [node-config](https://github.com/lorenwest/node-config) can be use together.
- Support ts file
