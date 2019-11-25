'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-a6f5fdbe.js');

window.wooProductGiftProducts = window.wooProductGiftProducts || [];
window.adminAjaxUrl = window.adminAjaxUrl || '';
window.adminAjaxNonce = window.adminAjaxNonce || '';
const WooProductGift = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.ajaxUrl = window.adminAjaxUrl;
        this.ajaxNonce = window.adminAjaxNonce;
        this.data = window.wooProductGiftProducts;
        this.variationID = null;
        this.show = true;
        this.error = null;
        this.onSelectChange = (event) => {
            this.variationID = event.target.value;
        };
        this.closePopup = () => {
            this.popup.classList.remove('active');
            this.show = false;
        };
        this.addGift = () => {
            if (!this.variationID) {
                this.error = 'Моля изберете продукт и размер';
            }
            else {
                const request = new XMLHttpRequest();
                const $this = this;
                request.open('POST', this.ajaxUrl, true);
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
                request.onload = function () {
                    if (this.status >= 200 && this.status < 400) {
                        window.location.reload();
                    }
                    else {
                        $this.error = 'Имаше грешка при връзката, моля опитайте отново.';
                    }
                };
                request.onerror = function () {
                    $this.error = 'Имаше грешка при връзката, моля опитайте отново.';
                };
                request.send('action=woo_product_gift_add&nonce=' + this.ajaxNonce + '&variation_id=' + this.variationID);
            }
        };
    }
    componentDidLoad() {
        if (this.popup)
            this.popup.classList.add('active');
    }
    render() {
        const content = this.data && this.data.length > 0 && this.show ? (core.h("div", { class: "container" }, core.h("div", { ref: el => this.popup = el, class: "popup" }, core.h("h2", { class: "main-heading" }, "\u0418\u0417\u0411\u0415\u0420\u0415\u0422\u0415 \u0421\u0412\u041E\u042F \u041F\u041E\u0414\u0410\u0420\u042A\u041A"), core.h("div", { class: "row" }, this.data.map(product => (core.h("div", { class: "col-product" }, core.h("input", { type: "radio", class: "product-input", name: "product-gift", id: product.name }), core.h("label", { htmlFor: product.name, class: "product-label" }, core.h("div", { class: "product-label__image", innerHTML: product.image }), core.h("p", { class: "product-label__title" }, product.name), core.h("div", { class: "product-label__variations" }, "\u0420\u0430\u0437\u043C\u0435\u0440", core.h("select", { class: 'product-label__variations-select', onChange: this.onSelectChange }, core.h("option", { value: null }, "\u0418\u0437\u0431\u0435\u0440\u0438"), product.variations.map(variation => core.h("option", { value: variation.id }, variation.size.toUpperCase())))))))), this.error && core.h("div", { class: "error" }, this.error), core.h("button", { onClick: this.addGift }, "\u0414\u043E\u0431\u0430\u0432\u0435\u0442\u0435 \u041F\u043E\u0434\u0430\u0440\u044A\u043A"), core.h("button", { onClick: this.closePopup }, "\u041D\u0435, \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F"))))) : '';
        return content;
    }
    static get style() { return "*{-webkit-box-sizing:inherit;box-sizing:inherit}.container{position:fixed;z-index:1000;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5)}.popup{position:absolute;overflow-y:scroll;background-color:#fff;opacity:0;padding:15px;border-radius:5px;-webkit-transition:all .3s;transition:all .3s;width:70%;height:70%}\@media screen and (max-width:768px){.popup{width:90%;height:90%}}.popup.active{opacity:1}.main-heading{text-align:center}.row{width:100%;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center}.col-product{width:25%;padding-left:15px;padding-right:15px}\@media screen and (max-width:768px){.col-product{width:50%}}\@media screen and (max-width:400px){.col-product{width:100%}}.col-product img{max-width:100%;height:auto}.product-input{opacity:0;visibility:hidden}.product-input:checked+label{opacity:1}.product-label{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;opacity:.7;overflow:hidden}.product-label:hover{cursor:pointer;opacity:1}.product-label__title{padding:0 10px;text-align:center}.product-label__variations{width:100%;height:100%;background-color:hsla(0,0%,100%,.5);-webkit-transition:opacity .3s,bottom .3s;transition:opacity .3s,bottom .3s;position:absolute;opacity:0;pointer-events:none;left:0;bottom:-100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.product-input:checked+label .product-label__variations{pointer-events:all;opacity:1;bottom:0}.product-label__variations-select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-radius:5px;padding:5px 25px 5px 10px;font-size:13px;background-image:linear-gradient(45deg,transparent 50%,grey 0),linear-gradient(135deg,grey 50%,transparent 0);background-repeat:no-repeat;background-size:5px 5px,5px 5px;background-position:calc(100% - 15px) 50%,calc(100% - 10px) 50%}.error{width:100%;text-align:center;color:red;margin-bottom:5px}button{color:#fff;padding:5px 10px;margin:0 5px;font-size:13px;font-weight:700;background-color:#43b02a;border-radius:5px}button:hover{cursor:pointer}"; }
};

exports.woo_product_gift = WooProductGift;
