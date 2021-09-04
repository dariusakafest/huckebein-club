<template>
  <div class="event-preview">
    <event-header :backgroundImage="'https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-01-900x500.jpg'">
      <template #content>
        <div class="row justify-content-end">
          <div class="col-lg-4">
            <card-container :boxShadow="'large'" :radius="'large'" :textAlign="'start'">
              <template #body>
                <div class="mb-4">
                  <h3 class="h3 text-dark-heading">{{event.title}} {{event.id}}</h3>
                  <p class="f3 text-dark-content">{{event.info}} </p>
                </div>
                <div class="mb-5">
                  <h4 class="h4 mb-3 text-dark-heading">{{event.date.month}} {{event.date.day}}, {{event.time}}</h4>
                  <div class="d-flex">
                    <div class="ticket-item border-radius-medium flex-grow-1" :class="{'me-1': ticket.type == 'standard', 'ms-1': ticket.type == 'VIP'}"  v-for="(ticket, index) in event.tickets" :key="index">
                      <div class="ticket-content p-3">
                        <h3 class="h3 text-dark-heading mb-2">{{ticket.cost}}</h3>
                        <h5 class="h5 text-dark-heading mb-1">{{ticket.type}}</h5>
                      </div>
                      <div class="svg-bg">
                        <template v-if="ticket.type == 'standard'">
                          <scribbles-bg :fill="'gray'" />
                        </template>
                        <template v-if="ticket.type == 'VIP'">
                          <scribbles-bg :fill="'yellow'" />
                        </template>
                      </div>
                    </div>
                  </div>
                  <spiner-btn :max="event.spases" />
                </div>
                <button-base class="mt-4" :color="'yellow'" :uppercase="true" :radius="true" :title="'ticket now'" />
              </template>
            </card-container>
          </div>
        </div>
      </template>
    </event-header>
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
import ScribblesBg from "@/components/svgs/scribbles";
import SpinerBtn from "@/components/base/buttons/SpinerBtn";
import ButtonBase from "@/components/base/buttons/ButtonBase";

import EventHeader from "@/components/events/event-preview/EventHeader";
import EventTimeline from "@/components/events/event-preview/EventTimeline";

export default {
	name: "event-preview",
	components: {
		Card,
		CardContainer,
		ScribblesBg,
		SpinerBtn,
		EventHeader,
		EventTimeline,
		ButtonBase
	},
	computed: {
		...mapGetters({
			events: "allEvents",
			upcomingEvents: "upcomingEvents",
		}),
		event() {
			return this.events.find(event => event.id == this.$route.params.id);
		}
	}
};
</script>

<style>
</style>
