"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GQLprop = GQLprop;

var _GQL = require("./GQL");

;
let instance;

function GQLprop({
  endpoint
}) {
  instance = instance || new _GQL.GQL({
    endpoint
  });
  return function (target, key) {
    const getter = () => instance;

    Object.defineProperty(target, key, {
      get: getter,
      enumerable: true,
      configurable: true
    });
  };
}