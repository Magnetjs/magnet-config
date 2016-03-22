import test from 'ava';
import Config from '../dist/';

test('Config load basic', async function (t) {
  let defaultConfig = new Config();
  await defaultConfig.setup();

  t.is(defaultConfig.app.config.app.name, 'magnet-app');
});

test('Change directories', async function (t) {
  let changeDirConfig = new Config({}, { paths: ['/config'] });
  await changeDirConfig.setup();

  t.is(changeDirConfig.app.config.app.name, 'test');
  t.is(changeDirConfig.app.config.es5.test, 'something');
});
