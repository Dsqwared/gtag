import Vue from "vue";
import VueGtag from "vue-gtag";

const GA_MEASUREMENT_ID = "G-5QPSXPXSR3";

Vue.use(VueGtag, {
    config: { id: GA_MEASUREMENT_ID },
});

const analyticsService = {
    sendPolicySelected(policyData) {
        Vue.prototype.$gtag.event("policy_selected", {
            value: policyData.amount,
            currency: policyData.currency,
            policy_id: policyData.id,
            policy_type: policyData.type,
        });
    },
};

export default analyticsService;
