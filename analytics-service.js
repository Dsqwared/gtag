import Vue from "vue";
import VueGtag from "vue-gtag";

const GA_MEASUREMENT_ID = "G-5QPSXPXSR3";

Vue.use(VueGtag, {
  config: { id: GA_MEASUREMENT_ID },
});

const analyticsService = {

  // Событие выбора полиса
  sendOsagoPolicySelected(policyData) {
    Vue.$gtag.event("osago_order_selected", policyData);
  },
  // Событие выбора полиса для eCom
  sendOsagoPolicyAddToCart(policyData) {
    Vue.$gtag.event("add_to_cart", policyData);
  },
  // Событие - просмотра товара для eCom
  sendOsagoViewItem(policyData) {
    Vue.$gtag.event("view_item",policyData);
  },

  // Событие ввода контактных данных
  sendOsagoOrderPersonalEntered(data) {
    Vue.$gtag.event("osago_order_personal_entered",
        data
    );
  },

  // Событие ввода данных авто
  sendOsagoOrderCarEntered(data) {
    Vue.$gtag.event("osago_order_car_entered",
        data
    );
  },

    // Событие ввода данных документов
  sendOsagoOrderDocumentEntered(documentData) {
    Vue.$gtag.event("osago_order_document_entered",
        documentData
    );
  },

  // Событие открытия главной страницы
  sendHomePageView() {
    Vue.$gtag.event("home_page_view");
  },

  // Событие выбора Осаго на главной странице
  sendOsagoPageView() {
    Vue.$gtag.event("osago_page_view");
  },

  // Событие - Ввел данные в калькуляторе, нажал кнопку “показати результати”
  sendOsagoSelect() {
    Vue.$gtag.event("osago_select");
  },


  // Событие выбора DGO
  sendOsagoOrderAdditionalCoverSelected(params) {
    Vue.$gtag.event("osago_order_additional_cover_selected", params);
  },

  // Событие - загрузилась страница договор
  sendOsagoOrderCheckout(params) {
    Vue.$gtag.event("osago_order_checkout", params);
  },

  // Событие - загрузилась страница договор для eCom
  sendOsagoBeginCheckout(params) {
    Vue.$gtag.event("begin_checkout", params);
  },

  // Событие успешной оплаты (покупки)
  sendOsagoPurchase(params) {
    Vue.$gtag.event("purchase",
        params
    );
  },


  // Применение ПромоКода
  sendOsagoSetPromo(data) {
    Vue.$gtag.event("osago_set_promo", data);
  },

    // Событие PopUp (“Зачекайте! Ви забули знижку!”) открылся
    sendOpenedPopUp() {
        Vue.$gtag.event("popup_buy_later_view");
    },
    // Событие PopUp (“Зачекайте! Ви забули знижку!”) закрылся
    sendClosedPopUp() {
        Vue.$gtag.event("popup_buy_later_closed");
    },
    // Событие PopUp (“Зачекайте! Ви забули знижку!”) Контакты отправлены
    sendSendPopUpData(data) {
        Vue.$gtag.event("popup_buy_later_entered",data);
    },
};

export default analyticsService;
