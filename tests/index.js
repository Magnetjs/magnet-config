import test from 'tape';
import Config from '../dist/';

(async function () {
  let defaultConfig = new Config();
  let changeDirConfig = new Config({}, { paths: ['/tests/config'] });
  Promise.all([defaultConfig.setup(), changeDirConfig.setup()]);

  test('Config load basic', function (t) {
    t.equal(defaultConfig.app.config.app.name, 'magnet-app');
    t.end();
  });

  test('Change directories', function (t) {
    t.equal(changeDirConfig.app.config.app.name, 'test');
    t.equal(changeDirConfig.app.config.es5.test, 'something');
    t.end();
  });
})();
