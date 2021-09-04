<template>
  <div class="home">
    <section class="reservation-form pt-120 mb-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link uppercase active" id="table-tab" data-bs-toggle="tab" data-bs-target="#table" type="button" role="tab" aria-controls="table" aria-selected="true">Table</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link uppercase" id="event-tab" data-bs-toggle="tab" data-bs-target="#event" type="button" role="tab" aria-controls="event" aria-selected="false">event</button>
              </li>
            </ul>
            <div class="tab-content bg-white border-radius-large box-shadow-large overflow-hidden" id="myTabContent">
              <div class="tab-pane fade active show" id="table" role="tabpanel" aria-labelledby="table-tab">
                <div class="input-group input-group-lg">
                  <input type="datetime-local" aria-label="date time" class="form-control">
                  <input type="text" aria-label="Friends" class="form-control" placeholder="Friends">
                  <button-base :color="'gray-light'" :uppercase="true" :radius="true" :title="'reserve'" />
                </div>
              </div>
              <div class="tab-pane fade" id="event" role="tabpanel" aria-labelledby="event-tab">
                <div class="input-group input-group-lg">
                  <input type="search" aria-label="Search" class="form-control" placeholder="Search event">
                  <!-- <button class="btn main-btn bg-gray-light uppercase" type="button" id="button-addon1">Search</button> -->
                  <button-base :color="'gray-light'" :uppercase="true" :radius="true" :title="'Search'" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    <div class="upcoming-events mb-5">

      <div class="container">
        <h2 class="h2 text-white-heading text-center uppercase mb-4 mt-4">Upcoming events</h2>
        <div class="row">
          <div class="col-lg-4" v-for="event in events" :key="event.id">
            <card :title="event.title" :info="event.info" :img="event.img" :day="event.date.day" :month="event.date.month" :height="'md'" :link="event.link" :eventId="event.id" />
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button-base class="mt-4" :color="'yellow'" :uppercase="true" :radius="true" :title="'all events'" />
        </div>
      </div>
    </div>
    <section class="about-us">
      <div class="card-overlay py-5">
        <div class="container">
          <h2 class="h2 text-white-heading uppercase mb-4">CLUB HUCKEBEIN IN DARMSTADT - <br> RNB, HOUSE AND CLASSICS!</h2>
          <p class="f3 text-white-content">
            The Huckebein is not only the oldest club in Darmstadt, but also one of the most legendary and diverse clubs in the region. The Huckebein was converted from a cinema into a discotheque in 1974. The early days of the Huckebein were marked by spectacular revues and guest appearances by international artists.
          </p>
          <p class="f3 text-white-content">
            Even Latoya Jackson has taken the stage there before. Nowadays, the Huckebein has adapted to going out. Today a selection of the most popular DJs in the Rhein-Main area spin their records on Fridays, Saturdays and before public holidays.
          </p>
          <p class="f3 text-white-content">
            The cult location, which was newly renovated in July 2009, has lost none of its cosiness after the renovation. On the contrary, thanks to the combination of classic optics and the latest technology, the Huckebein has gained even more charm, which gives it an unbeatable cult factor in the Rhine-Main area. The Huckbein offers you a stylish ambience spread over two floors and three counters.
          </p>
        </div>
      </div>
    </section>

    <section class="gallery-block py-5">
      <div class="container">
        <h2 class="h2 text-white-heading text-center uppercase mb-4">
          Gallery
        </h2>
        <div class="gallery">

          <ul class="gallery__list">
            <li>
              <figure>
                <img src="https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-01-900x500.jpg" alt="Cover of DK on 12th Isle">
              </figure>
            </li>
            <li>
              <figure>
                <img src="https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-location-02.jpg" alt="A first look at dunes">
              </figure>
            </li>
            <li>
              <figure>
                <img src="https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-03-900x500.jpg" alt="K2-138 6 Planets Artwork (Artist's Illustration) ">
              </figure>
            </li>
            <li>
              <figure>
                <img src="https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-02-900x500.jpg" alt="Datassette – Existenzmaximum">
              </figure>
            </li>
            <li>
              <figure>
                <img src="https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-05-900x500.jpg" alt="Ezinu Crater">
              </figure>
            </li>
            <li>
              <figure>
                <img src="https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-location-01.jpg" alt="Polar Ice">
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <contact-us/>

  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/base/card/Card";
import ContactUs from "@/components/contacts/ContactUs";
import ButtonBase from "@/components/base/buttons/ButtonBase";
import { mapGetters } from "vuex";

export default {
	name: "Home",
	components: {
		Card,
		ContactUs,
		ButtonBase
	},
	data() {
		return {};
	},
	computed: {
		...mapGetters({
			events: "upcomingEvents"
		})
	}
};
</script>
