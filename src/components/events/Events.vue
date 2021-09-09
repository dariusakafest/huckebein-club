<template>
  <div class="upcoming-events mb-5">
    <h1 class="h1 text-white-heading text-center uppercase mb-4 mt-4">Upcoming events</h1>
    <div class="row">
      <div v-for="event in events" :key="event.id" :class="[events.length == 2 ? 'col-lg-6' : 'col-lg-4', 'mb-3']">
        <card :title="event.title" :info="event.info" :img="event.img" :day="event.date.day" :month="event.date.month" :time="event.date.time" :height="'md'" :link="event.link" :eventId="event.id" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/base/card/Card";
// import ButtonBase from "@/components/base/buttons/ButtonBase";

import { mapGetters } from "vuex";

export default {
	name: "events",
	props: {
		flexAlign: {
			type: String,
			default: () => {}
		}
	},
	components: {
		Card
		// ButtonBase
	},
	computed: {
		...mapGetters({
			events: "upcomingEvents"
		})
	},
	mounted() {
		console.log(this.events.length);
	}
};
</script>

<style>
</style>
