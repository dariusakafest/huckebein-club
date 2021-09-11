<template>
  <div class="home">
    <!-- Header -->
    <header-image class="home-header" minHeight="100vh" contentDisplay="flex" flexAlign="end" :overlay="true" overlay-type="brown">
      <template #background>
        <div ref="carouselSlide" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block h-100" src="https://i.postimg.cc/Ls1QDjYH/70850018-2721181141245950-5741574919095844864-n.jpg" alt="Cover of DK on 12th Isle">
            </div>
            <div class="carousel-item">
              <img class="d-block h-100" src="https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-03-900x500.jpg" alt="K2-138 6 Planets Artwork (Artist's Illustration) ">
            </div>
            <div class="carousel-item">
              <img class="d-block h-100" src="https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-location-02.jpg" alt="A first look at dunes">
            </div>
          </div>
        </div>
      </template>
      <template #content>
        <Events />
      </template>
    </header-image>
    <!--  -->

    <!-- Gallery Section -->
    <Gallery />
    <!--  -->

    <!-- Tuor Section -->
    <Tour />
    <!--  -->

    <!-- Newsletter Section -->
    <Newsletter class="my-5" />
    <!--  -->

    <!-- Contact us Section -->
    <!-- <ContactUs/> -->
    <!--  -->
  </div>
</template>

<script>
// @ is an alias to /src
import { Carousel } from "bootstrap";
import HeaderImage from "@/components/base/header/HeaderImage";
import Events from "@/components/events/Events";
import Gallery from "@/components/gallery/Gallery";
import Tour from "@/components/tour/Tour";
import Newsletter from "@/components/newsletter/Newsletter";
// import ContactUs from "@/components/contacts/ContactUs";

export default {
	name: "Home",
	components: {
		HeaderImage,
		Events,
		// ContactUs,
		Gallery,
		Tour,
		Newsletter
	},
	data() {
		return {
			carousel: null,
		};
	},
	mounted() {
		var carouselElement = this.$refs.carouselSlide;
		this.carousel = new Carousel(carouselElement);
	}
};
</script>
