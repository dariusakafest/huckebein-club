<template>
  <div class="about-page">

    <div class="bg-gradient-black pb-5">
      <!-- Header Section -->
      <header-image class="home-header " minHeight="60vh" contentDisplay="flex" flexAlign="end" :overlay="true" overlay-type="base">
        <template #background>
          <Carousel carouselId="carousel" />
        </template>
        <template #content>
          <Events />
        </template>
      </header-image>
      <!--  -->
      <!-- About us Section -->
      <AboutUs />
      <!--  -->
      <!-- Tour Section -->
      <Tour class="my-5" colxl="12" />
      <!--  -->
      <!-- Contact us Section -->
      <ContactUs class="my-5" />
      <!--  -->
    </div>
  </div>

</template>

<script>
import HeaderImage from "@/components/base/header/HeaderImage";
import Carousel from "@/components/base/carousel/Carousel";
import AboutUs from "@/components/aboutus/AboutUs";
import Tour from "@/components/tour/Tour";
import ContactUs from "@/components/contacts/ContactUs";
export default {
	name: "about",
	components: {
		HeaderImage,
		AboutUs,
		Tour,
		Carousel,
		ContactUs
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

<style>
</style>
