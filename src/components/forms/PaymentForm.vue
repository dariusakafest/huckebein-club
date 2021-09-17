<template>
  <div class="payment-form d-flex flex-column justify-content-between w-100">
    <div class="mb-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h4 class="h4 mb-0 text-white-heading">Payment details</h4>
        <button-base @click.native="goBack()" class="text-btn px-2 text-white-content" :uppercase="true" title="back" />
      </div>
      <div class="payment-item mb-3">
        <h5 class="h5 mb-0 text-white-heading">Tickets</h5>
        <h5 class="h5 mb-0 text-white-heading">4</h5>
      </div>
      <div class="payment-item mb-3">
        <h5 class="h5 mb-0 text-white-heading">Gests</h5>
        <h5 class="h5 mb-0 text-white-heading">4</h5>
      </div>
      <div class="payment-item mb-3">
        <h5 class="h5 mb-0 text-white-heading">Price</h5>
        <h5 class="h5 mb-0 text-white-heading">300$</h5>
      </div>
    </div>

    <!-- <div class="mb-4">

      <h4 class="h4 text-white-heading mb-3">Payment method</h4>

      <div class="payment-item text-center mb-3">

        <h5 class="h5 mb-0 text-white-heading">paypal</h5>
       </div>
   </div> -->

    <!-- <button-base class="mt-4 w-100 py-3" :color="'yellow'" :uppercase="true" :radius="true" title="pay now" /> -->
    <div class="text-center">
      <a href="http://" class="d-block py-3 px-4 rounded bg-yellow">
        <img class="" src="@/assets/pp-logo-100px.png" alt="" style="width: 100px">
      </a>
    </div>
  </div>
</template>

<script>
import ButtonBase from "@/components/base/buttons/ButtonBase";
export default {
	name: "payment-form",
	components: {
		// CardContainer,
		ButtonBase
	},
	computed: {
		cuurentStep: {
			get() {
				return this.$store.state.cuurentStep;
			},
			set(value) {
				this.$store.commit("cuurentStep", value);
			}
		},
		preparing: {
			get() {
				return this.$store.state.preparing;
			},
			set(value) {
				this.$store.commit("preparing", value);
			}
		}
	},
	methods: {
		goBack() {
			this.cuurentStep--;
		}
	}
};
</script>

<style>
</style>
