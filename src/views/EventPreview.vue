<template>
  <div class="event-preview">
    <header-image :backgroundImage="'https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-01-900x500.jpg'">
      <template #content>
        <div class="row justify-content-end">
          <div class="col-lg-4">
            <card-container :boxShadow="'large'" :radius="'large'" :textAlign="'start'">
              <template #body>

                <ticket></ticket>

              </template>
            </card-container>
          </div>
        </div>
      </template>
    </header-image>
    <section class="event-program mt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10 mt-5 mb-4" v-for="(time, index) in event.timeline" :key="index">
            <event-timeline :title="time.title" :content="time.content" :time="time.time"></event-timeline>
          </div>
        </div>
      </div>
    </section>

    <section class="related">
      <div class="container">
        <h2 class="h2 text-white-heading text-center uppercase mb-4 mt-4">Upcoming events</h2>
        <div class="row">
          <div class="col-lg-4" v-for="event in upcomingEvents" :key="event.id">
            <card :title="event.title" :info="event.info" :img="event.img" :day="event.date.day" :month="event.date.month" :height="'md'" :link="event.link" :eventId="event.id" />

          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button-base class="mt-4" :color="'yellow'" :uppercase="true" :radius="true" :title="'all events'" />
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

import CardContainer from "@/components/base/card/CardContainer";
import Card from "@/components/base/card/Card";
import ButtonBase from "@/components/base/buttons/ButtonBase";
import HeaderImage from "@/components/base/header/HeaderImage";
import Ticket from "@/components/ticket/Ticket";

import EventTimeline from "@/components/events/event-preview/EventTimeline";

export default {
	name: "event-preview",
	components: {
		Card,
		CardContainer,
		ButtonBase,
		HeaderImage,
		Ticket,
		EventTimeline
	},
	computed: {
		...mapGetters({
			events: "allEvents",
			upcomingEvents: "upcomingEvents"
		}),
		event() {
			return this.events.find(event => event.id == this.$route.params.id);
		}
	}
};
</script>

<style>
</style>
