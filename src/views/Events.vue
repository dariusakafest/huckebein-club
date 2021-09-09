<template>
  <div class="events">
    <div class="container">
      <!-- Reserve Form Section-->
      <SearchBar/>
      <!--  -->

      <h2 class="h2 text-white-heading text-center uppercase mb-4 mt-4">all events</h2>
      <div class="row">
        <div class="col-lg-6 mb-4" v-for="event in events" :key="event.id">
          <card :title="event.title" :info="event.info" :img="event.img" :day="event.date.day" :month="event.date.month" :time="event.date.time" :height="'md'" :link="event.link" :eventId="event.id" />
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
import SearchBar from "@/components/search-bar/SearchBar";
import Card from "@/components/base/card/Card";
import ButtonBase from "@/components/base/buttons/ButtonBase";
import { mapGetters } from "vuex";

export default {
	name: "events",
	components: {
		SearchBar,
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