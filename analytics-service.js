import Vue from "vue";
import VueGtag from "vue-gtag";

const GA_MEASUREMENT_ID = "G-5QPSXPXSR3";

Vue.use(VueGtag, {
    config: { id: GA_MEASUREMENT_ID },
});

const analyticsService = {
    sendPolicySelected(policyData) {
        Vue.$gtag.event("select_item", {
            items: [
                {
                    item_id: policyData.id,
                    item_name: policyData.type,
                    item_category: "policy",
                    price: policyData.amount,
                    currency: policyData.currency,
                },
            ],
        });
    },
    sendDgoSelected(dgoData) {
        Vue.$gtag.event("dgo_selected", {
            dgo_id: dgoData.id,
            dgo_name: dgoData.name,
        });
    },
    sendContactInfoEntered() {
        Vue.$gtag.event("begin_checkout", {
            checkout_step: 1,
            step_label: "contact_info_entered",
        });
    },
    sendCarDataEntered() {
        Vue.$gtag.event("begin_checkout", {
            checkout_step: 2,
            step_label: "car_data_entered",
        });
    },
    sendDocumentsEntered() {
        Vue.$gtag.event("begin_checkout", {
            checkout_step: 3,
            step_label: "documents_entered",
        });
    },
    sendContractCreated(contractData) {
        Vue.$gtag.event("contract_created", {
            contract_id: contractData.id,
            contract_type: contractData.type,
        });
    },
    sendPaymentSuccess(purchaseData) {
        Vue.$gtag.event("purchase", {
            transaction_id: purchaseData.transaction_id,
            value: purchaseData.amount,
            currency: purchaseData.currency,
            items: [
                {
                    item_id: purchaseData.policy_id,
                    item_name: purchaseData.policy_type,
                    item_category: "policy",
                    price: purchaseData.amount,
                    currency: purchaseData.currency,
                },
            ],
        });
    },
};

export default analyticsService;
