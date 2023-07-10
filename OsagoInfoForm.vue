<script>
    import analyticsService from '@/services/analytics-service';
    export default {
    data: function () {
    return {
    // ...
};
},
    methods: {
    sendClosedPopUp() {
    analyticsService.sendClosedPopUp();
},
    sendOpenedPopUp() {
    analyticsService.sendOpenedPopUp();
},
    sendSendPopUpData() {
    let data = {
    phone: this.phone,
    name: this.name,
    end_insurance: this.dateEnd,
    type_id: this.insuranceType
};
    analyticsService.sendSendPopUpData(data);
},
    onSendHomePageView() {
    analyticsService.sendHomePageView();
},
    sendOsagoPageView() {
    analyticsService.sendHomePageView();
},
    onSendOsagoOrderCarEntered() {
    let params = {
    plate: plate,
    year: this.year,
    vin: this.vin,
    model: this.model,
    mark: this.mark,
    value:finalPrice,
    currency:"UAH",
    items: [
{
    item_id: this.order.tariff.id,
    item_name: this.order.tariff.slug,
    item_brand: "Ukasko",
    franchise:this.order.tariff.franchise,
    company_name:this.order.tariff.company.name,
    price: finalPrice,
    quantity: 1, // количество товара
}
    ]
};
    analyticsService.sendOsagoOrderCarEntered(params);
},
    sendOsagoBeginCheckout() {
    let params = {order_id:this.orderId,
    value:orderPrice,
    currency:"UAH",
    items: [
{
    item_id: this.order.tariff.id,
    item_name: this.order.tariff.slug,
    franchise:this.order.tariff.franchise,
    company_name:this.order.tariff.company.name,
    item_brand: "Ukasko",
    price: orderPrice,
    quantity: 1, // количество товара
}
    ]};
    analyticsService.sendOsagoBeginCheckout(params);
},
    onSendOsagoOrderCheckout() {
    let params = {order_id:this.orderId,
    value:orderPrice,
    currency:"UAH",
    items: [
{
    item_id: this.order.tariff.id,
    item_name: this.order.tariff.slug,
    franchise:this.order.tariff.franchise,
    company_name:this.order.tariff.company.name,
    item_brand: "Ukasko",
    price: orderPrice,
    quantity: 1, // количество товара
}
    ]};
    analyticsService.sendOsagoOrderCheckout(params);
},
    onSendOsagoSetPromo() {
    let params = {order_id: this.orderId, promoCode:null};
    analyticsService.sendOsagoSetPromo(params);
},
    onSendOsagoOrderAdditionalCoverSelected() {
    let params = {
    dgo_data: this.selectedDgo,
    value:finalPrice,
    currency:"UAH",
    items: [
{
    item_id: this.order.tariff.id,
    item_name: this.order.tariff.slug,
    item_brand: "Ukasko",
    franchise:this.order.tariff.franchise,
    company_name:this.order.tariff.company.name,
    price: finalPrice,
    quantity: 1, // количество товара
}
    ]
};

    analyticsService.sendOsagoOrderAdditionalCoverSelected(params);
},
    onSendOsagoOrderDocumentEntered() {
    let params = {
    documentType: this.documentType,
    documentDate: this.documentDate,
    documentIssued: this.documentIssued,
    documentSeries: this.documentSeries,
    documentNumber: this.documentNumber,
    tax_number: this.tax_number,
    address: this.address,
    birth_date: this.birth_date,
    dgo:this.dataDgo,
    value:finalPrice,
    currency:"UAH",
    items: [
{
    item_id: this.order.tariff.id,
    item_name: this.order.tariff.slug,
    item_brand: "Ukasko",
    franchise:this.order.tariff.franchise,
    company_name:this.order.tariff.company.name,
    price: finalPrice,
    quantity: 1, // количество товара
}
    ]
};
    analyticsService.sendOsagoOrderDocumentEntered(params);
},
    onSendOsagoPurchase() {
    let params = {transaction_id: this.order.id, value:finalPrice, currency:"UAH", coupon:this.promo_code,
    items: [
{
    item_id: this.order.tariff.id,
    item_name: this.order.tariff.slug,
    item_brand: "Ukasko",
    price: etalon_sum,
    discount: discont_sum,
    coupon:this.promo_code,
    franchise:this.order.tariff.franchise,
    company_name:this.order.tariff.company.name,
    quantity: 1, // количество товара
}
    ]};

    analyticsService.sendOsagoPurchase(params);
},
    onSendOsagoOrderPersonalEntered() {
    let params = {
    user_name: this.user_name,
    phone: this.phone,
    email: this.email,
    dgo:this.dataDgo,
    value:finalPrice,
    currency:"UAH",
    items: [
{
    item_id: this.order.tariff.id,
    item_name: this.order.tariff.slug,
    item_brand: "Ukasko",
    price: finalPrice,
    quantity: 1, // количество товара
}
    ]
};
    analyticsService.sendOsagoOrderPersonalEntered(params);
},
    sendOsagoSelect() {
    analyticsService.sendOsagoSelect();
},
    onSendOsagoPolicySelected() {
    const policyData = {value:finalPrice, currency:"UAH",
    items: [
{
    item_id: item.id,
    item_name: lastSegment,
    item_brand: "Ukasko",
    price: finalPrice,
    item_franchise:item.franchise,
    company:item.company.name,
    quantity: 1, // количество товара
}
    ]}
    analyticsService.sendOsagoPolicySelected(policyData);
},
    sendOsagoPolicyAddToCart() {
    const policyData = {value:finalPrice, currency:"UAH",
    items: [
{
    item_id: item.id,
    item_name: lastSegment,
    item_brand: "Ukasko",
    price: finalPrice,
    item_franchise:item.franchise,
    company:item.company.name,
    quantity: 1, // количество товара
}
    ]}
    analyticsService.sendOsagoPolicyAddToCart(policyData);
},
    sendOsagoViewItem() {
    const policyData = {value:finalPrice, currency:"UAH",
    items: [
{
    item_id: item.id,
    item_name: lastSegment,
    item_brand: "Ukasko",
    price: finalPrice,
    item_franchise:item.franchise,
    company:item.company.name,
    quantity: 1, // количество товара
}
    ]}
    analyticsService.sendOsagoViewItem(policyData);
},
},
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
