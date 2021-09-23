<template>
  <div class="upcoming-events mb-md-5">
    <h1 class="h1 text-white-heading text-center uppercase mb-4 mt-4">nächste Events</h1>
    <div class="row justify-content-center">
      <div v-for="event in events" :key="event.id" class="event-card-wrap mb-3 col-xl-4 col-lg-5">
        <card :title="event.title" :info="event.info" :img="event.img" :day="event.date.day" :month="event.date.month" :time="event.date.time" :height="'md'" :link="event.link" :eventId="event.id" :overlay="true" overlay-type="base_with_hover">
          <template #background>
            INFO - TICKETS - RESERVIERUNG
          </template>
        </card>
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
	}
};
</script>

<style>
</style>
