import Vue from "vue";
import VueGtag from "vue-gtag";

const GA_MEASUREMENT_ID = "G-5QPSXPXSR3";

Vue.use(VueGtag, {
  config: { id: GA_MEASUREMENT_ID },
});

const analyticsService = {
  // Отправка события выбора полиса
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

  // Отправка события ввода контактной информации
  sendContactInfoEntered(contactData) {
    Vue.$gtag.event("contact_info_entered", {
      event_category: "engagement",
      contact_data: contactData, // передавайте необходимые данные контакта здесь
    });
  },

  // Отправка события ввода данных об автомобиле
  sendCarDataEntered(carData) {
    Vue.$gtag.event("car_data_entered", {
      event_category: "engagement",
      car_data: carData, // передавайте необходимые данные автомобиля здесь
    });
  },

  // Отправка события ввода данных документов
  sendDocumentsEntered(documentData) {
    Vue.$gtag.event("documents_entered", {
      event_category: "engagement",
      document_data: documentData, // передавайте необходимые данные документа здесь
    });
  },

  // Отправка события выбора ДГО
  sendDgoSelected(dgoData) {
    Vue.$gtag.event("dgo_selected", {
      event_category: "engagement",
      dgo_data: dgoData, // передавайте необходимые данные DGO здесь
    });
  },

  // Отправка события создания контракта
  sendContractCreated(contractData) {
    Vue.$gtag.event("contract_created", {
      event_category: "engagement",
      contract_data: contractData, // передавайте необходимые данные контракта здесь
    });
  },

  // Отправка события успешной оплаты
  sendPurchase(amount, currency) {
    Vue.$gtag.event("purchase", {
      transaction_id: "123456", // замените на динамический идентификатор транзакции
      value: amount, // сумма покупки
      currency: currency, // валюта покупки
      items: [
        {
          item_id: "123", // замените на динамический идентификатор товара
          item_name: "Some insurance policy", // замените на динамическое имя товара
          price: amount, // цена товара
          currency: currency, // валюта товара
          quantity: 1, // количество товара
        },
      ],
    });
  },

};

export default analyticsService;
