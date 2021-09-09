<template>
  <div class="ticket">
    <div class="mb-4">
      <h3 class="h3 text-dark-heading">{{title}}</h3>
      <p class="f3 text-dark-content">{{info}} </p>
    </div>
    <div class="mb-5">
      <h4 class="h4 mb-3 text-dark-heading">{{month}} {{day}}, {{time}}</h4>
      <div class="d-flex">
        <div class="ticket-item border-radius-medium flex-grow-1" :class="{'me-1': ticketType == 'standard', 'ms-1': ticketType == 'VIP'}" v-for="(ticket, index) in tickets" :key="index">
          <div class="ticket-content p-3">
            <h3 class="h3 text-dark-heading mb-2">{{cost}}</h3>
            <h5 class="h5 text-dark-heading mb-1">{{ticketType}}</h5>
          </div>
          <div class="svg-bg">
            <template v-if="ticketType == 'standard'">
              <scribbles-bg :fill="'gray'" />
            </template>
            <template v-if="ticketType== 'VIP'">
              <scribbles-bg :fill="'yellow'" />
            </template>
          </div>
        </div>
      </div>
      <spiner-btn :max="spases" />
    </div>
    <button-base class="mt-4" :color="'yellow'" :uppercase="true" :radius="true" :title="'ticket now'" />
  </div>
</template>

<script>
import ScribblesBg from "@/components/svgs/scribbles";
import SpinerBtn from "@/components/base/buttons/SpinerBtn";
import ButtonBase from "@/components/base/buttons/ButtonBase";

export default {
	name: "ticket",
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
		ticketType: {
			type: String,
			default: () => {}
		},
		cost: {
			type: String,
			default: () => {}
		},
		spases: {
			type: String,
			default: () => {}
		}
	},
	components: {
		ScribblesBg,
		SpinerBtn,
		ButtonBase
	}
};
</script>

<style>
</style>
