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

    <!-- Contact us Section -->
    <!-- <ContactUs/> -->
    <!--  -->
  </div>
</template>

<script>
// @ is an alias to /src

import HeaderImage from "@/components/base/header/HeaderImage";
import Carousel from "@/components/base/carousel/Carousel";
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
		Carousel,
		Gallery,
		Tour,
		Newsletter
	},
	data() {
		return {};
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
	mounted() {}
	// destroyed() {
	// 	this.carousel = null;
	// }
};
</script>
