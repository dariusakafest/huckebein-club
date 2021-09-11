<template>
  <div class="d-flex flex-column justify-content-between w-100">
    <div class="mb-4">
      <h2 class="h2 text-white-heading mt-2">Book ticket</h2>
    </div>
    <div class="mb-3">
      <personal-form fullName email/>
      <spiner-btn :max="spases" />
      <div class="d-flex mt-3">
        <div class="ticket-item border-radius-medium flex-grow-1" :class="{'me-1': ticket.type == 'standard', 'ms-1': ticket.type == 'VIP'}" v-for="(ticket, index) in tickets" :key="index">
          <div class="ticket-content p-3">
            <h3 class="h3 text-dark-heading mb-2">{{ticket.cost}}</h3>
            <h5 class="h5 text-dark-heading mb-0">{{ticket.type}}</h5>
          </div>
          <div class="svg-bg">
            <template v-if="ticket.type == 'standard'">
              <scribbles-bg fill="white" />
            </template>
            <template v-if="ticket.type == 'VIP'">
              <scribbles-bg fill="white" />
            </template>
          </div>
        </div>
      </div>

    </div>
    <button-base @click.native="goNext()" class="mt-4 w-100 py-3" :color="'yellow'" :uppercase="true" :radius="true" :title="'continue'" />
  </div>
</template>

<script>
import ButtonBase from "@/components/base/buttons/ButtonBase";
import ScribblesBg from "@/components/svgs/scribbles";
import PersonalForm from "@/components/forms/PersonalForm";
import SpinerBtn from "@/components/base/buttons/SpinerBtn";

export default {
	name: "ticket-info",
	props: {
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
		PersonalForm,
		ScribblesBg,
		SpinerBtn,
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
		}
	},
	methods: {
		goNext() {
			this.cuurentStep++;
		}
	}
};
</script>

<style>
</style>
