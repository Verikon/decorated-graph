"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GQL = void 0;

var _requestPromise = _interopRequireDefault(require("request-promise"));

var _events = require("events");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

;
;

class GQL extends _events.EventEmitter {
  constructor({
    endpoint
  }) {
    super();

    _defineProperty(this, "endpoint", '');

    this.endpoint = endpoint;
  }

  async query({
    query
  }) {
    try {
      const response = await (0, _requestPromise.default)({
        uri: this.endpoint,
        method: 'post',
        json: true,
        body: {
          query
        }
      });
      return Object.assign(response, {
        success: true
      });
    } catch (err) {
      return this.handle_error('query', err);
    }
  }

  handle_error(method, err, kill) {
    return {
      success: false,
      errored: true,
      message: 'Internal Server error'
    };
  }

}

exports.GQL = GQL;