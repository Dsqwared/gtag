import Vue from "vue";
import VueGtag from "vue-gtag";

const GA_MEASUREMENT_ID = "G-5QPSXPXSR3";

Vue.use(VueGtag, {
  config: { id: GA_MEASUREMENT_ID },
});

const analyticsService = {
  // Событие выбора полиса
  sendPolicySelected(policyData) {
    Vue.$gtag.event("select_item", {
      items: [
        {
          item_id: policyData.id, // идентификатор полиса
          item_name: policyData.type, // тип полиса
          price: policyData.amount, // сумма полиса
          currency: policyData.currency, // валюта полиса
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

  // Событие ввода данных автомобиля
  sendCarDataEntered(carData) {
    Vue.$gtag.event("car_data_entered", {
      event_category: "engagement",
      car_data: carData,
    });
  },

  // Событие ввода данных документов
  sendDocumentsEntered(documentData) {
    Vue.$gtag.event("documents_entered", {
      event_category: "engagement",
      document_data: documentData,
    });
  },

  // Событие выбора DGO
  sendDgoSelected(dgoData) {
    Vue.$gtag.event("dgo_selected", {
      event_category: "engagement",
      dgo_data: dgoData,
    });
  },

  // Событие создания контракта
  sendContractCreated(contractData) {
    Vue.$gtag.event("contract_created", {
      event_category: "engagement",
      contract_data: contractData,
    });
  },

  // Событие успешной оплаты (покупки)
  sendPurchase(amount, currency, transactionId, itemId, itemName) {
    Vue.$gtag.event("purchase", {
      transaction_id: transactionId, // динамический идентификатор транзакции
      value: amount, // сумма покупки
      currency: currency, // валюта покупки
      items: [
        {
          item_id: itemId, // динамический идентификатор товара
          item_name: itemName, // динамическое имя товара
          price: amount, // цена товара
          currency: currency, // валюта товара
          quantity: 1, // количество товара
        },
      ],
    });
  },
};

export default analyticsService;
