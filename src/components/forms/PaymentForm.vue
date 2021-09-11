<template>
  <div class="payment-form w-100">

    <div class="d-flex justify-content-between align-items-center mb-4">
      <h4 class="h4 mb-0 text-white-heading">Payment details</h4>
      <button-base @click.native="goBack()" class="text-btn px-2 text-white-content" :uppercase="true" title="back" />
    </div>

    <div class="mb-4">
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

    <div class="mb-4">
      <h4 class="h4 text-white-heading mb-3">Payment method</h4>
      <div class="payment-item text-center mb-3">
        <h5 class="h5 mb-0 text-white-heading">paypal</h5>
      </div>
    </div>

    <button-base class="mt-4 w-100 py-3" :color="'yellow'" :uppercase="true" :radius="true" title="pay now" />

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
