<template>
  <div class="event-preview bg-gradient-black">
    <header-image class="pb-5 pt-120" minHeight="540px" contentDisplay="flex" flexAlign="end" :overlay="true" overlay-type="base">
      <template #background>
        <div class="card-image position-static">
          <img class="img-fluid" :src="event.img" alt="" srcset="">
        </div>
      </template>
      <template #content>
        <div class="row">
          <div class="col-xl-8 col-lg-7 align-self-end">
            <h1 class="h1 text-gradient-yellow uppercase">{{event.title}}</h1>
            <h1 class="h1 text-gradient-yellow uppercase mb-0">{{event.date.month}}, {{event.date.day}}, {{event.date.time}}</h1>
          </div>
          <div class="col-xl-4 col-lg-3 align-self-end">
            <div class="d-flex justify-content-end justify-content-sm-start">
              <button-base class="mt-4 px-4 py-2" :color="'yellow'" :uppercase="true" :radius="true" title="Join us on Facebook" />
            </div>
          </div>
        </div>
      </template>
    </header-image>

    <section class="event-infos">
      <div class="container">
        <div class="py-5">
          <p class="f3 text-white-content">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          <p class="f3 text-white-content">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          <div class="row gx-4">
            <div class="col-auto">
              <button-base @click.native="reservationsSelcet($event)" ref="title" class="mt-4 px-4 py-2 w-100" :color="'yellow'" :uppercase="true" :radius="true" title="reservieren" data-bs-toggle="modal" data-bs-target="#exampleModal" />
            </div>
            <div class="col-auto">
              <button-base @click.native="reservationsSelcet($event)" ref="title" class="mt-4 px-4 py-2 w-100" :color="'yellow'" :uppercase="true" :radius="true" title="tickets kaufen" data-bs-toggle="modal" data-bs-target="#exampleModal" />
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="bg-light py-5">
      <div class="container">
        <div class="row ">
          <div class="col-xl-10 col-lg-10">
            <p class="f2 text-dark-content text-center text-sm-start">
              Die Kontaktdaten Erfassung erfolg bei uns über die Corona Warnapp oder Luca. Wir empfehlen einer dieser Apps bereits vor Anreise zu installieren und registrieren um lange Wartezeiten an der Tür zu vermeiden
            </p>
            <div class="row">
              <div class="col-lg-6 mb-3">
                <card-container class="bg-brown-light" :radius="'medium'" :textAlign="'start'">
                  <template #body>
                    <img class="warnapp ms-2 mt-3" src="@/assets/warnapp.svg" alt="Laden sie die Corona-Warn-App aus dem Apple App Store Icon">
                    <div class="d-flex mt-4">
                      <div class="col-5">
                        <a class="icon-list-item d-block m" href="https://apps.apple.com/de/app/corona-warn-app/id1512595757" target="_blank" rel="noopener noreferrer">
                          <img src="@/assets/ios.svg" alt="Laden sie die Corona-Warn-App aus dem Apple App Store Icon">
                        </a>
                      </div>
                      <div class="col-5">
                        <a class="icon-list-item d-block" href="https://play.google.com/store/apps/details?id=de.rki.coronawarnapp" target="_blank" rel="noopener noreferrer">
                          <img src="@/assets/google-play.svg" alt="Laden sie die Corona-Warn-App aus dem Apple App Store Icon">
                        </a>
                      </div>
                    </div>
                  </template>
                </card-container>
              </div>
              <div class="col-lg-6 mb-3">
                <card-container class="lucaapp-card bg-transparent" :radius="'medium'" :textAlign="'start'">
                  <template #body>
                    <img class="lucalogo ms-2 mt-3" src="@/assets/luca_logo_48px.png" alt="Laden sie die Corona-Warn-App aus dem Apple App Store Icon">
                    <div class="d-flex mt-4">
                      <div class="col-5">
                        <a class="icon-list-item d-block m" href="https://apps.apple.com/de/app/luca-app/id1531742708" target="_blank" rel="noopener noreferrer">
                          <img src="@/assets/ios.svg" alt="Laden sie die Corona-Warn-App aus dem Apple App Store Icon">
                        </a>
                      </div>
                      <div class="col-5">
                        <a class="icon-list-item d-block" href="https://play.google.com/store/apps/details?id=de.culture4life.luca" target="_blank" rel="noopener noreferrer">
                          <img src="@/assets/google-play.svg" alt="Laden sie die Corona-Warn-App aus dem Apple App Store Icon">
                        </a>
                      </div>
                    </div>
                  </template>
                </card-container>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header bg-light">
            <h5 class="modal-title" id="exampleModalLabel">{{event.title}}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="resetStep()"></button>
          </div>
          <div class="modal-body bg-brown-light">
            <section class="reservations p-5">
              <template v-if="generateTicket">
                <ticket :ticketType="cuurentSelcet" :id="event.id" :title="event.title" :info="event.info" :day="event.date.day" :month="event.date.month" :time="event.date.time" :tickets="event.tickets" :spases="event.spases"></ticket>
              </template>
              <template v-if="!generateTicket">
                <div class="spinner-box d-flex justify-content-center py-5">
                  <div class="three-quarter-spinner"></div>
                </div>
              </template>
            </section>
          </div>
          <!-- <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div> -->
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Modal } from "bootstrap";

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
	data() {
		return {
			cuurentSelcet: "",
			generateTicket: false,
			isSelectOption: false,
			modal: null
		};
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
	methods: {
		reservationsSelcet(e) {
			var $self = this;
			setTimeout(() => {
				$self.generateTicket = true;
			}, 800);
			$self.isSelectOption = true;
			$self.cuurentSelcet = e.target.innerHTML;
		},
		resetStep() {
			this.cuurentStep = 1;
			this.generateTicket = false;
		}
	},
	mounted() {
		console.log(this.$refs.title);
		var myModalEl = document.querySelector("#myModal");
		this.modal = new Modal(myModalEl);

		myModalEl.toggle();
	},
	destroyed() {
		this.cuurentStep = 1;
	}
};
</script>

<style>
</style>
