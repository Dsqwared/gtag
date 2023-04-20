import Vue from "vue";
import VueGtag from "vue-gtag";

const GA_MEASUREMENT_ID = "G-5QPSXPXSR3";

Vue.use(VueGtag, {
    config: { id: GA_MEASUREMENT_ID },
});

const analyticsService = {
    sendPolicySelected(policyData) {
        Vue.$gtag.event("policy_selected", {
            value: policyData.amount,
            currency: policyData.currency,
            policy_id: policyData.id,
            policy_type: policyData.type,
        });
    },

    sendContactInfoEntered(contactData) {
        Vue.$gtag.event("contact_info_entered", {
            name: contactData.name,
            surname: contactData.surname,
            phone: contactData.phone,
            email: contactData.email,
        });
    },

    sendCarDataEntered(carData) {
        Vue.$gtag.event("car_data_entered", {
            make: carData.make,
            model: carData.model,
            year: carData.year,
            registration_number: carData.registration_number,
        });
    },

    sendDocumentsEntered(documentData) {
        Vue.$gtag.event("documents_entered", {
            personal_id: documentData.personal_id,
            passport_data: documentData.passport_data,
            address: documentData.address,
        });
    },

    sendDgoSelected(dgoData) {
        Vue.$gtag.event("dgo_selected", {
            dgo_value: dgoData.dgo_value,
            dgo_currency: dgoData.dgo_currency,
        });
    },

    sendContractCreated(contractData) {
        Vue.$gtag.event("contract_created", {
            contract_id: contractData.contract_id,
            contract_date: contractData.contract_date,
        });
    },

    sendPurchase(amount, currency) {
        Vue.$gtag.event("purchase", {
            value: amount,
            currency: currency,
        });
    },
};

export default analyticsService;
