declare global {
    interface Window {
        wooProductGiftProducts: any;
        adminAjaxUrl: string;
        adminAjaxNonce: string;
    }
}
export declare class WooProductGift {
    ajaxUrl: string;
    ajaxNonce: string;
    data: any;
    variationID: any;
    show: boolean;
    error: any;
    popup: any;
    onSelectChange: (event: any) => void;
    closePopup: () => void;
    addGift: () => void;
    componentDidLoad(): void;
    render(): any;
}
