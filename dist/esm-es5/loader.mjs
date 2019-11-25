import { a as patchEsm, b as bootstrapLazy } from './core-99282e4a.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["woo-product-gift", [[1, "woo-product-gift", { "variationID": [32], "show": [32], "error": [32] }]]]], options);
    });
};
export { defineCustomElements };
