'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('magnet-core/dist/base');

var _base2 = _interopRequireDefault(_base);

var _requireAll = require('require-all');

var _requireAll2 = _interopRequireDefault(_requireAll);

var _camelCase = require('lodash/camelCase');

var _camelCase2 = _interopRequireDefault(_camelCase);

var _index = require('./config/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Config = function (_Base) {
  _inherits(Config, _Base);

  function Config() {
    _classCallCheck(this, Config);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Config).apply(this, arguments));
  }

  _createClass(Config, [{
    key: 'setup',
    value: function () {
      var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var paths, prepareConfigs, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, path, configs;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                // Get user's config
                paths = this.options.paths || ['/server/config'];
                prepareConfigs = [];

                if (!(paths && Array.isArray(paths))) {
                  _context.next = 23;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 7;

                for (_iterator = paths[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  path = _step.value;

                  prepareConfigs.push(this.setupConfig(process.cwd() + path));
                }
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](7);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 15:
                _context.prev = 15;
                _context.prev = 16;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 18:
                _context.prev = 18;

                if (!_didIteratorError) {
                  _context.next = 21;
                  break;
                }

                throw _iteratorError;

              case 21:
                return _context.finish(18);

              case 22:
                return _context.finish(15);

              case 23:
                _context.next = 25;
                return Promise.all(prepareConfigs);

              case 25:
                configs = _context.sent;


                this.app.config = Object.assign.apply(Object, [{}, _index2.default].concat(_toConsumableArray(configs)));
                _context.next = 32;
                break;

              case 29:
                _context.prev = 29;
                _context.t1 = _context['catch'](0);
                throw _context.t1;

              case 32:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 29], [7, 11, 15, 23], [16,, 18, 22]]);
      }));

      function setup() {
        return ref.apply(this, arguments);
      }

      return setup;
    }()
  }, {
    key: 'setupConfig',
    value: function () {
      var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(configPath) {
        var config, conf;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                config = {};
                _context2.prev = 1;

                config = (0, _requireAll2.default)(configPath);
                _context2.next = 9;
                break;

              case 5:
                _context2.prev = 5;
                _context2.t0 = _context2['catch'](1);

                this.consoleTrace(_context2.t0);
                return _context2.abrupt('return', {});

              case 9:
                _context2.prev = 9;

                for (conf in config) {
                  if (config.hasOwnProperty(conf) && conf !== 'index') {
                    // To support es2015 module
                    if (config[conf].default) {
                      config[(0, _camelCase2.default)(conf)] = config[conf].default;
                    } else {
                      config[(0, _camelCase2.default)(conf)] = config[conf];
                    }
                  }
                }

                return _context2.abrupt('return', config);

              case 14:
                _context2.prev = 14;
                _context2.t1 = _context2['catch'](9);

                this.consoleError(_context2.t1);
                return _context2.abrupt('return', {});

              case 18:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 5], [9, 14]]);
      }));

      function setupConfig(_x) {
        return ref.apply(this, arguments);
      }

      return setupConfig;
    }()
  }, {
    key: 'consoleTrace',
    value: function consoleTrace(err) {
      if (this.app.log) {
        this.app.log.trace(err);
      } else {
        console.trace(err);
      }
    }
  }, {
    key: 'consoleError',
    value: function consoleError(err) {
      if (this.app.log) {
        this.app.log.error(err);
      } else {
        console.error(err);
      }
    }
  }]);

  return Config;
}(_base2.default);

exports.default = Config;