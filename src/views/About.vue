<template>
  <div class="about-page">
    <!-- Header Section -->
    <header-image backgroundImage="https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-01-900x500.jpg" minHeight="380px" contentDisplay="flex" flexAlign="end" :overlay="true" overlay-type="base">
      <!--  -->
    </header-image>
    <div class="bg-gradient-black pb-5">

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
import AboutUs from "@/components/aboutus/AboutUs";
import Tour from "@/components/tour/Tour";
import ContactUs from "@/components/contacts/ContactUs";
export default {
	name: "about",
	components: {
		HeaderImage,
		AboutUs,
		Tour,
		ContactUs
	}
};
</script>

<style>
</style>
