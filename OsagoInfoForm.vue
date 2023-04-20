<script>

    import analyticsService from '@/services/analytics-service';

    export default {
    
        data: function () {
            return {
              
            };
        },
        mounted: function () {
            const policyData = { amount: 1000, currency: "UAH", id: 1232, type: "moto" };
            analyticsService.sendPolicySelected(policyData);
         },

        computed: {
          },

        watch: {
           
        },

        methods: {
        }
    }
</script>