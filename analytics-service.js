// я отредактировал код в соответствии с последними правками событий
// мне нужно, что-бы ты проверил код на ошибки
// далее - проанализировал на соответствие с GA4
// после - дай правки на код
// при событии "выбор ДГО" к обзему прасу добавляется цена, подскажи это верно реализовано? 
// при вводе промокода вычитается % скидки из цены, подскажи это верно реализовано?
// и следом напиши короткую чёткую пошаговоую инструкцию для GTM по интеграции всех этих событий


import Vue from "vue";
import VueGtag from "vue-gtag";

const GA_MEASUREMENT_ID = "G-5QPSXPXSR3";

Vue.use(VueGtag, {
  config: { id: GA_MEASUREMENT_ID },
});

const selectedPolicyData = {
  transactionId: null,
  itemId: null,
  itemName: null,
  price: null,
  currency: null,
  itemVariant: null,
  dgoPrice: 0,
  discount: 0,
};

const analyticsService = {
	
  // Событие просмотр главной страницы
  sendHomePageView(homepageData) {
    Vue.$gtag.event("home_page_view", {
      contact_data: homepageData,
    });
  },

  // Событие просмотр целевой страницы ОСАГО
  sendOsagoPageView(osagopageData) {
    Vue.$gtag.event("osago_page_view", {
      contact_data: osagopageData,
    });
  },
  
  // Не выбрал никакого предложения и ушёл
  sendOsagoSelect(osagoselectData) {
    Vue.$gtag.event("osago_select", {
      contact_data: osagoselectData,
    });
  },

	// Событие выбора полиса
	sendOsagoOrderSelected(orderData) {
		selectedPolicyData.transactionId = orderData.transactionId;
		selectedPolicyData.itemId = orderData.id;
		selectedPolicyData.itemName = orderData.type;
		selectedPolicyData.price = orderData.amount;
		selectedPolicyData.currency = orderData.currency;
		selectedPolicyData.itemVariant = orderData.variant;
	
		Vue.$gtag.event("osago_order_selected", {
			items: [
			{
				item_id: orderData.id,
				item_name: orderData.type,
				price: orderData.amount,
				currency: orderData.currency,
				item_variant: orderData.variant,
			},
			],
		});
	},


  // Событие ввода контактной информации
  sendContactInfoEntered(contactData) {
    Vue.$gtag.event("osago_order_personal_entered", {
      contact_data: contactData,
    });
  },

  // Событие ввода данных автомобиля
  sendOsagoOrderCarEntered(carData) {
    Vue.$gtag.event("osago_order_car_entered", {
      car_data: carData,
    });
  },

  // Событие ввода данных документов
  sendOsagoOrderDocumentsEntered(documentData) {
    Vue.$gtag.event("osago_order_document_entered", {
      document_data: documentData,
    });
  },

  // Событие выбора DGO (его можно выбрать и на всём пути + добавляется в корзину (формально)
	sendOsagoorderAdditionalCoverSelected(dgoData) {
		selectedPolicyData.dgoPrice = dgoData.price;

		Vue.$gtag.event("osago_order_additional_cover_selected", {
			dgo_data: dgoData,
		});
	},


  // Событие создания контракта - договор и оплата + данные промокода
  sendOsagoOrderCheckout(contractData, promoCodeData) {
    selectedPolicyData.discount = promoCodeData.discount;
	
    Vue.$gtag.event("osago_order_checkout", {
      contract_data: contractData,
      promo_code_data: promoCodeData,
    });
  },

	sendOsagoPurchase(amount, currency, transactionId) {
		const finalPrice = (selectedPolicyData.price + selectedPolicyData.dgoPrice) * (1 - selectedPolicyData.discount);

		Vue.$gtag.event("osago_purchase", {
			transaction_id: transactionId,
			value: finalPrice,
			currency: currency,
			items: [
			{
				item_id: selectedPolicyData.itemId,
				item_name: selectedPolicyData.itemName,
				price: finalPrice,
				currency: selectedPolicyData.currency,
				quantity: 1,
			},
			],
	});
	},
}; 

export default analyticsService;
