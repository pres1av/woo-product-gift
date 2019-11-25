import { Component, State, h } from '@stencil/core';

declare global {
  interface Window { wooProductGiftProducts: any, adminAjaxUrl: string, adminAjaxNonce: string }
}

window.wooProductGiftProducts = window.wooProductGiftProducts || [];
window.adminAjaxUrl = window.adminAjaxUrl || '';
window.adminAjaxNonce = window.adminAjaxNonce || '';

@Component({
  tag: 'woo-product-gift',
  styleUrl: 'woo-product-gift.scss',
  shadow: true
})
export class WooProductGift {

  ajaxUrl = window.adminAjaxUrl;
  ajaxNonce = window.adminAjaxNonce;
  data = window.wooProductGiftProducts;
  @State() variationID = null;
  @State() show = true;
  @State() error = null;
  popup;

  onSelectChange = (event) => {
    this.variationID = event.target.value;
  }

  closePopup = () => {
    this.popup.classList.remove('active');
    this.show = false;
  }

  addGift = () => {
    if (!this.variationID) {
      this.error = 'Моля изберете продукт и размер'
    } else {
      const request = new XMLHttpRequest();
      const $this = this;
      request.open('POST', this.ajaxUrl, true);
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
          window.location.reload();
        } else {
          $this.error = 'Имаше грешка при връзката, моля опитайте отново.';
        }
      };
      request.onerror = function() {
        $this.error = 'Имаше грешка при връзката, моля опитайте отново.';
      };
      request.send('action=woo_product_gift_add&nonce=' + this.ajaxNonce + '&variation_id=' + this.variationID);
    }
  }

  componentDidLoad() {
    if (this.popup) this.popup.classList.add('active');
  }

  render() {
    const content = this.data && this.data.length > 0 && this.show ? (<div class="container">
      <div ref={el => this.popup = el} class="popup">
        <h2 class="main-heading">ИЗБЕРЕТЕ СВОЯ ПОДАРЪК</h2>
        <div class="row">
          {this.data.map(product => (
            <div class="col-product">
              <input type="radio" class="product-input" name="product-gift" id={product.name}/>
              <label htmlFor={product.name} class="product-label">
                <div class="product-label__image" innerHTML={product.image}/>
                <p class="product-label__title">{product.name}</p>
                <div class="product-label__variations">
                  Размер
                  <select class='product-label__variations-select' onChange={this.onSelectChange}>
                    <option value={null}>Избери</option>
                    {product.variations.map(variation => <option value={variation.id}>{variation.size.toUpperCase()}</option>)}
                  </select>
                </div>
              </label>
            </div>
          ))}
          {this.error && <div class="error">{this.error}</div>}
          <button onClick={this.addGift}>Добавете Подарък</button>
          <button onClick={this.closePopup}>Не, Благодаря</button>
        </div>
      </div>
    </div>) : '';
    return content;
  }
}
