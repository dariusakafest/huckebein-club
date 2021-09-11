<template>
  <div class="about-page">
    <!-- Header Section -->
    <header-image backgroundImage="https://huckebein.facera.de/wp-content/uploads/2019/10/huckebein-01-900x500.jpg" minHeight="550px" contentDisplay="flex" flexAlign="end" :overlay="true" overlay-type="base">
      <!--  -->
    </header-image>
    <!-- About us Section -->
    <AboutUs />
    <!--  -->
    <!-- Tour Section -->
    <Tour class="my-5" />
    <!--  -->
    <!-- Contact us Section -->
    <ContactUs class="my-5" />
    <!--  -->
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
