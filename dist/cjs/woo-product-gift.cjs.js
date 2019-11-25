'use strict';

const core = require('./core-a6f5fdbe.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["woo-product-gift.cjs",[[1,"woo-product-gift",{"variationID":[32],"show":[32],"error":[32]}]]]], options);
});
