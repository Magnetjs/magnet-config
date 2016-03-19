[![Build Status](https://travis-ci.org/Magnetjs/magnet-config.svg?branch=master)](https://travis-ci.org/Magnetjs/magnet-config)

# Config structure
```
{
  app: {
    name: 'magnet-app'
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
