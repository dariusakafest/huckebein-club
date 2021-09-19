<template>
  <div class="events bg-gradient-black pt-120">
    <div class="container">
      <h2 class="h2 text-white-heading text-center uppercase mb-4 mt-4">all events</h2>
      <div class="row justify-content-center">
        <div class="col-lg-4 mb-4" v-for="event in events" :key="event.id">
          <card :id="event.id" :title="event.title" :info="event.info" :img="event.img" :day="event.date.day" :month="event.date.month" :time="event.date.time" :height="'md'" :link="event.link" :eventId="event.id" :overlay="true" overlay-type="base_with_hover">
              <template #background>
                inof reservieren tickets
              </template>
           </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/base/card/Card";
import { mapGetters } from "vuex";

export default {
	name: "events",
	components: {
		Card
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