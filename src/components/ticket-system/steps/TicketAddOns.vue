<template>
  <div class="ticket-add-ons d-flex flex-column justify-content-between">

    <div class="mb-3">
      <div class="d-flex justify-content-between align-items-center">
        <h4 class="h4 text-white-heading mt-2">Ticket options</h4>
        <button-base @click.native="goBack()" class="text-btn px-2 text-white-content" :uppercase="true" title="back" />
      </div>
      <div class="d-flex flex-column mt-5 mb-3">
        <router-link to="/seat" class="d-block border-hover h4 text-white-heading bg-brown p-4 mb-3 border-radius-medium">
          Would you like to reserve a seat or table with ticket ?
        </router-link>
        <button-base @click.native="goNext()" class="h4 text-white-heading bg-brown p-4 border-hover border-radius-medium text-start" title="Or just buy an entry ticket?" />
      </div>
    </div>

  </div>

</template>

<script>
import ButtonBase from "@/components/base/buttons/ButtonBase";

export default {
	name: "ticket-add-ons",
	components: {
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
		goNext() {
			this.cuurentStep++;
		},
		goBack() {
			this.cuurentStep--;
		}
	}
};
</script>

<style>
</style>
