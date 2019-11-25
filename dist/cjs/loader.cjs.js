'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-a6f5fdbe.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["woo-product-gift.cjs",[[1,"woo-product-gift",{"variationID":[32],"show":[32],"error":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
