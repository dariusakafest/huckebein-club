<template>
  <div class="home pt-120">
    <div class="container">
      <h2 class="h2 text-white-heading text-center uppercase mb-4 mt-4">Upcoming events</h2>
      <div class="row">
        <div class="col-lg-4 mb-4" v-for="event in events" :key="event.id">
          <card :title="event.title" :info="event.info" :img="event.img" :day="event.date.day" :month="event.date.month" :height="'md'" :link="event.link" :eventId="event.id"/>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button-base class="mt-4" :color="'yellow'" :uppercase="true" :radius="true" :title="'more events'" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/base/card/Card";
import ButtonBase from "@/components/base/buttons/ButtonBase";
import { mapGetters } from "vuex";

export default {
	name: "events",
	components: {
		Card,
		ButtonBase
	},
	data() {
		return {};
	},
	computed: {
		...mapGetters({
			events: "allEvents"
		})
	}
};
</script>