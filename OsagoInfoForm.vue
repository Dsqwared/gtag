<script>
import analyticsService from '@/services/analytics-service';
export default {
  data: function () {
    return {
      // ...
    };
  },
  methods: {
    onClose() {
      analyticsService.sendClosedPopUp();
    },
    onShow() {
      analyticsService.sendOpenedPopUp();
    },
    onSendPopupdata() {
      let data = {
        phone: this.phone,
        name: this.name,
        end_insurance: this.dateEnd,
        type_id: this.insuranceType,
      };
      analyticsService.sendSendPopUpData(data);
    },
    onSendHomePageView() {
      analyticsService.sendHomePageView();
    },
    onSendOsagoOrderCarEntered() {
      let params = {
        plate: plate,
        year: this.year,
        vin: this.vin,
        model: this.model,
        mark: this.mark,
      };
      analyticsService.sendOsagoOrderCarEntered(params);
    },
    onSendOsagoOrderCheckout() {
      analyticsService.sendOsagoOrderCheckout(this.orderId);
    },
    onSendOsagoSetPromo() {
      let params = { order_id: this.orderId, promoCode: this.selectedPromo };
      analyticsService.sendOsagoSetPromo(params);
    },
    onSendOsagoOrderAdditionalCoverSelected() {
      analyticsService.sendOsagoOrderAdditionalCoverSelected(this.dataDgo);
    },
    onSendOsagoOrderDocumentEntered() {
      analyticsService.sendOsagoOrderDocumentEntered(params);
    },
    onSendOsagoPurchase() {
      analyticsService.sendOsagoPurchase(params);
    },
    onSendOsagoOrderPersonalEntered() {
      analyticsService.sendOsagoOrderPersonalEntered(params);
    },
    onSendEventOsagoSelect() {
      analyticsService.sendOsagoSelect();
    },
    onSendOsagoPolicySelected() {
      const policyData = { id: item.id, franchise: item.franchise, company: item.company.name };
      analyticsService.sendOsagoPolicySelected(policyData);
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
