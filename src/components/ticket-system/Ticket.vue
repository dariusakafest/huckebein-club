<template>
  <div class="ticket ticket-wrap d-flex w-100">

    <template v-if="cuurentStep == 1">
      <TicketInfo :ticketType="ticketType" :title="title" :info="info" :day="day" :month="month" :time="time" :tickets="tickets" :spases="spases" />
    </template>
    <!-- <template v-if="cuurentStep == 2">
      <TicketAddOns />
    </template> -->
    <template v-if="cuurentStep == 2">
      <PaymentForm />
    </template>

  </div>
</template>

<script>
import TicketInfo from "./steps/TicketInfo.vue";
// import TicketAddOns from "./steps/TicketAddOns";
import PaymentForm from "../forms/PaymentForm";

export default {
	name: "ticket",
	props: {
		ticketType: {
			type: String,
			default: () => {}
		},
		title: {
			type: String,
			default: () => {}
		},
		info: {
			type: String,
			default: () => {}
		},
		day: {
			type: String,
			default: () => {}
		},
		month: {
			type: String,
			default: () => {}
		},
		time: {
			type: String,
			default: () => {}
		},
		tickets: {
			type: Array,
			default: () => {}
		},
		spases: {
			type: Number,
			default: () => {}
		}
	},
	components: {
		TicketInfo,
		// TicketAddOns,
		PaymentForm
	},
	data() {
		return {
			// TicketInfo
		};
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
		prepar() {
			setTimeout(function() {
				this.preparing = true;
			}, 500);
		}
	}
};
</script>

<style>
</style>
