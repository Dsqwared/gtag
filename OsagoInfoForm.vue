<script>
import analyticsService from '@/services/analytics-service';

export default {
  data: function () {
    return {
      // ...
    };
  },
  methods: {
    onPolicySelected() {
      const policyData = {
        amount: this.policyAmount,
        currency: this.policyCurrency,
        id: this.policyId,
        type: this.policyType
      };
      analyticsService.sendPolicySelected(policyData);
    },

    onContactInfoEntered() {
      const contactData = this.contactData;
      analyticsService.sendContactInfoEntered(contactData);
    },

    onCarDataEntered() {
      const carData = this.carData;
      analyticsService.sendCarDataEntered(carData);
    },

    onDocumentsEntered() {
      const documentData = this.documentData;
      analyticsService.sendDocumentsEntered(documentData);
    },

    onDgoSelected() {
      const dgoData = this.dgoData;
      analyticsService.sendDgoSelected(dgoData);
    },

    onContractCreated() {
      const contractData = this.contractData;
      analyticsService.sendContractCreated(contractData);
    },

    onPurchase() {
      const amount = this.purchaseAmount;
      const currency = this.purchaseCurrency;
      const transactionId = this.transactionId; // динамический идентификатор транзакции
      const itemId = this.itemId; // динамический идентификатор товара
      const itemName = this.itemName; // динамическое имя товара

      analyticsService.sendPurchase(amount, currency, transactionId, itemId, itemName);
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
