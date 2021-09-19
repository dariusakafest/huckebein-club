<template>
  <div class="home">
    <!-- Header -->
    <div class="bg-gradient-black pb-5">

      <header-image class="home-header " minHeight="100vh" contentDisplay="flex" flexAlign="end" :overlay="true" overlay-type="base">
        <template #background>
          <Carousel carouselId="carousel" />
        </template>
        <template #content>
          <Events />
        </template>
      </header-image>
      <!--  -->

      <!-- Gallery Section -->
      <Gallery />
      <!-- Tuor Section -->
      <Tour />
    </div>

    <!-- Newsletter Section -->
    <Newsletter />
    <!--  -->

    <!-- notification live youtube popup -->
    <div id="toastLive" class="toast toast-live bg-brown-light justify-content-between align-items-start" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex p-2 align-items-start w-100">
        <div class="toast-body">
          <div class="notification-live-icon md-icon mb-2">
            <LiveIcon />
          </div>
          <button-base class="text-btn h4 mb-0 text-white-content" data-bs-toggle="modal" data-bs-target="#exampleModal" title="we are live now join us" />

        </div>
        <button type="button" class="btn-close ms-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
    <!--  -->

    <!-- youtube popup -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header bg-light">
            <h5 class="modal-title" id="exampleModalLabel">event name</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body bg-brown-light p-0">
            <div class="youtube-live-wrap d-flex p-2 align-items-start w-100 h-100">
              <iframe src="https://www.youtube.com/embed/UZLA73ucgfY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
// @ is an alias to /src
import { Toast, Modal } from "bootstrap";
import HeaderImage from "@/components/base/header/HeaderImage";
import Carousel from "@/components/base/carousel/Carousel";
import Events from "@/components/events/Events";
import Gallery from "@/components/gallery/Gallery";
import Tour from "@/components/tour/Tour";
import Newsletter from "@/components/newsletter/Newsletter";
import LiveIcon from "@/components/svgs/LiveIcon";
import ButtonBase from "@/components/base/buttons/ButtonBase";

export default {
	name: "Home",
	components: {
		HeaderImage,
		Events,
		Carousel,
		Gallery,
		Tour,
		LiveIcon,
		Newsletter,
		ButtonBase
	},
	data() {
		return {
			toast: null,
			modal: null
		};
	},
	computed: {
		carousel: {
			get() {
				return this.$store.state.carousel;
			},
			set(value) {
				this.$store.commit("carousel", value);
			}
		}
	},
	methods: {
		ginToast() {
			var toastEl = document.getElementById("toastLive");
			this.toast = new Toast(toastEl, {
				autohide: false
			});

			return this.toast.show();
		}
	},
	mounted() {
		// console.log(toastEl);
		this.ginToast();

		var myModalEl2 = document.querySelector("#myModal2");
		this.modal = new Modal(myModalEl2);

		myModalEl2.toggle();
	}
	// destroyed() {
	// 	this.carousel = null;

	// }
};
</script>
