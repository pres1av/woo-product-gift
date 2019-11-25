import { r as registerInstance, h } from './core-99282e4a.js';
window.wooProductGiftProducts = window.wooProductGiftProducts || [];
window.adminAjaxUrl = window.adminAjaxUrl || '';
window.adminAjaxNonce = window.adminAjaxNonce || '';
var WooProductGift = /** @class */ (function () {
    function WooProductGift(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.ajaxUrl = window.adminAjaxUrl;
        this.ajaxNonce = window.adminAjaxNonce;
        this.data = window.wooProductGiftProducts;
        this.variationID = null;
        this.show = true;
        this.error = null;
        this.onSelectChange = function (event) {
            _this.variationID = event.target.value;
        };
        this.closePopup = function () {
            _this.popup.classList.remove('active');
            _this.show = false;
        };
        this.addGift = function () {
            if (!_this.variationID) {
                _this.error = 'Моля изберете продукт и размер';
            }
            else {
                var request = new XMLHttpRequest();
                var $this_1 = _this;
                request.open('POST', _this.ajaxUrl, true);
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
                request.onload = function () {
                    if (this.status >= 200 && this.status < 400) {
                        window.location.reload();
                    }
                    else {
                        $this_1.error = 'Имаше грешка при връзката, моля опитайте отново.';
                    }
                };
                request.onerror = function () {
                    $this_1.error = 'Имаше грешка при връзката, моля опитайте отново.';
                };
                request.send('action=woo_product_gift_add&nonce=' + _this.ajaxNonce + '&variation_id=' + _this.variationID);
            }
        };
    }
    WooProductGift.prototype.componentDidLoad = function () {
        if (this.popup)
            this.popup.classList.add('active');
    };
    WooProductGift.prototype.render = function () {
        var _this = this;
        var content = this.data && this.data.length > 0 && this.show ? (h("div", { class: "container" }, h("div", { ref: function (el) { return _this.popup = el; }, class: "popup" }, h("h2", { class: "main-heading" }, "\u0418\u0417\u0411\u0415\u0420\u0415\u0422\u0415 \u0421\u0412\u041E\u042F \u041F\u041E\u0414\u0410\u0420\u042A\u041A"), h("div", { class: "row" }, this.data.map(function (product) { return (h("div", { class: "col-product" }, h("input", { type: "radio", class: "product-input", name: "product-gift", id: product.name }), h("label", { htmlFor: product.name, class: "product-label" }, h("div", { class: "product-label__image", innerHTML: product.image }), h("p", { class: "product-label__title" }, product.name), h("div", { class: "product-label__variations" }, "\u0420\u0430\u0437\u043C\u0435\u0440", h("select", { class: 'product-label__variations-select', onChange: _this.onSelectChange }, h("option", { value: null }, "\u0418\u0437\u0431\u0435\u0440\u0438"), product.variations.map(function (variation) { return h("option", { value: variation.id }, variation.size.toUpperCase()); })))))); }), this.error && h("div", { class: "error" }, this.error), h("button", { onClick: this.addGift }, "\u0414\u043E\u0431\u0430\u0432\u0435\u0442\u0435 \u041F\u043E\u0434\u0430\u0440\u044A\u043A"), h("button", { onClick: this.closePopup }, "\u041D\u0435, \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F"))))) : '';
        return content;
    };
    Object.defineProperty(WooProductGift, "style", {
        get: function () { return "*{-webkit-box-sizing:inherit;box-sizing:inherit}.container{position:fixed;z-index:1000;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5)}.popup{position:absolute;overflow-y:scroll;background-color:#fff;opacity:0;padding:15px;border-radius:5px;-webkit-transition:all .3s;transition:all .3s;width:70%;height:70%}\@media screen and (max-width:768px){.popup{width:90%;height:90%}}.popup.active{opacity:1}.main-heading{text-align:center}.row{width:100%;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center}.col-product{width:25%;padding-left:15px;padding-right:15px}\@media screen and (max-width:768px){.col-product{width:50%}}\@media screen and (max-width:400px){.col-product{width:100%}}.col-product img{max-width:100%;height:auto}.product-input{opacity:0;visibility:hidden}.product-input:checked+label{opacity:1}.product-label{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;opacity:.7;overflow:hidden}.product-label:hover{cursor:pointer;opacity:1}.product-label__title{padding:0 10px;text-align:center}.product-label__variations{width:100%;height:100%;background-color:hsla(0,0%,100%,.5);-webkit-transition:opacity .3s,bottom .3s;transition:opacity .3s,bottom .3s;position:absolute;opacity:0;pointer-events:none;left:0;bottom:-100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.product-input:checked+label .product-label__variations{pointer-events:all;opacity:1;bottom:0}.product-label__variations-select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-radius:5px;padding:5px 25px 5px 10px;font-size:13px;background-image:linear-gradient(45deg,transparent 50%,grey 0),linear-gradient(135deg,grey 50%,transparent 0);background-repeat:no-repeat;background-size:5px 5px,5px 5px;background-position:calc(100% - 15px) 50%,calc(100% - 10px) 50%}.error{width:100%;text-align:center;color:red;margin-bottom:5px}button{color:#fff;padding:5px 10px;margin:0 5px;font-size:13px;font-weight:700;background-color:#43b02a;border-radius:5px}button:hover{cursor:pointer}"; },
        enumerable: true,
        configurable: true
    });
    return WooProductGift;
}());
export { WooProductGift as woo_product_gift };
