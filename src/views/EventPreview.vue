<template>
  <div class="event-preview">
    <header-image class="pb-5 pt-120" :backgroundImage="event.img" minHeight="auto" contentDisplay="flex" flexAlign="end" :overlay="true" overlay-type="base">
      <template #content>
        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-7 mb-4 align-self-end">
            <h1 class="h1 text-white-heading">{{event.date.month}}, {{event.date.day}} </h1>
            <h1 class="h1 text-white-heading">{{event.date.time}}</h1>
            
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
    <section class="event-infos bg-gradient-black py-5">
      <div class="container">
        <h2 class="h2 text-white-heading mb-4">About Event</h2>
        <p class="f3 text-white-content">Endlich ist es wieder so weit... wir öffnen wieder unsere Tore! Wann und wie? Das geben wir am Sonntag den 19.09. in einem LIVE Stream um 20 Uhr bekannt!</p>
        <p class="f3 text-white-content">Ausserdem spielt DJ Stargate ein fettes zwei Stunden DJ-Set für euch um die Vorfreude weiter zu steigern.</p>
        <button-base class="mt-4 py-3" :color="'yellow'" :uppercase="true" :radius="true" title="Join us on Facebook" />
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

export default {
	name: "event-preview",
	components: {
		CardContainer,
		ButtonBase,
		HeaderImage,
		Ticket
	},
	computed: {
		...mapGetters({
			events: "allEvents",
			upcomingEvents: "upcomingEvents"
		}),
		event() {
      if (this.events === null) {
        return null;
      }
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
