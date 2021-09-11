<template>
  <div class="event-preview">
    <header-image class="pb-5 pt-120" :backgroundImage="event.img" minHeight="auto" contentDisplay="flex" flexAlign="end" :overlay="true" overlay-type="base">
      <template #content>
        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-7 mb-4 align-self-end">
            <h1 class="h1 text-white-heading">{{event.date.month}}, {{event.date.day}} </h1>
            <h1 class="h1 text-white-heading">{{event.date.time}}</h1>
            <button-base class="mt-4 py-3" :color="'yellow'" :uppercase="true" :radius="true" title="Join us on Facebook" />
          </div>
          <div class="col-xl-4 col-lg-5 mb-4">
            <card-container class="bg-brown-light" :boxShadow="'large'" :radius="'large'" :textAlign="'start'">
              <template #body>
                <ticket :title="event.title" :info="event.info" :day="event.date.day" :month="event.date.month" :time="event.date.time" :tickets="event.tickets" :spases="event.spases"></ticket>
              </template>
            </card-container>
          </div>
        </div>
      </template>
    </header-image>
    <section class="event-program my-5 py-5">
      <div class="container-fluid">
        <h2 class="h2 text-white-heading mb-4">Event program</h2>
        <event-timeline :timeline="event.timeline"></event-timeline>
      </div>
    </section>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

import CardContainer from "@/components/base/card/CardContainer";
import ButtonBase from "@/components/base/buttons/ButtonBase";
import HeaderImage from "@/components/base/header/HeaderImage";
import Ticket from "@/components/ticket-system/Ticket";

import EventTimeline from "@/components/events/event-preview/EventTimeline";

export default {
	name: "event-preview",
	components: {
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
		},
		cuurentStep: {
			get() {
				return this.$store.state.cuurentStep;
			},
			set(value) {
				this.$store.commit("cuurentStep", value);
			}
		}
	},
	destroyed() {
		this.cuurentStep = 1;
	}
};
</script>

<style>
</style>
