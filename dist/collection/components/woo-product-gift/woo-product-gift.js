import { h } from "@stencil/core";
window.wooProductGiftProducts = window.wooProductGiftProducts || [];
window.adminAjaxUrl = window.adminAjaxUrl || '';
window.adminAjaxNonce = window.adminAjaxNonce || '';
export class WooProductGift {
    constructor() {
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
        const content = this.data && this.data.length > 0 && this.show ? (h("div", { class: "container" },
            h("div", { ref: el => this.popup = el, class: "popup" },
                h("h2", { class: "main-heading" }, "\u0418\u0417\u0411\u0415\u0420\u0415\u0422\u0415 \u0421\u0412\u041E\u042F \u041F\u041E\u0414\u0410\u0420\u042A\u041A"),
                h("div", { class: "row" },
                    this.data.map(product => (h("div", { class: "col-product" },
                        h("input", { type: "radio", class: "product-input", name: "product-gift", id: product.name }),
                        h("label", { htmlFor: product.name, class: "product-label" },
                            h("div", { class: "product-label__image", innerHTML: product.image }),
                            h("p", { class: "product-label__title" }, product.name),
                            h("div", { class: "product-label__variations" },
                                "\u0420\u0430\u0437\u043C\u0435\u0440",
                                h("select", { class: 'product-label__variations-select', onChange: this.onSelectChange },
                                    h("option", { value: null }, "\u0418\u0437\u0431\u0435\u0440\u0438"),
                                    product.variations.map(variation => h("option", { value: variation.id }, variation.size.toUpperCase())))))))),
                    this.error && h("div", { class: "error" }, this.error),
                    h("button", { onClick: this.addGift }, "\u0414\u043E\u0431\u0430\u0432\u0435\u0442\u0435 \u041F\u043E\u0434\u0430\u0440\u044A\u043A"),
                    h("button", { onClick: this.closePopup }, "\u041D\u0435, \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F"))))) : '';
        return content;
    }
    static get is() { return "woo-product-gift"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["woo-product-gift.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["woo-product-gift.css"]
    }; }
    static get states() { return {
        "variationID": {},
        "show": {},
        "error": {}
    }; }
}
