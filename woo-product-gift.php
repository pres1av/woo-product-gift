<?php
/*
Plugin Name: Woo Product Gift
Description: A plugin to add a free gift to your cart using a Stencil Web Component
Author: Stefan Staykov
License: MIT
Version: 1.0
@wordpress-mu-plugin
*/
function woo_product_gift_enqueue_script() {
    echo '<script type="module" src="'. WPMU_PLUGIN_URL .'/woo-product-gift/www/build/woo-product-gift.esm.js"></script>'.
    '<script nomodule src="'. WPMU_PLUGIN_URL .'/woo-product-gift/build/www/woo-product-gift.js"></script>';
}
add_action('wp_head', 'woo_product_gift_enqueue_script');

function woo_product_gift_shortcode() {
    woo_product_gift_localize_cart();
    return "<woo-product-gift></woo-product-gift>";
}
add_shortcode( 'woo-product-gift', 'woo_product_gift_shortcode' );

function woo_product_gift_localize_cart() {
    global $woocommerce;
    $cart = $woocommerce->cart;
    $total = (float) $cart->get_total('edit');

    $has_discount = false;
    $has_tshirt = false;
    if ($total >= 100) {
        $has_discount = $cart->has_discount('freetee');

        if (!$has_discount) {
            $items = $cart->get_cart_contents();
            foreach ($items as $item) {
                $parent_id = $item['data']->get_parent_id();
                $price = (float) $item['data']->price;
                $categories = $parent_id > 0 ? wc_get_product($parent_id)->get_category_ids() : $item['data']->get_category_ids();
                foreach ($categories as $category) {
                    $woo_category_obj = get_term_by( 'id', absint( $category ), 'product_cat' );
                    if ($woo_category_obj->slug == "%d1%82%d0%b5%d0%bd%d0%b8%d1%81%d0%ba%d0%b8") {
                        $has_tshirt = true;
                        $total -= $price;
                    }
                }
            }
        }

        if (!$has_tshirt && !$has_discount) {
            woo_product_gift_localize_gifts();
        } else if ($total >= 100) {
            $cart->add_discount( 'freetee' );
            //wc_print_notices();
        } else {
            $cart->remove_coupon('freetee');
        }
    } else {
        $cart->remove_coupon('freetee');
    }
}

function woo_product_gift_localize_gifts() {
    $args = [ 'category' => ['тениски'] ];
    $products = wc_get_products( $args );

    $localizeProducts = [];
    foreach ($products as $product) {
        $new_product['name'] = $product->get_name();
        $new_product['image'] = $product->get_image();
        $new_product['variations'] = $product->get_visible_children();
        foreach ($new_product['variations'] as $key => $id) {
            $variation = wc_get_product($id);
            $new_variation['size'] = $variation->get_attribute('pa_размер');
            $new_variation['id'] = $id;
            $new_product['variations'][$key] = $new_variation;
        }
        $localizeProducts[] = $new_product;
    }

    foreach ( (array) $localizeProducts as $key => $value ) {
        if ( !is_scalar($value) ) {
            continue;
        }

        $localizeProducts[$key] = html_entity_decode( (string) $value, ENT_QUOTES, 'UTF-8' );
    }
    echo '<script type="text/javascript">
        window.wooProductGiftProducts = ' . wp_json_encode( $localizeProducts ) .';
        window.adminAjaxUrl = "' . admin_url( 'admin-ajax.php' ) . '"
        window.adminAjaxNonce = "' . wp_create_nonce('woo_product_gift') . '"
    </script>';
}

function woo_product_gift_add_gift() {
    global $woocommerce;
    $cart = $woocommerce->cart;
    $cart->add_to_cart($_POST['variation_id']);
    $cart->add_discount( 'freetee' );
    $response['message']	= "Successfull Request";
    echo json_encode($response);
    exit;
}
add_action( 'wp_ajax_woo_product_gift_add', 'woo_product_gift_add_gift' );
add_action( 'wp_ajax_nopriv_woo_product_gift_add', 'woo_product_gift_add_gift' );