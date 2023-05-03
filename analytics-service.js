import Vue from "vue";
import VueGtag from "vue-gtag";

const GA_MEASUREMENT_ID = "G-5QPSXPXSR3";

Vue.use(VueGtag, {
  config: { id: GA_MEASUREMENT_ID },
});

const analyticsService = {
  // Событие выбора полиса
    sendOsagoPolicySelected(policyData) {
    Vue.$gtag.event("osago_order_selected", {
      items: [
        {
          item_id: policyData.id, // идентификатор полиса
          item_franchise: policyData.franchise, // тип франшиза
          company: policyData.company, // Компания назв.
        },
      ],
    });
  },

  // Событие ввода контактной информации
  sendContactInfoEntered(contactData) {
    Vue.$gtag.event("contact_info_entered", {
      event_category: "engagement",
      contact_data: contactData,
    });
  },

  // Событие ввода контактных данных
  sendOsagoOrderPersonalEntered(data) {
    Vue.$gtag.event("osago_order_personal_entered",{
        event_category: "engagement",
        personal_data:data
    });
  },

  // Событие ввода данных авто
  sendOsagoOrderCarEntered(data) {
    Vue.$gtag.event("osago_order_car_entered", {
      event_category: "engagement",
      car_data: data,
    });
  },


    // Событие ввода данных документов
  sendOsagoOrderDocumentEntered(documentData) {
    Vue.$gtag.event("osago_order_document_entered", {
        event_category: "engagement",
        document_data: documentData,
    });
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
  sendOsagoOrderAdditionalCoverSelected(dgoData) {
    Vue.$gtag.event("osago_order_additional_cover_selected", {
      event_category: "engagement",
      dgo_data: dgoData,
    });
  },

  // Событие - загрузилась страница договор
  sendOsagoOrderCheckout(order_id) {
    Vue.$gtag.event("osago_order_checkout", {
      event_category: "engagement",
      order_id: order_id,
    });
  },

  // Событие успешной оплаты (покупки)
  sendOsagoPurchase(params) {
    Vue.$gtag.event("osago_purchase", {
        event_category: "engagement",
        purchase_data:params
    });
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
